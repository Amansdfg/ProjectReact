import SlideBar from "./components/SlideBar.jsx";
import AddProject from "./components/AddProject.jsx";
import Project from "./components/Project.jsx";
import Page from "./components/Page.jsx";
import { useState,useEffect } from "react";
export default function App(){
  const[projects,setProjects]=useState([]);
  const[active,setActive]=useState(null);
  const[addPage,setAddPage]=useState(false);
  useEffect(() => {
    if (addPage) {
      setActive(null);
    }
  }, [addPage]);

  function addTask(taskName,active){
      setProjects(prev=>{
        const updated=[...prev];
        updated[active].tasks.push({name:taskName});
        return updated;
      })
  }

  function addProject(titleEntered,descriptionEntered,dateEntered){
    setProjects(prevProjects=>
      [
        ...prevProjects,
        {
            title: titleEntered,
            description: descriptionEntered,
            date: dateEntered,
            tasks:[]
        }
      ]);
      setAddPage(false);
  } 
  return(
      <main className="h-screen my-8 flex">
        <SlideBar projects={projects} active={setActive} handleAddPage={setAddPage} isActive={active}/>
        {active===null && !addPage && <Page handleAddPage={setAddPage}/>}
        {addPage && <AddProject isActive={active} add={addProject}/>}
        {active!==null && !addPage && <Project index={active} addTask={addTask} project={projects[active]}/>}
      </main>
  )
}