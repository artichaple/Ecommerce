// import React, { useEffect } from "react";

// const viewall = () => {
//   const [allProduct, setallProduct] = useState([]);

//   async function allproduct() {
//     try {
//       const res = await fetch("https://dummyjson.com/products");
//       const data = await res.json();
//       console.log(data);
//       setallProduct(data.allProduct);
//     } catch {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     allproduct();
//   });

//   return (
//     <>
//       <div className="productlist">
//         {allProduct.map((product) => {
//           return (
//             <>
//             <div>
//               <img src={product.thumbnail} alt="" className="img_" />
//               <div>
//                 <div
//                   className="rating"
//                   style={{ "--rating": `${product.rating}` }}
//                   aria-label={`Rating: ${product.rating} out of 5`}
//                 ></div>
//               </div>

//               <p>{product.title}</p>
//               <p> ${product.price}</p>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default viewall;
