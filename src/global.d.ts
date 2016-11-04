declare module '*.css'
declare module '*.html'
declare module '*.svg'

declare namespace SystemJS {
  interface System {
    /**
         * Loads a module by name taking an optional normalized parent name argument.
         * Promise resolves to the module value.
         */
    import(moduleName: string, normalizedParentName?: string): Promise<any>;
    import<TModule>(moduleName: string, normalizedParentName?: string): Promise<TModule>;
  }
}

interface Window {
  __AppShell_publicPath__: any;
}

declare var __webpack_public_path__: any;
declare var System: SystemJS;

// TODO: move to app-shell-toolbox
interface AppShellAPI {
  appMountPoint: string
}
