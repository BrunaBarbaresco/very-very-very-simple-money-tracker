import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <main>
      <h1>
        $400 <span>.00</span>
      </h1>
      <form>
        <div class="basic">
          <input type="text" placeholder="+200 new samsung tv" />
          <input type="datetime-local" />
        </div>
        <div>
          <input type="text" />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">It was time for a new TV</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2024-06-01 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Freelancer Job</div>
            <div className="description">It was time for a new TV</div>
          </div>
          <div className="right">
            <div className="price green">+$400</div>
            <div className="datetime">2024-06-01 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="description">It was time for a new TV</div>
          </div>
          <div className="right">
            <div className="price red">-$1300</div>
            <div className="datetime">2024-06-01 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
