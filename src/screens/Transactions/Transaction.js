import React from "react";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import { Modal } from "../../components/Modal/Modal";
import { ReferSection } from "../../components/ReferSection/ReferSection";
import { Table } from "../../components/Table/Table";
import { Wallet } from "../../components/Wallet/Wallet";
import "./Transaction.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

let isStartDateSelected = true;

export function TransactionScreen({}) {
  //@state
  let showDatePicker = false;
  //@state
  let startDate = null,
    endDate = null;

  return (
    <>
      <Modal show={showDatePicker} onDismiss={() => (showDatePicker = false)}>
        <div className="calendar-wrapper">
          <div onClick={(event) => event.stopPropagation()}>
            <Calendar
              value={startDate || endDate || new Date()}
              minDate={!isStartDateSelected ? startDate : undefined}
              onChange={(value) => {
                console.log(value);
                if (isStartDateSelected) {
                  startDate = new Date(value);
                } else {
                  endDate = new Date(value);
                }
              }}
            />
            <div style={{ height: 20 }} />
            <Button
              text="OK"
              horizontalInsetPadding={25}
              onPress={() => {
                showDatePicker = false;
              }}
            />
          </div>
        </div>
      </Modal>
      <div className="dashboard-screen-wrapper">
        <div style={{ height: 60 }} />
        <div className="row">
          <div className="col6">
            <div className="date-selection-wrapper">
              <Button
                bgColor="white"
                noElevation
                horizontalInsetPadding={0}
                verticalInsetPadding={0}
                onPress={() => {
                  showDatePicker = true;
                  isStartDateSelected = true;
                }}
              >
                <div className="date-selector">
                  <span style={{ opacity: startDate ? 1 : undefined }}>
                    {startDate
                      ? startDate.toISOString().replace(/T.*$/, "")
                      : "start date"}
                  </span>
                  <i className="fa fa-calendar-alt" />
                </div>
              </Button>
              <div style={{ width: 40 }} />
              <Button
                bgColor="white"
                noElevation
                horizontalInsetPadding={0}
                verticalInsetPadding={0}
                onPress={() => {
                  showDatePicker = true;
                  isStartDateSelected = false;
                }}
              >
                <div className="date-selector">
                  <span style={{ opacity: endDate ? 1 : undefined }}>
                    {endDate
                      ? endDate.toISOString().replace(/T.*$/, "")
                      : "end date"}
                  </span>
                  <i className="fa fa-calendar-alt" />
                </div>
              </Button>
            </div>
          </div>
          <div className="col6">
            <div className="align-right">
              <div className="search-input">
                <InputText placeholder="search" />
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: 20 }} />
        <Table />
      </div>
    </>
  );
}
