const swiper = new Swiper('.mySwiper', {
  loop: false,
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1000,
  mousewheel: true,
});

const swiperServicos = new Swiper('.mySwiperServicos', {
  mousewheel: true,
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

document.getElementById('abrirHistoria').addEventListener('click', () => {
  document.getElementById('topo').classList.replace('tela-visivel', 'tela-escondida');
  document.getElementById('historia').classList.replace('tela-escondida', 'tela-visivel');
});

document.getElementById('abrirServicos').addEventListener('click', () => {
  document.getElementById('topo').classList.replace('tela-visivel', 'tela-escondida');
  document.getElementById('servicos').classList.replace('tela-escondida', 'tela-visivel');
});

function voltarInicio() {
  document.getElementById('historia').classList.replace('tela-visivel', 'tela-escondida');
  document.getElementById('servicos').classList.replace('tela-visivel', 'tela-escondida');
  document.getElementById('topo').classList.replace('tela-escondida', 'tela-visivel');
}
