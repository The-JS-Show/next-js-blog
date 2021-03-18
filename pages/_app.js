import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      sample
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
