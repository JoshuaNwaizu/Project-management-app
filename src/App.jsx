import { useState } from "react";
import NewProject from "./NewProject";
import NoContent from "./NoContent";
import ProjectsSideBar from "./ProjectsSideBar";
import { useId } from "react";

function App() {
  // const id = useId();
  const [projectSelected, setProjectSelected] = useState({
    selectedProjectsId: undefined,
    projects: [],
  });

  const handleStartProjects = () => {
    setProjectSelected((prevSelected) => {
      return {
        ...prevSelected,
        selectedProjectsId: null,
      };
    });
  };
  const handleStopProjects = () => {
    setProjectSelected((prevSelected) => {
      return {
        ...prevSelected,
        selectedProjectsId: undefined,
      };
    });
  };
  const handleCreateNewProjects = (projectData) => {
    setProjectSelected((prevSelected) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevSelected,
        selectedProjectsId: undefined,
        projects: [...prevSelected.projects, newProject],
      };
    });
  };

  console.log(projectSelected);

  let content;

  if (projectSelected.selectedProjectsId === undefined) {
    content = <NoContent onSubmit={handleStartProjects} />;
  } else if (projectSelected.selectedProjectsId === null) {
    content = (
      <NewProject
        onStop={handleStopProjects}
        addData={handleCreateNewProjects}
      />
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        onSubmit={handleStartProjects}
        projects={projectSelected.projects}
      />
      {content}
    </main>
  );
}

export default App;
