import axios from 'axios';


export interface FetchResponse<T> {
    count: number;
    results: T[];
  }
  
  
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'b6060ba721bd48e7acfbaed5fa431bf6'
    }
})
