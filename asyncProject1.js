const start=document.querySelector("#start");
        console.log(start.innerHTML);
        const stop=document.querySelector("#stop");
        console.log(stop.innerHTML);

        //random Number
        function randomFromInterval(min,max){
            return Math.floor(Math.random()*(max-min+1)+min);
        }

        //change color
        let generateRandomColor=()=>{
            let num1=randomFromInterval(0,255);
            let num2=randomFromInterval(0,255);
            let num3=randomFromInterval(0,255);
            return `rgb(${num1},${num2},${num3})`        
        }

        
        const changeColor=()=>{
            document.body.style.backgroundColor=generateRandomColor();
            document.body.style.color=generateRandomColor();
        }
        let startChangingColor;
        let changeColorFunction=()=>{
            if(!startChangingColor)
            {
                startChangingColor=setInterval(changeColor,1000);
            }
            // startChangingColor=setInterval(changeColor,1000);
        }
        start.addEventListener("click",changeColorFunction);

        let stopColorChange=()=>{
            clearInterval(startChangingColor);
            startChangingColor=null;
        }
        stop.addEventListener("click",stopColorChange);
