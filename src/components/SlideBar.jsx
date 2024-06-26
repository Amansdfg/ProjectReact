export default function SlideBar({projects, active, handleAddPage,isActive}){
    return(
        <aside className="w-5/12 px-8 py-16 bg-black h-full rounded-tr-xl">
            <div className="">
                <h2 className="text-gray-200 text-4xl font-bold">Your projects</h2>
                <button onClick={()=>handleAddPage(true)} className="text-gray-300 bg-gray-800 text-xl p-3 rounded-xl mt-10">+ Add Project</button>
            </div>
            <ul>
                {projects.map((project,index)=>(
                    <li key={index}>
                        <button onClick={()=>active(index)} className={ (isActive===index?'bg-stone-600 ':'') + "p-2 mt-2 text-left bg-opacity-30 w-full text-2xl text-white rounded-md"}>{project.title}</button>   
                    </li>
                ))}
            </ul>
        </aside>
    )
}