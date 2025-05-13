import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidad | OfflineImpacto",
  description: "Política de privacidad de OfflineImpacto. Información sobre el tratamiento de datos personales.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>

          <div className="prose prose-lg max-w-none">
            <p>
              En OfflineImpacto, accesible desde offlineimpacto.com, una de nuestras principales prioridades es la
              privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene los tipos de
              información que se recopilan y registran por OfflineImpacto y cómo la utilizamos.
            </p>

            <p>
              Si tienes preguntas adicionales o requieres más información sobre nuestra Política de Privacidad, no dudes
              en contactarnos.
            </p>

            <h2>Información que recopilamos</h2>

            <p>
              Cuando te registras en nuestro sitio, como parte del proceso, recopilamos la información personal que nos
              proporcionas, como tu nombre, dirección y dirección de correo electrónico.
            </p>

            <p>
              Tu información personal será utilizada solo para los motivos específicos indicados anteriormente, a menos
              que obtengamos tu permiso para utilizarla por otros motivos.
            </p>

            <h2>Consentimiento</h2>

            <h3>¿Cómo obtenemos tu consentimiento?</h3>

            <p>
              Cuando nos proporcionas tu información personal para completar una transacción, verificar tu tarjeta de
              crédito, realizar un pedido, organizar una entrega o devolver una compra, entendemos que estás
              consintiendo que recopilemos esa información y la utilicemos por ese motivo específico únicamente.
            </p>

            <p>
              Si te pedimos tu información personal por un motivo secundario, como marketing, te pediremos directamente
              tu consentimiento expreso, o te daremos la oportunidad de negarte.
            </p>

            <h3>¿Cómo puedes retirar tu consentimiento?</h3>

            <p>
              Si después de haber optado por participar, cambias de opinión, puedes retirar tu consentimiento para que
              te contactemos, para la recopilación, uso o divulgación continua de tu información, en cualquier momento,
              contactándonos en contact@offlineimpacto.com o escribiéndonos a: OfflineImpacto, Calle Gran Vía, 49, 28013
              Madrid, España.
            </p>

            <h2>Divulgación</h2>

            <p>
              Podemos divulgar tu información personal si estamos obligados por ley a hacerlo o si violas nuestros
              Términos de Servicio.
            </p>

            <h2>Servicios de terceros</h2>

            <p>
              En general, los proveedores de terceros utilizados por nosotros solo recopilarán, usarán y divulgarán tu
              información en la medida necesaria para permitirles realizar los servicios que nos proporcionan.
            </p>

            <p>
              Sin embargo, ciertos proveedores de servicios de terceros, como pasarelas de pago y otros procesadores de
              transacciones de pago, tienen sus propias políticas de privacidad con respecto a la información que
              debemos proporcionarles para tus transacciones relacionadas con compras.
            </p>

            <p>
              Para estos proveedores, te recomendamos que leas sus políticas de privacidad para que puedas entender la
              manera en que tu información personal será manejada por estos proveedores.
            </p>

            <h2>Seguridad</h2>

            <p>
              Para proteger tu información personal, tomamos precauciones razonables y seguimos las mejores prácticas de
              la industria para asegurarnos de que no se pierda, mal utilice, acceda, divulgue, altere o destruya de
              manera inapropiada.
            </p>

            <h2>Cambios a esta política de privacidad</h2>

            <p>
              Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento, así que por favor
              revísala frecuentemente. Los cambios y aclaraciones tendrán efecto inmediatamente después de su
              publicación en el sitio web. Si realizamos cambios materiales a esta política, te notificaremos aquí que
              ha sido actualizada, para que sepas qué información recopilamos, cómo la usamos y bajo qué circunstancias,
              si las hay, la utilizamos y/o divulgamos.
            </p>

            <h2>Contacto</h2>

            <p>
              Si deseas: acceder, corregir, modificar o eliminar cualquier información personal que tengamos sobre ti,
              registrar una queja, o simplemente quieres más información, contacta a nuestro Oficial de Cumplimiento de
              Privacidad en contact@offlineimpacto.com o por correo postal a:
            </p>

            <p>
              OfflineImpacto
              <br />
              Calle Gran Vía, 49
              <br />
              28013 Madrid, España
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
