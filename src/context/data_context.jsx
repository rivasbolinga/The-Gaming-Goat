import React, { useEffect, useState } from 'react'

const GamesContext = React.createContext()

const GamesProvider = ({ children }) => {
  const [gamesData, setGamesData] = useState([])

useEffect(() => {
  const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3001/games');
    const jsonData = await response.json();
    setGamesData(jsonData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
fetchData();
}, [])

  // useEffect(() => {
  //   // Make an HTTP request to the JSON file
  //   var request = new XMLHttpRequest()
  //   request.open('GET', '../../public/data.json', true)
  //   request.onreadystatechange = function () {
  //     if (request.readyState === 4 && request.status === 200) {
  //       var jsonData = JSON.parse(request.responseText)
  //       setGamesData(jsonData)
  //     }
  //   }
  //   request.send()
  // }, [])

console.log(gamesData)
  return (
    <GamesContext.Provider value={gamesData}>{children}</GamesContext.Provider>
  )
}

export { GamesContext, GamesProvider }
