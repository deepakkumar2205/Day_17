//want to display 10 to 1 countdown using callback hell and then happy independence day on screen.

let second=10;     //this "second" variable is the starting valiue of the countdown.
let time=1000;     //time represent one second

let h1=document.getElementById("display")

//stored arrowfunction in variable.
let calling=()=>{
    h1.innerHTML=second;
    second--;
}
//call back hell 
setTimeout(() => {
    calling();
    setTimeout(() => {
        calling();
        setTimeout(() => {
            calling();
            setTimeout(() => {
                calling();
                setTimeout(() => {
                    calling();
                    setTimeout(() => {
                        calling();
                        setTimeout(() => {
                            calling();
                            setTimeout(() => {
                                calling();
                                setTimeout(() => {
                                    calling();
                                    setTimeout(() => {
                                        calling();
                                        setTimeout(() => {
                                            calling();
                                            setTimeout(() => {
                                                h1.innerHTML="Happy Independence Day!"
                                            }, time);
                                        }, time);       
                                    }, time);                                    
                                }, time);                                
                            }, time);                            
                        }, time);
                    }, time);                    
                }, time);                
            }, time);            
        }, time);
    }, time);
}, time);