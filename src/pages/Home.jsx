import GameBox from '../components/GameBox'
import './pages.css'
import '../../games.json'
function Home() {
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