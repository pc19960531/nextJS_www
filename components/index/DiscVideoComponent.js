import { Component } from 'react'
import Modal from '../Modal'
import bg from '../../imgs/bg-video.jpg'
import playBtn from '../../imgs/video-playbtn.png'

export default class extends Component {

    state = {
        isShow: false
    }

    render() {
        const { isShow } = this.state;
        return (
            <div className="index-discvideo">
                <div>
                    <img src={playBtn} className="play-btn"
                        onClick={() => {
                            this.setState({
                                isShow: true
                            })
                        }} />
                </div>
                {
                    isShow &&
                    (<Modal
                        width={'800px'}
                        closeClick={() => {
                            this.setState({
                                isShow: false
                            })
                        }}
                    >
                        <div className="video-content">
                            <video
                                poster="../imgs/video_preview.jpg"
                                playsInline
                                autoPlay
                                muted
                                Floop
                                style={{ width: "100%" }}
                            >
                                <source src="http://pg9omf3zm.bkt.clouddn.com/background101002.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </Modal>)
                }
            </div>
        )
    }
}