const gettime = document.querySelector("input");
const display = document.querySelector("h1");
const btn = document.querySelector("button");

const starter = () => {
  display.innerHTML = gettime.value;
};

const start = () => {
    // display.innerHTML != 0 &&

  
  if (display.innerText !=0) {
    // display.innerHTML = 0;
    btn.disabled = true;
    gettime.disabled = true;

    const timer = setInterval(countstart, 1000);

    function countstart() {
      count = parseInt(display.innerText);
      count--;
      display.innerHTML = count;
      if (count == 0) {
        clearInterval(timer);
        btn.disabled = false;
        gettime.disabled = false;
        gettime.value = 0
        // display.innerHTML=""
      
      }
    }
  }
  else{
    alert("enter a valid number")
    gettime.value="";
    display.innerText=""
  }
};
