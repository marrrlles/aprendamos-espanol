import "../../styles/vocab.css";


import jeansImg from "../../assets/images/jeans.png";
import jacketImg from "../../assets/images/jacket.png";
import shoesImg from "../../assets/images/shoes.png";
import skirtImg from "../../assets/images/skirt.png";
import shirtImg from "../../assets/images/shirt.png";

export default function VocabEscuela({ onBack }) {
    return (
        <div className="vocab-container">
            <h2 className="vocab-title">Ropa</h2>

            <div className="vocab-list">

                <div className="vocab-item">
                    <img
                        src={jeansImg}
                        className="vocab-img"
                        alt="Jeans"
                    />
                    <p>Pantalón</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={jacketImg}
                        className="vocab-img"
                        alt="Mamá"
                    />
                    <p>Chaqueta</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={skirtImg}
                        className="vocab-img"
                        alt="Falda"
                    />
                    <p>Falda</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={shirtImg}
                        className="vocab-img"
                        alt="Camisa"
                    />
                    <p>Camisa</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={shoesImg}
                        className="vocab-img"
                        alt="Zapatos"
                    />
                    <p>Zapatos</p>
                </div>



            </div>

            <button className="back-btn" onClick={onBack}>Regresar</button>
        </div>
    );
}
