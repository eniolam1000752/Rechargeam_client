/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { globals } from "./globals.js";

const BASE_URL = "https://rechargeam-backend-test.herokuapp.com/api";

const ROUTES = {
  login: `${BASE_URL}/customer/login`,
  register: `${BASE_URL}/customer/register`,
  logout: `${BASE_URL}/customer/logout`,
  getUser: `${BASE_URL}/customer/getUser`,
  forget_password: `${BASE_URL}/customer/forgetPassword`,

  getSliderData: `${BASE_URL}/landingPage/sliderData`,
  getTransactions: `${BASE_URL}/request/customer/getTransactions`,
  getCustomerDataPlans: `${BASE_URL}/landingPage/dataPlans/CUSTOMER`,
  getResellerDataPlans: `${BASE_URL}/landingPage/dataPlans/RESELLER`,
};

export const API = {
  getSliderData: () => request(ROUTES.getSliderData, {}, "GET", {}),
  getTransactions: () => request(ROUTES.getTransactions, {}, "GET", {}),
  getUser: () => request(ROUTES.getUser, {}, "GET", {}),
  getCustomerDataPlans: () =>
    request(ROUTES.getCustomerDataPlans, {}, "GET", {}),
  getResellerDataPlans: () =>
    request(ROUTES.getResellerDataPlans, {}, "GET", {}),

  login: (payload) => request(ROUTES.login, payload, "POST", {}),
  register: (payload) => request(ROUTES.register, payload, "POST", {}),
  forgetPassword: (payload) =>
    request(ROUTES.forget_password, payload, "POST", {}),
};

export const defaultHeader = {
  Accept: "application/json",
  Authorization: "Bearer " + globals.token || "",
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
};

export default function request(url, payload, method, header) {
  defaultHeader.Authorization = `bearer ${globals.token}`;
  console.log("method: ", method);
  console.log("payload: ", payload);
  console.log("header: ", Object.assign(defaultHeader, header));

  if (/GET/g.test(method)) {
    const genUrl = () => {
      const payloadKeys = Object.keys(payload);
      return payloadKeys.length === 0
        ? url
        : payloadKeys.reduce(
            (cum, index, i) =>
              `${cum}${index}=${payload[index]}${
                i === payloadKeys.length - 1 ? "" : "&"
              }`,
            `${url}?`
          );
    };

    genUrl();
    console.log("URL: ", url);
    return fetch(url, {
      method,
      headers: Object.assign(defaultHeader, header),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.statusCode === 401) {
          globals.historyInstance.emit("logout");
          return;
        }

        if (jsonResponse.code === 0) {
          console.log(`%c RESPONSE OF ${url}: `, "green");
          console.log(jsonResponse);
          return jsonResponse;
        } else {
          console.log(`%c ERROR OF ${url}: `, "red");
          console.log(jsonResponse);
          return new Promise((resp, reject) => {
            reject(jsonResponse);
          });
        }
      });
  } else {
    console.log("URL: ", url);
    return fetch(url, {
      method,
      headers: Object.assign(defaultHeader, header),
      body: JSON.stringify(payload),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.statusCode === 401) {
          return;
        }
        if (jsonResponse.code === 0) {
          console.log(`%c RESPONSE OF ${url}: `, "green");
          console.log(jsonResponse);
          return jsonResponse;
        } else {
          console.log(`%c ERROR OF ${url}: `, "red");
          console.log(jsonResponse);
          return new Promise((resp, reject) => {
            reject(jsonResponse);
          });
        }
      });
  }
}
