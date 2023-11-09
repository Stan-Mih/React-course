class App extends React.Component {
	render() {    
		const styling = {
			backgroundColor : 'orange',
		}   		

		return (
			<div className="Machine"> 
			<h1 style = {styling}>Try your luck!</h1>   {/* passing style as object */}
			<Machine />
			<Machine />
			<Machine />
			</div>	            
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));