/* globals svg4everybody*/
import { initMap } from './google-map.js';
import { mouseParallax, scrollParallax } from './parallax.js';
import { waypoint } from './waypoint-animation.js';

window.onload = () => {

    const arr = ['a', 34, 'd'];

    arr.includes('d') ? console.log('ES6 includes work') : 0;

    async function foo() {
        await bar();
    }

    function bar() {
        console.log('ES6 async functions work!');
    }

    foo();
}