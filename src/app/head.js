/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */

export default function Head() {
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Marcellus&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Whisper&display=swap"
        rel="stylesheet"
      />

      {/* Vendor Styles */}
      <link
        rel="stylesheet"
        href="/assets/vendors/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="/assets/vendors/bootstrap-select/bootstrap-select.min.css"
      />
      <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
      <link
        rel="stylesheet"
        href="/assets/vendors/fontawesome/css/all.min.css"
      />
      <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css" />
      <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css" />
      <link
        rel="stylesheet"
        href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css"
      />
      <link
        rel="stylesheet"
        href="/assets/vendors/nouislider/nouislider.min.css"
      />
      <link
        rel="stylesheet"
        href="/assets/vendors/nouislider/nouislider.pips.css"
      />
      <link
        rel="stylesheet"
        href="/assets/vendors/tiny-slider/tiny-slider.css"
      />
      <link
        rel="stylesheet"
        href="/assets/vendors/procounsel-icons/style.css"
      />
      <link rel="stylesheet" href="/assets/vendors/slick/slick.css" />
      <link
        rel="stylesheet"
        href="/assets/vendors/owl-carousel/css/owl.carousel.min.css"
      />
      <link
        rel="stylesheet"
        href="/assets/vendors/owl-carousel/css/owl.theme.default.min.css"
      />

      {/* Template Styles */}
      <link rel="stylesheet" href="/assets/css/procounsel.css" />
      <link rel="stylesheet" href="/assets/css/procounsel-dark.css" />
    </>
  );
}
