import React, { useEffect, useState } from "react";
import "./NewArirvals.css";
import { Link, Links } from "react-router-dom";

const NewArirvals = () => {
  const [products, setProduts] = useState([]);
  const [noOfPtoducts, setNoOfProducts] = useState(4)

  async function getProduct() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProduts(data.products);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <section className="cards-container">
        <div className="card-heading">
          <h2>NEW ARRIVALS</h2>
        </div>
        <div className="card-item flex center wrap">
          {products.slice(0,noOfPtoducts).map((product) => {
            return (
              <>
                <Link to={`/productpage/${product.id}`} className=" cart">
                  <img src={product.thumbnail} alt="" className="img_" />
                  <div>
                    <div
                      className="rating"
                      style={{ "--rating": `${product.rating}` }}
                      aria-label={`Rating: ${product.rating} out of 5`}
                    ></div>
                  </div>
                  <p className="rating_price_title">{product.title}</p>
                  <p className="rating_price_title"> ${product.price}</p>
                </Link>
              </>
            );
          })}
        </div>
        <div className="view-all-btn flex center">
          <button className="show-all" onClick={()=>setNoOfProducts(30)}>View All</button>
        </div>
            </section>
    </>
  );
};

export default NewArirvals;
