import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { X } from 'lucide-react';
import type { StockStatus } from '../types';
export const rupee=(n:number)=>`₹${n.toLocaleString('en-IN')}`;
export function Button({children,className='',...props}:ButtonHTMLAttributes<HTMLButtonElement>){return <button className={`btn ${className}`} {...props}>{children}</button>}
export function StatusBadge({status}:{status:StockStatus|'Cash'|'UPI'|'Card'|'Credit'}){const c=status==='Good'||status==='Cash'||status==='UPI'?'good':status==='Low'||status==='Card'?'warn':status==='Critical'||status==='Out of stock'||status==='Credit'?'bad':'good';return <span className={`badge ${c}`}>{status}</span>}
export function Modal({title,children,onClose,className=''}:{title:string;children:ReactNode;onClose:()=>void;className?:string}){return <div className="overlay" onMouseDown={onClose}><section className={`modal ${className}`} onMouseDown={e=>e.stopPropagation()}><div className="modal-head"><h3>{title}</h3><button className="icon-btn" onClick={onClose}><X size={19}/></button></div>{children}</section></div>}
export function PageHeader({title,description,action}:{title:string;description:string;action?:ReactNode}){return <div className="page-title"><div><h1>{title}</h1><p>{description}</p></div>{action}</div>}
