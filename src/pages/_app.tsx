import Layout from "@/components/organisms/Layout";
import { AuthProvider } from "@/context/auth/AuthProvider";
import "@mantine/core/styles.css";

import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { createTheme, MantineProvider } from "@mantine/core";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });
  const theme = createTheme({
    /** Put your mantine theme override here */
  });
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <ToastContainer rtl={true} />
        <MantineProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AuthProvider>
          </QueryClientProvider>
        </MantineProvider>
      </I18nextProvider>
    </>
  );
}
