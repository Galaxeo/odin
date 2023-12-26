import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

const Profile = () => {
  // Taking the name property out of the useParams object
  const { name } = useParams();
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here: </h2>
      {
        (name = "spinach" ? (
          <Spinach />
        ) : (
          (name = "popeye" ? <Popeye /> : <DefaultProfile />)
        ))
      }
      <Outlet />
    </div>
  );
};

export default Profile;
