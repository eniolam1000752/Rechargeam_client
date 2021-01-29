import "./LandingPage.scss";
import { Header } from "../../components/Header/Header";
import logo from "../../assets/svgs/logo.svg";
import rocketFlying from "../../assets/images/rocket-flying.png";

export function LandingPage({}) {
  const headerActions = [
    { title: "Home", path: "/home" },
    { title: "Services", path: "/services" },
    { title: "AboutUs", path: "/aboutus" },
    { title: "Reviews", path: "/reviews" },
  ];

  return (
    <div className="landing-page">
      <Header logo={logo} shouldStick={false} actions={headerActions} />
      <div className="background-layer">
        <div />
      </div>
      <section>
        <div className="section-0">
          <div className="illustration-text-wrapper"></div>
          <div className="illustration-image-wrapper">
            <img src={rocketFlying} />
          </div>
        </div>
      </section>
    </div>
  );
}
