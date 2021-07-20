import { MainContainer } from "./styled";
import { InputContainer } from "./styled";
import { ButtonContainer } from "./styled";
import useForm from "hooks/useForm";
import Image from "components/Image";
import Logo from "assets/logo.png";
import { LogoContainer } from "./styled";
import  {useHistory } from "react-router-dom";
import { login } from "services/user";
import { goToSignUp } from "routes/coordinator";


export const LoginPage = () => {
  const history = useHistory();
  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form,clear,history);
   
  };

  const [form, onChange, clear] = useForm({ email: "", password: "" });
  
  return (
    <MainContainer>
      <form onSubmit={onSubmitForm}>
        <InputContainer>
          <LogoContainer>
            <Image alt="logo" height={"100"} src={Logo} width={"200"} />
          </LogoContainer>
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
          <ButtonContainer>
            <button>LOGIN</button>
            <button onClick={()=>{goToSignUp(history)}}>CADASTRE-SE</button>
          </ButtonContainer>
        </InputContainer>
      </form>
    </MainContainer>
  );
};

export default LoginPage;
