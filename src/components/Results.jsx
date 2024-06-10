import React from "react";

const Results = ({ results }) => {
  const valuesExist = Object.values(results).some((value) => !!value);

  return (
    <div className="container mb-5 w-3/4 md:w-full mt-6 mx-auto p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg bg-white dark:bg-gray-800">
      {valuesExist ? (
        <>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 text-center">
            Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#7D82B8]  rounded-md text-center">
              <p className="text-lg font-semibold mb-2 text-[#4d517a] ">
                Monthly Payment
              </p>
              <p className="text-2xl font-bold text-[#4d517a] ">
                ${results.monthlyPayment}
              </p>
            </div>
            <div className="p-4 bg-[#9197AE]  rounded-md text-center">
              <p className="text-lg font-semibold mb-2 text-[#42475c]">
                Total Payment
              </p>
              <p className="text-2xl font-bold text-[#42475c]">
                ${results.totalPayment}
              </p>
            </div>
            <div className="p-4 bg-[#273043] rounded-md text-center">
              <p className="text-lg font-semibold mb-2s text-[#738bbc]">
                Total Interest
              </p>
              <p className="text-2xl font-bold text-[#738bbc]">
                ${results.totalInterest}
              </p>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-lg font-semibold text-[#A729F5]">
          Please fill in the required fields to get the results
        </p>
      )}
    </div>
  );
};

export default Results;
