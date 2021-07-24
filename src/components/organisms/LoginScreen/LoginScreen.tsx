import * as React from "react";
import Image from "next/image";
import bgLogin from "../../../../public/img/bg-login.png";
import TextInput from "../../molecules/FormInput/TextInput";
import Button from "../../molecules/Button/Button";

const LoginScreen: React.FC = () => {
  const onLogin = () => {
    localStorage.setItem("isLoggedIn", "true");

    // router.push("/dashboard");
    window.location.href = "/dashboard";
  };
  return (
    <div className="w-full h-screen flex animate-fade-in">
      <div className="hidden h-full relative lg:block lg:w-1/2">
        <Image src={bgLogin} layout="fill" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full bg-white flex flex-col items-center justify-between p-8 box-border lg:py-10 lg:px-20 lg:w-1/2 ">
        <div></div>
        <div className="w-full flex flex-col items-center">
          <img src="/img/Logo.svg" className="w-[140px] object-contain" />

          <TextInput
            label=""
            placeholder="Username"
            icon="/img/person-icon.svg"
            className="mt-[100px] max-w-[500px] "
          />
          <TextInput
            type="password"
            label=""
            placeholder="Password"
            icon="/img/key-icon.svg"
            className="max-w-[500px] "
          />

          <Button text="Log in" type="primary" className="mt-[100px]" onClick={onLogin} />
        </div>
        <p className="text-caption1 font-normal tracking-widest text-black-400 text-center">
          {`Made with ❤️ Collaboration From Acien.id & Larsen.dev - 2021`}
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
