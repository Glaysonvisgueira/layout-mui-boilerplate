import Head from "next/head";
import { useTheme } from "@mui/material/styles";

export default function HeadTag(props) {
  const theme = useTheme();

  return (
    <Head>
      <title>{props.title}</title>
      <script async src="https://cdn.splitbee.io/sb.js"></script>
      <meta name="theme-color" content={theme.palette.background.default} />
      {/* <!-- Chrome, Firefox OS and Opera -->*/}
      <meta
        name="msapplication-navbutton-color"
        content={theme.palette.background.default}
      />
      {/* <!-- Windows Phone -->*/}
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content={theme.palette.background.default}
      />
      {/*<!-- iOS Safari -->*/}
      <meta name="description" content={props.metaDescription} />
      <meta name="keywords" content={props.keywords} />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link>
    </Head>
  );
}
