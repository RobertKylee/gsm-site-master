import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        imageHeight=""
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1588515603068-adb330f26e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        title="Vânzări, Cumpărări, Reparații"
        text="Reîncarcari cartele SIM"
        buttonText="Accesorii"
        url="/"
        btnClass="show"
        renderButton={true}
      />
    </>
  );
}

export default Home;
