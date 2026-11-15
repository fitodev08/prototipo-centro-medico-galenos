# Manual y demostración del prototipo

## Cómo abrirlo

Abre Prototipo Centro Médico Galenos.html en la carpeta principal y elige Abrir aplicación. También puedes abrir Aplicacion/index.html directamente en Chrome o Edge. No requiere instalación ni conexión a internet para las pantallas y los datos de prueba. La generación de nuevas claves usa Web Crypto; si el navegador restringe funciones al abrir archivos locales, utiliza el servidor incluido con Node.js.

El archivo de inicio también abre esta documentación y la presentación. Conserva toda la estructura de carpetas al copiar el proyecto.

## Acceso de demostración

| Perfil | Correo |
|---|---|
| Paciente | paciente@galenos.example |
| Secretaría | secretaria@galenos.example |
| Cajero | caja@galenos.example |
| Médico | medico@galenos.example |
| Administrador | admin@galenos.example |

La contraseña común es Galenos2026! Las cuentas se seleccionan mediante botones que cargan sus credenciales; después se pulsa Ingresar. El segundo factor, si lo habilitas, usa el código fijo 246810. No son credenciales para un servicio externo.

## Datos guardados

Los cambios persisten en el navegador utilizado. Una ventana privada, otro navegador o borrar sus datos crea un entorno separado. Exportar datos, disponible para administración, descarga un JSON de demostración. No es un respaldo automático y esta versión no incluye restauración por importación.

Preparar datos de demostración de hoy reinicia el escenario local después de confirmarlo. Al hacerlo se pierden los cambios de prueba en ese navegador; exporta primero si quieres conservarlos. Los documentos del proyecto no se modifican.

## Demostración uno del portal

1. Ingresa como Paciente y muestra la próxima cita y las especialidades.
2. Pulsa Reservar una hora y recorre sucursal, especialidad, profesional, horario y confirmación.
3. Comprueba el código y la cita en Mis citas; revisa el mensaje simulado.
4. Sobre una reserva de más de veinticuatro horas, prueba reagendar. Comprueba que conserva el código y libera el horario previo.
5. Prueba anulación y revisa la regla de anticipación cuando corresponda.

Las horas ofrecidas dependen de la fecha y hora reales de Santiago. Los bloques iniciales son de lunes a sábado por la mañana. Si ya pasó el horario, se ofrecerá el siguiente día disponible; esto evita reservar en el pasado.

## Demostración dos de atención y finanzas

1. Con datos recién preparados, entra como Cajero y busca GAL-1001, la reserva inicial de Camila para hoy.
2. Selecciona Bono Fonasa y escribe un folio de prueba. Intenta registrar sin marcar la validación: debe rechazarse.
3. Usa Efectivo y registra 28.000 pesos. Se emite un recibo y la cita pasa a En espera.
4. Cambia a Médico: Camila aparece junto con el otro paciente de prueba, ordenados por hora. Marca su atención como finalizada.
5. Cambia a Administrador, abre Recaudación y consulta el mes actual. Los pagos de esta prueba suman 101.000 pesos: 28.000 y 45.000 iniciales, más 28.000 del pago recién registrado.
6. En Comisiones calcula para la Dra. Sofía Rojas y el mes actual. Dos atenciones de base 28.000 al 20 por ciento generan 11.200 pesos para el centro.
7. Cambia a Secretaría, emite el comprobante y verifica que queda Pendiente y cerrado. Registra una referencia ficticia de depósito: pasa a Pagada.

Se separan la reserva futura del portal y la atención de hoy para respetar la regla de que el médico solo ve pacientes del día. Una cita futura pagada aparecerá en la espera cuando corresponda su fecha de atención.

## Otras operaciones para revisar

- Secretaría: agregar disponibilidad sin solapamientos y generar tres meses; configurar un día no laborable; bloquear una fecha que tenga reservas y leer la confirmación.
- Administración: crear sucursal y asignar médicos; secretaría prepara después sus bloques y agenda.
- Administración: modificar hora base o porcentaje con vigencia; comprobar que un periodo cerrado conserva su cálculo.
- Administración: ajustar una comisión pendiente indicando motivo; no se permite ajustar una ya pagada en esta versión.
- Administración: crear, desactivar o cambiar rol de personal; revisar auditoría y desbloqueo.
- Cajero o administrador: habilitar segundo factor, salir e ingresar nuevamente para probar el paso adicional.
- Secretaría: en Notificaciones, simular fallos y observar la alerta al agotar reintentos.

## Impresión y exportación

Los recibos y comprobantes se pueden imprimir o guardar como PDF desde el diálogo del navegador. Son documentos de prueba sin validez tributaria. Recaudación, movimientos propios y auditoría ofrecen CSV cuando el perfil lo permite.
