import { useSelector } from "react-redux";

function UserName() {
  const userName = useSelector((store) => store.user.username);
  if (!userName) return null;
  return <div className="text-sm font-semibold">{userName}</div>;
}

export default UserName;
