export const menuData = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Services",
    href: "/services/",
    children: [
      {
        label: "Expert Witness",
        href: "#", children: [{ label: "Independent Medical Exams", href: "#" },
        { label: "Record Review", href: "#" },
        ],
      },
      {
        label: "Nurse Services", href: "#", children: [
          { label: "Review for Merit", href: "#" },
          { label: "Medical Summary", href: "#" },
          { label: "Medical Chronology", href: "#" },
        ],
      },
      {
        label: "Background Checks", href: "#", children: [
          { label: "Enhanced Expert Profile", href: "#" },
          { label: "Challenge Study", href: "#" },
          { label: "Enhanced Expert Profile", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Experts",
    children: [
      {
        label: "Admin Experts",
        href: "#",
        children: [
          { label: "Assisted Living Administrator", href: "#" },
          { label: "Clinical Informatics", href: "#" },
          { label: "JCAHO", href: "#" },
          { label: "Valuation Economist", href: "#" },
          { label: "All Admin Experts", href: "#" },
        ],
      },
      {
        label: "Nursing Experts",
        href: "#",
        children: [
          { label: "Nursing Expert Witness – All others", href: "#" },
          { label: "Certified Nurse Anesthetist", href: "#" },
          { label: "Nurse Midwifery", href: "#" },
          { label: "All Nursing Experts", href: "#" },
        ],
      },
      {
        label: "Surgical Experts",
        href: "#",
        children: [
          { label: "Cardiac Surgery", href: "#" },
          { label: "Orthopedic Surgeon", href: "#" },
          { label: "Oral Surgery", href: "#" },
          { label: "Trauma Surgery", href: "#" },
          { label: "Vascular Surgery", href: "#" },
          { label: "All Surgical Experts", href: "#" },
        ],
      },
      {
        label: "Medical Experts",
        href: "#",
        children: [
          { label: "COVID-19 Medical", href: "#" },
          { label: "Infectious Disease", href: "#" },
          { label: "Neurology", href: "#" },
          { label: "Psychology", href: "#" },
          { label: "Endocrinology", href: "#" },
          { label: "All Medical Experts", href: "#" },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "#", children: [
      { label: "Pricing", href: "#" },
      { label: "Become an Expert", href: "#" },
      { label: "About Homestead", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    label: "Contact",
    href: "#",
  },
];



// export const menuData = [
//   {
//     label: "Home",
//     href: "/",
//     // megaMenu: true,
//     // showcase: [
//     //   {
//     //     img: "assets/images/procounsel-landing/home-1.jpg",
//     //     title: "Home Page 01",
//     //     links: [
//     //       { label: "Multi Page", href: "index.html" },
//     //       { label: "One Page", href: "index-one-page.html" },
//     //     ],
//     //   },
//     //   {
//     //     img: "assets/images/procounsel-landing/home-2.jpg",
//     //     title: "Home Page 02",
//     //     links: [
//     //       { label: "Multi Page", href: "index-2.html" },
//     //       { label: "One Page", href: "index-2-one-page.html" },
//     //     ],
//     //   },
//     //   {
//     //     img: "assets/images/procounsel-landing/home-3.jpg",
//     //     title: "Home Page 03",
//     //     links: [
//     //       { label: "Multi Page", href: "index-3.html" },
//     //       { label: "One Page", href: "index-3-one-page.html" },
//     //     ],
//     //   },
//     //   {
//     //     img: "assets/images/procounsel-landing/home-4.jpg",
//     //     title: "Home Page 04",
//     //     links: [
//     //       { label: "Multi Page", href: "index-4.html" },
//     //       { label: "One Page", href: "index-4-one-page.html" },
//     //     ],
//     //   },
//     // ],
//   },
//   {
//     label: "About",
//     href: "#",
//   },
//   {
//     label: "Pages",
//     children: [
//       {
//         label: "Our Team",
//         href: "team.html",
//         children: [
//           { label: "Team Page", href: "team.html" },
//           { label: "Team Carousel", href: "team-carousel.html" },
//           { label: "Team Details", href: "team-details.html" },
//         ],
//       },
//       {
//         label: "Project page",
//         href: "#",
//         children: [
//           { label: "Our Project", href: "project.html" },
//           { label: "Project Carousel", href: "project-carousel.html" },
//           { label: "Project Details", href: "project-details.html" },
//         ],
//       },
//       { label: "Pricing", href: "packages.html" },
//       { label: "Pricing Carousel", href: "packages-carousel.html" },
//       {
//         label: "Gallery",
//         href: "#",
//         children: [
//           { label: "Gallery masonry", href: "gallery.html" },
//           { label: "Gallery filter", href: "gallery-filter.html" },
//           { label: "Gallery Grid", href: "gallery-grid.html" },
//           { label: "Gallery Carousel", href: "gallery-carousel.html" },
//         ],
//       },
//       { label: "FAQs", href: "faq.html" },
//       { label: "Login", href: "login.html" },
//       { label: "404 Error", href: "404.html" },
//     ],
//   },
//   {
//     label: "Services",
//     children: [
//       { label: "Services", href: "services.html" },
//       { label: "Services Carousel", href: "services-carousel.html" },
//       { label: "Criminal Law", href: "service-d-criminal.html" },
//       { label: "Family Law", href: "service-d-family.html" },
//       { label: "Real Estate Law", href: "service-d-real-estate.html" },
//       { label: "Employment Law", href: "service-d-employment.html" },
//       { label: "Healthcare Law", href: "service-d-healthcare.html" },
//       { label: "Ecommerce Law", href: "service-d-ecommerce.html" },
//     ],
//   },
//   {
//     label: "Shop",
//     children: [
//       {
//         label: "Products",
//         children: [
//           { label: "No sidebar", href: "products.html" },
//           { label: "Left sidebar", href: "products-left.html" },
//           { label: "Right sidebar", href: "products-right.html" },
//         ],
//       },
//       { label: "Products carousel", href: "products-carousel.html" },
//       { label: "Product details", href: "product-details.html" },
//       { label: "Cart", href: "cart.html" },
//       { label: "Checkout", href: "checkout.html" },
//     ],
//   },
//   {
//     label: "News",
//     children: [
//       {
//         label: "News grid",
//         children: [
//           { label: "No sidebar", href: "blog-grid.html" },
//           { label: "Left sidebar", href: "blog-grid-left.html" },
//           { label: "Right sidebar", href: "blog-grid-right.html" },
//         ],
//       },
//       {
//         label: "News list",
//         children: [
//           { label: "No sidebar", href: "blog-list.html" },
//           { label: "Left sidebar", href: "blog-list-left.html" },
//           { label: "Right sidebar", href: "blog-list-right.html" },
//         ],
//       },
//       { label: "News carousel", href: "blog-carousel.html" },
//       {
//         label: "News details",
//         children: [
//           { label: "No sidebar", href: "blog-details.html" },
//           { label: "Left sidebar", href: "blog-details-left.html" },
//           { label: "Right sidebar", href: "blog-details-right.html" },
//         ],
//       },
//     ],
//   },
//   {
//     label: "Contact",
//     href: "contact.html",
//   },
// ];
