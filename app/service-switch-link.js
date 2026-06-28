export default function ServiceSwitchLink({ serviceId, className, children }) {
  return (
    <a
      className={className}
      href={`#services-${serviceId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
