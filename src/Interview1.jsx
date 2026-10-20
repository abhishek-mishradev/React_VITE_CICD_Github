import axios from "axios";
import { useEffect, useState } from "react";

function Interview1() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/search?q=${search}`,
        );

        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [search]);

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <input
        type="text"
        value={search}
        placeholder="Search product"
        onChange={(event) => setSearch(event.target.value)}
        style={{ width: "100%", padding: "10px" }}
      />

      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => {
            setSearch(product.title);
            setProducts([]);
          }}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          {product.title}
        </div>
      ))}
    </div>
  );
}

export default Interview1;
