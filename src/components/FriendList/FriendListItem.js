import PropTypes from "prop-types";
import s from "./FriendList.module.css";

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={s.item} key={id.toString()}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.string.isRequired,
};
