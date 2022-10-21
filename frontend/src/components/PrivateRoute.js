import { Navigate, Outlet } from "react-router-dom";
import Spinner from "./Spinner";
import { useAuthStatus } from "../hooks/useAuthStatus";

const PrivateRoute = () => {
	const { loggedIn, checkStatus } = useAuthStatus();

	if (checkStatus) {
		return <Spinner />;
	}

	return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
