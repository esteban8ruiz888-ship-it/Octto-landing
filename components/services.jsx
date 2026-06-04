// Services Section — 12 servicios con CTAs individuales + CTAs por grupo

const ServicesSection = () => {
  const [activeGroup, setActiveGroup] = React.useState(0);

  const groups = [
    {
      key: 'core',
      label: 'Plataforma Core',
      subtitle: 'IA que vende, cobra, factura y controla tu inventario por ti.',
      mascot: 'assets/octto-mascot-transparent.png',
      mascotTag: 'Opera',
      services: [
        {
          icon: 'pos',
          title: 'Sistema POS con IA',
          tagline: 'Cada venta, procesada por inteligencia artificial.',
          desc: 'La IA cobra, aplica descuentos inteligentes, actualiza inventario y genera factura electrónica — todo en una sola acción. Cero errores humanos.',
          bullets: ['Hardware opcional o BYOD', 'Split-payment y propinas', 'Cierre de caja automático'],
          stat: '2,1s por venta promedio',
          cta: 'Ver POS en acción',
        },
        {
          icon: 'invoice',
          title: 'Facturación Electrónica',
          tagline: 'La IA genera, timbra y envía cada factura. Tú no tocas nada.',
          desc: 'Cumplimiento DIAN automático en cada transacción. Notas crédito, débito y soportes generados por IA con validación previa. Cero rechazos.',
          bullets: ['DIAN Colombia + SII Chile + SAT México', 'Numeración y resoluciones automáticas', 'Archivo fiscal por 10 años'],
          stat: '99,97% de aceptación',
          cta: 'Ver cómo funciona',
        },
        {
          icon: 'inventory',
          title: 'Inventario controlado por IA',
          tagline: 'La IA decide qué reordenar, cuándo y cuánto.',
          desc: 'Stock en tiempo real en todas tus sedes. La IA predice agotamientos, detecta pérdidas al instante y reordena automáticamente antes de que falte.',
          bullets: ['Multi-bodega y multi-unidad', 'Códigos de barras + QR', 'Pérdidas detectadas al instante'],
          stat: '−47% de stock muerto',
          cta: 'Probar inventario',
        },
        {
          icon: 'crm',
          title: 'CRM potenciado por IA',
          tagline: 'La IA recuerda, segmenta y reactiva clientes por ti.',
          desc: 'IA que unifica cada interacción, detecta clientes que van a abandonar y lanza campañas de retención automáticas. Más recompra, menos esfuerzo.',
          bullets: ['Unificación WhatsApp + email + punto de venta', 'Puntos y programa de fidelización', 'Automatizaciones por comportamiento'],
          stat: '+38% en recompra',
          cta: 'Conocer CRM',
        },
        {
          icon: 'chatbot',
          title: 'Chatbot con IA',
          tagline: 'Atiende, vende y cobra en WhatsApp e Instagram — 24/7.',
          desc: 'Agente conversacional entrenado con tu inventario, catálogo y precios en tiempo real. Responde preguntas, recomienda productos, toma pedidos y procesa pagos — sin intervención humana.',
          bullets: ['Conectado a tu inventario y ERP en vivo', 'WhatsApp, Instagram y web en un solo agente', 'Escalamiento a humano con historial completo'],
          stat: '73% de consultas resueltas sin humanos',
          cta: 'Activar chatbot',
        },
      ],
    },
    {
      key: 'ops',
      label: 'Operación completa',
      subtitle: 'IA que automatiza tu contabilidad, nómina, tienda online y envíos.',
      mascot: 'assets/octto-books.png',
      mascotTag: 'Organiza',
      services: [
        {
          icon: 'ecommerce',
          title: 'E-commerce con IA',
          tagline: 'Una tienda online que se optimiza sola.',
          desc: 'IA que ajusta precios, recupera carritos abandonados y recomienda productos personalizados. Conectada a tu inventario físico — vende 24/7 sin intervención.',
          bullets: ['Dominio propio + SEO listo', 'Pagos locales e internacionales', 'Sincronización con marketplaces'],
          stat: '+127% de conversión móvil',
          cta: 'Lanzar mi tienda',
        },
        {
          icon: 'finance',
          title: 'Contabilidad integrada 360°',
          tagline: 'Cada venta, compra y pago genera su asiento contable — solo.',
          desc: 'El motor contable de Octto se conecta con POS, compras, nómina e inventario. Cada movimiento crea su asiento automáticamente. Tu contador analiza y decide — la IA digita por él.',
          bullets: ['Asistente contable IA: pregunta el estado financiero en lenguaje natural', 'Informes DIAN: exógena, retenciones, RADIAN integrado', 'Balance general, P&G y flujo de caja en tiempo real'],
          stat: '0 digitación manual · asientos 100% automáticos',
          cta: 'Ver contabilidad 360°',
        },
        {
          icon: 'hr',
          title: 'Nómina & RRHH con IA',
          tagline: 'Nómina calculada, liquidada y reportada sin humanos.',
          desc: 'La IA procesa nómina electrónica, calcula comisiones sobre ventas reales, liquida aportes y genera PILA automáticamente.',
          bullets: ['Nómina electrónica DIAN', 'App móvil del empleado', 'PILA y seguridad social autoliquidadas'],
          stat: '−83% tiempo de nómina',
          cta: 'Automatizar nómina',
        },
        {
          icon: 'logistics',
          title: 'Logística inteligente',
          tagline: 'La IA elige la ruta más barata y rápida por ti.',
          desc: 'Generación de guías automática, ruteo inteligente y tracking unificado. La IA selecciona transportadora, optimiza picking y gestiona devoluciones.',
          bullets: ['Integración con 20+ transportadoras', 'Tracking unificado por cliente', 'Devoluciones con 1 click'],
          stat: '−34% costo por envío',
          cta: 'Optimizar envíos',
        },
      ],
    },
    {
      key: 'ai',
      label: 'Capa de IA',
      subtitle: 'El motor de IA que piensa, decide y ejecuta por ti.',
      mascot: 'assets/octto-idea.png',
      mascotTag: 'Opera por ti',
      services: [
        {
          icon: 'chatbot',
          title: 'Agente de ventas IA',
          tagline: 'Cierra ventas en WhatsApp mientras tú duermes.',
          desc: 'Agente de IA entrenado con tu catálogo, precios e inventario real. Responde, recomienda, toma pedidos y cobra — en WhatsApp, Instagram y tu web.',
          bullets: ['Toma pedidos y cobra en el chat', 'Escalamiento a humanos con contexto', 'Multilingüe · ES / EN / PT'],
          stat: '73% resueltas sin humanos',
          cta: 'Activar chatbot',
        },
        {
          icon: 'zap',
          title: 'Automatización total',
          tagline: 'La IA elimina el trabajo manual de tu operación.',
          desc: 'Carga facturas con una foto, actualiza precios automáticamente, concilia bancos y reabastece SKUs. La IA observa, aprende y ejecuta.',
          bullets: ['Cargador de facturas por foto', 'Reglas sin código, arrastrar y soltar', 'Webhooks y API completos'],
          stat: '94% menos trabajo manual',
          cta: 'Ver automatizaciones',
        },
        {
          icon: 'sparkle',
          title: 'Insights predictivos',
          tagline: 'La IA te dice qué va a pasar antes de que pase.',
          desc: 'Análisis predictivo, detección de anomalías y recomendaciones accionables. No otro dashboard — IA que te dice qué hacer y lo ejecuta por ti.',
          bullets: ['Alertas proactivas por email/WA', 'Detección de fugas de margen', 'Benchmarks vs tu industria'],
          stat: '+21% ingresos en 90 días',
          cta: 'Ver un reporte real',
        },
        {
          icon: 'cpu',
          title: 'Ecosistema IA unificado',
          tagline: 'Un solo sistema. Un solo cerebro. Cero silos.',
          desc: 'Todos los servicios conectados por un motor de IA que comparte datos en tiempo real. Reemplaza 8–12 herramientas desconectadas con inteligencia pura.',
          bullets: ['SSO, permisos granulares, auditoría', 'API y SDK públicos', 'SLA 99,95% con soporte 24/7'],
          stat: '−61% gasto en software',
          cta: 'Ver el ecosistema',
        },
      ],
    },
  ];

  const g = groups[activeGroup];

  return (
    <section className="section-pad" id="servicios" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: 520, height: 520, top: '20%', left: '-10%', background: 'var(--primary)', opacity: 0.22 }} />
      <div className="glow-orb" style={{ width: 480, height: 480, bottom: '10%', right: '-10%', background: 'var(--secondary)', opacity: 0.2 }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 56, maxWidth: 920, marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow" style={{ marginBottom: 14, color: '#cfc4ff' }}>✦ 12 servicios con IA · 1 cerebro que los opera</div>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5.2vw, 72px)', marginBottom: 20, lineHeight: 0.98 }}>
            La IA reemplaza tus herramientas. <span className="gradient-text">Todas.</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: 18, lineHeight: 1.55, maxWidth: 680, margin: '0 auto' }}>
            Cada servicio tiene IA integrada que aprende de tu negocio, automatiza lo repetitivo y toma decisiones inteligentes. Más ventas, menos esfuerzo, cero software desconectado.
          </p>
        </div>

        {/* Group tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
          {groups.map((grp, i) => (
            <button
              key={grp.key}
              onClick={() => setActiveGroup(i)}
              style={{
                padding: '12px 22px',
                borderRadius: 999,
                background: activeGroup === i ? 'linear-gradient(180deg, rgba(122,92,255,0.3), rgba(91,61,245,0.18))' : 'rgba(255,255,255,0.025)',
                border: activeGroup === i ? '1px solid rgba(122,92,255,0.55)' : '1px solid var(--line)',
                color: activeGroup === i ? '#fff' : 'var(--text-dim)',
                fontWeight: 600, fontSize: 14,
                cursor: 'pointer', transition: 'all .25s',
                fontFamily: 'inherit',
                boxShadow: activeGroup === i ? '0 0 28px rgba(122,92,255,0.4)' : 'none',
                display: 'inline-flex', alignItems: 'center', gap: 10,
              }}
            >
              <span style={{
                width: 22, height: 22, borderRadius: 6,
                background: activeGroup === i ? 'linear-gradient(135deg, var(--secondary), var(--primary))' : 'rgba(255,255,255,0.04)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 700,
                color: activeGroup === i ? '#fff' : 'var(--text-muted)',
              }}>{i + 1}</span>
              {grp.label}
            </button>
          ))}
        </div>

        {/* Group header with mascot */}
        <div className="card" style={{
          padding: 0,
          background: 'linear-gradient(135deg, rgba(122,92,255,0.18) 0%, rgba(91,61,245,0.05) 100%)',
          borderColor: 'rgba(122,92,255,0.3)',
          marginBottom: 20,
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'center',
        }}>
          <div style={{ padding: '32px 40px' }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--secondary)', marginBottom: 10 }}>
              ↳ GRUPO {String(activeGroup + 1).padStart(2, '0')} · {g.label.toUpperCase()}
            </div>
            <h3 className="display" style={{ fontSize: 'clamp(24px, 2.6vw, 34px)', marginBottom: 6, lineHeight: 1.1 }}>
              {g.subtitle}
            </h3>
            <p style={{ color: 'var(--text-dim)', fontSize: 14, margin: 0 }}>
              {g.services.length} servicios en este grupo · disponibles por separado o en paquete completo.
            </p>
          </div>
          <div style={{ position: 'relative', padding: '10px 30px 10px 0', minWidth: 180 }}>
            <div style={{
              position: 'absolute', top: '50%', right: 60, transform: 'translateY(-50%)',
              width: 180, height: 180, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(140,110,255,0.6) 0%, rgba(100,70,220,0.35) 45%, transparent 75%)',
              filter: 'blur(18px)',
            }} />
            <div style={{
              position: 'absolute', top: '50%', right: 75, transform: 'translateY(-50%)',
              width: 130, height: 130, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(220,210,255,0.25) 0%, transparent 60%)',
              filter: 'blur(10px)',
            }} />
            <img src={g.mascot} alt={g.label} className="animate-float" style={{
              position: 'relative',
              width: 160, height: 160, objectFit: 'contain',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4)) drop-shadow(0 0 25px rgba(184,158,255,0.6))',
            }} />
            <div style={{
              position: 'absolute', top: 16, right: 16,
              padding: '5px 10px',
              borderRadius: 999,
              background: 'rgba(245,184,65,0.12)',
              border: '1px solid rgba(245,184,65,0.35)',
              fontSize: 10.5, fontWeight: 700, color: 'var(--accent)',
              letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>{g.mascotTag}</div>
          </div>
        </div>

        {/* Services grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="services-grid">
          {g.services.map((s, i) => (
            <article key={s.title} className="service-card card" style={{
              padding: 28,
              display: 'flex', flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all .3s ease',
            }}>
              <div style={{
                position: 'absolute', top: -60, right: -60, width: 200, height: 200,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(122,92,255,0.12), transparent 70%)',
                pointerEvents: 'none',
                opacity: 0.7,
              }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 16, position: 'relative' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 11,
                  background: 'linear-gradient(135deg, rgba(122,92,255,0.3), rgba(91,61,245,0.12))',
                  border: '1px solid rgba(122,92,255,0.35)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 0 18px rgba(122,92,255,0.3)',
                }}>
                  <Icon name={s.icon} size={20} color="#cfc4ff" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: 4 }}>
                    SERVICIO {String(activeGroup * 4 + i + 1).padStart(2, '0')}
                  </div>
                  <h4 style={{ fontSize: 19, fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.2, letterSpacing: '-0.01em', fontFamily: 'Manrope' }}>
                    {s.title}
                  </h4>
                </div>
              </div>

              <div style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 600, marginBottom: 10, letterSpacing: '-0.005em', position: 'relative' }}>
                {s.tagline}
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--text-dim)', lineHeight: 1.55, margin: '0 0 16px', position: 'relative' }}>
                {s.desc}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: 7, position: 'relative' }}>
                {s.bullets.map(b => (
                  <li key={b} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 12.5, color: 'var(--text)' }}>
                    <span style={{ flexShrink: 0, width: 14, height: 14, borderRadius: 50, background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.3)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                      <Icon name="check" size={9} color="#4ade80" />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div style={{ flex: 1 }} />

              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 12,
                paddingTop: 16,
                borderTop: '1px solid var(--line)',
                position: 'relative',
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '5px 10px',
                  borderRadius: 7,
                  background: 'rgba(245,184,65,0.08)',
                  border: '1px solid rgba(245,184,65,0.2)',
                  fontSize: 11, fontWeight: 600, color: 'var(--accent)',
                }}>
                  <Icon name="trending" size={11} color="var(--accent)" />
                  {s.stat}
                </div>
                <a href="#demo" className="service-cta" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: 12.5, fontWeight: 600, color: '#cfc4ff',
                  textDecoration: 'none',
                  transition: 'color .2s',
                }}>
                  {s.cta}
                  <Icon name="arrow-right" size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Group-level CTA */}
        <div style={{
          marginTop: 28,
          padding: '22px 28px',
          borderRadius: 18,
          background: 'linear-gradient(135deg, rgba(245,184,65,0.08) 0%, rgba(122,92,255,0.12) 100%)',
          border: '1px solid rgba(245,184,65,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'linear-gradient(135deg, var(--accent), #e0a830)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 20px rgba(245,184,65,0.4)',
              flexShrink: 0,
            }}>
              <Icon name="sparkle" size={20} color="#1a1030" />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 2, fontFamily: 'Manrope' }}>
                Activa los {g.services.length} servicios de {g.label} como paquete
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-dim)' }}>
                Migración guiada, datos importados y tu equipo capacitado — todo en 7 días.
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="#demo" className="btn btn-primary" style={{ padding: '11px 20px', fontSize: 13 }}>
              Agendar demo del grupo
              <Icon name="arrow-right" size={13} />
            </a>
            <a href="#pricing" className="btn btn-ghost" style={{ padding: '11px 20px', fontSize: 13 }}>
              Ver precio del paquete
            </a>
          </div>
        </div>

        {/* Cross-group summary row */}
        <div style={{
          marginTop: 56,
          padding: '28px 32px',
          borderRadius: 20,
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid var(--line)',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center',
          gap: 28,
        }} className="services-summary">
          <div style={{ position: 'relative', width: 110, height: 110 }}>
            <div style={{
              position: 'absolute', inset: -10, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(140,110,255,0.6) 0%, rgba(100,70,220,0.3) 50%, transparent 75%)',
              filter: 'blur(14px)',
            }} />
            <div style={{
              position: 'absolute', inset: 5, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(220,210,255,0.25) 0%, transparent 55%)',
              filter: 'blur(8px)',
            }} />
            <img src="assets/octto-search.png" alt="OCTTO" style={{
              position: 'relative', width: '100%', height: '100%', objectFit: 'contain',
              filter: 'drop-shadow(0 0 15px rgba(184,158,255,0.6))',
            }} />
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--secondary)', marginBottom: 8 }}>
              ↳ ¿NO SABES POR DÓNDE EMPEZAR?
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 6, fontFamily: 'Manrope', letterSpacing: '-0.01em' }}>
              Diagnóstico IA gratuito en 15 minutos.
            </div>
            <div style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.55 }}>
              La IA analiza tu operación actual, identifica cuánto pierdes y te muestra exactamente qué automatizar primero para ver resultados en 7 días.
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a href="#demo" className="btn btn-primary" style={{ padding: '12px 22px', fontSize: 13 }}>
              Agendar diagnóstico
              <Icon name="arrow-right" size={13} />
            </a>
            <a href="#demo" style={{ fontSize: 12, color: 'var(--text-dim)', textAlign: 'center', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
              <Icon name="chatbot" size={12} />
              o chatea con OCTTO IA
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .service-card:hover {
          border-color: rgba(122,92,255,0.5) !important;
          background: rgba(122,92,255,0.04) !important;
          transform: translateY(-2px);
          box-shadow: 0 20px 40px -20px rgba(91,61,245,0.4);
        }
        .service-cta:hover {
          color: #fff !important;
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .services-summary { grid-template-columns: 1fr !important; text-align: center; }
          .services-summary > div:first-child { margin: 0 auto; }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { ServicesSection });
