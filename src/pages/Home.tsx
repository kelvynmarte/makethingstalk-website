import ImageSection from "../components/ImageSection";
import Navbar from "../components/Navbar";
import productImage from '../assets/home-cover.jpg';
import configureImage from '../assets/home/configure.jpeg';
import { Section } from "../components/Section";
import { ContentSectionWrapper } from "../components/ContentSectionWrapper";
import { IFrame } from "../components/IFrame";
import Footer from "../components/Footer";
function Home() {


	return (
		<>
			<Navbar/>
			<ImageSection imageUrl={productImage} text="Digitale Geschichten erzählen mit RFID-Technologie – jenseits von Tablets, Terminals und Touchscreens."></ImageSection>
			<ContentSectionWrapper>
				<Section $contentWidth="narrow-content">
					<h2>Platziert man ein physisches Objekt auf der <b>make things talk</b> Box, startet ein damit verknüpftes Video oder eine Tonaufnahme.</h2>
				</Section>
				<Section>
					{/* video */}
					<IFrame src="https://player.vimeo.com/video/437442074?app_id=122963&amp;wmode=opaque" allow="autoplay; fullscreen" title="make things talk – Showcases" id="yui_3_17_2_1_1700397905857_414"></IFrame>
				</Section>
				<Section $contentWidth="narrow-content">
					<p><b>make things talk</b> eignet sich hervorragend um in Museen und Ausstellungen digitale Inhalte auf leicht zugängliche Art und Weise zu vermitteln.</p>
					<p>Statt der Auseinandersetzung mit einem Interface stellt <b>make things talk</b> die Auseinandersetzung mit physischen Objekten in den Vordergrund.</p>
				</Section>
				<ImageSection imageUrl={configureImage}></ImageSection>
				<Section $contentWidth="content">
					<h2>Die <b>make things talk</b> Box ist Plug&Play durch und durch: Einfach einen Bildschirm oder Lautsprecher anschließen und es kann losgehen.</h2>
				</Section>
				<Section $contentWidth="narrow-content">
					<IFrame src="https://player.vimeo.com/video/437458048?app_id=122963&amp;wmode=opaque" allow="autoplay; fullscreen" title="make things talk – Administration" id="yui_3_17_2_1_1700397905857_454"></IFrame>
				</Section>
				<Section $contentWidth="narrow-content">
					<p>Das Verlinken von Objekten und Videos geht kinderleicht. Einfach über den eigenen Computer mit dem <b>make things talk</b> WIFI-Hotspot verbinden, Browser öffnen, Tag auf die Box legen und per Drag&Drop ein Video- oder Audio-File zuweisen.</p>
					<p>Mit <b>make things talk</b> lassen sich Medien-Stationen im Handumdrehen selbst erstellen. Ganz ohne technische Vorkenntnisse.</p>
				</Section>
				<Section $contentWidth="content">
					<h2>Du bist daran interessiert eine <b>make things talk Box</b> im Rahmen einer Ausstellung einzusetzen?</h2>
				</Section>
				<Section $contentWidth="narrow-content">
					<p>Wir würden uns freuen, mit dir ein wenig über Ideen und Möglichkeiten zu plaudern. Melde dich bei uns!<br />  <a href="mailto:info@makethingstalk.io">info@makethingstalk.io</a></p>
				</Section>
			</ContentSectionWrapper>
			<Footer></Footer>
		</>
	);
}

export default Home;
