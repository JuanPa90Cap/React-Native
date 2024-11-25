import { User } from "../interfaces/reques.response"

interface Props {

    user: User;
}




export default function UserRow({ user }: Props) {
    return (
        <tr className="p-2">

            <td>
                <img src={user.avatar} alt="Avatar" className="rounded-full w-4" />


            </td>
            <td>


                {user.first_name}  {user.last_name}

                {/* {'Juan'}    {'Guevara'} */}


            </td>
            <td>
                {user.email}
                {/*   {'juan@gmail.com'} */}
            </td>


        </tr>
    )
}
