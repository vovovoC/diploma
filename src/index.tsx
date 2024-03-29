import React, {Suspense} from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {I18nextProvider} from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store/index";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "src/app/assets/style/index.scss";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import {Loader} from 'src/app/components/Loader';
import "./app/firebase/index";
import i18n from "./i18n";

const container = document.getElementById("root")!;
const root = createRoot(container);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 1000,
    },
  },
});

root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
      <Suspense fallback={<Loader />}>
          <I18nextProvider i18n={i18n}>
          <QueryClientProvider client={queryClient}>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={1000}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </QueryClientProvider>
          </I18nextProvider>
        </Suspense>    
      </BrowserRouter>
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
