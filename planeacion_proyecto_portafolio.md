# Documento de Especificación y Planeación: Catálogo & Portafolio Web Movil-First

Este documento sirve como especificación técnica y funcional detallada para que un Agente de Inteligencia Artificial (AI Agent / Coding Assistant) pueda iniciar la estructuración y desarrollo del frontend del sitio web.

---

## 1. Visión General del Proyecto
El objetivo es desarrollar un sitio web tipo **Portafolio y Catálogo Informativo** totalmente optimizado para dispositivos móviles. La plataforma mostrará los trabajos anteriores de la empresa y los tipos de productos que maneja (enfocado en indumentaria/ropa personalizada, medallas, artículos institucionales y de merchandising promocional). 

El sitio no procesará ventas directas ni incluirá pasarela de pago; su objetivo principal es la **conversión directa mediante contacto estratégico a WhatsApp**.

---

## 2. Stack Tecnológico Recomendado
Para asegurar un diseño único, velocidad extrema y alta compatibilidad móvil:
- **Framework/Base:** HTML5/CSS3 nativo o React (Vite) para una navegación tipo Single Page Application (SPA) fluida.
- **Framework de Estilos:** **Tailwind CSS** (preferido por flexibilidad, control milimétrico de espacios y optimización de peso de estilos en producción).
- **Iconografía:** Lucide Icons / FontAwesome (en sus versiones optimizadas SVG).

---

## 3. Arquitectura de la Información y Páginas

### 3.1. Página Principal (Home)
- **Sección Hero:** Impactante, propuesta de valor clara de la empresa, botón de acción (CTA) directo al portafolio.
- **Resumen de Categorías:** Bloques visuales limpios que dividan los tipos de productos principales:
  1. Indumentaria y Textil Personalizado.
  2. Medallas y Reconocimientos.
  3. Artículos Institucionales y Merchandising.
- **Sección de Destacados / Trabajos Recientes:** Carrusel o cuadrícula pequeña con los casos de éxito más vistosos.
- **Llamado a la Acción (CTA) Final:** Banner inferior invitando a cotizar proyectos personalizados.

### 3.2. Catálogo / Portafolio Completo
- **Sistema de Filtros Superior:** Carrusel horizontal deslizable con el dedo (swipeable) en móviles para alternar categorías de productos de forma instantánea.
- **Vista de Cuadrícula (Grid):**
  - *Dispositivos Móviles:* 1 o 2 columnas (máximo detalle visual).
  - *Escritorio:* 3 o 4 columnas.
- **Elementos de la Tarjeta de Producto (Card):**
  - Imagen del trabajo/producto optimizada.
  - Título / Tipo de producto.
  - Etiqueta de categoría.
  - Botón interactivo "Cotizar por WhatsApp".

### 3.3. Detalle de Producto (Modal / Lightbox)
Al hacer clic en un elemento del catálogo, se abrirá una vista emergente optimizada:
- Galería de fotos compatible con gestos táctiles (swipe para pasar fotos, cerrar deslizando o con botón de cierre amplio).
- Breve descripción del trabajo realizado (materiales, técnicas de personalización).
- Botón destacado y fijo para iniciar la cotización en WhatsApp.

---

## 4. Requerimientos Esenciales de UI/UX Móvil (Mobile-First)

El Agente de AI debe estructurar el CSS y layouts bajo las siguientes reglas estrictas:
1. **Estrategia Mobile-First Nativa:** Escribir estilos base para pantallas móviles e implementar Media Queries `min-width` únicamente para pantallas de escritorio.
2. **Áreas Táctiles Correctas (Touch Targets):** Todos los botones, enlaces y filtros interactivos deben tener un área mínima de **44x44 píxeles** para evitar pulsaciones erróneas.
3. **Bloqueo de Efectos Hover en Móvil:** Los efectos de superposición de texto o zoom al pasar el cursor deben deshabilitarse o transformarse en interacciones de toque (tap) en móviles para no romper la experiencia del usuario.
4. **Layout Líquido con Flexbox y CSS Grid:** Evitar anchos fijos en píxeles (`px`). Utilizar porcentajes, `rem`, `vw` y layouts de Tailwind basados en `grid-cols-1 md:grid-cols-3`.

---

## 5. Lógica de Conversión e Integración con WhatsApp

Los enlaces hacia WhatsApp no deben ser planos. El sistema generará URLs con mensajes dinámicos pre-llenados utilizando la API de WhatsApp (`https://wa.me/`).

### 5.1. Botón Flotante Global
- Ubicado de forma persistente en la esquina inferior derecha.
- **Z-index:** Superior a cualquier modal.
- **Mensaje pre-llenado:** > *"Hola! Visité su página web y me gustaría recibir información general sobre sus servicios de merchandising y productos."*

### 5.2. Botones de Cotización por Categoría/Producto
Cada sección o modal de producto inyectará un texto personalizado al enlace para facilitar la trazabilidad del interés del cliente:
- **Para Indumentaria/Ropa:** > *"Hola! Estaba viendo los trabajos de indumentaria personalizada en su catálogo web y me interesa cotizar una cantidad para mi organización."*
- **Para Medallas:** > *"Hola! Me llamaron la atención los diseños de medallas y reconocimientos que tienen en su portafolio. ¿Me podrían dar información de precios y tiempos de entrega?"*
- **Para Artículos Institucionales:** > *"Hola! Deseo cotizar artículos promocionales e institucionales basados en los modelos que vi en su sitio web."*

---

## 6. Criterios de Rendimiento y Optimización de Carga (Performance)

Dado que es un portafolio altamente visual, el agente debe implementar:
- **Lazy Loading Nativo:** Atributo `loading="lazy"` en todas las imágenes del catálogo que no pertenezcan al primer pantallazo (above the fold).
- **Formatos de Imagen Modernos:** Preparar el código estructural para soportar imágenes en formato **WebP** o **AVIF** para reducir el peso hasta un 70% comparado con PNG/JPG.
- **Viewport Configurado:** Asegurar la etiqueta `<meta name="viewport" content="width=device-width, initial-scale=1.0">` en el archivo raíz.

---

## 7. Instrucciones Directas para el Agente de AI (Prompt de Arranque)

*Estimado Agente de AI: Utiliza las especificaciones descritas en este documento para ejecutar las siguientes tareas paso a paso:*
1. *Configura la estructura base del proyecto utilizando HTML5/Tailwind CSS o React/Tailwind según corresponda.*
2. *Crea el layout global asegurando que el diseño base sea estrictamente móvil (Mobile-First).*
3. *Implementa el componente del Botón Flotante de WhatsApp y la lógica de formateo de URLs con caracteres de escape para los espacios (`%20`).*
4. *Diseña la cuadrícula responsiva del catálogo que adapte las columnas de 1-2 en móviles a 3-4 en pantallas grandes.*
5. *Desarrolla el componente de filtros superiores en formato de carrusel deslizable horizontalmente para resoluciones móviles.*
