import * as React from "react";
import { usePluginStore, PluginStore } from "react-pluggable";

const Root = (props: any) => {
  const pluginStore: PluginStore = usePluginStore();
  let Renderer = pluginStore.executeFunction("Renderer.getRendererComponent");
  const [loggedIn, setLoggedIn] = React.useState(false);

  const onLogin = (event: any) => {
    pluginStore.executeFunction("Auth.authenticate");
    setLoggedIn(true);
  };

  const onLogout = (event: any) => {
    pluginStore.executeFunction("Auth.logout");
    setLoggedIn(false);
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center text-white">
        Todo App using Authentication as Plugin
      </h3>
      <div className="text-center text-white">
        Showcasing event handling between two plugins
      </div>
      <div className="row justify-content-center">
        {!loggedIn ? (
          <button
            className="btn btn-primary btn-lg px-4 mt-5 block"
            id="login"
            style={{ margin: "0 auto" }}
            onClick={onLogin}
          >
            Login
          </button>
        ) : (
          <button
            className="btn btn-primary btn-lg px-4 my-5 block"
            id="logout"
            style={{ margin: "0 auto" }}
            onClick={onLogout}
          >
            Logout
          </button>
        )}
      </div>

      {/*
        This is where the Todo app will be rendered
      */}
      <Renderer placement={"Todo.todos"} />
    </div>
  );
};

export default Root;
