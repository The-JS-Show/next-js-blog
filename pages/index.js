import Post from '../components/Post'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const { postData } = props

  return (
    <div className={styles.container}>
      <h1>The JS Show</h1>
      {/* Loop Posts */}
      <div>
          {postData.map((post)=> <Post key={post.id} title={post.title} body={post.body} /> )}
      </div>
    </div>
  )
}

Home.getInitialProps = async (context) => {
    let postData = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
    return {
        postData
    }
}
