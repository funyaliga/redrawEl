'use strict';
import redrawEl from '../src/redrawEl.js';

const _btn = document.querySelector('button')

_btn.onclick = function (){
    redrawEl(_btn)
}