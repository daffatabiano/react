import { useRoutes } from "react-router-dom";
import {routeList} from "./Routes/routes"

const App = () => {
const element = useRoutes(routeList);
  return element;
}
export default App;