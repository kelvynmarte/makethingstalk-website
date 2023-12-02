import ImageSection from "../components/ImageSection";
import Navbar from "../components/Navbar";
import diyCoverImage from "../assets/diy-cover.jpg";
import requiredComponentsImage from "../assets/diy/required-components.jpg";
import solderingImage from "../assets/diy/soldering.jpg";
import wiringDiagramImage from "../assets/diy/wiring-diagram.png";
import theBoxImage from "../assets/diy/the-box.jpeg";
import sdCardImage from "../assets/diy/sd-card.jpeg";
import uploadingImage from "../assets/diy/uploading.jpg";
import { ContentSectionWrapper } from "../components/ContentSectionWrapper";
import { Section } from "../components/Section";
import { IFrame } from "../components/IFrame";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";

function Diy() {


	return (
		<>
			<ScrollRestoration />
			<Navbar/>
			<ImageSection imageUrl={diyCoverImage} text=""></ImageSection>
			<ContentSectionWrapper>
				<Section $contentWidth="narrow-content">
					<h1>Do It Yourself Kit</h1>
					<h4>Welcome to the Step-by-step guide to build your own make things talk media station. By the end of this tutorial you will have a nice little setup that allows you to trigger media files with RFID tagged objects as keys. Have fun!</h4>
					<p><em>Important: This DIY guide is still in BETA. There for sure are some things not perfectly clear yet. If you come across something: Get in touch! We gladly help out and update this guide accordingly. </em></p>
				</Section>
				<Section $contentWidth="breakout">
					<h3 className="center"><b>Step 1:</b> Things used for this Project</h3>
					<img src={requiredComponentsImage} alt="" width="100%"/>
          Overview image of all the things needed for this project
				</Section>
				<Section $contentWidth="narrow-content">
    
					To build the functional kit, the following supplies are needed:
					<ul data-rte-list="default"><li>
						<strong>Raspberry Pi 4</strong> Model B with micro SD card, case, power supply, Micro-HDMI-Cable <a href="https://www.amazon.de/dp/B082PSBBMM">Link</a></li>
					<li>
						<strong>RFID Reader RC522 </strong><a href="https://www.amazon.de/dp/B00L6Z14T4/">Link</a></li>
					<li><strong>NFC Tag Sticker</strong> <a href="https://www.amazon.de/dp/B06XH2R5ZP/">Link</a></li>
					<li><strong>Jumper wire</strong> cable female to female <a href="https://www.amazon.de/dp/B07KYHBVR7/">Link</a></li>
					</ul>
					To build a case to enclose everything foam board is used:
					<ul>
						<li><strong>Foam board</strong> 5mm A3 <a href="https://www.amazon.de/dp/B06Y63N28Z/">Link</a></li>
					</ul>
					To complete your media station you need:
					<ul data-rte-list="default">
						<li>a <strong>display</strong> or <strong>speakers</strong> to connect to the Raspberry</li>
					</ul>
					The following tools are recommended:
					<ul data-rte-list="default">
						<li><strong>Soldering iron</strong> and <strong>solder</strong> to apply the connector on the RFID Reader RC522 </li>
						<li><strong>Cutter knife</strong>, <strong>mat and ruler</strong> to cut the foam board</li>
						
						<li><strong>hot glue gun</strong> to build the case</li>
						<li>A4 <strong>printer</strong> for casing stencils</li>
					</ul>
					To upload media files to your media station you will also need a computer, tablet or smartphone,
					All components together excluding the tools should cost you less than <strong>250€</strong>.
					Further more you will have to download some suff:<ul data-rte-list="default">
						<li>the <strong>make things talk</strong> <strong>RaspberryPi</strong> <strong>image</strong> which includes the magic <strong>make things talk</strong> software</li>
						<li>the <a href="https://www.raspberrypi.org/downloads/"><strong>RaspberryPi Imager</strong></a><strong> </strong>to get the image to your Raspberry</li>
						<li>the<strong> </strong><a href="https://www.dropbox.com/s/bikcqazsculb38q/%20diy_kit_foamboard_template_004.pdf"><strong>PDF stencils</strong></a><strong> </strong>to build the casing</li>
					</ul>
				</Section>
				<Section $contentWidth="breakout">
					<h3 className="center"><b>Step 2:</b> Soldering the RC522</h3>
					<img src={solderingImage} alt="" width="100%"/>
					Soldering a pin header to the RC522 RFID sensor

				</Section>
				<Section $contentWidth="narrow-content">
		
					<p>For this step you need: The <strong>soldering iron</strong>, <strong>solder</strong>, the <strong>RC522</strong> sensor, a <strong>8 pin header</strong> (usually shipped together with the sensor) and <strong>safety goggles</strong>.</p>
					<p>Usually the RC522 is shipped with the pins not soldered to the sensor yet. But don’t be afraid. It is pretty simple and if you never did it before quite fun to learn, too. If you don’t own a soldering iron yourself you for sure know somebody who can help you out and also can explain the basics of soldering to you. The procedure itself shouldn’t take more than five minutes.  </p>
					<p>Whenever you are soldering you should take care of two things though: Wear safety goggles and make sure there is good ventilation.</p>
					<p>If you need some advice on soldering the sensor, watch this very useful video <a href="https://youtu.be/FTYDSCUUDSQ">youtu.be/FTYDSCUUDSQ</a>.</p>



				</Section>
				<Section $contentWidth="breakout">
					<h3 className="center"><b>Step 3:</b> Wiring RFID sensor and RaspberryPi</h3>
					<img src={wiringDiagramImage} alt="" width="100%"/>
					Looks complicated but is actually quite simple: Wiring the RFID sensor and the RaspberryPi
				</Section>
				<Section $contentWidth="narrow-content">
					<p>For this step you need: The <strong>RaspberryPi</strong>, the ready soldered <strong>RC522</strong> and 7  female to female <strong>jumper wire cables.</strong></p>
					<p>Cryptical circuit boards combined with colourful wires always look a bit like a bomb defusing scenario. But actually this step is quite straight forward and theres is nothing you can break or make explode. </p>
					<p>Just use your <strong>female to female jumper wire cables</strong> and connect the pins of the GPIO port on your Raspberry with the pins on the RFID RC522 sensor in the exact same way as shown in the above diagram.</p>
					<p>The only precaution needed: <strong>Do it with your Raspberry turned off</strong>.</p>
					<p>For a more in depth description of this step have a look at this very detailed tutorial <a href="https://pimylifeup.com/raspberry-pi-rfid-rc522/">https://pimylifeup.com</a></p>

				</Section>

				<Section $contentWidth="breakout">
					<h3 className="center"><b>Step 4:</b> The Box</h3>
					<img src={theBoxImage} alt="" width="100%"/>
				</Section>
				<Section $contentWidth="narrow-content">
					<p>For this step you need: the <strong>foam board</strong>, a <strong>cutter knife</strong> and <strong>mat</strong>, a <strong>ruler</strong>, the printed A4 <strong>stencils</strong> and a <strong>glue gun</strong>.</p>
					<p>We created some nice print out stencils for you. Just download the <a href="https://www.dropbox.com/s/bikcqazsculb38q/%20diy_kit_foamboard_template_004.pdf">PDF</a> and print them on A4 paper. This will help you to cut out all the parts needed for the casing out of  5mm foam board. No complicated measuring and marking required. The stencils also include detailed instructions on how to put everything together.</p>
				</Section>
				<Section $contentWidth="breakout">
					<h3 className="center"><b>Step 5:</b> Setting up the RaspberryPi</h3>
					<img src={sdCardImage} alt="" width="100%"/>
				</Section>
				<Section $contentWidth="narrow-content">

					<p>For this step you need: a<strong> Micro-SD-Card,</strong> a <strong>computer</strong> with a Micro SD-Card reader (or an <a href="https://www.amazon.de/SanDisk-Micro-SD-Adapter-auf-SD/dp/B001PFAF9U">adapter</a> for normal sized SD-cards), the <a href="make things talk RaspberryPi image"><strong>make things talk</strong> <strong>RaspberryPi image</strong></a> and the <a href="https://www.raspberrypi.org/downloads/"><strong>RaspberryPi Imager</strong></a> software.</p>
					<p>In order to copy the make things talk RaspberryPi image which is basically a ready to use setup operation system for your Raspberry just follow these steps (from the official RaspberryPi <a href="https://www.raspberrypi.org/documentation/installation/installing-images/">website</a>):</p>
					<ul data-rte-list="default"><li><p>Download the latest version of&nbsp;Raspberry Pi Imager&nbsp;and install it on your computer</p>
					</li><li><p>Connect an SD card reader with the SD card inside</p>
					</li><li><p>Open Raspberry Pi Imager and choose the <strong>make things talk</strong> <strong>RaspberryPi image</strong> which you downloaded before from your file system</p>
					</li><li><p>Choose the SD card you wish to write your image to.</p>
					</li><li><p>Review your selections and click 'WRITE' to begin writing data to the SD card.</p>
					</li></ul><p>Done! It might look a bit complicated if you never did something like this before, but if you simply follow all the steps described above you got yourself a perfectly setup system. And we promise: From there on you don’t have do worry about installing and configuring any kind of software anymore.</p>


				</Section>
				<Section $contentWidth="breakout">
					<h3 className="center"><b>Step 6:</b> Put everything together</h3>
					<IFrame src="https://player.vimeo.com/video/411374160?app_id=122963&wmode=opaque" allow="autoplay; fullscreen" title="make things talk – Showcases" id="yui_3_17_2_1_1700397905857_414"></IFrame>

				</Section>
				<Section $contentWidth="narrow-content">
					<div>
						<p>For this step you need: the <strong>RaspberryPi </strong>in its default casing<strong> </strong>with the <strong>RC 522</strong> connected, the put together foam board <strong>casing</strong>, the <strong>Micro-SD-card</strong> with the <strong>make things talk</strong> <strong>image</strong> installed, the <strong>power supply</strong> for the Raspberry, a <strong>display</strong> to connect to your Raspberry plus and the <strong>Micro-HDMI cable</strong>. </p>
						<ul>
							<li><p>put the Micro-SD card into the Raspberry</p></li>
							<li><p>put the Raspberry and the connected RC 522 sensor into the foam board casing</p></li>
							<li><p>connect the display to the Raspberry</p></li>
							<li><p>power both the Raspberry and the display</p></li>
						</ul>
						<p>As soon as the Raspberry is connected to power it automatically boots up. But be aware: It requires a couple of seconds until it is fully operational. </p>
						<p>Congratulations! Your media station is now up and running. Now you are ready to add some awesome content.</p>
					</div>


				</Section>
				<Section $contentWidth="breakout">
					<h3 className="center"><b>Step 7:</b> Uploading Content</h3>
					<img src={uploadingImage} alt="" width="100%"/>
				</Section>
				<Section $contentWidth="narrow-content">
					<div>
						<p>For this step you need: the finished <strong>make things talk</strong> <strong>box </strong>connected to a <strong>display</strong> up and running. Several <strong>RFID tags</strong>. A <strong>computer</strong> with WIFI and some <strong>mp4 video files </strong>you would like to upload to your box.</p>
						<ul>
							<li><p>on your computer go to the WIFI settings and connect to the WIFI with the name <strong>makethingstalk-WIFI</strong></p></li>
							<li><p>open a <strong>web browser</strong> of your choice </p></li>
							<li><p>type in <strong>makethingstalk.local</strong></p></li>
						</ul>
						<p>You now see the interface that lets you link media files with RFID tags. In order to do that just follow the instructions on the screen:</p>
						<ul>
							<li><p>place a <strong>RFID tag</strong> on the make things talk <strong>box</strong></p></li>
							<li><p>click to open the <strong>select file dialog</strong> </p></li>
							<li><p>select a <strong>mp4</strong> <strong>video</strong> of your liking</p></li>
							<li><p>click <strong>ok</strong></p></li>
							<li><p><strong>wait</strong> for the file to be uploaded (might take several seconds)</p></li>
							<li><p><strong>done!</strong></p></li>
						</ul>
					</div>
				</Section>
				<Section $contentWidth="narrow-content">
					<div>
						<IFrame src="https://player.vimeo.com/video/419540190?app_id=122963&wmode=opaque" allow="autoplay; fullscreen" title="make things talk – Showcases" id="yui_3_17_2_1_1700397905857_414"></IFrame>
						<p>Congratulations! You just successfully linked your first video. Now whenever you put the same RFID tag onto the box the linked video will be replayed. </p>
						<hr />

						<p>Now it is up to you! Research or create interesting content, stick RFID tags to objects of all kinds, link objects and digital content, build your own media stations!</p>
						<p>If you made it through this tutorial, we would be more than happy to hear your <a href="mailto:hello@makethingstalk.io">feedback</a>. Just shoot us an email or maybe we could even have a little chat together? We would appreciate it very much!</p>
						<p className="center">Thanks and happy hacking!</p>
						<hr />
						<p className="center">Your <b>make things talk</b> team</p>
					</div>
				</Section>
				<Section $contentWidth="content">

					<h3 className="margin-right-25">Du bist daran interessiert eine <b>make things talk</b> Box im Rahmen einer Ausstellung einzusetzen?</h3>

				</Section>
				<Section $contentWidth="narrow-content">
					<p>Wir würden uns freuen, mit dir ein wenig über Ideen und Möglichkeiten zu plaudern. Melde dich bei uns! &nbsp;<a href="info@makethingstalk.io﻿"><strong>info@makethingstalk.io</strong></a></p>
				</Section>
			</ContentSectionWrapper>
			<Footer></Footer>
		</>
	);
}

export default Diy;