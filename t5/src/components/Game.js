import Card from "./Card";
import {useState, useEffect} from "react";


import angular from "../assets/images/angular.svg"
import aurelia from "../assets/images/aurelia.svg"
import backbone from "../assets/images/backbone.svg"
import ember from "../assets/images/ember.svg"
import react from "../assets/images/react.svg"
import vue from "../assets/images/vue.svg"



function Game() {
  let cardNames = ["angular","aurelia","backbone","ember","react","vue"]
  let cardImg = [angular,aurelia,backbone,ember,react,vue]
  let [cardInfo, setCardInfo] = useState([])

  useEffect(()=>{
    let tempCardInfo = []
    for(let i = 0; i < 6; i++){
      tempCardInfo.push({
        id: i,
        name: cardNames[i],
        image: cardImg[i],
        order: i,
        isFlipped: false,
      })
    }
    for(let i = 0; i < 6; i++){
      tempCardInfo.push({
        id: i+10,
        name: cardNames[i],
        image: cardImg[i],
        order: i+10,
        isFlipped: false,
      })
    }
    setCardInfo(tempCardInfo)
  },[])


  let [isFreeze, setIsFreeze] = useState(false)
  let [firstCard, setFirstCard] = useState({})
  let [secondCard, setSecondCard] = useState({})
  let [correctCards, setCorrectCards] = useState([])

  let handleSelectCard = (id) =>{
    console.log(isFreeze);
    if (!isFreeze){
      if(firstCard.hasOwnProperty("id") && secondCard.hasOwnProperty("id") && firstCard.id !== secondCard.id){
        if(firstCard.name !== secondCard.name){
          setIsFreeze(true);
          setTimeout(()=>{
            setIsFreeze(false);
            setCardInfo(cardInfo.map(eCard=>{
              if(correctCards.includes(eCard.id)){
                return eCard
              }
              eCard.isFlipped = false
              return eCard
            }))
          }, 5000)
        }else{
          if(!correctCards.includes(secondCard.id) || !correctCards.includes(firstCard.id)){
            correctCards.push(firstCard.id, secondCard.id)
          }
        }
        setFirstCard({})
        setSecondCard({})
      }

      let card = cardInfo.filter(eCard=>eCard.id === id)[0]
      if(firstCard.hasOwnProperty("id")){
        setSecondCard(card)
      }else {
        setFirstCard(card)
      }
      setCardInfo(cardInfo.map(eCard=>{
        if(eCard.id === id){
          eCard.isFlipped = true
        }
        return eCard
      }))
    }
  }

  return (
    <section className="memory-game">
      {cardInfo.map(eCard=>(
         <Card card={eCard} onClick={()=>{handleSelectCard(eCard.id)}}/>
      ))}
    </section>
  );
}

export default Game;
