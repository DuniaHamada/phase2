import axios from "axios";
import { useState, useEffect } from "react";
import style from "./Category.module.css";

function Category() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/categories/active?page=1&limit=10`
      );
      setCategories(data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className={style.cardContainer}>
      {categories.map((category) => (
        <div
          className={style.card}
          style={{ width: "18rem" }}
          key={category.id}
        >
          <img
            src={category.image.secure_url}
            alt="Category"
            className={style.cardImg}
          />
        </div>
      ))}
    </div>
  );
}

export default Category;
