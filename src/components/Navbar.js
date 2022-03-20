import React from "react";

// import "../css/bootstrap.min.css";
// import "../vendors/themify-icon/themify-icons.css";
// import "../vendors/font-awesome/css/all.css";
// import "../vendors/flaticon/flaticon.css";
// import "../vendors/animation/animate.css";
// import "../vendors/owl-carousel/assets/owl.carousel.min.css";
// import "../vendors/animation/animate.css";

// import "../vendors/magnify-pop/magnific-popup.css";
// import "../vendors/elagent/style.css";
// import "../vendors/scroll/jquery.mCustomScrollbar.min.css";

// import "../css/style.css";
// import "../css/responsive.css";

//js files import
// import "../js/jquery-3.6.0.min.js";
// import "../js/propper.js";
// import "../js/bootstrap.min.js";
// import "../vendors/wow/wow.min.js";
// import "../vendors/sckroller/jquery.parallax-scroll.js";
// import "../vendors/owl-carousel/owl.carousel.min.js";
// import "../vendors/imagesloaded/imagesloaded.pkgd.min.js";
// import "../vendors/isotope/isotope-min.js";
// import "../vendors/magnify-pop/jquery.magnific-popup.min.js";
// import "../vendors/scroll/jquery.mCustomScrollbar.concat.min.js";
// import "../js/plugins.js";
// import "../vendors/slick/slick.js";
// import "../js/main.js";

import "./css/Navbar.css";

