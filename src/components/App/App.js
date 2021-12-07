import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import "./App.css";
import user from "../Profile/user.json";
import data from "../Statistics/data.json";
import friends from "../FriendList/friends.json";
import transactions from "../TransactionHistory/transactions.json";
import FriendList from "../FriendList/FriendList";

function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
