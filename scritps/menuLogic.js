const gridArea = document.querySelector(".gridArea");
const gridSelection = document.querySelector(".gridSelection");

const debugText = document.querySelector(".debugText");
const navDom = document.querySelector(".navDom");

const buttonSender = document.getElementById("buttonSender").addEventListener("click", (e)=>{
	e.preventDefault();
	sendEmail();
});

function sendEmail(){
	const name = document.getElementById("floatingName");
	const email = document.getElementById("floatingEmail");
	const theme = document.getElementById("floatingTheme");
	const body = document.getElementById("floatingBody");

	var flag = 0;
	if((/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/).test(email.value) && name.value != "" && theme.value != "" && body.value != ""){
		const validationAlert = document.getElementById("validationAlert").className = "alert alert-success visually";
		flag = 1;
	}else{
		const validationAlert = document.getElementById("validationAlert").classList.replace("visually-hidden", "visually");
		flag = 0;
	}

	/*Query Sender*/
	if(flag == 1){
		const mailto = document.querySelector(".mailto");

		mailto.setAttribute('href', `mailto:medellinjimenezerikdaniel2@gmail.com?subject=`+name.value+`&body=De: `+email.value+`, `+body.value);
		mailto.click();

		email.value = "";
		name.value = "";
		theme.value = "";
		body.value = "";
	}
}

function setMenuType(screenWidth){

	var screenMenuWidth = screenWidth;

	if(screenMenuWidth > 1090){
		navDom.innerHTML = `<ul class="navbarUl">
			<li><a href="./index.html"><img src="./assets/mainLogo.png" alt="Smith Mantenimiento" class="mainLogoNav"></a></li>
			<div>
				<ul class="responiveLUl">
					<li><a href="./aboutUs.html"><h2 class="menuTitle">Sobre Nosotros</h2></a></li>
                    <li><a href="./services.html"><h2 class="menuTitle">Servicios</h2></a></li>
                    <li><a href=""><h2 class="menuTitle">Rational MTY</h2></a></li>
                    <li><a href="./contact.html"><h2 class="menuTitle">Contacto</h2></a></li>
				</ul>
			</div>
		</ul>`;
	}else{
		navDom.innerHTML = `
			<ul class="navbarUl">
			<li><a href="./index.html"><img src="./assets/mainLogo.png" alt="Smith Mantenimiento" class="mainLogoNav"></a></li>
			<li><img src="./assets/menuButton.png" alt="menu" class="menuButton" id="menuBtn"></li>
		</ul>
		<div class="acordionMenu close">
			<ul class="acordionUl">
				<li class="acordionItem noVisible">
					<a href="./aboutUs.html">
						<h3 class="h3Text">Sobre Nosotros</h3>
						<div class="divisionBar"></div>
					</a>
				</li>
				<li class="acordionItem noVisible">
					<a href="./services.html">
						<h3 class="h3Text">Servicios</h3>
						<div class="divisionBar"></div>
					</a>
				</li>
				<li class="acordionItem noVisible">
					<a href="">
						<h3 class="h3Text">Rational MTY</h3>
						<div class="divisionBar"></div>
					</a>
				</li>
				<li class="acordionItem noVisible">
					<a href="./contact.html">
						<h3 class="h3Text">Contacto</h3>
					</a>
				</li>
			</ul>
		</div>
		`;

		const menuBtn = document.getElementById("menuBtn");
		const acordionMenu = document.querySelector(".acordionMenu");
		const acordionItems = document.querySelectorAll(".acordionItem");

		menuBtn.addEventListener("click", ()=>{
			if(acordionMenu.className == "acordionMenu open"){
				setTimeout(()=>{
					acordionMenu.className = "acordionMenu close";
				}, 350);
				acordionItems.forEach((e)=>{
					e.className = "acordionItem noVisible";
				});
			} else{
				acordionMenu.className = "acordionMenu open";
				setTimeout(()=>{
					acordionItems.forEach((e)=>{
						e.className = "acordionItem visible";
					});
				}, 350);
			}
		});
	}
}

window.addEventListener("resize", ()=>{
	setMenuType(navDom.clientWidth);
})

setMenuType(navDom.clientWidth);