let menu = document.getElementsByClassName('menu')[0];

function toggleMenu() {
  if (menu.className === "menu") {
    menu.className += " open";
  } else {
    menu.className = "menu";
  }
}
		function valid(form){
			var fail = false;
			var name = form.name.value;
			var email = form.email.value;
			var password = form.password.value;
			var rePassword = form.rePassword.value;
			var state = form.state.value;

			if(name == "" || name == " ")
				fail = "не ввели имя";
			else if (email == "")
				fail = "не ввели почту"
			else if (email.split('@').length - 1 ==0)
				fail = "Вы ввели почту неверно";
			else if(password == "")
				fail = "не ввели пароль";
			else if(password != rePassword)
				fail = "пароль не совпадает";
			else if(state == "")
				fail = "укажите пол";

			else 
				regOpen.style.display = "none"
			if(fail){
				alert(fail);
			}

			} 

let reg = document.querySelector ('#reg')
var regOpen = document.querySelector (".wrapper_reg")
reg.onclick = function (event){
		regOpen.style.display = "block"
}
regOpen.ondblclick = function (event){
	this.style.display = "none"
}

 $('.multiple-items').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
  arrows: true,
});
 $('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
});


 var collect = document.querySelector('#collection')
 var slide = document.querySelector('.slide')

collect.onmouseover = function(event){
						TweenLite.to(collect, 5, { 
                         		boxShadow:"10px 10px 15px rgba(0, 0, 0, 0.5)", 
                          		rotation:360,
                                         
})
}


 collect.onclick = function (event){
 	slide.style.display = "block"
 }
 var multipleItems = document.querySelector(".multiple-items")
 multipleItems.ondblclick = function (event) {
 	slide.style.display = "none"
 }

var scale = document.querySelector(".scale");
scale.onclick = function (event){
		this.style.width = "300px"

}

scale.ondblclick = function (event){
	this.style.width = "auto"
}
var scale1 = document.querySelector(".scale1")
scale1.onclick = function (event){
		this.style.width = "300px"

}

scale1.ondblclick = function (event){
	this.style.width = "auto"
}

 var found = document.querySelector('.found')
 var map = document.querySelector ('#map')
 found.onclick = function (event) {
 	map.style.display = "block"

 }
 map.ondblclick = function (event){
 	this.style.display = "none"

 }