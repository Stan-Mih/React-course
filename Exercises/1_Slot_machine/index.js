class App extends React.Component {
	render() {
        const style = {
            fontSize: 60,
            fontWeight: "bold"
        }
		return (
			<div>
			<p style = {style} >Slot Machines!</p>
			</div>	
            
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));