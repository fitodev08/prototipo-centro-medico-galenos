# Historias de usuario y criterios de aceptación

Las historias se completan para revisión a partir de los RF, las tareas y las tablas del Informe N.º 2. Se conservan identificadores y estimaciones de origen. Las decisiones adicionales se describen en el registro de pendientes. Las historias están representadas en el prototipo y todavía requieren validación del equipo y de sus RNF aplicables.

## HU-1-1 Iniciar sesión según el rol

Como usuario del sistema, quiero iniciar sesión con mis credenciales, para acceder a las funciones de mi perfil.

Origen: RF 01. Prioridad: Must. Sprint de origen: 1. Puntos: 5.
Dependencias: ninguna funcional previa.

Criterios de aceptación:

- Dado un usuario activo y verificado, cuando ingresa credenciales válidas, entonces accede al espacio de su rol.
- Dadas credenciales incorrectas, cuando se intenta el acceso, entonces se deniega y se registra el intento.

Módulo: Acceso y seguridad. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-1-5 Bloquear la cuenta tras intentos fallidos

Como administrador, quiero bloquear temporalmente las cuentas con intentos fallidos, para reducir intentos de acceso no autorizado.

Origen: RF 01. Prioridad: Must. Sprint de origen: 1. Puntos: 3.
Dependencias: HU-1-1.

Criterios de aceptación:

- Dada una cuenta con cuatro fallos consecutivos, cuando falla nuevamente, entonces queda bloqueada quince minutos.
- Dada una cuenta bloqueada, cuando vence el plazo o administración la desbloquea, entonces puede volver a intentar el acceso y queda trazabilidad del desbloqueo.

Módulo: Acceso y seguridad. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-1-3 Administrar usuarios y roles

Como administrador, quiero crear, desactivar y asignar roles al personal, para controlar quién opera el centro.

Origen: RF 15. Prioridad: Must. Sprint de origen: 1. Puntos: 5.
Dependencias: HU-1-1.

Criterios de aceptación:

- Dada una sesión administradora, cuando crea personal con datos válidos, entonces existe una cuenta con su rol y se registra el cambio.
- Dada una cuenta desactivada, cuando intenta ingresar, entonces se deniega el acceso. Otro rol no puede administrar usuarios.

Módulo: Usuarios y roles. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-1-2 Registrar cuenta de paciente

Como paciente, quiero crear y activar mi cuenta, para reservar mis atenciones por el portal.

Origen: RF 13. Prioridad: Must. Sprint de origen: 1. Puntos: 5.
Dependencias: ninguna funcional previa.

Criterios de aceptación:

- Dados nombre, RUT, correo, teléfono y contraseña de prueba válidos y consentimiento, cuando se registra, entonces se crea una cuenta pendiente de activación.
- Dado un RUT o correo ya utilizado, cuando se registra, entonces se rechaza el duplicado.
- Dada una cuenta pendiente, cuando abre el enlace de activación simulado, entonces puede acceder con sus credenciales.

Módulo: Registro y activación. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-2-1 Ingresar disponibilidad diaria de médicos

Como secretaria, quiero ingresar bloques de disponibilidad por profesional y día, para preparar agendas utilizables.

Origen: RF 02. Prioridad: Must. Sprint de origen: 2. Puntos: 3.
Dependencias: HU-1-1, HU-1-3.

Criterios de aceptación:

- Dado un profesional asignado a una sucursal, cuando se guarda un bloque válido, entonces queda registrado por día y profesional.
- Dado un bloque existente, cuando otro bloque del mismo médico se solapa, entonces se rechaza aunque corresponda a otra sucursal.

Módulo: Disponibilidad. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-2-8 Mantener el calendario base con feriados

Como secretaria, quiero mantener el calendario base con días no laborables, para evitar reservas en fechas de cierre.

Origen: RF 03. Prioridad: Must. Sprint de origen: 2. Puntos: 3.
Dependencias: HU-1-1.

