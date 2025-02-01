const test = () => {
  document.body.classList.remove("not-loaded");
  
 

 
  const button = document.querySelector(".btn.draw-border");
  button.style.opacity = "0";
  const text = document.querySelector(".text-container");
  text.style.display = "block";
  setTimeout(() => {
    button.style.display = "none";
  }, 500);
};
