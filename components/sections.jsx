// sections.jsx — AIFeaturesSection, BenefitsSection, IntegrationsSection, CTASection, Footer

const AIFeaturesSection = () => {
  const [active, setActive] = React.useState(0);

  const features = [
    {
      icon: 'sparkle',
      title: 'Agente autónomo 24/7',
      desc: 'La IA monitorea tu negocio mientras dormís. Detecta anomalías, ejecuta acciones y te avisa solo cuando necesitás decidir algo importante.',
      detail: 'Más de 200 reglas preconfiguradas para retail, restaurantes, e-commerce y servicios. El agente aprende de tus patrones y mejora cada semana.',
      metric: '94% de tareas sin intervención humana',
    },
    {
      icon: 'cpu',
      title: 'IA entrenada en tu negocio',
      desc: 'No es IA genérica. OCTTO entrena modelos específicos con tus datos: precios, clientes, patrones de venta e inventario.',
      detail: 'El modelo aprende en 7 días y genera predicciones con 89% de precisión en reabastecimiento, demanda y retención de clientes.',
      metric: '89% de precisión en predicciones',
    },
    {
      icon: 'chatbot',
      title: 'Lenguaje natural para operar',
      desc: 'Escribile al agente como si fuera un empleado. "¿Cuánto vendí ayer?" o "Reordenáme los SKUs con menos de 5 unidades" — y lo hace.',
      detail: 'Compatible con WhatsApp Business, Slack y la app de OCTTO. Responde en segundos con datos reales de tu operación.',
      metric: '2s de respuesta promedio',
    },
    {
      icon: 'insights',
      title: 'Decisiones, no dashboards',
      desc: 'En lugar de gráficos que interpretás vos, OCTTO te dice exactamente qué hacer: "Subí el precio de X un 8%, tu margen mejoraría $420.000".',
      detail: 'Recomendaciones diarias basadas en análisis de mercado, estacionalidad, comportamiento de clientes y tendencias de tu sector.',
      metric: '+21% de ingresos en los primeros 90 días',
    },
  ];

  const f = features[active];

  return (
    <section className="section-pad" id="ai" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: 700, height: 700, top: '10%', right: '-20%', background: 'var(--secondary)', opacity: 0.13 }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Inteligencia artificial</div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 68px)', marginBottom: 20, maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
            No es IA de juguete. <span className="gradient-text">Es IA que opera.</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: 18, maxWidth: 620, margin: '0 auto', lineHeight: 1.55 }}>
            Cada módulo de OCTTO tiene un motor de IA que aprende, decide y ejecuta. No te muestra datos — toma acciones.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }} className="ai-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {features.map((feat, i) => (
              <div
                key={feat.title}
                onClick={() => setActive(i)}
                style={{
                  padding: '20px 24px',
                  borderRadius: 14,
                  background: active === i ? 'linear-gradient(135deg, rgba(122,92,255,0.18), rgba(91,61,245,0.06))' : 'rgba(255,255,255,0.018)',
                  border: active === i ? '1px solid rgba(122,92,255,0.45)' : '1px solid var(--line)',
                  cursor: 'pointer',
                  transition: 'all .25s',
                  boxShadow: active === i ? '0 8px 32px -8px rgba(91,61,245,0.4)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: active === i ? 'linear-gradient(135deg, var(--secondary), var(--primary))' : 'rgba(255,255,255,0.04)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, transition: 'all .25s',
                  }}>
                    <Icon name={feat.icon} size={17} color={active === i ? '#fff' : 'var(--secondary)'} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: active === i ? '#fff' : 'var(--text)', marginBottom: 3, fontFamily: 'Manrope' }}>{feat.title}</div>
                    <div style={{ fontSize: 12.5, color: 'var(--text-dim)', lineHeight: 1.4 }}>{feat.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ position: 'sticky', top: 100 }}>
            <div style={{
              padding: 32,
              borderRadius: 20,
              background: 'linear-gradient(180deg, rgba(122,92,255,0.14) 0%, rgba(11,15,26,0.95) 100%)',
              border: '1px solid rgba(122,92,255,0.3)',
              boxShadow: '0 40px 80px -20px rgba(91,61,245,0.3)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 13,
                  background: 'linear-gradient(135deg, var(--secondary), var(--primary))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 24px rgba(122,92,255,0.5)',
                }}>
                  <Icon name={f.icon} size={22} color="#fff" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 19, color: '#fff', fontFamily: 'Manrope' }}>{f.title}</div>
                  <div className="animate-pulse-glow" style={{ fontSize: 11, color: '#4ade80', fontFamily: 'JetBrains Mono', marginTop: 2 }}>● EN VIVO</div>
                </div>
              </div>

              <p style={{ fontSize: 14.5, color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: 20 }}>{f.detail}</p>

              <div style={{
                padding: '14px 18px',
                borderRadius: 12,
                background: 'rgba(245,184,65,0.08)',
                border: '1px solid rgba(245,184,65,0.25)',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <Icon name="trending" size={16} color="var(--accent)" />
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent)' }}>{f.metric}</span>
              </div>

              <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--line)' }}>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 10, fontFamily: 'JetBrains Mono', letterSpacing: '0.06em' }}>OCTTO AGENTE · EJECUTANDO</div>
                <div style={{
                  background: 'rgba(0,0,0,0.4)',
                  borderRadius: 8,
                  padding: '12px 14px',
                  fontFamily: 'JetBrains Mono',
                  fontSize: 11.5,
                  lineHeight: 1.7,
                  color: '#cfc4ff',
                }}>
                  <div style={{ color: '#4ade80' }}>✓ Análisis de datos completado</div>
                  <div style={{ color: '#4ade80' }}>✓ Patrones detectados: 14 items</div>
                  <div style={{ color: 'var(--accent)' }}>→ Acción ejecutada automáticamente</div>
                  <div style={{ color: 'var(--text-muted)' }}>Sin intervención humana requerida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ai-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    { icon: 'zap', val: '−61%', label: 'Reducción de costos en software', sub: 'vs. stack desconectado', color: '#7A5CFF' },
    { icon: 'trending', val: '+38%', label: 'Aumento en recompra de clientes', sub: 'CRM + IA activado', color: '#F5B841' },
    { icon: 'shield', val: '99,95%', label: 'Uptime garantizado con SLA', sub: 'Soporte 24/7 incluido', color: '#4ade80' },
    { icon: 'sparkle', val: '7 días', label: 'Para ver los primeros resultados', sub: 'Onboarding guiado', color: '#cfc4ff' },
  ];

  const testimonials = [
    {
      name: 'Camila R.',
      role: 'Dueña · Tienda de ropa, Medellín',
      text: 'Antes perdía 3 horas diarias conciliando ventas a mano. Ahora OCTTO lo hace solo. Recuperé mi tiempo y mi margen mejoró 22% en el primer mes.',
      rating: 5,
    },
    {
      name: 'Martín O.',
      role: 'Gerente · Distribuidora, Bogotá',
      text: 'Teníamos Siigo, Excel, WhatsApp y Shopify sin conectar. OCTTO los reemplazó a todos. Ahorro $8M al mes solo en software y tiempo de mi equipo.',
      rating: 5,
    },
    {
      name: 'Sofía L.',
      role: 'Fundadora · Restaurante con 4 sedes',
      text: 'El chatbot de OCTTO atiende pedidos por WhatsApp mientras yo duermo. El mes pasado cerró 340 pedidos sin que yo tocara nada.',
      rating: 5,
    },
  ];

  return (
    <section className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: 500, height: 500, top: '0%', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', opacity: 0.06 }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Resultados reales</div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 20 }}>
            Números que no <span className="gradient-accent">mienten.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 64 }} className="benefits-grid">
          {benefits.map((b) => (
            <div key={b.val} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 13, margin: '0 auto 16px',
                background: `${b.color}18`,
                border: `1px solid ${b.color}35`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon name={b.icon} size={20} color={b.color} />
              </div>
              <div className="display gradient-text" style={{ fontSize: 40, lineHeight: 1, marginBottom: 8 }}>{b.val}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 6, lineHeight: 1.3 }}>{b.label}</div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{b.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="card" style={{ padding: 28 }}>
              <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: 'var(--accent)', fontSize: 14 }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.6, marginBottom: 20, fontStyle: 'italic' }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid var(--line)' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--secondary), var(--primary))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 700, color: '#fff', flexShrink: 0,
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{t.name}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

