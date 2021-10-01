import Link from "next/link";

import Question from "./faq";


export default function Fqa() {
  return (
        <div className="container">
        <h2>FAQ</h2>
        <Question
            question="How do I get unban"
            answer="" />
            <p className="">
            You can get unban by fill in ban appeal. Go to <Link href='#'><a>banappeal page</a></Link> to get form link
            </p>

        <Question
            question="How to become a moderator in kumi server"
            answer="" />
            <p className="">
              If we need more moderator we will post in <Link href='https://discord.com/channels/884365961543684126/884402109821374514'><a target="_blank"><kbd>#announcement</kbd></a></Link> channel
            </p>

        <Question
            question="How to contribute in kumi website"
            answer="" />
            <p className="">
              Open <Link href='https://github.com/Kumithechubbybear/New-KumiWeb/pulls'><a target="_blank">github pullrequest</a></Link> and open pulls also add description about what you contribute
            </p>


        </div>
  );
}