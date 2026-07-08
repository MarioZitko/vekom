export default function ProizvodiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative bg-dot-grid bg-brand-wash"
      style={{ paddingTop: 'var(--header-h)' }}
    >
      {children}
    </div>
  );
}
