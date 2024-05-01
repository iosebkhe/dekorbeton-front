import { useState, useEffect } from "react";
import Product from "../components/Product";
import productsStyles from "./products.module.css";
import Loader from "../components/Loader";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/products`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const yalibebiProducts = products.filter(product => product.categories.some(category => category.name === "ყალიბები"));
  const masalebiProducts = products.filter(product => product.categories.some(category => category.name === "მასალები და ხელსაწყოები"));


  return (
    <div className={`${productsStyles.products} container`}>
      <h1 className={`${productsStyles.title} ${productsStyles.title__center}`}>პროდუქტების კატალოგი</h1>
      {loading ? <Loader />
        :
        <div>
          <div>
            <h2 className={`${productsStyles.title} ${productsStyles.title2}`}>მასალები და ხელსაწყოები</h2>
            <div className={productsStyles.grid}>
              {masalebiProducts.map(product =>
                <Product
                  key={product._id}
                  product={product}
                />)}
            </div>
          </div>
          <div>
            <h2 className={`${productsStyles.title} ${productsStyles.title2}`}>ყალიბები</h2>
            <div className={productsStyles.grid}>
              {yalibebiProducts.map(product =>
                <Product
                  key={product._id}
                  product={product}
                />)}
            </div>
          </div>
        </div>}
    </div>
  );
}