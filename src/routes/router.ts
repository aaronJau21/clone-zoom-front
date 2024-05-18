import { createBrowserRouter } from "react-router-dom";
import HomePage from "../home/HomePage";
import RoomPage from "../room/RoomPage";
import ZoomPage from "../zoom/ZoomPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: HomePage
    },
    {
        path: '/:code',
        Component: RoomPage
    },
    {
        path: '/room/:code',
        Component: ZoomPage
    }
])