import { createSlice} from "@reduxjs/toolkit";
import { products } from "./Data/ProductsArray";

let iTotal = products.map(product => product.price )

let iTotalAmt = iTotal.reduce((a,p)=>{
    return a+p

})

let initialState = {
    products:products,
    totalCartItems:3,
    totalCartAmt:iTotalAmt,
    totalEachAmt:iTotal
    
}

let cartSlice = createSlice({

    name:"cart",
    initialState,
    reducers:{
        deleteProduct:(cstate,action)=>{
            
            // let deleteID = action.payload
            let {payload:deleteId} = action

            let filterItems = cstate.products.filter(product =>{
                return product.id!==deleteId
            })
            cstate.products=filterItems
           
        },
        IncreasedQty:(cstate,action)=>{

            let qtyid = action.payload
            let updateProducts = cstate.products.map((product)=>{
                
                if(product.id===qtyid){
                    
                    product.qty=product.qty+1
                    return product
                }
                return product
            })
           
            // cstate.products=updateProducts
        
        },
        DecresedProduct:(cstate,action)=>{
            let qtyid = action.payload
            let updateProducts = cstate.products.map((product)=>{
                
                if(product.id===qtyid){
                    
                    product.qty=product.qty-1
                    return product
                }
                return product
            })

        },
        CartTotal:(cstate,action)=>{
           let totalqty = cstate.products.reduce((a,p)=>
        {
            return a+p.qty

        },0)
        cstate.totalCartItems=totalqty
        },
        TotalAmt:(cstate,action)=>{
            let totalamt = cstate.products.map((product)=>{
                let amt = product.qty*product.price
                return amt
            })
            if(totalamt.length===0){
                cstate.totalCartAmt=0
            }
            else{
                let reduceamt = totalamt.reduce((a,p)=>{
                    return a+p
                })
                cstate.totalCartAmt=reduceamt
            }
          
        },
        EachAmt:(cstate,action)=>{
            let EachID = action.payload
            
            let updateProducts = cstate.products.map((product)=>{
                
                if(product.id===EachID){
                    
                   let amt = product.price+product.TotalAmt
                    product.TotalAmt = amt
                    return product
                }
                return product
                
            })
            cstate.products=updateProducts
            
           

            
        }
        
        
    }
})
export let {deleteProduct,addproduct,IncreasedQty,DecresedProduct,CartTotal,TotalAmt,EachAmt}=cartSlice.actions;
export default cartSlice.reducer