"use client";

export default function ServiceSwitchLink({ serviceId, className, children }) {
  const href = `#services-${serviceId}`;

  const handleClick = (event) => {
    event.preventDefault();
    history.pushState(null, "", href);
    window.dispatchEvent(
      new CustomEvent("kawabit:select-service", {
        detail: { serviceId },
      })
    );
  };

  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
