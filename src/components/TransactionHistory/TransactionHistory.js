import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  const transactionList = items.map((item) => (
    <tr className={s.item} key={item.id}>
      <td className={s.cell}>{item.type}</td>
      <td className={s.cell}>{item.amount}</td>
      <td className={s.cell}>{item.currency}</td>
    </tr>
  ));
  return (
    <table className={s.history}>
      <thead>
        <tr>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>

      <tbody>{transactionList}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
