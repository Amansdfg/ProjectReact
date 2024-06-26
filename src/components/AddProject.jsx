import {useState} from 'react';
export default function AddProject({add}){
    const[project,setProject]=useState({title:"",description:"",date:""});

    function changeProject(symbol,name){
        setProject(prevProject=>{
            return(
                {
                    ...prevProject,
                    [symbol]:name,
                }
            )
        })
    }
    return(
        <div className="w-full px-10 py-20 mr-56">
            <div id="actions" className="flex justify-end gap-10">
                <button className="text-xl">Cancel</button>
                <button onClick={()=>add(project.title,project.description,project.date)} className="text-xl bg-black px-7 py-3 text-white rounded-md">Save</button>
            </div>
            <div className="flex flex-col gap-10">
                <p>
                    <label className="block text-xl uppercase font-semibold text-stone-600">Title</label>
                    <input onChange={(event)=>changeProject("title",event.target.value)} className="border-b-slate-500 border-b-4 bg-stone-200 w-full h-10 p-3 focus:border-b-slate-900 rounded-m"/>
                </p>
                <p>
                    <label className="block text-xl uppercase font-semibold text-stone-600">Description</label>
                    <textarea onChange={(event)=>changeProject("description",event.target.value)} className="bg-stone-200 border-b-slate-400 w-full border-b-4 focus:border-b-slate-900 p-3 rounded-md" />
                </p>
                <p>
                    <label className="block text-xl uppercase font-semibold text-stone-600">Due date</label>
                    <input onChange={(event)=>changeProject("date",event.target.value)} type="date" className="bg-stone-200 border-b-slate-400 border-b-4 w-full h-10 p-3 focus:border-b-slate-900 rounded-md"/>                    
                </p>
            </div>
        </div>
    )
}