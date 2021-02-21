import React from "react";
import { API } from "../../lib/api";

export function useController() {
  //@state
  let state = { swiperData: [], customerPlans: {}, resellearPlans: {} };

  const dispatch = (data) => {
    state = { ...state, ...data };
  };

  //@init()
  const onGettingLandingPageData = () => {
    API.getSliderData()
      .then((resp) => {
        console.log(resp.sliderData);
        state.swiperData = resp.sliderData;
      })
      .catch((err) => {
        console.log(err);
      });

    API.getCustomerDataPlans()
      .then((resp) => {
        state.customerPlans = resp.dataPlans;
      })
      .catch((err) => {
        console.log(err);
      });

    API.getResellerDataPlans()
      .then((resp) => {
        state.resellearPlans = resp.dataPlans;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { state, dispatch };
}
