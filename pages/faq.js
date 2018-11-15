import { Component } from 'react'
import layout from '../components/Layout'
import Link from 'next/link'

class FAQ extends Component {

    render() {
        return (
            <div class="inside-container">

                <div class="band">
                    <div class="container">
                        <span class="group" id="FAQ_T">

                            指南
                </span>

                    </div>
                </div>
                <div class="container">
                    <ol class="breadcrumb">
                        <li>
                            <Link href="/index">
                                <a data-i18n-text="ToHome">首页</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/iboUnion">
                                <a data-i18n-text="IBO_U">指南</a>
                            </Link>
                        </li>
                    </ol>
                </div>
                <div class="page-body">
                    <div class="container row">
                        <div class="sidebar hidden-xs col-lg-2">
                            <div class="panel-group" id="accordion" role="tablist">

                            </div>
                        </div>
                        <div class="col-lg-10">
                            <div id="accordion">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}
export default layout(FAQ)