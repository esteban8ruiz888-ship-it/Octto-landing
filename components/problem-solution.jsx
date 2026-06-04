// Problem + Solution sections — Español

const ProblemSection = () => {
  const tools = [
    { name: 'Shopify', c: '#95BF47' },
    { name: 'QuickBooks', c: '#2CA01C' },
    { name: 'HubSpot', c: '#FF7A59' },
    { name: 'Siigo', c: '#004A8F' },
    { name: 'WhatsApp', c: '#25D366' },
    { name: 'Google Sheets', c: '#0F9D58' },
    { name: 'Mailchimp', c: '#FFE01B' },
    { name: 'Stripe', c: '#635BFF' },
    { name: 'Zapier', c: '#FF4A00' },
    { name: 'Notion', c: '#ffffff' },
    { name: 'Slack', c: '#4A154B' },
    { name: 'Zoho', c: '#E42527' },
    { name: 'Alegra', c: '#00C389' },
    { name: 'Trello', c: '#0079BF' },
    { name: 'Excel', c: '#217346' },
  ];

  return (
    <section className="section-pad" style={{ position: 'relative', overflow: 'hidden' }} id="problem">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>El problema real</div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 20, maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
            Mientras tú operas <span style={{ color: '#ff6b7a' }}>12 herramientas rotas,</span> tu competencia ya usa IA.
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: 18, maxWidth: 640, margin: '0 auto', lineHeight: 1.55 }}>
            Copiar datos entre sistemas, conciliar a mano, tomar decisiones con información vieja — cada minuto que gastas operando software es un minuto que no usas para crecer.
          </p>
        </div>

        <div style={{ position: 'relative', minHeight: 420, marginBottom: 64 }}>
          <ChaosField tools={tools} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {[
            { n: '14 hrs', l: 'perdidas cada semana en trabajo que la IA hace en segundos', sub: 'Prom. dueño de PyME' },
            { n: '$120M', l: 'quemados al año pagando software que no piensa', sub: 'Por equipo de 10' },
            { n: '23%', l: 'de las decisiones se toman con datos obsoletos — la IA nunca lo haría', sub: 'Prom. de la industria' },
            { n: '1 de 5', l: 'ventas perdidas porque ningún humano estaba disponible', sub: 'Retail + e-commerce' },
          ].map((m, i) => (
            <div key={i} className="card" style={{ padding: 24 }}>
              <div className="display gradient-accent" style={{ fontSize: 44, marginBottom: 6, lineHeight: 1 }}>{m.n}</div>
              <div style={{ color: 'var(--text)', fontSize: 14, marginBottom: 10, lineHeight: 1.45 }}>{m.l}</div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChaosField = ({ tools }) => {
  const positions = [
    { x: 6, y: 10, r: -8 },   { x: 22, y: 30, r: 5 },
    { x: 38, y: 8, r: 11 },   { x: 56, y: 22, r: -4 },
    { x: 74, y: 4, r: 7 },    { x: 88, y: 28, r: -9 },
    { x: 12, y: 55, r: 6 },   { x: 32, y: 68, r: -11 },
    { x: 50, y: 52, r: 3 },   { x: 68, y: 64, r: -6 },
    { x: 84, y: 58, r: 9 },   { x: 4, y: 82, r: -5 },
    { x: 24, y: 88, r: 8 },   { x: 46, y: 84, r: -3 },
    { x: 64, y: 92, r: 4 },
  ];
  return (
    <div style={{ position: 'relative', width: '100%', height: 460 }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} preserveAspectRatio="none" viewBox="0 0 100 100">
        {positions.flatMap((p, i) =>
          positions.slice(i + 1, Math.min(i + 3, positions.length)).map((q, j) => (
            <path
              key={`${i}-${j}`}
              d={`M ${p.x} ${p.y} Q ${(p.x + q.x) / 2 + (Math.sin(i) * 10)} ${(p.y + q.y) / 2 + (Math.cos(j) * 10)}, ${q.x} ${q.y}`}
              stroke="rgba(255,107,122,0.18)"
              strokeWidth="0.15"
              fill="none"
              strokeDasharray="0.6 0.4"
            />
          ))
        )}
      </svg>

      {tools.map((t, i) => {
        const p = positions[i] || { x: 50, y: 50, r: 0 };
        return (
          <div
            key={t.name}
            style={{
              position: 'absolute',
              left: `${p.x}%`, top: `${p.y}%`,
              transform: `translate(-50%, -50%) rotate(${p.r}deg)`,
              padding: '9px 14px',
              borderRadius: 10,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--line-strong)',
              backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 13, fontWeight: 600,
              color: 'var(--text)',
              whiteSpace: 'nowrap',
            }}
            className="animate-float"
          >
            <span style={{ width: 8, height: 8, borderRadius: 2, background: t.c, boxShadow: `0 0 8px ${t.c}40` }} />
            {t.name}
          </div>
        );
      })}

      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        padding: '14px 24px', borderRadius: 999,
        background: 'rgba(11,15,26,0.9)',
        border: '1px solid rgba(255,107,122,0.35)',
        boxShadow: '0 0 40px rgba(255,107,122,0.3)',
        display: 'flex', alignItems: 'center', gap: 10,
        fontSize: 13, fontWeight: 600,
        color: '#ffb5bd',
      }}>
        <span style={{ width: 8, height: 8, borderRadius: 50, background: '#ff6b7a' }} className="animate-pulse-glow" />
        Fragmentado · Lento · Caro
      </div>
    </div>
  );
};

