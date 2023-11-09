class Machine extends React.Component {     
    render(){
    const fruits = ["src/grapes.jpeg", "src/orange.jpg", "src/cherry.jpg"];     
    const arrOfFruit = []; 

    const imgStyle ={
        width: 50, 
        height: 50 
    } 
    {/* creating object to used as styling */}
    const win = {                          
        backgroundColor: "yellow",
        fontSize: '20px'
    }   

    const winner = arrOfFruit[0] === arrOfFruit[1] && arrOfFruit[0] === arrOfFruit[2];
   
        for(let i = 1; i <=3; i++){
            const randomFruit = fruits[Math.floor(Math.random()*fruits.length)];
            arrOfFruit.push(randomFruit);
        }        
        if(winner){
            return(
                <div>
                    <img style={imgStyle} src = {arrOfFruit[0]} />
                    <img style={imgStyle} src = {arrOfFruit[0]} />
                    <img style={imgStyle} src = {arrOfFruit[0]} />
                    <p style = {win}>You win!</p>    {/*passing style as an object */}
                </div>                               // 
            )
        }else{
            return(
                <div>
                    <img style={imgStyle} src = {arrOfFruit[0]} />
                    <img style={imgStyle} src = {arrOfFruit[1]} />
                    <img style={imgStyle} src = {arrOfFruit[2]} />
                    <p style = {{backgroundColor : 'brown'}}>You lose!</p>   {/*when passing style inline, pass in as object, Property of wich is camelCase */}
                </div>                                                        //if passing more than one property, create a vriable and put the prperties as its value
            )
        }
    }     
}
