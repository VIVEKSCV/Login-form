const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});
$(".input").focusin(function () {
  $(this).find("span").animate({ opacity: "0" }, 200);
});

$(".input").focusout(function () {
  $(this).find("span").animate({ opacity: "1" }, 300);
});

$(".login").submit(function () {
  $(this)
    .find(".submit i")
    .removeAttr("class")
    .addClass("fa fa-check")
    .css({ color: "#fff" });
  $(".submit").css({ background: "#2ecc71", "border-color": "#2ecc71" });
  $(".feedback").show().animate({ opacity: "1", bottom: "-80px" }, 400);
  $("input").css({ "border-color": "#2ecc71" });
  return false;
});
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

// https://Github.com/YasinDehfuli
// 	 https://Codepen.io/YasinDehfuli
