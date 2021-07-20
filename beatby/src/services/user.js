import { BASE_URL } from "constants/urls";
import { goToMusicsListPage } from "routes/coordinator";
import axios from "axios";
export const login = (form, clear, history) => {
  axios
    .post(`${BASE_URL}/user/login`, form)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      clear();
      goToMusicsListPage(history);
    })
    .catch((err) => alert("Senha ou login incorretos"));
};
export const signUp = (form, clear, history) => {
  axios
    .post(`${BASE_URL}/user/signup`, form)
    .then((res) => {
      try {
        localStorage.setItem("token", res.data.token);
        console.log(res.data.token);

        clear();
        goToMusicsListPage(history);
      } catch (e) {
        alert(e, res);
      }
    })
    .catch((err) => {
      if (err) {
        if (err.response.data === "Email already registered") {
          alert("Email já cadastrado! Digite um email diferente.");
        } else if (
          err.response.data ===
          "Nickname already registered.Choose another nickname"
        ) {
          alert("Nickname já existe. Escolha outro nickname.");
        } else if (
          err.response.data === "Password must be more than 6 digits"
        ) {
          alert("Password deve ter 6 ou mais dígitos.");
        } else {
          alert("Dados inválidos. Tente novamente");
        }
      }
    });
};

export const logout = (history) => {
  localStorage.removeItem("token");
  history.push("/");
};
