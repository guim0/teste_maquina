import React from 'react'
import styles from '../styles.module.scss'


function Doacao() {
    function handleClick(e) {
        e.preventDefault();
        console.log('O link foi clicado.');
      }
    return (
        <div className={styles.card}>
                <div className={styles.vaga_tipo}>
                    <span>Doação Materiais</span> 
                </div>

                <div className={styles.servico_tipo}>
                    <span>Arrecadação de alimentos para moradores de rua</span>
                    <img src="collection.svg" alt="doação" />
                </div>

                <div className={styles.city_status}>
                    <span>SP Invisível</span> 
                </div>

                <div className={styles.info_button}>
                        <div className={styles.duracao}>
                            <span>36</span> 
                            <span>Ítens <br /> Disponíveis </span>
                           
                        </div>
                        <div className={styles.btn}>
                            <button onClick={handleClick}> Doar </button>
                        </div>
                </div>

                <div className={styles.location}>
                    <span>Natal, RN</span> 
                </div>


        </div>
    )
}

export default Doacao;
