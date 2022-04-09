function randomGame(){
    function stopIt(){
        clearInterval(ourInterval);
    }
    let counter = 0;
    const ourInterval = setInterval(function(){
        let num = Math.random()
        if(num > .75){
            console.log(`It took ${counter} tries to get greater than 0.75, with a result of ${num}`)
            stopIt();
        }
        counter++;        
    }, 1000);
}

randomGame()