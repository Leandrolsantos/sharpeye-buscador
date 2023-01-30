function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 110 * i);
    });
  }

  const titulo = document.querySelector('h1');
  typeWriter(titulo);

  //* animação 'p'*//

  function typeWriter2(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 70 * i);
    });
  }

  const subtitulo = document.querySelector('p');
  typeWriter2(subtitulo);

  //*fade in imagem olhos*//

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('body')
            .classList
            .add('loaded');
  });