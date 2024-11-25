
// Roles by my objects using interface


interface Person {
    age: number,
    firstName: string,
    lastName: string,
    address: Address
}

interface Address {
    country: string,
    houseNo: string,
    street?: string
}




export const ObjectLiterals = () => {

    const person: Person = {
        age: 34,
        firstName: 'Juan ',
        lastName: 'Guevara',
        address: {
            country: 'Ecuador',
            houseNo: '123'
        }

    }
    return (
        <>
            <h3>
                Objectos Literales
            </h3>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </>
    )
}
