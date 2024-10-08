import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id:number;
    name:string;
    slug:string;
    
}

export interface game{
    id:number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number;
}

interface Fectgameresponse{
    count:number;
    results:game[];
}
const usegames=()=>{
    const [games,setGames]=useState<game[]>([]);
    const [error,setError]=useState("");
    const [isLoading ,setLoading]=useState(false);
  
    useEffect(()=>{
        const controller = new AbortController();
      setLoading(true);
      apiClient
          .get<Fectgameresponse>('/games',{signal:controller.signal})
          .then(res=>{
            setGames(res.data.results);
            setLoading(false);
          })
          .catch(err => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });

        return()=>controller. abort();
  }, []);
 
  return {games,error,isLoading};
}
export default usegames;