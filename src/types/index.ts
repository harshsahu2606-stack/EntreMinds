export type PaymentMethod='Cash'|'UPI'|'Card'|'Credit'; export type StockStatus='Good'|'Low'|'Critical'|'Out of stock';
export interface Product {id:string;name:string;category:string;brand?:string;sku:string;unit:string;stock:number;minStock:number;purchasePrice:number;sellingPrice:number;expiry:string;gst:number;supplierId?:string;active:boolean;status?:StockStatus}
export interface SaleItem {productId:string;productName:string;quantity:number;sellingPrice:number;purchasePrice:number;discount:number;subtotal:number;profit:number}
export interface Sale {id:string;invoiceNumber:string;date:string;customerId?:string;customer:string;items:SaleItem[];subtotal:number;discount:number;gst:number;total:number;payment:PaymentMethod;paidAmount:number;profit:number;time?:string}
export interface Customer {id:string;name:string;phone:string;address?:string;notes?:string;due:number;active:boolean} export interface Supplier {id:string;name:string;company?:string;phone:string;due:number;active:boolean}
export interface Expense {id:string;title:string;category:string;amount:number;date:string;payment:Exclude<PaymentMethod,'Credit'>;notes?:string} export interface Wastage{id:string;productId:string;productName:string;quantity:number;reason:string;date:string;loss:number}
export interface Alert{id:string;level:'critical'|'warning'|'notice';text:string;action:string;relatedId?:string}
export interface PaymentRecord{id:string;partyId:string;partyType:'customer'|'supplier';amount:number;payment:Exclude<PaymentMethod,'Credit'>;date:string;notes?:string}
export interface DailyClosing{id:string;date:string;actualCash:number;expectedCash:number;notes?:string}
export interface AppState {products:Product[];sales:Sale[];customers:Customer[];suppliers:Supplier[];expenses:Expense[];wastages:Wastage[];payments:PaymentRecord[];closings:DailyClosing[]}
