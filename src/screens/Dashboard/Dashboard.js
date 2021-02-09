import React from "react";
import { Layout } from "../../components/Layout/Layout";

export function Dashboard() {
  return (
    <Layout
      routes={[
        {
          path: "/dashboard",
          component: <span>dashboard</span>,
          text: "Dashboard",
          icon: "fa fa-home",
        },
        {
          path: "/dashboard/airtime",
          component: <span> airtime</span>,
          text: "Airtime",
          icon: "fa  fa-mobile",
        },
        {
          path: "/dashboard/data",
          component: <span> data</span>,
          text: "Data",
          icon: "fa fa-sim-card",
        },
        {
          path: "/dashboard/transactions",
          component: <span> transactions</span>,
          text: "Transactions",
          icon: "fa fa-exchange-alt",
        },
        {
          path: "/dashboard/account",
          component: <span> Account</span>,
          text: "Account",
          icon: "fa fa-user-cog",
        },
        {
          path: "/dashboard/logout",
          component: <span> Logout</span>,
          text: "Logout",
          icon: "fa fa-power-off",
        },
      ]}
    />
  );
}
