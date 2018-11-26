import Link from 'next/link'

const band = ({ id, title }) => (
    <div>
        <div className="band">
            <div className="container">
                <span className="group">
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
                        新闻中心
                        </a>
                    </Link>
                </li>
                {
                    id && <li>
                        <Link href={`/newsdetail?id=${id}`}>
                            <a>
                                {title}
                            </a>
                        </Link>
                    </li>
                }
            </ol>
        </div>
    </div>
)

export default band