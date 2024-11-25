import axios from "axios"
import { ResqUsersList } from '../interfaces/reques.response'


export const loadUserAction = async (page: number) => {

    try {
        const { data } = await axios.get<ResqUsersList>(`https://reqres.in/api/users?page=${page}`)

        /* const { } = await axios.get<ResqUsersList>(`https://reqres.in/api/users`,
            {
                params:{
                    page:page
                }
            }
        ) */

        return data.data;
    } catch (error) {
        console.log(error);
        return [];

    }

}