class App extends React.Component {
	render() {       		
		return (
			<div>
			<h1>Try your luck!</h1>
			<Machine />
			<Machine />
			<Machine />
			</div>	            
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));