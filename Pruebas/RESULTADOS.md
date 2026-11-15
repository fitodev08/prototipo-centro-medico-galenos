# Resultados de verificación de Galenos

Se ejecutaron **26 pruebas de dominio**: **26 aprobadas**, **0 fallidas**. Código de salida: 0.

La evidencia completa está en resultados.tap y el resumen con fecha de ejecución en resultado.json. Para repetir, ejecutar con Node.js: `node Pruebas/ejecutar.cjs` desde la carpeta del proyecto.

## Recorridos comprobados en navegador

- Acceso del paciente y reserva en cinco etapas hasta obtener GAL-1005.
- Bono inválido rechazado sin completar el pago.
- Pago válido de GAL-1001 con recibo REC-2026005.
- Paciente visible en la espera del médico del día y marcado de atención.
- Comisión de dos atenciones con base de 28.000 pesos al 20 por ciento: 11.200 pesos.
- Comprobante COM-101 emitido y pasado a Pagada mediante referencia informativa.
- Segundo factor de demostración: código incorrecto rechazado y código de prueba aceptado.
- Portal móvil revisado: sin desbordamiento horizontal en el tamaño probado.
- Documentación: 24 filas de historias; HU-4-7 identificada como pendiente de estimación.
- No se capturaron errores de consola en la revisión realizada.

Las capturas y el registro están en Evidencias. Estas comprobaciones no incluyen una prueba de carga de 150 usuarios, una auditoría completa de accesibilidad o seguridad, revisión independiente ni aceptación del Product Owner.
