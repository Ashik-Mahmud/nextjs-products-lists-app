import { Provider } from "react-redux"
import store from "../app/store"
import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/sass/style.scss'
function MyApp({ Component, pageProps }) {
  return <>
    <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </Provider>
  </>
}

export default MyApp
