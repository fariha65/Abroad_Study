import React from "react";
import BreadCrumps from "../components/BreadCrumps";

function About() {
    return(
        <div>

  
  {/* about breadcrumb */}
  <section className="w3l-breadcrumb">
    <div className="breadcrumb-bg breadcrumb-bg-about py-5">
      <div className="container pt-lg-5 pt-3 p-lg-4 pb-3">
        <h2 className="title mt-5 pt-lg-5 pt-sm-3">About us</h2>
        <ul className="breadcrumbs-custom-path pb-sm-5 pb-4 mt-2 text-center mb-5">
          <li><a href="index.html">Home</a></li>
          <li className="active"> / About us </li>
        </ul>
      </div>
    </div>
    <div className="waveWrapper waveAnimation">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none">
        <path d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none'}} />
      </svg>
    </div>
  </section>
 

  <section id="about" className="home-services pt-lg-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="box-wrap">
            <div className="box-wrap-grid">
              <div className="icon">
                <span className="fa fa-graduation-cap" />
              </div>
              <div className="info">
                <p>Our</p>
                <h4><a href="#url">Mission</a></h4>
              </div>
            </div>
            <p className="mt-4"> </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-md-0 mt-4">
          <div className="box-wrap">
            <div className="box-wrap-grid">
              <div className="icon">
                <span className="fa fa-book" />
              </div>
              <div className="info">
                <p>Our</p>
                <h4><a href="#url">vison</a></h4>
              </div>
            </div>
            <p className="mt-4"></p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-4">
          <div className="box-wrap">
            <div className="box-wrap-grid">
              <div className="icon">
                <span className="fa fa-trophy" />
              </div>
              <div className="info">
                <p>Our</p>
                <h4><a href="#url">Goal</a></h4>
              </div>
            </div>
            <p className="mt-4"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="w3l-aboutblock1 py-5" id="about">
    <div className="container py-lg-5 py-md-4 py-2">
      <div className="row">
        <div className="col-lg-6 align-self">
          <span className="title-small mb-2">About Us</span>
          <h3 className="title-big mx-0">Welcome to Abroad Study  , your trusted companion in exploring higher education opportunities abroad!</h3>
          <p className="mt-lg-4 mt-3">We understand that choosing the right program and university is a life-changing decision. Our platform is designed to simplify this process, offering personalized tools and resources to help students
             find the best-fit programs for their academic and career goals.</p>
          <p className="mt-3 mb-lg-5">At Abroad Study, we are passionate about empowering students to unlock global opportunities. Our curated database includes detailed information on universities, programs, tuition fees, admission requirements, and scholarships. Whether you dream of studying engineering, business, arts, 
            or any other field, we provide the insights you need to make informed decisions.</p>
        </div>
        <div className="col-lg-6 left-wthree-img mt-lg-0 mt-sm-5 mt-4">
          <img src="assets/images/ownPic.jpeg" alt className="img-fluid radius-image" />
        </div>
      </div>
    </div>
  </section>
 
  <section className="w3l-block py-5" id>
    <div className="container py-lg-5 py-md-3">
    <div className="row">
  <div className="col-lg-6 about-right-faq align-self">
    <span className="title-small mb-2">Why Choose Us?</span>
    <h3 className="title-big mx-0">Enhance your skills with the best universities</h3>
   <h6> <p className="mt-lg-4 mt-3 mb-lg-5 mb-4">
  <li>Comprehensive Search Tools: Compare programs, universities, and countries all in one place.</li>
  <li>Tailored Recommendations: Receive suggestions based on your preferences, budget, and academic profile.</li>
  <li>Expert Guidance: Our resources include articles, tips, and tools to navigate every step of the application process.</li>
  <li>Transparency: We provide clear and up-to-date information to help you make confident choices.</li>
</p></h6>

<div className="two-grids mt-md-0 mt-md-5 mt-4">
  <div className="grids_info">
    <h4>Our Mission</h4>
    <p>
    Our mission is to bridge the gap between ambitious students and top-tier international education opportunities. We aim to simplify the journey of studying abroad, ensuring a seamless, efficient, and stress-free experience for every student.
    </p>
  </div>
  <div className="grids_info">
    <h4>Join Us</h4>
    <p>
    Join Us

Be part of a growing community of students who trust us to turn their dreams of studying abroad into reality. Begin your journey toward a brighter future today!
    </p>
  </div>
</div>

  </div>
  <div className="col-lg-3 col-6 left-wthree-img mt-lg-0 mt-sm-5 mt-4">
    <img src="assets/images/ab1.jpeg" alt className="img-fluid radius-image" />
  </div>
  <div className="col-lg-3 col-6 left-wthree-img mt-lg-0 mt-sm-5 mt-4">
    <img src="assets/images/ab2.jpeg" alt className="img-fluid radius-image" />
  </div>
</div>

    </div>
  </section>

  
</div>




        
    )
    
}

export default About