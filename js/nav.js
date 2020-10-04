// const openMenu=()=>{
//     document.querySelector("#nav").classList.add("open");
//     document.getElementById("ham-icon-img").src="./images/cross.png";
// }
// const closeMenu=()=>{
//     document.querySelector("#nav").classList.remove("open");
//     document.getElementById("ham-icon-img").src="./images/menu.png";
// }
const openCloseMenu=()=>{
    document.querySelector("#nav").classList.toggle("open");
    if (document.querySelector("#nav").classList.contains("open"))
    {
        document.getElementById("ham-icon-img").src="./images/cross.png";
    }
    else
    {
        document.getElementById("ham-icon-img").src="./images/menu.png";
    }
}