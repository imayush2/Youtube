import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./Redux/store";
import { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "watch", element: <WatchPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={appStore}>
      <div className="flex flex-col h-screen">
        {/* Fixed Header */}
        <Head />

        {/* Scrollable Main Section */}
        <div className="flex-1 overflow-auto">
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </Provider>
    </>
  );
}

export default App;
