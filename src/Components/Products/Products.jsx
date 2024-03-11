import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Products.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getProductsByCategory = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/products/category/${id}`
        );
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products by category:", error);
        setLoading(false);
      }
    };

    getProductsByCategory();
  }, [id]);

  return (
    <div className={style.cardContainer}>
      {loading ? (
        <p>Loading...</p>
      ) : products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className={style.card}>
            <h3>{product.name}</h3>
            <img
              src={product.mainImage.secure_url}
              alt={product.name}
              className={style.cardImg}
            />
            <p>{product.description}</p>
            <p>{product.price + " $"}</p>
          </div>
        ))
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  );
}

export default Products;
