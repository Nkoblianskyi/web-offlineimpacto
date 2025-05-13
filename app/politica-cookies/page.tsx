import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Cookies | OfflineImpacto",
  description: "Política de cookies de OfflineImpacto. Información sobre el uso de cookies en nuestro sitio web.",
}

export default function CookiesPolicyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Política de Cookies</h1>

          <div className="prose prose-lg max-w-none">
            <p>
              Esta Política de Cookies explica qué son las cookies y cómo las utilizamos. Debes leer esta política para
              entender qué son las cookies, cómo las usamos, los tipos de cookies que utilizamos, qué información
              recopilamos usando cookies y cómo se utiliza esa información, y cómo controlar las preferencias de
              cookies.
            </p>

            <p>
              Para más información sobre cómo utilizamos, almacenamos y mantenemos seguros tus datos personales,
              consulta nuestra{" "}
              <Link href="/politica-privacidad" className="text-brand-600 hover:underline">
                Política de Privacidad
              </Link>
              .
            </p>

            <p>
              Puedes en cualquier momento cambiar o retirar tu consentimiento de la Declaración de Cookies en nuestro
              sitio web.
            </p>

            <h2>¿Qué son las cookies?</h2>

            <p>
              Las cookies son pequeños archivos de texto que se utilizan para almacenar pequeñas piezas de información.
              Las cookies son almacenadas en tu dispositivo cuando el sitio web se carga en tu navegador. Estas cookies
              nos ayudan a hacer que el sitio web funcione correctamente, a hacerlo más seguro, a proporcionar una mejor
              experiencia de usuario, y a entender cómo funciona el sitio web y a analizar qué funciona y dónde necesita
              mejora.
            </p>

            <h2>¿Cómo utilizamos las cookies?</h2>

            <p>
              Como la mayoría de los servicios en línea, nuestro sitio web utiliza cookies propias y de terceros para
              varios propósitos. Las cookies propias son principalmente necesarias para que el sitio web funcione de la
              manera correcta, y no recopilan ninguno de tus datos personales identificables.
            </p>

            <p>
              Las cookies de terceros utilizadas en nuestro sitio web son principalmente para entender cómo funciona el
              sitio web, cómo interactúas con nuestro sitio web, mantener nuestros servicios seguros, proporcionar
              anuncios que sean relevantes para ti, y en general proporcionarte una mejor y mejorada experiencia de
              usuario y ayudar a acelerar tus futuras interacciones con nuestro sitio web.
            </p>

            <h2>Tipos de cookies que utilizamos</h2>

            <h3>Cookies Esenciales</h3>

            <p>
              Estas cookies son necesarias para que el sitio web funcione y no pueden ser desactivadas en nuestros
              sistemas. Normalmente solo se establecen en respuesta a acciones realizadas por ti que equivalen a una
              solicitud de servicios, como establecer tus preferencias de privacidad, iniciar sesión o rellenar
              formularios. Puedes configurar tu navegador para que bloquee o te alerte sobre estas cookies, pero algunas
              partes del sitio no funcionarán entonces.
            </p>

            <h3>Cookies de Rendimiento y Funcionalidad</h3>

            <p>
              Estas cookies nos permiten contar las visitas y fuentes de tráfico para que podamos medir y mejorar el
              rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y ver cómo se
              mueven los visitantes por el sitio. Toda la información que recopilan estas cookies es agregada y, por lo
              tanto, anónima. Si no permites estas cookies, no sabremos cuándo has visitado nuestro sitio.
            </p>

            <h3>Cookies de Marketing</h3>

            <p>
              Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Pueden
              ser utilizadas por esas empresas para construir un perfil de tus intereses y mostrarte anuncios relevantes
              en otros sitios. No almacenan directamente información personal, sino que se basan en la identificación
              única de tu navegador y dispositivo de internet. Si no permites estas cookies, experimentarás publicidad
              menos dirigida.
            </p>

            <h2>Control de tus preferencias de cookies</h2>

            <p>
              Cuando visitas nuestro sitio web por primera vez, te presentamos un banner de cookies que te permite
              aceptar o rechazar las cookies no esenciales. Puedes cambiar tus preferencias en cualquier momento
              visitando nuestra página de Política de Cookies.
            </p>

            <p>
              Además, diferentes navegadores proporcionan diferentes métodos para bloquear y eliminar las cookies
              utilizadas por los sitios web. Puedes cambiar la configuración de tu navegador para bloquear/eliminar las
              cookies. Para saber más sobre cómo gestionar y eliminar las cookies, visita wikipedia.org,
              www.allaboutcookies.org.
            </p>

            <h2>Cambios en nuestra Política de Cookies</h2>

            <p>
              Podemos actualizar nuestra Política de Cookies de vez en cuando para reflejar, por ejemplo, cambios en las
              cookies que utilizamos o por otras razones operativas, legales o regulatorias. Por lo tanto, por favor,
              visita esta Política de Cookies regularmente para mantenerte informado sobre nuestro uso de cookies y
              tecnologías relacionadas.
            </p>

            <p>La fecha en la parte superior de esta Política de Cookies indica cuándo se actualizó por última vez.</p>

            <h2>Contacto</h2>

            <p>Si tienes alguna pregunta sobre nuestra política de cookies, por favor contáctanos:</p>

            <p>
              Email: contact@offlineimpacto.com
              <br />
              Teléfono: +34 910 421 426
              <br />
              Dirección: Calle Gran Vía, 49, 28013 Madrid, España
            </p>
          </div>

          <div className="mt-12">
            <Link href="/" className="text-brand-600 hover:text-brand-700">
              ← Volver a la página principal
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
