import ImageSection from "../components/ImageSection"
import Navbar from "../components/Navbar"
import productImage from '../assets/product-03.jpg'

function Home() {


  return (
    <>
      <Navbar/>
      <ImageSection imageUrl={productImage} text="Digitale Geschichten erzählen mit RFID-Technologie – jenseits von Tablets, Terminals und Touchscreens."></ImageSection>
      <div className="container">
      <div className="grid">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>

<h1>Hallo Georg!</h1>
<h2>Heading</h2>
<h3>Heading</h3>
<h4>Heading</h4>
<h5>Heading</h5>
<h6>Heading</h6>




<p>The base type is 15px over 1.6 line height (24px)</p>


<strong>Bolded</strong>
<em>Italicized</em>
<a>Colored</a>
<u>Underlined</u>
      </div>
    </>
  )
}

export default Home
