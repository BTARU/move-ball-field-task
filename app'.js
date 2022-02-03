"use strict";

let fieldCoords = field.getBoundingClientRect();

field.addEventListener("click", function (event) {
    let MoveToleft = event.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth / 2;
    let MoveTotop = event.clientY - fieldCoords.top - field.clientTop - ball.offsetHeight / 2;
    if (MoveToleft < 0) MoveToleft = 0;
    if (MoveTotop < 0) MoveTotop = 0;
    if (MoveToleft > field.clientWidth - ball.offsetWidth / 2 - field.clientLeft * 2) {
        MoveToleft = field.clientWidth - ball.offsetWidth / 2 - field.clientLeft * 2;
    }
    if (MoveTotop > field.clientHeight - ball.offsetHeight / 2 - field.clientTop * 2) {
        MoveTotop = field.clientHeight - ball.offsetHeight / 2 - field.clientTop * 2;
    }

    ball.style.left = MoveToleft + "px";
    ball.style.top = MoveTotop + "px";
});
