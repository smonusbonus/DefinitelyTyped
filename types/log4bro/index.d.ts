// Type definitions for log4bro 3.4
// Project: https://github.com/micro-tools/log4bro
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = log4bro;

declare class log4bro {
    constructor(...args: any[]);

    applyMiddlewareAccessLog(...args: any[]): void;

    applyMiddlewareAccessLogFile(...args: any[]): void;

    changeLogLevel(...args: any[]): void;

    createChild(...args: any[]): void;

    createLoggingDir(...args: any[]): void;

    debug(...args: any[]): void;

    error(...args: any[]): void;

    fatal(...args: any[]): void;

    info(...args: any[]): void;

    raw(...args: any[]): void;

    setGlobal(...args: any[]): void;

    trace(...args: any[]): void;

    warn(...args: any[]): void;

}

declare namespace log4bro {
        function applyMiddlewareAccessLog(...args: any[]): void;

        function applyMiddlewareAccessLogFile(...args: any[]): void;

        function changeLogLevel(...args: any[]): void;

        function createChild(...args: any[]): void;

        function createLoggingDir(...args: any[]): void;

        function debug(...args: any[]): void;

        function error(...args: any[]): void;

        function fatal(...args: any[]): void;

        function info(...args: any[]): void;

        function raw(...args: any[]): void;

        function setGlobal(...args: any[]): void;

        function trace(...args: any[]): void;

        function warn(...args: any[]): void;

}

