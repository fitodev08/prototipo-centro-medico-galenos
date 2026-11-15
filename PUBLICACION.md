# Publicación y cambios futuros

El repositorio es fitodev08/prototipo-centro-medico-galenos. La página principal es index.html, con acceso a aplicación, presentación, documentación y catálogo de recursos.

## Configuración inicial
1. Crear el repositorio público en la cuenta configurada en site.config.json.
2. Subir este contenido a la rama main, incluyendo .github/workflows/pages.yml.
3. En Settings → Pages, seleccionar GitHub Actions como fuente de publicación.
4. Ejecutar o repetir el flujo «Publicar portal Galenos» y comprobar que termina correctamente.
5. Abrir la URL indicada por el despliegue y verificar el portal y sus enlaces. Una URL prevista no acredita que el sitio esté activo.

## Próximas modificaciones
Pedir el cambio en el chat indicando el proyecto Galenos. Codex revisará el repositorio, cambiará los archivos, ejecutará pruebas y subirá el commit autorizado. Al completarse el flujo, los visitantes verán la versión nueva en el mismo enlace al volver a cargar la página. Un cambio guardado únicamente en el equipo no actualiza GitHub.
También se pueden registrar solicitudes en Issues del repositorio. Crear una incidencia no implementa ni publica el cambio automáticamente; requiere trabajo y un commit posterior.

Los datos que se ingresan en la aplicación son de demostración y se guardan en cada navegador. Publicar código no sincroniza esos datos entre visitantes. El portal no requiere claves de servicios ni un servidor de aplicación.

## Verificación local
Con Node.js instalado: npm test, npm run build, npm run check. npm start abre un servidor local y muestra su dirección en consola.
