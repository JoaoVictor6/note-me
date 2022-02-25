import { useEffect, useState } from "react"

type UseLocalStorageReturn<T> = [
  T, 
  React.Dispatch<React.SetStateAction<T>>
]

export function useLocalStorage<T = string>(key: string, initValue?:T ): UseLocalStorageReturn<T>{
  const [value, setValue] = useState<T>(() => {
    const value = localStorage.getItem(key)
    if(!value) return initValue
    if(typeof value === 'object'){
      const parsedValue = JSON.parse(value)
  
      return parsedValue
    }
    return value
  })

  useEffect(() => {
    if(typeof value === 'object'){
      localStorage.setItem(key, JSON.stringify(value))
    }
    localStorage.setItem(key, String(value))
  }, [value])

  // const sanitizeSetValue = (value: T) => {
  //   setValue(value)
  // }

  return [value, setValue]
}