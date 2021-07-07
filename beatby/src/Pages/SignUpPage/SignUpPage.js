import { MainSignUpContainer } from "./styled";
import Image from "components/Image";
import { LogoButtonContainer } from "./styled";
import Logo from "assets/logo.png";
import useForm from "hooks/useForm";
import { InputContainer } from "Pages/SignUpPage/styled";
import { FormButtonContainer } from "./styled";
import MusicalNote from "assets/MusicalNote.png";
import { ImageNoteContainer } from "./styled";
import Guitar from "assets/Guitar.png";
import { GuitarImageContainer } from "./styled";
import { LoginButton } from "./styled";
import { ImageLogoContainer } from "./styled";
export const SignUpPage = () => {
  const onSubmitForm = () => {};

  const [form, onChange, clear] = useForm({
    name: "",
    nickname: "",
    email: "",
    password: "",
  });
  return (
    <MainSignUpContainer>
      <LogoButtonContainer>
        <ImageLogoContainer><Image alt="logo" height={"100"} src={Logo} width={"200"} /> </ImageLogoContainer>
        <LoginButton>Login</LoginButton>
      </LogoButtonContainer>
      <form onSubmit={onSubmitForm}>
        <InputContainer>
          <ImageNoteContainer>  <Image alt="logo" height={"80"} src={MusicalNote} width={"120"} /></ImageNoteContainer>
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
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
          />

          <FormButtonContainer>
            <button>CADASTRAR</button>
          </FormButtonContainer>
        </InputContainer>
      </form>
      <GuitarImageContainer>
        <Image alt="Guitarra" height={"300"} src={Guitar} width={"400"} />
      </GuitarImageContainer>
    </MainSignUpContainer>
  );
};

export default SignUpPage;
