import React from "react";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Seth Lefberg",
      designation: "Founder & CEO",
      img: "/assets/images/team/team-1-1.jpg",
      delay: "000ms",
    },
    {
      id: 2,
      name: "Heather Durbin",
      designation: "Senior Case Manager",
      img: "/assets/images/team/team-1-2.png",
      delay: "100ms",
    },
    {
      id: 3,
      name: "Melissa Rosen",
      designation: "Expert Witness Recruiter",
      img: "/assets/images/team/team-1-3.jpg",
      delay: "200ms",
    },
    {
      id: 4,
      name: "Natalia Granados",
      designation: "Expert Witness Recruiter",
      img: "/assets/images/team/team-1-4.jpg",
      delay: "000ms",
    },
    {
      id: 5,
      name: "Haley Fuentes",
      designation: "Sr. Expert Witness Recruiter",
      img: "/assets/images/team/team-1-5.jpeg",
      delay: "100ms",
    },
    {
      id: 6,
      name: "Stephanie Baute",
      designation: "Expert Witness Recruiter",
      img: "/assets/images/team/team-1-6.jpg",
      delay: "200ms",
    },
    {
      id: 7,
      name: 'William "Topper" Cramer',
      designation: "Legal Nurse Consultant",
      img: "/assets/images/team/team-1-7.jpg",
      delay: "200ms",
    },
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: "icon-facebook", label: "Facebook" },
    { href: "https://pinterest.com", icon: "icon-pinterest", label: "Pinterest" },
    { href: "https://twitter.com", icon: "icon-twitter", label: "Twitter" },
    { href: "https://youtube.com", icon: "icon-youtube", label: "Youtube" },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/banner_team.jpg')",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container">
          <h2 className="page-header__title bw-split-in-right">Our Team</h2>
          <ul className="procounsel-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Team</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-one">
        <div className="container">
          <div className="row gutter-y-30">
            {teamMembers.map((member) => (
              <div className="col-lg-4 col-md-6" key={member.id}>
                <div
                  className="team-card wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay={member.delay}
                  style={{
                    height: "100%", // ensure full height usage
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="team-card__image bw-img-anim-left"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="team-card__content">
                      <h3 className="team-card__title">
                        <a href="team-details.html">{member.name}</a>
                      </h3>
                      <p className="team-card__designation">
                        {member.designation}
                      </p>
                    </div>

                    <div className="team-card__hover">
                      <span className="team-card__hover__btn">
                        <i className="icon-plus"></i>
                      </span>
                      <div className="team-card__hover__social">
                        {socialLinks.map((link, index) => (
                          <a href={link.href} key={index}>
                            <i className={link.icon}></i>
                            <span className="sr-only">{link.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    <img
                      src={member.img}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "525px", // fixed height for all images
                        objectFit: "cover", // crops to fit nicely
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;


// import React from "react";

// const OurTeam = () => {
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Seth Lefberg",
//       designation: "Founder & CEO",
//       img: "/assets/images/team/team-1-1.jpg",
//       delay: "000ms",
//     },
//     {
//       id: 2,
//       name: "Heather Durbin",
//       designation: "Senior Case Manager",
//       img: "/assets/images/team/team-1-2.png",
//       delay: "100ms",
//     },
//     {
//       id: 3,
//       name: "Melissa Rosen",
//       designation: "Expert Witness Recruiter",
//       img: "/assets/images/team/team-1-3.jpg",
//       delay: "200ms",
//     },
//       {
//       id: 1,
//       name: "Natalia Granados",
//       designation: "Expert Witness Recruiter",
//       img: "/assets/images/team/team-1-4.jpg",
//       delay: "000ms",
//     },
//     {
//       id: 5,
//       name: "Haley Fuentes",
//       designation: "Sr. Expert Witness Recruiter",
//       img: "/assets/images/team/team-1-5.jpeg",
//       delay: "100ms",
//     },
//     {
//       id: 6,
//       name: "Stephanie Baute",
//       designation: "Expert Witness Recruiter",
//       img: "/assets/images/team/team-1-6.jpg",
//       delay: "200ms",
//     },
//      {
//       id: 7,
//       name: 'William "Topper" Cramer',
//       designation: "Legal Nurse Consultant",
//       img: "/assets/images/team/team-1-7.jpg",
//       delay: "200ms",
//     },
//   ];

//   const socialLinks = [
//     { href: "https://facebook.com", icon: "icon-facebook", label: "Facebook" },
//     { href: "https://pinterest.com", icon: "icon-pinterest", label: "Pinterest" },
//     { href: "https://twitter.com", icon: "icon-twitter", label: "Twitter" },
//     { href: "https://youtube.com", icon: "icon-youtube", label: "Youtube" },
//   ];

//   return (
//     <>
//       {/* Page Header */}
//       <section className="page-header">
//         <div className="page-header__bg" style={{ backgroundImage: "url('/assets/images/backgrounds/banner_team.jpg')",backgroundPosition:"center" }}></div>
//         <div className="container">
//           <h2 className="page-header__title bw-split-in-right">Our Team</h2>
//           <ul className="procounsel-breadcrumb list-unstyled">
//             <li>
//               <a href="index.html">Home</a>
//             </li>
//             <li>
//               <span>Team</span>
//             </li>
//           </ul>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="team-one">
//         <div className="container">
//           <div className="row gutter-y-30">
//             {teamMembers.map((member) => (
//               <div className="col-lg-4 col-md-6" key={member.id}>
//                 <div
//                   className="team-card wow fadeInUp"
//                   data-wow-duration="1500ms"
//                   data-wow-delay={member.delay}
//                 >
//                   <div className="team-card__image bw-img-anim-left">
//                     <div className="team-card__content">
//                       <h3 className="team-card__title">
//                         <a href="team-details.html">{member.name}</a>
//                       </h3>
//                       <p className="team-card__designation">{member.designation}</p>
//                     </div>

//                     <div className="team-card__hover">
//                       <span className="team-card__hover__btn">
//                         <i className="icon-plus"></i>
//                       </span>
//                       <div className="team-card__hover__social">
//                         {socialLinks.map((link, index) => (
//                           <a href={link.href} key={index}>
//                             <i className={link.icon}></i>
//                             <span className="sr-only">{link.label}</span>
//                           </a>
//                         ))}
//                       </div>
//                     </div>

//                     <img src={member.img} alt={member.name} />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default OurTeam;
