import {useState} from "react";
export default function Project({project,addTask,index,deleteTask}){
    const [name,setName]=useState("");
    function handleAdd(){
        if(name.trim().length>0){
            addTask(name,index) ;
            setName("");
        }
    }
    return(
        <main className="w-full px-10 py-20 mr-56">
            <div className="flex flex-col gap-5 border-b-4 border-stone-300 pb-3">
                <div className="flex justify-between">
                    <h1 className="text-stone-600 text-4xl font-extrabold">{project.title}</h1>
                    <button className="text-stone-700 font-normal text-xl">Delete</button>
                </div>
                <h1 className="text-stone-500 text-xl">{project.date}</h1>
                <h2 className="text-stone-600 text-xl">Learn React from group up.</h2>
                <h2 className="text-stone-600 text-xl">Start with the basics, finish with advanced knowledge.</h2>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <h1 className="text-4xl font-bold text-stone-700">Tasks</h1>
                <div className="h-11">
                    <input value={name} onChange={(event)=>setName(event.target.value)} className="border-4 bg-stone-200 w-80 h-full  p-3 focus:border-blue-800 rounded-md"/>
                    <button onClick={()=>handleAdd()} className="ml-5 text-stone-600 text-2xl">Add Task</button>
                </div>
                {project.tasks.length===0 ? (<span className="text-2xl">This project does not have any task yet.</span> ) :(
                <div className="px-6 bg-stone-100 flex gap-5 flex-col py-8">    
                    {project.tasks.map((task,idx)=>(
                        <div key={idx} className="flex justify-between">
                            <span className="text-xl">{task.name}</span>
                            <button onClick={()=>deleteTask(idx)} className="text-xl hover:text-red-700 text-black">Clear</button>
                        </div>
                    ))
                    }
                </div>)
                }
            </div>
        </main>
    )
}