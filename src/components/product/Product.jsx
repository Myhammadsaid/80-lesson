import React, { useEffect, useState } from "react";
import { useStore } from "../../context/store";
import axios from "../../api/api";
import "./Product.css";

const Product = () => {
  const { toggleHeart } = useStore();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/products?limit=10")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const handleAddToWishlist = (product) => {
    toggleHeart({ product: product });
  };

  let products = data?.map((val) => (
    <div key={val.id} className="product-card">
      <img className="product-img" src={val.images[0]} alt="product-img" />
      <p className="product-text">{val.title}</p>
      <p className="product-price">{val.price} UZS</p>
      <div className="product-btns">
        <button
          className="product-btn"
          onClick={() => handleAddToWishlist(val)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
          </svg>
        </button>
        <button className="product-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
            <circle cx="10.5" cy="19.5" r="1.5"></circle>
            <circle cx="17.5" cy="19.5" r="1.5"></circle>
          </svg>
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <section className="product">
        <div className="container">
          <div className="product-cards">{products}</div>
        </div>
      </section>
    </>
  );
};

export default Product;
