import React from "react"
import { css } from "@emotion/core"
import { media } from "src/utils/style"

const paragraphBlock = css`
  max-width: ${740 + 12 * 2}px;
  margin: 32px auto;
  padding: 0 12px;

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

export default ({ children }) => <div css={paragraphBlock}>{children}</div>
