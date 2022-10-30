import { HomeScreen } from "../../screens/Home";
import { Important } from "../../screens/Important";
import { Planned } from "../../screens/Planned";
import { AssignedToMe } from "../../screens/AssignedToMe";
import { FlaggedEmail } from "../../screens/FlaggedEmail";
import { Tasks } from "../../screens/Tasks";
export const MainScreenNavigator = [
  {
    path: "/",
    exact: true,
    screen: <HomeScreen />,
  },
  {
    path: "/home",
    exact: true,
    screen: <HomeScreen />,
  },
  {
    path: "/important",
    exact: true,
    screen: <Important />,
  },
  {
    path: "/planned",
    exact: true,
    screen: <Planned />,
  },
  {
    path: "/assignedtome",
    exact: true,
    screen: <AssignedToMe />,
  },
  {
    path: "/flaggedemail",
    exact: true,
    screen: <FlaggedEmail />,
  },
  {
    path: "/tasks",
    exact: true,
    screen: <Tasks />,
  },
];
