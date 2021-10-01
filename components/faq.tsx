export default function Question({ question, answer }: { question: string, answer: string }) {
    return <div>
      <h3 className="">{question}</h3>
      <p className="">
       {answer}
      </p>
    </div>
  }