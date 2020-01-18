import React from 'react';
let promoCode = [16021996,1996];
class CartFooter extends React.Component{
  constructor(props){
    super(props);
    this.state = {promo: 1};
  }

  checkPromoCode = () => {
    let inputTarget = document.getElementById('promo-code');
    if(inputTarget.value === '' || promoCode.length === 0){
      return;
    }
    for(let i = 0; i < promoCode.length ; i++){
      if(+inputTarget.value === promoCode[i]){
        this.setState({promo:0.95});
        inputTarget.disabled = true;
        promoCode = [];
        document.querySelector('.discount').setAttribute('style','display:block;color:green');
        inputTarget.setAttribute('style','');
        document.querySelector('.incorrect').style.display = "none";
        return;
      }
    }
    document.querySelector('.incorrect').style.display = "block";
  }
   changeInput = (e) => {
    document.querySelector('.incorrect').style.display = "none";
  }
  render(){
    if(this.props.check){
    return (
      <section className='container'>
        <div className='promotion'>
          <label htmlFor='promo-code'>Have A Promo Code?</label>
          <input type='text' id='promo-code' onChange={(e) => this.changeInput(e)} /> <button type='button' onClick={this.checkPromoCode} />
          <p className="incorrect" style={{display: "none",color:"red"} } >Incorrect promo code</p>
        </div>
        <div className='summary'>
          <ul>
            <li>
              Subtotal <span>{Math.round(this.props.subTotal).toLocaleString()} đ</span>
            </li>
            <li>
              VAT <span>{Math.round(this.props.subTotal * 0.1).toLocaleString()} đ</span>
            </li>
            <li className="discount" style={{display: "none"}}>
             Discount <span>-{Math.round((this.props.subTotal + this.props.subTotal * 0.1) * 0.05).toLocaleString()} đ</span>
            </li>
            <li className='total'>
              Total <span>{Math.round((this.props.subTotal + this.props.subTotal * 0.1) * this.state.promo).toLocaleString()} đ</span>
            </li>
          </ul>
        </div>
        <div className='checkout'>
          <button type='button'>Check Out</button>
        </div>
      </section>
    );
    }else{
      return (
        <center>
          <h2>No product on cart</h2>
          <button onClick={this.props.shoppingNow}>
            Shopping now
          </button>
        </center>
        
      )
    }
  }
}




export default CartFooter;
