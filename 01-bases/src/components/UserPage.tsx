import useUser from "../hooks/useUser";
import UserRow from "./UserRow";


export default function UserPage() {


    const { users, nexPage, previousPage } = useUser();
    console.log(users);

    return (
        <>
            <h3>usuarios</h3>


            <table className="w-[500px] bg-black rounded-xl text-white">

                <thead>
                    <tr>

                        <td>Avatar</td>
                        <td>Nombre</td>
                        <td>Email</td>


                    </tr>
                </thead>

                <tbody>

                    {users.map(user => (
                        <UserRow key={user.id} user={user} />

                    )

                    )}


                </tbody>


            </table>


            <div className="flex justify-between w-[500px] mt-2">

                <button onClick={() => nexPage()} className="p-2 bg-blue-500 rounded-xl"> Anteriores</button>
                <button onClick={() => previousPage()} className="p-2 bg-blue-500 rounded-xl"> Siguientes</button>



            </div>





        </>
    )
}
