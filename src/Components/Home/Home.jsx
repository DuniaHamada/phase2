// Home.jsx
import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import style from "./Home.module.css";

function Home() {
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
    <Swiper
      className={style.swiper + " mt-5"}
      spaceBetween={20}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {categories.map((category) => (
        <SwiperSlide key={category._id}>
          <Link to={`/products/${category._id}`}>
            <div className="products">
              <img
                src={category.image.secure_url}
                alt={category.name}
                className="img-fluid w-2"
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Home;
