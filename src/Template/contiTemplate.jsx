import React from "react";
import {
  divWrapper,
  divContiHeader,
  divContiContent,
} from "@css/contiTemplate.module.css";

function ContiTemplate({ headerValue, content }) {
  return (
    <div className={`${divWrapper}`}>
      <div className={`${divContiHeader}`}>{headerValue}</div>
      <div className={`${divContiContent}`}>{content}</div>
    </div>
  );
}
export default ContiTemplate;
