import React from "react"
import { css } from "@emotion/core"

import { colors } from "src/utils/style"

const Footer = () => (
  <footer
    css={css`
      background-color: ${colors.gray100};
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      padding: 8px;
    `}
  >
    <ul
      css={css`
        li {
          display: inline-block;
          margin: 6px 0px;
          padding: 6px;
        }
      `}
    >
      <li>
        <a href="/">運営</a>
      </li>
      <li>
        <a href="/">コミュニティ・ガイドライン</a>
      </li>
      <li>
        <a href="/">お問い合わせ</a>
      </li>
    </ul>
    <p
      css={css`
        margin: 6px 0;
        opacity: 0.8;
      `}
    >
      © エンジニアの登壇を応援する会
    </p>
  </footer>
)

export default Footer
