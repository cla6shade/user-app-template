const steps = [
  {
    label: "1 · 요청하기",
    title: "만들고 싶은 모습을 말해 주세요",
    description: (
      <>
        평소 말하듯 설명하고 원하는 점을
        <br />
        언제든 덧붙일 수 있어요.
      </>
    ),
  },
  {
    label: "2 · 진행 확인",
    title: "과정을 편하게 지켜보세요",
    description: (
      <>
        지금 무엇을 하는지 쉬운 상태로
        <br />
        차분하게 알려 드려요.
      </>
    ),
  },
  {
    label: "3 · 사용해 보기",
    title: "완성된 앱을 바로 확인하세요",
    description: (
      <>
        앱의 미리보기를 실시간으로 살펴볼 수 있어요.
        <br />
        만약 작동하지 않는다면 새로고침을 눌러주세요.
      </>
    ),
  },
];

const questions = [
  {
    question: "요청은 얼마나 자세히 써야 하나요?",
    answer:
      "짧게 시작해도 괜찮아요. 결과를 본 뒤 색, 문구, 흐름처럼 바꾸고 싶은 점을 이어서 말씀해 주세요.",
  },
  {
    question: "만드는 중에도 요청을 바꿀 수 있나요?",
    answer:
      "네. 진행 상황을 보면서 새 요청을 보내면 현재 작업에 반영할 수 있어요.",
  },
  {
    question: "미리보기가 바로 보이지 않으면 어떻게 하나요?",
    answer:
      "먼저 새로고침을 사용해 보세요. 계속 기다려야 한다면 서버 재시작이나 로그로 상태를 확인할 수 있어요.",
  },
  {
    question: "앱을 더 크게 보고 싶어요.",
    answer:
      "새 창에서 열기를 사용하면 미리보기 영역을 벗어나 더 넓게 확인할 수 있어요.",
  },
];

export default function Home() {
  return (
    <main className="preview-canvas" data-node-id="188:77">
      <div className="preview-content">
        <header className="preview-intro" data-node-id="188:78">
          <h1 data-node-id="188:79">원하는 앱을 말하면, 바로 만들어져요.</h1>
          <p data-node-id="188:80">
            어려운 설정 없이 필요한 화면과 동작을 설명해 주세요.
            <br />
            진행 상황을 확인하고 완성된 앱을 이곳에서 바로 사용해 볼 수 있어요.
          </p>
        </header>

        <section className="usage-section" aria-labelledby="usage-title" data-node-id="188:81">
          <h2 id="usage-title" data-node-id="188:82">이렇게 사용해 보세요</h2>
          <div className="usage-rail" data-node-id="188:83">
            {steps.map((step, index) => (
              <article className="usage-step" key={step.label} data-node-id={["188:84", "188:89", "188:94"][index]}>
                <p className="step-label">{step.label}</p>
                <h3>{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section" aria-labelledby="faq-title" data-node-id="188:98">
          <h2 id="faq-title" data-node-id="188:99">자주 묻는 질문</h2>
          <div className="faq-list" data-node-id="188:100">
            {questions.map((item, index) => (
              <article className="faq-row" key={item.question} data-node-id={["188:101", "188:104", "188:107", "188:110"][index]}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
