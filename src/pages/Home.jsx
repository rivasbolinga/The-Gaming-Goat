import GameBox from '../components/GameBox'
import './pages.css'
function Home() {
  return (<><div className="body">

    <div className='latest'>
    <h3>Latest games</h3>
<div className='latest-games'><GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
</div>
    </div>

    <div className='latest'>
    <h3>Fighting Games</h3>
<div className='latest-games'><GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
</div>
    </div>

    <div className='latest'>
    <h3>Shooting Games</h3>
<div className='latest-games'><GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
</div>
    </div>

    <div className='latest'>
    <h3>Music Games</h3>
<div className='latest-games'><GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
</div>
    </div>

    <div className='latest'>
    <h3>Platform games</h3>
<div className='latest-games'><GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
<GameBox/>
</div>
    </div>
<div className='all'>
<h3>All games</h3>
<div className='all-games'>
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
<GameBox/></div>
</div>

    </div></>)
}
export default Home