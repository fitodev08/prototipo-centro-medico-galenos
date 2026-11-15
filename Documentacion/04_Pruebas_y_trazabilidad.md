# Pruebas y trazabilidad

## Verificación automatizada

La suite usa el ejecutor de pruebas integrado de Node.js y no requiere paquetes externos. Cubre dobles reservas, permisos, regla de veinticuatro horas, reagendamiento sin pérdida de la cita original, bloques solapados, calendario, pagos, bonos, espera, recaudación, comisiones, cierres, ajustes, usuarios, bloqueo, activación y reintentos de notificaciones.

El archivo RESULTADOS.md en la carpeta Pruebas registra el resultado de ejecución final. El código de las pruebas queda incluido para repetirlas. Pasar esas pruebas demuestra comportamiento del dominio sobre sus escenarios, no certifica infraestructura, concurrencia entre servidores ni cumplimiento completo del DoD.

## Comprobación en navegador

Se recorrieron el acceso del paciente, las cinco etapas de reserva hasta obtener código, el rechazo de un bono inválido, el pago válido con recibo, la aparición del paciente en la espera del médico, el marcado de atención, el cálculo financiero y la emisión y registro de pago de una comisión. Se revisó además el portal en tamaño móvil.

Las capturas de Evidencias se obtuvieron de la aplicación real del paquete, usando datos ficticios. Se conservan para el manual y la presentación; no son diseños que sustituyan la navegación.

## Pruebas de aceptación recomendadas al equipo

| Escenario | Resultado esperado |
|---|---|
| Registrar un RUT o correo duplicado | La cuenta no se crea. |
| Entrar antes de activar la cuenta | Se requiere activación. |
| Fallar cinco contraseñas | Se bloquea quince minutos y queda registro. |
| Intentar reservar un horario ocupado | Se rechaza y no se crea una segunda cita. |
| Anular a menos de veinticuatro horas | El paciente recibe rechazo y conserva su cita. |
| Reagendar a un horario que ya fue tomado | Se conserva la reserva original. |
| Agregar disponibilidad solapada | El bloque se rechaza. |
| Bloquear agenda con reservas | Se presenta la lista y se requiere confirmación. |
| Intentar cobrar con bono no validado | No aparece recaudación ni paciente en espera. |
| Registrar un pago válido | Se emite folio y el paciente pasa a espera. |
| Abrir el perfil de otro médico | Solo ve pacientes propios del día. |
| Filtrar la recaudación | El total coincide con la suma de las filas. |
| Emitir comisión y cambiar parámetros | El comprobante emitido conserva su cálculo. |
| Agregar ajuste sin motivo | Se rechaza. |
| Registrar pago de comisión | Pasa de Pendiente a Pagada y conserva referencia. |
| Mantener sesión del personal inactiva | Se cierra al superar quince minutos. |

## Estado de requisitos no funcionales

| RNF | Evidencia de este paquete | Pendiente para el producto real |
|---|---|---|
| 01 Rendimiento | Reglas y filtros funcionales con datos de prueba. | Carga de 150 usuarios y medición de percentiles en el servidor de referencia. |
| 02 Seguridad | Navegación y comprobación de rol en dominio, auditoría local, hash de claves de prueba registradas. | HTTPS, seguridad de servidor, sesiones protegidas, gestión de secretos y auditoría resistente a alteración. |
| 03 Disponibilidad | No se certifica una disponibilidad operativa. | Infraestructura y medición del SLA de 99,5 por ciento. |
| 04 Usabilidad | Reserva en cinco etapas, controles etiquetados y diseño responsivo revisado. | Evaluación completa de accesibilidad WCAG 2.1 AA y pruebas con usuarios. |
| 05 Privacidad | Consentimiento representado y acceso por perfil; solo datos ficticios. | Evaluación y controles de tratamiento de datos reales conforme a los requisitos aplicables. |
| 06 Escalabilidad | Alta de sucursal y asignación por configuración. | Validación con persistencia y carga en la arquitectura real. |
| 07 Respaldo | Exportación manual de JSON desde administración. | Respaldo diario automático en un medio separado y prueba de restauración. |
| 08 Inactividad | Control de quince minutos en la interfaz del personal. | Control de sesión y expiración también en el servidor. |
| 09 Segundo factor | Recorrido con código fijo de prueba. | Integración real con aplicación autenticadora y códigos de un solo uso. |

## Aceptación y evidencia

La revisión de código por otra persona y la validación del PO deben registrarse por el equipo. El paquete no atribuye aprobaciones, reuniones, usuarios entrevistados ni una retrospectiva realizada. La matriz de trazabilidad asociada enlaza RF, historias, módulos, criterios y estado de revisión.
