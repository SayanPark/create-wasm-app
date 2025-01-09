<<<<<<< HEAD
import {Universe} from "wasm-game-of-life";
=======
import * as wasm from "webassembly";
>>>>>>> ec9e63f5bf16d183fdb0d9536e0b9ab582110c96

const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();
    requestAnimationFrame(renderLoop);
}

requestAnimationFrame(renderLoop);
