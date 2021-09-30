import Image from 'next/image';
import Link from "next/link";


export default function Rules() {
    return (
        <div className="container">
            <h2>Server rules</h2>
            <ul>
                <li>Do not organize, participate in, or encourage harassment of others. Disagreements happen and are normal, but continuous, repetitive, or severe negative comments may cross the line into harassment and are not okay.</li>
                <li>Do not organize, promote, or coordinate servers around hate speech. It’s unacceptable to attack a person or a community based on attributes such as their race, ethnicity, national origin, sex, gender, sexual orientation, religious affiliation, or disabilities.</li>
                <li>Do not make threats of violence or threaten to harm others. This includes indirect threats, as well as sharing or threatening to share someone’s private personal information (also known as doxxing).</li>
                <li>Do not send others viruses or malware, attempt to phish others, or hack or DDoS them.</li>
                <li>Do not send NSFW content in server or you get ban from the moderator.</li>
                <li>You may not sexualize minors in any way. This includes sharing content or links which depict minors in a pornographic, sexually suggestive, or violent manner, and includes illustrated or digitally altered pornography that depicts minors (such as lolicon, shotacon, or cub). We report illegal content to the <Link href="https://www.missingkids.org/gethelpnow/cybertipline"><a target="_blank">National Center for Missing and Exploited Children</a></Link>.</li>
            </ul>
        <hr />
        
            <h2>Why I need follow the rules?</h2>
            <p>Because if you don't follow server rules you will</p>
            <b>First time</b>
            <li>Warn and delete that message or others</li>
            <b>Second time</b>
            <li>Warn mute for 10 minutes and delete that message or others</li>
            <b>Third time</b>
            <li>Warn mute for 1 hour and delete that message or others</li>
            <b>fourth time</b>
            <li>Ban and delete that message or others. <br />NOTE : <Link href="/">Ban appeal</Link> is here!</li>


      </div>
    );
  }