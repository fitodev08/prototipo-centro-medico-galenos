# Prototipo · Centro Médico Galenos

Portal de revisión del proyecto SGMG con aplicación navegable, presentación en el navegador, PowerPoint editable, documentación Scrum, historias y evidencias.

La entrada principal es **index.html**. El catálogo «Todos los archivos» permite llegar a cada recurso compartido. La configuración del repositorio está en site.config.json y los pasos de publicación en PUBLICACION.md.

## Probar la aplicación
Abrir Aplicacion/index.html y seleccionar un perfil de demostración. Contraseña compartida de prueba: Galenos2026! Segundo factor simulado: 246810.
Los datos son ficticios y se guardan localmente en cada navegador. Las integraciones de correo, bonos, pagos y seguridad de servidor están simuladas.

## Desarrollo
No requiere instalar paquetes. Con Node.js: npm test; npm run build; npm run check; npm start.
El flujo de GitHub Actions valida los cambios de main y publica _site en GitHub Pages. Conservar la URL del portal para compartir futuras versiones.

## Estado académico
Se representan RF 01–19 en el prototipo. El backlog contiene 24 historias; 23 estimadas con 99 puntos y HU-4-7 pendiente de estimación. La aceptación del PO, las ceremonias reales y el proyecto nativo de Moqups no están acreditados. Consultar Documentacion/06_Decisiones_y_pendientes.md y Documentacion/07_Entrega_y_Moqups.md.
Los originales internos con evaluaciones del equipo se conservan localmente y no forman parte de esta copia pública.
