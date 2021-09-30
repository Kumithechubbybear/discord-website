export default function Question({ question, answer }: { question: string, answer: string }) {
    return <div>
      <h3 className="">Q : {question}</h3>
      <p className="">
       A : {answer}
      </p>
    </div>
  }