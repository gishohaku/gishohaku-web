import React from "react"
import { css } from "@emotion/core"

import placeIcon from "./round-place.svg"
import directionsIcon from "./round-directions_run.svg"

const section = css`
  padding: 32px 0 48px;
`

const sectionHeader = css`
  font-size: 32px;
  position: relative;
  text-align: center;
  /* TODO: このmarginはsectionのpaddingと分割する */
  margin-top: 16px;
  font-family: 游明朝, "Yu Mincho", YuMincho, "Hiragino Mincho ProN",
    "Hiragino Mincho Pro", HGS明朝E;
  font-weight: 400;
  color: #1d272d;
  letter-spacing: 3px;

  &:after {
    content: attr(data-text);
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    color: #2b5773;
    opacity: 0.1;
    font-size: 76px;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    letter-spacing: 4px;
  }
`

const paragraph = css`
  font-size: 15px;
  max-width: 740px;
  margin: 32px auto;
  line-height: 1.8;
  color: #444;

  &:last-child {
    margin-bottom: 0;
  }
`

const About = () => (
  <>
    <section css={section}>
      <h2 css={sectionHeader} data-text="ABOUT">
        技書博とは
      </h2>
      <p css={paragraph}>
        「GatsbyJSで作るモダンウェブサイト」と「netlifyで始めるサーバーレス開発」という本を自分のサークルで頒布、別サークルで合同誌を書きました。
        技術書執筆にはRe:VIEW（Tex1を人間向きにした組版ツール）がいいと聞いていたので採用することは決めていました。
        <br />
        ただ、Re:VIEW記法に慣れることが出来ず、最初はMarkdownで執筆を行っていました。
        しかし、技術書となるとMarkdownの記法だけでは表現力が弱く、執筆序盤でRe:VIEWに移行しました。
        <br />
        図表番号の参照や、画面のキャプションなど技術書らしさを出すための記法が揃っているので、最初からRe:VIEWを使うべきでした。
      </p>
    </section>
    <section
      css={css(
        section,
        `
        background-color: #f7f8fa;
      `
      )}
    >
      <h2 css={sectionHeader} data-text="ACCESS">
        アクセス
      </h2>
      <div
        css={css`
          height: 450px;
          margin-top: 32px;
        `}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.795037859675!2d139.72196261596417!3d35.55876384428474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601860f87f5da4e3%3A0x8a0493a2f4accfb0!2z5aSn55Sw5Yy655Sj5qWt44OX44Op44K2UGlP!5e0!3m2!1sja!2sjp!4v1552499465825"
          frameborder="0"
          css={css`
            border: 0;
            height: 100%;
            width: 100%;
          `}
          allowfullscreen
        />
      </div>
      <div css={paragraph}>
        <p
          css={css`
            font-size: 32px;
            font-weight: bold;
            text-align: center;
          `}
        >
          大田区産業プラザPiO
        </p>
        <div
          css={css`
            background-color: #fff;
            padding: 12px;
            border-radius: 4px;
            margin-top: 12px;
          `}
        >
          <p
            css={css`
              position: relative;
              padding-left: 30px;
              margin-top: 4px;
              img {
                position: absolute;
                left: 0;
                opacity: 0.3;
              }
            `}
          >
            <img src={placeIcon} />
            東京都大田区南蒲田1丁目20-20
          </p>
          <p
            css={css`
              position: relative;
              padding-left: 30px;
              margin-top: 4px;
              img {
                position: absolute;
                left: 0;
                opacity: 0.3;
              }
            `}
          >
            <img src={directionsIcon} />
            京浜急行「京急蒲田」駅より徒歩約3分
            <br />
            JR京浜東北線、東急池上・多摩川線「蒲田」駅より徒歩約13分
          </p>
        </div>
      </div>
    </section>
    <section css={section}>
      <h2 css={sectionHeader} data-text="ENTRY">
        参加申し込み
      </h2>
      <p css={css(paragraph, `text-align: center;`)}>
        申し込み規約とサークル参加要項を必ずご覧の上お申し込みください
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScLGCwyWLVR8_Ks-ZTvurA3BDp4ms1TAem8LIpmQ5WDsvlZqA/viewform?embedded=true"
        width="640"
        height="500"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        css={css`
          height: 500px;
          margin: 0 auto;
          display: block;
        `}
      >
        読み込んでいます...
      </iframe>
    </section>
  </>
)

export default About
