
import {
  useSelector
} from "react-redux";


function Transaction() {

  const transactions = useSelector(
    (state) => state.bank.transactions
  );


  return (

    <div className="transaction-card">

      <h2>
        Transaction History
      </h2>


      <div className="table-container">

        <table>

          <thead>

            <tr>

              <th>S.No</th>

              <th>Transaction ID</th>

              <th>Account No</th>

              <th>Account Holder</th>

              <th>Transaction Type</th>

              <th>Amount</th>

              <th>
                Transaction Date & Time
              </th>

            </tr>

          </thead>


          <tbody>

            {transactions.map(
              (transaction, index) => (

                <tr key={transaction.id}>

                  <td>
                    {index + 1}
                  </td>


                  <td>
                    {transaction.id}
                  </td>


                  <td>
                    {transaction.account}
                  </td>


                  <td>
                    {transaction.holder}
                  </td>


                  <td>

                    {transaction.type === "credit" ? (

                      <span className="credit">
                        ✔ Credit
                      </span>

                    ) : (

                      <span className="debit">
                        ✖ Debit
                      </span>

                    )}

                  </td>


                  <td>
                    ₹ {transaction.amount}
                  </td>


                  <td>
                    {transaction.date}
                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Transaction;