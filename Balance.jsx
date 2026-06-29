function Balance({ transactions }) {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="balance-box">
      <h2>Total Balance</h2>
      <h1 className={balance >= 0 ? 'positive' : 'negative'}>
        ₹{balance.toFixed(2)}
      </h1>
      <div className="inc-exp">
        <div>
          <h4>Income</h4>
          <p className="positive">+₹{income.toFixed(2)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="negative">-₹{expense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Balance;