# Guía de la Actividad 08 · Vídeo y presentación UI/UX

Qué se hizo en el vídeo (Shotcut) y en la presentación (LibreOffice Impress), por qué se hizo así y qué conviene recordar para próximas prácticas.

---

## 1. Archivos de la carpeta

| Archivo / carpeta | Qué es | ¿Necesario? |
|---|---|---|
| `Video.mlt` | Proyecto original de Shotcut. Solo se cambió la ruta del vídeo al moverlo a esta carpeta. | Copia de seguridad |
| `Video_portadas.mlt` | **Proyecto final**: portadas, fondo plano, tarjetas, música, audio limpio y mejoras de imagen. | Sí |
| `2026-10-11 22-16-46.mp4` | Grabación original de OBS. | Sí (original) |
| `2026-10-11 22-16-46_audio_limpio.mp4` | La misma grabación con el audio sin ruido de fondo. Es la que usa `Video_portadas.mlt`. | Sí |
| `atlasaudio-music-background-594872.mp3` | Música de fondo («Music Background», AtlasAudio, Pixabay). | Sí |
| `logo.png` | Logo del IES en blanco con transparencia (vídeo y presentación). | Sí |
| `Graficos/*.svg` | Tarjetas que aparecen en el vídeo. Shotcut las lee directamente. | Sí |
| `Graficos/sizes.json` | Tamaños de las tarjetas que usaba un script para colocarlas. Shotcut no lo lee. | **No, se puede borrar** |
| `Graficos_presentacion/*.svg` | Gráficos de la presentación, editables en Inkscape. | Sí (para editarlos) |
| `UI-UX_presentación.odp` | **Presentación final** (13 diapositivas). | Sí |
| `Ejemplo_UI-UX_presentacion.odp` | Presentación anterior de 24 diapositivas, sin tocar. | Referencia |
| `_scripts/` | Scripts que generan los SVG y el `.odp` de la presentación. | Solo si se regenera |

Los vídeos y la música pesan mucho: mejor no subirlos a git (añadirlos a `.gitignore`) y entregarlos solo en el `.rar`.

---

## 2. Vídeo con Shotcut

### 2.1. El proyecto `.mlt`

- Un proyecto de Shotcut es un **XML de MLT**:
  - cada clip es un `<producer>` con sus filtros;
  - cada pista es una `<playlist>`, formada por clips y huecos `<blank>`;
  - el `<tractor>` apila las pistas y las mezcla con *transiciones*: `mix` para audio y `qtblend` para vídeo.
- Las **rutas de los medios** quedan guardadas en el `.mlt`. Si mueves un vídeo de carpeta, Shotcut no lo encontrará. Muévelo con el proyecto cerrado y vuelve a enlazarlo, o edita la ruta. Lo mejor es tener todo (vídeo, música, imágenes) **dentro de la carpeta de la práctica** desde el principio.
- No edites el `.mlt` a mano con Shotcut abierto: al guardar, Shotcut sobrescribe tus cambios.
- Trabaja sobre una **copia** (`Video.mlt` → `Video_portadas.mlt`) cuando hagas cambios grandes.

### 2.2. Pistas = capas

- En vídeo, **la pista de arriba tapa a la de abajo**, igual que las capas en GIMP o Inkscape. Orden usado, de abajo arriba:
  1. `Fondo plano` (color liso `#EAF2F6`).
  2. `Video` (la grabación, encuadrada).
  3. `Fondo Logo`, `Logo`, `Texto` (barra inferior con logo y título).
  4. `Tarjetas A` y `Tarjetas B` (gráficos que aparecen a la derecha).
  5. `Portadas` y `Logo portadas` (cubren todo al inicio y al final).
  6. `Música 1` y `Música 2` (solo audio).
- Una capa superior solo deja ver la inferior donde es **transparente**: un PNG o SVG con transparencia, un clip de color con alfa 0 o un vídeo reducido de tamaño.
- Para que dos elementos se vean a la vez hacen falta **dos pistas**; por eso hay `Tarjetas A` y `Tarjetas B`.
- Los huecos (*blank*) de una pista son transparentes.

