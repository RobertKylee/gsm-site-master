import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1576613109753-27804de2cba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Servicii si aparatură la GSM "
        text="Valabile in limita stocului disponibil"
        btnClass="hide"
      />
      <Destination />
    </>
  );
}

export default Service;
