class WhatPuppyDoes extends React.Component {
	render() {
        const actions = puppyActions();   
        // const pic =   gettingImg(actions);

               
		// return (	
        //     <div>	
        //         <h1>Your puppy will: {actions}!</h1>	
        //         <p>{actions === "retrieve" 
        //             ? "Good Boy" 
        //             : "Lazy boy"}
        //         </p>
        //         {
        //             actions === "retrieve" &&
        //             <img src = "PuppyRetreves.jpg" />                    
        //         }
        //         {
        //             actions === "bark" &&
        //             <img src = "PuppyBarks.jpg" />
        //         }
        //     </div>	
		// );


        let msg;
        if(actions === "retrieve"){
           msg = <div>
                    <h2>Good Boy!</h2>
                    <h3>True retriever!</h3>
                 </div>
        }else{
            msg = <div>
                    <h2>Lazy boy!</h2>
                    <h3>Not a retreiver!</h3>
                  </div>
        }
        return (
            <div>
                <h1>Your dog does:{actions}</h1>
                {msg}
            </div>
        )

        
        // return (
        //     <div>	
        //         <h1>Your puppy will: {actions}!</h1>	
        //         <img src = {pic} />
        //     </div>
        // )
	}
}   	
function puppyActions(){
    const thingsDogDo = ["bark", "eat", "poop", "vomit", "retrieve"]
    const action = thingsDogDo[Math.floor(Math.random()*thingsDogDo.length)];
    return action;
}
// function gettingImg(input){
//     let puppyPic = "";
//     switch (input) {
//         case "bark":
//             puppyPic = "PuppyBarks.jpg"
//             break;
//         case "eat":
//             puppyPic = "PuppyEats.jpg"
//             break;
//         case "poop":
//             puppyPic = "PuppyPoops.jpg"
//             break;
//         case "vomit":
//             puppyPic = "PuppyVomit.jpg"
//             break;
//         case "retrieve":
//             puppyPic = "PuppyRetreves.jpg"
//             break;
    
//         default:
//             break;
//     }
//     return puppyPic;
// }
   


ReactDOM.render(<WhatPuppyDoes />, document.getElementById('root'));