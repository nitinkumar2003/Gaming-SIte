import React from 'react';
import './Services.css'
function Services(){
	return(
<div>
<div className="parent">
<br /><br /><br /><br />
   <div className="textcolor">
   	<h1 className="services_heading">Featured Service</h1>
   	<p className="services_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iusto quae laboriosam asperiores<br />
magnam cumque, cupiditate facere necessitatibus neque facilis! Dignissimos hic<br />
quam consectetur doloremque.</p>
   </div>
</div>
<div className="container-fluid bg-warning">
<br />
<h1 className="games_heading">Let's Explore Services</h1>
<h1 className="services_explore">Deal's in Ps5</h1>
<p className="services_explore1">The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020, in Australia, Japan, New Zealand, North America, and South Korea, with worldwide release following a week later. The PS5 is part of the ninth generation of video game consoles, along with Microsoft's Xbox Series X and Series S consoles, which were released in the same month.</p>
<img src="assets/explore1.jpeg" className="rounded mx-auto  w-50 d-block" alt="..." />

<br /><br />

<h1 className="text-center">Game Hub</h1>
<p className="text-center game_hub">Games have hubs on PS5. Each game’s hub collects everything related to that game together,
from activities, to community broadcasts, to new game content. It’s a constantly updated
space that will evolve and adapt throughout the game’s lifecycle.
</p>
<br />
</div>


<div className="container-fluid ">
<br /><br />
	<div className="row">
		<div className="col-md-6">
			<img src="assets/services2.jpeg" className="img-fluid services_services1234_border"  alt="..." />
		</div>
		<div className="col-md-6">
			<h1 className="services_services1234_h">Accolades</h1>
<p className="services_services1234_p">
Players can now give other players positive accolades to encourage or congratulate
other contenders on a multiplayer match well played1. The accolades you've received
will be displayed in your profile.</p>
		</div>
	</div>
	<div className="row">
		<div className="col-md-6">
			<h1 className="services_services1234_h">Challenges</h1>
<p  className="services_services1234_p">
Take on special in-game challenges in supported PS5 games, and share your results with friends on PS5 to see if they can do better. If your friend beats your high score or time, you will get notified and get a chance to beat them right back.</p>
		</div>
		<div className="col-md-6">
		<img src="assets/services3.jpeg" className="img-fluid services_services1234_border" alt="..." />
		</div>
	</div>
<div className="row">
		<div className="col-md-6">
			<img src="assets/services4.png" className="img-fluid services_services1234_border" alt="..." />
		</div>
		<div className="col-md-6">
			<h1 className="services_services4 services_services1234_h">Cross-generation chat with PS5™</h1>
<p className="services_services1234_p">
Whether your friends are on PS4 or PS5, cross-generation voice chat means everyone can keep
the conversation going with their account for PlayStation™Network. You can even chat with players
on mobile devices who have PlayStation App.</p>
		</div>
	</div>

	<br /><br />
</div>	
</div>



		)
}
export default Services;