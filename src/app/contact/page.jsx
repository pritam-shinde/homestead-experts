"use client"
import Banner8Contact from '@/sections/home/Banner8Contact';
import { useEffect } from 'react';

const Contact = () => {
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
                    <div className="page-header__bg" style={{ backgroundImage: "url('/assets/images/backgrounds/banner_contact.jpg')" }}></div>
                    <div className="container">
                        <h2 className="page-header__title bw-split-in-right">Contact</h2>
                        <ul className="procounsel-breadcrumb list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><span>Contact</span></li>
                        </ul>
                    </div>
                </section>

                <Banner8Contact />

                <div className="google-map google-map__contact">
                    <iframe title="template google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.5592796999927!2d-74.65019869999999!3d40.3521217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e6e792c00001%3A0xcb47c72e557e582f!2s259%20Nassau%20St%20Suite%202%20%23552%2C%20Princeton%2C%20NJ%2008540%2C%20USA!5e0!3m2!1sen!2sin!4v1758706287458!5m2!1sen!2sin" className="map__contact" allowFullScreen></iframe>
                </div>
            </div>

            <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
                <span className="scroll-to-top__text">back top</span>
                <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner"></span></span>
            </a>
        </>
    )
}

export default Contact