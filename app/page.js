import RevealOnScroll from "./reveal-on-scroll";

const services = [
  {
    id: "study",
    label: "学び",
    title: "家庭教師",
    name: "かわべ家庭教師学院",
    lead: "学びのつまずきを、近くでほどく。",
    body:
      "定期テスト対策、受験準備、学習習慣づくりまで。お子さまの状況を聞きながら、今必要な学び方を一緒に整理します。",
    href: "https://kawabegakuin.jp/",
    phone: "0120-777-697",
    cta: "家庭教師に相談する",
    spot: "study",
  },
  {
    id: "it",
    label: "IT",
    title: "パソコン修理",
    name: "川辺コンピューター",
    lead: "困ったパソコンを、落ち着いて見直す。",
    body:
      "起動しない、動作が遅い、データを取り出したい。症状を確認しながら、修理・設定・データ復旧の相談先へ案内します。",
    href: "https://kawabecom.jp/",
    phone: "0532-63-7717",
    cta: "PC修理に相談する",
    spot: "repair",
  },
];

const reasons = [
  {
    title: "入口がひとつ",
    text: "学びとIT、どちらの相談もここから確認できます。探し回らず、目的に合う窓口へ進めます。",
    spot: "person",
  },
  {
    title: "むずかしく言わない",
    text: "専門的な内容も、できるだけ普段の言葉で説明します。初めての相談でも状況を整理しやすくします。",
    spot: "talk",
  },
  {
    title: "暮らしに近い",
    text: "家庭の学習環境や日常のITトラブルなど、身近な困りごとを前提にした案内を大切にします。",
    spot: "objects",
  },
];

const flow = [
  {
    title: "内容を選ぶ",
    text: "家庭教師か、パソコン修理か、近いほうを選びます。",
  },
  {
    title: "状況を伝える",
    text: "学年・教科・困っている症状など、わかる範囲で大丈夫です。",
  },
  {
    title: "窓口で確認",
    text: "各サービスの担当窓口で、詳しい内容を確認します。",
  },
  {
    title: "必要な対応へ",
    text: "体験相談、修理受付、データ復旧相談など、次の手続きへ進みます。",
  },
];

const spotFiles = {
  study: "kawabit-spot-study.png",
  repair: "kawabit-spot-repair.png",
  combo: "kawabit-spot-combo.png",
  person: "kawabit-spot-combo.png",
  talk: "kawabit-spot-talk.png",
  path: "kawabit-spot-path.png",
  objects: "kawabit-spot-objects.png",
};

function Spot({ name, className = "" }) {
  return (
    <span className={`spot spot--${name} ${className}`} aria-hidden="true">
      <img src={`/illustrations/${spotFiles[name]}`} alt="" />
    </span>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="KAWABIT トップへ">
        KAWABIT
      </a>
      <nav className="site-nav" aria-label="主要ナビゲーション">
        <a href="#services">サービス</a>
        <a href="#reason">選ばれる理由</a>
        <a href="#flow">相談の流れ</a>
      </nav>
      <a className="header-cta" href="#contact">
        相談する
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-label="KAWABIT ファーストビュー">
      <div className="hero__copy">
        <p className="hero__brand">カワビット</p>
        <h1>
          学びとITの
          <br />
          相談窓口。
        </h1>
        <p className="hero__lead">
          家庭教師の相談も、パソコン修理やデータ復旧の相談も。
          迷ったら、まずKAWABITから近い窓口へ進めます。
        </p>
        <div className="hero__actions" aria-label="サービス導線">
          <a className="button button--study" href="https://kawabegakuin.jp/">
            家庭教師
          </a>
          <a className="button button--it" href="https://kawabecom.jp/">
            パソコン修理
          </a>
        </div>
      </div>
      <div className="hero__art" aria-hidden="true">
        <Spot name="study" />
        <Spot name="repair" />
        <Spot name="person" />
        <Spot name="objects" />
        <span className="hero__path" />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro section reveal">
      <div className="intro__text">
        <h2>迷ったら、まずKAWABITへ。</h2>
        <p>
          学習のことも、パソコンのことも、最初の相談先がわからないまま止まってしまうことがあります。
          KAWABITは、家庭教師とIT修理の入口をひとつにまとめた案内サイトです。
          必要な相談先へ、わかりやすくつなぎます。
        </p>
      </div>
      <Spot name="combo" className="intro__spot" />
    </section>
  );
}

function Services() {
  return (
    <section className="services section" id="services">
      {services.map((service, index) => (
        <article className={`service service--${service.id} reveal`} key={service.id}>
          <div className="service__marker">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <b>{service.label}</b>
          </div>
          <div className="service__body">
            <p className="section-label">{service.title}</p>
            <h2>{service.lead}</h2>
            <p>{service.body}</p>
            <dl>
              <div>
                <dt>専門サイト</dt>
                <dd>{service.name}</dd>
              </div>
              <div>
                <dt>電話</dt>
                <dd>{service.phone}</dd>
              </div>
            </dl>
            <a className="text-link" href={service.href}>
              {service.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <Spot name={service.spot} className="service__spot" />
        </article>
      ))}
    </section>
  );
}

function Reasons() {
  return (
    <section className="reason section reveal" id="reason">
      <div className="section-heading">
        <p className="section-label">選ばれる理由</p>
        <h2>
          迷わせず、
          <br />
          わかりやすく。
        </h2>
      </div>
      <div className="reason__list">
        {reasons.map((reason) => (
          <article className="reason__item" key={reason.title}>
            <Spot name={reason.spot} />
            <div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Flow() {
  return (
    <section className="flow section reveal" id="flow">
      <div className="section-heading">
        <p className="section-label">相談の流れ</p>
        <h2>小さく聞いて、次へ進む。</h2>
      </div>
      <ol className="flow__list">
        {flow.map((item, index) => (
          <li key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div className="flow__content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <Spot name="path" className="flow__spot" />
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section reveal" id="contact">
      <div>
        <p className="section-label">まずは相談する</p>
        <h2>
          学びも、ITも。
          <br />
          気軽に確認してください。
        </h2>
        <p>
          小さなつまずきでも、早めに相談すると選択肢が広がります。
          今の状況に近い窓口からご確認ください。
        </p>
      </div>
      <div className="contact__actions">
        <a className="button button--study" href="https://kawabegakuin.jp/">
          家庭教師に相談する
        </a>
        <a className="button button--it" href="https://kawabecom.jp/">
          PC修理に相談する
        </a>
        <p>10:00-19:00 / 日曜休</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <RevealOnScroll />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Reasons />
        <Flow />
        <Contact />
      </main>
      <footer className="site-footer">
        <strong>KAWABIT</strong>
        <span>かわべ家庭教師学院 / 川辺コンピューター</span>
      </footer>
    </>
  );
}
