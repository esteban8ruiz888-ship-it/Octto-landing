// OCTTO — Shared iconography + visual components (ES)

const Logo = ({ size = 28 }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <img src="assets/octto-mascot-transparent.png" alt="OCTTO" style={{ width: size * 1.35, height: size * 1.35, objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(184,158,255,0.7))' }} />
    <span style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 20, letterSpacing: '-0.04em', color: '#fff' }}>
      OCTTO
    </span>
  </div>
);

const Icon = ({ name, size = 22, color = 'currentColor', strokeWidth = 1.6 }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    'pos': <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/><circle cx="7" cy="15" r="1"/><path d="M11 15h6"/></>,
    'invoice': <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M8 13h8M8 17h5"/></>,
    'inventory': <><path d="M21 8V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></>,
    'crm': <><circle cx="9" cy="8" r="4"/><path d="M3 21v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2"/><circle cx="17" cy="6" r="3"/><path d="M21 13v-1a3 3 0 0 0-3-3"/></>,
    'ecommerce': <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></>,
    'finance': <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
    'hr': <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    'logistics': <><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
    'chatbot': <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><circle cx="9" cy="10" r="1" fill={color}/><circle cx="15" cy="10" r="1" fill={color}/><path d="M9 14h6"/></>,
    'automation': <><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></>,
    'insights': <><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/><circle cx="7" cy="14" r="1.5" fill={color}/><circle cx="20" cy="9" r="1.5" fill={color}/></>,
    'sparkle': <><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></>,
    'arrow-right': <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    'check': <polyline points="20 6 9 17 4 12"/>,
    'x': <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    'plus': <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    'zap': <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
    'shield': <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    'trending': <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>,
    'globe': <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/></>,
    'lock': <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
    'cpu': <><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
};

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const linkStyle = { color: 'var(--text-dim)', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color .2s' };
  return (
    <nav style={{
      position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)',
      zIndex: 50, width: 'calc(100% - 32px)', maxWidth: 1200,
      padding: '12px 18px 12px 18px',
      borderRadius: 999,
      background: scrolled ? 'rgba(11,15,26,0.7)' : 'rgba(11,15,26,0.35)',
      border: '1px solid var(--line)',
      backdropFilter: 'blur(18px) saturate(1.4)',
      WebkitBackdropFilter: 'blur(18px) saturate(1.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'background .3s',
    }}>
      <Logo size={22} />
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="nav-links">
        <a href="#platform" style={linkStyle}>Plataforma</a>
        <a href="#ai" style={linkStyle}>IA</a>
        <a href="#solutions" style={linkStyle}>Soluciones</a>
        <a href="#integrations" style={linkStyle}>Integraciones</a>
        <a href="#pricing" style={linkStyle}>Precios</a>
      </div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <a href="https://app.octto.co" style={{ ...linkStyle, fontSize: 14 }}>Iniciar sesión</a>
        <a href="#demo" className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 13 }}>
          Agendar demo
          <Icon name="arrow-right" size={14} />
        </a>
      </div>
    </nav>
  );
};

Object.assign(window, { Logo, Icon, Nav });
