//USING CLASS

class Hello extends React.Component {
	render() {
		return (			
			<h1>Hello there!</h1>			
		);
	}
}

//USING FUNCTION

// function Hello(){
// 	return(
// 		<div>							// must return only one element, so wrap multiple in a "div"
// 			<h1>Hello there!</h1>	
//			<h1>Hello there!</h1>	
// 		</div>
// 	);
// }

ReactDOM.render(<Hello />, document.getElementById('root'));   // render the component in HTML
 