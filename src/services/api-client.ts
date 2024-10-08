import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2ed4db9f7def4174be4e03dc20611eff'
    }
})