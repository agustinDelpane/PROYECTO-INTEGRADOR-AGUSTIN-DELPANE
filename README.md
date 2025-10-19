LINK DE VERCEL: https://proyecto-integrador-eit.vercel.app

Para probar mailer en Contact:

Al tener regex restrictivo que solo acepta emails que terminen en .com o en .com.xx, se pueden hacer pruebas sencillas para verificar el funcionamiento del mailer y sus alertas.

CASO 1 - Caso correcto:

Realizar la consulta con los datos requeridos y un mail que termine en .com -. La consulta se enviara y se podra ver la alerta de exito al enviar.

CASO 2 - Caso fallido:

Realizar la consulta con los datos requeridos y por email seleccione un mail que no corresponda (por ejemplo, "c@c.c"). Esto hara que la verificacion por backend manejada devuelva un 400 bad request, dado al formato de email no esperado (.c != .com || c. != .com.xx), arrojando asi la alerta de error al no poder realizar la request.
