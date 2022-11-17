import { css } from "@emotion/react";

export const global = css`
  * {
    box-sizing: border-box;
    font-size: 14px;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const colors = css`
  :root {
    --white-color: #fff;
    --brand-color-100: #cbb7fb;
    --brand-color-200: #976ff7;
    --brand-color-300: #510ff2;
    --gray-color-100: #dbe2f4;
    --gray-color-200: #b4c1e3;
    --gray-color-300: #6978a0;
    --gray-color-400: #3d4666;
    --gray-color-500: #0d1942;
    --red-color-100: #ffe6e5;
    --red-color-200: #ffa6a4;
    --red-color-300: #ff443f;
    --red-color-400: #da2722;
    --bg-color-100: #fff8ef;
    --bg-color-200: #e7fbff;
    --bg-color-300: #e2e9ff;
  }
`;
