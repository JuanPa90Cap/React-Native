import { useContext, useState } from "react"


export const useCounter = () => {

    const [count, setcount] = useState<number>(10)

    const increaseBy = (value: number) => {

        setcount(count + value)

    }
    return { count, increaseBy }
}
