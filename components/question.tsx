import Link from "next/link";

import Question from "./faq";


export default function Fqa() {
  return (
        <div className="container">
        <h2>FAQ</h2>
        <Question
            question="How do I get unban"
            answer="You can get unban by fill in ban appeal. Go to banappeal page to get form link" />

        </div>
  );
}