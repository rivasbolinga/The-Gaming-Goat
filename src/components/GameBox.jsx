function GameBox({kkey}) {
    return(
        <div key={kkey} className="game-box">
            <img src={kkey.background_image} alt="" />
        </div>
    )
}
export default GameBox