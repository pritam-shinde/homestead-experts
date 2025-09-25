"use client";

import Banner1 from "@/sections/home/Banner1";
import Banner4CaseStrategy from "@/sections/home/Banner4CaseStrategy";
import Banner6Team from "@/sections/home/Banner6Team";
import Banner8Contact from "@/sections/home/Banner8Contact";
import HammerIcon from "@/sections/icons/HammerIcon";
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

      {/* <div className="preloader">
        <div
          className="preloader__image"
          style={{ backgroundImage: "url(assets/images/loader.png)" }}
        ></div>
      </div> */}
      {/* <!-- /.preloader --> */}

      <div className="page-wrapper" >

        {/* <!-- main-slider-start --> */}
        <Banner1 />

        <section className="feature-one">
          <div className="container">
            <div className="feature-one__inner">
              <div className="row gutter-y-0">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms">
                  <div className="feature-one__item ">
                    <div className="feature-one__item__icon text-white">
                      <i className="icon-calendar"></i>
                    </div>
                    <h3 className="feature-one__item__title">
                      <Link href="#" className="text-white"> Find Your <br /> Expert Witness </Link>
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
                      <Link href="#" className="text-white"> Join Our Expert <br /> NetworkQ</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Start about-one --> */}
        <section className="about-one" id="about" style={{ background: "url(assets/images/backgrounds/section-2-bg.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="about-one__image wow " data-wow-delay="00ms">
                  <Image
                    width={362} height={597}
                    // src="/assets/images/resources/about-1-1.png"
                    src="/assets/images/backgrounds/your-trusted-new.jpg"
                    alt="procounsel"
                  />
                  <img
                    src="/assets/images/resources/signature.png"
                    alt=""
                    className="about-one__image__signature"
                  />
                  <div className="about-one__image__left bw-img-anim-right">
                    <img
                      src="/assets/images/resources/about-1-2.png"
                      alt="procounsel"
                    />
                  </div>
                  <div className="about-one__image__info">
                    <div className="about-one__image__info__icon">
                      <i className="icon-phone-1"></i>
                    </div>
                    <div>
                      <span>Call anytime</span>
                      <a href="tel:+3035550105">(303) 555-0105</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 wow fadeInRight" data-wow-delay="300ms">
                <div className="about-one__inner">
                  <div className="about-one__content">
                    <div className="sec-title text-left">
                      <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                        <HammerIcon />
                        Experts You Can Build On
                      </div>

                      <h3 className="sec-title__title bw-split-in-up">
                        Credibility You Can Rely On, <span>Coast to Coast</span>
                      </h3>
                    </div>

                    <p className="about-one__content__text">
                      Every expert in our network is hand-vetted for qualifications, credibility, and courtroom readiness. With national reach and specialized knowledge across disciplines, we match you with professionals who support your case with clarity and conviction.
                    </p>

                    <div className="about-one__content__box">
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <ul className="about-one__content__list">
                          <li>
                            <span className="icon-check"></span>Rigorously Vetted Professionals
                          </li>
                          <li>
                            <span className="icon-check"></span>Nationwide Network
                          </li>
                          <li>
                            <span className="icon-check"></span>Trial-Tested Experience
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

        {/*Tailored Section  */}
        <section className="tailored-section" style={{ height: "60vh", color: "#fff", padding: "60px 0", position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute", top: 0, left: 0, height: "100%", width: "100%",
            backgroundImage: "url('/assets/images/backgrounds/section-3-bg.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
            , zIndex: 0
          }}></div>

          <div className="tailored-redline" style={{ position: "absolute", left: "-2px", right: 0, top: "42%", transform: "translateY(-50%)", height: "12px", backgroundImage: "url('/assets/images/backgrounds/red-line-09.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", zIndex: 1 }}></div>

          <div className="container" style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column", height: "100%", textAlign: "center" }}>
            <h2 className="sec-title__title text-white text-start">Tailored Search. Every Time.</h2>
            <h4 className=" text-start" style={{ fontWeight: "600", marginBottom: "20px", color: "#dcdcdc", display: "inline-block", paddingBottom: "5px" }}>Custom Recruitment for Complex Matters</h4>
            <p style={{ maxWidth: "600px", marginBottom: "20px" }} className=" text-start">We don&apos;t pull from static databases. When your case calls for niche expertise, our team actively recruits and verifies new experts on your behalf, managing outreach, vetting, and scheduling so you can stay focused on strategy.</p>
            <div className="d-flex justify-content-start"><a href="#" className="procounsel-btn"><i>REQUEST AN EXPERT</i><span>REQUEST AN EXPERT</span></a></div>
          </div>
        </section>

        {/*case strategy  */}
        <Banner4CaseStrategy />

        {/* team section */}
        <Banner6Team />

        <Banner8Contact />
      </div>

      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        <div className="search-popup__content">
          <form
            role="search"
            method="get"
            className="search-popup__form"
            action="#"
          >
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="procounsel-btn"
            >
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
