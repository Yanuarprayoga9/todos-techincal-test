import React from "react";
import { Input } from "./ui/input";

interface SearchTodoProps{
    search:string;
    setSearch:(e:any)=>void
}
export const SearchTodo:React.FC<SearchTodoProps> = ({search,setSearch}) => {
    const handleChange = (e:any)=>{
        setSearch(e.target.value)
    }
  return <Input className="max-w-[800px] mx-auto" onChange={handleChange} value={search} type="text" placeholder="Search Todo" />;
};
