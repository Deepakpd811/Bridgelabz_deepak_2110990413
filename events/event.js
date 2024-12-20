// Mouse Events: click, dblclick, mousemove, mouseover, mouseout
// Keyboard Events: keydown, keypress, keyup
// Form Events: submit, change, focus, blur
// Window Events: load, resize, scroll

window.addEventListener("resize", (e) => {
    alert("Dont cheat");
  });
  const boxEl = document.querySelector(".box");
  let topPos = 0;
  let leftPop = 0;

  boxEl.addEventListener("keydown", (e) => {
    const pixel = 10;
    console.log(e.key);

    if (e.key == "ArrowUp") {
      topPos -= pixel;
      boxEl.style.top = topPos + "px";
    }
    if (e.key == "ArrowDown") {
      topPos += pixel;
      boxEl.style.top = topPos + "px";
    }
    if (e.key == "ArrowLeft") {
      leftPop -= pixel;
      boxEl.style.left = leftPop + "px";
    }
    if (e.key == "ArrowRight") {
      leftPop += pixel;
      boxEl.style.left = leftPop + "px";
    }
  });