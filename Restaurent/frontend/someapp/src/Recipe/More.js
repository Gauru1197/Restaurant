import React from "react";
import "./More.css";
import Nav from "./Nav";
import Footer from "./Footer";
const More = () => {
  return (
    <>
      <div className="hero1">
        <div className="text1" data-aos="fade-up">
          <h1>Food</h1>
          <p>
            <b>Choose what you like..</b>
          </p>
        </div>
      </div>
      <br />

      <div class="row inner-menu-box">
        <div class="col-3">
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link active"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#All"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              All
            </a>
            <a
              class="nav-link"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#Chinese"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Chinese
            </a>
            <a
              class="nav-link"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#Punjabi"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Punjabi
            </a>
            <a
              class="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#Non-Veg"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              Non-Veg
            </a>

            <a
              class="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#Sweets"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              Sweets
            </a>
          </div>
        </div>
      </div>
      <section id="All">
        <section id="Chinese" class="Chinese">
          <h3 className="p1 m-5" data-aos="fade-right">
            <b>Chinese Dishes</b>
          </h3>

          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-4 col-md-6">
                {/* first column */}
                <div className="card " data-aos="fade-up">
                  <img
                    src="https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Quick Noodles</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.2/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 6.7$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 4 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>

              {/* second column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://i.ndtvimg.com/i/2017-03/fish-tikka_725x483_51488522042.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Fish-Tikka</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.4/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 1.5$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 8 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>

              {/* 3rd column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://i.ndtvimg.com/i/2015-02/chilli-chicken_625x350_81424323578.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Szechwan Chilli Chicken</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.9/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 1.2$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 12 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          {/* second row */}
          <div className="container">
            <div className="row">
              {/* first column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://i.ndtvimg.com/i/2015-10/dimsum_625x350_51446202982.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Dim Sums</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.2/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 6.7$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 4 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              {/* second column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card ">
                  <img
                    src="https://i.ndtvimg.com/i/2016-06/soup-625_625x350_81466064298.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Hot and Sour Soup</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.4/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 1.5$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 8 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              {/* third column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://i.ndtvimg.com/i/2016-06/tofu-with-rice_625x350_81466070125.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">
                      {" "}
                      Stir Fried Tofu with Rice
                    </h5>
                    <p className="card-text">
                      {" "}
                      <b>4.9/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 1.2$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 12 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="Punjabi" id="Punjabi">
          <h3 className="p1 m-5" data-aos="fade-right">
            <b>Punjabi Menu</b>
          </h3>
          {/* third row */}
          <div className="container">
            <div className="row">
              {/* first column */}

              <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1631452180539-96aca7d48617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Punjabi Cuisine</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.2/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 6.7$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 4 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              {/* second column */}
              <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://i.ndtvimg.com/i/2015-01/625-chole-bhature_625x350_41420696838.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Chole Bhature</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.4/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 1.5$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 8 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              {/* thirs column */}
              <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://i.ndtvimg.com/i/2015-01/dal-makhni-625_625x350_61420697068.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Dal makhni</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.9/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 1.2$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 12 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br></br>
          <div className="container">
            <div className="row">
              {/* first column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://i.ndtvimg.com/i/2015-01/paneer-tikka-625_625x350_81420697374.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Panner-Tikka</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.2/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 6.7$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 4 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              {/* second column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card ">
                  <img
                    src="https://c.ndtvimg.com/2022-12/h0926k9o_paratha_625x300_18_December_22.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">PRANTHA </h5>
                    <p className="card-text">
                      {" "}
                      <b>4.4/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 1.5$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 8 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              {/* third column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1496662559123-ac291228fb6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Brown Rice</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.9/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 1.2$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 12 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="Non-Veg" id="Non-Veg">
          <h3 className="p1 m-5" data-aos="fade-right">
            <b>Non-VEg Menu</b>
          </h3>
          <div className="container">
            <div className="row">
              {/* first column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://i.ndtvimg.com/i/2015-12/grilled-chicken-625_625x350_71451368942.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">
                      Grilled Chicken with Fresh Salsa
                    </h5>
                    <p className="card-text">
                      {" "}
                      <b>4.2/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 6.7$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 4 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              {/* second column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card ">
                  <img
                    src="https://i.ndtvimg.com/i/2015-01/murgh-malai-625_625x350_51420697474.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Murgah Malaiwala</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.4/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 1.5$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 8 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              {/* third column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://i.ndtvimg.com/i/2015-03/badam-korma_625x350_41426244081.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Mutton Korma</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.9/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 1.2$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 12 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className="container">
            <div className="row">
              {/* first column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://i.ndtvimg.com/i/2016-06/lamb-chops_625x350_51466768845.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Tandoori Lamb Chops</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.2/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 6.7$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 4 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              {/* second column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card ">
                  <img
                    src="https://i.ndtvimg.com/i/2016-11/biryani-620_620x350_41478678907.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Malabar Fish Biryani</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.4/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 1.5$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 8 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              {/* third column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://i.ndtvimg.com/i/2017-01/samosa_620x350_81485494818.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">
                      Keema Samosa with Yoghurt Dip
                    </h5>
                    <p className="card-text">
                      {" "}
                      <b>4.9/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 1.2$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 12 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Sweets" class="Sweets">
          <h3 className="p1 m-5" data-aos="fade-right">
            <b>Sweets</b>
          </h3>
          <div className="container">
            <div className="row">
              {/* first column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://i.ndtvimg.com/i/2016-10/gulab-jamun_620x350_81477049812.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1"> Gulab Jamun</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.2/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 6.7$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 4 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              {/* second column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card ">
                  <img
                    src="https://i.ndtvimg.com/i/2017-10/gajar-ka-halwa-recipe_620x330_51507896671.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Gajar Ka Halwa</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.4/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 1.5$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 8 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              {/* third column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://i.ndtvimg.com/i/2016-03/kaju-barfi-625_625x350_81459346355.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Kaju ki Barfi</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.9/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 1.2$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 12 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className="container">
            <div className="row">
              {/* first column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://i.ndtvimg.com/i/2016-03/kulfi-625_625x350_81459346278.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1"> Kulfi</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.2/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 6.7$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 4 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              {/* second column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card ">
                  <img
                    src="https://c.ndtvimg.com/p9285dco_ghevar_625x300_10_August_18.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1">Malai Ghevar</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.4/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 1.5$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 8 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              {/* third column */}
              <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card">
                  <img
                    src="https://c.ndtvimg.com/2019-09/fufi21u_besan-ladoo_625x300_11_September_19.jpg"
                    className="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title p1"> Besan Ke Ladoo</h5>
                    <p className="card-text">
                      {" "}
                      <b>4.9/5</b>
                    </p>
                    <p className="p1">
                      <b>just in 1.2$</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 12 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br></br>
      </section>
      <Footer />
    </>
  );
};

export default More;
