import logo from "../assets/logo.png"
export default function Page({handleAddPage}){
    return(
        <div className="flex justify-center w-full h-96 mt-20 items-center flex-col gap-10">
            <img src={logo} className="h-24" alt='Aman'/>
            <h2 className="text-3xl font-bold text-stone-600" >No Project selected</h2>
            <h3 className="text-gray-500 text-2xl">Select a project or get started with a new one</h3>
            <button onClick={()=>handleAddPage(true)} className="bg-stone-700 p-3 text-stone-400 text-xl rounded-md">Create new project</button>
        </div>
    )
}