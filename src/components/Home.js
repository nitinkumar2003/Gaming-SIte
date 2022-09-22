import React from 'react';
import {Link} from 'react-router-dom';
function Home(){
    return(
        <div>
        <div className="bg-dark">
<div className="container bg-dark  col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-12 col-sm-12 col-lg-7">
        <video src="assets/video.mp4"  muted loop autoPlay className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="100%" height="100%" loading="lazy" />
      </div>
      <div className="col-lg-5 ">
        <h4 className="display-5 fw-bold lh-1 mb-3 NavVideo_h_color">
NEVER STOP
PLAYING GAMES</h4>
        <p className="lead NavVideo_p_color">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p><p className="lead NavVideo_p_color">
Commodi quasi sed recusandae quod culpa fugit ipsa,
fugiat debitis sint minima.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2"><Link className="btn-primary" to="/games">Explore</Link></button>
          
        </div>
      </div>
    </div>
  </div>
  </div>


<div className="bg-success">
<h2 className="NavVideo_h_color_news">LATEST NEWS</h2>
    <div className="container text-white">
    <div className="row">
    <div className="col-md-4">
      <img src="assets/news1.jpg" className="img-fluid" alt="..." />
       <h4>PUBG LATEST UPDATE</h4>
      <p>The 1.6.0 Update is coming this September! Here's a preview
for the update, don't miss out on all the fun and action!

view updates</p>
    </div>
    <div className="col-md-4">
      <img src="assets/im2.png" className="img-fluid" alt="..." />
      <h4>DAYS GONE</h4>
      <p>From forests and meadows, to snowy plains and desert
lava fields, the Pacific Northwest is both beautiful and lethal.
Explore a variety of mountains, caves, mines and small rural towns, scarred by millions of years of volcanic activity.

view updates</p>
    </div>
    <div className="col-md-4">
      <img src="assets/img3.jfif" className="img-fluid" alt="..." />
      <h4>GOD OF WAR</h4>
      <p>Relive the adventure of Kratos and Atreus in God of War's
New Game Plus (NG+) mode.

view updates</p>
     
    </div>
      
    </div>

      </div>
    </div>
  





</div>



        )
}
export default Home;