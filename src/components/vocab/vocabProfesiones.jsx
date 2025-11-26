import "../../styles/vocab.css";


import programadorImg from "../../assets/images/developer.png";
import ingImg from "../../assets/images/engineer.png";
import chefImg from "../../assets/images/chef.png";
import fisicoImg from "../../assets/images/einstein.png";
import carpinteroImg from "../../assets/images/carpenter.png";

export default function VocabEscuela({ onBack }) {
    return (
        <div className="vocab-container">
            <h2 className="vocab-title">Profesiones</h2>

            <div className="vocab-list">

                <div className="vocab-item">
                    <img
                        src={programadorImg}
                        className="vocab-img"
                        alt="Programador"
                    />
                    <p>Programador</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={ingImg}
                        className="vocab-img"
                        alt="Ingeniero"
                    />
                    <p>Ingeniero</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={fisicoImg}
                        className="vocab-img"
                        alt="Fisico"
                    />
                    <p>Físico</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={carpinteroImg}
                        className="vocab-img"
                        alt="Carpintero"
                    />
                    <p>Carpintero</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={chefImg}
                        className="vocab-img"
                        alt="Chef"
                    />
                    <p>Chef</p>
                </div>



            </div>

            <button className="back-btn" onClick={onBack}>Regresar</button>
        </div>
    );
}
