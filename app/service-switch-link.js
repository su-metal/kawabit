export default function ServiceSwitchLink({ serviceId, className, children }) {
  return (
    <a
      className={className}
      href={`#services-${serviceId}`}
    >
      {children}
    </a>
  );
}
