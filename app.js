function rules() {
  document.getElementsByClassName("modal")[0].style.visibility = "visible";
  if (window.innerWidth <= 786) {
    document.getElementsByClassName("xs-size")[0].style.visibility = "visible";
  }
}
function closeModal() {
  document.getElementsByClassName("modal")[0].style.visibility = "hidden";
  if (window.innerWidth <= 786) {
    document.getElementsByClassName("xs-size")[0].style.visibility = "hidden";
  }
}
