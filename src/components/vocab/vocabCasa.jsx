import "../../styles/vocab.css";
import sofaImg from "../../assets/images/sofa.png";
import sillaImg from "../../assets/images/chair.png";
import mesaImg from "../../assets/images/table.png";
import cuadroImg from "../../assets/images/art.png";

export default function VocabCasa({ onBack }) {
    return (
        <div className="vocab-container">
            <h2 className="vocab-title">Hogar / Casa</h2>

            <div className="vocab-list">

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
                        className="vocab-img"
                        alt="Casa"
                    />
                    <p>Casa</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
                        className="vocab-img"
                        alt="Cubiertos"
                    />
                    <p>Cubiertos</p>
                </div>

                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3643/3643028.png"
                        className="vocab-img"
                        alt="Decoracion"
                    />
                    <p>Decoración</p>
                </div>



                <div className="vocab-item">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/628/628283.png"
                        className="vocab-img"
                        alt="Maceta"
                    />
                    <p>Maceta</p>
                </div>


                <div className="vocab-item">
                    <img
                        src={sofaImg}
                        className="vocab-img"
                        alt="Sofa"
                    />
                    <p>Sofa</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={sillaImg}
                        className="vocab-img"
                        alt="Silla"
                    />
                    <p>Silla</p>
                </div>

                <div className="vocab-item">
                    <img
                        src={mesaImg}
                        className="vocab-img"
                        alt="Mesa"
                    />
                    <p>Mesa</p>
                </div>


                <div className="vocab-item">
                    <img
                        src={cuadroImg}
                        className="vocab-img"
                        alt="Cuadro"
                    />
                    <p>Recuadro</p>
                </div>


            </div>

            <button className="back-btn" onClick={onBack}>Regresar</button>
        </div>
    );
}
