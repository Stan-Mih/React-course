class Hello extends React.Component {
    render() {              //props are immutable , can not change values, read only

        console.log(this.props);

        return (            
            <p>{this.props.from} says: Hello everybody!' To {this.props.to}</p>
        )
    }
}