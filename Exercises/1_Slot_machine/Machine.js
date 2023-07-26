function frutPicker(){     

    const fruits = ["grapes", "orange", "cherry"];     
    const randomFruit = fruits[Math.floor(Math.random()*fruits.length)];

    let fruitImgName = "";

    if (randomFruit === "grapes"){
        fruitImgName = "src/grapes.jpeg"                
    }else if(randomFruit === "orange"){
        fruitImgName =  "src/orange.jpg"       
    }else{
        fruitImgName = "src/cherry.jpg"        
    }  
    return fruitImgName;
}
