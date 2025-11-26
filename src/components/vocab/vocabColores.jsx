import "../../styles/vocab.css";


import verdeImg from "../../assets/images/verde.png";
import amarilloImg from "../../assets/images/amarillo.png";
import rojoImg from "../../assets/images/rojo.png";
import cieloImg from "../../assets/images/cloudy.png";
import uvaImg from "../../assets/images/berry.png";

export default function VocabEscuela({ onBack }) {
    return (
        <div className="vocab-container">
            <h2 className="vocab-title">Colores</h2>

            <div className="vocab-list">

                <div className="vocab-item">
                    <img
                        src={verdeImg}
                        className="vocab-img"
                        alt="Verde"
                    />
                    <p>El pasto es "verde"</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={amarilloImg}
                        className="vocab-img"
                        alt="Amarillo"
                    />
                    <p>El sol es "amarillo"</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={cieloImg}
                        className="vocab-img"
                        alt="Cielo"
                    />
                    <p>El cielo es "azul"</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={uvaImg}
                        className="vocab-img"
                        alt="Uva"
                    />
                    <p>Las uvas son "moradas"</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={rojoImg}
                        className="vocab-img"
                        alt="Rojo"
                    />
                    <p>El jitomate es "rojo"</p>
                </div>



            </div>

            <button className="back-btn" onClick={onBack}>Regresar</button>
        </div>
    );
}
