import { Fragment } from "react";
import RevealOnScroll from "./reveal-on-scroll";

const services = [
  {
    id: "study",
    label: "学び",
    title: "家庭教師",
    name: "かわべ家庭教師学院",
    lead: "「わからない」を、いっしょにほぐそう。",
    body:
      "定期テスト対策、受験準備、学習習慣づくりまで。お子さまの状況を聞きながら、今必要な学び方を一緒に整理します。",
    href: "https://kawabegakuin.jp/",
    phone: "0120-777-697",
    cta: "家庭教師に相談する",
    spot: "study",
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
    label: "IT",
    title: "パソコン修理",
    name: "川辺コンピューター",
    lead: "パソコンの「困った！」を、サクッと解決。",
    body:
      "起動しない、動作が遅い、データを取り出したい。症状を確認しながら、修理・設定・データ復旧の相談先へ案内します。",
    href: "https://kawabecom.jp/",
    phone: "0532-63-7717",
    cta: "PC修理に相談する",
    spot: "repair",
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

const pricingPanels = [
  {
    service: "study",
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
    stamp: "kawabit-spot-stamp-study.png",
  },
  {
    service: "it",
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
    stamp: "kawabit-spot-stamp-repair.png",
  },
];

const faqs = [
  {
    q: "どちらのサービスから相談すればいいかわからないのですが？",
    a: "お困りごとの内容をうかがってから、合う窓口へご案内します。学びとITで担当は分かれていますが、KAWABITとして連携していますのでご安心ください。",
  },
  {
    q: "料金は事前にわかりますか？",
    a: "パソコン修理は初期診断が無料で、作業の前にお見積りをお伝えします。家庭教師は月額制で、教材費や年間契約はありません。",
  },
  {
    q: "オンラインでも対応してもらえますか？",
    a: "家庭教師はオンラインコースをご用意しており、全国どこからでも受講いただけます。パソコン修理は店舗お持ち込みを基本に、近隣エリアへ出張も承ります。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "家庭教師は豊橋・豊川・田原を中心に、オンラインは全国対応です。パソコン修理は豊橋市南牛川の店舗で受け付け、近隣地域への出張にも対応しています。",
  },
  {
    q: "営業時間外でも問い合わせできますか？",
    a: "Webからのお問い合わせは24時間受け付けています。ご返答は営業時間内（10:00〜19:00／日曜休）に順次お返しします。",
  },
  {
    q: "会社や学校からの相談も可能ですか？",
    a: "パソコン側は中小企業向けのITコンサルティング・購入サポートまでご相談いただけます。学びの面では、合同勉強会などのご相談も承っています。",
  },
];

const voices = [
  {
    service: "study",
    label: "家庭教師",
    body: "テスト前に毎回パニックになる子でしたが、「どこからやればいいか」を一緒に整理してもらえて、自分から机に向かうようになりました。",
    attr: "中学2年生の保護者・豊橋市",
  },
  {
    service: "it",
    label: "PC修理",
    body: "突然パソコンが立ち上がらず、写真も全部あきらめかけていました。データを救い出していただいて、本当に助かりました。",
    attr: "60代女性・豊橋市",
  },
  {
    service: "study",
    label: "家庭教師",
    body: "苦手だった英語を、文法の前に「なぜそうなるか」から教えてくれます。受験までの計画を一緒に立ててもらえて、親も安心です。",
    attr: "中学3年生の保護者・豊川市",
  },
  {
    service: "it",
    label: "PC修理",
    body: "動作が遅くて買い替えようかと思っていたのですが、設定の見直しでだいぶ軽くなりました。買い替えずに済んで助かりました。",
    attr: "50代男性・田原市",
  },
];

const voiceArtFiles = {
  study: "kawabit-spot-voice-study.png",
  it: "kawabit-spot-voice-repair.png",
};

const issueGroups = [
  {
    id: "study",
    label: "家庭教師",
    title: "学びの困りごと",
    items: [
      "定期テストの点数を上げたい",
      "受験までの計画を一緒に立てたい",
      "学校に行きづらい時期がある",
      "大人になってから学び直したい",
      "近くに通えない／オンラインで受けたい",
    ],
  },
  {
    id: "it",
    label: "PC修理",
    title: "ITの困りごと",
    items: [
      "急に動かなくなった、立ち上がらない",
      "大事なデータを取り出したい",
      "動作が遅くて買い替えに迷う",
      "パソコンの使い方を教わりたい",
      "会社のIT環境を相談したい",
    ],
  },
];

const spotFiles = {
  study: "kawabit-spot-study.png",
  repair: "kawabit-spot-repair.png",
  combo: "kawabit-spot-combo.png",
  person: "kawabit-spot-person.png",
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
        <a href="#issues">相談できること</a>
        <a href="#faq">よくある質問</a>
        <a href="#contact">相談する</a>
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
          <span className="hero__title-line">学びもITも、</span>
          <span className="hero__title-line">まるっと</span>
          <span className="hero__title-line">おまかせ！</span>
        </h1>
        <p className="hero__lead">
          家庭教師も、パソコン修理も、データ復旧も。
          困ったら、まずKAWABITで聞いちゃおう！
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
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro section reveal">
      <div className="intro__text">
        <h2>迷ったら、KAWABITに聞いてみよう。</h2>
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

function Scene() {
  return (
    <section className="scene reveal" aria-label="KAWABIT の風景">
      <div className="scene__inner">
        <div className="scene__heading">
          <p className="section-label">KAWABIT の風景</p>
          <h2>
            学びと修理が、
            <br />
            となり同士の街。
          </h2>
          <p className="scene__lead">
            机に向かう子も、パソコンとにらめっこする大人も。
            ひとつの地図のなかで、それぞれの「困った」がほどけていきます。
          </p>
        </div>
        <figure className="scene__figure">
          <img
            src="/illustrations/kawabit-scene-island.png"
            alt="家庭教師の学習風景とパソコン修理の作業風景がひとつの島につながったイラスト"
          />
        </figure>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services section" id="services">
      {services.map((service, index) => (
        <Fragment key={service.id}>
          <article className={`service service--${service.id} reveal`}>
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
            <div className="service__points">
              <p className="service__points-label">選ばれる理由</p>
              <ol className="service__points-list">
                {service.points.map((point, i) => (
                  <li className="service__point" key={point.title}>
                    <div className="service__point-head">
                      <span className="service__point-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="service__point-tag">{point.tag}</span>
                    </div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </article>
          {index === 0 ? <Scene /> : null}
        </Fragment>
      ))}
    </section>
  );
}

function Pricing() {
  return (
    <section className="pricing section reveal" id="pricing">
      <div className="section-heading">
        <p className="section-label">はじめやすさ</p>
        <h2>
          気軽に、
          <br />
          はじめられますよ。
        </h2>
        <p className="pricing__lead">
          両サービスとも「まずは試したい」気持ちに寄りそう料金設計です。
        </p>
      </div>
      <div className="pricing__panels">
        {pricingPanels.map((panel) => (
          <div
            className={`pricing__panel pricing__panel--${panel.service}`}
            key={panel.service}
          >
            <header className="pricing__panel-head">
              <span className="pricing__panel-tag">{panel.label}</span>
              <p className="pricing__panel-name">{panel.name}</p>
            </header>
            {panel.stamp ? (
              <img
                className="pricing__stamp"
                src={`/illustrations/${panel.stamp}`}
                alt=""
                aria-hidden="true"
              />
            ) : null}
            <ul className="pricing__rows">
              {panel.items.map((item) => (
                <li className="pricing__row" key={item.title}>
                  <p className="pricing__row-title">{item.title}</p>
                  <p className="pricing__row-value">{item.value}</p>
                  <p className="pricing__row-note">{item.note}</p>
                </li>
              ))}
            </ul>
            <p className="pricing__extra">{panel.extra}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section className="voices section reveal" id="voices">
      <div className="section-heading">
        <p className="section-label">お客様の声</p>
        <h2>
          うれしい声、
          <br />
          届いてます！
        </h2>
        <p className="voices__lead">
          実際にご相談いただいた方からの感想を、一部ご紹介します。
        </p>
      </div>
      <div className="voices__list">
        {voices.map((voice) => (
          <article
            className={`voice voice--${voice.service}`}
            key={voice.body}
          >
            <img
              className="voice__art"
              src={`/illustrations/${voiceArtFiles[voice.service]}`}
              alt=""
              aria-hidden="true"
            />
            <span className="voice__tag">{voice.label}</span>
            <p className="voice__body">{voice.body}</p>
            <p className="voice__attr">{voice.attr}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Issues() {
  return (
    <section className="issues section reveal" id="issues">
      <div className="section-heading">
        <p className="section-label">相談できること</p>
        <h2>
          こんなとき、
          <br />
          相談してみませんか？
        </h2>
      </div>
      <div className="issues__groups">
        {issueGroups.map((group) => (
          <div
            className={`issues__group issues__group--${group.id}`}
            key={group.id}
          >
            <header className="issues__group-head">
              <span className="issues__group-tag">{group.label}</span>
              <h3>{group.title}</h3>
            </header>
            <ul className="issues__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Spot name="path" className="issues__spot" />
    </section>
  );
}

function Faq() {
  return (
    <section className="faq section reveal" id="faq">
      <div className="section-heading">
        <p className="section-label">よくある質問</p>
        <h2>
          気になること、
          <br />
          なんでも聞いてみて。
        </h2>
      </div>
      <div className="faq__list">
        {faqs.map((item) => (
          <details className="faq__item" key={item.q}>
            <summary className="faq__summary">
              <span className="faq__mark" aria-hidden="true">Q</span>
              <span className="faq__question">{item.q}</span>
              <span className="faq__chevron" aria-hidden="true" />
            </summary>
            <div className="faq__body">
              <span className="faq__mark faq__mark--a" aria-hidden="true">A</span>
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section reveal" id="contact">
      <div className="contact__main">
        <div>
          <p className="section-label">まずは相談する</p>
          <h2>
            まずは、
            <br />
            気軽に話してみませんか？
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
        </div>
      </div>
      <dl className="contact__info">
        <div>
          <dt>対応エリア</dt>
          <dd>
            家庭教師：豊橋・豊川・田原（オンラインは全国）
            <br />
            PC修理：豊橋市を中心に近隣地域へ出張も
          </dd>
        </div>
        <div>
          <dt>所在地</dt>
          <dd>
            愛知県豊橋市南牛川1丁目1-7
          </dd>
        </div>
        <div>
          <dt>営業時間</dt>
          <dd>10:00 – 19:00 ／ 日曜休</dd>
        </div>
      </dl>
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
        <Pricing />
        <Voices />
        <Issues />
        <Faq />
        <Contact />
      </main>
      <footer className="site-footer">
        <strong>KAWABIT</strong>
        <span>かわべ家庭教師学院 / 川辺コンピューター</span>
      </footer>
    </>
  );
}
