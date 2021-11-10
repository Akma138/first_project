function get_random_card(cardArray){
  return cardArray.splice(Math.ceil(Math.random()*cardArray.length-1),1);
}

for(i=0;i<20;i++){
  player1.push(get_random_card(realCardsArray));
  player2.push(get_random_card(realCardsArray));
  player3.push(get_random_card(realCardsArray));
  player4.push(get_random_card(realCardsArray));
  player5.push(get_random_card(realCardsArray));
}