### 2.3. Estructura del vídeo final (3:16)

| Tramo | Contenido |
|---|---|
| 0:00–0:05 | Portada: logo, título, módulo, nombre y ciclo. Se funde sobre el vídeo. |
| 0:05–3:10 | Grabación encuadrada sobre fondo plano, con barra inferior y tarjetas sincronizadas con la voz. |
| 3:10–3:16 | Portada final: «¡Gracias!», nombre, módulo y créditos de la música. Termina fundiendo a negro. |

Las portadas son clips de color con filtros **Texto: simple**, así que se editan desde Shotcut: se selecciona el clip y se abre *Filtros*.

### 2.4. Filtros

- Se aplican a un **clip** (panel *Filtros* con el clip seleccionado) o a una **pista entera** (seleccionando la cabecera de la pista).
- **El orden importa**, porque se ejecutan de arriba abajo. En el vídeo se aplican en este orden:
  1. mejorar la imagen (ruido, color, nitidez);
  2. recortar;
  3. colocar (*Tamaño y posición*);
  4. redondear las esquinas y añadir la sombra.

  Si redondeas antes de recortar, las esquinas desaparecen con el recorte.
- Un filtro se puede **desactivar** con su casilla sin borrarlo. Así quedó la puerta de ruido original.

#### Filtros de imagen aplicados

| Filtro de Shotcut | Para qué | Valor usado |
|---|---|---|
| Reducir ruido: HQDN3D | Quitar el grano de la webcam | espacial 4, temporal 6 |
| Gradación de color (*Color Grading*) | Algo más de contraste | sombras −3 %, gamma 1,05, ganancia 1,04 |
| Tono/Luminosidad/Saturación | Colores más vivos | saturación 115 % |
| Enfocar (*Sharpen*) | Recuperar nitidez | cantidad 0,5, tamaño 0,3 |
| Recortar: Fuente (*Crop: Source*) | Quitar los laterales y centrar la figura | 240 px a cada lado (queda 4:3) |
| Tamaño, posición y rotación | Colocar el vídeo en la pantalla | 1120 × 840 en (130, 70) |
| Recortar: Rectángulo | Esquinas redondeadas | radio 6 %, color exterior transparente |
| Sombra paralela | Separar el vídeo del fondo | radio 12, desplazamiento vertical 8 |

- **Variantes descartadas:** con más nitidez (0,8) los bordes quedaban sobreprocesados. La **Viñeta** apenas se notaba y el **balance cálido** lavaba el contraste. Conviene comparar siempre antes y después en el mismo fotograma y no acumular filtros por acumular.
- **Una webcam no da más de sí:** los filtros mejoran, pero no hacen milagros. Para la próxima grabación ayudan más la luz de frente (una ventana o una lámpara detrás de la cámara), la cámara a la altura de los ojos y un fondo ordenado.

### 2.5. Encuadre y fondo plano

- El fondo de color liso **no recorta a la persona**: eso necesitaría un croma (pantalla verde) o segmentación con IA, que deja bordes malos en el pelo y las manos. Lo que se hizo es reducir el vídeo y colocarlo sobre un fondo de color, con esquinas redondeadas y sombra. Además, deja una columna libre para los gráficos.
- El recorte a **4:3** (quitar 240 px de cada lado) elimina parte de la habitación y centra la atención en la persona. Con gestos muy abiertos, las manos pueden quedar un poco cortadas.

### 2.6. Posicionar elementos

- **Tamaño, posición y rotación** (*Size, Position & Rotate*) define un rectángulo `X Y ancho alto` en píxeles del proyecto (aquí 1920 × 1080). Con *Ajustar*, el contenido mantiene su proporción dentro del rectángulo.
- Para un diseño ordenado, piensa en una **rejilla**: márgenes regulares, una columna para el vídeo (x 130–1250) y otra para los gráficos (x ≈ 1310–1790), sin invadir la barra inferior (desde y = 980).
- Las imágenes **SVG** se pueden poner directamente en la línea de tiempo. Si después las editas en Inkscape y guardas, Shotcut muestra el cambio al recargar el proyecto. Si la altura del SVG cambia mucho, reajusta su posición.

