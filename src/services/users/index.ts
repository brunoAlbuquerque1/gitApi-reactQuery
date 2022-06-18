import { useQuery,UseQueryOptions} from "react-query";
import api from "../api";
import {createUseUserKey} from './keys'
import { User } from "./types";

export const useUser = (username: string, options?: UseQueryOptions<User>) =>{
    return useQuery(createUseUserKey(),
    () => api.get<User>(`/users/${username}`).then(result => result.data),
    options)
}