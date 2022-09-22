import React from 'react';
import './Games.css'
function Games(){

	const btnDownload=()=>{
		alert("Download SuccessFully")
	}
	return(

<div className="container-fluid bg-color_games margin-padding_about ">
		<br /><br /><br /><br /><br /><br />

<div className="container text-white">
<div id="wrapper">
<h1 className="games_heading">Latest News</h1>
<br />
</div>
	<div className="row">
		<div className="col-md-4">
			<img src="assets/news1.jpg" className="img-fluid" alt="..."  />
		</div>
		<div className="col-md-1"></div>
		<div className="col-md-7">
			<h2>BATTLE GROUND MOBILE INDIA</h2><br />
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit voluptas nam sit, eligendi distinctio necessitatibus assumenda possimus dolorum vel quas explicabo cumque debitis suscipit numquam maxime quos ipsum soluta delectus!</p><br />
			<button type="button" className="btn btn-warning games_button" onClick={btnDownload}>Download</button>
		</div>
	</div>
<br />
	<div className="row">
		<div className="col-md-4">
			<img src="assets/im2.png" className="img-fluid" alt="..."  />
		</div>
		<div className="col-md-1"></div>
		<div className="col-md-7">
			<h2>DAYS GONE</h2><br />
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit voluptas nam sit, eligendi distinctio necessitatibus assumenda possimus dolorum vel quas explicabo cumque debitis suscipit numquam maxime quos ipsum soluta delectus!</p><br />
			<button type="button" className="btn btn-warning games_button" onClick={btnDownload}>Download</button>
		</div>
	</div>
<br />
	<div className="row">
		<div className="col-md-4">
			<img src="assets/img3.jfif" className="img-fluid" alt="..."  />
		</div>
		<div className="col-md-1"></div>
		<div className="col-md-7">
			<h2>BATTLE GROUND MOBILE INDIA</h2><br />
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit voluptas nam sit, eligendi distinctio necessitatibus assumenda possimus dolorum vel quas explicabo cumque debitis suscipit numquam maxime quos ipsum soluta delectus!</p><br />
			<button type="button" className="btn btn-warning games_button" onClick={btnDownload}>Download</button>
		</div>
	</div>
</div>
<br />


<br /><br />
</div>




		)
}
export default Games;