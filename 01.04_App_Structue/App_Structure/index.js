class App extends React.Component {
	render() {
		return (
			<div>
				<h2>Hello there!</h2>			
				<Hello />
				<PuppyActions/>
			</div>	
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));