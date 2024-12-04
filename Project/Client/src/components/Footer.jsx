import React from "react";

function Footer() {
    return(
        <div>

          {/* footer */}
  <section className="w3l-footer-29-main">
    <div className="footer-29 py-5">
      <div className="container py-md-4">
        <div className="row footer-top-29">
          <div className="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5">
            <h6 className="footer-title-29">Contact Info </h6>
            <p>Address :51 Siddheswari Rd, Dhaka 1217
            Stamford University Bangladesh</p>
            <p className="my-2">Phone : <a href="tel:+1(21) 234 4567">015467896</a></p>
            <p>Email : <a href="mailto:info@example.com">tfariha@gmail.com</a></p>
            <div className="main-social-footer-29 mt-4">
              <a href="https://www.facebook.com/stamfordedubd" className="facebook"><span className="fa fa-facebook" /></a>
              <a href="https://x.com/" className="twitter"><span className="fa fa-twitter" /></a>
              <a href="https://www.instagram.com/" className="instagram"><span className="fa fa-instagram" /></a>
              <a href="https://www.linkedin.com/feed/" className="linkedin"><span className="fa fa-linkedin" /></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-sm-0 mt-5">
            <ul>
              <h6 className="footer-title-29">Consulting</h6>
              <li><a href="about.html"> Fariha Afrin Tamanna </a></li>
              <li><a href="#blog"> </a></li>
              <li><a href="#teacher"> Became a owner </a></li>
              <li><a href="courses.html">Abroad Study Website</a></li>
              <li><a href="contact.html"> </a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-3 mt-lg-0 mt-5">
            <h6 className="footer-title-29"></h6>
            <ul>
              <li><a href="#traning"></a></li>
              <li><a href="#documentation"></a></li>
              <li><a href="#release"></a></li>
              <li><a href="#customers"> </a></li>
              <li><a href="#helpcenter"> </a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5">
            <h6 className="footer-title-29"></h6>
            {/* <a href="#playstore"><img src="assets/images/googleplay.png" className="img-responsive" alt /></a>
            <a href="#appstore"><img src="assets/images/appstore.png" className="img-responsive mt-3" alt /></a> */}
          </div>
        </div>
      </div>
    </div>
    {/* copyright */}
    <section className="w3l-copyright text-center">
      {/* <div className="container">
        <p className="copy-footer-29"> <a href="https://w3layouts.com/" target="_blank">
           </a></p>
      </div> */}
      {/* move top */}
      <button onclick="topFunction()" id="movetop" title="Go to top">
        ⤴
      </button>
      {/* /move top */}
    </section>
    {/* //copyright */}
  </section>
  {/* //footer */}

        </div>
    )
    
}
export default Footer