const IntegrationsSection = () => {
  const integrations = [
    { name: 'WhatsApp Business', cat: 'Mensajería', color: '#25D366' },
    { name: 'Siigo', cat: 'Contabilidad', color: '#004A8F' },
    { name: 'Alegra', cat: 'Facturación', color: '#00C389' },
    { name: 'Bancolombia', cat: 'Banca', color: '#FDDA24' },
    { name: 'Wompi', cat: 'Pagos', color: '#FF5858' },
    { name: 'Shopify', cat: 'E-commerce', color: '#95BF47' },
    { name: 'WooCommerce', cat: 'E-commerce', color: '#7F54B3' },
    { name: 'Mercado Libre', cat: 'Marketplace', color: '#FFE600' },
    { name: 'Coordinadora', cat: 'Logística', color: '#E84B24' },
    { name: 'Servientrega', cat: 'Logística', color: '#004B8D' },
    { name: 'Interrapidísimo', cat: 'Logística', color: '#E31837' },
    { name: 'DIAN', cat: 'Tributario', color: '#004481' },
    { name: 'Google Analytics', cat: 'Analytics', color: '#E37400' },
    { name: 'Meta Ads', cat: 'Marketing', color: '#0081FB' },
    { name: 'Mailchimp', cat: 'Email', color: '#FFE01B' },
    { name: 'Slack', cat: 'Comunicación', color: '#4A154B' },
    { name: 'Zapier', cat: 'Automatización', color: '#FF4A00' },
    { name: 'Google Sheets', cat: 'Datos', color: '#0F9D58' },
  ];

  const row1 = integrations.slice(0, 9);
  const row2 = integrations.slice(9);

  const Row = ({ items, reverse }) => (
    <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
      <div style={{
        display: 'flex', gap: 12,
        animation: `scroll-${reverse ? 'right' : 'left'} 30s linear infinite`,
        width: 'max-content',
      }}>
        {[...items, ...items].map((int, i) => (
          <div key={`${int.name}-${i}`} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '10px 16px',
            borderRadius: 12,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--line-strong)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: int.color, boxShadow: `0 0 8px ${int.color}60`, flexShrink: 0 }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{int.name}</span>
            <span style={{ fontSize: 10.5, color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)', padding: '2px 6px', borderRadius: 4 }}>{int.cat}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="section-pad" id="integrations" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Ecosistema conectado</div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 20 }}>
            Se conecta con todo lo que <span className="gradient-text">ya usás.</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: 18, maxWidth: 600, margin: '0 auto', lineHeight: 1.55 }}>
            +80 integraciones nativas. Sin desarrollo, sin fricción. Tu stack actual funciona desde el día uno.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 56 }}>
        <Row items={row1} reverse={false} />
        <Row items={row2} reverse={true} />
      </div>

      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
          padding: '32px', borderRadius: 20,
          background: 'rgba(255,255,255,0.018)', border: '1px solid var(--line)',
        }} className="integrations-stats">
          {[
            { val: '+80', label: 'Integraciones nativas', icon: 'globe' },
            { val: 'API REST', label: 'Pública + webhooks en tiempo real', icon: 'zap' },
            { val: 'SDK', label: 'Para equipos que construyen sobre OCTTO', icon: 'cpu' },
          ].map((s) => (
            <div key={s.val} style={{ textAlign: 'center', padding: '16px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                <Icon name={s.icon} size={22} color="var(--secondary)" />
              </div>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#fff', fontFamily: 'Manrope', marginBottom: 6 }}>{s.val}</div>
              <div style={{ fontSize: 13, color: 'var(--text-dim)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @media (max-width: 700px) {
          .integrations-stats { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="section-pad" id="demo" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: 800, height: 800, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--primary)', opacity: 0.2 }} />
      <div className="glow-orb" style={{ width: 500, height: 500, top: '20%', right: '-10%', background: 'var(--accent)', opacity: 0.07 }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          maxWidth: 920,
          margin: '0 auto',
          padding: '64px 56px',
          borderRadius: 28,
          background: 'linear-gradient(135deg, rgba(122,92,255,0.18) 0%, rgba(91,61,245,0.06) 50%, rgba(245,184,65,0.06) 100%)',
          border: '1px solid rgba(122,92,255,0.3)',
          boxShadow: '0 60px 120px -30px rgba(91,61,245,0.4), 0 0 0 1px rgba(255,255,255,0.03) inset',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)',
            width: 300, height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(122,92,255,0.35), transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 999,
              background: 'rgba(245,184,65,0.12)',
              border: '1px solid rgba(245,184,65,0.3)',
              fontSize: 12, fontWeight: 700, color: 'var(--accent)',
              letterSpacing: '0.06em',
              marginBottom: 28,
            }}>
              <span className="animate-pulse-glow" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
              DEMO EN VIVO · 30 MINUTOS
            </div>

            <h2 className="display" style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', marginBottom: 20, lineHeight: 0.97 }}>
              <span style={{ color: '#fff' }}>Tu negocio en piloto</span>
              <br />
              <span className="gradient-text">automático en 7 días.</span>
            </h2>

            <p style={{ color: 'var(--text-dim)', fontSize: 18, maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.55 }}>
              Agendá una demo en vivo. Un especialista analiza tu operación, te muestra OCTTO funcionando con datos reales y diseña tu plan de implementación.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
              <a href="#demo" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: 16, boxShadow: '0 0 40px rgba(122,92,255,0.5)' }}>
                Agendar demo gratuita
                <Icon name="arrow-right" size={17} />
              </a>
              <a href="#demo" className="btn btn-ghost" style={{ padding: '16px 28px', fontSize: 16 }}>
                <Icon name="chatbot" size={17} />
                Hablar con OCTTO IA
              </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap' }}>
              {[
                { icon: 'check', text: 'Sin tarjeta de crédito' },
                { icon: 'check', text: 'Implementación en 7 días' },
                { icon: 'check', text: 'Soporte en español 24/7' },
              ].map((item) => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'var(--text-dim)' }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: '50%',
                    background: 'rgba(74,222,128,0.15)',
                    border: '1px solid rgba(74,222,128,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon name={item.icon} size={9} color="#4ade80" />
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const links = {
    'Plataforma': { href: '#platform', items: ['POS & Ventas', 'Inventario', 'Facturación DIAN', 'CRM', 'E-commerce', 'Finanzas', 'Nómina', 'Logística'] },
    'Inteligencia IA': { href: '#ai', items: ['Agente Autónomo', 'Chatbot de ventas', 'Predicción de demanda', 'Automatización', 'Insights', 'API & SDK'] },
    'Empresa': { href: '#solutions', items: ['Sobre OCTTO', 'Blog', 'Casos de éxito', 'Prensa', 'Socios', 'Trabaja con nosotros'] },
    'Soporte': { href: '#demo', items: ['Centro de ayuda', 'Estado del sistema', 'Seguridad & GDPR', 'Términos', 'Privacidad', 'Contacto'] },
  };

  return (
    <footer style={{ borderTop: '1px solid var(--line)', paddingTop: 64, paddingBottom: 40, position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 56 }} className="footer-grid">
          <div>
            <Logo size={26} />
            <p style={{ color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.6, marginTop: 16, maxWidth: 280 }}>
              El sistema operativo IA para negocios latinoamericanos. Ventas, inventario, finanzas y logística en piloto automático.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {[
                { n: 'WhatsApp', url: '#demo' },
                { n: 'LinkedIn', url: '#demo' },
                { n: 'Instagram', url: '#demo' },
              ].map((sn) => (
                <a key={sn.n} href={sn.url} aria-label={sn.n} style={{
                  width: 36, height: 36, borderRadius: 9,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--line)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-dim)', fontSize: 10, fontWeight: 700,
                  textDecoration: 'none', transition: 'all .2s',
                  letterSpacing: '-0.02em',
                }}>
                  {sn.n[0]}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([section, group]) => (
            <div key={section}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: '0.04em', marginBottom: 16, textTransform: 'uppercase' }}>{section}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {group.items.map((item) => (
                  <a key={item} href={group.href} style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: 13.5, transition: 'color .2s' }}
                     onMouseEnter={e => e.target.style.color = '#fff'}
                     onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: 24, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            © 2025 OCTTO Technologies S.A.S. · Bogotá, Colombia · NIT 901.234.567-8
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'JetBrains Mono', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
              Todos los sistemas operativos · 99,95% uptime
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        a:hover { color: #fff; }
      `}</style>
    </footer>
  );
};

const HowItWorksSection = () => {
  const steps = [
    { num: '01', icon: 'sparkle', title: 'Diagnóstico gratuito', desc: 'Un especialista analiza tu operación, identifica los cuellos de botella y diseña tu plan de implementación personalizado.', duration: '30 minutos', color: '#7A5CFF' },
    { num: '02', icon: 'cpu', title: 'Configuración personalizada', desc: 'Nuestro equipo carga tu catálogo, migra tus datos y conecta las integraciones que ya usás. Sin que vos toques nada.', duration: '3 a 5 días', color: '#5B3DF5' },
    { num: '03', icon: 'hr', title: 'Capacitación express', desc: 'Entrenamos a tu equipo en menos de un día. OCTTO es tan simple que cualquier empleado puede dominarlo sin experiencia técnica.', duration: '1 día', color: '#F5B841' },
    { num: '04', icon: 'automation', title: 'Piloto automático', desc: 'La IA aprende tus patrones, automatiza las tareas repetitivas y te libera para enfocarte en crecer, no en operar.', duration: 'Desde el día 7', color: '#4ade80' },
  ];

  return (
    <section className="section-pad" id="how-it-works" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--primary)', opacity: 0.08 }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>¿Cómo funciona?</div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 68px)', marginBottom: 20, maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
            De cero a <span className="gradient-text">piloto automático</span> en 7 días.
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: 18, maxWidth: 580, margin: '0 auto', lineHeight: 1.55 }}>
            No necesitás ser técnico ni contratar consultores. Nuestro equipo se encarga de todo.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="how-grid">
          {steps.map((step) => (
            <div key={step.num} className="card" style={{ padding: '28px 24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(to right, ${step.color}60, ${step.color})`, borderRadius: '20px 20px 0 0' }} />
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${step.color}14`, border: `1px solid ${step.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon name={step.icon} size={22} color={step.color} />
              </div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: 8 }}>PASO {step.num}</div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: '#fff', fontFamily: 'Manrope', marginBottom: 12, lineHeight: 1.25 }}>{step.title}</h3>
              <p style={{ fontSize: 13.5, color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: 20 }}>{step.desc}</p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 999, background: `${step.color}12`, border: `1px solid ${step.color}30` }}>
                <Icon name="zap" size={11} color={step.color} />
                <span style={{ fontSize: 11.5, fontWeight: 700, color: step.color, fontFamily: 'JetBrains Mono' }}>{step.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '14px 28px', borderRadius: 14, background: 'rgba(122,92,255,0.08)', border: '1px solid rgba(122,92,255,0.25)' }}>
            <Icon name="shield" size={16} color="var(--secondary)" />
            <span style={{ fontSize: 14, color: 'var(--text-dim)' }}>
              Si en 30 días no ves resultados, <strong style={{ color: '#fff' }}>te devolvemos el dinero.</strong> Sin preguntas.
            </span>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .how-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .how-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

