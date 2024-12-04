import React , {useContext } from "react";
import {  UserContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Home() {

  // Get context value
  const  [state,setState] = useContext(UserContext);
  const navigate = useNavigate();
  // Function to handle the Ranking button
  const handleRankingClick = () => {
    const isAuthenticated = localStorage.getItem("authToken");
    if (isAuthenticated) {
      navigate("/ranking");
      
    } else {
      navigate("/login"); // Redirect to login if not authenticated
    }
  };

  // const handleDiscoverClick = () => {
  //   const isAuthenticated = localStorage.getItem("authToken");
  //   if (isAuthenticated) {
  //     navigate("/About");
      
  //   } else {
  //     navigate("/login"); // Redirect to login if not authenticated
  //   }
  // };



    return(
        <div>

<div>
  {/* main-slider */}
  <section className="w3l-main-slider" id="home">
    <div className="companies20-content">
      <div className="owl-one owl-carousel owl-theme">
        <div className="item">
          <li>
            <div className="slider-info banner-view bg bg2">
              <div className="banner-info">
                <div className="container">
                  <div className="banner-info-bg">
                    <h5>Find the perfect program.
                    We match you with universities </h5>
                    <p className="mt-4 pr-lg-4"> that fit your interests, budget, and goals.
                    </p>
                    <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="/SearchDetails"> Ready
                      to
                      get started?</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>
        <div className="item">
          <li>
            <div className="slider-info  banner-view banner-top1 bg bg2">
              <div className="banner-info">
                <div className="container">
                  <div className="banner-info-bg">
                    <h5>One's destination is never a place, but a new way of seeing things. </h5>
                    <p className="mt-4 pr-lg-4"> Let us help you start your study abroad journey</p>
                    <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="/SearchDetails"> Ready
                      to
                      get started?</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>
        <div className="item">
          <li>
            <div className="slider-info banner-view banner-top2 bg bg2">
              <div className="banner-info">
                <div className="container">
                  <div className="banner-info-bg">
                    <h5>Be More Productive to Be More Successful</h5>
                    <p className="mt-4 pr-lg-4">Don't waste your time.
                    </p>
                    <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="/SearchDetails"> Ready
                      to
                      get started?</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>
        <div className="item">
          <li>
            <div className="slider-info banner-view banner-top3 bg bg2">
              <div className="banner-info">
                <div className="container">
                  <div className="banner-info-bg">
                    <h5>Your Future, Your Way</h5>
                    <p className="mt-4 pr-lg-4">Take the first step to your journey to success with us
                    </p>
                    <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="/SearchDetails"> Ready
                      to
                      get started?</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
    <div className="waveWrapper waveAnimation">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none">
        <path d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none'}} />
      </svg>
    </div>
  </section>
  {/* /main-slider */}
  <section className="w3l-courses">
    <div className="blog pb-5" id="courses">
      <div className="container py-lg-5 py-md-4 py-2">
        <h5 
        className="title-small text-center mb-1"
        >
          find your prefarable
          </h5>
        <h3 
        className="title-big text-center mb-sm-5 mb-4"
        >
          <span>
          World Universities
            </span>
            </h3>
        <div 
        className="row">
          <div 
          className="col-lg-6 col-md-6 item">
            <div 
            className="card">
              <div 
              className="card-header p-0 position-relative">
                <a
                 href="/Universities" 
                 className="zoom d-block w-full h-48 object-cover">
                  <img className="card-img-bottom d-block" 
                  src="assets/images/ubc.jpg" 
                  alt="Card image cap" />
                </a>
                
              </div>
              <div className="card-body course-details">
                <div className="price-review d-flex justify-content-between mb-1align-items-center">
                
                </div>
                <a href="/Universities"
                 className="course-desc"
                 >University of British Columbia
        </a>
                
              </div>
              <div className="card-footer">
              
                <a href="/Universities">
                 <button
           type="button"
           style={{
            padding: "10px 20px",
            backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
           }}
         >
           View University
         </button></a>
              </div>
            </div>
          </div> 
          <div 
          className="col-lg-6 col-md-6 item mt-md-0 mt-5"
          >

            <div 
            className="card">
              <div 
              className="card-header p-0 position-relative">
                <a 
                href="/Universities"
                 className="zoom d-block">
                  <img 
                  className="card-img-bottom d-block" 
                  src="assets/images/manitoba.jpg"
                   alt="Card image cap" />
                </a>
               
              </div>
              <div className="card-body course-details">
                
                <a 
                href="/Universities"
                 className="course-desc">
                  University of Manitoba </a>
                <div className="course-meta mt-4">
                
                </div>
              </div>
              <div 
              className="card-footer">
          <a href="/Universities">
          <button
           type="button"
           style={{
            padding: "10px 20px",
            backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
           }}
         >
           View University
         </button></a>
              </div>
              
            </div>
          </div>
          <div 
          className="col-lg-6 col-md-6 item mt-lg-0 mt-5">
           
          </div>
        </div>
        <div className="mt-5 text-more">
          <p className="pt-md-3 sample text-center">
            Control your personal preference settings to get notified about appropriate courses
            <a href="/Universities">View All Universities <span className="pl-2 fa fa-long-arrow-right" /></a>
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="w3l-features py-5" id="facilities">
    <div className="call-w3 py-lg-5 py-md-4 py-2">
      <div className="container">
        <div className="row main-cont-wthree-2">
          <div className="col-lg-5 feature-grid-left">
            <h5 className="title-small mb-1">Study and graduate</h5>
            <h3 className="title-big mb-4">About Facilities </h3>
            <p className="text-para">To make it easy for students to find, apply and get admitted to 
              the right program at their perfect university abroad..Make applying for university abroad simple by ensuring students have all the information,
               resources and guidance they need to easily find. </p>
            
            <a  href = "/About"
             className="btn btn-primary btn-style mt-md-5 mt-4">Discover More
             </a>
          </div>
          <div
           className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
            <div 
            className="call-grids-w3 d-grid">
              <div 
              className="grids-1 box-wrap">
                <a 
                href="#more"
                 className="icon">
                  <span className="fa fa-certificate" />
                  </a>
                <h4>
                  <a href="#feature" 
                  className="title-head">
                   Ranking
                    </a>
                    </h4>
                <p>Discover the world's best universities</p>
              </div>
              <div
               className="grids-1 box-wrap">
                <a
                 href="#more" 
                 className="icon">
                  <span
                   className="fa fa-circle" />
                   </a>
                <h4>
                  <a 
                href="#feature" 
                className="title-head">
                  Compair</a></h4>
                <p>Compare universities around the world with our interactive university.</p>
              </div>
              <div 
              className="grids-1 box-wrap">
                <a href="#more"
                 className="icon">
                  <span className="fa fa-bookmark" />
                  </a>
                <h4>
                  <a href="#feature"
                   className="title-head">
                    Bookmark
                    </a>
                    </h4>
                <p>Allow the reader to easily return to where the previous reading session ended.</p>
              </div>
              <div 
              className="grids-1 box-wrap">
                <a
                 href="#more"
                  className="icon">
                    <span 
                    className="fa fa-book" /></a>
                <h4>
                  <a
                   href="#feature"
                    className="title-head">
                      Suggestion
                      </a></h4>
                <p>A carefully Create profile . we wil help to search your prefarable university.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="w3l-homeblock3 py-5">
    <div className="container py-lg-5 py-md-4 py-2">
      <h5 className="title-small text-center mb-1">From the suggetion</h5>
      <h3 className="title-big text-center mb-sm-5 mb-4"><span>Many Programs</span></h3>
 
      <div className="mt-md-5 mt-4 text-more text-center">
        <a href="/Program">View All Programs <span className="pl-2 fa fa-long-arrow-right" /></a>
      </div>
    </div>
  </div>
  
  <div className="middle py-5">
    <div className="container py-lg-5 py-md-4 py-2">
      <div className="welcome-left text-center py-lg-4">
        <h5 className="title-small mb-1">
          Start searching 
          </h5>
        <h3 
        className="title-big">
          Enhance your skills with choose best University
          </h3>
          <button
              onClick={handleRankingClick} // Call the handler on click
              className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2"
            >
              Ranking
            </button>
        <a href="/Contact" 
        className="btn btn-style btn-primary mt-sm-5 mt-4">
          Contact Us</a>
      </div>
    </div>
  </div>
 


</div>



        </div>
    )
    
}

export default Home 