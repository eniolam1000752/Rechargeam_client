import EventEmiter from "events";
export const globals = {
  token: null,
  historyInstance: new EventEmiter(),
};
