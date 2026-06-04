// Hero — Español

const Hero = () => {
  const [liveMetric, setLiveMetric] = React.useState(2847293);
  React.useEffect(() => {
    const i = setInterval(() => setLiveMetric(m => m + Math.floor(Math.random() * 340)), 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <section style={{ position: 'relative', minHeight: '100vh', paddingTop: 140, paddingBottom: 80, overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: 600, height: 600, top: -200, left: -150, background: 'var(--primary)', opacity: 0.32 }} />
      <div className="glow-orb" style={{ width: 520, height: 520, top: 100, right: -150, background: 'var(--secondary)', opacity: 0.28 }} />
      <div className="glow-orb" style={{ width: 400, height: 400, bottom: -100, left: '40%', background: 'var(--accent)', opacity: 0.08 }} />

      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(122,92,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(122,92,255,0.05) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <div className="pill" style={{ padding: '8px 14px 8px 8px' }}>
            <span style={{ background: 'linear-gradient(135deg, var(--secondary), var(--primary))', padding: '3px 8px', borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#fff' }}>NUEVO</span>
            <span>OCTTO Intelligence 2.0 — IA que opera tu negocio mientras duermes</span>
            <Icon name="arrow-right" size={12} />
          </div>
        </div>

        {/* Mascot + headline side-by-side on desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 40, marginBottom: 48 }} className="hero-grid">
          <div>
            <h1 className="display" style={{ fontSize: 'clamp(44px, 5.6vw, 88px)', marginBottom: 24 }}>
              <span style={{ color: '#fff' }}>Deja de operar.</span>
              <br />
              <span className="gradient-text">La IA opera por ti.</span>
              <br />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span className="gradient-accent" style={{ fontStyle: 'italic' }}>En piloto automático.</span>
                <svg style={{ position: 'absolute', bottom: -8, left: 0, width: '100%', height: 16 }} viewBox="0 0 300 16" preserveAspectRatio="none">
                  <path d="M5 10 Q 75 2, 150 8 T 295 6" stroke="var(--accent)" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 1.3vw, 19px)',
              color: 'var(--text-dim)',
              maxWidth: 520,
              marginBottom: 36,
              lineHeight: 1.55,
            }}>
              OCTTO no es otro software más. Es un sistema de inteligencia artificial que reemplaza tus herramientas, elimina el trabajo manual y opera tu negocio completo — ventas, inventario, finanzas, CRM y logística — sin que toques nada.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#demo" className="btn btn-primary" style={{ padding: '15px 26px', fontSize: 15 }}>
                Agendar demo en vivo
                <Icon name="arrow-right" size={16} />
              </a>
              <a href="#platform" className="btn btn-ghost" style={{ padding: '15px 26px', fontSize: 15 }}>
                <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="8" height="8" viewBox="0 0 8 8"><polygon points="1,0 7,4 1,8" fill="#fff"/></svg>
                </span>
                Ver demo de 2 min
              </a>
            </div>
          </div>

          {/* Mascot with bright visible backdrop */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 460 }} className="hero-mascot">
            {/* Solid bright circle backdrop so mascot pops */}
            <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(140,110,255,0.7) 0%, rgba(100,70,220,0.5) 35%, rgba(80,50,200,0.25) 60%, transparent 80%)', filter: 'blur(40px)' }} />
            <div style={{ position: 'absolute', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(220,210,255,0.35) 0%, rgba(200,185,255,0.15) 50%, transparent 75%)', filter: 'blur(15px)' }} />
            {/* Gold accent sparkle */}
            <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,184,65,0.22) 0%, transparent 55%)', filter: 'blur(20px)' }} />
            {/* Orbital ring */}
            <svg style={{ position: 'absolute', width: 520, height: 520 }} viewBox="0 0 520 520">
              <defs>
                <linearGradient id="hero-ring" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#b89eff" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#F5B841" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#7A5CFF" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              <g className="animate-spin-slow" style={{ transformOrigin: 'center' }}>
                <circle cx="260" cy="260" r="240" fill="none" stroke="url(#hero-ring)" strokeWidth="1.2" strokeDasharray="2 6" />
                <circle cx="260" cy="260" r="200" fill="none" stroke="rgba(184,158,255,0.35)" strokeWidth="1" strokeDasharray="1 8" />
              </g>
            </svg>
            <img src="assets/octto-mascot-transparent.png" alt="OCTTO" className="animate-float" style={{
              position: 'relative', width: '100%', maxWidth: 460, height: 'auto',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5)) drop-shadow(0 0 40px rgba(184,158,255,0.7)) drop-shadow(0 0 80px rgba(122,92,255,0.5))',
              zIndex: 2,
            }} />
          </div>
        </div>

        {/* Hero product visualization */}
        <HeroDashboard liveMetric={liveMetric} />

        <div style={{ marginTop: 72, textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>+2.400 negocios en crecimiento confían en OCTTO</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 56, flexWrap: 'wrap', opacity: 0.55 }}>
            {['NOVARA', 'lumen.', 'FORGE/CO', 'arktik', 'PULSE+', 'ÓRBITA', 'hexagono'].map(b => (
              <span key={b} style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 17, letterSpacing: '-0.03em', color: '#EAEAF0' }}>{b}</span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:first-child > div[style*="flex"] { justify-content: center; }
          .hero-grid p { margin-left: auto; margin-right: auto; }
          .hero-mascot { min-height: 340px !important; }
        }
      `}</style>
    </section>
  );
};

const HeroDashboard = ({ liveMetric }) => {
  return (
    <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ position: 'absolute', inset: '-40px -40px auto -40px', height: 200, background: 'radial-gradient(ellipse at center top, rgba(122,92,255,0.4), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div style={{
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(122,92,255,0.12) 0%, rgba(11,15,26,0.95) 100%)',
        border: '1px solid rgba(122,92,255,0.3)',
        borderRadius: 24,
        padding: 3,
        boxShadow: '0 40px 80px -20px rgba(91,61,245,0.4), 0 0 0 1px rgba(255,255,255,0.04) inset',
      }}>
        <div style={{ background: 'var(--bg-2)', borderRadius: 21, padding: 20, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
              <div className="mono" style={{ marginLeft: 16, fontSize: 11, color: 'var(--text-muted)' }}>octto.app / centro-de-mando</div>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 11, color: 'var(--text-dim)' }}>
                <span className="pill-dot" style={{ background: '#28c840', boxShadow: '0 0 8px #28c840' }} />
                <span className="mono">Todos los sistemas operativos</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 280px', gap: 16, minHeight: 420 }} className="hero-dash-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { name: 'Centro de Mando', icon: 'cpu', active: true, count: null },
                { name: 'Ventas & POS', icon: 'pos', count: '$42.8M' },
                { name: 'Inventario', icon: 'inventory', count: '1.284' },
                { name: 'Facturación · DIAN', icon: 'invoice', count: '38' },
                { name: 'CRM', icon: 'crm', count: '5.2K' },
                { name: 'E-commerce', icon: 'ecommerce', count: '12' },
                { name: 'Finanzas', icon: 'finance', count: null },
                { name: 'Nómina & RR.HH.', icon: 'hr', count: null },
                { name: 'Logística', icon: 'logistics', count: '7' },
              ].map((m, i) => (
                <div key={m.name} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '9px 12px', borderRadius: 10,
                  background: m.active ? 'rgba(122,92,255,0.18)' : 'transparent',
                  border: m.active ? '1px solid rgba(122,92,255,0.35)' : '1px solid transparent',
                  color: m.active ? '#fff' : 'var(--text-dim)',
                  fontSize: 12.5, fontWeight: m.active ? 600 : 500,
                  cursor: 'pointer',
                }}>
                  <Icon name={m.icon} size={15} color={m.active ? 'var(--secondary)' : 'currentColor'} />
                  <span style={{ flex: 1 }}>{m.name}</span>
                  {m.count && <span className="mono" style={{ fontSize: 10, color: 'var(--text-muted)' }}>{m.count}</span>}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                {[
                  { label: 'Ingresos (mes)', val: '$' + (liveMetric / 100).toLocaleString('es', { maximumFractionDigits: 0 }), delta: '+18,4%', positive: true },
                  { label: 'Pedidos hoy', val: '347', delta: '+12', positive: true },
                  { label: 'Stock agotado', val: '2', delta: '-5', positive: true },
                ].map(s => (
                  <div key={s.label} style={{ padding: 14, border: '1px solid var(--line)', borderRadius: 12, background: 'rgba(255,255,255,0.015)' }}>
                    <div style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 6 }}>{s.label}</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                      <div style={{ fontSize: 20, fontWeight: 700, fontFamily: 'Manrope', letterSpacing: '-0.02em' }}>{s.val}</div>
                      <div style={{ fontSize: 11, color: s.positive ? '#4ade80' : '#f87171', fontFamily: 'JetBrains Mono' }}>{s.delta}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: 16, border: '1px solid var(--line)', borderRadius: 12, background: 'rgba(255,255,255,0.015)', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--text-dim)', marginBottom: 2 }}>Ingresos en todos los canales</div>
                    <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'JetBrains Mono' }}>Últimos 30 días · $1,28M</div>
                  </div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {['7D', '30D', '90D'].map((l, i) => (
                      <span key={l} style={{ fontSize: 10, padding: '4px 8px', borderRadius: 6, background: i === 1 ? 'rgba(122,92,255,0.2)' : 'transparent', color: i === 1 ? '#cfc4ff' : 'var(--text-muted)', fontFamily: 'JetBrains Mono' }}>{l}</span>
                    ))}
                  </div>
                </div>
                <Sparkline />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ padding: 14, border: '1px solid rgba(122,92,255,0.35)', borderRadius: 12, background: 'linear-gradient(180deg, rgba(122,92,255,0.1), rgba(122,92,255,0.02))' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(135deg, var(--secondary), var(--primary))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="sparkle" size={12} color="#fff" />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>Agente OCTTO</div>
                  <div className="animate-pulse-glow" style={{ marginLeft: 'auto', fontSize: 9, color: '#4ade80', fontFamily: 'JetBrains Mono' }}>● ACTIVO</div>
                </div>
                <div style={{ fontSize: 11.5, color: 'var(--text-dim)', lineHeight: 1.5 }}>
                  Reordené automáticamente 14 SKUs. Detecté +23% en ventas de <span style={{ color: '#fff' }}>"Café Andes Mezcla"</span>. Precios actualizados.
                </div>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, padding: 14, border: '1px solid var(--line)', borderRadius: 12, background: 'rgba(255,255,255,0.015)', overflow: 'hidden' }}>
                <div style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>Actividad en vivo</div>
                {[
                  { ic: 'pos', t: 'Venta · $128.400', s: 'POS · Medellín #2', time: 'ahora' },
                  { ic: 'invoice', t: 'Factura enviada a DIAN', s: 'INV-2847', time: '12s' },
                  { ic: 'inventory', t: 'Alerta de stock resuelta', s: 'SKU-09812', time: '48s' },
                  { ic: 'chatbot', t: 'IA · 3 leads calificados', s: 'WhatsApp', time: '1m' },
                  { ic: 'logistics', t: 'Pedido enviado', s: 'ORD-38291', time: '2m' },
                ].map((a, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11 }}>
                    <div style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name={a.ic} size={11} color="var(--secondary)" />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: '#fff', fontSize: 11.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.t}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: 10 }}>{a.s}</div>
                    </div>
                    <div className="mono" style={{ color: 'var(--text-muted)', fontSize: 10 }}>{a.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-dash-grid { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
        }
      `}</style>
    </div>
  );
};

const Sparkline = () => {
  const [data] = React.useState(() => {
    const pts = [];
    let y = 50;
    for (let i = 0; i < 40; i++) {
      y += (Math.random() - 0.4) * 8;
      y = Math.max(25, Math.min(85, y));
      pts.push(y);
    }
    return pts.map((v, i) => v - (i * 0.7));
  });
  const w = 100, h = 100;
  const pathD = data.map((y, i) => {
    const x = (i / (data.length - 1)) * w;
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');
  const areaD = pathD + ` L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: '100%', height: 180, display: 'block' }}>
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7A5CFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7A5CFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="spark-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7A5CFF" />
          <stop offset="100%" stopColor="#F5B841" />
        </linearGradient>
      </defs>
      <path d={areaD} fill="url(#spark-fill)" />
      <path d={pathD} stroke="url(#spark-stroke)" strokeWidth="1.2" fill="none" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={w} cy={data[data.length - 1]} r="1.6" fill="#F5B841" />
      <circle cx={w} cy={data[data.length - 1]} r="3" fill="#F5B841" opacity="0.4" className="animate-pulse-glow" />
    </svg>
  );
};

Object.assign(window, { Hero });
