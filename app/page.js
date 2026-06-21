import RevealOnScroll from "./reveal-on-scroll";

const HERO_VARIANT = "poster";

const services = [
  {
    number: "SERVICE 01",
    title: "かわべ家庭教師学院",
    lead: "一人ひとりに寄り添う完全個別指導で、成績アップと学習習慣の定着をサポートします。",
    href: "https://kawabegakuin.jp/",
    tone: "study",
    icon: "book",
    tags: ["完全個別指導", "定期テスト対策", "受験対策", "学習習慣サポート"],
  },
  {
    number: "SERVICE 02",
    title: "川辺コンピューター",
    lead: "パソコンの修理からデータ復旧、ご購入・初期設定まで、ITのお困りごとを解決します。",
    href: "https://kawabecom.jp/",
    tone: "tech",
    icon: "pc",
    tags: ["パソコン修理", "データ復旧", "購入・設定サポート", "各種サポート"],
  },
];

const strengths = [
  {
    title: "地域密着",
    text: "豊橋・豊川・田原エリアに根ざし、迅速で丁寧なサポートをお届けします。",
    icon: "pin",
  },
  {
    title: "相談しやすい",
    text: "わかりやすい説明と親身な対応で、初めての方でも安心してご相談いただけます。",
    icon: "chat",
  },
  {
    title: "専門スタッフ対応",
    text: "教育とIT、それぞれの専門スタッフが確かな知識と経験でサポートします。",
    icon: "staff",
  },
];

const flows = [
  "お問い合わせ",
  "内容の確認",
  "専門窓口へご案内",
  "サービス開始",
];

const iconFiles = {
  book: "book.png",
  pc: "pc.png",
  pin: "pin.png",
  chat: "chat.png",
  staff: "staff.png",
  lab: "guide.png",
};

const studyPoints = [
  "定期テスト対策",
  "受験対策",
  "苦手克服",
  "学習習慣の定着",
];

const pcTroubles = [
  "起動しない",
  "動作が遅い",
  "画面がつかない",
  "データ復旧",
  "ウイルス駆除",
];

function Icon({ type }) {
  return (
    <img
      className={`icon-img icon-${type}`}
      src={`/icons/${iconFiles[type]}`}
      alt=""
      aria-hidden="true"
    />
  );
}

function ClassicHero() {
  return (
    <section className="hero hero-classic" id="top">
      <div className="hero-copy">
        <p className="hero-note">学びとITの相談ナビ</p>
        <Icon type="lab" />
        <h1>学びの不安も、<br />ITの困りごとも。</h1>
        <p>
          カワビットは、かわべ家庭教師学院と川辺コンピューターへ目的に合わせてつながる案内サイトです。
        </p>
        <p className="support-note">Kawabegakuin / Kawabe Computer</p>
      </div>
    </section>
  );
}

