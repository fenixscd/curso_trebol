# Apuntes curso

Despues de un elemento flotado si tenemos un elemento que queremos de en la parate inferior, utilizaremos:
`clear:bot;` Limpiar despues de ambos.

### Sprite imagenes
En CSS nos referimos a sprite para hacer alusión a un conjunto de imágenes diferentes agrupadas todas ellas en una misma imagen.

Si las imagenes del conjunto de imagenes se van a mostrar en un mismo sitio, deveran tener el mismo tamaño.

Lo que se hace es crear una ventana con el tamaño de la imagen y con `background-position: <posicion>`.

Importante hay que tener las image al mismo tamaños que la vamos a mostrar, porque al ser un conjunto de imagenes cuando modficamos su tamaño lo hacemos a todo el conjunto.

## Etiquetas

<!-- @[que est esto](http:www.google.es) -->
<!-- [^]al final -->

## CSS
`h1+a` -> Se refiere a la `a` justo despues del `h1`
`li:nth-child(1){}` -> Afecta solo al primer elemento de la linea.
`background-position: <posicion>` -> Posicion del fondo.

Si un conteneror contiene elementos flotantes tendremos que ponerlo *overflow:auto*.

## Plugins para Brakets
-*Emmet* -> Para añadir codigo html.
-*Beautiful* -> Formatea el codigo.
-*Everyscrud* -> Insertar etiquetas en texto.
-*Brackets tree icons* -> Pone iconos al lado de los archivos dependiendo del tipo.
-*jquinter* -> Para que sugiera las etiqutas, id y class de los archivos html en el archivo CSS.

## Extenciones para Google Chrome
-*Gred ruels* -> Indica las medidas y los tamaños.
-*web developer* -> Entre otras cosas nos permite quitar las CSS.
-*Whatfont Chrome* ->Para inspeccionar tipografias.
-*Firebug* -> Para hacer debuguer.

## Rcursos
Artiseteer ->Para hacer plantillas.
Adobe edge ->Para crear paginas de manera facil (descontinuado).
<https://wetransfer.com/> -> Para transferir archivos a traves de una URL.
<https://draeton.github.io/stitches/> -> Para crear Sprite.

## Paginas de internet
<https://dinahosting.com/> -> Servidor.
<https://archive.org/> -> Pagina que se dedica hacer copias de pajians de internet.
<https://fonts.google.com/> -> Para colocar fuentes de grateis de google.
<https://www.fontsquirrel.com/> -> Tipografias gratis y podemos subir una tipografia y la transforma para todos los navegadores.
<http://caniuse.com/> -> Compatibilidad con los navegadorea



## Atajos de teclado
-`Ctrl+Ç` -> Para comentar varias lineas.
-`Corl+e` -> Encima de la etiqueta que queremos poner reglas CSS se abre una subbentana para añadir la regla.

## Emmet

`a.boton[#]*5`
~~~
<a href="#" class="boton"></a>
<a href="#" class="boton"></a>
<a href="#" class="boton"></a>
<a href="#" class="boton"></a>
<a href="#" class="boton"></a>
~~~


`ul>(li>{elemento $})*5`
~~~
<ul>
      <li>elemento 1</li>
      <li>elemento 2</li>
      <li>elemento 3</li>
      <li>elemento 4</li>
      <li>elemento 5</li>
  </ul>
~~~