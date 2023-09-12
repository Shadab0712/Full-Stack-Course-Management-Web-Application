import { Outlet } from "react-router";
import Navigator from "./Navigator";

function RootLayout() {
    return (
        <div>
            <Navigator></Navigator>
            <Outlet></Outlet>
        </div>
    );
}
export default RootLayout;