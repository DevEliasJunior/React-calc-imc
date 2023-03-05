import { useState } from 'react'
import styles from './App.module.css'
import powered from './assets/powered.png'
import { GridItem } from './components'
import leftarrow from './assets/leftarrow.png'

import { levels, CalculateImc, level } from './helpers/imc'

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [ToShow, setToShow] = useState<level | null>(null)

  const HandleClick = () => {
    if(heightField && weightField){
      setToShow(CalculateImc(heightField, weightField))
    } else {
      alert ('Preencha todos os campos!!!')
    }
  }

  const HandleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0)
  }

  return (

   <div className={styles.main}>
    <header>
      <div className={styles.headerContainer}>
        <img src={powered} alt='' width={150}></img>
      </div>
    </header>
    <div className={styles.container}>
        <div className={styles.containerLeftSaid}>
          <h2>Calcule o seu IMC.</h2>
          <p>IMC é a sigla para índice de massa corpórea, parâmetro adotado pela organização mundial da saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            type='number'
            placeholder='Digite a sua altura Ex: 1.5 (em metros.)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={ToShow ? true : false}
          />
          <input
            type='number'
            placeholder='Digite o seu peso Ex: 75kg (em Kgs)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={ToShow ? true : false}
          />

          <button onClick={HandleClick} disabled={ToShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.containerRightSaid}>
          {!ToShow &&
            <div className={styles.grid}>
              {levels.map((item, key)=> (
                <GridItem key={key} item={item}/>
              ))}
            </div>
          }
          {ToShow && 
            <div className={styles.rightBig}>
                  <div className={styles.rightArrow} onClick={HandleBackButton}>
                      <img src={leftarrow} alt='' width={20}></img>
                  </div>
                  <GridItem item={ToShow}/>  
            </div>       
          }
        </div>
    </div>
   </div>
  )
}

export default App
