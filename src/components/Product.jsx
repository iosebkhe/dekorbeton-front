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
        <p className={productStyles.price}>{product.price} ₾</p>
        <p className={productStyles.description}>{product.fullDescription}</p>
      </div>
    </div>
  );
}