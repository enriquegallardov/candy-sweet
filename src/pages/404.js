import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: No hay resultados" />
      <h1>404: No hay resultados</h1>
      <p>
        Entraste a una página que no existe. Intenta regresar a la pagina
        principal o explora nuestras entradas de blog
      </p>
    </Layout>
  )
}
