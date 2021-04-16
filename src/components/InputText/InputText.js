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
  type,
}) {
  //@state
  let showPassword = false;

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
              (onChangeText || (() => {}))(event.nativeEvent.target.value);
            }}
            disabled={disable}
            type={isPassword && !showPassword ? "password" : type || "text"}
          />
        </div>
        {isPassword && (
          <div>
            <Button
              bgColor="transparent"
              isRounded
              onPress={() => (showPassword = !showPassword)}
            >
              <i className="fa fa-eye" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
