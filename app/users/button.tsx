'use client'
export function Button({name,onClick}:{name:string,onClick?:()=>void}){
    return  <button onClick={()=>alert("Hello World")}>{name}</button>
}