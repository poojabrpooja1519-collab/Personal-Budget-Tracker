import { useState } from 'react';

function AddTransaction({ onAdd }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return alert('Please fill all fields');
    onAdd({
      text,
      amount: parseFloat(amount),
      type
    });
    setText('');
    setAmount('');
    setType('income');
  };

  return (
    <div className="form-box">
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description (e.g. Salary, Rent)"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (e.g. 5000)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit">➕ Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;