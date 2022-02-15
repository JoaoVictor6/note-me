import { useEffect, useState } from "react"

type UseLocalStorageReturn<T> = [
  T, 
  React.Dispatch<React.SetStateAction<T>>
]

export function useLocalStorage<T = string>(key: string): UseLocalStorageReturn<T>{
  const [value, setValue] = useState<T>(() => {
    const value = localStorage.getItem(key)
    if(!value) return ''
    if(typeof value === 'object'){
      const parsedValue = JSON.parse(value)
  
      return parsedValue
    }
    return value
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  const sanitizeSetValue = (value: T) => {
    setValue(value)
  }

  return [value, setValue]
}