import { IPlugin, PluginStore, Event } from "react-pluggable";

class AuthPlugin implements IPlugin {
  namespace = "Auth";

  pluginStore!: PluginStore;

  getPluginName(): string {
    return "Auth@1.0.0";
  }
  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  activate(): void {
    this.pluginStore.addFunction("Auth.authenticate", () => {
      this.pluginStore.dispatchEvent(new Event("Auth.authenticated"));
    });

    this.pluginStore.addFunction("Auth.logout", () => {
      this.pluginStore.dispatchEvent(new Event("Auth.loggedOut"));
    });
  }

  deactivate(): void {}
}

export default AuthPlugin;

export type PluginStoreAuth = {
  executeFunction(functionName: `Auth.authenticate`): void;
  executeFunction(functionName: `Auth.logout`): void;
};
