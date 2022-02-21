const gridArea = document.querySelector(".gridArea");

/*
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
*/

const navDom = document.querySelector(".navDom");

window.onload = setMenuType();

window.addEventListener('resize', (e)=>{
	setMenuType();
})

function setMenuType(){
	if(window.screen.width > 900){
		console.log(window.screen.width);
		navDom.innerHTML = `<ul class="navbarUl">
			<li><a href=""><img src="./assets/mainLogo.png" alt="Smith Mantenimiento" class="mainLogoNav"></a></li>
			<div>
				<ul class="responiveLUl">
					<li><a href=""><h2 class="menuTitle">Sobre Nosotros</h2></a></li>
                    <li><a href=""><h2 class="menuTitle">Servicios</h2></a></li>
                    <li><a href=""><h2 class="menuTitle">Rational MTY</h2></a></li>
                    <li><a href=""><h2 class="menuTitle">Contacto</h2></a></li>
				</ul>
			</div>
		</ul>`;
	}else{
		navDom.innerHTML = `
			<ul class="navbarUl">
			<li><a href=""><img src="./assets/mainLogo.png" alt="Smith Mantenimiento" class="mainLogoNav"></a></li>
			<li><img src="./assets/menuButton.png" alt="menu" class="menuButton" id="menuBtn"></li>
		</ul>
		<div class="acordionMenu close">
			<ul class="acordionUl">
				<li class="acordionItem noVisible">
					<a href="./nosotros.html">
						<h3 class="h3Text">Sobre Nosotros</h3>
						<div class="divisionBar"></div>
					</a>
				</li>
				<li class="acordionItem noVisible">
					<a href="./servicios.html">
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
					<a href="">
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

/*
	<nav class="shadow-lg">
            <ul class="navbarUl">
                <li><a href=""><img src="./assets/mainLogo.png" alt="Smith Mantenimiento" class="mainLogoNav"></a></li>
                <li><img src="./assets/menuButton.png" alt="menu" class="menuButton" id="menuBtn"></li>
            </ul>
            <div class="acordionMenu close">
                <ul class="acordionUl">
                    <li class="acordionItem noVisible">
                        <a href="./nosotros.html">
                            <h3 class="h3Text">Sobre Nosotros</h3>
                            <div class="divisionBar"></div>
                        </a>
                    </li>
                    <li class="acordionItem noVisible">
                        <a href="./servicios.html">
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
                        <a href="">
                            <h3 class="h3Text">Contacto</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
*/