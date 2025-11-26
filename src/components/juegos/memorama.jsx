import React, { useState, useEffect } from "react";
import "./memorama.css";

// Valores por nivel
const LEVEL_VALUES = {
    facil: ["🐶", "🐱", "🐰", "🐸"],                 // 4 parejas
    normal: ["🐶", "🐱", "🐰", "🐸", "🐵", "🐼"],     // 6 parejas
    dificil: ["🐶", "🐱", "🐰", "🐸", "🐵", "🐼", "🦊", "🐻"] // 8 parejas
};

// Barajar array
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Crear cartas
function createDeck(values) {
    const doubled = values.concat(values).map((v, i) => ({
        id: i,
        value: v,
        matched: false,
    }));

    const shuffled = shuffleArray(doubled).map((card, index) => ({
        ...card,
        id: index,
    }));

    return shuffled;
}

export default function Memorama({ onBack }) {
    const [nivel, setNivel] = useState(null);
    const [deck, setDeck] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [locked, setLocked] = useState(false);
    const [pairsFound, setPairsFound] = useState(0);

    // Avanzar al siguiente nivel
    const avanzarNivel = () => {
        if (nivel === "facil") setNivel("normal");
        else if (nivel === "normal") setNivel("dificil");
        else if (nivel === "dificil") {
            // Juego terminado
            setNivel(null);
            onBack(); // regresar al menú principal
        }
    };

    // Cuando el usuario selecciona nivel → crear deck
    useEffect(() => {
        if (nivel) {
            const values = LEVEL_VALUES[nivel];
            setDeck(createDeck(values));
            setPairsFound(0);
            setFlipped([]);
        }
    }, [nivel]);

    // Acción al dar clic a una carta
    const handleClick = (index) => {
        if (locked) return;
        if (flipped.includes(index)) return;
        if (deck[index].matched) return;

        const newFlipped = [...flipped, index];
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            setLocked(true);
            const [a, b] = newFlipped;

            if (deck[a].value === deck[b].value) {
                setTimeout(() => {
                    setDeck(prev => {
                        const copy = [...prev];
                        copy[a].matched = true;
                        copy[b].matched = true;
                        return copy;
                    });
                    setFlipped([]);
                    setLocked(false);
                    setPairsFound(prev => prev + 1);
                }, 600);
            } else {
                setTimeout(() => {
                    setFlipped([]);
                    setLocked(false);
                }, 600);
            }
        }
    };

    // Si no hay nivel, mostrar selector
    if (!nivel) {
        return (
            <div className="selector-nivel" style={{ textAlign: "center", padding: 20 }}>
                <h2 className="titulo">Seleccione la dificultad</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 15, marginTop: 20 }}>
                    <button className="btn-nivel" onClick={() => setNivel("facil")}>
                        🟢 Fácil (4 parejas)
                    </button>

                    <button className="btn-nivel" onClick={() => setNivel("normal")}>
                        🟡 Normal (6 parejas)
                    </button>

                    <button className="btn-nivel" onClick={() => setNivel("dificil")}>
                        🔴 Difícil (8 parejas)
                    </button>
                </div>

                <button className="btn-volver" onClick={onBack} style={{ marginTop: 25 }}>
                    ⬅ Regresar
                </button>
            </div>
        );
    }

    return (
        <div className="memorama-container">

            {/* HEADER */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: 720,
                    margin: "0 auto",
                }}
            >
                <button className="btn-volver" onClick={() => setNivel(null)}>⬅ Nivel</button>

                <div style={{ textAlign: "center" }}>
                    <h2 className="titulo">🎮 Memorama – {nivel.toUpperCase()}</h2>

                    <div style={{ fontSize: 14, color: "#555", marginBottom: "25px" }}>
                        {pairsFound} / {LEVEL_VALUES[nivel].length} parejas encontradas
                    </div>
                </div>

                <button className="btn-reiniciar" onClick={() => setNivel(nivel)}>Reiniciar ↺</button>
            </div>

            {/* GRID */}
            <div className="grid" style={{ marginTop: "30px" }}>
                {deck.map((card, i) => {
                    const isOpen = flipped.includes(i) || card.matched;

                    return (
                        <div
                            key={card.id}
                            className={`carta ${isOpen ? "abierta" : ""}`}
                            onClick={() => handleClick(i)}
                        >
                            {isOpen ? card.value : "❓"}
                        </div>
                    );
                })}
            </div>

            {/* ANIMACIÓN DE FINAL */}
            {pairsFound === LEVEL_VALUES[nivel].length && (
                <div className="ganaste-overlay">
                    <div className="ganaste-box">
                        🎉 ¡Nivel completado!
                        <br /><br />

                        <button className="btn-nivel" onClick={avanzarNivel}>
                            ➜ Siguiente Nivel
                        </button>

                        <button
                            className="btn-volver"
                            style={{ marginTop: 15 }}
                            onClick={onBack}
                        >
                            ⬅ Salir al inicio
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
