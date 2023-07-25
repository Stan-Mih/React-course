//EMBEDING JS EXPRESSION IN JSX
function WhatDogDoes(){            
	return( 					
		<div>							
			<h1 center >Good boy will: {actions()}</h1>	
			<img src="GoodBoy.jpg"/> 		
		</div>
	);

function actions(){
    const thingsDogDo = ["bark","eat", "poop", "vomit","retrieve"," chase"]
    const action = thingsDogDo[Math.floor(Math.random()*thingsDogDo.length)];
    return action;
}
}

ReactDOM.render(<WhatDogDoes />, document.getElementById('root'));