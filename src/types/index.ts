export type StockStatus = 'Good' | 'Low' | 'Critical' | 'Out of stock';
export interface Product { id:string; name:string; category:string; sku:string; stock:number; minStock:number; purchasePrice:number; sellingPrice:number; expiry:string; status:StockStatus; }
export interface Sale { id:string; customer:string; items:number; amount:number; payment:'Cash'|'UPI'|'Card'|'Credit'; time:string; }
export interface Customer { id:string; name:string; phone:string; due:number; }
export interface Supplier { id:string; name:string; due:number; }
export interface Expense { id:string; title:string; amount:number; date:string; }
export interface Alert { id:string; level:'critical'|'warning'|'notice'; text:string; action:string; }