### 2.7. Fotogramas clave: cómo aparecen las tarjetas

- Casi cualquier parámetro de un filtro se puede animar con el botón de **fotogramas clave** (icono de cronómetro) y el panel *Fotogramas clave*.
- Cada tarjeta lleva el filtro *Tamaño, posición y rotación* con **4 fotogramas clave**:
  1. **Fotograma 0:** posición final, pero 40 px más abajo y con **opacidad 0**.
  2. **Fotograma 15 (0,25 s a 60 fps):** posición final, con **opacidad 1**.
  3. **15 fotogramas antes del final:** igual que la clave 2.
  4. **Último fotograma:** como la clave 1.

  Con interpolación **suave** (*smooth*, que en el XML aparece como `~=`), el movimiento acelera y frena de forma natural: la tarjeta sube y aparece a la vez, y al salir baja y desaparece.
- **Para verlo o cambiarlo:** selecciona la tarjeta en la línea de tiempo, abre *Filtros → Tamaño, posición y rotación* y el panel *Fotogramas clave*. Para moverla en el tiempo, arrastra el clip; para que dure más, estira su borde (las claves de salida se recolocan con *animOut*).
- **Lista que se va marcando** (las preguntas de la UX): son 7 clips casi iguales seguidos (`ej_ux0` … `ej_ux6`), con 0, 1, 2… casillas marcadas. Solo el primero tiene animación de entrada y solo el último de salida, así que parece una única tarjeta que se va completando. Si cambias un texto, cámbialo en los 7 SVG.
- **Sincronizar con la voz:** *Herramientas → Voz a texto* de Shotcut (o Whisper) da los tiempos de cada frase. Las tarjetas se colocaron así: presentación, «por un lado la UI / por otro la UX» (cuando se levantan las manos), definiciones, front-end, pioneros, Bauhaus y Don Norman, ejemplo del botón y resumen.
- **Velocidad cambiada:** si el clip va a 1,1×, el tiempo en la línea de tiempo es `tiempo_grabación / 1,1` más lo que se haya desplazado el clip (aquí, +5 s de portada).

### 2.8. Fundidos y transiciones

- **Fundido de entrada/salida de vídeo** usa el brillo, así que por defecto funde **a negro**. Si se marca *Ajustar opacidad en lugar de fundir con negro*, funde a **transparente** y deja ver la capa de abajo. Así se hizo el fundido cruzado entre la portada y el vídeo.
- En un clip de color con *Texto simple* encima, el fundido de opacidad afecta al fondo, pero cada texto necesita su propia animación del parámetro **opacidad**.
- **Transición entre dos clips de la misma pista:** se solapan los clips (arrastrando uno sobre otro) y Shotcut crea la transición automáticamente.

### 2.9. Textos

- **Texto: simple** (*Text: Simple*): se edita desde Shotcut (fuente, tamaño, color, contorno, alineación). Se usó en las portadas y en los créditos.
- **Texto: enriquecido** (*Text: Rich*): permite formato mixto y un fondo.
- Para gráficos complejos (tarjetas, diagramas) es más cómodo diseñar en **Inkscape (SVG)** e insertarlos como imagen.

### 2.10. Velocidad del clip

- *Propiedades → Velocidad* (aquí 1,1×), con **Corrección de tono** (*pitch compensation*) para que la voz no suene más aguda.

---

## 3. Audio

### 3.1. Cadena de filtros de la voz (orden recomendado)

1. **Paso alto** (*High Pass*, 80–150 Hz): quita el retumbe grave.
2. **Ecualizador** (*3-Band EQ*): baja los graves y realza un poco los medios.
3. **Compresor**: iguala las partes flojas y las fuertes (umbral −22 dB, ratio 3:1).
4. **Normalizar: una pasada** (*Normalize: One Pass*): nivel objetivo **−16 LUFS**, el estándar para web y redes.
5. **Limitador** (−1,5 dB): evita los picos que saturan. La grabación original llegaba a 0 dB, es decir, saturaba.

