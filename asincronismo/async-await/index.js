// sirve para poder hacer que una funcion sincrona, pueda
// acceder a los valores de otra funcion asincrona
const url_base = 'https://jsonplaceholder.typicode.com/users'

const getData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
    return error
  }
}

const showData = async () => {
  const finalData = await getData(url_base)
  return console.log(finalData)
}

showData()
// const getData = () => {
//   return fetch(url_base)
//     .then(response => response.json())
//     .then(data => data)
//     .catch(error => console.error(error))
// }

// const showData = () => {
//   const finalData = getData()
//   return finalData
// }

// console.log(showData())