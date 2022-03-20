import React from "react";
import "./css/Featured.css";

function Featured(props) {
  return (
    <div>
      {" "}
      <footer class="footer_area footer_area_four pt-0 f_bg">
        <div class="footer_top">
          <div class="container-fluid featured-box ">
            <div class="row">
              <div class="col-lg-12">
                <h2 class="f_1000 f_size_40 l_height40 t_color3 text-center featured-head">
                  Features Optimised For Your Needs
                </h2>
                <p class="f_300 f_size_20 featured-sub-head text-center">
                  With a range of hybrid, secure and reliable features along
                  with a wide variety of integrations across voice, chat <br />
                  <span class="f_300   ml-4">
                    and video conferencing, we have every possible feature you
                    will ever need to manage your business
                  </span>
                </p>
              </div>
            </div>
            <br></br>
            <div class="row text-center">
              <div class="col-lg-4 col-md-6">
                <div class="f_widget about-widget pl_40">
                  <h3 class="f-title f_600 t_color f_size_32 mb_40">
                    Cloud Telephony
                  </h3>
                  <ul class="list-unstyled f_list">
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">Hosted IVR Services</a>
                    </li>
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">Leadership</a>
                    </li>
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">Diversity</a>
                    </li>
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">Press</a>
                    </li>
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">Wavelength</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="f_widget about-widget">
                  <h3 class="f-title f_600 t_color f_size_32 mb_40">
                    Cloud Contact Center{" "}
                  </h3>
                  <ul class="list-unstyled f_list">
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">Project Management</a>
                    </li>
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">Agile</a>
                    </li>
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">Task Management</a>
                    </li>
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">Reporting</a>
                    </li>
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">Work Tracking</a>
                    </li>
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">See All Uses</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="f_widget about-widget">
                  <h3 class="f-title f_600 t_color f_size_32 mb_40">
                    Programmable API Stack{" "}
                  </h3>
                  <ul class="list-unstyled f_list">
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">Engineering</a>
                    </li>
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">Designers</a>
                    </li>
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">Sales</a>
                    </li>
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">Developers</a>
                    </li>
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">Marketing</a>
                    </li>
                    <li>
                      <i class="ti-arrow-right"></i>
                      <a href="#">See All Teams</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Featured;
