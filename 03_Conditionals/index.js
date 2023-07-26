class WhatPuppyDoes extends React.Component {
	render() {
        const actions = puppyActions();
        const puppyPic = "";
        switch (actions) {
                    case "bark":
                        puppyPic = "GoodBoyBarks.jpg"
                        break;
                    case "eat":
                        puppyPic = "GoodBoyEats.jpg"
                        break;
                    case "poop":
                        puppyPic = "GoodBoyPoops.jpg"
                        break;
                    case "vomit":
                        puppyPic = "GoodBoyVomit.jpg"
                        break;
                    case "retrieve":
                        puppyPic = "GoodBoyRetreves.jpg"
                        break;
                
                    default:
                        break;
                }
		return (	
            <div>	
                <h1>Your puppy will: {actions}!</h1>	
                <img src={puppyPic} />
                
            </div>	
		);
	}
}   	
function puppyActions(){
    const thingsDogDo = ["bark", "eat", "poop", "vomit", "retrieve"]
    const action = thingsDogDo[Math.floor(Math.random()*thingsDogDo.length)];
    return action;
}



ReactDOM.render(<WhatPuppyDoes />, document.getElementById('root'));