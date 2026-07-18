import RevealOnScroll from "./reveal-on-scroll";
import ServicesSection from "./services-section";
import ServiceSwitchLink from "./service-switch-link";
import Spot from "./spot";
import Header from "./header";

const services = [
  {
    id: "study",
    label: "学び",
    title: "家庭教師",
    name: "かわべ家庭教師学院",
    lead: "勉強のこと、受験のこと。まずは聞かせてください",
    tags: ["定期テスト対策", "受験準備", "学習習慣づくり"],
    body:
      "今のつまずきからで大丈夫。一緒に、できるところから始めましょう。",
    href: "https://kawabegakuin.jp/",
    phone: "0120-777-697",
    logo: "/logo/かわべ家庭教師学院logo.png",
    logoAlt: "かわべ家庭教師学院",
    accessLabel: "北山本部・牛川事務所",
    cta: "家庭教師に相談する",
    spot: "study",
    tabIllust: "study-tab-note.png",
    panelIllust: "study-voice-parent-smile-transparent.png",
    bubbles: {
      ask: "ここ、ちょっと\nつまずいてて…",
      answer: "じゃあ一緒に、\nそこまで戻ろう",
    },
    points: [
      {
        tag: "一人ひとりに",
        title: "その子のペースを、大切に",
        text: "「わかったふり」は、しなくて大丈夫です。つまずいたところまで一緒に戻って、ご家庭のペースで進めます。",
      },
      {
        tag: "つまずきの理由から",
        title: "答えまでの道のりも、一緒に",
        text: "解けなかった「なぜ」を、ひとつずつほどいていきます。次に似た問題が出たときにも、自分で進める力につなげます。",
      },
      {
        tag: "目的に合わせて",
        title: "テストも、受験も、習慣も",
        text: "「テスト前だけ」「受験まで」「机に向かう習慣を」——今のご家庭に合う進め方を、一緒に考えます。",
      },
    ],
  },
  {
    id: "it",
    label: "パソコン修理",
    title: "パソコン修理",
    name: "川辺コンピューター",
    lead: "パソコンの「困った！」、まず聞かせてください。",
    tags: ["パソコン修理", "設定サポート", "データ復旧"],
    body:
      "急がず、ひとつずつ。今の症状から一緒に見ていきます。",
    href: "https://kawabecom.jp/",
    phone: "0532-63-7717",
    logo: "/logo/kawabe-com_logo.png",
    logoAlt: "川辺コンピューター",
    accessLabel: "牛川事務所",
    cta: "PC修理に相談する",
    spot: "repair",
    tabIllust: "it-tab-tools.png",
    panelIllust: "it-panel-counter.png",
    bubbles: {
      ask: "Wi-Fiが急に\nつながらなくて",
      answer: "まず症状から、\n見せてください",
    },
    points: [
      {
        tag: "まずは困ったことから",
        title: "いまの状態を、一緒に確認",
        text: "「動かない」「遅い」「変な画面が出る」——うまく説明できなくても大丈夫です。いま見えていることから、一緒に確かめます。",
      },
      {
        tag: "わかりやすく",
        title: "むずかしい話は、なるべく少なく",
        text: "これから何をするのか、できるだけ分かりやすくお伝えします。はじめての方も、気軽に声をかけてください。",
      },
      {
        tag: "幅広く対応",
        title: "直すことも、その先のことも",
        text: "修理だけでなく、設定や引っ越し、データの取り出しまで。買い替えに迷ったときも、お気軽にどうぞ。",
      },
    ],
  },
];

const issuesByService = {
  study: {
    title: "こんなご相談、多いです",
    items: [
      "定期テストの点数を上げたい",
      "受験までの計画を一緒に立てたい",
      "学校に行きづらい時期がある",
      "近くに通えない／オンラインで受けたい",
    ],
  },
  it: {
    title: "こんなトラブル、多いです",
    items: [
      "急に動かなくなった、立ち上がらない",
      "大事なデータを取り出したい",
      "動作が遅くて買い替えに迷う",
      "パソコンの使い方を教わりたい",
    ],
  },
};

