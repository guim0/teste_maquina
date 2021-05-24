import React from 'react'
import styles from '../styles.module.scss'


function Voluntariado() {

    function handleClick(e) {
        e.preventDefault();
        console.log('O link foi clicado.');
      }


    return (
        <div className={styles.card}>
                <div className={styles.vaga_tipo}>
                    <span>Vaga de voluntariado</span> 
                </div>

                <div className={styles.servico_tipo}>
                    <span>Arrecadação de alimentos para moradores de rua</span>
                    <img src="icon-service.svg" alt="serviço" />
                </div>

                <div className={styles.city_status}>
                    <span>SP Invisível</span> 
                </div>

                <div className={styles.info_button}>
                        <div className={styles.duracao}>
                            <span>2-6</span> 
                            <span>Horas <br /> Semana </span>
                           
                        </div>
                        <div className={styles.btn}>
                            <button onClick={handleClick}> Participar </button>
                        </div>
                </div>

                <div className={styles.location}>
                    <span>Natal, RN</span> 
                </div>


        </div>
    )
}

export default Voluntariado;
