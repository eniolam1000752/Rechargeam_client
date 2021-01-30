import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Title } from "../../components/Title/Title";
import { Header } from "../../components/Header/Header";

import logo from "../../assets/svgs/logo.svg";
import rocketFlying from "../../assets/images/rocket-flying.png";
import justAClickAway from "../../assets/images/just-a-click-away.png";
import hand from "../../assets/svgs/hand.svg";
import cost from "../../assets/svgs/cost.svg";
import robot from "../../assets/svgs/robot.svg";
import cooperation from "../../assets/svgs/cooperation.svg";

import airtel from "../../assets/images/airtel.jpg";
import dstv from "../../assets/images/dstv.png";
import glo from "../../assets/images/glo-logo.jpg";
import gotv from "../../assets/images/gotv.png";
import mtn from "../../assets/images/mtn.png";
import phcn from "../../assets/images/phcn.jpeg";

import "./LandingPage.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function LandingPage({}) {
  const headerActions = [
    { title: "Home", path: "/home" },
    { title: "Services", path: "/services" },
    { title: "AboutUs", path: "/aboutus" },
    { title: "Reviews", path: "/reviews" },
  ];

  const swiperContents = [
    "Home of affordable data!, Airtime top-up, cableTV subscription, electricity bills payment also available at very discounted prices... Here you get all your transactions done in one place with ease and great customer support.",
    "kjsldj ;kjsldfj lskdfj skdfj sfj akdf af alfj akfja fka dflafkas fdaskfd ask fjkajfj akfjalfj klajf kjsldj ;kjsldfj lskdfj skdfj sfj akdf af alfj akfja fka dflafkas fdaskfd ask fjkajfj akfjalfj klajf ",
    "kjsldj ;kjsldfj lskdfj skdfj sfj akdf af alfj akfja fka dflafkas fdaskfd ask fjkajfj akfjalfj klajf kjsldj ;kjsldfj lskdfj skdfj sfj akdf af alfj akfja fka dflafkas fdaskfd ask fjkajfj akfjalfj klajf",
  ];

  const featureDescription = [
    {
      icon: cooperation,
      title: "Trusted",
      description:
        "Rechargeam is a trusted and reliable platform for quality service delivery in sales of mobile data,airtime,decoder subscriptions and Electricity bills payment.",
    },
    {
      icon: hand,
      title: "Easy payment",
      description:
        "Rechargeam is a trusted and reliable platform for quality service delivery in sales of mobile data,airtime,decoder subscriptions and Electricity bills payment.",
    },
    {
      icon: robot,
      title: "Automated",
      description:
        "We have a swift automated system with a 24hour service Delivery to meet your mobile needs and a feature suite for recharging bulk numbers at once",
    },
    {
      icon: cost,
      title: "Affordability",
      description:
        "We are affordable, trustworthy, responsive with Excellent Customer Support = Rechargeam.com",
    },
  ];

  const partners = [
    { name: "airtel", image: airtel },
    { name: "mtn", image: mtn },
    { name: "gotv", image: gotv },
    { name: "phcn", image: phcn },
    { name: "glo", image: glo },
    { name: "dstv", image: dstv },
  ];

  const swiperRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => swiperRef.current.slideNext(), 5000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="landing-page">
      <Header logo={logo} shouldStick={false} actions={headerActions} />
      <div className="background-layer">
        <div />
        <div>
          <div className="circle-1" />
        </div>
      </div>
      <section>
        <div className="section-0">
          <div className="illustration-text-wrapper">
            <div>
              <Title>
                <span>
                  Welcome to{" "}
                  <span style={{ color: "var(--primary-color" }}>
                    rechargeam
                  </span>
                </span>
              </Title>
              <div className="swiper-content">
                <Swiper
                  loop={true}
                  spaceBetween={50}
                  pagination={{ clickable: true }}
                  slidesPerView={"auto"}
                  // onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                  {swiperContents.map((item, index) => (
                    <SwiperSlide>
                      <span className="slider-text">{item}</span>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="illustration-image-wrapper">
            <img src={rocketFlying} />
          </div>
        </div>
      </section>
      <section>
        <div className="section-1">
          <div className="illustration-image-wrapper">
            <img src={justAClickAway} />
          </div>
          <div className="illustration-text-wrapper">
            <div>
              <Title text="Just a Click away" />
              <div className="swiper-content">
                <span className="slider-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat nulla congue nibh maximus blandit.
                  Phasellus tempus nibh leo, non hendrerit nunc interdum non.
                  Interdum et malesuada fames.
                </span>
                <div className="sign-up-link">
                  <Link to="/signUp">Sign up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="descriptions-wrapper">
          {featureDescription.map((item, index) => (
            <div className="description">
              <img src={item.icon} />
              <span>{item.title}</span>
              <span>{item.description}</span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="services-header">
          <Title align="center" text="Services just for you" />
        </div>
        <div></div>
      </section>
      <section>
        <div className="retailer-pricing-header">
          <Title align="center" text="" />
        </div>
      </section>
      <section>
        <div className="end-user-pricing-header">
          <Title align="center" text="" />
        </div>
      </section>
      <section>
        <div className="our-partners-header">
          <Title align="center" text="Our partners" />
        </div>
        <div className="partners-content">
          <span>
            We have partnered with these great brands to give you an amazing
            experience, you don't want to be left out, get onboard today!
          </span>
          <div className="partners-wrapper">
            {partners.map((item, index) => (
              <img key={`partner_${index}`} src={item.image} alt={item.name} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
