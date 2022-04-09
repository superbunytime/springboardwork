function countDown(num){
    if(num == 1){
        setTimeout(function(){console.log("DONE!")}, 1000)//will still wait one second before "DONE!"
    }
        if(num > 1){
            const ourInterval = setInterval(function(){console.log(num -= 1);
                if(num == 1){
                    setTimeout(function(){console.log("DONE!")}, 1000)//uniform time even for last output
                    stopIt();
            }}, 1000)
            
            function stopIt(){
                clearInterval(ourInterval)
            }
        }
}

//test cases
countDown(5)
countDown(7)
countDown(1)
countDown(3)
countDown(5)