const faqsByService = {
  study: [
    {
      q: "はじめに何を相談すればよいですか？",
      a: "学年や気になっていることなど、分かる範囲で聞かせてください。まだ話がまとまっていなくても大丈夫です。",
    },
    {
      q: "オンラインでも受けられますか？",
      a: "はい。オンラインでも受けていただけます。お住まいの場所にかかわらず、まずは気軽にご相談ください。",
    },
    {
      q: "対応エリアはどこですか？",
      a: "対面は豊橋・豊川・田原を中心に、オンラインなら全国からご相談いただけます。お住まいに合わせて一緒に考えます。",
    },
  ],
  it: [
    {
      q: "相談するときは何を伝えればよいですか？",
      a: "パソコンの機種や、いつからどんな症状があるかを、分かる範囲で教えてください。うまく言えなくても大丈夫です。",
    },
    {
      q: "出張対応はしてもらえますか？",
      a: "お持ち込みを基本に、近隣エリアへの出張にも対応しています。まずはお電話で、今の様子を聞かせてください。",
    },
    {
      q: "対応エリアはどこですか？",
      a: "豊橋市南牛川で受け付けています。近隣地域への出張や郵送修理も、まずは気軽にご相談ください。",
    },
  ],
};



function Hero() {
  const titleChars = "KAWABIT".split("");

  return (
    <section className="hero" id="top" aria-label="KAWABIT ファーストビュー">
      <div className="hero__copy">
        <h1 className="hero__title" aria-label="KAWABIT">
          {titleChars.map((char, index) => (
            <span
              key={index}
              className="hero__title-char"
              style={{ "--i": index }}
              aria-hidden="true"
            >
              {char}
            </span>
          ))}
        </h1>
        <p className="hero__lead">
          家庭教師も、パソコンも。暮らしの近くに、かわべのサポートを。
        </p>
      </div>
      <div className="hero__art">
        <picture style={{ display: 'contents' }}>
          <source
            media="(max-width: 640px)"
            srcSet="/illustrations/used/kawabit-scene-body-4x3-transparent.png"
          />
          <img
            className="hero__island"
            src="/illustrations/used/kawabit-hero-wide-flow-v2.png"
            alt="学びとITの相談が同じ入口につながる KAWABIT のブランドイラスト"
          />
        </picture>
      </div>
      <div className="hero__service-cards" aria-label="KAWABIT のサービス">
        <ServiceSwitchLink
          className="hero__service-card hero__service-card--study"
          serviceId="study"
        >
          <span className="hero__service-visual">
            <span className="hero__service-label">学びの相談</span>
            <Spot name="study" className="hero__service-spot" />
          </span>
          <div className="hero__service-copy">
            <h2>かわべ家庭教師学院</h2>
            <p>定期テスト、受験、学習習慣づくりまで、まるっと相談できます。</p>
            <span className="hero__service-link">家庭教師を詳しく見る</span>
          </div>
        </ServiceSwitchLink>
        <ServiceSwitchLink
          className="hero__service-card hero__service-card--it"
          serviceId="it"
        >
          <span className="hero__service-visual">
            <span className="hero__service-label">修理の相談</span>
            <Spot name="repair" className="hero__service-spot" />
          </span>
          <div className="hero__service-copy">
            <h2>川辺コンピューター</h2>
            <p>パソコン修理、設定、データ復旧まで、まるっと相談できます。</p>
            <span className="hero__service-link">PC修理を詳しく見る</span>
          </div>
        </ServiceSwitchLink>
      </div>
    </section>
  );
}

