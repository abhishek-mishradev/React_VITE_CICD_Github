import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import "./index.css";
import App from "./App.jsx";
// import ReduxSagaCounter from "./store2/ReduxSagaCounter.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ThemeProvider theme={theme}>
      <CssBaseline />

      <Provider store={store}> */}
        <App />
        {/* <ReduxSagaCounter /> */}
        {/* <ReduxToolkit /> */}
      {/* </Provider>
    </ThemeProvider> */}
  </StrictMode>,
);
