import React from "react"

import Layout from "../layout"
import SEO from "../seo"
import { css } from "@emotion/core"

import SectionHeader from "../atoms/SectionHeader"
import TextBlock from "../atoms/TextBlock"

const section = css`
  padding: 32px 0 48px;
`

const Top = () => (
  <Layout>
    <SEO title="Home" keywords={[`同人誌即売会`, `技術同人誌`, `技書博`]} />
    <section css={section}>
      <SectionHeader text="TERMS">サークル参加規約</SectionHeader>
      <TextBlock>
        <p>
          「GatsbyJSで作るモダンウェブサイト」と「netlifyで始めるサーバーレス開発」という本を自分のサークルで頒布、別サークルで合同誌を書きました。
          技術書執筆にはRe:VIEW（Tex1を人間向きにした組版ツール）がいいと聞いていたので採用することは決めていました。
        </p>
        <p>
          ただ、Re:VIEW記法に慣れることが出来ず、最初はMarkdownで執筆を行っていました。
          しかし、技術書となるとMarkdownの記法だけでは表現力が弱く、執筆序盤でRe:VIEWに移行しました。
        </p>
        <p>
          図表番号の参照や、画面のキャプションなど技術書らしさを出すための記法が揃っているので、最初からRe:VIEWを使うべきでした。
        </p>
      </TextBlock>
    </section>
  </Layout>
)

export default Top
