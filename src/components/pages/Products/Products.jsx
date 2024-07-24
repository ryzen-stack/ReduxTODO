import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartTotal, DecresedProduct, deleteProduct, EachAmt, IncreasedQty, TotalAmt } from '../../../cartSlice'
import '../Products/Products.css'

function Products() {
    let {products,totalEachAmt} = useSelector((store)=>{return store.cart})

    let dispatch = useDispatch()
      
  return (
    <ol className='products'>
    
      {products.map(product=>{
        
        return <li key={product.id}>
           <h4>  {product.pname}  </h4>
           <h4>  ₹{product.price} </h4>
           <h4>  {product.qty} </h4>
           <h4> ₹{product.TotalAmt}</h4>
           <h4>{totalEachAmt.map(price=>{
              return <h4>{}</h4>
           })}</h4>
           
      
            <button onClick={()=>{dispatch(IncreasedQty(product.id))
              dispatch(CartTotal())
              dispatch(TotalAmt())
              dispatch(EachAmt(product.id))
            }}>+</button>
            <span><button  onClick={()=>
           { if(product.qty===1){
                   dispatch(deleteProduct(product.id))
            }
              dispatch(DecresedProduct(product.id))
              dispatch(CartTotal())
              dispatch(TotalAmt())
              dispatch(EachAmt(product.id))
              }}>-</button></span>
            <button onClick={()=>{
                dispatch(deleteProduct(product.id))
                dispatch(CartTotal())
                dispatch(TotalAmt())
              dispatch(EachAmt(product.id))
            }}>delete</button>
           
        </li>
      })}
      
    </ol>
  )
}

export default Products
