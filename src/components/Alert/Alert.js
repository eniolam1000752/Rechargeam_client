import React, { useCallback, useEffect, useMemo } from "react";
import { EventEmitter } from "events";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import "./Alert.scss";

const alertEvent = new EventEmitter();

export function AlertUI() {
  //@state
  let alertText = "";
  //@state
  let header = "";
  //@state
  let show = false;
  //@state
  let buttons = [
    {
      text: "Cancel",
      onPress: () => {
        show = false;
        header = "";
        alertText = "";
      },
    },
  ];
  //@state
  let canCancel = true;

  //@init()
  const onMount = () => {
    alertEvent.addListener("show", (data) => {
      console.log("show");
      const { headerText, msg, btns, cancelable } = data;
      alertText = msg;
      header = headerText;
      show = true;
      canCancel = !cancelable;
      if (btns && btns.length > 0) {
        buttons = btns;
      } else {
        buttons = [
          {
            text: "Cancel",
            onPress: () => {
              show = false;
              header = "";
              alertText = "";
            },
          },
        ];
      }
    });
    alertEvent.addListener("dismiss", (data) => {
      show = false;
      header = "";
      alertText = "";
    });
  };

  useEffect(onMount, []);

  return (
    <Modal
      id="alert-modal"
      show={show}
      onDismiss={() => {
        show = false;
        header = "";
        alertText = "";
      }}
    >
      <div
        className="alert-wrapper"
        onClick={(event) => (!canCancel ? null : event.stopPropagation())}
      >
        <div
          className="alert-content"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="header-text" data-testid="alert-header">
            <span>{header}</span>
          </div>
          <div className="main-text">
            <span>{alertText}</span>
          </div>
          <div className="action-btns-section">
            {buttons.map((item, index) => (
              <Button
                key={`alert_btn_${index}`}
                text={item.text}
                onPress={() => {
                  const value = item.onPress();
                  if (!value) show = false;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export class Alert {
  static alert(headerText, msg, btns, cancelable) {
    alertEvent.emit("show", { headerText, msg, btns, cancelable });
  }
  static dismiss() {
    alertEvent.emit("dismiss");
  }
}
