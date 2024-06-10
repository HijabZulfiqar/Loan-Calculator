import Calculator from "../components/Calculator";

import Results from "../components/Results";
import { useState } from "react";

function Home() {
  const [results, setResults] = useState({
    monthlyPayment: null,
    totalPayment: null,
    totalInterest: null,
  });

  return (
    <section className=" container grid grid-cols-2 gap-5">
      <div className=" mt-9 ">
        <h1 className=" mb-12">
          <span className=" font-light">Welcome to the </span>
          <span className=" font-semibold">Loan Calculator App!</span>
        </h1>
        <p className=" text-lg">Fill up the fields to get started.</p>
      </div>
      <div className="home-nav-list">
        <Calculator setResults={setResults} />

        <Results results={results} />
      </div>
    </section>
  );
}

export default Home;
