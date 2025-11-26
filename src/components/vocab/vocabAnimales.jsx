import elefanteImg from "../../assets/images/elephant.png";
import tortugaImg from "../../assets/images/tortuga.png";
import osoImg from "../../assets/images/oso.png";
import tigreImg from "../../assets/images/tigre.png";
import pezImg from "../../assets/images/pez.png";
import pajaroImg from "../../assets/images/bird.png";

export default function VocabAnimales({ onBack }) {
    return (
        <div className="vocab-container">
            <h2 className="vocab-title">Animales</h2>

            <div className="vocab-list">
                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                        className="vocab-img"
                        alt="Perro"
                    />
                    <p>Perro</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/616/616430.png"
                        className="vocab-img"
                        alt="Gato"
                    />
                    <p>Gato</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={elefanteImg}
                        className="vocab-img"
                        alt="Elefante"
                    />
                    <p>Elefante</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={tortugaImg}
                        className="vocab-img"
                        alt="Tortuga"
                    />
                    <p>Tortuga</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={osoImg}
                        className="vocab-img"
                        alt="Oso"
                    />
                    <p>Oso</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={tigreImg}
                        className="vocab-img"
                        alt="Tigre"
                    />
                    <p>Tigre</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={pezImg}
                        className="vocab-img"
                        alt="Pez"
                    />
                    <p>Pez</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={pajaroImg}
                        className="vocab-img"
                        alt="Pajaro"
                    />
                    <p>Pájaro</p>
                </div>


            </div>

            <button className="back-btn" onClick={onBack}>
                Regresar
            </button>
        </div>
    );
}
