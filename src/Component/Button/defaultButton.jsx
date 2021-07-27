import React from "react";
import {
  btnPrimary,
  btnSecondary,
  sizePrimary,
  sizeSecondary,
} from "@css/defaultButton.module.css";

function DefaultButton({ btnText, btnType }) {
  return (
    <div>
      {btnType === "Primary" ? (
        <button className={`${btnPrimary} ${sizePrimary}`}>{btnText}</button>
      ) : btnType === "Secondary" ? (
        <button className={`${btnSecondary} ${sizeSecondary}`}>
          {btnText}
        </button>
      ) : (
        <button>{btnText}</button>
      )}
    </div>
  );
}

export default DefaultButton;
