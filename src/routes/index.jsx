import { Link } from "react-router-dom";
import indexStyles from "./index.module.css";
import { RiCheckFill } from "react-icons/ri";

export default function Index() {
  return (
    <div className={`${indexStyles.wrapper}`}>
      <div className={indexStyles.video}>
        <video autoPlay muted loop>
          <source src="/dekorbeton-cover-video.mp4" />
        </video>
      </div>
      <div className={`${indexStyles.content} container`}>
        <h1 className={indexStyles.title}>
          დეკორატიული ბეჭდური ბეტონი არის  უნივერსალური ტექნოლოგია, როდესაც პოლიურეტანის ფორმების (ყალიბების,შტამპების) მეშვეობით შესაძლებელია ახლად მოწყობილ ბეტონის ზედაპირზე ბუნებრივი ქვის ან ხის იატაკის შესანიშნავი იმიტაცია. იგი შემუშავდა და დამკვიდრდა დაახლოებით 40 წლის წინ აშშ- ში და უკვე ფართოდ არის გავრცელებული ევროპაში და ზოგიერთ სნგ-ს ქვეყნებში.
        </h1>

        <div className={indexStyles.btn__box}>
          <Link to="/products" className={indexStyles.btn}>
            პროდუქტების კატალოგი
          </Link>
        </div>

        {/* about dekotbeton */}
        <div className={indexStyles.features}>
          <h3>ბეჭდური ბეტონის უპირატესობები</h3>
          <div className={indexStyles.grid}>
            {/* 1 */}
            <div className={indexStyles.image}>
              <img src="/mtavari-1.webp" alt="mtavari 1" />
            </div>
            <div className={indexStyles.text}>
              <ul className={indexStyles.list}>
                <li className={indexStyles.list__item}>
                  <span>
                    <RiCheckFill size={24} />
                  </span>
                  <p>
                    გამოიყენება როგორც სადგომებზე და მოედნებზე, ასევე კერძო სახლებისა და აგარაკებსა ეზოებში.
                  </p>
                </li>
                <li className={indexStyles.list__item}>
                  <span>
                    <RiCheckFill size={24} />
                  </span>
                  <p>
                    განსაკუთრებული სიმყარე და ზედაპირის ცვეთის მიმართ მედეგობა
                  </p>
                </li>
                <li className={indexStyles.list__item}>
                  <span>
                    <RiCheckFill size={24} />
                  </span>
                  <p>
                    მედეგობა სატრანსპორტო საშვალებების მოძრაობის მიმართ
                  </p>
                </li>
              </ul>
            </div>
            {/* 2 */}
            <div className={indexStyles.text}>
              <ul className={indexStyles.list}>
                <li className={indexStyles.list__item}>
                  <span>
                    <RiCheckFill size={24} />
                  </span>
                  <p>
                    ბუნებრივი მასალების ტექსტურის იმიტირების ფართო არჩევანი
                  </p>
                </li>
                <li className={indexStyles.list__item}>
                  <span>
                    <RiCheckFill size={24} />
                  </span>
                  <p>
                    ფერთა ფართო გამა, რომელიც დროთა განმავლობაში არ ხუნდება
                  </p>
                </li>
                <li className={indexStyles.list__item}>
                  <span>
                    <RiCheckFill size={24} />
                  </span>
                  <p>
                    ადვილად ირეცხება და არ იტოვებს არანაირ ცხიმოვან  ლაქებს
                  </p>
                </li>
              </ul>
            </div>
            <div className={indexStyles.image}>
              <img src="/mtavari-2.webp" alt="mtavari 2" />
            </div>
            {/* 3 */}
            <div className={indexStyles.image}>
              <img src="/mtavari-3.webp" alt="mtavari 3" />
            </div>
            <div className={indexStyles.text}>
              <ul className={indexStyles.list}>
                <li className={indexStyles.list__item}>
                  <span>
                    <RiCheckFill size={24} />
                  </span>
                  <p>
                    არ არის ბალახის ამოსვლის შესაძლებლობა
                  </p>
                </li>
                <li className={indexStyles.list__item}>
                  <span>
                    <RiCheckFill size={24} />
                  </span>
                  <p>
                    ყინვამედეგობა ვინაიდან ფორებში ვერ აღწევს წყალი
                  </p>
                </li>
                <li className={indexStyles.list__item}>
                  <span>
                    <RiCheckFill size={24} />
                  </span>
                  <p>
                    ყველა სხვა ტიპის გარე იატაკთან შედარებით, ბევრად ხანგრძლივი ექსპლუატაციის ვადა
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}