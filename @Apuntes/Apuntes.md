# Apuntes curso




Despues de un elemento flotado si tenemos un elemento que queremos de en la parate inferior, utilizaremos:
`clear:bot;` Limpiar despues de ambos.

## Atajos de teclado
-    `Ctrl+Ç` -> Para comentar varias lineas.
-    `Corl+e` -> Encima de la etiqueta que queremos poner reglas CSS se abre una subbentana para añadir la regla.
-    `Alt+Shif+flechas` -> Para agragar multiples cursores.
-    `bd+` -> Atajo para generar bordes.

### Sprite imagenes
En CSS nos referimos a sprite para hacer alusión a un conjunto de imágenes diferentes agrupadas todas ellas en una misma imagen.

Si las imagenes del conjunto de imagenes se van a mostrar en un mismo sitio, deveran tener el mismo tamaño.

Lo que se hace es crear una ventana con el tamaño de la imagen y con `background-position: <posicion>`.

Importante hay que tener las image al mismo tamaños que la vamos a mostrar, porque al ser un conjunto de imagenes cuando modficamos su tamaño lo hacemos a todo el conjunto.

## Etiquetas

<!-- @[que est esto](http:www.google.es) -->
<!-- [^]al final -->

## CSS

-    `.texto h3 {}` -> Afecta a todos los h3 que esten dentro de la clase texto
-    `.texto h3 a {}` -> Afecta a todos los a que esten dentro de un h3 y dentro de la clase texto
-    `.texto h3 + a {}` -> Afecta a todos los a que esten dentro despues de h3 y dentro de la clase texto
-    `.texto h3 , a{}` -> Afecta a todos los h3 que esten dentro de la clase texto y a todos los a del documento
-    `.texto h3 , .texto a{}` -> Afecta a todos los h3 y a que esten dentro de la clase texto.
-    `div.texto h3 {}` -> Afecta a todos los h3 que esten dentro de un div con la clase texto.

-    `a:hover` -> Para darle un formato diferente cuando se pase el raton por encima.

-    `h1+a` -> Se refiere a la `a` justo despues del `h1`.
-    `li:nth-child(1){}` -> Afecta solo al primer elemento de la linea.
-    `background-position: <posicion>` -> Posicion del fondo.

-    `text-indent` ->Sangrado para la primera linea.

#### Tablas
-    `border-collapse: collapse` -> Para que solo aparezca un borde;
-    `td` -> Filas.
-    `td` -> Celdas;
-    `th` -> Celda encabezado.
-    `colspan "n"` -> Dos celdas por columna.
-    `rowspan "n"` -> Dos celdas por fila.

Si un conteneror contiene elementos flotantes tendremos que ponerlo *overflow:auto*.

## Plugins para Brakets

Revisar [http://blog.hostdime.com.co/8-increibles-complementos-para-brackets/](Comprementos para Brackets)

-    *Emmet* -> Para añadir codigo html.
-    *Beautiful* -> Formatea el codigo.
-    *Everyscrud* -> Insertar etiquetas en texto.
-    *Brackets tree icons* -> Pone iconos al lado de los archivos dependiendo del tipo.
-    *jquinter* -> Para que sugiera las etiqutas, id y class de los archivos html en el archivo CSS.
-    *Autoprefixer* -> Para que añada los prefijos necesarios para los diferentes navegadores.
-    *everyscrub* -> Para umentar o disminuir un número con combinación Alt+ClicRaton.


## Extensiones para Google Chrome
-    *Gred ruels* -> Indica las medidas y los tamaños.
-    *web developer* -> Entre otras cosas nos permite quitar las CSS.
-    *Whatfont Chrome* ->Para inspeccionar tipografias.
-    *Firebug* -> Para hacer debuguer.

## Extensiones para Firefox
-    *measurel* -> Para poder medir


## Rcursos
-    Artiseteer ->Para hacer plantillas.
-    Adobe edge ->Para crear paginas de manera facil (descontinuado).
-    <https://wetransfer.com/> -> Para transferir archivos a traves de una URL.
-    <https://draeton.github.io/stitches/> -> Para crear Sprite. (Varias imagenes en una misma imagen y mostrar uno o otra dependiendo de las cordenadas).
-    <http://fontawesome.io/> -> Fuente de iconos.
-    <https://transfonter.org/> -> Para convertir fuentes de formato ttf a fuentes para la web.

## Paginas de internet
-    <https://dinahosting.com/> -> Servidor.
-    <https://archive.org/> -> Pagina que se dedica hacer copias de pajians de internet.
-    <https://fonts.google.com/> -> Para colocar fuentes de grateis de google.
-    <https://www.fontsquirrel.com/> -> Tipografias gratis y podemos subir una tipografia y la transforma para todos los navegadores.
-    <http://caniuse.com/> -> Compatibilidad con los navegadorea
-    <https://color.adobe.com/es/create/color-wheel/> -> Plicación de adobe que tedice los colores que se han utilizado en una imagen.



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
