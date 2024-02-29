import { useState } from "react";
import NewProject from "./NewProject";
import NoContent from "./NoContent";
import ProjectsSideBar from "./ProjectsSideBar";
import SelectedProject from "./SelectedProject";

function App() {
  // const id = useId();
  const [projectSelected, setProjectSelected] = useState({
    selectedProjectsId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTasks = () => {};
  const handleDeleteTasks = () => {};

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

  const handleSelectedList = (id) => {
    setProjectSelected((prevSelected) => {
      return {
        ...prevSelected,
        selectedProjectsId: id,
      };
    });
  };

  const handleDeleteItems = () => {
    setProjectSelected((prevSelected) => {
      return {
        ...prevSelected,
        selectedProjectsId: undefined,
        projects: prevSelected.projects.filter(
          (project) => project.id !== prevSelected.selectedProjectsId,
        ),
      };
    });
  };
  const selectedList = projectSelected.projects.find(
    (project) => project.id === projectSelected.selectedProjectsId,
  );

  let content = (
    <SelectedProject
      project={selectedList}
      onDelete={handleDeleteItems}
      onAddTasks={handleAddTasks}
      onDeleteTasks={handleDeleteTasks}
    />
  );

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
        onSelectedList={handleSelectedList}
      />
      {content}
    </main>
  );
}

export default App;
