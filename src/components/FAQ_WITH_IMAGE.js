import React from "react";

function FAQ_WITH_IMAGE(props) {
  return (
    <div>
      <section class="developer_product_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex align-items-center">
              <div class="tab-content faq_content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="purchas"
                  role="tabpanel"
                  aria-labelledby="purchas-tab"
                >
                  <h2 class="f_600 f_size_30 l_height30 t_color3 mb_50">
                    Easy integration with tools of your preference
                  </h2>
                  <div id="accordion">
                    <div class="card">
                      <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                          <button
                            class="btn btn-link"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            How do I repair an item?<i class="ti-plus"></i>
                            <i class="ti-minus"></i>
                          </button>
                        </h5>
                      </div>

                      <div
                        id="collapseOne"
                        class="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Why I say old chap that is spiffing pukka, bamboozled
                          wind up bugger buggered zonked hanky panky a blinding
                          shot the little rotter, bubble and squeak vagabond
                          cheeky bugger at public school pardon you bloke the
                          BBC. Tickety-boo Elizabeth plastered matie.!
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                          <button
                            class="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Where can I find instructions on how to use my
                            watch?<i class="ti-plus"></i>
                            <i class="ti-minus"></i>
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        class="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Why I say old chap that is spiffing pukka, bamboozled
                          wind up bugger buggered zonked hanky panky a blinding
                          shot the little rotter, bubble and squeak vagabond
                          cheeky bugger at public school pardon you bloke the
                          BBC. Tickety-boo Elizabeth plastered matie.!
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                          <button
                            class="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Is there a warranty on my item?
                            <i class="ti-plus"></i>
                            <i class="ti-minus"></i>
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        class="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Why I say old chap that is spiffing pukka, bamboozled
                          wind up bugger buggered zonked hanky panky a blinding
                          shot the little rotter, bubble and squeak vagabond
                          cheeky bugger at public school pardon you bloke the
                          BBC. Tickety-boo Elizabeth plastered matie.!
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingfour">
                        <h5 class="mb-0">
                          <button
                            class="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapsefour"
                            aria-expanded="false"
                            aria-controls="collapsefour"
                          >
                            Is there a warranty on my item?
                            <i class="ti-plus"></i>
                            <i class="ti-minus"></i>
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapsefour"
                        class="collapse"
                        aria-labelledby="headingfour"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Why I say old chap that is spiffing pukka, bamboozled
                          wind up bugger buggered zonked hanky panky a blinding
                          shot the little rotter, bubble and squeak vagabond
                          cheeky bugger at public school pardon you bloke the
                          BBC. Tickety-boo Elizabeth plastered matie.!
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingfive">
                        <h5 class="mb-0">
                          <button
                            class="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapsefive"
                            aria-expanded="false"
                            aria-controls="collapsefive"
                          >
                            Is there a warranty on my item?
                            <i class="ti-plus"></i>
                            <i class="ti-minus"></i>
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapsefive"
                        class="collapse"
                        aria-labelledby="headingfive"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Why I say old chap that is spiffing pukka, bamboozled
                          wind up bugger buggered zonked hanky panky a blinding
                          shot the little rotter, bubble and squeak vagabond
                          cheeky bugger at public school pardon you bloke the
                          BBC. Tickety-boo Elizabeth plastered matie.!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <img
                class="service_tab_img"
                src="img/breadcrumb/service.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ_WITH_IMAGE;
