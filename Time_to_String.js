let tts = (ms) =>{
    let seconds = ms/1000;
    let minute=0,hour=0;
    if(seconds>59){
       while(true){
        if(seconds-60 >-1){
            minute++;
            seconds-=60;
        }
        else break;
       }
    }

    if(minute>59){
        while(true){
         if(minute-60 >-1){
             hour++;
             minute-=60;
         }
         else break;
        }
     }

    return `${hour}:${minute}:${seconds}` ;
}

export {tts};
// console.log(tts(20000000));
// console.log(tts(3600000));
