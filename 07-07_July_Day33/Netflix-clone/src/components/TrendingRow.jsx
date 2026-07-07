import React from "react";
import './TrendingRow.css'

export default function TrendingRow() {
  const movies = [
    {
      id: 1,
      title: "Avengers",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5uT8nXIC2YpaOliwa7u3oIzjQRpciA0DWMQ&s",
    },
    {
      id: 2,
      title: "Interstellar",
      src: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 3,
      title: "Joker",
      src: "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 4,
      title: "Inception",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7g2MW_GYbDXhIxnKXFyKnRCZv_yDL7lg1GQ&s",
    },
    {
      id: 5,
      title: "Batman",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzzFYczgufsR1VZbadYvtIvRKYnNnb8tz9w&s",
    },
    {
      id: 6,
      title: "Spider-Man",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBrytasuKrc48Eicv7CRH4SbrF-QRlucmRXw&s",
    },
    {
      id: 7,
      title: "Oppenheimer",
      src: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
    },
  ];

  return(
    <section className="trending">
        <h2>Trending Now</h2>
        <div className="row">
            {movies.map((movie)=>(
                <img key={movie.id} src={movie.src} alt={movie.title} />
            ))}
        </div>
    </section>
  );
}
