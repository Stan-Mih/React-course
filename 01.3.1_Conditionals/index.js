
class WofWof extends React.Component {
	render() {		
		const actions = puppyActions();

		// let puppyTalk = "";
		// if(actions === "bark"){
		// 	puppyTalk = "I'm angry!"
		// }else if(actions === "vomit"){
		// 	puppyTalk = "I feel sick!"
		// }
		// return (		
		// 	<div>	
		// 		<h1>{puppyTalk}</h1>	
		// 		<p>{actions}</p>	
		// 	</div>
		// );

		let puppyTalk;

		if (actions === "bark"){
			puppyTalk = 
			<div>
				<h1>{actions}</h1>
				<h2>I'm angry!</h2>
			</div>
		}else if(actions === "vomit"){
			puppyTalk = 
			<div>
				<h1>{actions}</h1>
				<h2>"I feel sick!"</h2>
			</div>
		}else{
			puppyTalk = 
			<div>
				<h1>{actions}</h1>				
				<h2>I'm a good boy!</h2>
			</div>
		}
		return (
			puppyTalk
		)
	}
}function puppyActions(){
    const thingsDogDo = ["bark", "eat", "poop", "vomit", "retrieve"]
    const action = thingsDogDo[Math.floor(Math.random()*thingsDogDo.length)];
    return action;
}



ReactDOM.render(<WofWof />, document.getElementById('root'));   // render the component in HTML