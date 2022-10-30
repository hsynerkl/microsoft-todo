import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTasks } from "./features/taskSlice";
import { AppRouter } from "./navigations";
import { Navbar } from "./screens/Navbar";
import { Sidebar } from "./screens/Sidebar";
import { StorageService } from "./services/storage.service.js";
import { useSize } from "./hooks/useSize";
import { SearchResults } from "./screens/SearchResults";

function App() {
  const [sidebarShow, setSideBarShow] = useState(true);
  const [target, setTarget] = useState();
  const dispatch = useDispatch();
  const size = useSize(target);
  const searchQuery = useSelector((state) => state.tasks.searchQuery);

  const addTasksRedux = () => {
    dispatch(updateTasks(StorageService.getSomething("taskList")));
  };

  useEffect(() => {
    if (size != undefined) {
      size.width < 555 && setSideBarShow(false);
    }
  }, [size]);

  useEffect(() => {
    let tasks = StorageService.getSomething("taskList");
    tasks == null && StorageService.setSomething("taskList", []);
    addTasksRedux();
  }, []);

  return (
    <div ref={setTarget}>
      <div className="App">
        <Navbar />
        <div className="Home">
          <Sidebar setSideBarShow={setSideBarShow} sidebarShow={sidebarShow} />
          {searchQuery == "" ? <AppRouter /> : <SearchResults />}
        </div>
      </div>
    </div>
  );
}

export default App;
