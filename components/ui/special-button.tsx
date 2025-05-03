import "../../styles/ui/special-btn.style.css"
import { Montserrat } from 'next/font/google';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-montserrat',
  display: 'swap',
});

export default function SpecialButton( {text}:  {text: string } ){
    return(
        <div className="button">
            <div className={`button-text ${montserrat.variable}`}>{text}</div>
        </div>
    );
}