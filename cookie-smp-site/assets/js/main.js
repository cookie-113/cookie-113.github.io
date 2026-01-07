/* Cookie SMP - tiny nav toggle */
(function(){
  const header = document.querySelector("header");
  const btn = document.querySelector(".menu-btn");
  if(!header || !btn) return;
  btn.addEventListener("click", () => {
    const open = header.getAttribute("data-open") === "true";
    header.setAttribute("data-open", String(!open));
    btn.setAttribute("aria-expanded", String(!open));
  });
})();
