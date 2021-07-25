import * as React from "react";
import Image from "next/image";
import bgLogin from "../../../../public/img/bg-login.png";
import TextInput from "../../molecules/FormInput/TextInput";
import Button from "../../molecules/Button/Button";
import { sendRequest } from "../../../helpers/apiRequest";
import Modal from "../../molecules/Modal/Modal";

const LoginScreen: React.FC = () => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isError, setError] = React.useState<boolean>(false);

  const unameRef = React.useRef<HTMLInputElement>();
  const passRef = React.useRef<HTMLInputElement>();

  const onLogin = async () => {
    if (!username) {
      unameRef.current.focus();
      return;
    }

    if (!password) {
      passRef.current.focus();
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/dashboard";

    // setLoading(true);
    // const formData = new FormData();
    // formData.append("username", username);
    // formData.append("password", password);

    // await sendRequest({
    //   link: "https://api.payroll-acien.online/C_t_login_user/login",
    //   formData,
    // })
    //   .then((res) => {
    //     setLoading(false);
    //     localStorage.setItem("userData", JSON.stringify(res.data.data));
    //     window.location.href = "/dashboard";
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //     setError(true);
    //   });
  };

  React.useEffect(() => {
    console.log(unameRef);
  }, []);

  return (
    <>
      <Modal title="Notif" width="w-[400px]" show={isError} onShow={() => setError(false)}>
        <div className="w-full text-center">
          <h1 className="font-bold text-h6 text-black-800">Username/Password Salah.</h1>
          <p className="text-body2 mt-4">Harap mencoba kembali.</p>
        </div>
      </Modal>
      <div className="w-full h-screen flex animate-fade-in">
        <div className="hidden h-full relative lg:block lg:w-1/2">
          <Image src={bgLogin} layout="fill" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-full bg-white flex flex-col items-center justify-between px-5 py-8 box-border lg:py-10 lg:px-20 lg:w-1/2 ">
          <div></div>
          <div className="w-full flex flex-col items-center">
            <img src="/img/Logo.svg" className="w-[140px] object-contain" />

            <TextInput
              ref={unameRef}
              label=""
              placeholder="Username"
              icon="/img/person-icon.svg"
              className="mt-[100px] max-w-[500px]"
              onChange={(value) => setUsername(value)}
            />
            <TextInput
              ref={passRef}
              type="password"
              label=""
              placeholder="Password"
              icon="/img/key-icon.svg"
              className="max-w-[500px] "
              onChange={(value) => setPassword(value)}
            />

            <Button
              text="Log in"
              type="primary"
              className="mt-[100px]"
              onClick={onLogin}
              isLoading={isLoading}
            />
          </div>
          <p className="text-caption1 font-normal tracking-widest text-black-400 text-center">
            {`Made with ❤️ Great App From Larsen.dev - ${new Date().getFullYear()}`}
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