### 3.2. Ruido de fondo constante («aire»): diagnóstico

- **Medición:** en ningún momento de la grabación el sonido baja de −30 dB, ni siquiera en las pausas. Al medir el ruido por bandas en una pausa:

  | Banda | Antes | Después |
  |---|---|---|
  | 20–150 Hz (retumbe) | −32 dB | −45 dB |
  | 150–400 Hz | −39 dB | −49 dB |
  | 400–1000 Hz | −43 dB | −54 dB |
  | 1–7 kHz (siseo) | −46 dB | −54 dB |

  La voz conserva su nivel (−10,7 LUFS antes y después).
- **Por qué no funcionaba la puerta de ruido** (*Noise Gate*):
  - Una puerta solo silencia las pausas y necesita un **umbral por encima del ruido y por debajo de la voz**. Aquí el ruido estaba a −26/−30 dB y el umbral a −25 dB, así que la puerta no distinguía pausas de ruido.
  - Además, una puerta no quita el ruido mientras hablas: sigue debajo de la voz.

### 3.3. Solución: reducción de ruido espectral con perfil

- **Idea:** aprender cómo suena exactamente el ruido en una pausa y **restarlo de toda la pista, frecuencia a frecuencia**, también mientras se habla.
- **Herramienta:** Shotcut no trae este filtro, así que se hizo con ffmpeg (que viene dentro de Shotcut). Se generó `2026-10-11 22-16-46_audio_limpio.mp4`: la imagen se copia sin recomprimir y solo cambia el audio.

  ```bash
  # comandos.txt:  0.02 afftdn sn start;
  #                0.45 afftdn sn stop;
  ffmpeg -i original.mp4 -filter_complex \
   "[0:a]atrim=start=203.6:end=204.1,asetpts=N/SR/TB[n];[0:a]asetpts=N/SR/TB[f];\
    [n][f]concat=n=2:v=0:a=1,highpass=f=80,asendcmd=f=comandos.txt,\
    afftdn=nr=18:nf=-40:tn=0,atrim=start=0.5,asetpts=N/SR/TB[o]" \
   -map 0:v -map "[o]" -c:v copy -c:a aac -b:a 256k limpio.mp4
  ```

- **Qué hace el comando, paso a paso:**
  1. Antepone medio segundo de **solo ruido** (una pausa del final de la grabación).
  2. `afftdn` aprende el perfil del ruido mientras suena ese medio segundo (`sn start` / `sn stop`).
  3. Aplica la reducción a toda la pista.
  4. Recorta ese medio segundo añadido, así que la sincronía con la imagen no cambia.
- **Intensidad:** `nr=18`. Se probaron 15, 25 y 35: a partir de 18 apenas limpia más y la voz puede empezar a sonar «metálica».
- **Alternativa gráfica con Audacity:**
  1. *Efecto → Reducción de ruido*.
  2. Selecciona una pausa y pulsa «Obtener perfil de ruido».
  3. Selecciona todo el audio y aplica.
  4. En Shotcut, sustituye el audio del clip.
- **Lo mejor es evitarlo al grabar:** micrófono cerca, ventiladores y aparatos apagados, y la ganancia del micrófono moderada.

### 3.4. Música de fondo

- Va en **pistas de audio separadas**, con el filtro **Ganancia/Volumen** animado por fotogramas clave (técnica de *ducking*): −11 dB en las portadas y −23 dB mientras se habla, con rampas de 1–1,5 s.
- **Si la canción es más corta que el vídeo** (aquí 2:36 frente a 3:16): se ponen dos tramos en **dos pistas**, solapados 4 s, uno bajando y otro subiendo (fundido cruzado).
  - El tramo 1 va de 0:00 a 2:10 de la canción.
  - El tramo 2 retoma la canción en el 1:21 y llega hasta su final natural, que coincide con el final del vídeo.
  - Así solo hay un empalme y el cierre es el de la propia canción.
