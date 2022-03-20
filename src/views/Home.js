import React, { useState } from "react";

import CARD_WITH_CENTER from "../components/CARD_WITH_CENTER";
import FAQ_WITH_IMAGE from "../components/FAQ_WITH_IMAGE";

import Featured from "../components/Featured";
import CloudConnectPoint from "../components/CloudConnectPoint";

function Home(props) {
  const [cardCount, setCardCount] = [1, 2, 3];

  return (
    <div>
      <section className="breadcrumb_area">
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
      </section>

      <section>
        <h2 class="f_600 f_size_30 t_color3 text-center l_height40 mb_70">
          Rapidly provision one to thousands of
          <br />
          Droplets in seconds
        </h2>
      </section>

      {/* Cards section */}
      <section>
        <div class="row software_featured_info">
          <div class="col-lg-4 col-sm-6">
            {" "}
            <CARD_WITH_CENTER></CARD_WITH_CENTER>
          </div>
          <div class="col-lg-4 col-sm-6">
            {" "}
            <CARD_WITH_CENTER></CARD_WITH_CENTER>
          </div>
          <div class="col-lg-4 col-sm-6">
            {" "}
            <CARD_WITH_CENTER></CARD_WITH_CENTER>
          </div>
          <div class="col-lg-4 col-sm-6">
            {" "}
            <CARD_WITH_CENTER></CARD_WITH_CENTER>
          </div>
          <div class="col-lg-4 col-sm-6">
            {" "}
            <CARD_WITH_CENTER></CARD_WITH_CENTER>
          </div>
          <div class="col-lg-4 col-sm-6">
            {" "}
            <CARD_WITH_CENTER></CARD_WITH_CENTER>
          </div>
        </div>
      </section>
      <br></br>

      {/* FAQ AND IMAGE SECTION */}
      <section>
        <FAQ_WITH_IMAGE></FAQ_WITH_IMAGE>
      </section>

      {/* Featured section */}

      <section>
        <Featured></Featured>
      </section>

      <br></br>
      <br></br>
      <section>
        <CloudConnectPoint></CloudConnectPoint>
      </section>
    </div>
  );
}

export default Home;
