import "./HeroStyles.css";
import { useNavigate } from "react-router-dom";

function Hero(props) {
  const navigate = useNavigate();
  const { renderButton } = props;

  return (
    <>
      <div className={props.cName}></div>
      <img
        alt="homepagephone"
        src={props.heroImg}
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      />
      <div className="hero-text">
        <h1>{props.title}</h1>

        <p>{props.text}</p>
        {renderButton && (
          <button onClick={() => navigate("/service")}>
            {props.buttonText}
          </button>
        )}
        <p>{props.text2}</p>
        <p>{props.text3}</p>
        <p>{props.text4}</p>
        <p>{props.text5}</p>
      </div>
    </>
  );
}

export default Hero;
