import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import poza1 from "../assets/poza1.PNG";
import poza2 from "../assets/poza2.jpg";
import poza3 from "../assets/poza3.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1588515603140-81bd9f7d1db0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        title="Contact "
        text="Număr de telefon: 0726 204 562"
        text2="Program:"
        text3="Luni - Vineri: 09:00 - 17:00"
        text4="Sambăta: 09:00 - 13:00"
        text5="Duminică: Închis"
        btnClass="hide"
      />
      <div className="grid-container">
        <div className="item1">
          <div className="info-text">
            <h2>Locație Fizica</h2>
            <p>Strada Unirii bloc 10b parter</p>
          </div>
        </div>
        <div className="item2">
          {" "}
          <img alt="img" src={poza1} style={{ height: "500px" }} />
        </div>
        <div className="item3">
          {" "}
          <img alt="img" src={poza2} style={{ height: "500px" }} />
        </div>
        <div className="item4">
          {" "}
          <img alt="img" src={poza3} style={{ height: "500px" }} />
        </div>
      </div>
    </>
  );
}

export default Contact;
