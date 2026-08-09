const KAWABE_PATH_PREFIX = "/kawabe";

function isKawabePath(pathname) {
  return pathname === KAWABE_PATH_PREFIX || pathname.startsWith(`${KAWABE_PATH_PREFIX}/`);
}

function createUpstreamUrl(requestUrl, upstreamOrigin) {
  const incomingUrl = new URL(requestUrl);
  const upstreamUrl = new URL(upstreamOrigin);

  upstreamUrl.pathname = incomingUrl.pathname;
  upstreamUrl.search = incomingUrl.search;

  return upstreamUrl;
}

function rewriteUpstreamLocation(location, upstreamOrigin, publicOrigin) {
  const upstreamUrl = new URL(upstreamOrigin);
  const publicUrl = new URL(publicOrigin);
  const locationUrl = new URL(location, upstreamUrl);

  if (locationUrl.origin !== upstreamUrl.origin || !isKawabePath(locationUrl.pathname)) {
    return location;
  }

  locationUrl.protocol = publicUrl.protocol;
  locationUrl.host = publicUrl.host;

  return locationUrl.toString();
}

export default {
  async fetch(request, env) {
    const requestUrl = new URL(request.url);

    if (!isKawabePath(requestUrl.pathname)) {
      return new Response("Not found", { status: 404 });
    }

    const upstreamUrl = createUpstreamUrl(request.url, env.UPSTREAM_ORIGIN);
    const headers = new Headers(request.headers);
    headers.delete("host");
    headers.set("X-Forwarded-Host", requestUrl.host);
    headers.set("X-Forwarded-Proto", requestUrl.protocol.replace(":", ""));

    try {
      const upstreamResponse = await fetch(
        new Request(upstreamUrl, {
          method: request.method,
          headers,
          body: request.body,
          redirect: "manual",
        }),
      );
      const responseHeaders = new Headers(upstreamResponse.headers);
      const location = responseHeaders.get("location");

      if (location) {
        responseHeaders.set(
          "location",
          rewriteUpstreamLocation(location, env.UPSTREAM_ORIGIN, env.PUBLIC_ORIGIN),
        );
      }

      return new Response(upstreamResponse.body, {
        status: upstreamResponse.status,
        statusText: upstreamResponse.statusText,
        headers: responseHeaders,
      });
    } catch (error) {
      console.error("Failed to reach the Kawabe WordPress origin", {
        path: requestUrl.pathname,
        message: error instanceof Error ? error.message : "Unknown error",
      });

      return new Response("WordPress origin is temporarily unavailable.", {
        status: 502,
        headers: { "content-type": "text/plain; charset=UTF-8" },
      });
    }
  },
};
