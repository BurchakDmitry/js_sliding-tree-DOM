document.querySelectorAll(".tree li").forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.textContent.trim(),e.firstChild.replaceWith(t),t.addEventListener("click",function(t){var n=e.querySelector("ul");n&&(n.style.display="none"===n.style.display?"block":"none"),t.stopPropagation()})});
//# sourceMappingURL=index.8ecfed07.js.map
