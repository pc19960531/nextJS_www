import './Header.scss'
import Link from 'next/link'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


const Header = () => (
    <div className="index-title toptitle">
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
                        <a class="nav-link">首页</a>
                    </Link>

                    <Nav.Link href="https://dev.fo">开发者</Nav.Link>
                    <Nav.Link href="https://dapp.fo">DAPP</Nav.Link>
                    <NavDropdown title="FO" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="https://wallet.fo">
                            FO 钱包
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/5b8b51baaba908441dbbfc81.html">
                            FO 兑换
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Link href='/news'>
                        <a class="nav-link">新闻</a>
                    </Link>
                    <Nav.Link href="http://bbs.fibos.io" >社区</Nav.Link>
                    <Link href='/faq'>
                        <a class="nav-link">指南</a>
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