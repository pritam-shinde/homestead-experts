"use client"
import React from "react";

const ServicePage = () => {
  const services = [
    { title: "Admin Experts", link: "#" },
    { title: "Assisted Living Administrator Expert Witness", link: "#" },
    { title: "Clinical Informatics Expert Witness", link: "#" },
    { title: "JCAHO Expert Witness", link: "#" },
    { title: "Valuation Economist Expert Witness", link: "#" },
    { title: "All Admin Experts", link: "#" },
    { title: "Cardiac Surgery Expert Witness", link: "#" },
    { title: "Orthopedic Surgeon Expert Witness", link: "#" },
    { title: "Oral Surgery Expert Witness", link: "#" },
    { title: "Trauma Surgery Expert Witness", link: "#" },
    { title: "Vascular Surgery Expert Witness", link: "#" },
    { title: "All Surgical Experts", link: "#" },
    { title: "Nursing Experts", link: "#" },
    { title: "Nursing Expert Witness – All others", link: "#" },
    { title: "Certified Nurse Anesthetist Expert Witness", link: "#" },
    { title: "Nurse Midwifery Expert Witness", link: "#" },
    { title: "All Nursing Experts", link: "#" },
    { title: "Surgical Experts", link: "#" },
    { title: "Medical Experts", link: "#" },
    { title: "COVID-19 Medical Expert Witness", link: "#" },
    { title: "Infectious Disease Expert Witness", link: "#" },
    { title: "Neurology Expert Witness", link: "#" },
    { title: "Psychology Expert Witness", link: "#" },
    { title: "Endocrinology Expert Witness", link: "#" },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: "url('/assets/images/backgrounds/banner_services.jpg')" }}></div>

        <div className="container">
          <h2 className="page-header__title bw-split-in-right">Services</h2>
          <ul className="procounsel-breadcrumb list-unstyled">
            <li><a href="/">Home</a></li>
            <li><span>Services</span></li>
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="service-one service-two--page" style={{ background: "url(assets/images/backgrounds/section-2-bg.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container" >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "25px", maxWidth: "1200px", margin: "0 auto" }}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  background: "#fff", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                  padding: "30px 25px", display: "flex", flexDirection: "column", justifyContent: "space-between",
                  textAlign: "center", minHeight: "280px", transition: "transform 0.3s, box-shadow 0.3s",
                }}>

                <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "10px", color: "#1d3557" }}>
                  {service.title}
                </h3>

                <p style={{ fontSize: "14px", color: "#555", flexGrow: 1, marginBottom: "20px" }}>
                  Brief description about {service.title}. Our expert legal team
                  is here to guide you with the right approach.
                </p>

                <a href="#" className="service-procounsel-btn">
                  <i>Learn More</i>
                  <span>Learn More</span>
                </a>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;



// import React from 'react'

