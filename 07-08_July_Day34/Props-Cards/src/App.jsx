import React from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRILJnxrDtejY7jhsB7mBKo12EHABnnKsPSpeuspHjg&s"
        name="Laptop"
        description="A high-performance laptop for coding."
        buttonText="Buy Now"
      />

      <Card
        image="https://tiimg.tistatic.com/fp/1/007/574/vivo-mobile-phone-7-38mm-ultra-smooth-body-170g-light-2-5d-adjusted-outline-for-a-great-hold-703.jpg"
        name="Mobile Phone"
        description="A latest-generation smartphone."
        buttonText="View Details"
      />

      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsuHAJCW-qz5sZZQS8fORe9zNEXzjZm9WTJerrJwOx1A&s=10"
        name="Headphones"
        description="Wireless noise-cancelling headphones."
        buttonText="Shop Now"
      />
    </div>
  );
}

export default App;