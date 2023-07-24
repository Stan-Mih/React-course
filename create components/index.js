//USING CLASS

class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>				
			</div>
		);
	}
}

//USING FUNCTION

// function Hello(){
// 	return(
// 		<div>
// 			<h1>Hello there!</h1>				
// 		</div>
// 	);
// }

ReactDOM.render(<Hello />, document.getElementById('root'));
