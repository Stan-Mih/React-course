//USING CLASS
// class Hello extends React.Component {
// 	render() {
// 		return (			
// 			<h1>Hello there!</h1>		// must return only one element, so wrap multiple in a "div"	
// 		);
// 	}
// }


//USING FUNCTION
function Hello(){
	return( 					
		<div>							
			<h1>GOOD BOY!</h1>	
			<img src="GoodBoy.jpg"/> 		
		</div>
	);
}
ReactDOM.render(<Hello />, document.getElementById('root'));   // render the component in HTML
 