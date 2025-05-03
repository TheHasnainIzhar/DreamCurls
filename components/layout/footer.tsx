import SpecialButton from "../ui/special-button";
import "../../styles/layout/footer.style.css"

export default function Footer() {
    return(
        <div className="footer">
            <div className="footer-text">Get tangle-free salon quality curls and let your confidence flourish…
            With an automatic curler so easy and safe even a child could use it.</div>
            <div><SpecialButton text="YES, I WANT DREAM CURLS!!"/></div>
        </div>
    );
}