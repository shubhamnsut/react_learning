import React from 'react';
export default class CartItem extends React.Component{
   
  constructor(){
    // this is a constructior of the parent class/ class from this is inherited by extends
    super();
    this.state={
        title :"Phone",
        price:999,
        qty:1,
        img:''
    };
    this.increaseQuantity = this.increaseQuantity.bind(this)

  }
  // This function is called evenet handler 
 increaseQuantity=()=>{
// this setState function is inherited from the parent class which is React.Component

    //type 1 of using setState

    // this.setState((prevState)=>{
    //     return {
    //         qty:prevState.qty+1
    //     }
    // })
    // We need to bind this with this function like this     this.increaseQuantity = this.increaseQuantity.bind(this)
    // it will take object as input  
    //type 2 of using setState
    this.setState({qty:this.state.qty+1})

    // for learning
    this.setState({qty:this.state.qty+1})
    this.setState({qty:this.state.qty+1})
// react will only concider the last setState because of the concept of batching
  //  even this setState is used 3 time but react will render it only 1 time because of the concept of batching

  // but with the first type if we call it 3 times then plus will increase 3 time because react will make sure
  //that the prevState is uptodate . It also uses batching that means only the last setState will render but prevState get updated  
 }

 decreaseQuantity=()=>{
    // const qty = this.state.qty;
    // this is know as destructuring
    const {qty}= this.state;
    if(qty==0)
    {
        alert("Can not have a quantity less than 0");
        return;
    }
    else{
    this.setState((prevState)=>{
            return {

                qty:prevState.qty-1
            }
    })
}
 }

//  deleteQuantity=()=>{
//     this.setState((prevState)=>{
        
//     })
//  }

    render()
    {

        const {title, price, qty} = this.state;

        return (
            <div className="cart-item">
                <div className ="left-block">
                    <img alt="no-image" style={styles.image}/>
                </div>
                <div className="right-block">
                {/* style should be given in the form of object */}
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img  onClick={this.increaseQuantity}
                            alt='increase'
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
                            />
                        <img onClick={qty!=0?this.decreaseQuantity:alert("Quanatity can not be negative value")}
                            alt='decrease' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                            />
                        <img onClick={this.deleteQuantity}
                            alt='delete' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
                            />
                    </div>
                </div>
            </div>
        )
    }
}
// in jsx we can give styles using the objects
//here do not use - to sparate name use camel case to saparate name unlike css
const styles ={
image:{
height:110,
width:110,
borderRadius:4,
background:'#ccc'
}
}