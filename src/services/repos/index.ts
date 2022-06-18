import { useQuery,UseQueryOptions} from "react-query";
import api from "../api";
import {createUseReposKey} from './keys'
import { Repo } from "./types";

export const useRepos  = (username: string, options?: UseQueryOptions<Repo[]>) =>{
    return useQuery(createUseReposKey(),
    () => api.get<Repo[]>(`/users/${username}/repos`).then(result => result.data),
    options)
}