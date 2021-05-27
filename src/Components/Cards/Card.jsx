
import React from 'react'
import styles from './styles.module.scss'
import Icon_subscribe from '../../assets/collection.svg'
import Icon_material from '../../assets/icon-service.svg' 

function Card(props) {
    const {
        level,
        subscribe_title,
        action_title,
        subscribe_available,
        subscribe_data
    } = props;

    var address = '';

    function handleClick(e) {
        e.preventDefault();
        console.log('O link foi clicado.');
    }

      if (subscribe_data.time_accept_remote === true){
        address = 'Remoto'
      }  else {
        address = subscribe_data.address.city + ', ' + subscribe_data.address.state 
      }

    return (
        <div className={styles.card}>
                <div className={styles.vaga_tipo}>
                    <span>{(level === 'materials') ? 'Doação de material' : 'Vaga de voluntariado'  }</span> 
                </div>

                <div className={styles.servico_tipo}>
                    <span>{subscribe_title}</span>
                    <img src={(level === 'materials' ? Icon_material : Icon_subscribe)} alt="serviço" />
                </div>

                <div className={styles.city_status}>
                    <span>{action_title}</span> 
                </div>

                <div className={styles.info_button}>
                        <div className={styles.duracao}>
                            <span>{subscribe_available}</span> 
                           
                        </div>
                        <div className={styles.btn}>
                            <button onClick={handleClick}>Participar</button>
                        </div>
                </div>

                <div className={styles.location}>
                    <span>{address}</span> 
                </div>


        </div>
    )
}

export default Card;