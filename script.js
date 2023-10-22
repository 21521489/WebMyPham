const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

const addproductbtn=document.querySelector('#addproduct-form')
addproductbtn.addEventListener("click", function(){
  document.querySelector('.addproduct-form').style.display="flex"
})
const addproductclose=document.querySelector('#addproduct-close')
addproductclose.addEventListener("click", function(){
  document.querySelector('.addproduct-form').style.display="none"
})

const adduserbtn=document.querySelector('#adduser-form')
adduserbtn.addEventListener("click", function(){
  document.querySelector('.adduser-form').style.display="flex"
})
const adduserclose=document.querySelector('#adduser-close')
adduserclose.addEventListener("click", function(){
  document.querySelector('.adduser-form').style.display="none"
})


menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});