- **Dónde conseguir música libre:** Pixabay Music, YouTube Audio Library, Uppbeat, Incompetech, Free Music Archive. Revisa la licencia y **cita la obra** en los créditos. Aquí: «Music Background», AtlasAudio, `pixabay.com/music/meditationspiritual-music-background-594872/`.
- **Niveles medidos al final:** voz con música en torno a −17 LUFS, portadas a −19/−20 LUFS, picos por debajo de −0,3 dB y ningún salto de volumen en el empalme.

---

## 4. Exportar el vídeo

- En *Exportar*, para la entrega (`UI-UX_video.avi`): elige un preset H.264 y cambia el **formato a AVI**, o usa un preset AVI si existe. Resolución 1920 × 1080 y la misma velocidad de fotogramas que el proyecto (60).
- Antes de exportar, revisa el proyecto entero a velocidad normal: tiempos de las tarjetas, cortes de audio y fundidos.

### 4.1. Esquinas redondeadas para la presentación

LibreOffice Impress **no puede redondear las esquinas de un vídeo**: un objeto multimedia no admite recortes con forma, bordes ni esquinas redondeadas. Además, durante la reproducción se dibuja por encima de todo, así que tapar las esquinas con formas colocadas delante no funciona.

La solución es redondearlas **en el propio vídeo** al exportarlo, pintando las esquinas del mismo color que el fondo de la diapositiva:

1. En la línea de tiempo, haz clic en la cabecera **Salida** (*Output*), arriba del todo, encima de las pistas. Los filtros que añadas ahí se aplican al vídeo entero: portadas, tarjetas, todo.
2. En **Filtros**, pulsa **+** y añade **Recortar: Rectángulo** (*Crop: Rectangle*).
3. Configúralo así:
   - **Rectángulo:** 0, 0, 1920, 1080 (el fotograma entero).
   - **Radio de las esquinas:** entre 4 y 6 % (el vídeo encuadrado usa 6 %).
   - **Color:** `#EAF2F6`, el fondo de la diapositiva. No sirve el transparente: el AVI no guarda transparencia y las esquinas saldrían negras.
4. Exporta el vídeo.

Si cambias el color de fondo de la diapositiva del vídeo, cambia también el color de este filtro y vuelve a exportar.

---

## 5. Presentación (`UI-UX_presentación.odp`)

### 5.1. Por qué una presentación nueva

- El `.odp` anterior venía de una conversión desde PowerPoint, con formas muy anidadas, y fusionar diapositivas editando ese XML era frágil. Se generó una presentación nueva y limpia, y la anterior se conserva sin cambios.
- **Extensión mínima** del enunciado: 10 diapositivas de contenido, más portada, vídeo y contraportada, que no cuentan. En total, 13.
- Usa los **mismos colores que el vídeo**:

  | Color | Uso |
  |---|---|
  | Azul `#468DAE` | UI |
  | Naranja `#E07A3F` | UX y botones de acción |
  | Azul oscuro `#1F3B4D` | Front-end y textos fuertes |
  | Fondo `#EAF2F6` | Fondo de las diapositivas |

  La tipografía es Noto Sans.

### 5.2. Contenido (cubre todos los puntos del enunciado)

| N.º | Diapositiva | Punto del enunciado |
|---|---|---|
| — | Portada | — |
| — | Vídeo de presentación | Vídeo |
| 1 | UI · Interfaz de Usuario (con maqueta numerada) | Definición y objetivos |
| 2 | UX · Experiencia de Usuario (con viaje del usuario) | Definición y objetivos |
| 3 | UI vs UX: diferencias (tabla) | Diferencias |
| 4 | Relación entre UI y UX (diagrama + analogía) | Relación |
| 5 | Ejemplo: el botón «Comprar» | Relación en la práctica (enlaza con el vídeo) |
| 6 | Elementos y características de una UI | Elementos y características |
| 7 | Principios del diseño UX (Norman, Nielsen, proceso) | Principios UX |
| 8 | Importancia en webs y aplicaciones | Importancia |
| 9 | Personas y referentes | Referentes |
| 10 | Evolución de la UI y la UX (línea de tiempo) | Evolución histórica |
| — | Contraportada: ¡Gracias!, ideas clave y fuentes | — |

