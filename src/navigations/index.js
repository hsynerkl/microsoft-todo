import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MainScreenNavigator } from "./Main/MainScreenNavigator";

export function AppRouter() {
  const [allNavigator, setAllNavigator] = useState([]);
  useEffect(() => {
    setAllNavigator(MainScreenNavigator);
  }, []);

  return (
    <>
      <div>
        <Routes>
          {allNavigator.map(function (route, index) {
            return (
              <Route
                key={index + "Navi"}
                path={route.path}
                element={route.screen}
              />
            );
          })}
          <Route path="*" element={"notfound"} />
        </Routes>
      </div>
    </>
  );
}
