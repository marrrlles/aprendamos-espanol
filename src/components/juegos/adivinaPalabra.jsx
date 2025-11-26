import React, { useState } from "react";

function AdivinaPalabra({ onBack }) {
    const niveles = {
        facil: [
            { palabra: "sol", pista: "Da luz durante el día." },
            { palabra: "pan", pista: "Lo compras en la panadería." },
            { palabra: "mar", pista: "Lugar con agua salada." },
        ],
        normal: [
            { palabra: "gato", pista: "Animal que dice 'miau'." },
            { palabra: "casa", pista: "Lugar donde vives." },
            { palabra: "manzana", pista: "Fruta roja o verde." },
        ],
        dificil: [
            { palabra: "astronomia", pista: "Ciencia que estudia el universo." },
            { palabra: "electricidad", pista: "Forma de energía que usamos diario." },
            { palabra: "fotografia", pista: "Captura imágenes con luz." },
        ],
    };

    const [nivel, setNivel] = useState(null);
    const [actual, setActual] = useState(null);
    const [respuesta, setRespuesta] = useState("");
    const [mensaje, setMensaje] = useState("");

    const elegirNivel = (niv) => {
        setNivel(niv);
        const palabras = niveles[niv];
        const random = palabras[Math.floor(Math.random() * palabras.length)];
        setActual(random);
    };

    const verificar = () => {
        if (respuesta.toLowerCase() === actual.palabra.toLowerCase()) {
            setMensaje("✔ ¡Correcto!");
        } else {
            setMensaje("❌ Incorrecto, intenta de nuevo");
        }
    };

    const nuevaPalabra = () => {
        const palabras = niveles[nivel];
        const nueva =
            palabras[Math.floor(Math.random() * palabras.length)];
        setActual(nueva);
        setRespuesta("");
        setMensaje("");
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <button onClick={onBack} style={styles.back}>
                    ← Regresar
                </button>

                <h1>Adivina la palabra</h1>

                {/* Si aún no se eligió nivel */}
                {!nivel && (
                    <div>
                        <h2>Selecciona un nivel:</h2>
                        <button style={styles.btn} onClick={() => elegirNivel("facil")}>Fácil</button>
                        <button style={styles.btn} onClick={() => elegirNivel("normal")}>Normal</button>
                        <button style={styles.btn} onClick={() => elegirNivel("dificil")}>Difícil</button>
                    </div>
                )}

                {/* Si ya hay nivel elegido */}
                {nivel && actual && (
                    <>
                        <p><strong>Pista:</strong> {actual.pista}</p>

                        <input
                            type="text"
                            value={respuesta}
                            onChange={(e) => setRespuesta(e.target.value)}
                            placeholder="Escribe la palabra"
                            style={styles.input}
                        />

                        <button onClick={verificar} style={styles.btn}>Verificar</button>

                        <p style={styles.msg}>{mensaje}</p>

                        <button onClick={nuevaPalabra} style={styles.btn}>Nueva palabra</button>
                    </>
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f0f0f0",
    },
    card: {
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        textAlign: "center",
        width: "350px",
    },
    input: {
        width: "100%",
        padding: "10px",
        fontSize: "18px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        marginTop: "10px",
        marginBottom: "15px",
    },
    btn: {
        padding: "10px 20px",
        fontSize: "18px",
        margin: "5px",
        cursor: "pointer",
        borderRadius: "8px",
        border: "none",
        background: "#4CAF50",
        color: "white",
    },
    back: {
        background: "transparent",
        border: "none",
        fontSize: "18px",
        cursor: "pointer",
        marginBottom: "15px",
    },
    msg: {
        fontSize: "20px",
        marginTop: "10px",
        fontWeight: "bold",
    },
};

export default AdivinaPalabra;
