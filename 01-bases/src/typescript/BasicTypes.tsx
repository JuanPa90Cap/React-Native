
export const BasicTypes = () => {

    const name: string = 'Juan Pablo';
    const age: number = 34;
    const isActive: boolean = true;

    const powers: string[] = ['React', 'ReactNative', 'Vue'];

    return (
        <>
            <h3>Tipos Basicos</h3>

            {name} - {age} - {isActive ? 'Activo' : 'No Activo'}
            <p>{powers.join(', ')}</p>
        </>
    )
}
