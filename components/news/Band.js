import Link from 'next/link'

const band = () => (
    <div>
        <div className="band">
            <div className="container">
                <span className="group" data-i18n-text="News">
                    新闻中心
                        </span>
            </div>
        </div>
        <div className="container">
            <ol className="breadcrumb">
                <li>
                    <Link href="/index">
                        <a>
                            首页
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/news">
                        <a>
                            新闻
                        </a>
                    </Link>
                </li>
            </ol>
        </div>
    </div>
)

export default band