function PosterHero() {
  return (
    <section className="poster-hero" id="top" aria-label="KAWABIT サービス案内">
      <article className="poster-panel poster-study" aria-labelledby="poster-study-title">
        <p className="poster-blue-lead">一人ひとりに、<br />いちばんの学び方を。</p>
        <h1 id="poster-study-title">
          わかるが<br />
          自信に<br />
          <span className="char-hen">変</span>わる<span className="dot-blue">。</span>
        </h1>
        <div className="poster-hand-note">
          <img src="/hero/poster-study-hand-note.png" alt="" aria-hidden="true" />
          <span className="sr-only">伴走する、学びのパートナー。</span>
        </div>

        <img
          className="poster-study-photo"
          src="/hero/poster-study-photo.png"
          alt="生徒と講師がノートを見ながら学習している様子"
        />
        <img
          className="poster-book-stamp"
          src="/hero/poster-book-stamp.png"
          alt=""
          aria-hidden="true"
        />

        <div className="poster-memo" aria-label="かわべ家庭教師学院の対応内容">
          <img src="/hero/poster-green-memo.png" alt="" aria-hidden="true" />
          <ul>
            {studyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="poster-burst">
          <img src="/hero/poster-black-burst.png" alt="" aria-hidden="true" />
          <p>オンライン<br />対応OK!</p>
        </div>

        <div className="poster-service poster-service-study">
          <strong>かわべ家庭教師学院</strong>
          <span>対象：小学生・中学生・高校生</span>
        </div>
        <a className="poster-link poster-link-study" href="https://kawabegakuin.jp/">
          <span></span>詳しく見る
        </a>
      </article>

      <article className="poster-panel poster-tech" aria-labelledby="poster-tech-title">
        <div className="poster-tech-brand">
          <strong>川辺コンピューター</strong>
        </div>

        <h2 id="poster-tech-title">
          パソコンの<br />
          困ったを解決<span className="dot-white">。</span>
        </h2>

        <p className="poster-tech-lead poster-handwritten-text-white">
          <span className="line1">データはそのまま、</span><br />
          <span className="line2">迅速・丁寧に修理します。</span>
        </p>

        <img
          className="poster-tech-photo"
          src="/hero/poster-pc-repair-lineart.png"
          alt="技術者がノートパソコンを修理している様子"
        />

        <div className="poster-tech-memo" aria-label="パソコンの困りごと">
          <img src="/hero/poster-red-label-large.png" alt="" aria-hidden="true" />
          <ul>
            {pcTroubles.map((trouble) => (
              <li key={trouble}>{trouble}</li>
            ))}
          </ul>
        </div>

        <img
          className="poster-tech-stamp"
          src="/hero/poster-red-label-small.png"
          alt=""
          aria-hidden="true"
        />

        <div className="poster-tech-badge">
          <img src="/hero/poster-free-badge.png" alt="" aria-hidden="true" />
          <p>見積無料<br />診断無料</p>
        </div>

        <div className="poster-tech-support-wrapper">
          <div className="poster-tech-support">
            <span>持ち込み・出張対応OK！</span>
          </div>
          <img
            className="poster-tech-screwdriver"
            src="/illustrations/individual/screwdriver.png"
            alt=""
            aria-hidden="true"
          />
        </div>
        <a className="poster-link poster-link-tech" href="https://kawabecom.jp/">
          <span></span>詳しく見る
        </a>
      </article>
    </section>
  );
}

function Hero() {
  return HERO_VARIANT === "poster" ? <PosterHero /> : <ClassicHero />;
}

export default function Home() {
  return (
    <>
      <RevealOnScroll />
      <main>
        <header className="site-header">
          <a className="brand" href="#top" aria-label="KAWABIT トップ">
            <span>
              <strong>Kawabit</strong>
            </span>
          </a>
          <nav aria-label="主要ナビゲーション">
            <a href="#services">サービス</a>
            <a href="#reason">Kawabitについて</a>
            <a href="#flow">ご利用の流れ</a>
            <a href="#contact">お知らせ</a>
            <a href="#faq">よくあるご質問</a>
          </nav>
          <a className="header-contact" href="#contact">お問い合わせ</a>
        </header>

        <Hero />

        <section className="services section-shell reveal" id="services">
          <div className="service-grid">
            {services.map((service) => (
              <article className={`service-card ${service.tone}`} key={service.title}>
                <div className="card-top">
                  <span>{service.number}</span>
                  <Icon type={service.icon} />
                </div>
                <h2>{service.title}</h2>
                <p>{service.lead}</p>
                <ul>
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a href={service.href}>詳しく見る <span>›</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="reason reveal" id="reason">
          <div className="reason-grid section-shell">
            {strengths.map((item) => (
              <article className="reason-item" key={item.title}>
                <Icon type={item.icon} />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="flow section-shell reveal" id="flow">
          <div className="section-title">
            <p>FLOW</p>
            <h2>ご利用の流れ</h2>
          </div>
          <ol>
            {flows.map((flow, index) => (
              <li key={flow}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{flow}</strong>
              </li>
            ))}
          </ol>
        </section>

        <section className="faq-contact section-shell reveal" id="faq">
          <div className="faq-panel">
            <div className="section-title">
              <p>FAQ</p>
              <h2>こんなお悩み、ありませんか？</h2>
            </div>
            <div className="question-list">
              <p>勉強の進め方や成績について相談したい</p>
              <p>パソコンが起動しない、データが心配</p>
              <p>どちらの窓口に問い合わせるべきか分からない</p>
            </div>
          </div>
          <div className="contact-panel" id="contact">
            <p>詳しいサービス内容は、それぞれの専門サイトでご確認ください。</p>
            <strong>10:00-19:00 / 日曜休</strong>
            <div>
              <a href="https://kawabegakuin.jp/">家庭教師の相談</a>
              <a href="https://kawabecom.jp/">PC・ITの相談</a>
            </div>
          </div>
        </section>

        <footer>
          <strong>KAWABIT</strong>
          <span>かわべ家庭教師学院 / 川辺コンピューター</span>
          <span>豊橋・豊川・田原エリア対応</span>
        </footer>
      </main>
    </>
  );
}
