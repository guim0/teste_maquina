
import styles from './styles.module.scss'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'


function Header() {

 
    return (
        <div className={styles.header}>
            <p>Oportunidades em destaque</p>
          
            <div className={styles.toogle}>
            <span>Geologalização Ativa</span>
                 <ToggleSwitch Name='Location'/>
            </div>

        </div>
    )
}

export default Header;
