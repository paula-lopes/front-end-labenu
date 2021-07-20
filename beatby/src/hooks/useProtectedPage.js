import { useEffect } from "react";
import { goToLogin } from "routes/coordinator";
import  {useHistory} from "react-router";

const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToLogin(history);
    }
  }, [history]);
};
export default useProtectedPage;
