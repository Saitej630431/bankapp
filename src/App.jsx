

import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import BankComponent from "./components/BankComponent";
import Transaction from "./components/TransactionComponent";

function App() {

  return (
    <div className="app">

      <HeaderComponent />

      <BankComponent />

    <Transaction></Transaction>

    </div>
  );
}

export default App;
