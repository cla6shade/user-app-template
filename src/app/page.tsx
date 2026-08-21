import Link from "next/link";

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="Vibe Start 홈">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span>Vibe Start</span>
        </Link>
        <nav className="nav" aria-label="주요 메뉴">
          <Link className="nav-link is-active" href="/">
            홈
          </Link>
          <Link className="nav-link" href="/faq">
            FAQ
          </Link>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="status-line">
            <span className="status-dot" aria-hidden="true" />
            수정할 준비가 되었습니다
          </p>
          <h1 id="hero-title">
            새로운 아이디어가
            <br />
            시작되는 화면
          </h1>
          <p className="hero-description">
            이곳은 바이브코딩을 위한 기본 화면입니다. 문구와 색상, 기능을
            자유롭게 바꾸며 나만의 웹앱을 완성해 보세요.
          </p>
          <Link className="faq-link" href="/faq">
            자주 묻는 질문 보기
          </Link>
        </div>

        <div className="preview-window" aria-label="앱 화면 미리보기">
          <div className="preview-bar">
            <span className="preview-brand">My App</span>
            <div className="preview-tabs" aria-hidden="true">
              <span className="preview-tab is-current" />
              <span className="preview-tab" />
            </div>
          </div>
          <div className="preview-body">
            <div className="preview-intro">
              <span className="preview-label">WELCOME</span>
              <div className="preview-title-line" />
              <div className="preview-copy-line" />
              <div className="preview-copy-line is-short" />
            </div>
            <div className="preview-action" />
          </div>
          <div className="preview-footer">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

    </main>
  );
}
