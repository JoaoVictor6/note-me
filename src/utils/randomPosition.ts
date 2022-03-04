export const randomColor = (list: string[]) => {
  const index = Math.floor(Math.random() * list.length)

  return list[index] 
}