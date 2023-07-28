class App extends React.Component {
	render() {       		
		return (
			<div className="Machine"> 
			<h1 style = {{backgroundColor : 'orange'}}>Try your luck!</h1>
			<Machine />
			<Machine />
			<Machine />
			</div>	            
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));