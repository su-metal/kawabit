"use client";

export default function ServiceSwitchLink({ serviceId, className, children }) {
  const handleClick = (event) => {
    event.preventDefault();
    window.dispatchEvent(
      new CustomEvent("kawabit:select-service", {
        detail: { serviceId },
      })
    );
  };

  return (
    <a className={className} href="#services" onClick={handleClick}>
      {children}
    </a>
  );
}
