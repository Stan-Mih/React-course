class Hello extends React.Component {
    static defaultProps = {   // Added defult values for props. "defaultProps" is particular name that should be followed
        giftPoints : 1 ,
        from : "Stranger"
    }
    render() {              //props are immutable / read only  
      
        let gifts = this.props.giftPoints; 
        let giftsToGive = "*".repeat(gifts)  
        return (    
            <div>  
                <p>{this.props.from} says: Hello everybody!' To {this.props.to}</p>  
                <p>Good chilredn will get this much presents: {giftsToGive}</p>              
            </div>  
            
            
        )
    }
}