import "../../styles/vocab.css";


import unoImg from "../../assets/images/1.png";
import diezImg from "../../assets/images/10.png";
import cienImg from "../../assets/images/100.png";


export default function VocabEscuela({ onBack }) {
  return (
    <div className="vocab-container">
      <h2 className="vocab-title">Números</h2>

      <div className="vocab-list">

        <div className="vocab-item">
          <img
            src={unoImg}
            className="vocab-img"
            alt="Uno"
          />
          <p>Unidades</p>
        </div>

        <div className="vocab-item">
          <img
            src={diezImg}
            className="vocab-img"
            alt="Diez"
          />
          <p>Décimas</p>
        </div>

        <div className="vocab-item">
          <img
            src={cienImg}
            className="vocab-img"
            alt="Cien"
          />
          <p>Céntesimas</p>
        </div>


      </div>

      <button className="back-btn" onClick={onBack}>Regresar</button>
    </div>
  );
}
