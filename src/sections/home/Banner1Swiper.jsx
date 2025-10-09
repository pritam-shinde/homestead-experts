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
        <span className="d-inline d-lg-none">
          Homestead connects attorneys with leading expert
          <br />
          witnesses across every discipline.
          <br />
          Rigorously vetted, court-tested, and ready when you are.
        </span>
        <span className="d-none d-lg-inline">
          Homestead connects attorneys with leading expert witnesses across every discipline.
          Rigorously vetted, court-tested, and ready when you are.
        </span>
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
        <span className="d-block d-lg-inline">
          Your case can’t wait — neither should your search
        </span>
        <span className="d-block d-lg-inline">
          for the right expert. We deliver tailored matches quickly,
        </span>
        <span className="d-block d-lg-inline">
          without sacrificing rigor or credibility.
        </span>
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
      <>
        Our network of experts spans every field and jurisdiction. From medicine
        and engineering to finance and construction. <br />
        Wherever your case takes you, we connect you with the right expert.
      </>
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
                <p style={{ maxWidth: "700px" }}>{slide.text}</p>
                <a href="#" className="procounsel-btn">
                  <i> Discover More</i>
                  <span> Discover More</span>
                </a>
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