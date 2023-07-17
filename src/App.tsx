import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";

import { TranslateProvider } from "./hooks/translationContext";
import { Home } from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TranslateProvider>
        <Home />
      </TranslateProvider>
    </ThemeProvider>
  );
}

export default App;
