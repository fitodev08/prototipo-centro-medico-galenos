# Continuidad del proyecto Galenos

## Producto y alcance
Este repositorio contiene un portal público con un prototipo estático y documentación basada en el Informe N.º 2 del grupo 2. Trabajar en español. Mantener index.html como entrada a aplicación, presentación, documentación y catálogo completo.
No afirmar que existen backend, pagos, correos, 2FA real o sincronización multiusuario. Los datos de demostración se guardan en cada navegador. No introducir información real de pacientes ni credenciales de servicios.

## Fuentes y Scrum
La numeración vigente es RF 01–19; RF 17 reagendamiento, RF 18 ajuste de comisión, RF 19 base por especialidad. Existen 24 historias, 23 estimadas por 99 puntos; HU-4-7 pendiente de estimar. No inventar aceptación del PO, ceremonias, acuerdos ni estados de Jira. Moqups nativo sigue pendiente.
Los originales internos permanecen en el paquete local. No subir el informe con autoevaluaciones, rutas privadas, tokens, contraseñas de servicios o datos personales internos.

## Cambios y publicación
La configuración del repositorio está en site.config.json. El flujo .github/workflows/pages.yml publica automáticamente los commits de main en GitHub Pages después de pasar pruebas y validar los enlaces. No dar por publicado un cambio hasta verificar el despliegue y la URL real.
Editar fuentes aquí. Ejecutar npm test, npm run build y npm run check. build crea el catálogo, manifiesto, visor documental y _site. Si se modifican slides del PowerPoint, actualizar también las doce imágenes del visor Presentacion/diapositivas y verificar su correspondencia.
Registrar cambios relevantes en CHANGELOG.md. Mantener documentación, criterios, matriz y pruebas coherentes con las reglas de Aplicacion/domain.js. Las capturas son evidencia histórica y no deben presentarse como pruebas de cambios posteriores sin repetirse.
Para publicar: commit y push a main (o PR y merge según la instrucción del usuario), comprobar Actions y abrir el portal. Nunca incluir .git ni archivos internos en _site.
