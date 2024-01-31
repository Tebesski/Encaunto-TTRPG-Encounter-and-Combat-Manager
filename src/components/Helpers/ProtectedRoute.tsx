import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";

type ProtectedRouteProps = {
  children: React.ReactElement;
};

export default function ProtectedRoute(props: ProtectedRouteProps) {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.isAuthenticated) navigate("/");
  }, [auth?.isAuthenticated]);

  return auth?.isAuthenticated ? props.children : null;
}