- **Fusionado o recolocado respecto a la versión anterior:**
  - El índice se ha quitado.
  - Las tendencias se integran en la evolución histórica.
  - Las conclusiones y las fuentes pasan a la contraportada.
  - Elementos y características comparten diapositiva.
  - Los principios de Norman, las heurísticas de Nielsen y el proceso UX comparten diapositiva.
- **Ideas nuevas:**
  - El ejemplo del botón «Comprar», el mismo del vídeo.
  - «El usuario no ve la UX, la vive».
  - Un mapa de experiencia con el punto de frustración (el pago).
  - El juicio estético en unos 50 ms (Lindgaard, 2006).
  - La Ley Europea de Accesibilidad, aplicable desde junio de 2025.
  - El reparto del trabajo entre UX, UI y front-end.
- Cada diapositiva tiene **notas del orador** (*Ver → Notas*).

### 5.3. Editar la presentación

- **Textos:** son cuadros de texto normales de LibreOffice; se editan con doble clic.
- **Gráficos:** están en `Graficos_presentacion/` como SVG, con grupos con nombre (`boton`, `ui`, `ux`, `frontend`…). Se editan en Inkscape. Dentro del `.odp` van **incrustados**, así que tras editar un SVG hay que reinsertarlo: clic derecho sobre la imagen → *Reemplazar…*.
- **Regenerar todo:** si se cambian los scripts de `_scripts/`:

  ```bash
  python3 _scripts/svg_presentacion.py Graficos_presentacion
  python3 _scripts/odp_presentacion.py . "UI-UX_presentación.odp"
  ```

  Ojo: esto sobrescribe los cambios hechos a mano en el `.odp`.

### 5.4. Insertar el vídeo en la presentación

1. **Exporta el vídeo** desde Shotcut como `UI-UX_video.avi` (ver apartado 4).
2. Abre `UI-UX_presentación.odp` y ve a la **diapositiva 2** («Vídeo de presentación»).
3. **Borra el marcador:** el rectángulo oscuro, el triángulo naranja y el texto «Insertar aquí…». Si uno tapa a otro, selecciónalos con *Tab*, que va pasando de un objeto a otro.
4. Ve a *Insertar → Audio o vídeo…*, elige `UI-UX_video.avi` y decide la casilla **Enlazar**:
   - **Desmarcada (recomendado): el vídeo se incrusta** dentro del `.odp`. Funciona en cualquier ordenador, pero el archivo pesa lo mismo que el vídeo.
   - **Marcada:** el `.odp` solo guarda la ruta. Pesa poco, pero el vídeo deja de verse si cambia de carpeta o de ordenador, y en la entrega van en carpetas separadas.
5. **Colócalo donde estaba el marcador:** clic derecho → *Posición y tamaño* (F4), con la casilla *Mantener proporción* activada.
   - Posición X: **7,41 cm**
   - Posición Y: **3,53 cm**
   - Anchura: **19,05 cm**
   - Altura: **10,72 cm**
6. **Pruébalo con F5** desde esa diapositiva:
   - El vídeo debería reproducirse al llegar a ella; si no arranca, haz clic sobre él.
   - Al seleccionar el vídeo en modo edición aparece la barra *Reproducción multimedia* (reproducir, pausa, repetir, volumen).
7. **Sombra (opcional):** las esquinas redondeadas ya vienen en el vídeo (ver 4.1). Para darle sombra:
   - Dibuja un rectángulo redondeado oscuro, por ejemplo `#1F3B4D` con 70–80 % de transparencia.
   - Hazlo un poco más grande que el vídeo o desplázalo unos milímetros hacia abajo.
   - Envíalo **detrás** del vídeo con clic derecho → *Organizar → Enviar al fondo*.

   Las formas colocadas detrás del vídeo funcionan; las de delante, no.
