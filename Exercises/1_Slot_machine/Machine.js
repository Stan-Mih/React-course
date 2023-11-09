class Machine extends React.Component {     
    render(){
    const fruits = ["src/grapes.jpeg", "src/orange.jpg", "src/cherry.jpg"];     
    const arrOfFruit = []; 
    const imgStyle = {
        width: 50, 
        height: 50 
    } 
        for(let i = 1; i <=3; i++){
            const randomFruit = fruits[Math.floor(Math.random()*fruits.length)];
            arrOfFruit.push(randomFruit);
        }   
        if(arrOfFruit[0] === arrOfFruit[1] && arrOfFruit[0] === arrOfFruit[2]){
            return(
                <div>
                    <img style={imgStyle} src = {arrOfFruit[0]} />
                    <img style={imgStyle} src = {arrOfFruit[0]} />
                    <img style={imgStyle} src = {arrOfFruit[0]} />
                    <p>You win!</p>
                </div>
            )
        }else{
            return(
                <div>
                    <img style={imgStyle} src = {arrOfFruit[0]} />
                    <img style={imgStyle} src = {arrOfFruit[1]} />
                    <img style={imgStyle} src = {arrOfFruit[2]} />
                    <p>You lose!</p>
                </div>
            )
        }
    }     
}
