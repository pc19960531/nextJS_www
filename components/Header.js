import '../css/Header.scss'
import '../css/common.scss'
import Link from 'next/link'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import en from '../imgs/en.png'
import zh from '../imgs/zh.png'

const Header = ({ isIndex = false, language }) => (
    <div className={`index-title toptitle ${isIndex ? '' : 'p-relative'}`}>
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Link href={`/${language.Lang}/index`}>
                <a className="navbar-brand">
                    <span className="logo-default">
                        <img src="/imgs/logo.png" alt="" />
                    </span>
                </a>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">

                    <Link href={`/${language.Lang}/index`}>
                        <a className="nav-link">{language.Home}</a>
                    </Link>

                    <Nav.Link href={`https://dev.fo/${language.Lang}`} target="_blank">{language.Developer}</Nav.Link>
                    <Nav.Link href={`https://dapp.fo/${language.Lang}`} target="_blank">{language.DAPP}</Nav.Link>
                    <NavDropdown title="FO" id="collasible-nav-dropdown">
                        <Link href={`https://wallet.fo/${language.Lang}`} >
                            <a className="dropdown-item" target="_blank"> {language.Wallet}</a>
                        </Link>
                        <Link href={`/${language.Lang}/newsdetail/5b8b51baaba908441dbbfc81`}>
                            <a className="dropdown-item" target="_blank"> {language.FO_Exchange}</a>
                        </Link>
                    </NavDropdown>
                    <Link href={`/${language.Lang}/news`}>
                        <a className="nav-link" target="_blank">{language.News}</a>
                    </Link>
                    <Nav.Link href="http://bbs.fibos.io" target="_blank">{language.Community}</Nav.Link>
                    {
                        language.Lang === "zh-cn" &&
                        <Link href='/zh-cn/faq'>
                            <a className="nav-link" target="_blank">{language.FAQ}</a>
                        </Link>
                    }

                    <NavDropdown title={<img src={language.Lang === "zh-cn" ? zh : en} />} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/zh-cn/index">
                            <img src={zh} />
                            <span className="language_span">中文</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/en-us/index">
                            <img src={en} />
                            <span className="language_span">English</span>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default Header;