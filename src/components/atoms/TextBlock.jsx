import React from "react"
import { css } from "@emotion/core"
import { media } from "src/utils/style"

const paragraphBlock = css`
font-size: 15px;
max-width: ${740 + 12 * 2}px;
margin: 32px auto;
padding: 0 12px;
line-height: 1.8;
color: #444;

&:last-child {
  margin-bottom: 0;
}

p {
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
}

@media ${media.small} {
  font-size: 14px;
}
`

export default ({children}) => <div css={paragraphBlock}>{children}</div>