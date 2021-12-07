import PropTypes from "prop-types";
import s from "./Statistics.module.css";
import getRandomHexColor from "./getRandomHexColor";

export default function Statistics({ title, stats }) {
  const statList = stats.map((item) => {
    return (
      <li
        className={s.item}
        style={{ backgroundColor: getRandomHexColor() }}
        key={item.id}
      >
        <span className={s.label}>{item.label}</span>
        <span className={s.percentage}>{item.percentage}%</span>
      </li>
    );
  });
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.list}>{statList}</ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
