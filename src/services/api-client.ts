import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'b6060ba721bd48e7acfbaed5fa431bf6'
    }
})
