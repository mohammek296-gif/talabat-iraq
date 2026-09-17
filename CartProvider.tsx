'use client';
import {createContext,useContext,useEffect,useMemo,useState,ReactNode} from 'react';
export type CartItem={id:number;name:string;price:number;quantity:number;image_url?:string|null;restaurant_id?:number|null;restaurantName?:string};
type Ctx={items:CartItem[];add:(x:Omit<CartItem,'quantity'>)=>void;inc:(id:number)=>void;dec:(id:number)=>void;remove:(id:number)=>void;clear:()=>void;total:number};
const CartContext=createContext<Ctx|null>(null);
export function CartProvider({children}:{children:ReactNode}){const[items,setItems]=useState<CartItem[]>([]);useEffect(()=>{try{setItems(JSON.parse(localStorage.getItem('karbala_cart')||'[]'))}catch{}},[]);useEffect(()=>{localStorage.setItem('karbala_cart',JSON.stringify(items))},[items]);
 const add=(x:Omit<CartItem,'quantity'>)=>setItems(a=>{const old=a.find(i=>i.id===x.id);return old?a.map(i=>i.id===x.id?{...i,quantity:i.quantity+1}:i):[...a,{...x,quantity:1}]});
 const inc=(id:number)=>setItems(a=>a.map(i=>i.id===id?{...i,quantity:i.quantity+1}:i)); const dec=(id:number)=>setItems(a=>a.flatMap(i=>i.id!==id?[i]:i.quantity>1?[{...i,quantity:i.quantity-1}]:[])); const remove=(id:number)=>setItems(a=>a.filter(i=>i.id!==id)); const clear=()=>setItems([]); const total=useMemo(()=>items.reduce((s,i)=>s+i.price*i.quantity,0),[items]); return <CartContext.Provider value={{items,add,inc,dec,remove,clear,total}}>{children}</CartContext.Provider>}
export const useCart=()=>{const c=useContext(CartContext);if(!c)throw Error('CartProvider missing');return c};
