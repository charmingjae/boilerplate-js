import React from "react";
import { Link } from "react-router-dom";
import DefaultButton from "@comp/Button/defaultButton";
import { divWrapper, item } from "@css/navigationTemplate.module.css";

function NavigationTemplate() {
  return (
    <div className={`${divWrapper}`}>
      <div className={`${item}`}>
        <a href="/">Boilerplate</a>
      </div>
      <div className={`${item}`}>
        <Link to="/_conti">
          <DefaultButton btnText={"_Conti"} />
        </Link>
        <Link to="/login">
          <DefaultButton btnText={"로그인"} />
        </Link>
        <Link to="/register">
          <DefaultButton btnText={"회원가입"} />
        </Link>
      </div>
    </div>
  );
}
export default NavigationTemplate;
