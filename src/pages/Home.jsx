import GameBox from '../components/GameBox'
import './pages.css'
import '../../games.json'
import axios from 'axios';
import { useState,useEffect } from 'react';
function Home() {
const [game , setGame] = useState([])

  const API_key = "3ba5d72b5215437dbb25e3ab5bc18d46"
  let page =1

  const fetchGameData = async () => {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=${API_key}&page=${page}&platforms=18,1,7`
      );
      setGame(response.data.results);
      console.log("Response Data:", response.data);
      console.log("Game State:", game);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchGameData();
  }, []);
  console.log(game);
  return (<><div className="body">

    <div className='latest'>
    <h3>Latest games</h3>
<div className='latest-games'>

{
  game?.length > 0 ? (<div className='res'>{ game.map((games)=>(<GameBox name = {games.name} picture = {games.background_image}/>
  )


  )   
 }</div>):(<></>)
}



</div>
    </div>

    <div className='latest'>
    <h3>Fighting Games</h3>
<div className='latest-games'>
<div className='res'>
  <GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
  </div>

</div>
    </div>

    <div className='latest'>
    <h3>Shooting Games</h3>
<div className='latest-games'>
<div className='res'>
  <GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
  </div>
</div>
    </div>

    <div className='latest'>
    <h3>Music Games</h3>
<div className='latest-games'> <div className='res'>
  <GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
  </div>
</div>
    </div>

    <div className='latest'>
    <h3>Platform games</h3>
<div className='latest-games'> 
<div className='res'>
  <GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
  </div>
</div>
    </div>
<div className='all'>
<h3>All games</h3>
<div className='latest-games'>
<div className='res'>
  <GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
  </div></div>
</div>

    </div></>)
}
export default Home