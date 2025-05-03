import "../styles/pages/home.page.css"
import "../styles/fonts/fonts.css"
import { Montserrat } from 'next/font/google';
import FeaturesSvg from "@/components/svg/features-svg";
import FiveStarSvg from "@/components/svg/five-stars-svg";
import "../styles/main/color.style.css"
import "../styles/main/globals.css"
import Image from "next/image";
import ContentPage from "./content/content-page";
import Featuring from "./content/featuring";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-montserrat',
  display: 'swap',
});

export default function Home() {
  return (
    <>
    <div className="main-page">
      <div className="home-section">
      <div className="home-content">
        <div className="home-heading" >Dream Curls: Achieve the Curls of Your Dreams</div>
        <div className={`home-para ${montserrat.variable}`}>Quick and effortless automatic hair curling you can enjoy anywhere, anytime…with ZERO hair tangling!</div>
        <div className="feature-svg">
          <FeaturesSvg />
        </div>
        <div className={`buy-button ${montserrat.variable}`}><div>YES! Give me GORGEOUS curls! </div></div>
      </div>
      </div>
      <div className="review-section">
      <div className="review-banner">
        <div className="review-content">
          <div className="review-heading"><span><FiveStarSvg /></span><span className={`heading-text ${montserrat.variable}`}>70,000+ Verified Reviews</span></div>
          <div className={`review-para ${montserrat.variable}`} ><p>&quot;‘I’m a total curl addict and I must have tried every hair curler there is out there. But out of all the curlers I’ve used, I never found one that curls my hair so quickly, that’s so easy to use or that gives me beautiful curls like the Dream Curls does. It’s my hair’s best friend and the best thing is it NEVER tangles my hair!&quot;</p></div>
          <div className={`review-username ${montserrat.variable}`}><p>Laura T., USA</p></div>
        </div>
      </div>
      </div>
    </div>
    <div className="sponsers-banner">
      <div className="sponsers-content">
        <div className="sponser-logo">
          <Image src="/sponsers-logo/9ff3727db551b01c53f1011f83326b57aaed157d.png" alt="fox sponser logo" width={144} height={58} />
        </div>
        <div className="sponser-logo">
          <Image src="/sponsers-logo/489024333fe9baecc9362bbce48b857bfa9c10d5.png" alt="USA Today Sponser Logo" width={340} height={95} />
        </div>
        <div className="sponser-logo">
          <Image src="/sponsers-logo/3dd57f6d4037b1cb499d6765ae24bb7c53dd784e.png" alt="elle logo" width={228} height={60} />
        </div>
        <div className="sponser-logo">
          <Image src="/sponsers-logo/ce4ab0af615a7a66a6cfdfd82da7387630aab87c.png" alt="cosmopolitan sponser logo" width={135} height={58} />
        </div>
        <div className="sponser-logo">
          <Image src="/sponsers-logo/f981ca2f7b4699d4b8724cb0664b25ebe4a1cbf9.png" alt="Vogue sponser logo" width={192} height={60} />
        </div>      
      </div>
    </div>
    <div className="component">
      <ContentPage/>
    </div>
    <div className="component">
      <Featuring />
    </div>
    </>
  );
}
