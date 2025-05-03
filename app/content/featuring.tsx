import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import "../../styles/pages/featuring.style.css"
import TangleSvg from '@/components/svg/tangle-svg';
import LongLastingSvg from '@/components/svg/longlastingcurls-svg';
import QuickCurls from '@/components/svg/quickcurls-svg';
import SalonVisitSvg from '@/components/svg/salon-visit-svg';
import HeatDamageSvg from '@/components/svg/heat-damage-svg';
import UsesTime from '@/components/svg/uses-time-svg';
import NanoCoating from '@/components/svg/nano-coating-svg';
import CompactTravel from '@/components/svg/compact-travel-svg';
import HeatSetting from '@/components/svg/heat-setting-svg';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-montserrat',
  display: 'swap',
});


export default function Featuring() {
    return(
        <div className="featuring-section">
            <div className="text-content">
                <div className={`text-para-1 ${montserrat.variable}`}><p>Step out of your front door with salon-quality curls every single day. Create voluminous curls and elegant waves in minutes and feel the confidence of knowing your hair has never looked so beautiful. </p></div>
                <div className="text-para-2"><p>So, are you ready to feel the satisfaction of receiving compliments on your glorious curls every day?</p></div>
                <div className="text-heading"><p>Then you’re ready for the Dream Curls</p></div>
            </div>
            <div className="features-section-1">
                <div className="feature-column-1">
                    <div className="feature">
                        <div className='feature-text-content-1'>
                            <p className='feature-heading'>100% Tangle-Free</p>
                            <p className='feature-para'>Never feel worried about your curler painfully tangling your hair around a superheated piece of ceramic again. The Dream Curls’s anti-tangle feature guarantees zero tangles when used correctly.</p>
                        </div>
                        <div className='feature-svg-1'>
                        <TangleSvg />
                        </div>
                    </div>
                    <div className="feature">
                        <div className='feature-text-content-1'>
                            <p className='feature-heading'>Long-Lasting Curls</p>
                            <p className='feature-para'>Tired of curls that droop and die after a couple of hours? The Dream Curls lets you lock in rich and beautiful curls that last all day long - and you might enjoy an elegant post-curl wave the next day too.</p>
                        </div>
                        <div className='feature-svg-1'>
                            <LongLastingSvg/>
                        </div>
                    </div>
                    <div className="feature">
                        <div className='feature-text-content-1'>
                            <p className='feature-heading'>Quick and Easy Curls</p>
                            <p className='feature-para'>No more sitting curling for 40 minutes as your arm gets cramped. The Dream Curls lets you curl your hair in as little as 15 minutes. Plus, the automatic action lets you keep your arm down in comfort.</p>
                        </div>
                        <div className='feature-svg-1'>
                            <QuickCurls />
                        </div>
                    </div>
                    <div className="feature">
                        <div className='feature-text-content-1'>
                            <p className='feature-heading'>Replaces Salon Visits</p>
                            <p className='feature-para'>Stop wasting money on time-consuming salon appointments. The Dream Curls gives you salon-quality curls from the comfort of your own home. You’ll make your money back from skipping the salon with just a few uses!</p>
                        </div>
                        <div className='feature-svg-1'>
                            <SalonVisitSvg/>
                        </div>
                    </div>
                </div>
                <div className="product-image">
                    <Image src={"/images/product-image.png"} alt='dream curls product image' width={200} height={781}/>
                </div>
                <div className="feature-column-2">
                    <div className="feature">
                        <div className='feature-text-content-2'>
                            <p className='feature-heading'>Minimizes Heat Damage</p>
                            <p className='feature-para'>Any product that uses heat to style your hair will not be good for it. But the Dream Curls evenly distributes the heat to minimize any hair damage to keep your hair healthier and let you use your Dream Curls without worry each day.</p>
                        </div>
                        <div className='feature-svg-2'>
                            <HeatDamageSvg/>
                        </div>
                    </div>
                    <div className="feature">
                        <div className='feature-text-content-2'>
                            <p className='feature-heading'>Nano-Coating Technology</p>
                            <p className='feature-para'>Along with the even heat distribution, the nano-coating technology with tourmaline used in the Dream Curls also works to prevent split ends and reduce frizziness.</p>
                        </div>
                        <div className='feature-svg-2'>
                            <NanoCoating/>
                        </div>
                    </div>
                    <div className="feature">
                        <div className='feature-text-content-2'>
                            <p className='feature-heading'>2-4 Uses Per Charge</p>
                            <p className='feature-para'>Tired of battery-powered curlers dying on you half way through curling? The Dream Curls has a 60 min battery life per charge, so you can curl your hair multiple times per full charge.</p>
                        </div>
                        <div className='feature-svg-2'>
                            <UsesTime/>
                        </div>
                    </div>
                    <div className="feature">
                        <div className='feature-text-content-2'>
                            <p className='feature-heading'>Compact Travel-Friendly Design</p>
                            <p className='feature-para'>Regular curlers are big, bulky and need plugging into a power source to heat. The Dream Curls measures a travel-friendly 8.35 x 3.27 x 2.64 inches, weighs just 15Oz, and can be fully charged in just 4 hours.</p>
                        </div>
                        <div className='feature-svg-2'>
                            <CompactTravel/>
                        </div>
                    </div>
                </div>
                <div className="feature-column-3">
                    <div className="feature">
                        <div className='feature-text-content-3'>
                            <p className='feature-heading'>
                                6 Heat Settings With Timer
                            </p>
                            <p className='feature-para'>Create the perfect curls with the different heat settings and curling times on the Dream Curls. Once you’ve found the right time and temperature settings, use them daily to achieve the look you want.</p>
                        </div>
                        <div className='feature-svg-3'>
                            <HeatSetting/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="features-section-1">
            </div> */}
        </div>
    );
}