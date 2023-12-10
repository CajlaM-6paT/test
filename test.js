
let enterButton = document.querySelector('.enterButton');
enterButton.addEventListener('click', function(){
	enterButton.setAttribute('style','display: none');
	document.querySelector('.welcomeBlock').setAttribute('style','background-color: #191820;')
	document.querySelector('#poster-1').classList.add('throwed-poster1')
	document.querySelector('#poster-2').classList.add('throwed-poster2')
	setTimeout(enterSite, 2500);

})

// ------------------------------------------------------------------------ // 

function enterSite() {
	document.body.removeAttribute('style')
	document.querySelector('.welcomeBlock').remove()

	document.querySelector('header').classList.add('is-enter')

	let typed = new Typed('#typed', {
		strings:['Привет! Меня зовут Павел.^1000 <br>Я Front-End разработчик','Привет! Меня зовут Павел. <br>Я могу сделать для тебя что-то <span class="unique">уникальное</span>!'],
		typeSpeed: 25, // Скорость печати
		startDelay: 2000, // Задержка перед стартом анимации
		backSpeed: 50, // Скорость удаления
		showCursor: false,
		});
	

		setTimeout(showPortrait, 500);

		function showPortrait() {
			let mee = document.querySelector(".me");
			let opacity = 0
			for (let i=0; i < 10; i++) {
				task(i);
			}
		
			function task(i) {
				setTimeout(function() {
				mee.setAttribute('style', `opacity: ${opacity += 0.1}; `);
			}, 50 * i);
			}
		}
	
		function startMe(){
			setTimeout(me, 1000)
		}
		
		const options2 = {
			threshold: 0.1
		  }
		  
		  const pabloObserver = new IntersectionObserver(startMe, options2);
		  const pBlock = document.querySelector('.pabloBlock');
		  pabloObserver.observe(pBlock);

		  words.forEach(animateWords);


}


function pop (e) {
	let amount = 100;

	if (e.clientX === 0 && e.clientY === 0) {
		const bbox = e.target.getBoundingClientRect();
		const x = bbox.left + bbox.width / 2;
		const y = bbox.top + bbox.height / 2;
		for (let i = 0; i < 30; i++) {
			createParticle(x, y, e.target.dataset.type);
		}
		} else {
		for (let i = 0; i < amount; i++) {
			createParticle(e.clientX, e.clientY, e.target.dataset.type);
		}
	}
}
function createParticle (x, y) {
	const particle = document.createElement('particle');
	document.body.appendChild(particle);
	let width = Math.floor(Math.random() * 30 + 8);
	let height = width;
	let destinationX = (Math.random() - 0.5) * 1500;
	let destinationY = (Math.random() - 0.5) * 1500;
	let rotation = Math.random() * 520;
	let delay = Math.random() * 200;

	particle.style.background = `hsl(${Math.random() * 50 + 248}, 14%, 11%)`; 
	particle.style.border = '2px solid #c6c6c6'; 

	particle.style.width = `${width}px`;
	particle.style.height = `${height}px`;
	const animation = particle.animate([
		{
			transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
			opacity: 1
		},
		{
			transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
			opacity: 0
		}
		], {
		duration: Math.random() * 1000 + 2000, 
		easing: 'cubic-bezier(0, .9, .57, 1)',
		delay: delay
	});
	animation.onfinish = removeParticle;
}
function removeParticle (e) {
	e.srcElement.effect.target.remove();
}
	if (document.body.animate) {
		document.querySelector("[data-type='square']").addEventListener('click', pop);
}





const words = document.querySelectorAll('.word');


function animateWords(word){
	setTimeout( function(){
		let text = word.dataset.text;
		text.split('').forEach((letter, index) => {
			let pre = document.createElement('pre');
			pre.textContent = letter;
			setTimeout(()=> word.append(pre), index * 150);
		})
	}, 2000);
}






const changeNav = (entries, observer) => {
entries.forEach((entry) => {
	if(entry.isIntersecting && entry.intersectionRatio >= 0.55) {
	let id = entry.target.getAttribute('id');
	document.querySelector('.active').classList.remove('active');
	document.querySelector(`[href="#${id}"]`).classList.add('active');
	}
});

}

// обратите внимание на значение опции threshold
const options = {
threshold: 0.55
}

const observer = new IntersectionObserver(changeNav, options);

// передаём все секции в обсервер
const sections = document.querySelectorAll('.section');
sections.forEach((section) => {
observer.observe(section);
});



