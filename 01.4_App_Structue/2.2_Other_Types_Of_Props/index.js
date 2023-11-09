class App extends React.Component {
    render() {
        return(
            <div>
                <Hello 
                from = "Cheff"        
                to = "the Children"
                num = {5}
                data = {[1,2,3,4,5]}   // you can also pass array and boolean as props
                kidIsNaughty           // tihs boolean gets passed as true
                dogIsGoodBoy = {false}
                />
                <Hello 
                from="Santa" 
                to="the deers"
                num = {3}/>
            </div>
        )       
    }
}
ReactDOM.render(<App />, document.getElementById('root')); 