import "../styles/globals.css";

import "@fontsource/inter";
import "@aws-amplify/ui-react/styles.css";

import { Amplify } from "aws-amplify";
import { ThemeProvider } from "@aws-amplify/ui-react";

import { studioTheme } from "../ui-components";

import awsconfig from "../aws-exports";

import "../styles/reset.css";

Amplify.configure(awsconfig);

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={studioTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
