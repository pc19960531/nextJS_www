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
                        <a style={{ cursor: 'pointor', color: '#08c' }}>
                            首页
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/news">
                        <a style={{ cursor: 'pointor', color: '#08c' }}>
                            新闻中心
                        </a>
                    </Link>
                </li>
                {
                    id &&
                    <li>
                        &nbsp;{title}
                    </li>
                }
            </ol>
        </div>
    </div>
)

export default band