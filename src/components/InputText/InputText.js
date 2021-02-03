import React from "react";
import { Button } from "../Button/Button";
import "./InputText.scss";

export function InputText({
  value,
  onChangeText,
  disable,
  isPassword,
  placeholder,
  topMargin,
  bottomMargin,
  verticalMargin,
}) {
  return (
    <div
      className="text-input"
      style={{
        marginTop: verticalMargin || topMargin,
        marginBottom: verticalMargin || bottomMargin,
      }}
    >
      <div className="text-input-row">
        <div className="text-input-column">
          <input
            placeholder={placeholder}
            value={value}
            onChange={(event) => {
              onChangeText(event.nativeEvent.target.value);
            }}
            disabled={disable}
            type={isPassword ? "password" : "text"}
          />
        </div>
        {isPassword && (
          <div>
            <Button bgColor="transparent" isRounded>
              <i className="fa fa-eye" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
