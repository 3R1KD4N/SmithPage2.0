const gridArea = document.querySelector(".gridArea");
const gridSelection = document.querySelector(".gridSelection");

const debugText = document.querySelector(".debugText");
const navDom = document.querySelector(".navDom");


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

setMenuType(navDom.clientWidth);
window.addEventListener("resize", ()=>{
	setMenuType(navDom.clientWidth);
})