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

declare var System: SystemJS.System;

// TODO: move to app-shell-toolbox
interface AppShellAPI {
  system: {
    mountPoint: string;
  }
}
