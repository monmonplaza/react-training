import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { setCredendtials } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import fetchApi from "../helpers/fetchApi";
import { baseUrl } from "../helpers/functions-general";
import Spinner from "../widget/Spinner";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(true);
  const [isAuth, setIsAuth] = React.useState("");
  const paytoken = JSON.parse(localStorage.getItem("paytoken"));
  const navigate = useNavigate();

  React.useEffect(() => {
    // console.log(typeof fbastoken);
    const fetchLogin = async () => {
      const login = await fetchApi(
        baseUrl + "/admin/users/read-users-token.php",
        {
          token: paytoken.token,
          idNumber: paytoken.data.users_aid,
        }
      );

      // console.log("protected", login);

      if (typeof login === "undefined" || !login.status) {
        setLoading(false);
        setIsAuth("456");
      } else {
        // dispatch(setCredendtials(login.data));
        setIsAuth("123");
        setLoading(false);
      }
    };

    if (paytoken !== null) {
      fetchLogin();
    } else {
      setLoading(false);
      setIsAuth("456");
    }
  }, [dispatch]);

  return loading ? (
    <Spinner />
  ) : isAuth === "123" ? (
    children
  ) : isAuth === "456" ? (
    (window.location.href = "/login")
  ) : (
    <p>API end point error / Page not found.</p>
  );
};

export default ProtectedRoute;
