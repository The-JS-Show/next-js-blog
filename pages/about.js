import MyDummy from '../.next/components/MyDummy'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <MyDummy>
        About Us
      </MyDummy>
    </div>
  )
}