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
    lead: "勉強のつまずきから、受験の相談まで",
    tags: ["定期テスト対策", "受験準備", "学習習慣づくり"],
    body:
      "今いる場所から、無理のないペースで一緒に進んでいきます。",
    href: "https://kawabegakuin.jp/",
    phone: "0120-777-697",
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
        title: "お子さま専属のペースで",
        text: "「わかったふり」をしなくていい時間です。つまずいたところまで一緒に戻り、ご家庭のペースで進めます。",
      },
      {
        tag: "つまずきの理由から",
        title: "答えだけ、教えません",
        text: "解けなかった「なぜ」を一緒にほどきます。次の似た問題も自分で解ける足場をつくります。",
      },
      {
        tag: "目的に合わせて",
        title: "テストも、受験も、習慣も",
        text: "「テスト前だけ」「受験まで」「机に向かう習慣を」——ご家庭の目的に合わせて進め方をご提案します。",
      },
    ],
  },
  {
    id: "it",
    label: "パソコン修理",
    title: "パソコン修理",
    name: "川辺コンピューター",
    lead: "パソコンの「困った！」を、サクッと解決。",
    tags: ["パソコン修理", "設定サポート", "データ復旧"],
    body:
      "症状を一緒に確かめて、いちばん近い解決ルートをご案内します。",
    href: "https://kawabecom.jp/",
    phone: "0532-63-7717",
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
        tag: "診断無料",
        title: "まず症状をうかがいます",
        text: "「動かない」「遅い」「変な画面が出る」——その症状を一緒に確認。原因を見立ててから手を動かします。",
      },
      {
        tag: "見積無料",
        title: "費用は事前にお伝え",
        text: "作業の前に内容と費用をきちんとご説明します。納得いただいてから進めるので、はじめての方も安心です。",
      },
      {
        tag: "幅広く対応",
        title: "修理・設定・データ復旧",
        text: "直すだけでなく設定や引っ越し、データの取り出しまで。買い替えのご相談もどうぞ。",
      },
    ],
  },
];

const pricingByService = {
  study: {
    label: "家庭教師",
    name: "かわべ家庭教師学院",
    items: [
      {
        title: "教材費",
        value: "ゼロ",
        note: "学校教材＋オリジナルプリントで進めます",
      },
      {
        title: "月額",
        value: "14,300円〜",
        note: "小学生・週1回60分（税込）",
      },
    ],
    extra: "＋ 年間契約なし、いつでもやめられます",
  },
  it: {
    label: "PC修理",
    name: "川辺コンピューター",
    items: [
      {
        title: "初期診断",
        value: "無料",
        note: "症状を見立ててから作業を判断します",
      },
      {
        title: "軽度トラブル",
        value: "6,800円〜",
        note: "症状によって料金は変わります",
      },
    ],
    extra: "＋ データ復旧は最短24時間で対応",
  },
};

const issuesByService = {
  study: {
    title: "こんなご相談、多いです",
    items: [
      "定期テストの点数を上げたい",
      "受験までの計画を一緒に立てたい",
      "学校に行きづらい時期がある",
      "大人になってから学び直したい",
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
      "会社のIT環境を相談したい",
    ],
  },
};

const voicesByService = {
  study: [
    {
      body:
        "テスト前に毎回パニックになる子でしたが、「どこからやればいいか」を一緒に整理してもらえて、自分から机に向かうようになりました。",
      attr: "中学2年生の保護者・豊橋市",
      illust: "study-voice-parent-smile.png",
    },
    {
      body:
        "苦手だった英語を、文法の前に「なぜそうなるか」から教えてくれます。受験までの計画を一緒に立ててもらえて、親も安心です。",
      attr: "中学3年生の保護者・豊川市",
      illust: "study-voice-online.png",
    },
  ],
  it: [
    {
      body:
        "突然パソコンが立ち上がらず、写真も全部あきらめかけていました。データを救い出していただいて、本当に助かりました。",
      attr: "60代女性・豊橋市",
      illust: "it-voice-senior-smile.png",
    },
    {
      body:
        "動作が遅くて買い替えようかと思っていたのですが、設定の見直しでだいぶ軽くなりました。買い替えずに済んで助かりました。",
      attr: "50代男性・田原市",
      illust: "it-voice-data-desk.png",
    },
  ],
};

const faqsByService = {
  study: [
    {
      q: "料金は事前にわかりますか？",
      a: "月額制で教材費や年間契約はありません。初回ご相談時にお子さまの状況と希望をうかがって、月額を明確にお伝えします。",
    },
    {
      q: "オンラインでも受けられますか？",
      a: "オンラインコースをご用意しています。全国どこからでも受講でき、対面と同じ品質でサポートします。",
    },
    {
      q: "対応エリアはどこですか？",
      a: "対面は豊橋・豊川・田原を中心に、オンラインなら全国対応です。お住まいの地域に合わせてご提案します。",
    },
  ],
  it: [
    {
      q: "料金は事前にわかりますか？",
      a: "初期診断は無料で、作業の前にお見積りをお伝えします。納得いただいてから進めるので、追加費用の心配はありません。",
    },
    {
      q: "出張対応はしてもらえますか？",
      a: "店舗お持ち込みを基本としつつ、近隣エリアへの出張も承ります。まずはお電話で症状をうかがい、最適な対応をご案内します。",
    },
    {
      q: "対応エリアはどこですか？",
      a: "豊橋市南牛川の店舗で受け付け、近隣地域への出張にも対応しています。郵送修理のご相談も可能です。",
    },
  ],
};



function Hero() {
  const titleChars = "KAWABIT".split("");
  return (
    <section className="hero" id="top" aria-label="KAWABIT ファーストビュー">
      <div className="hero__copy">
        <h1 className="hero__title" aria-label="KAWABIT">
          {titleChars.map((char, i) => (
            <span
              key={i}
              className="hero__title-char"
              style={{ "--i": i }}
              aria-hidden="true"
            >
              {char}
            </span>
          ))}
        </h1>
        <p className="hero__lead">
          家庭教師も、パソコン修理も。暮らしの近くに、川辺の相談先を。
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
            どちらも豊橋を拠点に、それぞれの分野で身近な相談を受けてきました。
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
          <a
            className="contact-card contact-card--study"
            href="https://kawabegakuin.jp/"
            target="_blank"
            rel="noopener noreferrer"
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
            <span className="contact-card__cta">
              詳しく見る
              <span className="contact-card__cta-arrow" aria-hidden="true">
                →
              </span>
            </span>
          </a>

          <a
            className="contact-card contact-card--it"
            href="https://kawabecom.jp/"
            target="_blank"
            rel="noopener noreferrer"
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
            <span className="contact-card__cta">
              詳しく見る
              <span className="contact-card__cta-arrow" aria-hidden="true">
                →
              </span>
            </span>
          </a>
        </div>

        <p className="contact__hours">
          <span className="contact__hours-label">営業時間</span>
          <span className="contact__hours-value">10:00 – 19:00 ／ 日曜休</span>
          <span className="contact__hours-note">両店共通</span>
        </p>
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
          pricingByService={pricingByService}
          issuesByService={issuesByService}
          voicesByService={voicesByService}
          faqsByService={faqsByService}
        />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <strong>KAWABIT</strong>
          <span>かわべ家庭教師学院 / 川辺コンピューター</span>
        </div>
      </footer>
    </>
  );
}
