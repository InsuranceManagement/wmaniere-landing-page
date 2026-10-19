import Image from "next/image";
import { ContactForm } from "./components/contact-form";

type IconName =
  | "heart"
  | "income"
  | "pulse"
  | "shield"
  | "surgery"
  | "family"
  | "accessibility"
  | "hospital"
  | "building"
  | "check"
  | "arrow"
  | "phone";

const protections: Array<{
  title: string;
  description: string;
  icon: IconName;
  featured?: boolean;
  tag?: string;
}> = [
  {
    title: "Seguro de vida",
    description:
      "Ampara seus beneficiários com o capital contratado e inclui assistência funeral familiar.",
    icon: "heart",
    featured: true,
    tag: "Proteção familiar",
  },
  {
    title: "Diária por incapacidade temporária",
    description:
      "Protege a renda do profissional liberal ou autônomo durante afastamentos por acidente ou doença, por até 365 dias.",
    icon: "income",
    featured: true,
    tag: "Renda protegida",
  },
  {
    title: "Doenças graves",
    description:
      "Pagamento do capital contratado no diagnóstico de uma das mais de 40 doenças cobertas, como câncer, Alzheimer e AVC.",
    icon: "pulse",
  },
  {
    title: "Responsabilidade civil ANADEM",
    description:
      "Assessoria jurídica, capital segurado, gerenciamento de crise e retroatividade para profissionais da saúde.",
    icon: "shield",
    featured: true,
    tag: "Profissionais da saúde",
  },
  {
    title: "Cirurgias",
    description:
      "Proteção financeira para mais de 1.200 procedimentos cirúrgicos previstos na cobertura.",
    icon: "surgery",
  },
  {
    title: "Assistência funeral",
    description:
      "Serviço individual ou familiar para cuidar das providências e garantir uma despedida digna.",
    icon: "family",
  },
  {
    title: "Invalidez por acidente ou doença",
    description:
      "Capital contratado para situações de invalidez permanente comprovadas por laudos médicos.",
    icon: "accessibility",
  },
  {
    title: "Diária por internação hospitalar",
    description:
      "Suporte financeiro para ajudar nas despesas durante o período de internação hospitalar.",
    icon: "hospital",
  },
  {
    title: "Seguros empresariais",
    description:
      "Vida, acidentes e assistência funeral para proteger colaboradores, suas famílias e a continuidade da empresa.",
    icon: "building",
  },
];

