## Buscador de películas con The Movie Database API

Este proyecto es una aplicación web que permite buscar películas a través de la API de The Movie Database (TMDB).

**Características:**

* **Búsqueda por título:** Introduce el título de una película para buscar información y resultados relacionados.
* **Resultados detallados:** Muestra el título, fecha de lanzamiento, resumen e imagen de cada película encontrada.
* **Diseño claro:** Interfaz limpia y organizada para una fácil visualización de los resultados.

**Tecnologías utilizadas:**

* **HTML:** Estructura la página web y los elementos del formulario de búsqueda.
* **CSS:** Estiliza la apariencia de la página, incluyendo el diseño del formulario y la presentación de los resultados de la película.
* **JavaScript:** Maneja la interacción del usuario con el formulario, realiza peticiones a la API de TMDB y muestra los resultados en la página web.
* **Fetch API:** Proporciona una forma moderna de realizar peticiones HTTP desde el navegador.

**Funcionamiento:**

1. El usuario introduce el título de una película en el campo de búsqueda.
2. Al hacer clic en el botón "Buscar", se activa el evento `click`.
3. Se construye una URL utilizando la API key, la base URL de la API de TMDB y el término de búsqueda ingresado por el usuario.
4. Se realiza una petición GET a la API de TMDB utilizando la librería Fetch API.
5. La respuesta de la API se procesa en formato JSON.
6. La función `showMovies()` analiza la respuesta y extrae la lista de películas.
7. Se recorre la lista de películas y se crea un elemento HTML (`div`) para cada película.
8. Se agrega el título, fecha de lanzamiento, resumen e imagen de la película a su elemento `div` correspondiente.
9. Se añaden los elementos `div` de cada película al contenedor principal (`results`) en el DOM.
10. Si no se encuentran películas para el término de búsqueda, se muestra un mensaje informativo.

**Aprendizajes clave:**

* **Peticiones HTTP con Fetch API:** Realizar solicitudes a APIs externas para obtener datos.
* **Procesamiento de JSON:** Manejar y extraer información de respuestas en formato JSON.
* **Creación de elementos DOM:** Crear elementos HTML de forma dinámica para mostrar los resultados de la búsqueda.
* **Eventos click:** Responder a las acciones del usuario (clic en el botón).

**Cómo utilizar:**

1. Clona este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Introduce el título de una película en el campo de búsqueda.
4. Haz clic en el botón "Buscar".

**Demostración:**
[Buscador de películas con The Movie Database API](https://app-peliculas-the-movie-database.netlify.app/)


**Nota:**

* Este ejemplo requiere una API key de The Movie Database. Puedes obtener una gratis registrándote en su sitio web.
* Reemplaza `'5788d635e59788275c06837c1893adc4'` con tu propia API key.
* Reemplaza `'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Nzg4ZDYzNWU1OTc4ODI3NWMwNjgzN2MxODkzYWRjNCIsIm5iZiI6MTczNTgyNzUyMS4zMiwic3ViIjoiNjc3NmEwNDFmNmZhMDFhMmFhNjE0ZGExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.8-6sOU42a3PogHeMFoYgM4SGcon0jWKxkkMPK4Blui8'` con tu propio token de TMDB.

Este README describe las funcionalidades del buscador de películas, las tecnologías utilizadas y cómo utilizarlo. También incluye información importante sobre las credenciales necesarias para acceder a la API de TMDB.
