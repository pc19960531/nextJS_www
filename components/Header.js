
import Head from 'next/head'
import './Header.scss'

const Header = () => (
    <div className="index-title toptitle p-relative">
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/index.html">
                <span className="logo-default">
                    <img src="/imgs/logo.png" alt="" />
                </span>
            </a>

            <button className="navbar-toggler index-navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/index.html" id="Home">首页</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://dev.fo" target="_blank" id="Developer">开发者</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://dapp.fo" target="_blank">DAPP</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <span>FO</span>
                            <i className="lnr lnr-chevron-down u-fs-12 ml-1"></i>
                        </a>
                        <div className="dropdown-menu box-shadow-v2" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="https://wallet.fo" id="Wallet" target="_blank">FO 钱包</a>
                            <a className="dropdown-item" href="/5b8b51baaba908441dbbfc81.html" id="FO_Exchange">FO 兑换</a>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/news.html" id="News" target="_blank">新闻</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://bbs.fibos.io" target="_blank" id="Community">社区</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/faq.html" id="FAQ" target="_blank">指南</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <span id='Language'>中文</span>
                            <i className="lnr lnr-chevron-down u-fs-12 ml-1"></i>
                        </a>
                        <div className="dropdown-menu box-shadow-v2 language" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" id="language-zh">中文</a>
                            <a className="dropdown-item" id="language-en">English</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
)

export default Header;