import PropTypes from "prop-types";
import s from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  const friendsList = friends.map((item) => (
    <FriendListItem
      avatar={item.avatar}
      name={item.name}
      isOnline={item.isOnline}
      id={item.id.toString()}
    />
  ));
  return <ul className={s.list}>{friendsList}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
