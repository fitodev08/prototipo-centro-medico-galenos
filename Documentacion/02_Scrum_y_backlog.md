# Organización del trabajo con Scrum

El informe del equipo define a José López como Scrum Master, Benjamín Lorca como Product Owner y Fritz Pierre como desarrollador. Estos roles se conservan. La construcción de este paquete no representa reuniones celebradas ni una aprobación del Product Owner.

## Product Goal

Automatizar los procesos de reservas, atención administrativa y comisiones para mejorar la rentabilidad, reducir errores y soportar el crecimiento del centro. Se conservan los objetivos OP-1 de acceso y expansión, OP-2 de agendas y citas, OP-3 de pagos y espera, y OP-4 de recaudación y comisiones del informe.

## Backlog de referencia

| Incremento de origen | Historias estimadas | Puntos del informe | Foco |
|---|---|---|---|
| Sprint 1 | 4 | 18 | Acceso, bloqueo, personal y registro. |
| Sprint 2 | 10 | 44 | Agendas, reserva, caja, bonos, anulación y notificaciones. |
| Sprint 3 | 9 | 37 | Espera, recaudación, comisiones, sucursales, reagendamiento y ajustes. |
| Refinamiento pendiente | HU-4-7 | Sin estimación | Fórmula por hora base y especialidad, vinculada a RF 19. |

El informe suma 99 puntos en 23 historias estimadas. HU-4-7 está en la trazabilidad y en el backlog anterior al refinamiento, pero falta en el backlog refinado y en la tabla de esfuerzo. El paquete conserva los 99 puntos originales y agrega esa historia como pendiente de estimar. No asigna un punto ficticio ni afirma una velocidad del equipo.

El CSV y el JSON adjuntos permiten revisar e importar el backlog. Sus estados describen cobertura del prototipo; no significan que se haya satisfecho el DoD de producción.

## Objetivos propuestos para revisar los incrementos

1. Acceso: permitir registro y activación de prueba, ingreso por rol y administración de cuentas, verificando bloqueos y desactivación.
2. Operación: permitir a secretaría preparar agendas y al paciente reservar en cinco etapas; registrar el pago presencial con recibo y tratamiento de errores.
3. Finanzas y cierre: habilitar espera del médico, recaudación conciliada, comisiones por especialidad, emisión, ajustes y pago informativo.

Estos objetivos son una propuesta de trabajo basada en los sprints del informe. El Sprint Goal del sprint académico actual debe ratificarse en Jira con el equipo. La guía de la última actividad plantea tres semanas; el informe mantiene tres sprints de dos semanas. No se modifica esa diferencia silenciosamente.

## Planificación y seguimiento

- Antes del sprint: PO ordena por valor y dependencias; el equipo confirma criterios, puntos y capacidad. HU-4-7 requiere refinamiento y estimación conjunta.
- Sprint Planning: acordar un objetivo único, seleccionar historias y registrar tareas y criterios de éxito.
- Daily Scrum: inspeccionar el avance hacia el objetivo, adaptar el plan y registrar impedimentos; duración máxima de quince minutos.
- Refinamiento: aclarar reglas y dividir trabajo cuando sea útil. No es una ceremonia obligatoria de Scrum, aunque la actividad académica pide incluir sesiones en el calendario.
- Sprint Review: inspeccionar el incremento con los interesados y actualizar el backlog según lo aprendido.
- Sprint Retrospective: revisar la forma de trabajo y acordar mejoras verificables.

## Calendario propuesto para el sprint académico

| Momento relativo | Actividad | Resultado esperado |
|---|---|---|
| Día hábil 1 | Planning | Objetivo, selección y plan del sprint. |
| Cada día hábil | Daily de hasta 15 minutos | Avance, impedimentos y adaptación. |
| Días hábiles 5 y 10 | Refinamiento | Reglas aclaradas y backlog actualizado. |
| Día hábil 15 | Review | Evidencia del recorrido y comentarios. |
| Después de la Review | Retrospectiva | Acciones para mejorar el trabajo. |

El equipo debe agregar fechas, horarios y participantes reales antes de presentar este calendario como ejecutado.

## Definition of Done

El informe exige criterios satisfechos, revisión de código por otro integrante, documentación, validación del PO y RNF aplicables. En este paquete hay pruebas de dominio y documentación, pero la revisión independiente y la aprobación del PO siguen pendientes. HTTPS, persistencia de servidor, auditoría protegida, concurrencia real, correo, disponibilidad y segundo factor real requieren implementación posterior.

Una historia puede marcarse como representada en la maqueta y permanecer pendiente del DoD del producto. Para cerrar una historia en el proyecto real, el equipo debe revisar toda su condición de terminado y registrar quién la verificó.
