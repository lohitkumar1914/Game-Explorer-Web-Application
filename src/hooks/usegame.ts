import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./UseDate";

export interface Platform{
    id:number;
    name:string;
    slug:string;
    
}

export interface Game{
    id:number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number;
}


const usegames=()=>useData<Game>('/games');

export default usegames;