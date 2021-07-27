import React from "react";
import { divWrapper } from "@css/contiPage.module.css";
import { ContiTemplate } from "@template";
import DefaultButton from "@comp/Button/defaultButton";

function ContiPage() {
  return (
    <div className={`${divWrapper}`}>
      <ContiTemplate
        headerValue={"Button - Default"}
        content={<DefaultButton btnText={"Button"} />}
      />
      <ContiTemplate
        headerValue={"Button - Primary"}
        content={<DefaultButton btnText={"Button"} btnType={"Primary"} />}
      />
    </div>
  );
}

export default ContiPage;
