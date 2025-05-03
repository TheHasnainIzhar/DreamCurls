import "../../styles/layout/exclusive-banner.style.css"

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-montserrat',
  display: 'swap',
});


export default function ExclusiveBanner () {
    return(
        <div className="banner">
            <div className="banner-content">
                <div className={`banner-text ${montserrat.variable}`}><p>EXCLUSIVE LIMITED-TIME ONLINE OFFER</p></div>
            </div>
        </div>
    );
}