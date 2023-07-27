class App extends React.Component {
    render() {
        return(
            <div>
                <Hello from="Cheff" to="the Children"/>
                <Hello from="Santa" to="the deers"/>

            </div>
        )       
    }
}
ReactDOM.render(<App />, document.getElementById('root')); 