import { Link } from "react-router-dom";
import indexStyles from "./index.module.css";
import Video from "../components/Video";
import ConcreteFeatures from "../components/ConcreteFeatures";
import ImageGallery from "../components/ImageGallery";

export default function Index() {
  return (
    <div className={`${indexStyles.wrapper}`}>
      <Video />

      <div className={`${indexStyles.content} container`}>
        <h1 className={indexStyles.title}>
          დეკორატიული ბეჭდური ბეტონი არის  უნივერსალური ტექნოლოგია, როდესაც პოლიურეტანის ფორმების (ყალიბების,შტამპების) მეშვეობით შესაძლებელია ახლად მოწყობილ ბეტონის ზედაპირზე ბუნებრივი ქვის ან ხის იატაკის შესანიშნავი იმიტაცია. იგი შემუშავდა და დამკვიდრდა დაახლოებით 40 წლის წინ აშშ- ში და უკვე ფართოდ არის გავრცელებული ევროპაში და ზოგიერთ სნგ-ს ქვეყნებში.
        </h1>

        <div className={indexStyles.btn__box}>
          <Link to="/products" className={indexStyles.btn}>
            პროდუქტების კატალოგი
          </Link>
        </div>

      </div>

      <ImageGallery />

      <div className="container">
        <ConcreteFeatures />
      </div>
    </div >
  );
}