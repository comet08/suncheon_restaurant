import styles from '../styles/Restaurant.module.css'

export default function Restaurant({name, call, location, dong}) {

  return (
    <div className={styles.node}>
      <div className={styles.node_dong}>
        {dong}
      </div>
      <div className={styles.node_name}>
        {name}
      </div>
      <div className={styles.node_location}>
        {location}
      </div>
      <div className={styles.node_call}>
        {call}
      </div>
    </div>
  )
}