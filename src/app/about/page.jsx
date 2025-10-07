"use client";

import HammerIcon from "@/sections/icons/HammerIcon";
import { useEffect } from "react";

const About = () => {
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
            <div className="page-wrapper">
                <section className="page-header">
                    <div className="page-header__bg" style={{ backgroundImage: "url('/assets/images/backgrounds/banner_about_us.jpg')", backgroundPosition: "center" }}></div>
                    <div className="container">
                        <h2 className="page-header__title bw-split-in-right">About Us</h2>
                        <ul className="procounsel-breadcrumb list-unstyled">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <span>About</span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="about-four about-four-about" id="about" style={{ background: "url(assets/images/backgrounds/section-2-bg.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="container">
                        <div className="row gutter-y-30">
                            <div className="col-xl-4 col-md-12">
                                <div className="about-four__img bw-img-anim-left">
                                    <img src="assets/images/resources/about_us_2nd_section.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-8 col-md-12">
                                <div className="about-four__content">
                                    <div className="sec-title text-left">
                                        <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                                            <HammerIcon />
                                            About Us
                                        </div>

                                        <h3 className="sec-title__title bw-split-in-up text-white">
                                            The Leading <br /> Expert <span> Witness Referral Source</span>
                                            {/* Experience the <br /> Best in <span>Legal Excellence</span> */}
                                        </h3>
                                    </div>

                                    <p className="about-four__text text-white">
                                        At Homestead Experts, we take pride in being the leading expert witness referral source. Our network connects you with qualified professionals who can strengthen your case with credible, reliable, and court-tested expertise.
                                    </p>
                                    <p className="about-four__text text-white"> No money up-front, no subscriptions, and always a free consultation — we make the process simple, transparent, and client-focused.
                                    </p>
                                    <ul className="list-unstyled about-four__list">
                                        <li className="about-four__item text-white">
                                            <i className="icon-check"></i>
                                            No Money Up-front
                                        </li>
                                        <li className="about-four__item text-white">
                                            <i className="icon-check"></i>
                                            No Subscriptions
                                        </li>
                                        <li className="about-four__item text-white">
                                            <i className="icon-check"></i>
                                            Free Consultation
                                        </li>
                                    </ul>
                                    <div className="about-four__btns">
                                        <a href="#" className="procounsel-btn ">
                                            <i> Discover More</i>
                                            <span> Discover More</span>
                                        </a>
                                        {/* <img src="assets/images/resources/about-2-signature.jpg" alt="signature" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-12">
                                <div className="about-four__right">
                                    <div className="about-four__right__inner">
                                        <div className="about-four__count count-box">
                                            <h3 className="about-four__count__number">
                                                <span className="count-text" data-stop="20" data-speed="1500">20<span className="small-plus">+</span></span>
                                            </h3>
                                            <p className="about-four__count__text text-white">Years Of Experience</p>
                                        </div>
                                        <div className="about-four__count count-box">
                                            <h3 className="about-four__count__number">
                                                <span className="count-text" data-stop="15" data-speed="1500">5k<span className="small-plus">+</span></span>
                                            </h3>

                                            <p className="about-four__count__text text-white">Experts Sourced</p>
                                        </div>
                                        {/* <div className="about-four__count count-box">
                                            <h3 className="about-four__count__number">
                                                <span className="count-text" data-stop="38" data-speed="1500">38</span>
                                            </h3>

                                            <p className="about-four__count__text text-white">Experience attorney</p>
                                        </div>
                                        <div className="about-four__count count-box">
                                            <h3 className="about-four__count__number">
                                                <span className="count-text" data-stop="90" data-speed="1500">90</span>
                                            </h3>
                                            <p className="about-four__count__text text-white">Won best Awards</p>
                                        </div> */}
                                    </div>
                                    {/* <a href="https://www.youtube.com/watch?v=h9MbznbxlLc" className="video-popup">
                                        <i className="icon-play-1"></i>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="why-choose-four">
                    <div className="why-choose-four__bg jarallax" data-jarallax data-speed="0.3" data-imgposition="50% -100%"
                        style={{ backgroundImage: "url(assets/images/backgrounds/bg_why_choose_us.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
                    ></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 wow fadeInUp" data-wow-delay="00ms">
                                <div className="why-choose-four__content">
                                    <div className="sec-title text-left">
                                        <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                                            <div>
                                                <HammerIcon />
                                            </div>
                                            <span className="text-white">Why choose us</span>
                                        </div>

                                        <h3 className="sec-title__title bw-split-in-up">
                                            You Should Choose <br />
                                            <span>Our Homestead Experts</span>
                                        </h3>
                                    </div>

                                    <p className="why-choose-four__content__text text-white">
                                        We help attorneys and insurance companies save time by finding the best expert medical experts or other expert witnesses that strengthen their case.
                                    </p>
                                    <p className="why-choose-four__content__text text-white"> At Homestead Medical Experts we are proud to provide an effective and convenient service to help attorneys communicate and work with our expert witnesses to provide the best outcomes in any form of litigation.
                                    </p>
                                    <div className="why-choose-four__list">
                                        <div className="why-choose-four__item">
                                            <div className="why-choose-four__item__top">
                                                <div className="why-choose-four__item__icon">
                                                    <i className="icon-podium"></i>
                                                </div>
                                                <h3 className="why-choose-four__item__title">
                                                    High Success <br /> Rate
                                                </h3>
                                            </div>
                                            <p className="why-choose-four__item__text text-white">Our history of favorable outcomes speaks for itself</p>
                                        </div>
                                        <div className="why-choose-four__item">
                                            <div className="why-choose-four__item__top">
                                                <div className="why-choose-four__item__icon">
                                                    <i className="icon-collaboration"></i>
                                                </div>
                                                <h3 className="why-choose-four__item__title">
                                                    Full Time <br /> Support
                                                </h3>
                                            </div>
                                            <p className="why-choose-four__item__text text-white">Our legal team is available when you need us most</p>
                                        </div>
                                    </div>
                                    <a href="#" className="procounsel-btn">
                                        <i>Discover More</i>
                                        <span>Discover More</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className=" why-choose-four__right">
                                    <div className="why-choose-four__img">
                                        <img src="assets/images/backgrounds/why_choose_us_3rd_section.jpg" alt="why-choose-us" />
                                    </div>
                                    <div className="why-choose-four__right__wrapper">
                                        <div className="why-choose-four__box count-box">
                                            <h3 className="why-choose-four__box__count">
                                                <span className="count-text" data-stop="35" data-speed="1500">5000+</span>
                                            </h3>
                                            <p className="why-choose-four__box__text">
                                                Medical <br /> Exams
                                            </p>
                                        </div>
                                        <div className="why-choose-four__box count-box">
                                            <h3 className="why-choose-four__box__count">
                                                <span className="count-text" data-stop="20" data-speed="1500">4,750+</span>
                                            </h3>
                                            <p className="why-choose-four__box__text">
                                                Cases <br /> Completed
                                            </p>
                                        </div>
                                        <div className="why-choose-four__box count-box">
                                            <h3 className="why-choose-four__box__count">
                                                <span className="count-text" data-stop="90" data-speed="1500">10,000+</span>
                                            </h3>
                                            <p className="why-choose-four__box__text">
                                                Vetted <br /> Experts
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <Banner6Team /> */}
                {/* <Testimonials /> */}

                <section className="cta-three ">
                    <div className="container wow fadeInUp" data-wow-delay="200ms">
                        <div className="cta-three__inner">
                            <div className="cta-three__inner__shape" style={{ backgroundImage: "url(assets/images/shapes/cta-shape-3-1.png)" }}></div>
                            <h3 className="cta-three__title">
                                Get Trusted Legal Support <br />
                                Book Your Consultation Today
                            </h3>

                            <a href="#" className="procounsel-btn">
                                <i>Get a Quote</i>
                                <span>Get a Quote</span>
                            </a>
                        </div>
                    </div>
                </section>

                <div className="barnds-one barnds-one-about bg-navy-color">
                    <div className="container">
                        <div className="barnds-one__inner wow fadeInUp" data-wow-delay="300ms">
                            <div className="row">
                                <div className="col-lg-2">
                                    <div className="barnds-one__text">
                                        <h3 className="text-white">
                                            Top Brands <br /> Trust Us
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <div className="barnds-one__logos">
                                        <div
                                            className="barnds-carousel__one procounsel-owl__carousel procounsel-owl__carousel--basic-nav owl-carousel"
                                            data-owl-options='{
                        "loop": true,
                        "animateOut": "fadeOut",
                        "animateIn": "fadeIn",
                        "items": 6,
                        "autoplay": false,
                        "autoplayTimeout": 7000,
                        "smartSpeed": 1000,
                        "nav": false,
                        "navText": ["<span className=\"icon-arrow-left\"></span>","<span className=\"icon-arrow-right\"></span>"],
                        "dots": false,
                        "margin": 0,
                        "responsive": {
                            "0": {
                                "items": 2
                            },
                            "600": {
                                "items": 3
                            },
                            "768": {
                                "items": 4
                            },
                            "1200": {
                                "items": 6
                            }
                        }
                        }'>
                                            <div className="item">
                                                <div className="barnds-one__img">
                                                    <img src="assets/images/resources/brand-1-new.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="barnds-one__img">
                                                    <img src="assets/images/resources/brand-2-new.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="barnds-one__img">
                                                    <img src="assets/images/resources/brand-3-new.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="barnds-one__img">
                                                    <img src="assets/images/resources/brand-1-new.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="barnds-one__img">
                                                    <img src="assets/images/resources/brand-5-new.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="barnds-one__img">
                                                    <img src="assets/images/resources/brand-6-new.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
