import styles from './helper.module.scss'
export default function Helper() {
  return (
    <div className={styles.container}>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSfJmJKpeVpIHUvr4nRlk75KSEYTfF5rqBnGMmFI0HQbE1-4Bw/viewform?embedded=true" 
        width="80%" 
        className={styles.iframe} >
          Cargando…
      </iframe>
    </div>
  )
} 