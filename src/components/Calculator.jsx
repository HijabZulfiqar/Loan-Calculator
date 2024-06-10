import React, { useState } from "react";
import Input from "./Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";

const initialformValues = {
  amount: "",
  interest: "",
  years: "",
};

const Calculator = ({ setResults }) => {
  const [formValues, setformValues] = useState(initialformValues);
  const [errors, setErrors] = useState({
    amount: "",
    interest: "",
    years: "",
  });

  const validateForm = () => {
    let valid = true;
    if (formValues.amount === "") {
      setErrors((e) => ({
        ...e,
        amount: "This field cannot be empty.",
      }));
      valid = false;
    }
    if (formValues.interest === "") {
      setErrors((e) => ({
        ...e,
        interest: "This field cannot be empty.",
      }));
      valid = false;
    }
    if (formValues.years === "") {
      setErrors((e) => ({
        ...e,
        years: "This field cannot be empty.",
      }));
      valid = false;
    }
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformValues({
      ...formValues,
      [name]: value,
    });

    if (value === "") {
      setErrors({
        ...errors,
        [name]: "This field cannot be empty.",
      });
    } else if (!/^\d*$/.test(value)) {
      setErrors({
        ...errors,
        [name]: "Only numbers are allowed.",
      });
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const { amount, interest, years } = formValues;
    const principal = parseFloat(amount);
    const calculateInterest = parseFloat(interest) / 100 / 12;
    const calculatePayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);

    if (!isNaN(monthly) && monthly !== Infinity && monthly !== 0) {
      const totalPayment = (monthly * calculatePayments).toFixed(2);
      const totalInterest = (totalPayment - principal).toFixed(2);
      toast.success("Loan calculated successfully");
      setResults({
        monthlyPayment: monthly.toFixed(2),
        totalPayment: totalPayment,
        totalInterest: totalInterest,
      });
    } else {
      setErrors({
        amount: !amount ? "This field cannot be empty" : errors.amount,
        interest: !interest ? "This field cannot be empty" : errors.interest,
        years: !years ? "This field cannot be empty" : errors.years,
      });
      if (isNaN(monthly)) {
        toast.error(
          "Please check your values; calculation cannot be performed."
        );
      }
    }
  };

  return (
    <div
      className={`container 
        mx-auto py-5 rounded-md`}
    >
      <form onSubmit={handleSubmit}>
        <Input
          label="Loan Amount"
          type="text"
          name="amount"
          value={formValues.amount}
          error={errors.amount}
          onChange={handleChange}
          placeholder="Enter Loan Amount"
        />
        <Input
          label="Interest Rate"
          type="text"
          name="interest"
          value={formValues.interest}
          error={errors.interest}
          onChange={handleChange}
          placeholder="Enter Annual Interest Rate"
        />
        <Input
          label="Loan Duration (Years)"
          type="text"
          name="years"
          value={formValues.years}
          error={errors.years}
          onChange={handleChange}
          placeholder="Enter the number of years to repay the loan."
        />
        <center>
          <div className="flex justify-center">
            <div>
              <button
                type="submit"
                className="bg-gray-500  hover:bg-slate-700  text-white font-semibold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Calculate
              </button>
              <ToastContainer />
            </div>

            <button
              type="button"
              onClick={() => {
                setformValues(initialformValues);
                setResults({
                  monthlyPayment: null,
                  totalPayment: null,
                  totalInterest: null,
                });
                setErrors({
                  amount: "",
                  interest: "",
                  years: "",
                });
              }}
              className="bg-gray-500 dark:bg-slate-100 dark:text-black hover:bg-slate-700 dark:hover:bg-slate-200 text-white font-semibold py-2 px-4 rounded mt-4 ml-2 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Clear Form
            </button>
          </div>
        </center>
      </form>
    </div>
  );
};

export default Calculator;