Criterios de aceptación:

- Dado un día no laborable, cuando se genera la agenda, entonces no se ofrecen horas en esa fecha.
- Dada una fecha con reservas, cuando se agrega como no laborable, entonces se listan sus impactos y se solicita confirmación antes de bloquear la disponibilidad.

Módulo: Calendario y agendas. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-2-2 Generar agendas trimestrales

Como secretaria, quiero generar tres meses de agenda en una acción, para disponer de horarios sin trabajo repetitivo.

Origen: RF 03. Prioridad: Must. Sprint de origen: 2. Puntos: 5.
Dependencias: HU-2-1, HU-2-8.

Criterios de aceptación:

- Dado un médico con disponibilidad, cuando se genera su agenda, entonces existen horarios de los tres meses excluyendo los días no laborables.
- Dada una agenda ya generada, cuando se repite la operación para el mismo periodo, entonces no se duplican los horarios.

Módulo: Calendario y agendas. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-2-4 Tomar hora médica por la web

Como paciente, quiero buscar atención por sucursal, especialidad, médico y horario, para encontrar una hora adecuada.

Origen: RF 05. Prioridad: Must. Sprint de origen: 2. Puntos: 5.
Dependencias: HU-1-2, HU-2-2.

Criterios de aceptación:

- Dadas agendas disponibles, cuando selecciona los filtros, entonces se muestran profesionales y horas compatibles.
- Dado un filtro sin disponibilidad, cuando consulta, entonces ve un estado vacío y puede volver a cambiar la selección.

Módulo: Reserva en cinco pasos. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-2-9 Confirmar y reservar la hora seleccionada

Como paciente, quiero confirmar la hora que elegí, para dejar reservada mi atención sin llamadas.

Origen: RF 05. Prioridad: Must. Sprint de origen: 2. Puntos: 5.
Dependencias: HU-2-4.

Criterios de aceptación:

- Dado un horario libre, cuando confirma en la quinta etapa, entonces obtiene código de reserva y el horario deja de ofrecerse.
- Dado un horario ocupado antes de confirmar, cuando intenta reservar, entonces se rechaza y no se crea otra reserva.

Módulo: Reserva en cinco pasos. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-3-1 Registrar pago presencial

Como cajero, quiero registrar el pago presencial de una reserva, para emitir su recibo y habilitar la espera.

Origen: RF 08. Prioridad: Must. Sprint de origen: 2. Puntos: 5.
Dependencias: HU-2-9.

Criterios de aceptación:

- Dada una reserva apta y un medio válido, cuando registra el monto recibido, entonces se conserva medio, importe y folio único y la cita pasa a espera.
- Dada una reserva ya pagada, cuando intenta otro cobro, entonces se rechaza el pago duplicado.

Módulo: Caja y comprobantes. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-3-3 Validar bonos Isapre/Fonasa en el pago

Como cajero, quiero validar el bono presentado, para evitar registrar un pago con un documento inválido.

Origen: RF 08. Prioridad: Must. Sprint de origen: 2. Puntos: 3.
Dependencias: HU-3-1.

Criterios de aceptación:

- Dado un bono sin validación o sin folio, cuando se intenta registrar, entonces no se crea pago ni se cambia el estado de la cita.
- Dado un bono validado en la simulación y con folio no utilizado, cuando se registra, entonces se emite el comprobante. La validación externa permanece simulada.

Módulo: Caja y comprobantes. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-2-3 Modificar agenda

Como secretaria, quiero modificar disponibilidades puntuales, para gestionar cambios e imprevistos.

Origen: RF 04. Prioridad: Should. Sprint de origen: 2. Puntos: 5.
Dependencias: HU-2-2.

Criterios de aceptación:

- Dado un cambio con reservas afectadas, cuando solicita aplicarlo, entonces se muestra la lista y se exige confirmación.
- Dado un bloqueo confirmado, cuando se aplica, entonces se conservan las citas para gestión y se marca su revisión; no se cobra hasta resolver la disponibilidad.