8. **Si el vídeo no se reproduce en Linux** (ni se ve, ni arranca, ni salen controles): es un fallo de LibreOffice con **Wayland**, el sistema gráfico por defecto de GNOME en Ubuntu. Ni el vídeo ni la presentación están mal. Se soluciona abriendo LibreOffice con el backend X11:

   ```bash
   GDK_BACKEND=x11 soffice --show "UI-UX_presentación.odp"   # modo presentación
   GDK_BACKEND=x11 soffice "UI-UX_presentación.odp"          # modo edición
   ```

   Para que sea permanente, crea un lanzador propio de Impress:
   1. Copia `/usr/share/applications/libreoffice-impress.desktop` a `~/.local/share/applications/`.
   2. En la copia, cambia la línea `Exec=` por `Exec=env GDK_BACKEND=x11 libreoffice --impress %U`.

   Así, abrir un `.odp` con doble clic ya usa X11. Para deshacerlo, borra ese archivo. Las versiones recientes de Ubuntu ya no ofrecen la sesión «Ubuntu en Xorg».

   La diapositiva 2 lleva esta indicación en sus **notas del orador** (*Ver → Notas*), para quien abra el archivo. En Windows y macOS el vídeo se reproduce directamente.
9. **Compruébalo en el ordenador donde vayas a presentar.** Que el AVI se reproduzca depende de los códecs del sistema: en Linux, GStreamer; en Windows, los del propio sistema. Si allí no se ve, exporta otra vez con el códec H.264 o MPEG-4 dentro del AVI, o lleva una copia en MP4 por si acaso. Eso sí, la entrega pide `.avi`.

---

## 6. Problemas encontrados y soluciones

- **Decimales y configuración regional:** al renderizar desde la terminal con `melt` en un sistema en español, los decimales (`0.65`) se leían mal y desaparecían elementos (la barra y el logo). Se soluciona con `LC_ALL=C melt proyecto.mlt`. En Shotcut no ocurre.
- **Fundido de opacidad sobre texto:** el fondo de la portada se volvía transparente pero el texto no, porque el texto necesita su propia animación de opacidad (ver 2.8).
- **Mover archivos con el proyecto abierto:** si Shotcut tiene el proyecto abierto y guardas después de mover un medio, vuelve a escribir la ruta antigua. Hay que cerrarlo sin guardar y volver a abrirlo.
- **El vídeo no se reproduce en Impress (Linux con Wayland):** LibreOffice con GTK3 no muestra vídeo bajo Wayland. Se abre con `GDK_BACKEND=x11 soffice …` (ver 5.4, paso 8).
- **Vídeo enlazado en lugar de incrustado:** si al insertarlo se marca *Enlazar*, el `.odp` solo guarda una ruta relativa (por ejemplo `../UI-UX_video.avi`), que se rompe al mover los archivos o al entregarlos en carpetas separadas.
- **Esquinas redondeadas en el vídeo de la presentación:** Impress no puede redondear un vídeo. Se redondean en Shotcut con un filtro en la pista *Salida*, con las esquinas del color del fondo de la diapositiva (ver 4.1).
- **Texto que no se ajusta en LibreOffice:** el texto escrito dentro de un rectángulo no siempre pasa de línea. Es más fiable un **cuadro de texto** encima de la forma.

---

## 7. Lista de entrega

- [ ] Añadir el filtro de esquinas redondeadas en la pista *Salida* (ver 4.1).
- [ ] Exportar `UI-UX_video.avi` desde `UI-UX_video.mlt`.
- [ ] Insertarlo en la diapositiva 2 de `UI-UX_presentación.odp`, incrustado y en el lugar del marcador (ver 5.4).
- [ ] Revisar la presentación en modo presentación (F5).
- [ ] Comprimir en `APELLIDO1_APELLIDO2_NOMBRE_UI-UX.rar` con dos carpetas: la presentación y el vídeo.