const myDirection = new Letterize({
	targets: '.myDirection'
})
let myDirectionArray = myDirection.listAll

function shuffle(array) {
	let currentIndex = array.length,  randomIndex;
	while (currentIndex > 0) {
  
	  // Pick a remaining element.
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;

	  [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
	return array;
}

shuffle(myDirectionArray)

function startReveal(){
		for (let i = 0; i <= (myDirectionArray.length - 1); i++){
			setTimeout(function() {
				myDirectionArray[i].setAttribute('style', `opacity: 1; `);
			}, 3 * i);
		}
}

window.addEventListener('scroll', function aboutSectionViewportCheck() {
	const textBox = document.querySelector('#about').getBoundingClientRect();
	if (textBox.top <= 100 && textBox.top > -1) {
		startReveal()
		window.removeEventListener('scroll', aboutSectionViewportCheck)
	}
})



const stackGridItems = document.querySelectorAll('.stack-grid-item');
const stackGrid = document.querySelector('.stack-grid');

window.addEventListener('scroll', function stackSectionViewportCheck() {
	const stackBox = document.querySelector('#stack').getBoundingClientRect();
	if (stackBox.top <= (window.innerHeight - 334)) {
		for (let i = 0; i < stackGridItems.length; i++) {
			setTimeout(function() {
				stackGridItems[i].classList.add('scaled')
			}, 50 * i);
			
		}
		window.removeEventListener('scroll', stackSectionViewportCheck)
	}
})
window.addEventListener('scroll', function setStaticPos() {
	const stackBox = document.querySelector('.stack-block').getBoundingClientRect();
	const gridBox = stackGrid.getBoundingClientRect();
	if (gridBox.bottom <= (window.innerHeight - 30)) {
		stackGrid.setAttribute('style','position: relative')
		window.removeEventListener('scroll', setStaticPos)
	}
})

let skills = [
	`<div class="skill-text html" >HTML/<p class="css" style="display: inline-block;">/CSS</p></div>
	<ul class="skill-text html">
	<li>Семантика</li>
	<li>Кроссбраузерность</li>
	<li>Адаптивность</li>
	<li class="css">Адаптивность</li>
	<li class="css">Адаптивность</li>
	<li class="css">Адаптивность</li>
	<li class="css">Адаптивность</li>
	<li class="css">Адаптивность</li>
	</ul>`,
	`<div class="skill-text scss" >SCSS</div><div class="skill-text scss" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum fugiat illo perspiciatis vitae reiciendis iusto vel nam quibusdam recusandae!
	</div>`,
	`<div class="skill-text js" >JavaScript</div><div class="skill-text js" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum fugiat illo perspiciatis vitae reiciendis iusto vel nam quibusdam recusandae!
	</div>`,
	`<div class="skill-text vue" >VUE</div><div class="skill-text vue">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum fugiat illo perspiciatis vitae reiciendis iusto vel nam quibusdam recusandae!
	</div>`,
	`<div class="skill-text php" >PHP</div><div class="skill-text php">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum fugiat illo perspiciatis vitae reiciendis iusto vel nam quibusdam recusandae!
	</div>`,
	`<div class="skill-text nodejs" >Node.JS</div><div class="skill-text nodejs" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum fugiat illo perspiciatis vitae reiciendis iusto vel nam quibusdam recusandae!
	</div>`,
	'ПРОЧЕЕ'];
let gridItemid = 0;
const display = document.querySelector('.skill-discription')

stackGridItems.forEach((item) => {
	item.setAttribute('id', `${gridItemid++}`)
	item.addEventListener('click',() => {
		for(let i = 0; i < stackGridItems.length; i++){
			stackGridItems[i].classList.remove('stack-grid-item_active');
		}
		item.classList.add('stack-grid-item_active')
		if (item.classList.contains('stack-grid-item_active')){
			document.getElementById('stack-discription').innerHTML = skills[Number(item.id)];

			let directions = [
				'first',
				'center',
				'last'
			];

			const test = new Letterize({
				targets: ".skill-text"
			});

			const animation = anime.timeline({
				targets: test.listAll,
				translateX: 400,
				delay: anime.stagger(15, {easing: 'easeOutBounce', from: directions[Math.floor(Math.random() * directions.length)], start: 900}),
				loop: false
			});
			animation.add({opacity: 1})
			
			display.setAttribute('style',`height:${document.getElementById('stack-discription').offsetHeight + 60}px; opacity: 1`)

		}
	})
})





