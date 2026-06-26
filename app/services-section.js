"use client";

import { useState } from "react";
import Spot from "./spot";

export default function ServicesSection({ services }) {
  const [active, setActive] = useState(services[0].id);

  return (
    <section className="services section" id="services">
      <div className="services__tabs" role="tablist" aria-label="サービスを切り替え">
        {services.map((service, index) => (
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
            <span className="services__tab-num">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="services__tab-label">{service.label}</span>
            <span className="services__tab-title">{service.title}</span>
          </button>
        ))}
      </div>

      {services.map((service, index) => (
        <article
          key={service.id}
          id={`services-panel-${service.id}`}
          role="tabpanel"
          aria-labelledby={`services-tab-${service.id}`}
          hidden={active !== service.id}
          className={`service service--${service.id} reveal is-visible`}
        >
          <div className="service__marker">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <b>{service.label}</b>
          </div>
          <div className="service__body">
            <p className="service__title">{service.title}</p>
            <h2>{service.lead}</h2>
            <p>{service.body}</p>
            <dl>
              <div>
                <dt>専門サイト</dt>
                <dd>{service.name}</dd>
              </div>
              <div>
                <dt>電話</dt>
                <dd>{service.phone}</dd>
              </div>
            </dl>
            <a className="text-link" href={service.href}>
              {service.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <Spot name={service.spot} className="service__spot" />
          <div className="service__points">
            <p className="service__points-label">選ばれる理由</p>
            <ol className="service__points-list">
              {service.points.map((point, i) => (
                <li className="service__point" key={point.title}>
                  <div className="service__point-head">
                    <span className="service__point-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="service__point-tag">{point.tag}</span>
                  </div>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </article>
      ))}
    </section>
  );
}
