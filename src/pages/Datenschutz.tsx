import { Section } from "../components/Section";
import { ContentSectionWrapper } from "../components/ContentSectionWrapper";
import styled from "styled-components";
import { useNavigate, ScrollRestoration } from "react-router-dom";


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  grid-column: narrow-content;
  background-color: var(--background-color);

  padding: 1rem 0;
  border-bottom: 1px solid var(--text-color);

  h3 {
    margin: 0;
  }
`;

const BackButton = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;



export function Datenschutz() {
	const navigate = useNavigate();

	return (
		<>
			<ScrollRestoration />
			<ContentSectionWrapper className="small-margin small-gap">
				<HeaderContainer>
					<h3>Datenschutzerklärung</h3>
					<BackButton onClick={() => navigate(-1)}>
						<svg xmlns="http://www.w3.org/2000/svg" id="mdi-close" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
					</BackButton>
				</HeaderContainer>
				<Section $contentWidth="narrow-content">
					<p>Personenbezogene Daten (nachfolgend
        zumeist nur „Daten“ genannt) werden von uns nur im Rahmen der Erforderlichkeit
        sowie zum Zwecke der Bereitstellung eines funktionsfähigen und
        nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort
        angebotenen Leistungen, verarbeitet.</p>
					<p>Gemäß Art. 4 Ziffer 1. der Verordnung
        (EU) 2016/679, also der Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“
        genannt), gilt als „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter
        Verfahren ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang
        mit personenbezogenen Daten, wie das Erheben, das Erfassen, die Organisation,
        das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das
        Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder
        eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die
        Einschränkung, das Löschen oder die Vernichtung.</p>
					<p>Mit der nachfolgenden
        Datenschutzerklärung informieren wir Sie insbesondere über Art, Umfang, Zweck,
        Dauer und Rechtsgrundlage der Verarbeitung personenbezogener Daten, soweit wir
        entweder allein oder gemeinsam mit anderen über die Zwecke und Mittel der
        Verarbeitung entscheiden. Zudem informieren wir Sie nachfolgend über die von uns
        zu Optimierungszwecken sowie zur Steigerung der Nutzungsqualität eingesetzten
        Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum eigener
        Verantwortung verarbeiten.</p>
					<p>Unsere Datenschutzerklärung ist wie folgt gegliedert:</p>
					<p>I. Informationen über uns als Verantwortliche<br />II. Rechte der Nutzer und Betroffenen<br />III. Informationen zur Datenverarbeitung</p>
					<h3>I. Informationen über uns als Verantwortliche</h3>
					<p>Verantwortlicher Anbieter dieses
                Internetauftritts im datenschutzrechtlichen Sinne ist:</p>
					<p>Georg Reil<br />Landsberger Strasße 148<br />80339 München<br />Deutschland</p>
					<p>E-Mail: georg@makethingstalk.io</p>
					<p>Datenschutzbeauftragte/r beim Anbieter ist:</p>
					<p>Georg Reil</p>
					<h3>II. Rechte der Nutzer und Betroffenen</h3>
					<p>Mit Blick auf die nachfolgend noch
                            näher beschriebene Datenverarbeitung haben die Nutzer und Betroffenen das Recht</p>
					<ul data-rte-list="default">
						<li>
							<p>auf Bestätigung, ob sie betreffende
                                    Daten verarbeitet werden, auf Auskunft über die verarbeiteten Daten, auf weitere
                                    Informationen über die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch
                                    Art. 15 DSGVO);</p>
						</li>
						<li>
							<p>auf Berichtigung oder
                                    Vervollständigung unrichtiger bzw. unvollständiger Daten (vgl. auch Art. 16
                                    DSGVO);</p>
						</li>
						<li>
							<p>auf unverzügliche Löschung der sie
                                    betreffenden Daten (vgl. auch Art. 17 DSGVO), oder, alternativ, soweit eine
                                    weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, auf
                                    Einschränkung der Verarbeitung nach Maßgabe von Art. 18 DSGVO;</p>
						</li>
						<li>
							<p>auf Erhalt der sie betreffenden und
                                    von ihnen bereitgestellten Daten und auf Übermittlung dieser Daten an andere
                                    Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);</p>
						</li>
						<li>
							<p>auf Beschwerde gegenüber der
                                    Aufsichtsbehörde, sofern sie der Ansicht sind, dass die sie betreffenden Daten
                                    durch den Anbieter unter Verstoß gegen datenschutzrechtliche Bestimmungen
                                    verarbeitet werden (vgl. auch Art. 77 DSGVO).</p>
						</li>
					</ul>
					<p>Darüber hinaus ist der Anbieter dazu
                            verpflichtet, alle Empfänger, denen gegenüber Daten durch den Anbieter
                            offengelegt worden sind, über jedwede Berichtigung oder Löschung von Daten oder
                            die Einschränkung der Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18
                            DSGVO erfolgt, zu unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit
                            diese Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand verbunden
                            ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft über diese
                            Empfänger.</p>
					<p>
						<em>Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf
                                Widerspruch gegen die künftige Verarbeitung der sie betreffenden Daten, sofern
                                die Daten durch den Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f) DSGVO
                                verarbeitet werden. Insbesondere ist ein Widerspruch gegen die Datenverarbeitung
                                zum Zwecke der Direktwerbung statthaft.</em>
					</p>
					<h3>III. Informationen zur Datenverarbeitung</h3>
					<p>Ihre bei Nutzung unseres
                            Internetauftritts verarbeiteten Daten werden gelöscht oder gesperrt, sobald der
                            Zweck der Speicherung entfällt, der Löschung der Daten keine gesetzlichen
                            Aufbewahrungspflichten entgegenstehen und nachfolgend keine anderslautenden
                            Angaben zu einzelnen Verarbeitungsverfahren gemacht werden.</p>
					<h3>YouTube</h3>
					<p>Wir unterhalten bei YouTube eine
                            Onlinepräsenz um unser Unternehmen sowie unsere Leistungen zu präsentieren und
                            mit Kunden/Interessenten zu kommunizieren. YouTube ist ein Service der Google
                            Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, ein
                            Tochterunternehmen der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA
                            94043 USA.</p>
					<p>Insofern weisen wir darauf hin, dass
                            die Möglichkeit besteht, dass Daten der Nutzer außerhalb der Europäischen Union,
                            insbesondere in den USA, verarbeitet werden. Hierdurch können gesteigerte
                            Risiken für die Nutzer insofern bestehen, als dass z.B. der spätere Zugriff auf
                            die Nutzerdaten erschwert werden kann. Auch haben wir keinen Zugriff auf diese
                            Nutzerdaten. Die Zugriffsmöglichkeit liegt ausschließlich bei YouTube. Die
                            Google LLC ist unter dem Privacy Shield zertifiziert und hat sich damit
                            verpflichtet, die europäischen Datenschutzstandards einzuhalten</p>
					<p>
						<a
							href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active"
							target="_blank">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active</a>
					</p>
					<p>Die Datenschutzhinweise von YouTube finden Sie unter</p>
					<p>
						<a href="https://policies.google.com/privacy" target="_blank">https://policies.google.com/privacy</a>
					</p>
					<h3>Instagram</h3>
					<p>Zur Bewerbung unserer Produkte und
                            Leistungen sowie zur Kommunikation mit Interessenten oder Kunden betreiben wir
                            eine Firmenpräsenz auf der Plattform Instagram.</p>
					<p>Auf dieser Social-Media-Plattform sind
                            wir gemeinsam mit der Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal
                            Harbour, Dublin 2 Ireland, verantwortlich.</p>
					<p>Der Datenschutzbeauftragte von
                            Instagram kann über ein Kontaktformular erreicht werden:</p>
					<p>
						<a href="https://www.facebook.com/help/contact/540977946302970" target="_blank">https://www.facebook.com/help/contact/540977946302970</a>
					</p>
					<p>Die gemeinsame Verantwortlichkeit
                            haben wir in einer Vereinbarung bezüglich der jeweiligen Verpflichtungen im
                            Sinne der DSGVO geregelt. Diese Vereinbarung, aus der sich die gegenseitigen
                            Verpflichtungen ergeben, ist unter dem folgenden Link abrufbar:</p>
					<p>
						<a
							href="https://www.facebook.com/legal/terms/page_controller_addendum"
							target="_blank">https://www.facebook.com/legal/terms/page_controller_addendum</a>
					</p>
					<p>Rechtsgrundlage für die dadurch
                            erfolgende und nachfolgend wiedergegebene Verarbeitung von personenbezogenen
                            Daten ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht an
                            der Analyse, der Kommunikation sowie dem Absatz und der Bewerbung unserer
                            Produkte und Leistungen.</p>
					<p>Rechtsgrundlage kann auch eine
                            Einwilligung des Nutzers gemäß Art. 6 Abs. 1 lit. a DSGVO gegenüber dem
                            Plattformbetreiber sein. Die Einwilligung hierzu kann der Nutzer nach Art. 7
                            Abs. 3 DSGVO jederzeit durch eine Mitteilung an den Plattformbetreiber für die
                            Zukunft widerrufen.</p>
					<p>Bei dem Aufruf unseres Onlineauftritts
                            auf der Plattform Instagram werden von der Facebook Ireland Ltd. als Betreiberin
                            der Plattform in der EU Daten des Nutzers (z.B. persönliche Informationen,
                            IP-Adresse etc.) verarbeitet.</p>
					<p>Diese Daten des Nutzers dienen zu
                            statistischen Informationen über die Inanspruchnahme unserer Firmenpräsenz auf
                            Instagram. Die Facebook Ireland Ltd. nutzt diese Daten zu Marktforschungs- und
                            Werbezwecken sowie zur Erstellung von Profilen der Nutzer. Anhand dieser Profile
                            ist es der Facebook Ireland Ltd. beispielsweise möglich, die Nutzer innerhalb
                            und außerhalb von Instagram interessenbezogen zu bewerben. Ist der Nutzer zum
                            Zeitpunkt des Aufrufes in seinem Account auf Instagram eingeloggt, kann die
                            Facebook Ireland Ltd. zudem die Daten mit dem jeweiligen Nutzerkonto verknüpfen.</p>
					<p>Im Falle einer Kontaktaufnahme des
                            Nutzers über Instagram werden die bei dieser Gelegenheit eingegebenen
                            personenbezogenen Daten des Nutzers zur Bearbeitung der Anfrage genutzt. Die
                            Daten des Nutzers werden bei uns gelöscht, sofern die Anfrage des Nutzers
                            abschließend beantwortet wurde und keine gesetzlichen Aufbewahrungspflichten,
                            wie z.B. bei einer anschließenden Vertragsabwicklung, entgegenstehen.</p>
					<p>Zur Verarbeitung der Daten werden von
                            der Facebook Ireland Ltd. ggf. auch Cookies gesetzt.</p>
					<p>Sollte der Nutzer mit dieser
                            Verarbeitung nicht einverstanden sein, so besteht die Möglichkeit, die
                            Installation der Cookies durch eine entsprechende Einstellung des Browsers zu
                            verhindern. Bereits gespeicherte Cookies können ebenfalls jederzeit gelöscht
                            werden. Die Einstellungen hierzu sind vom jeweiligen Browser abhängig. Bei
                            Flash-Cookies lässt sich die Verarbeitung nicht über die Einstellungen des
                            Browsers unterbinden, sondern durch die entsprechende Einstellung des
                            Flash-Players. Sollte der Nutzer die Installation der Cookies verhindern oder
                            einschränken, kann dies dazu führen, dass nicht sämtliche Funktionen von
                            Facebook vollumfänglich nutzbar sind.</p>
					<p>Näheres zu den
                            Verarbeitungstätigkeiten, deren Unterbindung und zur Löschung der von Instagram
                            verarbeiteten Daten finden sich in der Datenrichtlinie von Instagram:</p>
					<p>
						<a href="https://help.instagram.com/519522125107875" target="_blank">https://help.instagram.com/519522125107875</a>
					</p>
					<p>Es ist nicht ausgeschlossen, dass die
                            Verarbeitung durch die Facebook Ireland Ltd. auch über die Facebook Inc., 1601
                            Willow Road, Menlo Park, California 94025 in den USA erfolgt.</p>
					<p>Die Facebook Inc. hat sich dem „EU-US
                            Privacy Shield“ unterworfen und erklärt dadurch die Einhaltung der
                            Datenschutzvorgaben der EU bei der Verarbeitung der Daten in den USA.</p>
					<p>
						<a
							href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&amp;status=Active"
							target="_blank">https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&amp;status=Active</a>
					</p>
					<h3>Verlinkung Social-Media über Grafik oder Textlink</h3>
					<p>Wir bewerben auf unserer Webseite auch
                            Präsenzen auf den nachstehend aufgeführten sozialen Netzwerken. Die Einbindung
                            erfolgt dabei über eine verlinkte Grafik des jeweiligen Netzwerks. Durch den
                            Einsatz dieser verlinkten Grafik wird verhindert, dass es bei dem Aufruf einer
                            Website, die über eine Social-Media-Bewerbung verfügt, automatisch zu einem
                            Verbindungsaufbau zum jeweiligen Server des sozialen Netzwerks kommt, um eine
                            Grafik des jeweiligen Netzwerkes selbst darzustellen. Erst durch einen Klick auf
                            die entsprechende Grafik wird der Nutzer zu dem Dienst des jeweiligen sozialen
                            Netzwerks weitergeleitet.</p>
					<p>Nach der Weiterleitung des Nutzers
                            werden durch das jeweilige Netzwerk Informationen über den Nutzer erfasst. Es
                            kann hierbei nicht ausgeschlossen werden, dass eine Verarbeitung der so
                            erhobenen&nbsp; Daten in den USA stattfindet.</p>
					<p>Dies sind zunächst Daten wie
                            IP-Adresse, Datum, Uhrzeit und besuchte Seite. Ist der Nutzer währenddessen in
                            seinem Benutzerkonto des jeweiligen Netzwerks eingeloggt, kann der
                            Netzwerk-Betreiber ggf. die gesammelten Informationen des konkreten Besuchs des
                            Nutzers dem persönlichen Account des Nutzers zuordnen. Interagiert der Nutzer
                            über einen „Teilen“-Button des jeweiligen Netzwerks, können diese Informationen
                            in dem persönlichen Benutzerkonto des Nutzers gespeichert und ggf.
                            veröffentlicht werden. Will der Nutzer verhindern, dass die gesammelten
                            Informationen unmittelbar seinem Benutzerkonto zugeordnet werden, muss er sich
                            vor dem Anklicken der Grafik ausloggen. Zudem besteht die Möglichkeit, das
                            jeweilige Benutzerkonto entsprechend zu konfigurieren.</p>
					<p>Folgende soziale Netzwerke werden in unsere Seite durch Verlinkung eingebunden:</p>
					<h3>facebook</h3>
					<p>Facebook Ireland Limited, 4 Grand
                            Canal Square, Dublin 2, Ireland, ein Tochterunternehmen der Facebook Inc., 1601
                            S. California Ave., Palo Alto, CA 94304, USA.</p>
					<p>Datenschutzerklärung:&nbsp;<a href="https://www.facebook.com/policy.php" target="_blank">https://www.facebook.com/policy.php</a>
					</p>
					<p>Zertifizierung EU-US-Datenschutz („EU-US Privacy Shield“)&nbsp;<a
						href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&amp;status=Active"
						target="_blank">https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&amp;status=Active</a>
					</p>
					<h3>twitter</h3>
					<p>Twitter Inc., 795 Folsom St., Suite 600, San Francisco, CA 94107, USA</p>
					<p>Datenschutzerklärung:&nbsp;<a href="https://twitter.com/privacy" target="_blank">https://twitter.com/privacy</a>
					</p>
					<p>Zertifizierung EU-US-Datenschutz („EU-US Privacy Shield“)</p>
					<p>
						<a
							href="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&amp;status=Active"
							target="_blank">https://www.privacyshield.gov/…0000TORzAAO&amp;status=Active</a>
					</p>
					<h3>YouTube</h3>
					<p>Google Ireland Limited, Gordon House,
                            Barrow Street, Dublin 4, Irland, ein Tochterunternehmen der Google LLC, 1600
                            Amphitheatre Parkway, Mountain View, CA 94043 USA</p>
					<p>Datenschutzerklärung:&nbsp;<a href="https://policies.google.com/privacy" target="_blank">https://policies.google.com/privacy</a>
					</p>
					<p>Zertifizierung EU-US-Datenschutz („EU-US Privacy Shield“)&nbsp;<a
						href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active"
						target="_blank">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active</a>
					</p>
					<h3>Google Fonts</h3>
					<p>In unserem Internetauftritt setzen wir
                            Google Fonts zur Darstellung externer Schriftarten ein. Es handelt sich hierbei
                            um einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin
                            4, Irland, nachfolgend nur „Google“ genannt.</p>
					<p>Durch die Zertifizierung nach dem
                            EU-US-Datenschutzschild („EU-US Privacy Shield“)</p>
					<p>
						<a
							href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active"
							target="_blank">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active</a>
					</p>
					<p>garantiert Google, dass die
                            Datenschutzvorgaben der EU auch bei der Verarbeitung von Daten in den USA
                            eingehalten werden.</p>
					<p>Um die Darstellung bestimmter
                            Schriften in unserem Internetauftritt zu ermöglichen, wird bei Aufruf unseres
                            Internetauftritts eine Verbindung zu dem Google-Server in den USA aufgebaut.</p>
					<p>Rechtsgrundlage ist Art. 6 Abs. 1 lit.
                            f) DSGVO. Unser berechtigtes Interesse liegt in der Optimierung und dem
                            wirtschaftlichen Betrieb unseres Internetauftritts.</p>
					<p>Durch die bei Aufruf unseres
                            Internetauftritts hergestellte Verbindung zu Google kann Google ermitteln, von
                            welcher Website Ihre Anfrage gesendet worden ist und an welche IP-Adresse die
                            Darstellung der Schrift zu übermitteln ist.</p>
					<p>Google bietet unter</p>
					<p>
						<a href="https://adssettings.google.com/authenticated" target="_blank">https://adssettings.google.com/authenticated</a>
					</p>
					<p>
						<a href="https://policies.google.com/privacy" target="_blank">https://policies.google.com/privacy</a>
					</p>
					<p>weitere Informationen an und zwar
                            insbesondere zu den Möglichkeiten der Unterbindung der Datennutzung.</p>
					<h3>YouTube</h3>
					<p>In unserem Internetauftritt setzen wir
                            YouTube ein. Hierbei handelt es sich um ein Videoportal der YouTube LLC., 901
                            Cherry Ave., 94066 San Bruno, CA, USA, nachfolgend nur „YouTube“ genannt.</p>
					<p>YouTube ist ein Tochterunternehmen der
                            Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
                            nachfolgend nur „Google“ genannt.</p>
					<p>Durch die Zertifizierung nach dem
                            EU-US-Datenschutzschild („EU-US Privacy Shield“)</p>
					<p>
						<a
							href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active"
							target="_blank">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active</a>
					</p>
					<p>garantiert Google und damit auch das
                            Tochterunternehmen YouTube, dass die Datenschutzvorgaben der EU auch bei der
                            Verarbeitung von Daten in den USA eingehalten werden.</p>
					<p>Wir nutzen YouTube im Zusammenhang mit
                            der Funktion „Erweiterter Datenschutzmodus“, um Ihnen Videos anzeigen zu können.
                            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse
                            liegt in der Qualitätsverbesserung unseres Internetauftritts. Die Funktion
                            „Erweiterter Datenschutzmodus“ bewirkt laut Angaben von YouTube, dass die
                            nachfolgend noch näher bezeichneten Daten nur dann an den Server von YouTube
                            übermittelt werden, wenn Sie ein Video auch tatsächlich starten.</p>
					<p>Ohne diesen „Erweiterten Datenschutz“
                            wird eine Verbindung zum Server von YouTube in den USA hergestellt, sobald Sie
                            eine unserer Internetseiten, auf der ein YouTube-Video eingebettet ist,
                            aufrufen.</p>
					<p>Diese Verbindung ist erforderlich, um
                            das jeweilige Video auf unserer Internetseite über Ihren Internet-Browser
                            darstellen zu können. Im Zuge dessen wird YouTube zumindest Ihre IP-Adresse, das
                            Datum nebst Uhrzeit sowie die von Ihnen besuchte Internetseite erfassen und
                            verarbeiten. Zudem wird eine Verbindung zu dem Werbenetzwerk „DoubleClick“ von
                            Google hergestellt.</p>
					<p>Sollten Sie gleichzeitig bei YouTube
                            eingeloggt sein, weist YouTube die Verbindungsinformationen Ihrem YouTube-Konto
                            zu. Wenn Sie das verhindern möchten, müssen Sie sich entweder vor dem Besuch
                            unseres Internetauftritts bei YouTube ausloggen oder die entsprechenden
                            Einstellungen in Ihrem YouTube-Benutzerkonto vornehmen.</p>
					<p>Zum Zwecke der Funktionalität sowie
                            zur Analyse des Nutzungsverhaltens speichert YouTube dauerhaft Cookies über
                            Ihren Internet-Browser auf Ihrem Endgerät. Falls Sie mit dieser Verarbeitung
                            nicht einverstanden sind, haben Sie die Möglichkeit, die Speicherung der Cookies
                            durch eine Einstellung in Ihrem Internet-Browsers zu verhindern. Nähere
                            Informationen hierzu finden Sie vorstehend unter „Cookies“.</p>
					<p>Weitergehende Informationen über die
                            Erhebung und Nutzung von Daten sowie Ihre diesbezüglichen Rechte und
                            Schutzmöglichkeiten hält Google in den unter</p>
					<p>
						<a href="https://policies.google.com/privacy" target="_blank">https://policies.google.com/privacy</a>
					</p>
					<p>abrufbaren Datenschutzhinweisen bereit.</p>
					<p>
						<a
							href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html"
							target="_blank">Muster-Datenschutzerklärung</a>&nbsp;der&nbsp;<a
							href="https://www.ratgeberrecht.eu/datenschutz/datenschutzerklaerung-generator-dsgvo.html"
							target="_blank">Anwaltskanzlei Weiß &amp; Partner</a>
					</p>
				</Section>
			</ContentSectionWrapper>
		</>
	);
}