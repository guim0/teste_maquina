import React from 'react'
import styles from './styles.module.scss'


function Card(props) {
    const { 
        kind_job,
        title, 
        title_icon, 
        project, 
        hourly_load, 
        how_long ,
        contributtion,
        locale } = props;

    function handleClick(e) {
        e.preventDefault();
        console.log('O link foi clicado.');
      }


    return (
        <div className={styles.card}>
                <div className={styles.vaga_tipo}>
                    <span>{kind_job}</span> 
                </div>

                <div className={styles.servico_tipo}>
                    <span>{title}</span>
                    <img src={title_icon} alt="serviço" />
                </div>

                <div className={styles.city_status}>
                    <span>{project}</span> 
                </div>

                <div className={styles.info_button}>
                        <div className={styles.duracao}>
                            <span>{hourly_load}</span> 
                            <span>{how_long} </span>
                           
                        </div>
                        <div className={styles.btn}>
                            <button onClick={handleClick}>{contributtion}</button>
                        </div>
                </div>

                <div className={styles.location}>
                    <span>{locale}</span> 
                </div>


        </div>
    )
}

export default Card;
