"use client";

import Banner1 from "@/sections/home/Banner1";
import Banner1Swiper from "@/sections/home/Banner1Swiper";
import Banner4CaseStrategy from "@/sections/home/Banner4CaseStrategy";
import Banner5CaseStudy from "@/sections/home/Banner5CaseStudy";
import Banner8Contact from "@/sections/home/Banner8Contact";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Optimized Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setScrolled(scrollY > 300);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const scriptUrls = [
      "/assets/vendors/jquery/jquery-3.7.1.min.js",
      "/assets/vendors/owl-carousel/js/owl.carousel.min.js",
    ];

    const loadScript = (src) =>
      new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false; // preserve order
        script.onload = resolve;
        document.body.appendChild(script);
      });

    (async () => {
      // Load scripts sequentially
      for (const src of scriptUrls) {
        await loadScript(src);
      }

      // Now jQuery and Owl Carousel are ready
      const $ = window.jQuery;
      const carousel = $(".procounsel-owl__carousel");
      if (carousel.length && typeof $.fn.owlCarousel === "function") {
        carousel.each(function () {
          const elm = $(this);
          const options = elm.data("owl-options");
          elm.owlCarousel(
            typeof options === "object" ? options : JSON.parse(options)
          );
        });
      }
    })();
  }, []);
  return (
    <>
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>

      {/* <!-- preloader --> */}
      {/* <div className="preloader">
        <div className="preloader__image" style={{ backgroundImage: "url(assets/images/loader.png)" }}></div>
      </div> */}

      <div className="page-wrapper">
        {/* <!-- main-slider-start --> */}
        {/* <Banner1 /> */}
        <Banner1Swiper />

        {/* <section className="feature-one">
          <div className="container" style={{ maxWidth: "1200px", width: "100%", zIndex: 10, backgroundColor: "#050d22", padding: "40px 40px 0", boxShadow: "0 4px 12px rgba(0,0,0,0.9)" }}>
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

        </section> */}

  <section
          className="about-one "
          id="about"
          style={{
            background: "url(assets/images/backgrounds/section-2-1-bg.png)", backgroundRepeat: "no-repeat",
            backgroundSize: "160% 90%", backgroundPosition: "right center",
            backgroundColor: "#0B1A22",
            // backgroundColor: "#050d22",
          }}>
          <div className="container">
            <div className="row margin-about">
              <div className="col-lg-9 wow fadeInRight" data-wow-delay="300ms">
                <div className="about-one__inner">
                  <div className="about-one__content">
                    <div className="sec-title text-left">
                      {/* <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                        <HammerIcon />
                        Experts You Can Build On
                      </div> */}

                      <h3 className="sec-title__title bw-split-in-up">
                        Experts You Can <span> Build On</span>
                      </h3>
                      <h4  className="font-Merriweather">
                        Credibility You Can Rely On, Coast to Coast
                      </h4>
                    </div>

                    <p className="about-one__content__text" style={{maxWidth:"550px"}}>
                      Every expert in our network is hand-vetted for
                      qualifications, credibility, and courtroom readiness. With
                      national reach and specialized knowledge across
                      disciplines, we match you with professionals who support
                      your case with clarity and conviction.
                    </p>

                    <div className="about-one__content__box">
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <ul className="about-one__content__list">
                          <li>
                            <span className="icon-check"></span>Rigorously
                            Vetted Professionals
                          </li>
                          <li>
                            <span className="icon-check"></span>Nationwide
                            Network
                          </li>
                          <li>
                            <span className="icon-check"></span>Trial-Tested
                            Experience
                          </li>
                        </ul>
                        <a href="#" className="procounsel-btn">
                          <i>SPEAK TO AN EXPERT</i>
                          <span>SPEAK TO AN EXPERT</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Start about-one --> */}
      

        {/*Tailored Section  */}
        <section className="tailored-section" id="tailored-background" >
          <div className="container tailored-content margin-tailored">
            <h3 className="sec-title__title text-white text-start">
              Tailored Search. Every Time.
            </h3>
            <h4 className="tailored-subtitle text-start font-Merriweather">
              Custom Recruitment for Complex Matters
            </h4>
          </div>

          <div className="tailored-redline1 test" style={{ position: "relative", objectFit: "cover" }}>
            <Image src="/assets/images/backgrounds/red-line-09.png" alt="redline" width={2000} height={16} style={{ transform: "rotateY(180deg)", width: "100%", position: "relative" }} />
          </div>

          <div className="container margin-tailored">
            <div className="">
              <p className="tailored-para about-one__content__text" style={{ position: "relative", color: "#fff", maxWidth:"750px" }}>
                We don&apos;t pull from static databases. When your case calls for
                niche expertise, our team actively recruits and verifies new
                experts on your behalf, managing outreach, vetting, and scheduling
                so you can stay focused on strategy.
              </p>
              <a href="#" className="procounsel-btn">
                <i>REQUEST AN EXPERT</i>
                <span>REQUEST AN EXPERT</span>
              </a>
            </div>
          </div>
        </section>

        {/*case strategy  */}
        <Banner4CaseStrategy />

        {/* case study */}
        <Banner5CaseStudy />

        {/* team section */}
        {/* <Banner6Team /> */}

        <Banner8Contact />
      </div>

      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        <div className="search-popup__content">
          <form role="search" method="get" className="search-popup__form" action="#">
            <input type="text" id="search" placeholder="Search Here..." />
            <button type="submit" aria-label="search submit" className="procounsel-btn">
              <i>
                <i className="icon-search"></i>
              </i>
              <span>
                <i className="icon-search"></i>
              </span>
            </button>
          </form>
        </div>
      </div>

      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <span className="scroll-to-top__text">back top</span>
        <span className="scroll-to-top__wrapper">
          <span className="scroll-to-top__inner"></span>
        </span>
      </a>
      <Script src="/assets/vendors/jquery/jquery-3.7.1.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/bootstrap-select/bootstrap-select.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/jarallax/jarallax.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/jquery-ui/jquery-ui.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/jquery-appear/jquery.appear.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/jquery-validate/jquery.validate.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/nouislider/nouislider.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/tiny-slider/tiny-slider.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/wnumb/wNumb.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/owl-carousel/js/owl.carousel.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/wow/wow.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/imagesloaded/imagesloaded.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/isotope/isotope.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/slick/slick.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/tilt/tilt.jquery.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/countdown/countdown.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/jquery-circleType/jquery.circleType.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/jquery-lettering/jquery.lettering.min.js" strategy="afterInteractive"></Script>

      {/* <!-- gsap js --> */}
      <Script src="/assets/vendors/gsap/gsap.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/gsap/scrolltrigger.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/gsap/splittext.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/vendors/gsap/procounsel-split.js" strategy="afterInteractive"></Script>

      {/* <!-- template js --> */}
      <Script src="/assets/js/procounsel.js" strategy="afterInteractive"></Script>
    </>
  );
}
