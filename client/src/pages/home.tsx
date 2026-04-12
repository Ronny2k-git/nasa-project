import { useState } from "react";
import heroImg from "../img/background-large.jpg";
import reactLogo from "../img/background-medium.jpg";
import viteLogo from "../img/background.jpg";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="w-full h-full ">
      <section id="center">
        <div className="h-full ">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </main>
  );
}