// const ServicePage = () => {
//     // const services = [
//     //     {
//     //         title: "Criminal Law",
//     //         link: "service-d-criminal.html",
//     //         text: "There are many free to variations of passages of Lorem Ipsum avalab but the majority have",
//     //         img: "assets/images/resources/service-1-1.png",
//     //         icon: "icon-criminal-law",
//     //         delay: "00ms",
//     //     },
//     //     {
//     //         title: "Family Law",
//     //         link: "service-d-family.html",
//     //         text: "There are many free to variations of passages of Lorem Ipsum avalab but the majority have",
//     //         img: "assets/images/resources/service-1-2.png",
//     //         icon: "icon-family-law",
//     //         delay: "100ms",
//     //     },
//     //     {
//     //         title: "Real Estate Law",
//     //         link: "service-d-real-estate.html",
//     //         text: "There are many free to variations of passages of Lorem Ipsum avalab but the majority have",
//     //         img: "assets/images/resources/service-1-3.png",
//     //         icon: "icon-real-estate-law",
//     //         delay: "150ms",
//     //     },
//     //     {
//     //         title: "Employment Law",
//     //         link: "service-d-employment.html",
//     //         text: "There are many free to variations of passages of Lorem Ipsum avalab but the majority have",
//     //         img: "assets/images/resources/service-1-4.png",
//     //         icon: "icon-employment-law",
//     //         delay: "200ms",
//     //     },
//     //     {
//     //         title: "Healthcare Law",
//     //         link: "service-d-healthcare.html",
//     //         text: "There are many free to variations of passages of Lorem Ipsum avalab but the majority have",
//     //         img: "assets/images/resources/service-1-2.png",
//     //         icon: "icon-family-law",
//     //         delay: "250ms",
//     //     },
//     //     {
//     //         title: "Ecommerce Law",
//     //         link: "service-d-ecommerce.html",
//     //         text: "There are many free to variations of passages of Lorem Ipsum avalab but the majority have",
//     //         img: "assets/images/resources/service-1-1.png",
//     //         icon: "icon-criminal-law",
//     //         delay: "300ms",
//     //     },
//     // ];
//     const services = [
//         { title: "Admin Experts", link: "#" },
//         { title: "Assisted Living Administrator Expert Witness", link: "#" },
//         { title: "Clinical Informatics Expert Witness", link: "#" },
//         { title: "JCAHO Expert Witness", link: "#" },
//         { title: "Valuation Economist Expert Witness", link: "#" },
//         { title: "All Admin Experts", link: "#" },
//         { title: "Cardiac Surgery Expert Witness", link: "#" },
//         { title: "Orthopedic Surgeon Expert Witness", link: "#" },
//         { title: "Oral Surgery Expert Witness", link: "#" },
//         { title: "Trauma Surgery Expert Witness", link: "#" },
//         { title: "Vascular Surgery Expert Witness", link: "#" },
//         { title: "All Surgical Experts", link: "#" },
//         { title: "Nursing Experts", link: "#" },
//         { title: "Nursing Expert Witness – All others", link: "#" },
//         { title: "Certified Nurse Anesthetist Expert Witness", link: "#" },
//         { title: "Nurse Midwifery Expert Witness", link: "#" },
//         { title: "All Nursing Experts", link: "#" },
//         { title: "Surgical Experts", link: "#" },
//         { title: "Medical Experts", link: "#" },
//         { title: "COVID-19 Medical Expert Witness", link: "#" },
//         { title: "Infectious Disease Expert Witness", link: "#" },
//         { title: "Neurology Expert Witness", link: "#" },
//         { title: "Psychology Expert Witness", link: "#" },
//         { title: "Endocrinology Expert Witness", link: "#" },
//     ];

//     return (
//         <>
//             <div className="page-wrapper">
// <section className="page-header">
//     <div className="page-header__bg" style={{ backgroundImage: "url('/assets/images/backgrounds/service-bg-new.jpg')" }}></div>

//     <div className="container">
//         <h2 className="page-header__title bw-split-in-right">Services</h2>
//         <ul className="procounsel-breadcrumb list-unstyled">
//             <li><a href="/">Home</a></li>
//             <li><span>Services</span></li>
//         </ul>
//     </div>
// </section>

//                 <section className="service-one service-two--page">
//                     <div className="container">
//                         {/* <div className="row gutter-y-30"> */}
//                         <div className="row gutter-y-50">
//                             {services.map((service, index) => (
//                                 <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={service.delay} key={index} >
//                                     <div className="service-one__item" style={{
//                                         display: "flex",
//                                         flexDirection: "column",
//                                         justifyContent: "space-between",
//                                         height: "100%",
//                                         padding: "20px",
//                                     }}>
//                                         <div className="service-one__item__top">
//                                             <h3 className="service-one__item__title" >
//                                                 <a href={service.link}>{service.title}</a>
//                                             </h3>
//                                             <span className="service-one__item__count"></span>
//                                         </div>
//                                         {/* <div className="service-one__item__content">
//                                             <p className="service-one__item__text">{service.text}</p>
//                                             <div className="service-one__item__image">
//                                                  <img src={"assets/images/resources/service-1-2.png"} alt="procounsel" />
//                                                 <img src={service.img} alt="procounsel" />
//                                                 <div className="service-one__item__icon">
//                                                     <i className={service.icon}></i>
//                                                 </div>
//                                             </div>
//                                         </div> */}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </>
//     )
// }

// export default ServicePage