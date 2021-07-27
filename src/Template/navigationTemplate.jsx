import React from "react";
import DefaultButton from "@comp/Button/defaultButton";
import { divWrapper, item } from "@css/navigationTemplate.module.css";

function NavigationTemplate() {
  return (
    <div className={`${divWrapper}`}>
      <div className={`${item}`}>
        <a href="/">Boilerplate</a>
      </div>
      <div className={`${item}`}>
        <DefaultButton btnText={"_Component"} />
      </div>
    </div>
  );
}
export default NavigationTemplate;
