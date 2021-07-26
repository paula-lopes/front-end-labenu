import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToMusicsListPage } from "routes/coordinator";

export const createMusic = (form, clear, history) => {
  const url = `${BASE_URL}/music`;
  const token = window.localStorage.getItem("token");
  console.log(token)
  const body = {
    title: form.title,
    author: form.author,
    file: form.file,
    genre: [form.genre],
    album: form.album,
  };
  console.log(body.title);
  axios
    .post(url, body, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      clear();
      goToMusicsListPage(history);
    })
    .catch((err) => alert(err.response.data));
};
