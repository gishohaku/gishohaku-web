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
        <a href="/terms">
          サークル参加規約
        </a>
      </li>
      <li>
        <a href="/privacy">
          プライバシーポリシー
        </a>
      </li>
      <li>
        <a href="https://portal.engineers-lt.info/guideline">
          コミュニティガイドライン
        </a>
      </li>
      <li>
        <a href="/law">
          特定商取引法に基づく表記
        </a>
      </li>
      <li>
        <a href="mailto:gishohaku@engineers-lt.info">お問い合わせ</a>
      </li>
    </ul>
    <p
      css={css`
        margin: 6px 0;
        opacity: 0.8;
      `}
    >
      © <a href="https://portal.engineers-lt.info/">エンジニアの登壇を応援する会</a>
    </p>
  </footer>
)

export default Footer
