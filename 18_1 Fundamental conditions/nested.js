const money = 0;
if(money > 300){
    console.log('You have enough money');
}
else{
    if(money > 100){
        console.log('you have in a balanced position');
    }
    else {
        if(money > 0){
            console.log('You can eat Muri');
        }
        else {
            console.log('Maybe you are unnkown person');
        }
    }
}