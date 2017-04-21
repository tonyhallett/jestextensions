///<reference types="jest"/>

declare namespace JestExtensions {

    interface ItDetail {
        description: string,
        arguments: Array<any>
    }
    interface ParameterizedTest {
        (...argsAndDone: any[]): any
    }
    
    var matchers: {
        allObjectsContaining: (received: {}, argument: {}) => { message: () => string, pass: boolean}
    }
    function its(itDetails: Array<ItDetail>, test: ParameterizedTest): void
    function pits(test: ParameterizedTest): void;
    function xpits(test: ParameterizedTest): void;

    function xpit(description: string, ...args: Array<any>): void
    function pit(description: string, ...args: Array<any>): void
    function fpit(description: string, ...args: Array<any>): void
    //copied from jest 
    function xbeforeAll(fn: jest.ProvidesCallback): any;
    function xafterAll(fn: jest.ProvidesCallback): any;

}
export = JestExtensions;
