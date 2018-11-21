import '../css/Header.scss'
import Link from 'next/link'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


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

                    <Nav.Link href="https://dev.fo">{language.Developer}</Nav.Link>
                    <Nav.Link href="https://dapp.fo">{language.DAPP}</Nav.Link>
                    <NavDropdown title="FO" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="https://wallet.fo">
                            {language.Wallet}
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/5b8b51baaba908441dbbfc81.html">
                            {language.FO_Exchange}
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Link href='/news'>
                        <a className="nav-link">{language.News}</a>
                    </Link>
                    <Nav.Link href="http://bbs.fibos.io" >{language.Community}</Nav.Link>
                    <Link href='/faq'>
                        <a className="nav-link">{language.FAQ}</a>
                    </Link>
                    <NavDropdown title="中文" id="collasible-nav-dropdown">
                        <NavDropdown.Item>
                            中文
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            English
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default Header;