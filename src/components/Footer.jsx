import { RiCopyrightFill, RiFacebookCircleFill, RiMailFill, RiMapPinFill, RiPhoneFill, RiWhatsappFill, RiYoutubeFill } from "react-icons/ri";
import footerStyles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={`${footerStyles.footer}`}>
      <div className="">
        <div className={`${footerStyles.footer__top} container`}>
          <div className={footerStyles.footer__column}>
            <h3>დაგვიკავშირდით</h3>
            <ul className={footerStyles.column__list}>
              <li className={footerStyles.column__item}>
                <a className={footerStyles.column__link} aria-label="contact mobile number" href="tel:+995599160510" target="_blank">
                  <RiPhoneFill size={18} /> 599160510
                </a>
              </li>
              <li className={footerStyles.column__item}>
                <a className={footerStyles.column__link} aria-label="contact mobile number" href="mailto:dekorbetongeo@gmail.com" target="_blank">
                  <RiMailFill size={18} /> dekorbetongeo@gmail.com
                </a>
              </li>
              <li className={footerStyles.column__item}>
                <a className={footerStyles.column__link} aria-label="contact mobile number" href="https://maps.app.goo.gl/NMeAP1M5k3M2AAbe8" target="_blank">
                  <RiMapPinFill size={18} /> თბილისი, ზაზა დამენიას 2
                </a>
              </li>
            </ul>
          </div>
          <div className={footerStyles.footer__column}>
            <h3>კომპანია</h3>
            <ul className={footerStyles.column__list}>
              <li className={footerStyles.column__item}>
                <Link className={footerStyles.column__link} aria-label="main page" to="/">
                  მთავარი
                </Link>
              </li>
              <li className={footerStyles.column__item}>
                <Link className={footerStyles.column__link} aria-label="link to product page" to="/products">
                  პროდუქტები
                </Link>
              </li>
              <li className={footerStyles.column__item}>
                <Link className={footerStyles.column__link} aria-label="link to ცონტაცტ პაგე" to="/contact">
                  კონტაქტი
                </Link>
              </li>
            </ul>
          </div>
          <div className={footerStyles.footer__column}>
            <h3>გამოგვყევით</h3>
            <ul className={footerStyles.column__list}>
              <li className={footerStyles.column__item}>
                <a aria-label="Chat on WhatsApp"
                  href="https://wa.me/599160510"
                  target="_blank"
                  className={footerStyles.column__link}
                >
                  <RiWhatsappFill
                    size={28}
                    fill="#07689F"
                    className={footerStyles.social__icon} />
                  Whatsapp
                </a>
              </li>
              <li className={footerStyles.column__item}>
                <a aria-label="Follow us on facebook"
                  href="#"
                  target="_blank"
                  className={footerStyles.column__link}>
                  <RiFacebookCircleFill
                    size={28}
                    fill="#07689F	"
                    className={footerStyles.social__icon} />
                  Facebook
                </a>
              </li>
              <li className={footerStyles.column__item}>
                <a aria-label="Follow us on YouTube"
                  href="#"
                  target="_blank"
                  className={footerStyles.column__link}>
                  <RiYoutubeFill
                    size={28}
                    fill="#07689F"
                    className={footerStyles.social__icon} />
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={footerStyles.footer__bottom}>
          <div className={`${footerStyles.copy} container`}>
            <RiCopyrightFill
              size={20}
              fill="#07689F"
            />
            <p>Copyright Dekorbeton.Ge</p>
          </div>
        </div>
      </div>
    </footer >
  );
}