class Friend extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.name}</p>                
                <ul>                    
                    {(this.props.hobbies.map(el => <li>{el}</li>))}                   
                </ul>
            </div>
        );
    }
}

