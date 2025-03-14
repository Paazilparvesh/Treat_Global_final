import { useState } from 'react'

const useCustomState = (initialValue) => {
    
    const [state, setState] = useState(initialValue)

  return [state, setState]
}

export default useCustomState
