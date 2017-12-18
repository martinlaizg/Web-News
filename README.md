# Web-New
Practica Aplicaciones Distribuidas en Internet

Martín Laiz Gómez

- [Web-New](#web-new)
	- [Parte pública](#parte-p%C3%BAblica)
	- [Parte privada](#parte-privada)
	- [Aclaraciones](#aclaraciones)
	- [Puesta en marcha](#puesta-en-marcha)
	- [Notas](#notas)

## Parte pública
- Cuando el usuario anónimo accede a la web, puede listar las noticias y las categorias.
- Al hacer click en el titulo de una noticia se mostrará toda la información de la noticia.
- Los usuarios podrán registrarse mediante el botón `Singup`.*

## Parte privada
- Solo los usuarios registrados tienen acceso a la parte privada.
- Para acceder a la parte privada se ha de iniciar sesión mediante el botón de `Login`.
- Cualquier usuario registrado podrá crear categorias accediendo al deplegable superior de `Categories` y pulsando el botón `+` después de introducir el nombre de la categoria.
- Cualquier usuario podrá crear una nueva noticia mediante el botón `Add notice` del panel superior.
- Solo los creadores de la noticia podrán actualizarla o borrarla mediante los botones de editar o borrar en la vista de la noticia completa.
- El usuario podrá volver a la vista pública mediante el botón `Logout` en el panel superior.

## Aclaraciones
- No debería de poder registrarse cualquier usuario, pero ya que es necesario para la practica, está así implementado.
- Tras crear una noticia se debe de recargar la página.

## Puesta en marcha
- Arrancamos la API mediante el comando `nodemon`.
- Arrancamos la Web mediante el comnado `npm start`.

## Notas
- La api se encuentra en el repositorio: [Api-News](https://github.com/MartinLaiz/Api-News)
	- Alojado en el servidor Heroku: [Api-News](https://api-news-martinlaiz.herokuapp.com/)*
- La web se encuentra en el repositorio: [Web-News](https://github.com/MartinLaiz/Web-News)
	- Alojado en el servidor Heroku: [Web-News](https://web-news-martinlaiz.herokuapp.com/)*
- Base de datos en [mLab](https://mlab.com/)

Dado el funcionamiento de Heroku, primero entrar en la Api y una vez cargada ya se puede entrar en la web (la primera vez tarda en arrancar debido a Heroku).