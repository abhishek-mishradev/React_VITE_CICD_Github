import React, { useState } from "react";

const Tabs = () => {

    const [activeTab, setActiveTab] = useState("product");


  return (
    <div>
      <h1> Tabs Component</h1>
      <button onClick={() => setActiveTab("product")}>Product</button>
      Custom Hook
      <button onClick={() => setActiveTab("quote")}>Quote</button>
      {activeTab === "product" && <h2>Product Content</h2>}
      {activeTab === "quote" && <h2>Quote Content</h2>}
    </div>
  );
}

export default Tabs
