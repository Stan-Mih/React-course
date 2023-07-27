class App extends React.Component {
	render() {
		return (
			<div>				
				<Friend 
				name = "Gosho"
				hobbies = {["beer","snowborading","puppies"]}
				/>
				<Friend
				name = "Pesho"
				hobbies = {["tattoos", "bikes"]}
				/>
			</div>	
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));