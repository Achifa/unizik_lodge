const Cart = () => {
    return ( 
        <>
            

            <div className="client-lodge-cart">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-x-lg-5 g-2 p-2">
                    <div className="client-lodge-cart-bx shadow-lg">
                        <div style={{height: '40px'}}>
                            <h6 style={{float: 'left'}}>Wintess Lodge</h6>
                            <h6 style={{float: 'right', color: 'orange'}}><small>&#x20A6; </small> 120,000</h6>
                        </div>


                        <div style={{height: '40px'}}>
                            <h6 style={{float: 'left'}}>Inspection Fee</h6>
                            <h6 style={{float: 'right', color: 'orange'}}><small>&#x20A6; </small>2,000</h6>

                        </div>

                        <div style={{height: '40px'}}>
                            <h6 style={{float: 'left'}}>Charges</h6>
                            <h6 style={{float: 'right', color: 'orange'}}><small>&#x20A6; </small>120</h6>

                        </div>

                        <div style={{height: '40px'}}>
                            <h6 style={{float: 'left'}}>Discount</h6>
                            <h6 style={{float: 'right', color: 'orange'}}><small>&#x20A6; </small>5,000</h6>

                        </div>

                        <div style={{height: '40px'}}>
                            <h6 style={{float: 'left'}}>Sub-Total</h6>
                            <h6 style={{float: 'right', color: 'green'}}><small>&#x20A6; </small>117,120</h6>

                        </div>

                        <div style={{height: '60px'}}>
                            <button style={{float: 'left', outline: 'none', border: 'none', padding: '8px', borderRadius: '5px', color: '#fff', background: 'linear-gradient(-45deg, rgb(0, 47, 128) 0%, rgb(0,128,0) 100% )'}}>
                                View Lodge 
                            </button>
                            <button style={{float: 'right', outline: 'none', border: 'none', padding: '8px', borderRadius: '5px', color: '#fff', background: 'linear-gradient(-45deg, rgb(0, 47, 128) 0%, rgb(0,128,0) 100% )'}}>
                                Remove From Cart
                            </button> 
                        </div>

                        
                    </div>

                </div>

                <div className="client-checkout-button shadow">
                    <button>Pay &nbsp; <small>&#x20A6;</small> 117,120</button>
                </div>
 
            </div>
        </>
     );
}
 
export default Cart;