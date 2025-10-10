"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

// --- Import the slider data ---
export const sliderData = [
  {
    bg: "assets/images/backgrounds/banner_slide1-new.jpg",
    title: (
      <>
        Trusted. Vetted. <br />
        Trial-Ready.
        {/* <span className="d-block d-lg-inline">Trusted.</span>
        <span className="d-block d-lg-inline"> Vetted.</span>
        <span className="d-block"> Trial-Ready.</span> */}
      </>
    ),
    text: (
      <>
        <p style={{marginBottom:"0px"}} >
          Homestead connects attorneys with leading expert
          <br className="d-none d-lg-inline" />
          witnesses across every discipline.
        </p>
        <p style={{marginTop:"10px", marginBottom:"20px"}}>
          Rigorously vetted, court-tested, and ready when you are.
        </p>
        {/* <span className="d-none d-lg-inline">
          Homestead connects attorneys with leading expert witnesses across every discipline.
          Rigorously vetted, court-tested, and ready when you are.
        </span> */}
      </>
    ),
  },
  {
    bg: "assets/images/backgrounds/slider-1-2-new.jpg",
    title: (
      <>
        Speed When It Matters Most.
        {/* <span className="d-block d-lg-inline">Speed When</span>
        <span className="d-block d-lg-inline"> It Matters</span>
        <span className="d-block"> Most.</span> */}
      </>
    ),
    text: (
      <>
        <p className="">
          Your case can’t wait — neither should your search
        <br className="d-none d-lg-inline" />
          for the right expert. We deliver tailored matches quickly,
        <br className="d-none d-lg-inline" />
          without sacrificing rigor or credibility.
        </p>
      </>
    ),
  },
  {
    bg: "assets/images/backgrounds/slider-3-new.jpg",
    title: (
      <>
        Experts in Every Specialty. <br /> Nationwide Reach.
      </>
    ),
    text: (
      <p>
        Our network of experts spans every field and jurisdiction. <br className="d-none d-lg-inline" /> From medicine
        and engineering to finance and construction. <br className="d-none d-lg-inline" />
        Wherever your case takes you, we connect you with the right expert.
      </p>
    ),
  },
];

const Banner1Swiper = () => {
  return (
    <section className="hero-slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={2000} // 1.5s smooth transition speed
        pagination={{ clickable: true }}
        className="heroSwiper"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide" style={{ backgroundImage: `url(${slide.bg})`, }}            >
              {/* <div className="overlay"></div> */}
              <div className="main-slider-one__overlay-one"></div>
              <div className="content container p-md-0">
                <h1 className="">{slide.title}</h1>
                <div
                // style={{ maxWidth: "520px" }}
                >{slide.text}</div>
                {/* <div className="d-flex justify-content-start align-items-center gap-2">
                  <div>
                    <a href="#" className="procounsel-btn">
                      <i> REQUEST AN EXPERT</i>
                      <span> REQUEST AN EXPERT</span>
                    </a>
                  </div>
                  <div>
                    <a href="#" className="procounsel-btn">
                      <i> BECOME AN EXPERT</i>
                      <span> BECOME AN EXPERT</span>
                    </a>
                  </div>
                </div> */}

                <div className="d-flex flex-wrap justify-content-start align-items-center gap-4">
                  <div>
                    <a href="#" className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start">
                      <i>REQUEST AN EXPERT</i>
                      <span className="">REQUEST AN EXPERT</span>
                    </a>
                  </div>
                  <div>
                    <a href="#" className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start">
                      <i>BECOME AN EXPERT</i>
                      <span className="">BECOME AN EXPERT</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="feature-one ">
        <div className="container featured-position"
          style={{ maxWidth: "1190px", width: "100%", zIndex: 10, backgroundColor: " #0E222A", padding: "40px 40px 0", boxShadow: "0 4px 12px rgba(0,0,0,0.9)", position: "absolute", margin: "0 auto", left: "50%", transform: "translateX(-50%)", top: "100%" }}>
          <div className="feature-one__inner">
            <div className="row gutter-y-0">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms">
                <div className="feature-one__item ">
                  <div className="feature-one__item__icon text-white">
                    <i className="icon-calendar"></i>
                  </div>
                  <h3 className="feature-one__item__title">
                    <Link href="#" className="text-white">Find Your <br /> Expert Witness </Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms">
                <div className="feature-one__item feature-one__item--border-left justify-content-center">
                  <div className="feature-one__item__icon text-white">
                    <i className="icon-payment"></i>
                  </div>
                  <h3 className="feature-one__item__title">
                    <Link href="#" className="text-white"> Get a Free <br /> Case Assessment</Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms">
                <div className="feature-one__item feature-one__item--border-left justify-content-end">
                  <div className="feature-one__item__icon text-white">
                    <i className="icon-advice"></i>
                  </div>
                  <h3 className="feature-one__item__title">
                    <Link href="#" className="text-white"> Join Our Expert <br /> Network</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner1Swiper;