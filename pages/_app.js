
import NavBar from '../componets/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";



function MyApp({ Component, pageProps }) {
  return( 

    <>
    <NavBar/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
