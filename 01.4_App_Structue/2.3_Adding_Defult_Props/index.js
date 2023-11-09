class App extends React.Component {
    render() {
        return(
            <div>
                <Hello                 
                to = "the Children"
                giftPoints = {5}                
                kidIsGood = {true}
                
                />
                <Hello 
                from="Santa" 
                to="the deers"
                />

            </div>
        )       
    }
}
ReactDOM.render(<App />, document.getElementById('root')); 