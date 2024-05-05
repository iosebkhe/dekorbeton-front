/* eslint-disable react/prop-types */
import productStyles from "./Product.module.css";

export default function Product({ product }) {
  return (
    <div className={productStyles.product}>
      <div className={productStyles.image}>
        <img src={product.cardImage} alt="" />
      </div>
      <div className={productStyles.content}>
        <h2 className={productStyles.title}>{product.title}</h2>
        <p className={productStyles.price}>{
          product.title === "ფერადი გამამკვრივებელი" ? 70
            : product.title === "ფერადი გამყოფი ფხვნილი" ? 440
              : product.title === "ლაქი - 1 პირი 20%" ? 640
                : product.title === "ლაქი - 2 პირი 25%" ? 690
                  : product.title === "ლაქი გლუვი" ? 710
                    : product.price} ₾</p>
        <p className={productStyles.description}>{product.fullDescription}</p>
      </div>
    </div>
  );
}