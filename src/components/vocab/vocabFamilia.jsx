import "../../styles/vocab.css";


import dadImg from "../../assets/images/dad.png";
import momImg from "../../assets/images/mother.png";
import sisterImg from "../../assets/images/girl.png";
import grandPImg from "../../assets/images/grand-parents.png";
import broImg from "../../assets/images/brother.png";

export default function VocabEscuela({ onBack }) {
    return (
        <div className="vocab-container">
            <h2 className="vocab-title">Familia</h2>

            <div className="vocab-list">

                <div className="vocab-item">
                    <img
                        src={dadImg}
                        className="vocab-img"
                        alt="Papá"
                    />
                    <p>Papá</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={momImg}
                        className="vocab-img"
                        alt="Mamá"
                    />
                    <p>Mamá</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={grandPImg}
                        className="vocab-img"
                        alt="Abuelos"
                    />
                    <p>Abuelos</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={broImg}
                        className="vocab-img"
                        alt="Hermano"
                    />
                    <p>Hermano</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={sisterImg}
                        className="vocab-img"
                        alt="Hermana"
                    />
                    <p>Hermana</p>
                </div>



            </div>

            <button className="back-btn" onClick={onBack}>Regresar</button>
        </div>
    );
}
