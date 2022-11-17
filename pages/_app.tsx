import type { AppProps } from "next/app";
import { css, Global } from "@emotion/react";

import { colors, global } from "@styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${colors}
          ${global}
        `}
      />
      <Component {...pageProps} />
    </>
  );
}
