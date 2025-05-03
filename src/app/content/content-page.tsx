import Image from "next/image";
import "../../styles/pages/content-page.style.css"
import "../../styles/fonts/fonts.css"


export default function ContentPage() {
    return(
        <div className="content-page">
            <div className="content-body">
                <div className={`content-heading`}>STOP Using Curlers That Tangle Up Your Beautiful Hair And Burn Your Fingers</div>
                <div className="article-container">
                    <div className="content-container">
                        <Image src={"/images/033d1ac630bc16168ceccf318a6b2d55d67115c1.png"} alt="what happens rong?" width={650} height={434}/>
                        <div className="text-content">
                            <div className="text-heading">If you’ve tried Automatic Hair Curlers before…</div>
                            <div className="text-para"><p>Then you’ve probably experienced the pain of feeding your hair into the chamber, expecting it to come out beautifully curled…</p></div>
                            <div className="text-para"><p>Only to feel the curler chew up your hair as it rotates, turning your locks into a tangled, damaged and ugly mess.</p></div>
                        </div>
                    </div>
                    <div className="content-container">
                        <Image src={"/images/5d0aff074635474b20c29caeeacead1835452f49.jpg"} alt="what happens wrong also next?" width={650} height={434}/>
                        <div className="text-content">
                            <div className="text-heading">And if you’ve used regular Hair Curling Irons…</div>
                            <div className="text-para"><p>You’ve most likely felt the pain of burning your fingers, holding your arm up so long it totally cramps up, or wasting half the night waiting for your hair to curl…</p></div>
                            <div className="text-para"><p>Just to have flat and undefined curls that don’t even last half the night.</p></div>
                        </div>
                    </div>
                </div>
                <div className="content-page-footer">
                    <div className="content-footer-heading">You spend enough of your precious time and money keeping your hair healthy and beautiful.</div>
                    <div className="content-footer-para">The last thing you want is <span>a poor quality</span> beauty accessory <span>destroying your hair</span> and <span>ruining your sleek</span> and sophisticated look.</div>
                    <div className="content-footer-para">Your appearance and your confidence are too important to be ruined by shoddy devices that kill your confidence. </div>
                </div>
                <div className="product-showcase">
                    <div className="showcase-content">
                        <div className="showcase-text">
                            <div className="showcase-para"><p>It’s time for a change…</p></div>
                            <div className="showcase-para"><p>It’s time for an automatic curler your hair deserves…</p></div>
                            <div className="showcase-heading"><p>It’s time for Dream Curls</p></div>
                        </div>
                        <div className="showcase-image"><Image src={"/images/a0ffba2773175e6f753c31878a898273d8d01e36.png"} alt="girl holding our product" width={871} height={871}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}