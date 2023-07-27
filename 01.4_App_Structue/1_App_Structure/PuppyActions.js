class PuppyActions extends React.Component {
	render() {
		return( 					
            <div>							
                <h1 center >Good boy will: {actions()}</h1>	                	
            </div>
        );
	}
}

function actions(){
    const thingsDogDo = ["bark","eat", "poop", "vomit","retrieve"]
    const action = thingsDogDo[Math.floor(Math.random()*thingsDogDo.length)];
    return action;
}
