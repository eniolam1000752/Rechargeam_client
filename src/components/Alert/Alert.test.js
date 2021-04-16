import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { AlertUI, Alert } from "./Alert";

describe("Testing Alert behaviour", () => {
  it("alert menthod should should be able to show the heading of an alert", async () => {
    const renderInstance = render(<AlertUI />);

    Alert.alert("Error");

    const alertHeader = await renderInstance.findByTestId("alert-header");

    console.log(await renderInstance.findByText("span"));

    const headerSpan = alertHeader.querySelector("span");
  });
});
