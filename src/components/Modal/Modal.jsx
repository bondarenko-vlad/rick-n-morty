import React from 'react'
import styles from './Modal.module.css'

const Modal = (props) => {
  
    return(
        <div className={styles.modalWrapper}>
            <div className={styles.modal}>
                <h2>Contact</h2>
                <hr/>
                <p>eMail: vladbondareko173@gmail.com </p>
                <p>LinkedIn:<a href='https://www.linkedin.com/in/vladislav-bondarenko/'>click</a></p>
                <p>Github:<a href='https://github.com/bondarenko-vlad'>click</a> </p>
                <p>Telegram: aq_186</p>
                <button onClick={()=>props.setState(false)}>CLOSE</button>
            </div>
        </div>
    )
}
export default Modal