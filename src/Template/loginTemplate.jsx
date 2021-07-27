import React from "react";
import {
  divWrapper,
  divContentWrapper,
  inputLogin,
  divTheme,
} from "@css/loginTemplate.module.css";
import DefaultButton from "@comp/Button/defaultButton";

function LoginTemplate() {
  return (
    <div className={`${divWrapper}`}>
      <div className={`${divContentWrapper}`}>
        <div className={`${divTheme}`}>Boilerplate Login</div>
        <input className={`${inputLogin}`} placeholder="아이디"></input>
        <input
          className={`${inputLogin}`}
          type="password"
          placeholder="비밀번호"
        ></input>
        <DefaultButton btnText={"로그인"} btnType={"Secondary"} />
      </div>
    </div>
  );
}

export default LoginTemplate;
