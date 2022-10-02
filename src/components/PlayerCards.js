import React, {useState, useEffect} from "react"
import ReactDOM from 'react-dom'

export default function PlayerCards({ fullList }) {
    const [listToCheck, setListToCheck] = useState([])
    const [currentScore, setCurrentScore] = useState(0)
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);    
    const shuffledList = shuffle(fullList)
    

    // useEffect(() => {
    //     setListToCheck([])
    //     console.log(listToCheck)

    // },listToCheck)

    function refreshPage() {
        window.location.reload(false)
    }


    const addToListToCheck = (e) => {
        e.preventDefault();
        if (e.target.tagName.toLowerCase() === 'div'){
            const name = e.target.children[0].innerText
            // console.log(name)
            setListToCheck([...listToCheck, name])
            listToCheck.push(name)
            // console.log(listToCheck)
            
            
        }else{
            const name = e.target.parentElement.children[0].innerText
            // console.log(name)
            setListToCheck([...listToCheck, name])
            // listToCheck.push(name)
            // console.log(listToCheck)
        }
    }


    const checkIfChosen = (e) => {
        e.preventDefault();
        if (e.target.tagName.toLowerCase() === 'div'){
            const name = e.target.children[0].innerText
            console.log(listToCheck)
            // listToCheck.forEach(nameInList => {
            //     if (nameInList === name){
            //         console.log('double')
            //         setCurrentScore(0)
            //         setListToCheck([])
            //         console.log(listToCheck)
            //     }else{
            //         setCurrentScore(currentScore + 1)
            //     }
            // }) 
            listToCheck.map(player => {
                if (player === name){
                    // console.log(name, player)
                    // console.log('double')
                    setListToCheck([])
                    alert(`you lost. your score is ${currentScore}`)
                    refreshPage()
                    
                }else{
                    setCurrentScore(currentScore + 1)
                    console.log(currentScore)
                }
            })
            
    }else{
        const name = e.target.parentElement.children[0].innerText
        console.log(listToCheck)
        listToCheck.map(player => {
            if (player === name){
                setListToCheck([])
                alert(`you lost. your score is ${currentScore}`)
                refreshPage()
            }else{
                setCurrentScore(currentScore + 1)
                console.log(currentScore)
            }
        }) 
    }

}
    


        return (
            <div className='flex-row'>
                <h3 className="own-line">Current Score: {currentScore}</h3>
                {shuffledList.map((player) => (
                    <div onClick={(e) => {
                        checkIfChosen(e)
                        addToListToCheck(e)
                        
                        
                        
                    }} key={player.name} className='player-container'>
                        <h1 >{player.name}</h1>
                        <img src={player.img} alt={player.name}></img>
                    </div>
                ))}

            </div>
        )
                }