Módulo: Cambios de agenda. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-2-5 Anular hora reservada

Como paciente o secretaria, quiero anular una hora reservada, para liberar el horario y evitar ausencias no avisadas.

Origen: RF 06. Prioridad: Should. Sprint de origen: 2. Puntos: 5.
Dependencias: HU-2-9.

Criterios de aceptación:

- Dada una reserva propia sin pago y con al menos veinticuatro horas de anticipación, cuando el paciente anula, entonces el horario queda disponible.
- Dada una cita pagada, cuando el paciente intenta anular, entonces se remite a secretaría. Una anulación de secretaría conserva el pago para revisión administrativa.

Módulo: Mis citas y secretaría. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-2-6 Recibir correos de confirmación y recordatorio

Como paciente, quiero recibir confirmación y recordatorio, para tener presentes los detalles de mi cita.

Origen: RF 07. Prioridad: Should. Sprint de origen: 2. Puntos: 5.
Dependencias: HU-2-9.

Criterios de aceptación:

- Dada una reserva confirmada, cuando finaliza la operación, entonces se crea su confirmación y se programa el recordatorio veinticuatro horas antes.
- Dado un fallo de envío simulado, cuando se agotan tres reintentos además del intento inicial, entonces aparece una alerta para secretaría.

Módulo: Bandeja de notificaciones. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-4-2 Configurar y calcular comisiones

Como administrador, quiero configurar el porcentaje de cada profesional con vigencia, para aplicar la comisión que corresponde a cada atención.

Origen: RF 14. Prioridad: Must. Sprint de origen: 3. Puntos: 3.
Dependencias: HU-3-1.

Criterios de aceptación:

- Dado un porcentaje entre cero y cien y una fecha válida, cuando se guarda, entonces queda en el historial de vigencias del profesional.
- Dado un comprobante emitido, cuando cambia la configuración, entonces se conserva su cálculo original.

Módulo: Parámetros y comisiones. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-4-6 Calcular la comisión del periodo

Como administrador, quiero calcular la comisión del periodo, para conocer el cobro al profesional sin errores de cálculo.

Origen: RF 14. Prioridad: Must. Sprint de origen: 3. Puntos: 5.
Dependencias: HU-4-2, HU-4-7, HU-3-1.

Criterios de aceptación:

- Dados pagos del periodo, cuando se calcula, entonces la comisión suma los importes por atención calculados con hora base y porcentaje, redondeados al peso.
- Dado un periodo emitido y cerrado, cuando intenta recalcularlo, entonces se rechaza y se conserva su cálculo.

Módulo: Parámetros y comisiones. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-3-2 Consultar y marcar pacientes en espera

Como médico, quiero consultar mi espera del día y marcar atenciones finalizadas, para coordinar la atención de mis pacientes.

Origen: RF 09. Prioridad: Should. Sprint de origen: 3. Puntos: 5.
Dependencias: HU-3-1.

Criterios de aceptación:

- Dados pacientes del día con pago validado, cuando abre su lista, entonces ve solo los propios ordenados por hora.
- Dado un paciente de su espera, cuando marca la atención, entonces pasa a atendida y sale de la lista. No puede marcar pacientes ajenos.

Módulo: Espera del médico. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-4-1 Emitir informe de recaudación

Como secretaria o administrador, quiero consultar recaudación por fechas y profesional, para conciliar los ingresos registrados.

Origen: RF 10. Prioridad: Should. Sprint de origen: 3. Puntos: 5.
Dependencias: HU-3-1.

Criterios de aceptación:

- Dado un rango y filtros, cuando consulta, entonces el total es exactamente la suma de los pagos que cumplen esos filtros.
- Dado un rango sin pagos, cuando consulta, entonces muestra cero y un estado vacío.

Módulo: Recaudación. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-4-3 Emitir comprobante de comisión

