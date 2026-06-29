"use client";

import { useEffect, useMemo, useState } from "react";

export default function ServicesSection({
  services,
  pricingByService,
  issuesByService,
  voicesByService,
  faqsByService,
}) {
  const [active, setActive] = useState(services[0].id);
  const serviceIds = useMemo(() => services.map((service) => service.id), [services]);
  const getIllustClass = (baseClass, fileName) =>
    `${baseClass} ${
      fileName.startsWith("study-voice-parent-smile")
        ? `${baseClass}--study-parent-smile`
        : ""
    }`;
  const getServiceIdFromHash = (hash) => {
    const match = hash.match(/^#services-(.+)$/);
    return match && serviceIds.includes(match[1]) ? match[1] : null;
  };

  useEffect(() => {
    const activateServiceTab = (serviceId, shouldScroll = true) => {
      setActive(serviceId);

      if (shouldScroll) {
        scrollToServices();
      }
    };

    const scrollToServices = () => {
      const target = document.getElementById("services");
      const header = document.querySelector(".site-header");

      if (!target) {
        return;
      }

      const headerHeight = header?.getBoundingClientRect().height ?? 0;
      const breathingRoom = window.matchMedia("(max-width: 640px)").matches ? 24 : 64;
      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        breathingRoom;

      window.scrollTo({
        top: Math.max(top, 0),
        behavior: "smooth",
      });
    };

    const activateFromHash = (shouldScroll = false) => {
      const serviceId = getServiceIdFromHash(window.location.hash);

      if (!serviceId) {
        return;
      }

      activateServiceTab(serviceId, shouldScroll);
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`
      );
    };

    const handleHashChange = () => activateFromHash(true);
    const handleServiceSelect = (event) => {
      const serviceId = event.detail?.serviceId;

      if (serviceIds.includes(serviceId)) {
        activateServiceTab(serviceId);
      }
    };

    activateFromHash(true);
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("kawabit:select-service", handleServiceSelect);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("kawabit:select-service", handleServiceSelect);
    };
  }, [serviceIds]);

  return (
    <section className="services section" id="services">
      <div className="services__intro reveal">
        <div className="services__intro-main">
          <div className="services__intro-badge">
            <span className="services__intro-circle" />
            <span className="services__intro-label">サービスは、ふたつ</span>
          </div>
          <h2 className="services__intro-title">学びと、パソコンの相談先。</h2>
          <p className="services__intro-tagline">学びもITも、同じ入口から。</p>
          <div className="services__intro-text">
            <p>勉強のことなら「かわべ家庭教師学院」。</p>
            <p>パソコンのことなら「川辺コンピューター」。</p>
            <p>気になるタブをのぞいてみてください。</p>
          </div>
        </div>
      </div>

      <div className="services__tabs reveal reveal-stagger" role="tablist" aria-label="サービスを切り替え">
        {services.map((service) => (
          <button
            key={service.id}
            type="button"
            role="tab"
            id={`services-tab-${service.id}`}
            aria-selected={active === service.id}
            aria-controls={`services-panel-${service.id}`}
            className={`services__tab services__tab--${service.id} ${
              active === service.id ? "is-active" : ""
            }`}
            onClick={() => setActive(service.id)}
          >
            <img
              className="services__tab-spot"
              src={`/illustrations/used/${service.tabIllust}`}
              alt=""
              aria-hidden="true"
            />
            <span className="services__tab-label">{service.label}の相談</span>
            <span className="services__tab-title">{service.title}へ</span>
            <span className="services__tab-text">
              {service.id === "study"
                ? "勉強方法、成績、受験、学習習慣の相談はこちら。"
                : "起動しない、遅い、データ復旧、設定の相談はこちら。"}
            </span>
          </button>
        ))}
      </div>

      {services.map((service) => {
        const pricing = pricingByService[service.id];
        const issues = issuesByService[service.id];
        const voices = voicesByService[service.id];
        const faqs = faqsByService[service.id];
        const phoneHref = `tel:${service.phone.replace(/-/g, "")}`;
        const reasonsLabel =
          service.id === "it" ? "相談しやすい理由" : "はじめやすい理由";
        const pricingLabel =
          service.id === "it" ? "料金の目安と流れ" : "料金とはじめ方";

        return (
          <article
            key={service.id}
            id={`services-panel-${service.id}`}
            role="tabpanel"
            aria-labelledby={`services-tab-${service.id}`}
            hidden={active !== service.id}
            className={`service service--${service.id}`}
          >
            <div className="panel__intro">
              <div className="panel__intro-copy">
                {service.id === "study" && (
                  <span className="panel__intro-sticker panel__intro-sticker--study">
                    とことん伴走！
                  </span>
                )}
                {service.id === "it" && (
                  <span className="panel__intro-sticker panel__intro-sticker--it">
                    修理♡ラブ
                  </span>
                )}
                <h2>
                  {service.id === "study" ? (
                    <>
                      勉強のつまずきから、
                      <br className="panel__intro-title-break" />
                      受験の相談まで
                    </>
                  ) : (
                    <>
                      パソコンの「困った！」を、
                      <br className="panel__intro-title-break" />
                      サクッと解決。
                    </>
                  )}
                </h2>
                {service.tags && service.tags.length > 0 && (
                  <ul className="panel__intro-tags">
                    {service.tags.map((tag) => (
                      <li className="panel__intro-tag" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="panel__intro-body">{service.body}</p>
              </div>
              <div className="panel__intro-stage">
                <img
                  className={getIllustClass("panel__intro-spot", service.panelIllust)}
                  src={`/illustrations/used/${service.panelIllust}`}
                  alt=""
                  aria-hidden="true"
                />
                {service.bubbles && (
                  <>
                    <span className="panel__intro-bubble panel__intro-bubble--ask">
                      {service.bubbles.ask}
                    </span>
                    <span className="panel__intro-bubble panel__intro-bubble--answer">
                      {service.bubbles.answer}
                    </span>
                  </>
                )}
              </div>
            </div>

            <section className="panel__reasons">
              <p className="panel__section-label">{reasonsLabel}</p>
              <ol className="panel__reasons-list">
                {service.points.map((point, i) => (
                  <li className="panel__reason" key={point.title}>
                    <div className="panel__reason-head">
                      <span className="panel__reason-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="panel__reason-tag">{point.tag}</span>
                    </div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="panel__pricing">
              <p className="panel__section-label">{pricingLabel}</p>
              <div className="panel__pricing-card">
                <header className="panel__pricing-head">
                  <span className="panel__pricing-tag">{pricing.label}</span>
                  <p className="panel__pricing-name">{pricing.name}</p>
                </header>
                <ul className="panel__pricing-rows">
                  {pricing.items.map((item) => (
                    <li className="panel__pricing-row" key={item.title}>
                      <p className="panel__pricing-row-title">{item.title}</p>
                      <p className="panel__pricing-row-value">{item.value}</p>
                      <p className="panel__pricing-row-note">{item.note}</p>
                    </li>
                  ))}
                </ul>
                <p className="panel__pricing-extra">{pricing.extra}</p>
              </div>
            </section>

            <section className="panel__issues">
              <p className="panel__section-label">{issues.title}</p>
              <ul className="panel__issues-list">
                {issues.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="panel__voices">
              <p className="panel__section-label">相談後のひとこと</p>
              <div className="panel__voices-list">
                {voices.map((voice) => (
                  <article className="panel__voice" key={voice.body}>
                    <img
                      className={getIllustClass("panel__voice-art", voice.illust)}
                      src={`/illustrations/used/${voice.illust}`}
                      alt=""
                      aria-hidden="true"
                    />
                    <p className="panel__voice-body">{voice.body}</p>
                    <p className="panel__voice-attr">{voice.attr}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="panel__faq">
              <p className="panel__section-label">よく聞かれること</p>
              <div className="panel__faq-list">
                {faqs.map((item) => (
                  <details className="panel__faq-item" key={item.q}>
                    <summary className="panel__faq-summary">
                      <span className="panel__faq-mark" aria-hidden="true">
                        Q
                      </span>
                      <span className="panel__faq-question">{item.q}</span>
                      <span className="panel__faq-chevron" aria-hidden="true" />
                    </summary>
                    <div className="panel__faq-body">
                      <span
                        className="panel__faq-mark panel__faq-mark--a"
                        aria-hidden="true"
                      >
                        A
                      </span>
                      <p>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="panel__contact">
              <p className="panel__section-label">相談はこちら</p>
              <dl className="panel__contact-info">
                <div>
                  <dt>専門サイト</dt>
                  <dd>{service.name}</dd>
                </div>
                <div>
                  <dt>電話</dt>
                  <dd>
                    <a
                      href={phoneHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {service.phone}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                className="panel__contact-cta"
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {service.cta}
                <span aria-hidden="true">→</span>
              </a>
            </section>
          </article>
        );
      })}
    </section>
  );
}
