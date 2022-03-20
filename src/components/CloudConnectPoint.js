import React from "react";
import "./css/CloudConnectPoint.css";
function CloudConnectPoint(props) {
  return (
    <div>
      <section>
        <div class="container-fluid">
          <div class="row flex-row-reverse service_details_item">
            <div class="col-lg-4 col-sm-12">
              <div class="service_details_img ml-0">
                <img src="img/breadcrumb/service_details_one.png" alt="" />
              </div>
            </div>
            <div class="col-lg-8 col-sm-12 left-section ">
              <div class="service_details pr_120">
                <h2 class="f_p f_900 f_size_40 t_color3 l_height40 mb-30">
                  Why Cloud Connect for your business ?
                </h2>
                <p class="f_400 f_size_30 mb_50">
                  A million reasons to choose Cloud Connect Business suite for
                  your business. Its not just the features or our solutions that
                  make us stand out, our after-sales service support is one of
                  the best in the industry.
                </p>
                <ul class="list-unstyled mb-30 pl-0 pr_20  ">
                  <li class="list-prop">
                    <i class="ti-arrow-right mr-2"></i>
                    <span class="point-prop">Customer Driven Solutions: </span>
                    Cloud Connect's focus on being customer centric and
                    providing highly effective and efficient solutions makes it
                    the best choice to address the needs of a growing business.
                  </li>
                  <li class="list-prop">
                    <i class="ti-arrow-right mr-2"></i>
                    <span class="point-prop">
                      {" "}
                      Wide Array Of Features:
                    </span>{" "}
                    With a suite of features that provide easy and secure
                    migration, omnichannel communication, and an adaptable API
                    stack, our solutions can coalese in your workflows, easily.
                  </li>
                  <li class="list-prop">
                    <i class="ti-arrow-right mr-2"></i>
                    <span class="point-prop">
                      Extensive Customer Support:{" "}
                    </span>{" "}
                    We focus heavily on supporting brands with deploying our
                    solutions and addressing integration requirements based on
                    the needs of their business.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CloudConnectPoint;
