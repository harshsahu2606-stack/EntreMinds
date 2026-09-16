import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
export interface ShopProfile { shopName:string; ownerName:string; location:string }
const initial:ShopProfile={shopName:'Sharma General Store',ownerName:'Ajay Sharma',location:'Indore, Madhya Pradesh'};
const ProfileContext=createContext<{profile:ShopProfile;updateProfile:(p:ShopProfile)=>void}|null>(null);
export function ProfileProvider({children}:{children:ReactNode}){const [profile,setProfile]=useState<ShopProfile>(()=>{try{return {...initial,...JSON.parse(localStorage.getItem('sgs-profile')||'{}')} }catch{return initial}});useEffect(()=>localStorage.setItem('sgs-profile',JSON.stringify(profile)),[profile]);return <ProfileContext.Provider value={{profile,updateProfile:setProfile}}>{children}</ProfileContext.Provider>}
export const useProfile=()=>{const value=useContext(ProfileContext);if(!value)throw Error('Profile provider missing');return value};
