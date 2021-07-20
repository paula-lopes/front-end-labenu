import Image from "components/Image";
import VinilNotes from "assets/vinil-notes.png";
import  {ImageGirlContainer} from "./styled"
import Logo from "assets/logo.png";
import useForm from "hooks/useForm";


import { ImageNoteContainer } from "./styled";
import { CreateMusicContainer } from "./styled";
import { InputContainer } from "./styled";
import { LogoLogoutButtonContainer } from "./styled";
import { LogoutButton } from "./styled";
import { CreateMusicButton } from "./styled";
export const CreateMusicPage = () => {
  const onSubmitForm = () => {};
  const [form, onChange, clear] = useForm({
    title: "",
    author: "",
    file: "",
    genre: "",
    album: "",
  });
  return (
    <form onSubmit={onSubmitForm}>
      <CreateMusicContainer>
        <LogoLogoutButtonContainer>
          <Image alt="logo" height={"100"} src={Logo} width={"200"} />
          <LogoutButton>Logout</LogoutButton>
        </LogoLogoutButtonContainer>
        <ImageNoteContainer>
          <h1>Crie sua Música</h1>
      
        </ImageNoteContainer>
        <InputContainer>
          <input
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome"}
          />
          <input
            name={"nickname"}
            value={form.nickname}
            onChange={onChange}
            label={"Nickname"}
          />
          <input
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"Email"}
          />
          <input
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"Email"}
          />

          <input
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
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
