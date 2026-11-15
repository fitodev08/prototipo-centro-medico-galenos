# Decisiones y pendientes de producto

## Registro de decisiones

| ID | Decisión adoptada para el prototipo | Motivo y validación pendiente |
|---|---|---|
| DEC-01 | Informe N.º 2 revisión 2.0 como referencia principal. | Es el material nuevo aportado para construir; prevalece su numeración RF 17 a 19. |
| DEC-02 | RF 19 especifica la base de comisión por especialidad. | El propio backlog dice que reemplaza la base de recaudación del RF 14. CU-14 conserva texto anterior y necesita alineación documental por el PO. |
| DEC-03 | Comisión mensual como suma de comisiones por atención pagada. | Interpretación de la hora base por atención y el cobro mensual. Ratificar cantidad computable, redondeo y fecha de vigencia con el PO. |
| DEC-04 | Capturar base y porcentaje al registrar pago. | Preserva trazabilidad y evita reescribir importes ante cambios posteriores. Confirmar política de corrección retroactiva y pagos después del cierre. |
| DEC-05 | Reagendamiento de una cita pagada se remite a secretaría. | El informe no precisa diferencias de arancel y medio de pago al cambiar médico. Se evita alterar información financiera automáticamente. |
| DEC-06 | Anulación pagada conserva el pago y marca revisión. | El caso permite anulación por secretaría, pero no define devoluciones. No se generan reintegros inventados. |
| DEC-07 | Cambios de agenda conservan reservas y bloquean el cobro hasta resolverlas. | RF 04 exige listar y confirmar impactos. La reasignación final requiere coordinación con el paciente. |
| DEC-08 | Treinta minutos por atención y datos iniciales ficticios. | No se suministran duración, aranceles, direcciones ni profesionales reales. Es un supuesto modificable para demostrar. |
| DEC-09 | Calendario base manual con un día no laborable de prueba. | No se suministra un proveedor de calendario. No se presenta el conjunto inicial como feriados oficiales de Chile. |
| DEC-10 | Mantener 99 puntos y HU-4-7 sin estimación. | La historia aparece en el informe, pero fue omitida en refinamiento y estimación. No se inventa un consenso de Planning Poker. |
| DEC-11 | Separar maqueta local y entrega académica en Moqups. | La aplicación local permite revisar el sistema; el enlace de Moqups continúa pendiente de acceso y construcción en esa herramienta. |

## Brechas del informe que requieren refinamiento

- La trazabilidad contiene diecinueve RF, pero conserva una frase que habla de dieciocho.
- HU-4-7 y RF 19 aparecen en requisitos, trazabilidad y backlog inicial; faltan en la tabla refinada de veintitrés historias y en los noventa y nueve puntos.
- El texto de RF 14 y CU-14 habla de recaudación; RF 19 y su dependencia describen sustitución por hora base de especialidad.
- El informe referencia sprints de dos semanas, mientras la actividad de prototipado y cierre indica tres semanas para el sprint académico.
- Las descripciones completas de algunas historias no están desarrolladas en la sección 5 con el mismo nivel de detalle; sus tareas y criterios sí aparecen en la estimación y en los RF. Se derivan de esas fuentes para el prototipo y requieren revisión del PO.

## Riesgos y tratamiento

| Riesgo | Tratamiento propuesto |
|---|---|
| Sobrecarga del Sprint 2: 44 puntos frente a 18 y 37 de los otros. | Revisar capacidad real y dependencias; no inferir velocidad a partir de la suma de puntos. |
| Exigir toda la seguridad y operación del DoD a una maqueta. | Registrar qué está representado y qué requiere infraestructura y pruebas de producción. |
| Ajustes, cobros tardíos y devoluciones sin política definida. | Refinar reglas con PO y mantener trazabilidad del cálculo y del pago. |
| Pérdida de datos del navegador. | Exportación manual de prueba y archivo del código; respaldo real en una etapa de servidor. |
| Diferencia entre el paquete local y lo que exige AVA. | Verificar Jira, construir y probar el enlace de Moqups y completar la presentación antes de entregar. |

## Próximas decisiones del equipo

Confirmar el Sprint Goal actual, estimar HU-4-7, ratificar la fórmula mensual y vigencias, definir políticas de citas pagadas y correcciones posteriores al cierre, aprobar datos de demostración y registrar revisión independiente y aceptación del PO. No hace falta detener la revisión visual del prototipo para resolver todos los aspectos de producción, pero sí deben quedar visibles como pendientes.
