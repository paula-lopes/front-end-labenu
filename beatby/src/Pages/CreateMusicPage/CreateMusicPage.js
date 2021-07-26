import Image from "components/Image";
import VinilNotes from "assets/vinil-notes.png";
import { ImageGirlContainer } from "./styled";
import Logo from "assets/logo.png";
import useForm from "hooks/useForm";
import { ImageNoteContainer } from "./styled";
import { CreateMusicContainer } from "./styled";
import { InputContainer } from "./styled";
import { LogoLogoutButtonContainer } from "./styled";
import { LogoutButton } from "./styled";
import { CreateMusicButton } from "./styled";
import { useHistory } from "react-router-dom";
import { createMusic } from "../../services/music";
import { logout } from "services/user";

export const CreateMusicPage = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    title: "",
    author: "",
    file: "",
    genre: "",
    album: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createMusic(form, clear,history);
  };
  return (
    <form onSubmit={onSubmitForm}>
      <CreateMusicContainer>
        <LogoLogoutButtonContainer>
          <Image alt="logo" height={"100"} src={Logo} width={"200"} />
          <LogoutButton onClick ={()=>logout(history)}>Logout</LogoutButton>
        </LogoLogoutButtonContainer>
        <ImageNoteContainer>
          <h1>Crie sua Música</h1>
        </ImageNoteContainer>
        <InputContainer>
          <input
            name={"title"}
            value={form.title}
            onChange={onChange}
            placeholder={"título"}
          />
          <input
            name={"author"}
            value={form.author}
            onChange={onChange}
            placeholder={"autor"}
          />
          <input
            name={"file"}
            value={form.file}
            onChange={onChange}
            placeholder={"arquivo"}
          />
          <input
            name={"genre"}
            value={form.genre}
            onChange={onChange}
            placeholder={"gênero"}
          />

          <input
            name={"album"}
            value={form.album}
            onChange={onChange}
            placeholder={"álbum"}
          />
        </InputContainer>
        <ImageGirlContainer>
          <Image alt="logo" height={"300"} src={VinilNotes} width={"480"} />
        </ImageGirlContainer>
        <CreateMusicButton>CRIAR MÚSICA</CreateMusicButton>
      </CreateMusicContainer>
    </form>
  );
};

export default CreateMusicPage;
