# Producto y alcance de Galenos

El prototipo SGMG reúne la gestión de horas médicas, caja presencial, espera y comisiones del Centro Médico Galenos. Su referencia principal es el Informe N.º 2 del grupo 2, revisión 2.0 del 21 de octubre de 2026. La construcción permite revisar las reglas y los recorridos del producto antes de invertir en una implementación de producción.

## Visión y valor

Centralizar agendas, reservas y control financiero para reducir trabajo administrativo, evitar errores de cálculo y facilitar nuevas sucursales. El informe define cinco métricas: reserva en cinco pasos, exactitud de comisiones al peso, búsquedas con el 95 por ciento bajo 1,5 segundos, sucursales por configuración y recaudación conciliada con caja. En esta versión se comprueban reglas sobre datos de demostración; las métricas de carga y operación requieren un sistema desplegado y mediciones posteriores.

## Perfiles y permisos del recorrido

| Perfil | Operaciones |
|---|---|
| Paciente | Registro, activación simulada, acceso, reserva en cinco etapas, consulta, anulación, reagendamiento y mensajes propios. |
| Secretaría | Disponibilidad, generación trimestral, calendario base, cambios de agenda con confirmación, anulaciones, recaudación, emisión de comisiones y registro de su pago. |
| Cajero | Registro presencial de pagos, validación de bono representada, recibos y movimientos propios. |
| Médico | Espera del día con pago validado, marcado de atención y comprobantes propios emitidos. |
| Administrador | Recaudación, cálculo, hora base por especialidad, porcentajes, ajustes, usuarios, roles, sucursales, auditoría y exportación de datos de prueba. |

La navegación respeta los perfiles y las funciones de dominio vuelven a comprobar los permisos. Al tratarse de código ejecutado en el navegador, esto permite validar el diseño de permisos y no constituye una barrera de seguridad frente a alguien con acceso al equipo o a las herramientas del navegador.

## Reglas funcionales

- Reserva: sucursal, especialidad, profesional, fecha y hora, confirmación. Se valida de nuevo el horario al confirmar y se retira de la disponibilidad local.
- Anulación por paciente: solo reservas propias no atendidas, sin pago y con al menos veinticuatro horas de anticipación. Secretaría puede gestionar las pagadas; se conserva el pago para revisión y no se ejecuta una devolución.
- Reagendamiento: misma especialidad, anticipación de veinticuatro horas y cambio de ocupación en una operación local. Si el nuevo horario está ocupado se conserva la reserva original.
- Disponibilidad: bloques por médico y día; se rechaza solapamiento aunque se intente usar otra sucursal para el mismo profesional.
- Agenda: tres meses por una acción; excluye días no laborables configurados. Repetir la generación no duplica horarios.
- Cambios de agenda: se listan las reservas afectadas y se pide confirmación. Se conservan para gestión y se impide cobrar una reserva cuya disponibilidad sigue sin resolverse.
- Pago: medio, importe en pesos y folio único. Un bono inválido no cambia el estado ni registra recaudación. Un pago validado deja la cita en espera para el día de atención.
- Médico: consulta únicamente pacientes propios del día, con pago validado, ordenados por hora; la vista se actualiza cada cinco segundos mientras está abierta.
- Comisiones: por cada atención pagada se aplica hora base de la especialidad por porcentaje del médico; el periodo suma los resultados. La base y el porcentaje se conservan con el pago. Emitir el comprobante cierra el cálculo del periodo.
- Ajustes: motivo, importe, responsable y fecha separados del cálculo original. El registro de pago de comisión guarda una referencia y cambia el estado a pagada.

## Límites

No se incluyen pasarelas de pago, historias clínicas, diagnósticos ni transferencias de fondos. Los médicos, pacientes, sucursales, aranceles y días no laborables iniciales son ficticios. La imagen de la fachada procede de la presentación original.

## Cobertura y autoridad de fuentes

El informe actual usa RF 17 para reagendar, RF 18 para ajustar y RF 19 para hora base por especialidad. Esta numeración prevalece sobre la ERS anterior. El desbloqueo manual se conserva como soporte de acceso y auditoría; ya no se presenta como un RF 17 independiente.

La guía académica de prototipado exige un proyecto navegable en Moqups y entrega de su enlace en AVA. Esta versión local aporta una implementación navegable y material para trasladar los recorridos; todavía no existe un enlace de Moqups verificado.
