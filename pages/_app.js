import "../styles/globals.css";
import axios from "axios";

export const API = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
