import { useAuthContext } from "../context/AuthContext"

export default function LoginPage() {



    const { isChecking, isAuthenticated, loginEmailWithPassword, logOut, user } = useAuthContext();

    if (isChecking) {
        return (<>

            <h3>  Checking</h3>

        </>)
    }


    return (
        <>

            {isAuthenticated ? <>

                <h3>Bienvenida</h3>

                {
                    JSON.stringify(user, null, 2)

                }

                <button onClick={() => logOut()} className="bg-blue-500 p-2 text-white rounded-xl mt-2">Salir</button>


            </> : (<>

                <h3>Ingresar</h3>

                <button onClick={() => loginEmailWithPassword('1234', 'juan@uce.com',)} className="bg-blue-500  p-2 text-white rounded-xl mt-2">Ingresar a la aplicacion</button>


            </>)}
        </>
    )
}

