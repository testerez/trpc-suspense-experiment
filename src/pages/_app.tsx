import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { AppProps } from "next/app"
import { ComponentProps, Suspense } from "react"
import { trpc } from "../utils/trpc"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Suspense fallback={<h1>App loading...</h1>}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Suspense>
    </>
  )
}

export default trpc.withTRPC(MyApp)
