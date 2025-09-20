import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div
                    className="main-footer__bg"
                    style={{ backgroundImage: "url('/assets/images/backgrounds/footer-bg.png')" }}></div>
                <div className="main-footer__top">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-md-6 col-xl-4 wow fadeInUp"
                                data-wow-delay="00ms"
                            >
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
                                {/* <!-- /.footer-widget --> */}
                            </div>
                            {/* <!-- /.col-md-6 --> */}
                            <div
                                className="col-md-6 col-xl-2 wow fadeInUp"
                                data-wow-delay="100ms"
                            >
                                <div className="footer-widget footer-widget--links">
                                    <h2 className="footer-widget__title">Links</h2>
                                    {/* <!-- /.footer-widget__title --> */}
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
                            {/* <!-- /.col-md-6 --> */}
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
                                    {/* <!-- /.list-unstyled footer-widget__links --> */}
                                </div>
                                {/* <!-- /.footer-widget --> */}
                            </div>
                            {/* <!-- /.col-md-6 --> */}
                            <div
                                className="col-md-6 col-xl-4 wow fadeInUp"
                                data-wow-delay="300ms"
                            >
                                <div className="footer-widget footer-widget--mail">
                                    <h2 className="footer-widget__title">
                                        Signup for our latest news
                                        <br /> & articles
                                    </h2>
                                    {/* <!-- /.footer-widget__title --> */}
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
                                            {/* <!-- /.sr-only --> */}
                                        </button>
                                    </form>
                                    {/* <!-- /. mc-form --> */}
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
                                    {/* <!-- /.mc-form__response --> */}
                                    {/* <!-- /.footer-widget__text --> */}
                                </div>
                                {/* <!-- /.footer-widget --> */}
                            </div>
                            {/* <!-- /.col-md-6 --> */}
                        </div>
                        {/* <!-- /.row --> */}
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
                                                    {/* <!-- /.contact-one__info__text --> */}
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
                    {/* <!-- /.container --> */}
                </div>
                {/* <!-- /.main-footer__top --> */}
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
                        {/* <!-- /.main-footer__inner --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </div>
                {/* <!-- /.main-footer__bottom --> */}
            </footer>
        </>
    )
}

export default Footer