Como secretaria, quiero emitir el comprobante mensual de comisión, para formalizar el cobro y obtener aceptación del profesional.

Origen: RF 11. Prioridad: Should. Sprint de origen: 3. Puntos: 3.
Dependencias: HU-4-6.

Criterios de aceptación:

- Dado un cálculo actualizado, cuando emite, entonces el documento incluye periodo, atenciones, recaudación, bases, porcentajes, comisión y espacio de firma y cierra el cálculo.
- Dados pagos nuevos después del cálculo, cuando intenta emitir, entonces se solicita recalcular antes de cerrar.

Módulo: Detalle de comisión. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-4-4 Registrar pago de comisiones

Como secretaria, quiero registrar el comprobante del pago de una comisión, para distinguir cobros pendientes de los pagados.

Origen: RF 12. Prioridad: Should. Sprint de origen: 3. Puntos: 3.
Dependencias: HU-4-3.

Criterios de aceptación:

- Dada una comisión pendiente, cuando registra una referencia válida de depósito o transferencia, entonces pasa a pagada y conserva la referencia.
- Dada una comisión sin emitir o ya pagada, cuando intenta registrar ese pago, entonces se rechaza. No se transfieren fondos.

Módulo: Registro de pago de comisión. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-2-7 Reagendar hora reservada

Como paciente, quiero cambiar una hora reservada en una sola operación, para evitar anular y reservar nuevamente.

Origen: RF 17. Prioridad: Should. Sprint de origen: 3. Puntos: 5.
Dependencias: HU-2-9, HU-2-5.

Criterios de aceptación:

- Dada una reserva propia apta con veinticuatro horas de anticipación, cuando confirma un horario disponible de la misma especialidad, entonces libera el anterior, ocupa el nuevo y conserva el código.
- Dado un nuevo horario ocupado, cuando confirma, entonces se rechaza y la reserva original permanece intacta.

Módulo: Reagendamiento. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-1-4 Administrar sucursales

Como administrador, quiero crear sucursales y asignar sus profesionales, para expandir el centro por configuración.

Origen: RF 16. Prioridad: Could. Sprint de origen: 3. Puntos: 5.
Dependencias: HU-1-3.

Criterios de aceptación:

- Dado un nombre nuevo, cuando crea una sucursal, entonces queda disponible sin cambios de código.
- Dada una sucursal con profesionales asignados, cuando secretaría registra disponibilidad y genera agenda, entonces ofrece horarios para reservas.

Módulo: Sucursales. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-4-5 Ajustar comisión calculada

Como administrador, quiero registrar ajustes justificados de una comisión, para resolver diferencias conservando trazabilidad.

Origen: RF 18. Prioridad: Could. Sprint de origen: 3. Puntos: 3.
Dependencias: HU-4-6.

Criterios de aceptación:

- Dada una comisión calculada y no pagada, cuando registra un ajuste con motivo e importe, entonces conserva cálculo original, responsable y fecha y actualiza el total del cobro.
- Dado un ajuste sin motivo o que deja un total negativo, cuando intenta guardarlo, entonces se rechaza.

Módulo: Ajustes de comisión. Estado: Representada en prototipo; pendiente de validación del equipo.

## HU-4-7 Calcular comisión según hora base y especialidad

Como administrador, quiero configurar la hora base por especialidad y aplicarla al cálculo, para usar la fórmula financiera específica del caso.

Origen: RF 19. Prioridad: Must. Sprint de origen: 3. Puntos: pendiente de estimación.
Dependencias: HU-4-2.

Criterios de aceptación:

- Dada una especialidad con hora base y un médico con porcentaje vigente, cuando se calcula una atención, entonces se multiplica la base por el porcentaje.
- Dada una nueva vigencia, cuando se usa en un pago posterior, entonces se conserva su base correspondiente y no se reescriben periodos emitidos.

Módulo: Hora base por especialidad. Estado: Representada en prototipo; pendiente de estimación y validación.
