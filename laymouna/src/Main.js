import React from 'react';

function Main() {
  return (
    <main>
      <section>
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a Table</button>
      </section>
      <section>
        <h2>This week's specials!</h2>
        <div>
          <div>
            <h3>Greek Salad</h3>
            <p>$12.99</p>
            <button>Order a delivery</button>
          </div>
          <div>
            <h3>Bruchetta</h3>
            <p>$5.99</p>
            <button>Order a delivery</button>
          </div>
          <div>
            <h3>Lemon Dessert</h3>
            <p>$5.00</p>
            <button>Order a delivery</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
