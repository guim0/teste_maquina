import React from 'react'
import styles from '../styles.module.scss'


function Arrecadacao() {
    function handleClick(e) {
        e.preventDefault();
        console.log('O link foi clicado.');
      }

return (
        <div className={styles.card}>
                <div className={styles.vaga_tipo}>
                    <span>Campanha de arrecadação</span> 
                </div>

                <div className={styles.servico_tipo}>
                    <span>Arrecadação de alimentos
                        para moradores de rua</span>
                    <img src="donation.svg" alt="doação" />
                </div>

                <div className={styles.city_status}>
                    <span>SP Invisível</span> 
                </div>

                <div className={styles.info_button}>
                        <div className={styles.duracao}>
                            <span>R$ 5.000</span> 
                            <span>Valor <br /> Esperado </span>
                           
                        </div>
                        <div className={styles.btn}>
                            <button onClick={handleClick}> Contribuir </button>
                        </div>
                </div>

                <div className={styles.location}>
                    <span>Natal, RN</span> 
                </div>


        </div>
    )
}

export default Arrecadacao;
