"use strict";
(() => {
    let heroes = 10;
    console.log(heroes);
    const villanos = 20;
    if (heroes < villanos) {
        console.log('pierden los herores');
    }
    else {
        console.log('pierden los villanos');
    }
    heroes = Number('55A');
    console.log({ heroes });
})();
