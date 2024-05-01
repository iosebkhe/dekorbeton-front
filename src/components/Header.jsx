import {
  RiFacebookCircleFill,
  RiPhoneFill,
  RiWhatsappFill,
  RiYoutubeFill
} from "react-icons/ri";
import Navigation from "./Navigation";
import headerStyles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={`${headerStyles.header} container`}>
      <div className={headerStyles.content}>

        <div className={headerStyles.logo}>
          <Link to="/" aria-label="main logo link">
            <img src="/logo-dekorbeton.webp" alt="dekorbeton logo" />
          </Link>
        </div>

        <div className={headerStyles.description}>
          ბეჭდური ბეტონის ინსტრუმენტები და მასალები
        </div>

        <div className={headerStyles.contact}>
          <a
            className={headerStyles.contact__link}
            aria-label="contact mobile number"
            href="tel:+995599160510"
            target="_blank">
            <RiPhoneFill />
            599160510
          </a>
        </div>

        <div className={headerStyles.social}>
          <p className={headerStyles.social__title}>
            გამოგვყევით
          </p>
          <ul className={headerStyles.social__list}>
            <li className={headerStyles.social__item}>
              <a className={headerStyles.social__link} aria-label="Chat on WhatsApp"
                href="https://wa.me/599160510"
                target="_blank">
                <RiWhatsappFill
                  size={36}
                  fill="#25d366"
                  className={headerStyles.social__icon} />
              </a>
            </li>
            <li className={headerStyles.social__item}>
              <a className={headerStyles.social__link} aria-label="Follow us on facebook"
                href="#"
                target="_blank">
                <RiFacebookCircleFill
                  size={36}
                  fill="#1877F2	"
                  className={headerStyles.social__icon} />
              </a>
            </li>
            <li className={headerStyles.social__item}>
              <a className={headerStyles.social__link} aria-label="Follow us on YouTube"
                href="#"
                target="_blank">
                <RiYoutubeFill
                  size={36}
                  fill="#FF0000"
                  className={headerStyles.social__icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div className="navigation-wrapper">
        <Navigation />
      </div>
    </header >
  );
}