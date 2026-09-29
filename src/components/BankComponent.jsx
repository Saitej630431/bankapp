import React, { useState } from "react";

import {
  useSelector,
  useDispatch
} from "react-redux";

import {
  credit,
  debit
} from "../redux/bankSlice";


function BankComponent() {

  const [amount, setAmount] = useState("");


  // Get balance from Redux
  const balance = useSelector(
    (state) => state.bank.balance
  );


  // Get dispatch function
  const dispatch = useDispatch();


  // =========================
  // CREDIT
  // =========================

  const handleCredit = () => {

    const value = Number(amount);


    // Validate amount first
    if (!value || value <= 0) {

      alert("Please enter a valid amount");

      return;
    }


    // Ask confirmation
    const isConfirmed = window.confirm(
      `Do you want to credit ₹${value}?`
    );


    // If user clicks Cancel
    if (!isConfirmed) {

      return;
    }


    // Dispatch Redux action
    dispatch(credit(value));


    // Clear input
    setAmount("");


    // Success message
    alert(
      `Successfully credited ₹${value}`
    );
  };


  // =========================
  // DEBIT
  // =========================

  const handleDebit = () => {

    const value = Number(amount);


    // Validate amount
    if (!value || value <= 0) {

      alert("Please enter a valid amount");

      return;
    }


    // Check balance
    if (value > balance) {

      alert("Insufficient balance");

      return;
    }


    // Ask confirmation
    const isConfirmed = window.confirm(
      `Do you want to debit ₹${value}?`
    );


    // User clicked Cancel
    if (!isConfirmed) {

      return;
    }


    // Dispatch Redux action
    dispatch(debit(value));


    // Clear input
    setAmount("");


    // Success message
    alert(
      `Successfully debited ₹${value}`
    );
  };


  // =========================
  // CLEAR
  // =========================

  const handleClear = () => {

    const isConfirmed = window.confirm(
      "Do you want to clear the amount?"
    );


    if (!isConfirmed) {

      return;
    }


    setAmount("");
  };


  return (

    <div className="bank-card">

      <div className="account-details">

        <p>
          <strong>
            Account Number:
          </strong>{" "}
          34444422669
        </p>


        <p>
          <strong>
            Account Holder:
          </strong>{" "}
          PAKALA SAITEJA
        </p>


        <p>
          <strong>
            Bank Name:
          </strong>{" "}
          CANARABANKOFINDIA
        </p>


        <p>
          <strong>
            Branch:
          </strong>{" "}
          SULLURPET
        </p>


        <p className="balance">

          <strong>
            Balance:
          </strong>{" "}

          <span className={balance > 0.00 ? "positive" : "negative"}>
            ₹ {balance.toFixed(2)}
          </span>


          <button className="available-btn">
            Available
          </button>

        </p>

      </div>


      <div className="transaction-controls">

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />


        <button
          className="action-btn"
          onClick={handleCredit}
        >
          Credit
        </button>


        <button
          className="action-btn"
          onClick={handleDebit}
        >
          Debit
        </button>


        <button
          className="action-btn"
          onClick={handleClear}
        >
          Clear
        </button>

      </div>

    </div>
  );
}


export default BankComponent;