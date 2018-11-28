import '../css/Header.scss'
import '../css/common.scss'
import Link from 'next/link'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import en from '../imgs/en.png'
import zh from '../imgs/zh.png'

const Header = ({ isIndex = false, language }) => (
    <div className={`index-title toptitle ${isIndex ? '' : 'p-relative'}`}>
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Link href="/index">
                <a className="navbar-brand">
                    <span className="logo-default">
                        <img src="/imgs/logo.png" alt="" />
                    </span>
                </a>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">

                    <Link href='/index'>
                        <a className="nav-link">{language.Home}</a>
                    </Link>

                    <Nav.Link href="https://dev.fo" target="_blank">{language.Developer}</Nav.Link>
                    <Nav.Link href="https://dapp.fo" target="_blank">{language.DAPP}</Nav.Link>
                    <NavDropdown title="FO" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="https://wallet.fo" target="_blank">
                            {language.Wallet}
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/5b8b51baaba908441dbbfc81.html" target="_blank">
                            {language.FO_Exchange}
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Link href='/news'>
                        <a className="nav-link" target="_blank">{language.News}</a>
                    </Link>
                    <Nav.Link href="http://bbs.fibos.io" target="_blank">{language.Community}</Nav.Link>
                    {
                        language.Lang === "zh_cn" &&
                        <Link href='/faq'>
                            <a className="nav-link" target="_blank">{language.FAQ}</a>
                        </Link>
                    }

                    <NavDropdown title={<img src={language.Lang === "zh_cn" ? zh : en} />} id="collasible-nav-dropdown">
                        <NavDropdown.Item>
                            <img src={zh} />
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <img src={en} />
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default Header;