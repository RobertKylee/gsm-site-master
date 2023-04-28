import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="grid-container">
      <div className="item1">
        <h1>Calitate Înalta, Prețuri Accesibile și Reparații în Timp Util</h1>
        <p>O gama larga de electronice, multimedia și gadgeturi</p>
      </div>
      <div className="item2">
        <div className="info-text">
          <h2>Decodări și Deblocări</h2>
          <p>
            Ai uitat codul telefonului? Ai uitat contul de Google, sau codul de
            brand? Ai un telefon din altă țară și nu funcționează? Te putem
            ajuta noi! Prețurile diferă în funcție de model, brand, operațiune,
            țara/rețeaua de unde provine și complexitatea intervenției. Dispunem
            de echipamente de ultima generație si personal specializat ce vă
            poate ajuta intr-un timp scurt și eficient la aprox. 98% din
            telefoanele blocate / codate de pe piață.
          </p>
        </div>
      </div>
      <div className="item3">
        <div className="imagesContainer">
          <div className="phoneImg2">
            {" "}
            <img
              id="img3"
              alt="img"
              src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <div className="phoneImg">
            <img
              id="img2"
              alt="img"
              src="https://images.unsplash.com/photo-1550041473-d296a3a8a18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
            />
          </div>
        </div>
      </div>
      <div className="item4">
        <div className="info-text">
          <h2>Vindem, Cumpărăm și Reparăm</h2>
          <p>
            Ne ocupăm cu tot ce ține de repararea, cumpărarea și vânzarea de
            electronice, multimedia și gadgeturi incluzând telefoane, tablete,
            smart watches si multe altele. De asemenea puteți achiziționa
            accesorii pentru telefonul, tableta sau laptopul dumneavoastră la
            cele mai bune prețuri. Pe lângă toate acestea mai efectuăm și
            reîncărcări de cartele SIM în: Orange, Vodafone și Telekom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
