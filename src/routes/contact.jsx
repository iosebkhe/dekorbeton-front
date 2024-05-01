import { RiMailLine, RiPhoneLine, RiWhatsappLine } from "react-icons/ri";
import contactStyles from "./contact.module.css";

export default function Contact() {
  return (
    <div className="container">
      <h1 className={contactStyles.title}>კონტაქტი</h1>
      <div className={contactStyles.content}>
        <div className={contactStyles.contact__info}>
          <div>
            <a href="tel:+995599160510">
              <span>
                <RiPhoneLine size={42} />
              </span>
              599160510
            </a>
          </div>

          <div>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/599160510" target="_blank">
              <span>
                <RiWhatsappLine size={42} />
              </span>
              Whatsapp
            </a>
          </div>

          <div>
            <a aria-label="send email" href="mailto:dekorbetongeo@gmail.com" target="_blank">
              <span>
                <RiMailLine size={42} />
              </span>
              dekorbetongeo@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className={contactStyles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.1872484492947!2d44.906621574926!3d41.69489327686669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440dff3da85c65%3A0x5ee6f1de42c7c4e8!2sZaza%20Damenia%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1714561532427!5m2!1sen!2sge" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}