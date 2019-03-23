import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import { colors } from "src/utils/style"

import logo from "../../images/logo.png"

const Header = () => (
  <header
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      padding: 0 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    `}
  >
    <Link to='/'>
      <img src={logo} width={80}/>
    </Link>
  </header>
)

export default Header
