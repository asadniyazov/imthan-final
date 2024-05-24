import React, { useEffect, useState } from 'react'

function uselocalstorage(key,initial) {
    const [data, setdata] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) :initial)
    useEffect(() => {
     localStorage.setItem(key,JSON.stringify(data))
    }, [data,key])
    
  return [data,setdata]
}

export default uselocalstorage