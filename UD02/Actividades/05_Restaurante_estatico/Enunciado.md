# Diseño de Interfaces Web

## UD2 – Actividad 5: Restaurante estático

El proyecto consiste en la creación de una **web de un restaurante** empleando **HTML**, **CSS** y **JavaScript** (para elementos visuales, efectos y dinamización del sitio web).

La carta del restaurante está acotada a **un único producto base**, **tres aperitivos** y **dos postres**, para simplificar el tamaño del sitio web.

- Por ejemplo, un **restaurante italiano** podría contar con:
  - **Aperitivos:** Burrata o Pan de ajo.
  - **Principal:** Spaghetti Bolognese, Spaghetti Carbonara, Spaghetti all'Amatriciana, Spaghetti all'Arrabbiata o Spaghetti con Verdura.
  - **Postres:** Tiramisú o Torta di Formaggio e Frutti di Bosco.
- Por ejemplo, un **restaurante americano** podría contar con:
  - **Aperitivos:** Fingers de queso o Patatas cuatro salsas.
  - **Principal:** Hamburguesa clásica, Hamburguesa cabra, Hamburguesa inglesa, Hamburguesa surfera, Hamburguesa galifornia o Hamburguesa cheevaca.
  - **Postres:** Tarta de zanahoria o Brownie.

La realización de un sitio web es un trabajo complejo que requiere ser estructurado en diferentes etapas. Adecuarse a un plan establecido es una buena elección para llegar a los resultados deseados.

### Etapas recomendadas

1. **Análisis de páginas web de restaurantes.**
   1. Identificación de los elementos básicos de **contenido** presentes en las páginas web de restaurantes.
   2. Identificación de los elementos básicos de **diseño** presentes en las páginas web de restaurantes.
2. **Extracción de un modelo de diseño**, que deberá recogerse en un documento (elementos compositivos):
   1. Paleta de colores.
   2. Tipografías.
   3. Grid o estructura básica de la web (boceto del diseño en Figma).
   4. Identidad corporativa.
3. **Implementación de la web.**
   1. Implementación mediante HTML y CSS en ficheros de estilos independientes por sección.
   2. Inclusión de efectos visuales mediante JavaScript y validación de campos.
4. **Introducción del contenido propio** del restaurante en la estructura previamente implementada.
5. **Testeo de la web** en los principales navegadores para comprobar que su visualización es correcta. Por lo menos en **Chrome** y **Firefox**.

### Requisitos

- Tener en cuenta la **arquitectura de la información** para representar los encabezados, pie, menús, barras de navegación, secciones del sitio, etc. Deben utilizarse los **elementos semánticos de HTML** para la estructuración del sitio, siempre que sea posible.
- Todos los elementos estructurales con contenido deberán contar con un **`id`** cuyo valor sea representativo de su función dentro de la web. Asimismo, todas las imágenes deberán contar con un atributo **`alt`**.
- La página web debe contener **imágenes** y, **al menos, un vídeo incrustado** relacionados con el menú del restaurante en alguna de sus secciones.
- Se valorará de manera positiva la inclusión de **elementos de ayuda al usuario** que mejoren la usabilidad del sitio web: guías de navegación, *tooltips*, etc.
- En el **pie de página** deberá aparecer una referencia a vuestro **nombre completo** como autores del sitio web.
- El **contenido mínimo** que debe tener la web, a nivel de sección, consiste en:
  - Portada o *index*.
  - Una sección **Conócenos** (historia del restaurante).
  - Una sección de **Carta** (menú del restaurante).
  - Una sección de **Contacto** (localización y contacto del restaurante). El formulario de contacto debe contar con **validación de campos en cliente**.
- Se deberá utilizar una **estructura ordenada de ficheros y carpetas** para la elaboración del proyecto:
  - La web de entrada, portada, se denominará `index.html`, y el CSS correspondiente se almacenará en `estilos_index.css`.
  - En el caso de que se empleen otros `.html` para representar otras secciones de la web, su nombre deberá ser representativo y también deberán contar con un archivo `.css` propio siguiendo el formato de nombres del *index*.
  - Las imágenes que se empleen en la web deberán guardarse en una carpeta `/img`, creando a su vez subcarpetas para cada archivo `.html` adicional, con el fin de almacenar de manera separada las imágenes asociadas a cada vista (salvo que la imagen se repita en varias vistas, en cuyo caso estará en la raíz de `/img`).
  - Ejemplo de estructura tipo:

```text
/restaurante
├── diseño.pdf
├── index.html
├── index.css
├── menu.html
├── menu.css
└── img/
    ├── cabecera.png
    ├── pie.png
    └── menu/
        ├── plato1.png
        └── plato2.png
```

> El PDF original pone `index.css` y `menu.css` en el ejemplo, pero en el texto pide el formato `estilos_index.css` (y por tanto `estilos_menu.css`).

### Documentación a entregar

`APELLIDO1_APELLIDO2_NOMBRE_Restaurante.zip`
