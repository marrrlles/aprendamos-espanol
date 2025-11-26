import "../../styles/vocab.css";


import libroImg from "../../assets/images/book.png";
import lapizImg from "../../assets/images/pencil.png";
import maestroImg from "../../assets/images/teacher.png";
import escritorioImg from "../../assets/images/desk.png";
import pincelImg from "../../assets/images/pincel.png";

export default function VocabEscuela({ onBack }) {
    return (
        <div className="vocab-container">
            <h2 className="vocab-title">Escuela</h2>

            <div className="vocab-list">

                <div className="vocab-item">
                    <img
                        src={libroImg}
                        className="vocab-img"
                        alt="Libro"
                    />
                    <p>Libro</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={lapizImg}
                        className="vocab-img"
                        alt="Lápiz"
                    />
                    <p>Lápiz</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={pincelImg}
                        className="vocab-img"
                        alt="Pincel"
                    />
                    <p>Pincel</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={maestroImg}
                        className="vocab-img"
                        alt="Maestro"
                    />
                    <p>Maestro</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={escritorioImg}
                        className="vocab-img"
                        alt="Escritorio"
                    />
                    <p>Escritorio</p>
                </div>

            </div>

            <button className="back-btn" onClick={onBack}>Regresar</button>
        </div>
    );
}
