import { useState } from "react";
import NewProject from "./NewProject";
import NoContent from "./NoContent";
import ProjectsSideBar from "./ProjectsSideBar";
import SelectedProject from "./SelectedProject";
import { useEffect } from "react";
import { RiMenu4Line } from "react-icons/ri";

function App() {
  // const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [projectSelected, setProjectSelected] = useState({
    selectedProjectsId: undefined,
    projects: [],
    tasks: [],
  });

  const handleToogle = () => {
    setIsOpen((open) => !open);
  };

  // useEffect(() => {
  //   localStorage.setItem("projectsComponent", JSON.stringify(projectSelected));
  // }, [projectSelected]);

  // useEffect(() => {
  //   const storedData = localStorage.getItem("projectsComponent");
  //   if (storedData) {
  //     setProjectSelected(JSON.parse(storedData));
  //   }
  // }, []);
  const handleAddTasks = (text) => {
    setProjectSelected((prevSelected) => {
      const taskId = Math.random();
      const newTasks = {
        text: text,
        projectId: prevSelected.selectedProjectsId,
        id: taskId,
      };
      return {
        ...prevSelected,
        tasks: [...prevSelected.tasks, newTasks],
      };
    });
  };

  const handleDeleteTasks = (id) => {
    setProjectSelected((prevSelected) => {
      return {
        ...prevSelected,
        tasks: prevSelected.tasks.filter((task) => task.id !== id),
      };
    });
  };

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
      tasks={projectSelected.tasks}
    />
  );

  if (projectSelected.selectedProjectsId === undefined) {
    content = <NoContent onSubmit={handleStartProjects} />;
  } else if (projectSelected.selectedProjectsId === null) {
    content = (
      <NewProject
        onStop={handleStopProjects}
        addData={handleCreateNewProjects}
        handleOpen={handleToogle}
      />
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <RiMenu4Line
        className="text-3xl font-bold ml-6 absolute top-7 bg-stone-50 md:hidden"
        onClick={() => handleToogle()}
      />
      <ProjectsSideBar
        onSubmit={handleStartProjects}
        projects={projectSelected.projects}
        onSelectedList={handleSelectedList}
        selectedListId={projectSelected.selectedProjectsId}
        classNames={
          isOpen &&
          " max-sm:translate-x-0 max-sm:w-3/4 max-sm:transition-all max-sm:duration-300"
        }
        handleClose={() => handleToogle()}
      />
      {content}
    </main>
  );
}

export default App;
