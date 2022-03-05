import "../styles/globals.css";
import axios from "axios";

export const API = axios.create({ baseURL: "http://localhost:1337" });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
