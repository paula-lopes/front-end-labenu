import { MainSignUpContainer } from "./styled";
import Image from "components/Image";
import { LogoButtonContainer } from "./styled";
import Logo from "assets/logo.png";
import useForm from "hooks/useForm";
import { InputContainer } from "Pages/SignUpPage/styled";
import { FormButtonContainer } from "./styled";
import MusicalNote from "assets/MusicalNote.png";
import { ImageNoteContainer } from "./styled";
import { LoginButton } from "./styled";
import { ImageLogoContainer } from "./styled";
import { signUp } from "services/user";
import { useHistory } from "react-router-dom";

export const SignUpPage = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    name: "",
    nickname: "",
    email: "",
    password: "",
    role:"",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, history);
  };

  return (
    <MainSignUpContainer>
      <LogoButtonContainer>
        <ImageLogoContainer>
          <Image alt="logo" height={"100"} src={Logo} width={"200"} />{" "}
        </ImageLogoContainer>
        <LoginButton>Login</LoginButton>
      </LogoButtonContainer>
      <form onSubmit={onSubmitForm}>
        <InputContainer>
          <ImageNoteContainer>
            {" "}
            <Image alt="logo" height={"80"} src={MusicalNote} width={"120"} />
          </ImageNoteContainer>
          <input
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome"}
            placeholder={"nome"}
          />
          <input
            name={"nickname"}
            value={form.nickname}
            onChange={onChange}
            label={"Nickname"}
            placeholder={"nickname"}
          />
          <input
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"Email"}
            placeholder={"email"}
          />

          <input
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            placeholder={"senha"}
          />

          <input
            name={"role"}
            value={form.role}
            onChange={onChange}
            label={"role"}
            placeholder={"role"}
          />

          <FormButtonContainer>
            <button>CADASTRAR</button>
          </FormButtonContainer>
        </InputContainer>
      </form>
    </MainSignUpContainer>
  );
};

export default SignUpPage;