function Navbar(props) {
  return (
    <div>
      {" "}
      <div className="body_wrapper">
        <header className="header_area nav-header-prop">
          <div className="nav-header-top" align="right">
            <div>
              <p>Talk to an expert: +9188383883838 |</p>
            </div>
            <div>
              <p>ContactUs |</p>
            </div>
            <div>
              <p>Login/Signup |</p>
            </div>
            <div>
              <p>English |</p>
            </div>
            <div>
              <p>Region </p>
            </div>
          </div>

          <nav className="navbar navbar-expand-lg menu_one menu_four">
            <div className="container">
              <a className="navbar-brand sticky_logo" href="#">
                <img
                  src="../img/logo2x.png"
                  srcset="../img/logo2x-2.png 2x"
                  alt="logo"
                />
                <img
                  src="../img/logo2x.png"
                  srcset="../img/logo2x.png 2x"
                  alt=""
                />
              </a>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="hamburger-cross">
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav menu w_menu ml-auto mr-auto">
                  <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                    <a
                      className="nav-link dropdown-toggle "
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="nav-bar-link-prop">Product</span>
                    </a>
                    <div className="mega_menu_inner">
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <ul className="dropdown-menu scroll">
                            <li className="nav-item">
                              <a href="home-chat.html" className="item">
                                <span className="img">
                                  <span className="rebon_tap">New</span>
                                  <img
                                    src="../img/mega-menu-img/home-chat.jpg"
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text"> Home Chat </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-tracking.html" className="item">
                                <span className="img">
                                  <span className="rebon_tap">New</span>
                                  <img
                                    src="../img/mega-menu-img/home-track.jpg"
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text"> Home Tracking </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-event.html" className="item">
                                <span className="img">
                                  <span className="rebon_tap">New</span>
                                  <img
                                    src="../img/mega-menu-img/home-event.jpg"
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text"> Home Event </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-security.html" className="item">
                                <span className="img">
                                  <span className="rebon_tap">New</span>
                                  <img
                                    src="../img/mega-menu-img/home-security.jpg"
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text"> Home Security </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-split.html" className="item">
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/home7.jpg"
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text"> Home Split </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-support.html" className="item">
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/support.jpg"
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text"> Support </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-color.html" className="item">
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/home-animation.jpg"
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text"> Scroll Animation </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-erp.html" className="item">
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/analytices.jpg"
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text"> Analytices </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-hosting.html" className="item">
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/hosting.jpg"
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text"> Hosting </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-pos.html" className="item">
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/pos.jpg"
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text"> POS </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-erp.html" className="item">
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/erp.jpg"
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text"> ERP </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="home-prototype-two.html"
                                className="item"
                              >
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/Prototyping_Tool.jpg"
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text"> Prototyping Tool </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="home-payment-processing.html"
                                className="item"
                              >
                                ``
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/home16.jpg"
                                    alt="home16"
                                  />
                                </span>
                                <span className="text">
                                  {" "}
                                  Payment Processing{" "}
                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-mail.html" className="item">
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/home9.jpg"
                                    alt="home9"
                                  />
                                </span>
                                <span className="text"> Email Client </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-startup.html" className="item">
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/home15.jpg"
                                    alt="home15"
                                  />
                                </span>
                                <span className="text"> Startup </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-saas.html" className="item">
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/home17.jpg"
                                    alt="Classic Saas"
                                  />
                                </span>
                                <span className="text"> Classic Saas </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="home-software-dark.html"
                                className="item"
                              >
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/home13.jpg"
                                    alt="Software (Dark)"
                                  />
                                </span>
                                <span className="text"> Software (Dark) </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-app-showcase.html" className="item">
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/home14.jpg"
                                    alt="App Showcase"
                                  />
                                </span>
                                <span className="text"> App Showcase </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="home-digital-marketing.html"
                                className="item"
                              >
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/home11.jpg"
                                    alt="Digital Marketing"
                                  />
                                </span>
                                <span className="text">
                                  {" "}
                                  Digital Marketing{" "}
                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-cloud.html" className="item">
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/home12.jpg"
                                    alt="Cloud Based Saas"
                                  />
                                </span>
                                <span className="text"> Cloud Based Saas </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="home-hr-management.html"
                                className="item"
                              >
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/home4.jpg"
                                    alt="HR Management"
                                  />
                                </span>
                                <span className="text"> HR Management </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="home-marketing-two.html"
                                className="item"
                              >
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/home3.jpg"
                                    alt="CRM Software"
                                  />
                                </span>
                                <span className="text"> CRM Software </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="home-payment-style2.html"
                                className="item"
                              >
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/home1.jpg"
                                    alt="Accounts &amp; Billing"
                                  />
                                </span>
                                <span className="text">
                                  {" "}
                                  Accounts &amp; Billing{" "}
                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="home-digital-marketing-two.html"
                                className="item"
                              >
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/home5.jpg"
                                    alt="Digital Agency"
                                  />
                                </span>
                                <span className="text"> Digital Agency </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="home-project-management.html"
                                className="item"
                              >
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/home8.jpg"
                                    alt="Project Management"
                                  />
                                </span>
                                <span className="text">
                                  {" "}
                                  Project Management{" "}
                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-saas-two.html" className="item">
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/saas2-slider.png"
                                    alt="Saas 02 (Slider)"
                                  />
                                </span>
                                <span className="text"> Saas 02 (Slider) </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="home-company.html" className="item">
                                <span className="img">
                                  <img
                                    src="../img/mega-menu-img/home2.jpg"
                                    alt="home2"
                                  />
                                </span>
                                <span className="text"> Company </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown submenu nav-item active">
                    <a
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      href="#"
                    >
                      <span className="nav-bar-link-prop">Solutions</span>
                    </a>
                    <ul role="menu" className="dropdown-menu">
                      <li className="dropdown submenu nav-item">
                        <a
                          title="Service"
                          className="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                        >
                          Service <span className="arrow_carrot-right"></span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              title="Service 01"
                              className="nav-link"
                              href="service-1.html"
                            >
                              Service 01
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              title="Service 02"
                              className="nav-link"
                              href="service-2.html"
                            >
                              Service 02
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              title="Service 03"
                              className="nav-link"
                              href="service-3.html"
                            >
                              Service 03
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              title="Service Details"
                              className="nav-link"
                              href="service-details.html"
                            >
                              Service Details
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown submenu nav-item">
                        <a
                          title="Career"
                          className="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                        >
                          Career <span className="arrow_carrot-right"></span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              title="Job Listing"
                              className="nav-link"
                              href="job-listing.html"
                            >
                              Job Listing
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              title="Job Details"
                              className="nav-link"
                              href="job-details.html"
                            >
                              Job Details
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              title="Apply Job"
                              className="nav-link"
                              href="job-apply.html"
                            >
                              Apply Job
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item active">
                        <a title="About" className="nav-link" href="about.html">
                          About
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          title="Process"
                          className="nav-link"
                          href="process.html"
                        >
                          Process
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          title="Pricing"
                          className="nav-link"
                          href="price.html"
                        >
                          Pricing
                        </a>
                      </li>

                      <li className="dropdown submenu nav-item">
                        <a
                          title="Case Study"
                          className="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                        >
                          Case Study<span className="arrow_carrot-right"></span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              title="Case Study"
                              className="nav-link"
                              href="case-study.html"
                            >
                              Case Study
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              title="Case study Details"
                              className="nav-link"
                              href="case-study-details.html"
                            >
                              Case Study Details
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a title="Team" className="nav-link" href="team.html">
                          Team
                        </a>
                      </li>

                      <li className="dropdown submenu nav-item">
                        <a
                          title="Sign Up"
                          className="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                        >
                          Sign Up <span className="arrow_carrot-right"></span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              title="Sign Up 01"
                              className="nav-link"
                              href="sign-up-1.html"
                            >
                              Sign Up 01
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              title="Sign Up 02"
                              className="nav-link"
                              href="sign-up-2.html"
                            >
                              Sign Up 02
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown submenu nav-item">
                        <a
                          title="Login"
                          className="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                        >
                          Login<span className="arrow_carrot-right"></span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              title="Login 01"
                              className="nav-link"
                              href="login.html"
                            >
                              Login 01
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              title="Login 02"
                              className="nav-link"
                              href="login-two.html"
                            >
                              Login 02
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a title="FAQ" className="nav-link" href="faq.html">
                          FAQ
                        </a>
                      </li>

                      <li className="dropdown submenu nav-item">
                        <a
                          title="Contact"
                          className="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                        >
                          Contact <span className="arrow_carrot-right"></span>
                        </a>
                        <ul role="menu" className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              title="Contact 01"
                              className="nav-link"
                              href="contact-1.html"
                            >
                              Contact 01
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              title="Contact  02"
                              className="nav-link"
                              href="contact-2.html"
                            >
                              Contact 02
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a
                          title="Thank You"
                          className="nav-link"
                          href="thanks.html"
                        >
                          Thank You
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          title="Coming Soon"
                          className="nav-link"
                          href="coming-soon.html"
                        >
                          Coming Soon
                        </a>
                      </li>

                      <li className="dropdown submenu nav-item">
                        <a
                          title="404"
                          className="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                        >
                          404<span className="arrow_carrot-right"></span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              title="404 01"
                              className="nav-link"
                              href="404.html"
                            >
                              404 01
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              title="404 02"
                              className="nav-link"
                              href="404-two.html"
                            >
                              404 02
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu mega_menu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="nav-bar-link-prop"> Industries</span>
                    </a>
                    <div className="mega_menu_inner">
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="index.html" className="nav-link">
                            Portfolio Grid
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a
                                href="portfolio-grid-2col.html"
                                className="nav-link"
                              >
                                Style 1 (2 columns)
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-grid-3columns.html"
                                className="nav-link"
                              >
                                Style 1 (3 columns)
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-grid-4columns.html"
                                className="nav-link"
                              >
                                Style 1 (4 columns)
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-grid-2col-2.html"
                                className="nav-link"
                              >
                                Style 2 (2 columns)
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-grid-2col-3.html"
                                className="nav-link"
                              >
                                Style 2 (3 columns)
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-grid-2col-4.html"
                                className="nav-link"
                              >
                                Style 2 (4 columns)
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a href="index.html" className="nav-link">
                            Portfolio Fluid
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a
                                href="portfolio-fullwidth-3columns.html"
                                className="nav-link"
                              >
                                Style 1 (3 columns)
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-fullwidth-4columns.html"
                                className="nav-link"
                              >
                                Style 1 (4 columns)
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-grid-fullwidth1.html"
                                className="nav-link"
                              >
                                Style 2 (3 columns)
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-grid-fullwidth2.html"
                                className="nav-link"
                              >
                                Style 2 (4 columns)
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a href="index.html" className="nav-link">
                            Portfolio Masonry
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a
                                href="portfolio-mas-2col.html"
                                className="nav-link"
                              >
                                Style 1 (2 columns)
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-mas-3col.html"
                                className="nav-link"
                              >
                                Style 1 (3 columns)
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-mas-4col.html"
                                className="nav-link"
                              >
                                Style 1 (4 columns)
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-mas-3col-2.html"
                                className="nav-link"
                              >
                                Style 2 (3 columns)
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-mas-4col-2.html"
                                className="nav-link"
                              >
                                Style 2 (4 columns)
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a href="index.html" className="nav-link">
                            Project details
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a
                                href="portfolio-details-1.html"
                                className="nav-link"
                              >
                                Style 1
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-details-2.html"
                                className="nav-link"
                              >
                                Style 2
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-details-3.html"
                                className="nav-link"
                              >
                                Style 3
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="nav-bar-link-prop">Resources</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="shop-grid.html" className="nav-link">
                          Shop Grid
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="shop-grid-left-sidebar.html"
                          className="nav-link"
                        >
                          Shop Grid Sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="shop-list.html" className="nav-link">
                          Shop list
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="product-details-1.html" className="nav-link">
                          Product detail
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="shoping-cart.html" className="nav-link">
                          Shopping cart
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="checkout.html" className="nav-link">
                          Checkout
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="wishlist.html" className="nav-link">
                          Wishlist
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="nav-bar-link-prop">Pricing</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="blog-grid.html" className="nav-link">
                          Blog Grid
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-grid-two.html" className="nav-link">
                          Blog Grid Two
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-list.html" className="nav-link">
                          Blog List
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-right-sidebar.html" className="nav-link">
                          Blog Right Sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-masonry.html" className="nav-link">
                          Blog Masonry
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-masonry-two.html" className="nav-link">
                          Blog Masonry Two
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="blog-masonry-sidebar.html"
                          className="nav-link"
                        >
                          Blog Masonry Sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="blog-masonry-sidebar-two.html"
                          className="nav-link"
                        >
                          Blog Masonry Sidebar Two
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-single.html" className="nav-link">
                          Blog Single
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-single-two.html" className="nav-link">
                          Blog Single Two
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu mega_menu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="nav-bar-link-prop">Company</span>
                    </a>
                    <div className="mega_menu_inner">
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link">Elements 01</a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a href="Accordion.html" className="nav-link">
                                Accordions
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="button.html" className="nav-link">
                                Buttons
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="team.html" className="nav-link">
                                Team
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="integration.html" className="nav-link">
                                Integration
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="client.html" className="nav-link">
                                Clients
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="subscribe.html" className="nav-link">
                                Subscribe
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="call-to-action.html"
                                className="nav-link"
                              >
                                Call to Action
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="tab.html" className="nav-link">
                                Tab
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link">Elements 02</a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a href="testimonial.html" className="nav-link">
                                Testimonials
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="video.html" className="nav-link">
                                Video
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="carosuel.html" className="nav-link">
                                Carosuel
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="google-map.html" className="nav-link">
                                Google Map
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="contact-form.html" className="nav-link">
                                Contact Form
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="process.html" className="nav-link">
                                Process
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="getapp.html" className="nav-link">
                                Get App
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">Elements 03</a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a href="heading.html" className="nav-link">
                                Heading
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="blockquote.html" className="nav-link">
                                Blockquote
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="price.html" className="nav-link">
                                Pricing Table
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="fun-fact.html" className="nav-link">
                                Fun Fact
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="coming-soon.html" className="nav-link">
                                Countdown Timer
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="pagination.html" className="nav-link">
                                Pagination
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="heading-style.html" className="nav-link">
                                Heading Elements
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="alart.html" className="nav-link">
                                Alart
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link"> Headers </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a href="header-dark.html" className="nav-link">
                                Header Dark
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="header-style2.html" className="nav-link">
                                Header Style 2
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="header-style3.html" className="nav-link">
                                Header Style 3
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="header-style4.html" className="nav-link">
                                Header Style 4
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="header-style5.html" className="nav-link">
                                Header Style 5
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="header-style6.html" className="nav-link">
                                Header Style 6
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="header-style7.html" className="nav-link">
                                Header Style 7
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="header-style8.html" className="nav-link">
                                Header Style 8
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item dropdown submenu mega_menu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="nav-bar-link-prop">Partner</span>
                    </a>
                    <div className="mega_menu_inner">
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link">Elements 01</a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a href="Accordion.html" className="nav-link">
                                Accordions
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="button.html" className="nav-link">
                                Buttons
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="team.html" className="nav-link">
                                Team
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="integration.html" className="nav-link">
                                Integration
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="client.html" className="nav-link">
                                Clients
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="subscribe.html" className="nav-link">
                                Subscribe
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="call-to-action.html"
                                className="nav-link"
                              >
                                Call to Action
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="tab.html" className="nav-link">
                                Tab
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link">Elements 02</a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a href="testimonial.html" className="nav-link">
                                Testimonials
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="video.html" className="nav-link">
                                Video
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="carosuel.html" className="nav-link">
                                Carosuel
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="google-map.html" className="nav-link">
                                Google Map
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="contact-form.html" className="nav-link">
                                Contact Form
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="process.html" className="nav-link">
                                Process
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="getapp.html" className="nav-link">
                                Get App
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">Elements 03</a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a href="heading.html" className="nav-link">
                                Heading
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="blockquote.html" className="nav-link">
                                Blockquote
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="price.html" className="nav-link">
                                Pricing Table
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="fun-fact.html" className="nav-link">
                                Fun Fact
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="coming-soon.html" className="nav-link">
                                Countdown Timer
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="pagination.html" className="nav-link">
                                Pagination
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="heading-style.html" className="nav-link">
                                Heading Elements
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="alart.html" className="nav-link">
                                Alart
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link"> Headers </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a href="header-dark.html" className="nav-link">
                                Header Dark
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="header-style2.html" className="nav-link">
                                Header Style 2
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="header-style3.html" className="nav-link">
                                Header Style 3
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="header-style4.html" className="nav-link">
                                Header Style 4
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="header-style5.html" className="nav-link">
                                Header Style 5
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="header-style6.html" className="nav-link">
                                Header Style 6
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="header-style7.html" className="nav-link">
                                Header Style 7
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="header-style8.html" className="nav-link">
                                Header Style 8
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <a
                  className="btn_get btn_hover hidden-sm hidden-xs"
                  href="#get-app"
                >
                  START FREE TRIAL
                </a>
              </div>
            </div>
          </nav>
        </header>

        {/* <section className="breadcrumb_area">
          <img
            className="breadcrumb_shap"
            src="../img/breadcrumb/banner_bg.png"
            alt=""
          />
          <div className="container">
            <div className="breadcrumb_content text-center">
              <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">
                About us
              </h1>
              <p className="f_400 w_color f_size_16 l_height26">
                Why I say old chap that is spiffing off his nut arse pear shaped
                plastered
                <br />
                Jeffrey bodge barney some dodgy.!!
              </p>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default Navbar;
