//vai adicionar o evento scroll execuntando a função onScroll
window.addEventListener('scroll', onScroll)

//Ao inicializar a página vai ser executada a função onScroll apenas uma vez
onScroll()

// Essa função está gerenciando todos os scrolls da página
function onScroll() {
 showNavOnScroll()
 showBackToTopButtonOnScroll()

 activateMenuAtCurrentSection(home)
 activateMenuAtCurrentSection(services)
 activateMenuAtCurrentSection(about)
 activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2


  //verificar se a seção passou da linha imaginária
  //quais dados vou precisar
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  //o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //verificar se a base está abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeight

  //o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

// Mostrar o navigation quando fazer o scroll
function showNavOnScroll() {
   //Se o scrollY for maior que zero vai mudar a cor da tag nav 
   if (scrollY > 0) {
    navigation.classList.add('scroll')
    //porém quando chegava na posição 0 ele continuava verde, então precisamos colocar a função else.
  } else {
    navigation.classList.remove('scroll')
  }
}

// Mostrar o botão na hora de fazer o scroll
function showBackToTopButtonOnScroll() {
   if (scrollY > 350) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//adicionamos uma função no qual toda vez que clicar no menu ele vai abrir outra parte do código
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top', /*vai se movimentar do top para baixo*/
  distance: '30px',
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)