const IndustriesSection = () => {
  const [active, setActive] = React.useState(0);

  const industries = [
    { icon: 'pos', title: 'Retail & Tiendas', tag: 'Más popular', desc: 'Control de inventario en tiempo real, facturación electrónica DIAN, y un vendedor digital que atiende por WhatsApp sin que vos estés presente.', stats: [{ val: '-43%', label: 'merma de inventario' }, { val: '+29%', label: 'ticket promedio' }], features: ['POS táctil con modo offline', 'Multi-sede sincronizado', 'Catálogo en WhatsApp', 'Alertas de reabastecimiento'], color: '#7A5CFF' },
    { icon: 'ecommerce', title: 'Moda & Textiles', tag: 'Tendencia', desc: 'Gestión de tallas, colores y temporadas. Sincronización automática entre tienda física, web e Instagram Shopping.', stats: [{ val: '+52%', label: 'ventas online' }, { val: '-38%', label: 'ropa sin vender' }], features: ['Variantes de talla y color', 'Sync Instagram Shopping', 'Liquidación inteligente', 'Temporadas automáticas'], color: '#F5B841' },
    { icon: 'inventory', title: 'Restaurantes & Food', tag: '', desc: 'Comandas digitales, gestión de mesa, pedidos por WhatsApp y delivery integrado. Control de mermas y recetas con costeo automático.', stats: [{ val: '+34%', label: 'pedidos WhatsApp' }, { val: '-22%', label: 'costo de mermas' }], features: ['Comandas en tablet', 'Reservas automáticas', 'Recetario con costeo', 'Delivery multi-plataforma'], color: '#FF6B6B' },
    { icon: 'hr', title: 'Salones & Barberías', tag: '', desc: 'Agenda de citas automatizada, recordatorios por WhatsApp, gestión de estilistas y comisiones. Historial completo por cliente.', stats: [{ val: '-71%', label: 'citas canceladas' }, { val: '+41%', label: 'retención clientes' }], features: ['Agenda online 24/7', 'Recordatorios automáticos', 'Comisiones por estilista', 'Historial de clientes'], color: '#4ade80' },
    { icon: 'logistics', title: 'Distribuidoras', tag: '', desc: 'Gestión de rutas, pedidos mayoristas, cartera de clientes y despacho. Conectado con las principales transportadoras de Colombia.', stats: [{ val: '+28%', label: 'eficiencia en rutas' }, { val: '-45%', label: 'cartera vencida' }], features: ['Pedidos mayoristas', 'Gestión de rutas', 'Cartera y cobros', 'Despacho integrado'], color: '#60a5fa' },
    { icon: 'crm', title: 'E-commerce & D2C', tag: '', desc: 'Sincronización automática con Shopify, WooCommerce y Mercado Libre. Gestión unificada de pedidos, inventario y devoluciones.', stats: [{ val: '+67%', label: 'conversión en web' }, { val: '-33%', label: 'tiempo en picking' }], features: ['Sync multi-canal', 'Stock en tiempo real', 'Devoluciones fáciles', 'Métricas unificadas'], color: '#c084fc' },
  ];

  const ind = industries[active];

  return (
    <section className="section-pad" id="solutions" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: 700, height: 700, top: '30%', left: '-15%', background: 'var(--accent)', opacity: 0.07 }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>✦ Una sola IA · cualquier negocio</div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 68px)', marginBottom: 20 }}>
            No importa qué vendas. <span className="gradient-accent">La IA lo opera.</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: 18, maxWidth: 640, margin: '0 auto', lineHeight: 1.55 }}>
            El mismo cerebro de IA que controla una tienda de retail opera tu restaurante, tu salón, tu distribuidora o tu e-commerce. Se entrena con TU negocio y automatiza TU operación — sin importar el rubro.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
          {industries.map((item, i) => (
            <button key={item.title} onClick={() => setActive(i)} style={{ padding: '10px 18px', borderRadius: 999, background: active === i ? 'var(--secondary)' : 'rgba(255,255,255,0.04)', border: active === i ? '1px solid var(--secondary)' : '1px solid var(--line)', color: active === i ? '#fff' : 'var(--text-dim)', fontSize: 13.5, fontWeight: 600, cursor: 'pointer', transition: 'all .2s', fontFamily: 'Inter', display: 'flex', alignItems: 'center', gap: 7 }}>
              <Icon name={item.icon} size={14} color={active === i ? '#fff' : 'var(--text-dim)'} />
              {item.title}
              {item.tag && <span style={{ fontSize: 9, padding: '2px 6px', borderRadius: 999, background: 'rgba(245,184,65,0.2)', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.04em' }}>{item.tag.toUpperCase()}</span>}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }} className="industry-detail">
          <div>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: `${ind.color}18`, border: `1px solid ${ind.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
              <Icon name={ind.icon} size={26} color={ind.color} />
            </div>
            <h3 style={{ fontSize: 32, fontWeight: 800, color: '#fff', fontFamily: 'Manrope', marginBottom: 14, lineHeight: 1.1 }}>OCTTO para<br />{ind.title}</h3>
            <p style={{ fontSize: 15.5, color: 'var(--text-dim)', lineHeight: 1.65, marginBottom: 28 }}>{ind.desc}</p>
            <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
              {ind.stats.map((s) => (
                <div key={s.val} style={{ flex: 1, padding: 18, borderRadius: 14, background: `${ind.color}0c`, border: `1px solid ${ind.color}28`, textAlign: 'center' }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: ind.color, fontFamily: 'Manrope', lineHeight: 1, marginBottom: 6 }}>{s.val}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <a href="#demo" className="btn btn-primary" style={{ padding: '13px 24px', fontSize: 14 }}>
              Ver demo para {ind.title}<Icon name="arrow-right" size={14} />
            </a>
          </div>

          <div className="card" style={{ padding: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16 }}>Funciones incluidas</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {ind.features.map((feat) => (
                <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--line)' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', flexShrink: 0, background: `${ind.color}18`, border: `1px solid ${ind.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="check" size={10} color={ind.color} />
                  </div>
                  <span style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{feat}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--line)', fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="sparkle" size={13} color="var(--secondary)" />
              + Motor de IA, chatbot y todos los módulos base incluidos en cada industria
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) { .industry-detail { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

const PricingSection = () => {
  const [annual, setAnnual] = React.useState(false);

  const plans = [
    {
      name: 'Portales Electrónicos', desc: 'Cumplimiento DIAN básico para negocios que empiezan a digitalizar.',
      monthly: 49, yr: 42, highlight: false, badge: '', href: '#demo', note: 'Activación única desde $200.000 COP', cta: 'Empezar ahora',
      features: ['Facturación electrónica DIAN', 'Nómina electrónica', 'Documentos soporte electrónicos', 'Recepción RADIAN'],
    },
    {
      name: 'POS + Contabilidad', desc: 'La plataforma completa con IA para empresas en crecimiento.',
      monthly: 69, yr: 59, highlight: true, badge: 'Más elegido', href: '#demo', note: 'Activación desde $600.000 · incluye 8h capacitación', cta: 'Agendar demo',
      features: ['POS Comercial completo', 'Módulo Contabilidad IA 360°', 'Control de inventario', 'Todos los documentos electrónicos', 'Chatbot con IA (WhatsApp + web)', 'Soporte prioritario'],
    },
    {
      name: 'ERP Empresas', desc: 'Automatización total 360° para operaciones de escala.',
      monthly: 122, yr: 104, highlight: false, badge: '', href: '#demo', note: 'Activación desde $2.000.000 · incluye 10h capacitación · 3 usuarios base', cta: 'Hablar con ventas',
      features: ['ERP completo multi-módulo', 'Contabilidad integrada 360° + nómina', 'Producción MRP', 'Asistente IA avanzado 24/7', 'API pública + SDK', 'SLA 99,95% garantizado'],
    },
  ];

  return (
    <section className="section-pad" id="pricing" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: 600, height: 600, top: '20%', left: '50%', transform: 'translateX(-50%)', background: 'var(--secondary)', opacity: 0.1 }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Precios</div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 68px)', marginBottom: 20 }}>
            Sin sorpresas. <span className="gradient-text">Sin letra chica.</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: 18, maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.55 }}>
            Todos los precios en COP, excluidos de IVA. Cancelás cuando quieras, sin penalidades.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', padding: 6, borderRadius: 999, background: 'rgba(255,255,255,0.04)', border: '1px solid var(--line)' }}>
            <button onClick={() => setAnnual(false)} style={{ padding: '8px 20px', borderRadius: 999, border: 'none', cursor: 'pointer', background: !annual ? 'rgba(122,92,255,0.3)' : 'transparent', color: !annual ? '#fff' : 'var(--text-dim)', fontSize: 13.5, fontWeight: 600, transition: 'all .2s', fontFamily: 'Inter' }}>Mensual</button>
            <button onClick={() => setAnnual(true)} style={{ padding: '8px 20px', borderRadius: 999, border: 'none', cursor: 'pointer', background: annual ? 'rgba(122,92,255,0.3)' : 'transparent', color: annual ? '#fff' : 'var(--text-dim)', fontSize: 13.5, fontWeight: 600, transition: 'all .2s', fontFamily: 'Inter', display: 'flex', alignItems: 'center', gap: 8 }}>
              Anual
              <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 999, background: 'rgba(74,222,128,0.15)', color: '#4ade80', fontWeight: 700, border: '1px solid rgba(74,222,128,0.3)' }}>AHORRÁ 20%</span>
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'start' }} className="pricing-grid">
          {plans.map((plan) => {
            const price = annual ? plan.yr : plan.monthly;
            return (
              <div key={plan.name} style={{ borderRadius: 20, padding: plan.highlight ? '32px 28px' : '28px 24px', background: plan.highlight ? 'linear-gradient(180deg, rgba(122,92,255,0.18) 0%, rgba(11,15,26,0.97) 100%)' : 'rgba(255,255,255,0.022)', border: plan.highlight ? '1px solid rgba(122,92,255,0.5)' : '1px solid var(--line)', boxShadow: plan.highlight ? '0 40px 80px -20px rgba(91,61,245,0.4)' : 'none', position: 'relative', overflow: 'hidden', transform: plan.highlight ? 'scale(1.03)' : 'scale(1)' }}>
                {plan.highlight && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(to right, var(--secondary), var(--primary))' }} />}
                {plan.badge && (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 999, marginBottom: 16, background: 'rgba(122,92,255,0.18)', border: '1px solid rgba(122,92,255,0.4)', fontSize: 11, fontWeight: 700, color: 'var(--secondary)', letterSpacing: '0.05em' }}>
                    <span className="animate-pulse-glow" style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--secondary)' }} />
                    {plan.badge.toUpperCase()}
                  </div>
                )}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', fontFamily: 'Manrope', marginBottom: 6 }}>{plan.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.5 }}>{plan.desc}</div>
                </div>
                {price ? (
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                      <span style={{ fontSize: 44, fontWeight: 800, color: '#fff', fontFamily: 'Manrope', lineHeight: 1 }}>${price.toLocaleString('es-CO')}</span>
                      <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>.000 COP/mes</span>
                    </div>
                    {annual && plan.monthly && (
                      <div style={{ fontSize: 12, color: '#4ade80', marginTop: 4, display: 'flex', alignItems: 'center', gap: 5 }}>
                        <Icon name="trending" size={11} color="#4ade80" />
                        Ahorrás ${((plan.monthly - plan.yr) * 12).toLocaleString('es-CO')}.000 al año
                      </div>
                    )}
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>Excluido de IVA</div>
                  </div>
                ) : (
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--accent)', fontFamily: 'Manrope', lineHeight: 1.1 }}>A consultar</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>Según volumen y módulos</div>
                  </div>
                )}
                <a href={plan.href} className={plan.highlight ? 'btn btn-primary' : 'btn btn-ghost'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, padding: '13px 20px', fontSize: 14, marginBottom: 16, width: '100%', boxSizing: 'border-box' }}>
                  {plan.cta}<Icon name="arrow-right" size={14} />
                </a>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', textAlign: 'center', marginBottom: 20, fontStyle: 'italic' }}>{plan.note}</div>
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>Incluye</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {plan.features.map((feat) => (
                      <div key={feat} style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                        <div style={{ width: 16, height: 16, borderRadius: '50%', flexShrink: 0, marginTop: 1, background: 'rgba(122,92,255,0.15)', border: '1px solid rgba(122,92,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Icon name="check" size={9} color="var(--secondary)" />
                        </div>
                        <span style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.45 }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 36, textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            ¿Necesitás funciones específicas?{' '}
            <a href="#demo" style={{ color: 'var(--secondary)', textDecoration: 'none', fontWeight: 600 }}>Hablamos y armamos un plan a medida.</a>
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
          .pricing-grid > div { transform: scale(1) !important; }
        }
      `}</style>
    </section>
  );
};

const FAQSection = () => {
  const [open, setOpen] = React.useState(0);

  const faqs = [
    { q: '¿OCTTO está habilitado para facturación electrónica DIAN?', a: 'Sí. OCTTO es proveedor tecnológico habilitado por la DIAN para emitir facturas electrónicas, notas crédito y documentos equivalentes. Tu operación queda 100% en regla desde el primer día, sin necesidad de contratar un proveedor externo.' },
    { q: '¿Cuánto tiempo tarda la implementación?', a: 'El promedio de nuestros clientes está operativo en 3 a 7 días hábiles. El proceso incluye: carga de catálogo y precios, migración de clientes y proveedores, configuración según tu industria y capacitación de tu equipo. Nuestro equipo se encarga de todo.' },
    { q: '¿Puedo migrar mis datos desde Siigo, Alegra u otros sistemas?', a: 'Sí. Tenemos conectores para los sistemas más usados en Colombia: Siigo, Alegra, Nominapp, Excel y CSV. Si usás otro sistema, nuestro equipo de datos hace la migración sin costo adicional.' },
    { q: '¿Hay contrato de permanencia mínima?', a: 'No. En los planes Starter y Profesional cancelás mes a mes sin penalidades. Si pagás anual y decidís cancelar antes, te devolvemos los meses no usados. Apostamos a que te quedés porque OCTTO genera valor real, no porque estés atado.' },
    { q: '¿Cómo funciona el soporte técnico?', a: 'El plan Starter incluye soporte por chat en horario laboral (9am–6pm, Lunes a Sábado). El plan Profesional tiene soporte 24/7 por WhatsApp, chat y videollamada con SLA de 2 horas de respuesta. El plan Empresarial incluye un account manager dedicado.' },
    { q: '¿Mis empleados necesitan experiencia técnica?', a: 'No. OCTTO fue diseñado para que cualquier persona pueda dominarlo en menos de 1 día. La interfaz es táctil, en español, con guías en video para cada función. Y si alguien tiene dudas, puede preguntarle al agente IA directamente en lenguaje natural.' },
    { q: '¿Qué pasa con mis datos si cancelo?', a: 'Tus datos son tuyos. Si cancelás, tenés 60 días para exportar toda tu información en formatos estándar (CSV, Excel, PDF). Nunca vendemos ni compartimos tus datos comerciales con terceros. Cumplimos con la Ley 1581 de Habeas Data de Colombia.' },
    { q: '¿OCTTO funciona sin conexión a internet?', a: 'El módulo POS funciona en modo offline para ventas y cobros básicos. Cuando se restaura la conexión, sincroniza automáticamente. Los demás módulos requieren conexión, pero tenemos app móvil para consultas en campo.' },
  ];

  return (
    <section className="section-pad" id="faq" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: 500, height: 500, bottom: 0, right: 0, background: 'var(--primary)', opacity: 0.08 }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'start' }} className="faq-grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>FAQ</div>
            <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 54px)', marginBottom: 20, lineHeight: 1.05 }}>
              Preguntas que siempre nos hacen.
            </h2>
            <p style={{ color: 'var(--text-dim)', fontSize: 15, lineHeight: 1.65, marginBottom: 32 }}>
              Si tenés alguna pregunta que no está acá, nuestro equipo responde en minutos.
            </p>
            <a href="#demo" className="btn btn-ghost" style={{ padding: '13px 22px', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Icon name="chatbot" size={16} />
              Hablar con un asesor
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderRadius: 14, background: open === i ? 'rgba(122,92,255,0.06)' : 'rgba(255,255,255,0.018)', border: open === i ? '1px solid rgba(122,92,255,0.3)' : '1px solid var(--line)', overflow: 'hidden', transition: 'all .25s' }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', padding: '17px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  <span style={{ fontSize: 14.5, fontWeight: 600, color: open === i ? '#fff' : 'var(--text)', lineHeight: 1.35, fontFamily: 'Manrope' }}>{faq.q}</span>
                  <div style={{ width: 24, height: 24, borderRadius: 7, flexShrink: 0, background: open === i ? 'rgba(122,92,255,0.25)' : 'rgba(255,255,255,0.05)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s' }}>
                    <Icon name={open === i ? 'x' : 'plus'} size={12} color="var(--text-dim)" />
                  </div>
                </button>
                {open === i && (
                  <div style={{ padding: '0 20px 18px', fontSize: 13.5, color: 'var(--text-dim)', lineHeight: 1.7 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) { .faq-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

Object.assign(window, { AIFeaturesSection, BenefitsSection, IntegrationsSection, CTASection, Footer, HowItWorksSection, IndustriesSection, PricingSection, FAQSection });
