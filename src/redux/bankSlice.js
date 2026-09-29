import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 500,

  transactions: [
    {
      id: "TXN1789705685465",
      account: "34444422669",
      holder: "PAKALA SAITEJA",
      type: "credit",
      amount: 2000,
      date: "18/9/2026, 9:58:05 am",
    }
  ],
};

const bankSlice = createSlice({
  name: "bank",

  initialState,

  reducers: {

    credit: (state, action) => {

      const amount = action.payload;

      // Update balance
      state.balance += amount;

      // Add transaction
      state.transactions.push({
        id: "TXN" + Date.now(),

        account: "411761580246",

        holder: "PAKALA SAITEJA",

        type: "credit",

        amount: amount,

        date: new Date().toLocaleString(),
      });
    },


    debit: (state, action) => {

      const amount = action.payload;

      // Update balance
      state.balance -= amount;

      // Add transaction
      state.transactions.push({
        id: "TXN" + Date.now(),

        account: "411761580246",

        holder: "PAKALA SAITEJA",

        type: "debit",

        amount: amount,

        date: new Date().toLocaleString(),
      });
    },
  },
});

export const {
  credit,
  debit,
} = bankSlice.actions;

export default bankSlice.reducer;