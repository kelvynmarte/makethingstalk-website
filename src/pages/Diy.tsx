import ImageSection from "../components/ImageSection";
import Navbar from "../components/Navbar";
import diyCoverImage from "../assets/diy-cover.jpg";
import requiredComponentsImage from "../assets/diy/required-components.jpg";
import { ContentSectionWrapper } from "../components/ContentSectionWrapper";
import { Section } from "../components/Section";

function Diy() {


	return (
		<>
			<Navbar/>
			<ImageSection imageUrl={diyCoverImage} text=""></ImageSection>
			<ContentSectionWrapper>
				<Section $contentWidth="narrow-content">
					<h1>Do It Yourself Kit</h1>
					<h4>Welcome to the Step-by-step guide to build your own make things talk media station. By the end of this tutorial you will have a nice little setup that allows you to trigger media files with RFID tagged objects as keys. Have fun!</h4>
					<p><em>Important: This DIY guide is still in BETA. There for sure are some things not perfectly clear yet. If you come across something: Get in touch! We gladly help out and update this guide accordingly. </em></p>
				</Section>
				<Section $contentWidth="breakout">
					<h3><b>Step 1:</b> Things used for this Project</h3>
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
					All components together excluding the tools should cost you less than <strong>150€</strong>.
					Further more you will have to download some suff:<ul data-rte-list="default">
						<li>the <strong>make things talk</strong> <strong>RaspberryPi</strong> <strong>image</strong> which includes the magic <strong>make things talk</strong> software</li>
						<li>the <a href="https://www.raspberrypi.org/downloads/"><strong>RaspberryPi Imager</strong></a><strong> </strong>to get the image to your Raspberry</li>
						<li>the<strong> </strong><a href="https://www.dropbox.com/s/bikcqazsculb38q/%20diy_kit_foamboard_template_004.pdf"><strong>PDF stencils</strong></a><strong> </strong>to build the casing</li>
					</ul>


				</Section>

			</ContentSectionWrapper>
		</>
	);
}

export default Diy;