import React, { useEffect, useState } from "react";
import Typed from "typed.js";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/Context";

import "venobox/dist/venobox.min.css";

import bannerImg from "../../public/images/banner/banner-image-03.png";
import separator from "../../public/images/separator/separator-top.svg";
import separatorLight from "../../public/images/light/separator/separator-top.svg";

const Home = () => {
  const { isLightTheme } = useAppContext();
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [visibleIndex2, setVisibleIndex2] = useState(0);
  
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
        maxWidth: window.innerWidth >= 992 ? "50%" : "100%",
      });
    });

    const typeitInstance = new Typed(".is-visible-one", {
      strings: ["Any Language", "Any content", "Any Data"],
      typeSpeed: 80,
      backSpeed: 60,
      startDelay: 200,
      loop: Infinity,
      showCursor: false,
    });
    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    const intervalIdTwo = setInterval(() => {
      setVisibleIndex2((prevIndex) => (prevIndex + 1) % 2);
    }, 2000);

    return () => {
      typeitInstance.destroy();
      clearInterval(intervalId);
      clearInterval(intervalIdTwo);
    };
  }, []);
  return (
    <>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--60">
                <h1 className="title display-one">
                  Experience the power of Conversational AI search <br/>
                {/* Multilingual Generative AI search <br/> */}
                  {/* Experience Blazing Fast <br/> */}
                  {/* Revolutionize Enterprise Search with <br /> */}
                  {/* <span className="theme-gradient">Any (language, Content, Data)   </span> */}
                  {/* <br /> */}
                  {/* <span className="color-off">Gen AI powered search</span> */}
                </h1>
                <div className="col-lg-12">
                <h1 className="title">
                  <span className="header-caption ms-2">
                    <span className="cd-headline clip is-full-width">
                      <span className="cd-words-wrapper">
                        <b className="is-visible theme-gradient is-visible-one"></b>
                      </span>
                    </span>
                  </span>
                </h1>
                </div>

                <p className="b1 desc-text">
                  {/* Enterprise Search  */}
                  {/* Generative AI powered multilingual search and chat  */}
                </p>
                <div className="button-group">
                  <Link className="btn-default btn-large" href="/contact">
                    Get Started
                  </Link>
                  {
                    isLightTheme ? 
                      <Link
                        className="btn-default btn-large btn-border" style={{borderColor : "#7064e94d", color: "#ccceef" }}
                        href="/contact"
                      >
                        Request Demo
                      </Link> 
                    : 
                    <Link
                      className="btn-default btn-large btn-border" style={{borderColor : "#7064e94d", color: "#181818"}}
                      href="/contact"
                    >
                      Request Demo
                    </Link>
                  }
                </div>

                {/* <p className="color-gray mt--5">💳 No credit card required!</p> */}
              </div>
            </div>
            <div className="col-lg-10 col-xl-10 order-1 order-lg-2">
              <div className="frame-image frame-image-bottom bg-flashlight video-popup icon-center">
                <Image src={bannerImg} alt="Banner Images" />
                <div className="video-icon">
                  <Link
                    className="btn-default rounded-player popup-video border bg-white-dropshadow"
                    href="https://youtu.be/ThRYF96HIzA?si=Yz-Yc5HSf8uLPv-G"
                    data-vbtype="video"
                  >
                    <span>
                      <i className="feather-play"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chatenai-separator has-position-bottom">
          <Image
            className={`w-100 ${
              isLightTheme ? "separator-dark" : "separator-light"
            }`}
            src={isLightTheme ? separator : separatorLight}
            alt="separator"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
