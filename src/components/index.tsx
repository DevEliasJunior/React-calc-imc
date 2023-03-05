import { level } from "../helpers/imc";
import styles from '../components/GridItem.module.css';
import upImage from '../../src/assets/up.png';
import downImage from '../../src/assets/down.png';

type Props = {
    item: level
}

export const GridItem = ({item}: Props)=> {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage } alt='' width={20}></img>
            </div>
            <div className={styles.gridtitle}>{item.title}</div>
            {item.yourImc && 
                <div className={styles.yourimc}>
                    Seu IMC é {item.yourImc} kg/m²
                </div>
            }
            <div className={styles.gridinfo}>
                <>
                    IMC está entre {item.imc[0]} e {item.imc[1]}.
                </>
            </div>
        </div>
    )
};