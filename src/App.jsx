import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //undefined means we are doing nothing in out project
    projects: []
  });

  function handleSelectProject (id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  function handleStartAddProject () {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,  //null means we are creating a project which is not completed yet.

      }
    })
  }

  function handleCancleAddProject () {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,  //undefined means we are not creating any project.

      }
    })
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random(), //dummy id not exact bcoz its a dummy project.
      }

      return {
        ...prevState,
        selectedProjectId: undefined, //to set the previous screen after adding a project.
        projects: [...prevState.projects, newProject]
      }
    })
  }

  let content = <SelectedProject></SelectedProject>;

  if (projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancleAddProject}/> 
  } else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}
export default App;
 