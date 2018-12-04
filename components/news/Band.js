import Link from 'next/link'

const band = ({ language, id, title }) => (
    <div>
        <div className="band">
            <div className="container">
                <span className="group">
                    {language.News_Center}
                </span>
            </div>
        </div>
        <div className="container">
            <ol className="breadcrumb">
                <li>
                    <Link href={`/${language.Lang}/index`}>
                        <a style={{ cursor: 'pointor', color: '#08c' }}>
                            {language.Home}
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={`/${language.Lang}/news`}>
                        <a style={{ cursor: 'pointor', color: '#08c' }}>
                            {language.News_Center}
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