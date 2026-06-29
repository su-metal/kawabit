'use client';

import React, { useState, useEffect } from "react";

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
          aria-label="KAWABIT トップへ"
        >
          KAWABIT
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
          <span className="ticker-item">KAWABIT — 学びもITも、ここから相談。</span>
          <span className="ticker-separator">●</span>
          <span className="ticker-item">KAWABIT — 学びもITも、ここから相談。</span>
          <span className="ticker-separator">●</span>
          <span className="ticker-item">KAWABIT — 学びもITも、ここから相談。</span>
          <span className="ticker-separator">●</span>
          <span className="ticker-item">KAWABIT — 学びもITも、ここから相談。</span>
          <span className="ticker-separator">●</span>
          <span className="ticker-item">KAWABIT — 学びもITも、ここから相談。</span>
          <span className="ticker-separator">●</span>
          <span className="ticker-item">KAWABIT — 学びもITも、ここから相談。</span>
          <span className="ticker-separator">●</span>
          <span className="ticker-item">KAWABIT — 学びもITも、ここから相談。</span>
          <span className="ticker-separator">●</span>
          <span className="ticker-item">KAWABIT — 学びもITも、ここから相談。</span>
          <span className="ticker-separator">●</span>
        </div>
      </div>
    </header>
  );
}
