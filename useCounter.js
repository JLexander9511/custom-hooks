import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {
    const [counter, setCounter] = useState( initialValue )

    const addOne = (sumPow = 1) => {
        setCounter( () => counter + sumPow)
    }
    const substOne = (sumPow = 1) => {
        if(counter > 0) setCounter( () => counter - sumPow)
        return
    }
    const reset = () => {
        setCounter( () => initialValue )
    }

    return {
        counter,
        addOne,
        substOne,
        reset
    }
}
