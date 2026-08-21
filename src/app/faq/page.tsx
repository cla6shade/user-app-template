import Link from "next/link";

const questions = [
  {
    question: "이 앱은 어떻게 수정하나요?",
    answer:
      "좌측 개발 패널에 만들고 싶은 화면이나 기능을 입력해 주세요. 요청한 내용을 바탕으로 현재 앱이 수정됩니다.",
  },
  {
    question: "어떤 내용을 요청할 수 있나요?",
    answer:
      "화면 구성, 문구, 색상, 이동 경로와 필요한 기능을 자연스러운 문장으로 요청할 수 있습니다.",
  },
  {
    question: "완성된 화면은 어디에서 확인하나요?",
    answer:
      "변경된 결과는 이 미리보기 영역에 표시됩니다. 화면을 이동하며 각 페이지를 확인할 수 있습니다.",
  },
];

export default function FaqPage() {
  return (
    <main className="workspace-shell">
      <header className="topbar workspace-topbar">
        <Link className="brand" href="/" aria-label="Vibe Start 홈">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span>Vibe Start</span>
        </Link>
        <nav className="nav" aria-label="주요 메뉴">
          <Link className="nav-link" href="/">
            홈
          </Link>
          <Link className="nav-link is-active" href="/faq">
            FAQ
          </Link>
        </nav>
      </header>

      <section className="faq-page" aria-labelledby="faq-title">
        <div className="faq-heading">
          <h1 id="faq-title">자주 묻는 질문</h1>
          <p>앱을 수정하고 확인하는 방법을 안내합니다.</p>
        </div>
        <div className="faq-list">
          {questions.map((item) => (
            <article className="faq-item" key={item.question}>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
