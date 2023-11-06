class Hello extends React.Component {
    render() {              //props are immutable / read only  
        console.log(this.props);
        let goodPoints = this.props.num; 
        let presents = "*".repeat(goodPoints)  
        return (    
            <div>  
                <p>{this.props.from} says: Hello everybody!' To {this.props.to}</p>  
                <p>Good chilredn will get this much presents: {presents}</p>              
            </div>  
            
            
        )
    }
}