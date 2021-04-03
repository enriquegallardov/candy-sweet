import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function About() {
  return (
    <Layout>
      <SEO
        title="Acerca de"
        description="Candy Sweet tiene como misión proveer productos de calidad y contribuir con la salud y bienestar del cliente"
      />
      <h3>Sobre Candy Sweet</h3>
      <h5>Misión</h5>
      <p>
        El proyecto se realiza con el fin de ofrecer productos de calidad,
        satisfacer las expectativas del consumidor, y buena atención al cliente.
        Contribuir con la salud y bienestar del cliente.
      </p>
      <h5>Visión</h5>
      <p>
        Ser la mejor opción de venta de postres (gelatinas de colores,
        esponjados de fresa y mora, figuras de masmelos). Con el propósito de
        alcanzar los estándares de calidad del producto, buena atención al
        cliente y tener excelentes resultados en la venta de los productos de la
        empresa Candy Sweet.
      </p>
    </Layout>
  )
}
