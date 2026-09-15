import type { LucideIcon } from 'lucide-react';
export function KpiCard({label,value,detail,icon:Icon,tone='blue'}:{label:string;value:string;detail:string;icon:LucideIcon;tone?:string}){return <article className="kpi"><div className={`kpi-icon ${tone}`}><Icon size={20}/></div><div><p>{label}</p><h3>{value}</h3><small className={detail.startsWith('-')?'down':''}>{detail}</small></div></article>}
