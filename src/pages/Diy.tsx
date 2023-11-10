import ImageSection from "../components/ImageSection"
import Navbar from "../components/Navbar"
import diyImage from "../assets/diy-cover.jpg"

function Diy() {


  return (
    <>
      <Navbar/>
      <ImageSection imageUrl={diyImage} text=""></ImageSection>
      <div className="container">
<h1>Do It Yourself Kit</h1>

<p>The base type is 15px over 1.6 line height (24px)</p>


<strong>Bolded</strong>
<em>Italicized</em>
<a>Colored</a>
<u>Underlined</u>
      </div>
    </>
  )
}

export default Diy