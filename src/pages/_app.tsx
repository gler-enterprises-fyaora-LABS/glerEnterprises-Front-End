import type { AppProps } from "next/app";
import {ApiProvider} from "@/context/apiProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApiProvider>
            <Component {...pageProps} />
        </ApiProvider>
    );
}