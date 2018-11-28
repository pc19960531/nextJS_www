import Link from 'next/link'

export default ({ language }) => (
    <div>
        <div className="index-banner">
            <div className="banner-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-4 bottom-left">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <h5 id="FIBOS">{language.FIBOS}</h5>
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)" className="connectus">
                                                <img src="../imgs/wx-qr.jpeg" className="wxqrimg" />
                                                <span id="ContactUs_f">{language.ContactUs}</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="../#roadmap">{language.Roadmap_f}</a>
                                        </li>
                                        <li>
                                            <a href="../#coo">{language.Partners_f}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <h5>{language.Recommended}</h5>
                                    <ul>
                                        <li>
                                            <a href="https://dev.fo" target="_blank">{language.Developer}</a>
                                        </li>
                                        <li>
                                            <a href="https://dapp.fo" target="_blank">{language.DAPP}</a>
                                        </li>
                                        <li>
                                            <a href="https://wallet.fo" target="_blank" id="FOWallet_f">{language.Wallet}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <h5>
                                        {language.Help_f}
                                    </h5>
                                    <ul>
                                        <li>
                                            <a href="../5b8b51baaba908441dbbfc81.html" target="_blank">
                                                {language.FO_Exchange}
                                            </a>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <a>{language.FAQ}</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-8 col-xs-12 bottom-right">
                            <div className="row">
                                <div className="col-sm-4 col-xs-12">
                                    <img src="/imgs/logo.png" />
                                </div>
                                <div className="col-sm-8 col-xs-12">
                                    <div className="toptext">
                                        {language.Make_f}
                                    </div>
                                    <div className="downtext" id="FIBOS_F">
                                        {language.Easy}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

        <footer>
            <div className="index-footer container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="footer-copyright">
                            Copyright © 2018
                            FIBOS
                            FOUNDATION
                            LTD
                            All
                            Rights Reserved
                    </div>
                    </div>
                    {
                        language.Lang === "zh_cn" &&
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <ul className="social-media">
                                <li><a href="https://weibo.com/u/6563835901?" target="_blank"><img src="/imgs/wb.png" alt="" /></a></li>
                                <li><a className="qrcodeContainer" href="javascript:void(0)"><img src="/imgs/wechat.png" alt="" />
                                    <img className="qrcodeImg" src="/imgs/qrcode.jpeg" alt="" /></a></li>
                                <li><a href="https://twitter.com/fibos_io" target="_blank"><img src="/imgs/twitter.png" alt="" /></a></li>
                                <li><a href="https://t.me/FIBOSIO" target="_blank"><img src="/imgs/telegram.png" alt="" /></a></li>
                                <li><a href="https://github.com/FIBOSIO" target="_blank"><img src="/imgs/github.png" alt="" /></a></li>

                            </ul>
                        </div>
                    }
                </div>
            </div>
        </footer>
    </div>
)