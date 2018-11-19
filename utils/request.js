import axios from 'axios'

const post = async (url, param) => {
    const res = await axios(
        {
            method: "POST",
            url,
            data: param
        }
    )
    return res.data;
}

export default post