'use client';

import React, { useState, useEffect } from "react";

const tickerItems = Array.from({ length: 8 });

function TickerGroup({ ariaHidden = false }) {
  return (
    <div className="ticker-group" aria-hidden={ariaHidden}>
      {tickerItems.map((_, index) => (
        <React.Fragment key={index}>
          <span className="ticker-item">KAWABIT — 学びもITも、ここから相談。</span>
          <span className="ticker-separator">●</span>
        </React.Fragment>
      ))}
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isScrolled) {
    return (
      <header className="site-header site-header--normal">
        <a
          className="brand"
          href="#top"
          aria-label="カワビット トップへ"
        >
          <img src="/logo/KAWABIT name.png" alt="カワビット" />
          <span className="brand__company">株式会社カワビット</span>
        </a>
        <nav className="site-nav" aria-label="主要ナビゲーション">
          <a href="#services">
            サービス
          </a>
          <a href="#contact">
            相談する
          </a>
        </nav>
        <a
          className="header-cta"
          href="#contact"
        >
          相談する
        </a>
      </header>
    );
  }

  return (
    <header className="site-header site-header--ticker">
      <div className="ticker-wrap">
        <div className="ticker-track">
          <TickerGroup />
          <TickerGroup ariaHidden />
        </div>
      </div>
    </header>
  );
}
