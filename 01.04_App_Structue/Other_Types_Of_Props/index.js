class App extends React.Component {
    render() {
        return(
            <div>
                <Hello 
                from = "Cheff" 
                to = "the Children"
                num = {5}
                data = {[1,2,3,4,5]}
                kidIsNaughty = {true}
                dogIsGoodBoy
                />
                <Hello from="Santa" to="the deers"/>

            </div>
        )       
    }
}
ReactDOM.render(<App />, document.getElementById('root')); 