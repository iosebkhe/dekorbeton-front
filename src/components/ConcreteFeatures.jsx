import { RiCheckFill } from "react-icons/ri";
import featuresStyles from "./ConcreteFeatures.module.css";

export default function ConcreteFeatures() {
  return (
    <div className={featuresStyles.features}>
      <h3>ბეჭდური ბეტონის უპირატესობები</h3>
      <div className={featuresStyles.grid}>
        {/* 1 */}
        <div className={featuresStyles.image}>
          <img src="/mtavari-1.webp" alt="mtavari 1" />
        </div>
        <div className={featuresStyles.text}>
          <ul className={featuresStyles.list}>
            <li className={featuresStyles.list__item}>
              <span>
                <RiCheckFill size={24} />
              </span>
              <p>
                გამოიყენება როგორც სადგომებზე და მოედნებზე, ასევე კერძო სახლებისა და აგარაკებსა ეზოებში.
              </p>
            </li>
            <li className={featuresStyles.list__item}>
              <span>
                <RiCheckFill size={24} />
              </span>
              <p>
                განსაკუთრებული სიმყარე და ზედაპირის ცვეთის მიმართ მედეგობა
              </p>
            </li>
            <li className={featuresStyles.list__item}>
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
        <div className={featuresStyles.text}>
          <ul className={featuresStyles.list}>
            <li className={featuresStyles.list__item}>
              <span>
                <RiCheckFill size={24} />
              </span>
              <p>
                ბუნებრივი მასალების ტექსტურის იმიტირების ფართო არჩევანი
              </p>
            </li>
            <li className={featuresStyles.list__item}>
              <span>
                <RiCheckFill size={24} />
              </span>
              <p>
                ფერთა ფართო გამა, რომელიც დროთა განმავლობაში არ ხუნდება
              </p>
            </li>
            <li className={featuresStyles.list__item}>
              <span>
                <RiCheckFill size={24} />
              </span>
              <p>
                ადვილად ირეცხება და არ იტოვებს არანაირ ცხიმოვან  ლაქებს
              </p>
            </li>
          </ul>
        </div>
        <div className={featuresStyles.image}>
          <img src="/mtavari-2.webp" alt="mtavari 2" />
        </div>
        {/* 3 */}
        <div className={featuresStyles.image}>
          <img src="/mtavari-3.webp" alt="mtavari 3" />
        </div>
        <div className={featuresStyles.text}>
          <ul className={featuresStyles.list}>
            <li className={featuresStyles.list__item}>
              <span>
                <RiCheckFill size={24} />
              </span>
              <p>
                არ არის ბალახის ამოსვლის შესაძლებლობა
              </p>
            </li>
            <li className={featuresStyles.list__item}>
              <span>
                <RiCheckFill size={24} />
              </span>
              <p>
                ყინვამედეგობა ვინაიდან ფორებში ვერ აღწევს წყალი
              </p>
            </li>
            <li className={featuresStyles.list__item}>
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
  );
}