const SolutionSection = () => {
  const [activeModule, setActiveModule] = React.useState(0);
  const modules = [
    { icon: 'pos', name: 'Ventas & POS', desc: 'IA que cobra, factura y actualiza inventario en una sola acción. Vende más rápido, sin errores humanos.' },
    { icon: 'invoice', name: 'Facturación DIAN', desc: 'Cada venta genera factura electrónica legal automáticamente. Cero rechazos, cero trabajo manual.' },
    { icon: 'inventory', name: 'Inventario con IA', desc: 'La IA predice qué se agota, cuándo reordenar y qué estás perdiendo. Tu stock nunca vuelve a fallar.' },
    { icon: 'crm', name: 'CRM Inteligente', desc: 'IA que recuerda cada cliente, detecta quién va a dejar de comprar y lanza campañas de retención sola.' },
    { icon: 'ecommerce', name: 'E-commerce IA', desc: 'Tienda online que se optimiza sola: precios dinámicos, recuperación de carritos y recomendaciones personalizadas por IA.' },
    { icon: 'finance', name: 'Finanzas Automáticas', desc: 'La IA concilia bancos, cierra libros y genera reportes fiscales. Tu contador recibe todo listo.' },
    { icon: 'hr', name: 'Nómina & RR.HH.', desc: 'Nómina calculada, liquidada y reportada sin intervención humana. Cumplimiento laboral en autopilot.' },
    { icon: 'logistics', name: 'Logística IA', desc: 'Ruteo inteligente, guías automáticas y tracking unificado. La IA elige la transportadora más barata y rápida.' },
  ];

  return (
    <section className="section-pad" style={{ position: 'relative', overflow: 'hidden' }} id="platform">
      <div className="glow-orb" style={{ width: 600, height: 600, top: '20%', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', opacity: 0.15 }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>El sistema operativo IA</div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 68px)', marginBottom: 20, maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
            Un cerebro de IA. <span className="gradient-text">Todo tu negocio conectado.</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: 18, maxWidth: 640, margin: '0 auto', lineHeight: 1.55 }}>
            No es software que tú operas. Es inteligencia artificial que opera tu negocio completo — 8 sistemas unificados por un único motor de IA que aprende, decide y ejecuta.
          </p>
        </div>

        <EcosystemHub modules={modules} active={activeModule} setActive={setActiveModule} />

        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
          {modules.map((m, i) => (
            <div
              key={m.name}
              onMouseEnter={() => setActiveModule(i)}
              className="card"
              style={{
                padding: 18,
                cursor: 'pointer',
                transition: 'all .3s',
                borderColor: activeModule === i ? 'rgba(122,92,255,0.45)' : 'var(--line)',
                background: activeModule === i ? 'linear-gradient(180deg, rgba(122,92,255,0.1) 0%, rgba(122,92,255,0.02) 100%)' : undefined,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: activeModule === i ? 'linear-gradient(135deg, var(--secondary), var(--primary))' : 'rgba(255,255,255,0.04)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all .3s',
                }}>
                  <Icon name={m.icon} size={16} color={activeModule === i ? '#fff' : 'var(--secondary)'} />
                </div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{m.name}</div>
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--text-dim)', lineHeight: 1.5 }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EcosystemHub = ({ modules, active, setActive }) => {
  const size = 520;
  const radius = 210;
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: size, margin: '0 auto', aspectRatio: '1/1' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id="hub-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <g className="animate-spin-slow" style={{ transformOrigin: 'center' }}>
          <circle cx={size/2} cy={size/2} r={radius + 30} fill="none" stroke="url(#hub-ring)" strokeWidth="1" strokeDasharray="2 4" />
        </g>
        <circle cx={size/2} cy={size/2} r={radius - 10} fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx={size/2} cy={size/2} r={110} fill="none" stroke="rgba(122,92,255,0.25)" strokeWidth="1" />

        {modules.map((m, i) => {
          const angle = (i / modules.length) * Math.PI * 2 - Math.PI / 2;
          const x = size/2 + Math.cos(angle) * radius;
          const y = size/2 + Math.sin(angle) * radius;
          return (
            <line
              key={i}
              x1={size/2} y1={size/2} x2={x} y2={y}
              stroke={active === i ? 'var(--secondary)' : 'rgba(122,92,255,0.22)'}
              strokeWidth={active === i ? 1.5 : 1}
              strokeDasharray={active === i ? 'none' : '3 4'}
              style={{ transition: 'all .3s' }}
            />
          );
        })}
      </svg>

      {/* Center mascot with bright backdrop */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 240, height: 240, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(140,110,255,0.65) 0%, rgba(100,70,220,0.4) 40%, transparent 75%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        filter: 'blur(0px)',
      }}>
        <div style={{
          position: 'absolute', width: 200, height: 200, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220,210,255,0.3) 0%, transparent 60%)',
          filter: 'blur(12px)',
        }} />
        <img src="assets/octto-mascot-transparent.png" alt="OCTTO" className="animate-float" style={{
          width: 180, height: 180, objectFit: 'contain', position: 'relative',
          filter: 'drop-shadow(0 0 20px rgba(184,158,255,0.7)) drop-shadow(0 0 40px rgba(122,92,255,0.5))',
        }} />
      </div>

      {modules.map((m, i) => {
        const angle = (i / modules.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * (radius / size * 100);
        const y = 50 + Math.sin(angle) * (radius / size * 100);
        const isActive = active === i;
        return (
          <div
            key={m.name}
            onMouseEnter={() => setActive(i)}
            style={{
              position: 'absolute',
              left: `${x}%`, top: `${y}%`,
              transform: 'translate(-50%, -50%)',
              width: 82, height: 82, borderRadius: 16,
              background: isActive
                ? 'linear-gradient(180deg, rgba(122,92,255,0.25), rgba(91,61,245,0.12))'
                : 'rgba(18,26,46,0.9)',
              border: isActive ? '1px solid rgba(122,92,255,0.55)' : '1px solid var(--line-strong)',
              backdropFilter: 'blur(12px)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: 6,
              cursor: 'pointer',
              transition: 'all .3s',
              boxShadow: isActive ? '0 0 30px rgba(122,92,255,0.5)' : 'none',
            }}
          >
            <Icon name={m.icon} size={22} color={isActive ? 'var(--secondary)' : 'var(--text-dim)'} />
            <div style={{ fontSize: 9, fontWeight: 600, textAlign: 'center', lineHeight: 1.1, color: isActive ? '#fff' : 'var(--text-dim)', padding: '0 4px' }}>
              {m.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Object.assign(window, { ProblemSection, SolutionSection });
