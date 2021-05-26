import React from "react";
import "./App.css";
import {
  createPluginStore,
  PluginProvider,
  RendererPlugin
} from "react-pluggable";
import AuthPlugin from "./plugins/AuthPlugin";
import Root from "./components/Root";
import { PluginStoreWithPlugins } from "./types";
import TodoPlugin from "./plugins/TodoPlugin";

const pluginStore: PluginStoreWithPlugins = createPluginStore();
pluginStore.install(new RendererPlugin());
pluginStore.install(new AuthPlugin());
pluginStore.install(new TodoPlugin());

function App() {
  return (
    <div>
      <PluginProvider pluginStore={pluginStore}>
        <Root />
      </PluginProvider>
    </div>
  );
}

export default App;
