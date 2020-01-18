import React from "react";
import "./App.css";

import CartHeader from "./CartHeader";
import CartBody from "./CartBody";
import CartFooter from "./CartFooter";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
      ]
    };
  }
  componentDidMount = () => {
    axios.get(`http://localhost:3000/products`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
      .catch(error => console.log(error));
  }
  onRemoveProduct = id => {
    
    const newProducts = this.state.products;

    // Tìm vị trí của sản phẩm cần xóa
    let index = newProducts.findIndex(product => product.id === id);

    // Kiểm tra nếu tìm thấy thì mới xóa
    if (index !== -1) {
      newProducts.splice(index, 1);
      this.setState({ products: newProducts });
    }
  };

  onChangeQuantity = (id, e) => {
    const newProducts = this.state.products;
    let newQuantity = +e.target.value;

    if (!Number.isInteger(newQuantity) || newQuantity < 0) {
      newQuantity = 0;
      e.target.value = "";
    }
    let index = newProducts.findIndex(product => product.id === id);

    if (index !== -1) {
      newProducts[index].quantity = newQuantity;
      this.setState({ product: newProducts });
    }
  };

  // TODO: Thay đổi số lượng sản phẩm

  shoppingNow = () => {
    this.setState({
      products: [
        {
          id: "a1",
          name: "Apple Watch Series 5",
          price: 11990000,
          description: "Get Apple Watch Series 5 with cellular and GPS",
          quantity: 2,
          thumbnail:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWUQ2_VW_34FR+watch-44-alum-silver-nc-5s_VW_34FR_WF_CO?wid=750&hei=712&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1572037927131,1569365637670"
        },
        {
          id: "b2",
          name: "Apple Watch Series 3 GPS",
          price: 5450000,
          description: "38mm viền nhôm dây cao su trắng MTEY2VN/A",
          quantity: 1,
          thumbnail:
            "https://cdn.fptshop.com.vn/Uploads/Originals/2018/11/15/636778799310641475_00509082-1.jpg"
        }
      ]
    });
  };

  render() {
    const products = this.state.products;

    let numberItems = 0;
    let subTotal = 0;
    let check = true;
    if(this.state.products.length === 0){
      check = false;
    }
    for (let product of products) {
      numberItems += product.quantity;
      subTotal += product.price * product.quantity;
    }

    return (
      <main>
        <CartHeader numberItems={numberItems} />

        <CartBody
          products={products}
          onRemoveProduct={this.onRemoveProduct}
          onChangeQuantity={this.onChangeQuantity}
        />

        <CartFooter
          subTotal={subTotal}
          check={check}
          shoppingNow={this.shoppingNow}
        />
      </main>
    );
  }
}

export default App;
