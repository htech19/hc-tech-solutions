import React from 'react';
import './Index.css';

const Index = () => {
    return (
        <div className="hero-section">
            <h1>Assistência Técnica especializada Celulares & Notebooks</h1>
            <button className="ver-servicos">Ver Serviços</button>
            <section id="processo-como-funciona">
                <h2>PROCESSO - COMO FUNCIONA</h2>
                <ol>
                    <li>
                        <img src="/icons/contato.png" alt="Contato" />
                        <h3>Contato</h3>
                        <p>Entre em contato conosco para agendar um serviço.</p>
                    </li>
                    <li>
                        <img src="/icons/diagnostico.png" alt="Diagnóstico" />
                        <h3>Diagnóstico</h3>
                        <p>Realizamos um diagnóstico completo do seu aparelho.</p>
                    </li>
                    <li>
                        <img src="/icons/reparo.png" alt="Reparo" />
                        <h3>Reparo</h3>
                        <p>Consertamos seu aparelho rapidamente e com qualidade.</p>
                    </li>
                    <li>
                        <img src="/icons/entrega.png" alt="Entrega" />
                        <h3>Entrega</h3>
                        <p>Realizamos a entrega do seu aparelho pronto.</p>
                    </li>
                </ol>
            </section>
        </div>
    );
};

export default Index;
