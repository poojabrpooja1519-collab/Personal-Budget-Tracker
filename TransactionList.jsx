function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return <p className="empty">No transactions yet. Add one above!</p>;
  }

  return (
    <div className="list-box">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t._id} className={t.type === 'income' ? 'income-item' : 'expense-item'}>
            <div className="item-info">
              <span className="item-text">{t.text}</span>
              <span className="item-date">
                {new Date(t.date).toLocaleDateString('en-IN')}
              </span>
            </div>
            <div className="item-right">
              <span className="item-amount">
                {t.type === 'income' ? '+' : '-'}₹{t.amount.toFixed(2)}
              </span>
              <button onClick={() => onDelete(t._id)} className="delete-btn">✕</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;