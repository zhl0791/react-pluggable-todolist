import { PluginStore } from "react-pluggable";
import { PluginStoreAuth } from "./plugins/AuthPlugin";

export type PluginStoreWithPlugins = PluginStore & PluginStoreAuth;
