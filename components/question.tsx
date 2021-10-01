//import Link from "next/link";

import Question from "./faq";


export default function Fqa() {
  return (
        <div className="container">
        <h2>FAQ</h2>
        <Question
            question="How do I get unban"
            answer="You can get unban by fill in ban appeal. Go to banappeal page to get form link" />

        <Question
            question="How to become a moderator in kumi server"
            answer="" />
            <p className="">
              If we need more moderator we will post in <kbd>#announcement</kbd> channel
            </p>

        </div>
  );
}