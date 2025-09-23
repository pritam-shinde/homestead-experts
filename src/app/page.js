"use client";

import Banner1 from "@/sections/home/Banner1";
import Banner4CaseStrategy from "@/sections/home/Banner4CaseStrategy";
import Banner6Team from "@/sections/home/Banner6Team";
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
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="00ms"
                >
                  <div className="feature-one__item ">
                    <div className="feature-one__item__icon text-white">
                      <i className="icon-calendar"></i>
                    </div>
                    <h3 className="feature-one__item__title">
                      <Link href="#" className="text-white"> Find Your <br /> Expert Witness </Link>
                    </h3>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="00ms"
                >
                  <div className="feature-one__item feature-one__item--border-left justify-content-center">
                    <div className="feature-one__item__icon text-white">
                      <i className="icon-payment"></i>
                    </div>
                    <h3 className="feature-one__item__title">
                      <Link href="#" className="text-white"> Get a Free <br /> Case Assessment</Link>
                      {/* Get free <br /> experts advice */}
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
                      {/* Best legal <br /> service provider */}
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
                        <div>
                          <svg
                            className="hammer"
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M21.6562 20.875H10.7188C10.5115 20.875 10.3128 20.9573 10.1663 21.1038C10.0198 21.2503 9.9375 21.449 9.9375 21.6562C9.9375 21.8635 10.0198 22.0622 10.1663 22.2087C10.3128 22.3552 10.5115 22.4375 10.7188 22.4375H21.6562C21.8635 22.4375 22.0622 22.3552 22.2087 22.2087C22.3552 22.0622 22.4375 21.8635 22.4375 21.6562C22.4375 21.449 22.3552 21.2503 22.2087 21.1038C22.0622 20.9573 21.8635 20.875 21.6562 20.875Z" />
                            <path d="M13.8056 16.9688C13.1943 16.9695 12.6083 17.2126 12.1761 17.6448C11.7439 18.0771 11.5007 18.6631 11.5 19.2744V20.0938H20.875V19.2744C20.8743 18.6631 20.6311 18.0771 20.1989 17.6448C19.7667 17.2126 19.1807 16.9695 18.5694 16.9688H13.8056Z" />
                            <path d="M15.9585 13.6149C15.9006 13.6678 15.8349 13.7114 15.7637 13.7442L15.989 13.9696C16.4566 14.4355 17.0898 14.6971 17.7499 14.697C18.41 14.6969 19.0432 14.4352 19.5107 13.9693L21.7812 11.698C22.0124 11.4668 22.1959 11.1924 22.321 10.8903C22.4462 10.5882 22.5106 10.2645 22.5106 9.9375C22.5106 9.61053 22.4462 9.28677 22.321 8.9847C22.1959 8.68263 22.0124 8.40818 21.7812 8.17701L21.5888 7.98456L15.9585 13.6149Z" />
                            <path d="M9.2226 7.20295L14.8529 1.57267C14.9108 1.51976 14.9765 1.47611 15.0478 1.44326L14.8224 1.21791C14.3548 0.752021 13.7216 0.490468 13.0615 0.49054C12.4014 0.490611 11.7682 0.752302 11.3007 1.21829L9.03015 3.48915C8.79891 3.72035 8.61548 3.99484 8.49034 4.29694C8.36519 4.59904 8.30078 4.92283 8.30078 5.24982C8.30078 5.57681 8.36519 5.9006 8.49034 6.2027C8.61548 6.5048 8.79891 6.77929 9.03015 7.01049L9.2226 7.20295Z" />
                            <path d="M14.3015 12.2813L14.0726 12.5102C13.9993 12.5825 13.9411 12.6687 13.9012 12.7637C13.8613 12.8586 13.8406 12.9605 13.8403 13.0635C13.84 13.1665 13.8601 13.2686 13.8993 13.3638C13.9386 13.459 13.9963 13.5455 14.0691 13.6184C14.142 13.6912 14.2285 13.7489 14.3237 13.7882C14.4189 13.8274 14.521 13.8475 14.624 13.8471C14.727 13.8468 14.8289 13.8261 14.9238 13.7863C15.0188 13.7464 15.105 13.6881 15.1773 13.6149L21.4273 7.36485C21.5716 7.21791 21.6521 7.01992 21.6511 6.81397C21.6502 6.60802 21.568 6.41077 21.4223 6.26514C21.2767 6.11951 21.0795 6.03729 20.8735 6.03635C20.6676 6.03542 20.4696 6.11586 20.3226 6.26016L20.0937 6.48907L16.5113 2.90602L16.7398 2.67735C16.8841 2.53041 16.9646 2.33242 16.9636 2.12647C16.9627 1.92052 16.8805 1.72327 16.7348 1.57764C16.5892 1.43201 16.392 1.34979 16.186 1.34885C15.9801 1.34792 15.7821 1.42836 15.6351 1.57266L9.38514 7.82266C9.31152 7.89496 9.25296 7.98112 9.21283 8.07618C9.17269 8.17123 9.15179 8.27329 9.15132 8.37647C9.15086 8.47965 9.17083 8.5819 9.2101 8.67731C9.24937 8.77273 9.30715 8.85942 9.38011 8.93238C9.45307 9.00534 9.53976 9.06312 9.63518 9.10239C9.73059 9.14166 9.83284 9.16163 9.93602 9.16117C10.0392 9.1607 10.1413 9.1398 10.2363 9.09966C10.3314 9.05953 10.4175 9.00097 10.4898 8.92735L10.7187 8.69844L10.7859 8.76559L1.18201 18.3695C0.953685 18.5955 0.772269 18.8644 0.648189 19.1608C0.524109 19.4571 0.459812 19.7751 0.458992 20.0963C0.458172 20.4176 0.520846 20.7359 0.643411 21.0328C0.765976 21.3298 0.946017 21.5996 1.17319 21.8268C1.40036 22.054 1.67018 22.234 1.96715 22.3566C2.26412 22.4791 2.58239 22.5418 2.90365 22.541C3.22492 22.5402 3.54286 22.4759 3.8392 22.3518C4.13554 22.2277 4.40444 22.0463 4.63045 21.818L14.2344 12.2141L14.3015 12.2813Z" />
                          </svg>
                        </div>
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

        <section className="contact-one">
          <div className="contact-one__bg" style={{ backgroundImage: "url(assets/images/backgrounds/contact-1-bg.jpg)" }}></div>
          <div className="contact-one__overlay"></div>
          <div className="container">
            <div className="contact-one__wrapper">
              <div className="row">
                <div className="col-xl-6">
                  <div className="sec-title text-left">
                    <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-1 text-white">
                      <HammerIcon />
                      <div>Get Matched</div><br />
                      <span> With Your Expert</span>{" "}
                    </div>

                    <h3 className="sec-title__title bw-split-in-up">
                      <span className="text-white">Just a few details</span>  <br />
                      <span> will get us started.</span>{" "}
                    </h3>
                  </div>

                  <div className="contact-one__content">
                    <div
                      className="contact-one__content__bg bw-img-anim-left"
                      style={{ backgroundImage: "url(assets/images/resources/contact-1-1.jpg)" }}
                    ></div>
                    <ul className="list-unstyled contact-one__info">
                      <li className="contact-one__info__item">
                        <div className="contact-one__info__icon">
                          <i className="icon-telephone-call-1"></i>
                          <span className="contact-one__info__icon__zoom">
                            <i className="icon-telephone-call-1"></i>
                          </span>
                        </div>
                        <div className="contact-one__info__content">
                          <div className="contact-one__info__text ">
                            <p className="main-footer__info__text">
                              <a href="tel:+18772443703" aria-label="Call us at (877) 244-3703" className="text-white">(877) 244-3703</a>
                            </p>
                            <a href="tel:+2195550114" aria-label="Call us at (877) 244-3703" className="text-white">+21 9555-0114</a>
                          </div>
                        </div>
                      </li>
                      <li className="contact-one__info__item">
                        <div className="contact-one__info__icon">
                          <i className="icon-glove"></i>
                          <span className="contact-one__info__icon__zoom">
                            <i className="icon-glove"></i>
                          </span>
                        </div>
                        {/* <div className="contact-one__info__content">
                          <p className="contact-one__info__text d-flex flex-column align-items-center justify-content-center" >
                            <a href="mailto:info@homesteadexperts.com" className="text-white ">
                              info@homesteadexperts.com
                            </a>
                            <br />
                            <a href="www.website.com" className="text-white ">https://homesteadexperts.com/</a>
                          </p>
                        </div> */}
                        <div className="contact-one__info__content">
                          <p className="contact-one__info__text" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 0 }}>
                            <a href="mailto:info@homesteadexperts.com" className='text-white'>
                              info@homesteadexperts.com
                            </a>
                            {/* <br /> */}
                            <a href="https://homesteadexperts.com/" className='text-white'>https://homesteadexperts.com/</a>
                          </p>
                        </div>
                      </li>
                      <li className="contact-one__info__item">
                        <div className="contact-one__info__icon">
                          <i className="icon-map-pin"></i>
                          <span className="contact-one__info__icon__zoom">
                            <i className="icon-map-pin"></i>
                          </span>
                        </div>
                        <div className="contact-one__info__content">
                          <p className="contact-one__info__text text-white" >
                            259 Nassau St. Suite 2 #552
                            <br /> Princeton, NJ 08542
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
                  <form
                    className="contact-one__form contact-form-validated form-one"
                    action="inc/sendemail.php"
                  >
                    <div className="contact-one__form__bg-one"></div>
                    <div className="contact-one__form__bg-two"></div>
                    <div className="form-one__group">
                      <div className="form-one__control form-one__control--full">
                        <input
                          id="firstname"
                          type="text"
                          name="firstname"
                          placeholder="First Name"
                        />
                      </div>

                      <div className="form-one__control form-one__control--full">
                        <input
                          id="lastname"
                          type="text"
                          name="lastname"
                          placeholder="Last Name"
                        />
                      </div>

                      <div className="form-one__control form-one__control--full">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>

                      <div className="form-one__control form-one__control--full">
                        <input id="casename" type="text" name="casename" placeholder="Case Name" />
                      </div>

                      <div className="form-one__control form-one__control--full">
                        <a href="#" className="procounsel-btn">
                          <i>Case Details</i>
                          <span>Case Details</span>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="main-footer">
          <div
            className="main-footer__bg"
            style={{ backgroundImage: "url('/assets/images/backgrounds/footer-bg.png')" }}></div>
          <div className="main-footer__top">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xl-4 wow fadeInUp" data-wow-delay="00ms">
                  <div className="footer-widget footer-widget--about">
                    <a href="#" className="footer-widget__logo">
                      <Image
                        src="/assets/images/logos/homestead-experts-logo-light.png"
                        width={250}
                        height={40}
                        alt="Homestead Logo"
                      />
                    </a>
                    <p className="footer-widget__text">
                      Discover a unique approach with our dedicated attorneys,
                      committed effective legal solutions.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6 col-xl-2 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="footer-widget footer-widget--links">
                    <h2 className="footer-widget__title">Links</h2>
                    <ul className="list-unstyled footer-widget__links">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Meet the Lawyer</a>
                      </li>
                      <li>
                        <a href="#">Expert Witness</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-xl-2 wow fadeInUp" data-wow-delay="200ms">
                  <div className="footer-widget footer-widget--links">
                    <h2 className="footer-widget__title">Explore</h2>
                    <ul className="list-unstyled footer-widget__links">
                      <li>
                        <a href="#">What We Offer</a>
                      </li>
                      <li>
                        <a href="#">Our Story</a>
                      </li>
                      <li>
                        <a href="#">Latest News</a>
                      </li>
                      <li>
                        <a href="#">Help Center</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-md-6 col-xl-4 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="footer-widget footer-widget--mail">
                    <h2 className="footer-widget__title">
                      Signup for our latest news
                      <br /> & articles
                    </h2>
                    <form
                      action="#"
                      data-url="MAILCHIMP_FORM_URL"
                      className="footer-widget__newsletter mc-form"
                    >
                      <input
                        type="text"
                        name="EMAIL"
                        placeholder="Email Address"
                      />
                      <button type="submit">
                        <i className="icon-right-arrow-2"></i>
                        <span className="sr-only">submit</span>
                      </button>
                    </form>
                    <div className="footer-widget__check">
                      <input
                        type="checkbox"
                        name="save-data"
                        id="save-data"
                      />
                      <label htmlFor="save-data">
                        I agree to the{" "}
                        <a href="#">Privacy Policy.</a>
                      </label>
                    </div>
                    <div className="mc-form__response"></div>
                  </div>
                </div>
              </div>

              <div className="main-footer__info">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="main-footer__info__inner">
                      <div className="main-footer__info__pin">
                        <i className="icon-pin"></i>
                      </div>
                      <div className="main-footer__info__location">
                        259 Nassau St. Suite 2 #552 <br />
                        Princeton, NJ 08542
                      </div>
                      <ul className="list-unstyled main-footer__info__list">
                        <li className="main-footer__info__item">
                          <div className="main-footer__info__icon">
                            <i className="icon-telephone-call-1"></i>
                          </div>
                          <div className="main-footer__info__content">
                            <p className="main-footer__info__text">
                              <a href="tel:+18772443703" aria-label="Call us at (877) 244-3703">(877) 244-3703</a>
                            </p>
                          </div>
                        </li>
                        <li className="main-footer__info__item">
                          <div className="main-footer__info__icon">
                            <i className="icon-mail"></i>
                          </div>
                          <div className="main-footer__info__content">
                            <p className="main-footer__info__text">
                              <a href="mailto:info@homesteadexperts.com">
                                info@homesteadexperts.com
                              </a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="main-footer__info__social">
                      <a href="https://facebook.com">
                        <i className="icon-facebook"></i>
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a href="https://pinterest.com">
                        <i className="icon-pinterest"></i>
                        <span className="sr-only">Pinterest</span>
                      </a>
                      <a href="https://twitter.com">
                        <i className="icon-twitter"></i>
                        <span className="sr-only">Twitter</span>
                      </a>
                      <a href="https://youtube.com">
                        <i className="icon-youtube"></i>
                        <span className="sr-only">Youtube</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="main-footer__bottom  wow fadeInUp"
            data-wow-delay="00ms"
          >
            <div className="container">
              <div className="main-footer__bottom__inner">
                <p className="main-footer__copyright">
                  &copy; Copyright <span className="dynamic-year"></span> by
                  Homestead Experts.
                </p>
              </div>
            </div>
          </div>
        </footer>
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
