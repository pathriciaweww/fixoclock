import React, {useEffect, useState} from 'react';
import styles from '../styles';

const Clock = () => {

    const [clockState, setClockState] = useState();

    useEffect(() => {

        setInterval(() =>{
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        },1000)
    }, [])

  return (
    <div className={`${styles.clock}`}>{clockState}
    </div>
  )
}

export default Clock
