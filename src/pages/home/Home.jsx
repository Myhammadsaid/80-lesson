import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Product from "../../components/product/Product";
import axios from "../../api/api";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/products?limit=10")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Hero />
      <Product data={data} />
    </div>
  );
};

export default Home;
