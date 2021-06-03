import * as React from "react"
import { Link } from "gatsby"

const Button = ({ target, children }) => (
    <Link
        to={target}
        style={{
            color: `white`,
            textDecoration: `none`,
            padding: `0.9rem 1.4rem`,
            background: `rgb(0, 195, 255)`,
            borderRadius: `0.3rem`,
            boxShadow: `rgb(0 196 255 / 90%) 0px 13px 19px -6px`,
            transition: `all 0.5s ease 1s`,
        }}
    >
        {children}
    </Link>
)

export default Button