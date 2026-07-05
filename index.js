function diceroll(){
    const numof=document.getElementById("numof").value;
    const result=document.getElementById("result");
    const dimages=document.getElementById("dimages");
    const values=[];
    const images=[];

    for(i=0;i<numof;i++){

        const value=Math.floor(Math.random()*6)+1;
    values.push(value);
    images.push(`<img src="/images_dice/${value}.jpg" alt="dice image" width="100" height="100">`);
    }
    result.textContent=`dice roll ${values.join(", ")}`;
    dimages.innerHTML=images.join('');
    }