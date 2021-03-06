import React, { useContext } from "react";
import { Layout } from "../../components/Layout/Layout";
import { DashbaordScreen } from "./DashboardScreen";
import { AirtimeScreen } from "../Airtime/Airtime";
import { DataScreen } from "../Data/Data";
import { TransactionScreen } from "../Transactions/Transaction";
import { globals } from "../../lib/globals";
import { useHistory } from "react-router";
import { FullScreenLoader } from "../../components/FullScreenLoader/FullScreenLoader";
import { AppContext } from "../../components/AppProvider/AppProvider";
import { useController } from "../Dashboard/Dashboard.controller";
import Account from "../Account/Account";

export function Dashboard() {
  const history = useHistory();

  if (!globals.token) history.replace("/login");

  const { isLoading } = useController(history);

  return (
    <>
      <FullScreenLoader show={isLoading} text={"Getting data..."} />
      <Layout
        routes={[
          {
            path: "/dashboard",
            component: <DashbaordScreen />,
            text: "Dashboard",
            icon: "fa fa-home",
          },
          {
            path: "/dashboard/airtime",
            component: <AirtimeScreen />,
            text: "Airtime",
            icon: "fa  fa-mobile",
          },
          {
            path: "/dashboard/data",
            component: <DataScreen />,
            text: "Data",
            icon: "fa fa-sim-card",
          },
          {
            path: "/dashboard/transactions",
            component: <TransactionScreen />,
            text: "Transactions",
            icon: "fa fa-exchange-alt",
          },
          {
            path: "/dashboard/account",
            component: <Account />,
            text: "Account",
            icon: "fa fa-user-cog",
          },
          {
            onClick: () => {
              globals.token = null;
              localStorage.removeItem("token");
              history.replace("/home");
            },
            component: <span> Logout</span>,
            text: "Logout",
            icon: "fa fa-power-off",
          },
        ]}
      />
    </>
  );
}
