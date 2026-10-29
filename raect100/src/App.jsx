import React, { useState } from 'react';
import './App.css';

const CARS_DATA = [
  // GM / Uzbek Cars
  {
    id: 1,
    name: 'Chevrolet Cobalt',
    category: 'GM / Local',
    price: 25,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 5
  },
  {
    id: 2,
    name: 'Chevrolet Gentra',
    category: 'GM / Local',
    price: 30,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=600&q=80',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 5
  },
  {
    id: 3,
    name: 'Chevrolet Malibu 2 XL',
    category: 'GM / Local',
    price: 50,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 5
  },
  {
    id: 4,
    name: 'Chevrolet Tracker',
    category: 'GM / Local',
    price: 45,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 5
  },
  {
    id: 5,
    name: 'Chevrolet Tahoe',
    category: 'GM / Local',
    price: 150,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&q=80',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 7
  },

  // Chinese Brands (BYD, Zeekr, Li Auto, Chery)
  {
    id: 6,
    name: 'BYD Song Plus EV',
    category: 'Chinese EV/Hybrid',
    price: 60,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80',
    fuel: 'Electric',
    transmission: 'Automatic',
    seats: 5
  },
  {
    id: 7,
    name: 'BYD Chazor',
    category: 'Chinese EV/Hybrid',
    price: 40,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
    fuel: 'Hybrid',
    transmission: 'Automatic',
    seats: 5
  },
  {
    id: 8,
    name: 'Zeekr 001',
    category: 'Chinese EV/Hybrid',
    price: 110,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80',
    fuel: 'Electric',
    transmission: 'Automatic',
    seats: 5
  },
  {
    id: 9,
    name: 'Zeekr 009',
    category: 'Chinese EV/Hybrid',
    price: 180,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80',
    fuel: 'Electric',
    transmission: 'Automatic',
    seats: 6
  },
  {
    id: 10,
    name: 'Li Auto L9',
    category: 'Chinese EV/Hybrid',
    price: 160,
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80',
    fuel: 'Hybrid',
    transmission: 'Automatic',
    seats: 6
  },
  {
    id: 11,
    name: 'Chery Tiggo 8 Pro',
    category: 'Chinese EV/Hybrid',
    price: 55,
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 7
  },

  // Foreign Luxury (BMW, Mercedes, Audi, Porsche, Range Rover)
  {
    id: 12,
    name: 'BMW M5 F90',
    category: 'Luxury Foreign',
    price: 200,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 5
  },
  {
    id: 13,
    name: 'BMW X7',
    category: 'Luxury Foreign',
    price: 220,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 7
  },
  {
    id: 14,
    name: 'Mercedes-Benz S-Class',
    category: 'Luxury Foreign',
    price: 250,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 5
  },
  {
    id: 15,
    name: 'Mercedes-AMG G63',
    category: 'Luxury Foreign',
    price: 350,
    image: 'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=600&q=80',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 5
  },
  {
    id: 16,
    name: 'Audi RS6 Avant',
    category: 'Luxury Foreign',
    price: 210,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 5
  },
  {
    id: 17,
    name: 'Porsche Panamera',
    category: 'Luxury Foreign',
    price: 280,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 4
  },
  {
    id: 18,
    name: 'Range Rover Autobiography',
    category: 'Luxury Foreign',
    price: 300,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=600&q=80',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 5
  },
  {
    id: 19,
    name: 'Tesla Model S Plaid',
    category: 'Luxury Foreign',
    price: 190,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80',
    fuel: 'Electric',
    transmission: 'Automatic',
    seats: 5
  },
  {
    id: 20,
    name: 'Lexus LX570',
    category: 'Luxury Foreign',
    price: 180,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 7
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'GM / Local', 'Chinese EV/Hybrid', 'Luxury Foreign'];

  const filteredCars = CARS_DATA.filter((car) => {
    const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleRent = (carName) => {
    alert(`Thank you for choosing ${carName}! Our manager will contact you shortly.`);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="navbar">
        <div className="logo">
          DRIVE<span>UZ</span>
        </div>
        <nav className="nav-links">
          <a href="#fleet">Fleet</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>PREMIUM CAR RENTAL IN UZBEKISTAN</h1>
          <p>Choose from local budget favorites, modern Chinese EVs, and European luxury cars.</p>
        </div>
      </section>

      {/* Main Fleet Section */}
      <main className="fleet-section" id="fleet">
        <h2>OUR VEHICLE FLEET</h2>
        
        {/* Controls: Search and Filters */}
        <div className="controls-container">
          <input
            type="text"
            placeholder="Search car brand or model..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <div className="category-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="cars-grid">
          {filteredCars.map((car) => (
            <div key={car.id} className="car-card">
              <div className="card-image-wrapper">
                <img src={car.image} alt={car.name} className="car-image" />
                <span className="car-category-badge">{car.category}</span>
              </div>

              <div className="card-body">
                <h3 className="car-name">{car.name}</h3>

                <div className="car-specs">
                  <span>⛽ {car.fuel}</span>
                  <span>⚙️ {car.transmission}</span>
                  <span>👥 {car.seats} Seats</span>
                </div>

                <div className="card-footer">
                  <div className="price-tag">
                    <span className="amount">${car.price}</span>
                    <span className="period"> / day</span>
                  </div>

                  <button className="rent-btn" onClick={() => handleRent(car.name)}>
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="no-results">
            <p>No vehicles found matching your criteria.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 DRIVEUZ Rent a Car. All rights reserved.</p>
      </footer>
    </div>
  );
}