function BrandHistory() {
  return (
    <section className="history" aria-label="川辺ブランドの歩み">
      <div className="scene__inner">
        <div className="scene__heading history__intro reveal">
          <div className="services__intro-badge">
            <span className="services__intro-circle" />
            <span className="services__intro-label">川辺ブランドの歩み</span>
          </div>
          <h2>
            学びとITを、
            <br />
            豊橋で続けてきました。
          </h2>
          <p className="scene__lead">
            かわべ家庭教師学院は1997年から。川辺コンピューターは1999年から。
            どちらも豊橋で、ずっと身近な相談を受けてきました。
          </p>
        </div>
        <ol className="history__timeline reveal reveal-stagger" aria-label="川辺ブランドの沿革">
          <li className="history__item history__item--study">
            <span className="history__year">1997</span>
            <div>
              <h3>かわべ家庭教師学院</h3>
              <p>プロ家庭教師・学習相談</p>
            </div>
          </li>
          <li className="history__item history__item--it">
            <span className="history__year">1999</span>
            <div>
              <h3>川辺コンピューター</h3>
              <p>パソコン修理・データ復旧・IT相談</p>
            </div>
          </li>
          <li className="history__item history__item--now">
            <span className="history__year">NOW</span>
            <div>
              <h3>KAWABIT</h3>
              <p>KAWABEはこれからも、家庭教師とパソコン修理で。</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__head history__intro reveal">
          <div className="services__intro-badge">
            <span className="services__intro-circle" />
            <span className="services__intro-label">お気軽にどうぞ</span>
          </div>
          <h2>
            迷ったら、
            <br />
            まずひと声。
          </h2>
          <p className="contact__lead">
            学びのことも、パソコンのことも。「これって聞いていいのかな？」くらいの軽さで大丈夫です。電話でもWebでも、話しやすい方法でお声がけください。
          </p>
        </div>

        <div className="contact__cards reveal reveal-stagger">
          <article
            className="contact-card contact-card--study"
          >
            <div className="contact-card__header">
              <Spot name="study" className="contact-card__spot" />
              <div className="contact-card__heading">
                <h3 className="contact-card__title">かわべ家庭教師学院</h3>
                <p className="contact-card__lead">
                  勉強のつまずき・受験対策・
                  <br />
                  不登校サポートまで
                </p>
              </div>
            </div>
            <dl className="contact-card__meta">
              <div>
                <dt>対応エリア</dt>
                <dd>
                  豊橋・豊川・田原
                  <br />
                  オンラインは全国対応
                </dd>
              </div>
              <div>
                <dt>所在地</dt>
                <dd>
                  <span className="contact-card__place">
                    <span className="contact-card__place-label">北山本部</span>
                    豊橋市牧野町牧野26-80 北山ビル3F
                  </span>
                  <span className="contact-card__place">
                    <span className="contact-card__place-label">牛川事務所</span>
                    豊橋市南牛川1丁目1-7
                  </span>
                </dd>
              </div>
            </dl>
            <a
              className="contact-card__cta"
              href="https://kawabegakuin.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              詳しく見る
              <span className="contact-card__cta-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </article>

          <article
            className="contact-card contact-card--it"
          >
            <div className="contact-card__header">
              <Spot name="repair" className="contact-card__spot" />
              <div className="contact-card__heading">
                <h3 className="contact-card__title">川辺コンピューター</h3>
                <p className="contact-card__lead">
                  壊れた・遅い・分からない、
                  <br />
                  なんでも気軽に
                </p>
              </div>
            </div>
            <dl className="contact-card__meta">
              <div>
                <dt>対応エリア</dt>
                <dd>
                  豊橋市が中心
                  <br />
                  近隣地域へ出張も可
                </dd>
              </div>
              <div>
                <dt>所在地</dt>
                <dd>豊橋市南牛川1丁目1-7</dd>
              </div>
            </dl>
            <a
              className="contact-card__cta"
              href="https://kawabecom.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              詳しく見る
              <span className="contact-card__cta-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </article>
        </div>

        <section className="contact__access reveal" id="access" aria-label="拠点・アクセス">
          <div className="contact__access-summary">
            <p className="contact__access-kicker">ACCESS</p>
            <h3>
              相談できる場所は、
              <br />
              こちらです。
            </h3>
            <p>
              お近くなら、どうぞ気軽にお立ち寄りください。家庭教師学院は北山本部と牛川事務所、川辺コンピューターは牛川事務所でご案内しています。
            </p>
            <p className="contact__hours">
              <span className="contact__hours-label">営業時間</span>
              <span className="contact__hours-value">10:00 – 19:00 ／ 日曜休</span>
              <span className="contact__hours-note">両店共通</span>
            </p>
          </div>

          <div className="contact__maps">
            <article className="contact__map">
              <iframe
                className="contact__map-frame"
                title="かわべ家庭教師学院 北山本部のGoogleマップ"
                src="https://www.google.com/maps?q=かわべ家庭教師学院+北山本部+愛知県豊橋市牧野町牧野26-80+北山ビル3F&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="contact__map-body">
                <strong className="contact__map-name">北山本部｜かわべ家庭教師学院</strong>
                <a
                  className="contact__map-cta"
                  href="https://www.google.com/maps/search/?api=1&query=かわべ家庭教師学院+北山本部+愛知県豊橋市牧野町牧野26-80+北山ビル3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Googleマップで開く <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>

            <article className="contact__map">
              <iframe
                className="contact__map-frame"
                title="牛川事務所・川辺コンピューターのGoogleマップ"
                src="https://www.google.com/maps?q=川辺コンピューター+愛知県豊橋市南牛川1丁目1-7&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="contact__map-body">
                <strong className="contact__map-name">牛川事務所｜家庭教師学院・川辺コンピューター</strong>
                <a
                  className="contact__map-cta"
                  href="https://www.google.com/maps/search/?api=1&query=川辺コンピューター+愛知県豊橋市南牛川1丁目1-7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Googleマップで開く <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>
        </section>
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
        <BrandHistory />
        <ServicesSection
          services={services}
          issuesByService={issuesByService}
          faqsByService={faqsByService}
        />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <strong>株式会社カワビット</strong>
          <span>かわべ家庭教師学院 / 川辺コンピューター</span>
        </div>
      </footer>
    </>
  );
}
