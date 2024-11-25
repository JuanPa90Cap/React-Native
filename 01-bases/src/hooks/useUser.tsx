import { useEffect, useState, useRef } from 'react'
import { User } from '../interfaces/reques.response'
import { loadUserAction } from '../acctions/load-user-action'

export default function useUser() {



    const [users, setusers] = useState<User[]>([])
    const currentPage = useRef(1);


    useEffect(() => {

        loadUserAction(1).then(users => setusers(users))

    }, [])


    const nexPage = async () => {


        currentPage.current++;
        const users = await loadUserAction(currentPage.current);

        if (users.length > 0) {
            setusers(users)
        } else {
            currentPage.current--;
        }


    }

    const previousPage = async () => {


        if (currentPage.current < 1) return;

        currentPage.current--;
        const users = await loadUserAction(currentPage.current);

        setusers(users)



    }


    return { users, nexPage, previousPage }
}
