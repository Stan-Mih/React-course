class Hello extends React.Component {
    render() {              //props are immutable / read only
        return (            
            <p>{this.props.from} says: Hello everybody!' To {this.props.to}</p>
        )
    }
}