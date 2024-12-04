import React from "react";
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import BreadCrumps from "../components/BreadCrumps";

function Universities() {
    return(
        <div>

<BreadCrumps page="Universities" title="All Universities" />
 

  <section className="w3l-courses">
    <div className="blog pb-5" id="courses">
      <div className="container py-lg-5 py-md-4 py-2">
        <div className="row">
          <div className="col-lg-6 col-md-8 item">
          <div className="card">
  <div className="card-header p-0 position-relative">
    <a href="#course-single" className="zoom d-block">
      <img className="card-img-bottom d-block" src="assets/images/ubc.jpg" alt="Card image cap" />
    </a>
  </div>
  
  <div className="card-body course-details">
    <div className="price-review d-flex justify-content-between mb-1 align-items-center">
      <p><h2>The University of British Columbia</h2></p>
      <ul className="compair-circle" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <li>
          {/* <a href="#circle-link" title="Circle">
            <span className="fa fa-circle-o" />
          </a> */}
        </li>
        <li>
          {/* <a href="#bookmark-link" title="Bookmark">
            <span className="fa fa-bookmark" />
          </a> */}
        </li>
      </ul>
    </div>
    
    <a href="#course-single" className="course-desc">
    The University of British Columbia is a global centre for teaching, learning and research, consistently ranked among the top public universities in the world.

UBC embraces innovation and transforms ideas into action. Since 1915, UBC has been opening doors of opportunity for people with the curiosity, drive and vision to shape a better world.
    </a>
    
    <div className="course-meta mt-4">
      <div className="meta-item course-lesson">
        <span className="fa fa-map-marker" />
        <span className="meta-value"> Vancouver </span>
      <p>Country: Canada <br/>
Province/State: British Columbia <br/>
City: Vancouver (Main Campus) and Kelowna (Okanagan Campus)</p>
      </div>
    </div>
  </div>
  
  <div className="card-footer">
    <div className="author align-items-center">
      <ul className="blog-meta">
        <li>
          <div className="form-group p-2">
                    <a href="/Program">
          <button
           className="btn btn-primary col-12 text-center"
           type="button"
           style={{
            padding: "5px 60px",
            //backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "7px",
            cursor: "pointer",
           }}
         >
            View programs 
         </button></a>
          </div>
        </li>
      </ul>
    </div>
  </div>
          </div>

          </div>
          <div className="col-lg-6 col-md-8 item mt-md-0 mt-5">
          <div className="card">
  <div className="card-header p-0 position-relative">
    <a href="#course-single" className="zoom d-block">
      <img className="card-img-bottom d-block" src="assets/images/manitoba.jpg" alt="Card image cap" />
    </a>
  </div>
  
  <div className="card-body course-details">
    <div className="price-review d-flex justify-content-between mb-1 align-items-center">
      <p><h3>The University of Manitoba</h3></p>
      <ul className="compair-circle" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <li>
          {/* <a href="#circle-link" title="Circle">
            <span className="fa fa-circle-o" />
          </a> */}
        </li>
        <li>
          {/* <a href="#bookmark-link" title="Bookmark">
            <span className="fa fa-bookmark" />
          </a> */}
        </li>
      </ul>
    </div>
    
    <a href="#course-single" className="course-desc">
    We are the university for Manitoba. We are one of the country’s top research universities and the largest source of skilled professionals in Manitoba. UM trains those who will build this province’s future. We are a world-class university and provide the most opportunities for post-secondary students in the province with our breadth of programs, co-op opportunities, research facilities and partnerships.
    </a>
    
    <div className="course-meta mt-4">
      <div className="meta-item course-lesson">
        <span className="fa fa-map-marker" />
        <span className="meta-value"> Winnipeg </span>
        <p>Country: Canada<br/>
Province/State: Manitoba<br/>
City: Winnipeg  </p>
      </div>
    </div>
  </div>
  
  <div className="card-footer">
    <div className="author align-items-center">
      <ul className="blog-meta">
        <li>
          <div className="form-group p-2">
          <a href="/Program">
          <button
           className="btn btn-primary col-12 text-center"
           type="button"
           style={{
            padding: "5px 60px",
            //backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "7px",
            cursor: "pointer",
           }}
         >
           View programs
         </button></a>
          </div>
        </li>
      </ul>
    </div>
  </div>
          </div>
          </div>
         
        </div>
        {/* pagination */}
        <div className="pagination-wrapper mt-5 pt-lg-3 text-center">
          <ul className="page-pagination">
            <li><a className="next" href="#url"><span className="fa fa-angle-left" /> Prev</a></li>
            <li><span aria-current="page" className="page-numbers current">1</span></li>
            <li><a className="page-numbers" href="#url">2</a></li>
            <li><a className="page-numbers" href="#url">3</a></li>
            <li><a className="page-numbers" href="#url">....</a></li>
            <li><a className="next" href="#url">Next <span className="fa fa-angle-right" /></a></li>
          </ul>
        </div>
        {/* //pagination */}
      </div>
    </div>
  </section>

</div>


        
    )
    
}

export default Universities;