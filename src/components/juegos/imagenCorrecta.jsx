import { useState } from "react";
import "../../styles/juegos.css";

// Importa tus imágenes desde src/assets
import perroImg from "../../assets/images/perro.png";
import gatoImg from "../../assets/images/gato.png";
import pajaroImg from "../../assets/images/bird.png";

import manzanaImg from "../../assets/images/manzana.png";
import bananaImg from "../../assets/images/banana.png";
import naranjaImg from "../../assets/images/naranja.png";

import carroImg from "../../assets/images/carro.png";
import biciImg from "../../assets/images/bicicleta.png";
import busImg from "../../assets/images/bus.png";

export default function ImagenCorrecta({ onBack }) {

    const preguntas = [
        {
            palabra: "Perro",
            opciones: [perroImg, gatoImg, pajaroImg],
            correcta: 0
        },
        {
            palabra: "Manzana",
            opciones: [manzanaImg, bananaImg, naranjaImg],
            correcta: 0
        },
        {
            palabra: "Carro",
            opciones: [carroImg, biciImg, busImg],
            correcta: 0
        }
    ];

    const [indice, setIndice] = useState(0);
    const [mensaje, setMensaje] = useState("");

    const preguntaActual = preguntas[indice];

    const seleccionarImagen = (index) => {
        if (index === preguntaActual.correcta) {
            setMensaje("¡Correcto! 🎉");

            setTimeout(() => {
                setMensaje("");
                if (indice < preguntas.length - 1) {
                    setIndice(indice + 1);
                } else {
                    alert("¡Has completado todas las preguntas!");
                    setIndice(0);
                }
            }, 900);

        } else {
            setMensaje("Incorrecto ❌");
            setTimeout(() => setMensaje(""), 1000);
        }
    };

    return (
        <div className="juegos-container">

            <button className="back-btn" onClick={onBack}>
                ⬅ Regresar
            </button>

            <h1 className="juegos-title">Selecciona la Imagen Correcta</h1>

            <p className="juegos-subtitle">
                ¿Cuál imagen corresponde a:
                <strong> {preguntaActual.palabra}</strong>?
            </p>

            <div className="imagenes-grid">
                {preguntaActual.opciones.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt="opción"
                        className="imagen-opcion"
                        onClick={() => seleccionarImagen(i)}
                    />
                ))}
            </div>

            {mensaje && <p className="mensaje-resultado">{mensaje}</p>}
        </div>
    );
}
