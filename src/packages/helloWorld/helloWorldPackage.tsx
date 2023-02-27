import React from 'react';
import { EntryPoint } from 'repluggable';
import { HelloWorld } from './helloWorldComponent';
import { MainViewAPI } from "../mainView";

export const HelloWorldPackage: EntryPoint[] = [{
    name: 'HELLO_WORLD',

    getDependencyAPIs() {
        return [MainViewAPI];
    },

    async extend(shell) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        shell.getAPI(MainViewAPI).contributeComponent(shell, {component: () => <HelloWorld/>});
    }
}];