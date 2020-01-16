const header1Content = document.querySelector(".article__header");
header1Content.textContent = "Welcome to Cooper's blog!"

const headerAllContent = document.querySelectorAll(".article__header");

headerAllContent.classList.remove("article__header")
headerAllContent.classList.add("article__header important")

const dashedVar = document.querySelectorAll(".dashed");
dashedVar.classlist.remove("dashed");