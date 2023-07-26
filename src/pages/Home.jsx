import GameBox from '../components/GameBox'
import './pages.css'
import '../../games.json'
import axios from 'axios';
import { useState,useEffect } from 'react';
function Home() {
const [gameName ,setGameName] = useState("")

  const API_key = "3ba5d72b5215437dbb25e3ab5bc18d46"
useEffect(()=>{
axios.get(`https://api.rawg.io/api/games?key=${API_key}&dates=2019-09-01,2019-09-30&platforms=18,1,7`)
.then((res)=>{
  setGameName(res.data)
  console.log(res.data);
})
},[])
  return (<><div className="body">

    <div className='latest'>
    <h3>Latest games</h3>
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
  </div>

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