const steps = [
  {
    number: "01",
    title: "Entender sua realidade",
    description:
      "Uma conversa direta sobre família, profissão, renda e o que precisa continuar protegido.",
  },
  {
    number: "02",
    title: "Comparar possibilidades",
    description:
      "Análise das coberturas, carências e franquias disponíveis nas seguradoras parceiras.",
  },
  {
    number: "03",
    title: "Acompanhar de verdade",
    description:
      "Orientação na contratação e presença quando você precisar acionar sua proteção.",
  },
];

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<IconName, React.ReactNode> = {
    heart: (
      <>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
        <path d="M8.5 12h2l1-2.2 1.6 4.4 1-2.2h1.6" />
      </>
    ),
    income: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M7 6V4h10v2M8 12h8M12 9v6" />
      </>
    ),
    pulse: (
      <>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l7.8-7.5a5.5 5.5 0 0 0 1-8.9Z" />
        <path d="M6.5 12h3l1.4-3 2.2 6 1.4-3h3" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    surgery: (
      <>
        <path d="m14 4 6 6M17 3l4 4-8.5 8.5-4-4L17 3Z" />
        <path d="M7 13 3 17l4 4 4-4M3 17h8M7 13v8" />
      </>
    ),
    family: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="10" r="2" />
        <path d="M3 21v-2a6 6 0 0 1 12 0v2M14 15.5a4.5 4.5 0 0 1 7 3.7V21" />
      </>
    ),
    accessibility: (
      <>
        <circle cx="12" cy="4" r="2" />
        <path d="M5 8h14M12 6v7M8 21l4-8 4 8" />
      </>
    ),
    hospital: (
      <>
        <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M2 21h20" />
        <path d="M9 8h6M12 5v6M8 15h1M15 15h1M8 18h1M15 18h1" />
      </>
    ),
    building: (
      <>
        <path d="M3 21h18M6 21V4h9v17M15 9h4v12" />
        <path d="M9 8h3M9 12h3M9 16h3" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4 12.8 12.8 0 0 0 2.9.7 2 2 0 0 1 1.6 1.9Z" />
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Wmainiere Corretora de Seguros — início">
            <span className="brand-logo-crop">
              <Image src="/images/logo-white-simple.png" alt="Wmainiere" fill sizes="180px" priority />
            </span>
            <span className="brand-subtitle">Corretora de Seguros</span>
          </a>
          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#protecao">Proteções</a>
            <a href="#sobre">Sobre</a>
            <a href="#como-funciona">Como funciona</a>
          </nav>
          <a className="button button-small button-light" href="#contato">
            Falar com Wladmir
          </a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-light">Proteção pessoal, familiar e empresarial</span>
            <h1>
              Segurança para viver o hoje. <span>Proteção para o amanhã.</span>
            </h1>
            <p className="hero-lead">
              Soluções sob medida para proteger sua família, sua renda e tudo o que você construiu —
              com orientação próxima em cada escolha.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contato">
                Quero entender minhas opções
                <Icon name="arrow" size={19} />
              </a>
              <a className="text-link" href="#protecao">
                Conhecer as proteções
              </a>
            </div>
            <div className="hero-proof" aria-label="Resultados da corretora">
              <div>
                <strong>Desde 2017</strong>
                <span>protegendo histórias</span>
              </div>
              <div>
                <strong>+100</strong>
                <span>famílias auxiliadas</span>
              </div>
              <div>
                <strong>+R$ 1 mi</strong>
                <span>em benefícios pagos</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Wladmir Mainiere, corretor de seguros">
            <div className="hero-image-frame">
              <Image
                src="/images/wladmir-formal.jpg"
                alt="Wladmir Mainiere"
                fill
                sizes="(max-width: 900px) 88vw, 42vw"
                className="hero-image"
                priority
              />
              <div className="hero-image-shade" />
              <div className="hero-caption">
                <span>Atendimento próximo e consultivo</span>
                <strong>Wladmir Luzes Mainiere</strong>
                <small>Sócio proprietário e corretor de seguros</small>
              </div>
            </div>
            <div className="hero-seal">
              <span className="seal-icon">
                <Icon name="shield" size={25} />
              </span>
              <span>
                <small>Experiência que acolhe</small>
                <strong>Proteção com propósito</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="container partners-bar">
          <span>Seguradoras parceiras</span>
          <div className="partners-list" aria-label="Seguradoras parceiras">
            <strong>MAG SEGUROS</strong>
            <i />
            <strong>ANADEM</strong>
            <i />
            <strong>PORTO SEGURO</strong>
          </div>
        </div>
      </section>

      <section className="section protections-section" id="protecao">
        <div className="container">
          <div className="section-heading heading-row">
            <div>
              <span className="eyebrow">Proteções para cada momento</span>
              <h2>O imprevisto não precisa encontrar você despreparado.</h2>
            </div>
            <p>
              Cada fase da vida pede um cuidado diferente. Conheça as soluções que podem sustentar sua
              família, sua renda e sua atividade profissional quando você mais precisar.
            </p>
          </div>
          <div className="protection-grid">
            {protections.map((protection) => (
              <article
                className={`protection-card${protection.featured ? " protection-card-featured" : ""}`}
                key={protection.title}
              >
                <div className="protection-icon">
                  <Icon name={protection.icon} size={27} />
                </div>
                {protection.tag ? <span className="card-tag">{protection.tag}</span> : null}
                <h3>{protection.title}</h3>
                <p>{protection.description}</p>
                <a href="#contato">
                  Quero saber mais <Icon name="arrow" size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section" id="sobre">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-main-image">
              <Image
                src="/images/wladmir-portrait.jpg"
                alt="Wladmir Mainiere em ambiente profissional"
                fill
                sizes="(max-width: 860px) 88vw, 45vw"
              />
            </div>
            <div className="about-secondary-image">
              <Image
                src="/images/wladmir-congress.jpg"
                alt="Wladmir Mainiere em congresso de corretores"
                fill
                sizes="220px"
              />
            </div>
            <div className="about-experience">
              <strong>9+</strong>
              <span>anos ajudando pessoas a proteger o que importa</span>
            </div>
          </div>
          <div className="about-copy">
            <span className="eyebrow">Quem cuida da sua proteção</span>
            <h2>Antes de falar de apólice, eu quero entender a sua história.</h2>
            <p className="about-lead">
              Sou Wladmir Luzes Mainiere, tenho 53 anos, sou casado, pai de um filho e sócio proprietário da
              Wmainiere Corretora de Seguros.
            </p>
            <p>
              Desde 2017, pude auxiliar mais de 100 famílias e profissionais liberais, acompanhando mais de
              R$ 1 milhão em benefícios pagos por meio das seguradoras parceiras.
            </p>
            <blockquote>
              “Considero minha profissão essencial na vida das famílias. É muito gratificante poder estar ao
              lado de alguém justamente no momento mais adverso.”
            </blockquote>
            <div className="about-checks">
              <span><Icon name="check" size={18} /> Atendimento pessoal</span>
              <span><Icon name="check" size={18} /> Orientação clara</span>
              <span><Icon name="check" size={18} /> Acompanhamento próximo</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section" id="como-funciona">
        <div className="container process-grid">
          <div className="process-intro">
            <span className="eyebrow eyebrow-light">Consultoria sem complicação</span>
            <h2>Uma boa proteção começa por uma boa conversa.</h2>
            <p>
              Você não precisa conhecer todos os termos do seguro. Meu papel é explicar cada possibilidade e
              ajudar você a decidir com clareza.
            </p>
            <a className="button button-outline-light" href="#contato">
              Agendar uma conversa <Icon name="arrow" size={18} />
            </a>
          </div>
          <div className="steps-list">
            {steps.map((step) => (
              <article className="step" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div className="section-heading">
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2>Seguro pode ser simples quando existe orientação.</h2>
            <p>
              Cobertura, carência e franquia mudam de acordo com o produto e o perfil. A conversa serve para
              esclarecer cada ponto antes da contratação.
            </p>
          </div>
          <div className="faq-list">
            <details>
              <summary>Qual proteção faz mais sentido para mim?</summary>
              <p>
                Isso depende da sua rotina, profissão, renda e das pessoas que contam com você. A análise começa
                por esses pontos para evitar coberturas genéricas.
              </p>
            </details>
            <details>
              <summary>Como funcionam carência e franquia?</summary>
              <p>
                Os prazos e condições variam entre produtos e seguradoras. Todas as regras são apresentadas e
                comparadas com você antes da decisão.
              </p>
            </details>
            <details>
              <summary>Autônomos podem proteger a própria renda?</summary>
              <p>
                Sim. A diária por incapacidade temporária foi pensada justamente para apoiar profissionais que
                dependem da própria atividade para gerar renda.
              </p>
            </details>
            <details>
              <summary>O atendimento continua depois da contratação?</summary>
              <p>
                Sim. O acompanhamento faz parte do trabalho, tanto para revisar a proteção quanto para orientar
                em um momento de acionamento.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="eyebrow eyebrow-light">Vamos conversar?</span>
            <h2>Descubra como proteger o que faz sua vida seguir em frente.</h2>
            <p>
              Quer entender melhor uma cobertura, carência ou franquia? Deixe seu contato. Terei o maior prazer
              em atender sua solicitação.
            </p>
            <div className="contact-person">
              <div className="contact-avatar">
                <Image src="/images/wladmir-candid.jpg" alt="Wladmir Mainiere" fill sizes="72px" />
              </div>
              <div>
                <strong>Wladmir Mainiere</strong>
                <span>Corretor de seguros</span>
              </div>
            </div>
            <div className="contact-note">
              <Icon name="phone" size={22} />
              <span>Você deixa seus dados e eu retorno para uma conversa pessoal e sem compromisso.</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <span className="footer-logo-crop">
              <Image src="/images/logo-white.png" alt="Wmainiere Corretora de Seguros" fill sizes="220px" />
            </span>
            <p>Proteção clara, próxima e feita para a sua realidade.</p>
          </div>
          <div className="footer-links">
            <a href="#protecao">Proteções</a>
            <a href="#sobre">Sobre Wladmir</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Wmainiere Corretora de Seguros.</span>
          <span>Seguros para pessoas, famílias e empresas.</span>
        </div>
      </footer>
    </main>
  );
}
