# Arquitectura y modelo de datos

## Implementación entregada

La aplicación local usa HTML, CSS y JavaScript sin dependencias externas. Los recursos se incluyen en la carpeta y se puede abrir el archivo de inicio directamente en un navegador moderno. La información de demostración se guarda en localStorage y la sesión en sessionStorage.

| Capa | Archivo | Responsabilidad |
|---|---|---|
| Interfaz | Aplicacion/index.html y styles.css | Estructura, diseño responsivo, foco, formularios y presentación. |
| Interacción | Aplicacion/app.js | Navegación por rol, formularios, diálogos, mensajes, impresión y exportación. |
| Dominio | Aplicacion/domain.js | Reglas, estados, permisos de las operaciones y cálculo monetario. |
| Estado local | Navegador | Datos ficticios y persistencia de esta demostración. |
| Verificación | Pruebas/domain.test.cjs | Escenarios automatizados de negocio. |

Separar dominio e interfaz permite probar reglas sin depender de la presentación. No hay un servidor de datos, una API desplegada ni una integración real con proveedores.

## Entidades

| Entidad | Atributos relevantes | Relaciones |
|---|---|---|
| Usuario | Identidad, rol, correo, estado, activación, intentos y bloqueo. | Un paciente tiene citas; un usuario médico se asocia a un profesional. |
| Profesional | Especialidad, sucursales y porcentajes con vigencia. | Disponibilidades, horarios, pagos y comisiones. |
| Especialidad | Nombre e historial de hora base monetaria. | Profesionales y cálculo por atención. |
| Sucursal | Nombre y referencia de ubicación de prueba. | Profesionales, disponibilidades, horarios y pagos. |
| Disponibilidad | Día, inicio, término, médico y sucursal. | Origina horarios concretos. |
| Calendario base | Fecha y motivo de día no laborable. | Excluye o bloquea horarios. |
| Horario | Médico, sucursal, fecha, hora y estado de bloqueo. | Puede tener una reserva activa. |
| Cita | Paciente, horario, código, estado y marcas de revisión. | Pago, notificaciones y atención. |
| Pago | Folio, medio, importe, fecha, base y porcentaje capturados. | Una cita y un profesional. |
| Comisión | Profesional, periodo, detalle, cálculo, ajustes, cierre y estado. | Pagos del periodo y referencia de pago. |
| Notificación | Tipo, fecha de ejecución, intentos y estado. | Paciente y cita. |
| Auditoría | Fecha, responsable, acción y referencia. | Operaciones relevantes. |

## Estados e invariantes

- Cita: Reservada pasa a En espera por pago, a Atendida por el médico, o a Anulada según los permisos y reglas. Una marca de revisión de agenda impide cobrar hasta resolverla.
- Comisión: Calculada pasa a Pendiente al emitir el comprobante y cerrar el cálculo; pasa a Pagada al registrar su referencia. Los ajustes se conservan separados del importe original.
- Notificación: Programado pasa a Simulado en una entrega de prueba; tras un intento inicial y tres reintentos fallidos pasa a Fallido y genera alerta visible.
- Una cita tiene como máximo un pago en esta versión. Un horario tiene como máximo una reserva activa dentro del estado local.
- Los importes se expresan en pesos enteros. El porcentaje admite dos decimales y se calcula mediante puntos básicos y redondeo al peso por atención.

## Fórmula financiera adoptada

El RF 19 del informe especifica la hora base de la especialidad como base de cálculo. Por ello la comisión de una atención es hora base por porcentaje del médico, y la comisión mensual suma las atenciones pagadas del periodo. Esto reemplaza la base de recaudación descrita en versiones anteriores del RF 14 y en parte del CU-14.

Ejemplo ficticio: dos atenciones con hora base de 28.000 pesos y porcentaje de 20 generan 5.600 pesos cada una, total 11.200. La recaudación se informa por separado y puede diferir de la base si el importe recibido es distinto. La interpretación mensual por suma de atenciones debe ratificarse con el PO porque RF 19 no desarrolla todo el cálculo del periodo.

La base y el porcentaje se capturan al registrar cada pago, aplicando la vigencia de esa fecha. Cambios posteriores no reescriben los comprobantes. Esta elección necesita validación para casos de corrección retroactiva, pagos posteriores al cierre y devoluciones.

## Arquitectura objetivo de producción

Navegador responsivo, API de aplicación, base de datos relacional, cola de notificaciones, proveedor de correo y almacenamiento separado para respaldos. El control de acceso y las reglas se ejecutarán en el servidor, con transacciones y restricciones de unicidad para evitar dobles reservas entre usuarios concurrentes.

El archivo contrato-api.json presenta un contrato inicial para revisión, no una API implementada. El esquema de datos del prototipo es una referencia para migración; las claves, contraseñas, sesiones, auditoría y respaldos requieren un diseño operativo antes de tratar datos reales.

## Criterios para la migración

- Reemplazar localStorage por persistencia del servidor y migraciones versionadas.
- Implementar autenticación y autorización de servidor, HTTPS y un segundo factor con códigos de un solo uso reales.
- Mantener restricciones de unicidad en correo, RUT, folios y reserva activa por horario.
- Confirmar y reagendar con transacciones para liberar y ocupar horarios de forma atómica.
- Procesar notificaciones y respaldos mediante tareas del servidor, incluso con todos los navegadores cerrados.
- Proteger registros de auditoría y definir retención, restauración y controles de acceso.
- Ejecutar pruebas de carga, seguridad, accesibilidad, restauración y aceptación del equipo antes del despliegue real.
