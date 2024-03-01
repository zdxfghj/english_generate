import { useEffect, useState } from "react"

const words = [
    {eng:'old', rus:"старый", category:'word'},
    {eng: 'starter', rus:'старт', category:'word'},
    {eng:'older', rus:"старый", category:'word'},
    {eng: 'start', rus:'старт', category:'word'}
]
   
    
 

function RandomWord(){
    const [string, setString] = useState("string")
    const [stringTranslate, setStringTranslate] = useState(false)
    let [timerId, setTimerId] = useState(null)
  


    function getRandom(items) {
        const i = Math.floor(Math.random()*items.length)
        console.log(items[i])
        return items[i]
      }

    function onHandleClickRandom(){
        setString(getRandom(words))
    }  

    function onHandleClickTranslate(){
        setStringTranslate(!stringTranslate)
    }

    function onHandleClickRandomTimeOut(){
        if(timerId){
            clearInterval(timerId) ;
            setTimerId(null)
        } else{
            timerId = setInterval (() => {
                setString(getRandom(words))
              }, "100");
              setTimerId(timerId)
            
        } 
           
       
    }

   useEffect(()=>{
    setString(getRandom(words))
   },[])

    return(
        <div className="container">
            <h1>{string.eng} {stringTranslate? string.rus: null}</h1>
            <div className="m-y">
                <button onClick={onHandleClickRandom} className="btn btn-random">CLick</button>
                <button onClick={onHandleClickTranslate} className="btn btn-translate">Translate</button>
                <button onClick={onHandleClickRandomTimeOut} className="btn btn-select_some">Random</button>
            </div>
            
        </div>
    )

   
}

export default RandomWord;