import "../styles/globals.css";

import Layout from "../components/Layout";
import SettingsContext from "../context/SettingsContext";

function MyApp({ Component, pageProps }) {
  return (
    <SettingsContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SettingsContext>
  );
}

export default MyApp;
