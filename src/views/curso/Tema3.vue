<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Aplicación sectorial '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .bg-color-1.mb-5(data-aos="fade-up" style="background-color: #C2F1F8")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Después de analizar los componentes de los proyectos de investigación e innovación, así como las herramientas especializadas que facilitan su gestión, es momento de explorar su aplicación en distintos sectores. Para ello, se examinarán casos concretos que permitan comprender su implementación. En la figura 3 se presentan los sectores que serán abordados en esta sección.
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/60.png', alt='')
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 3.
      span Aplicaciones de la innovación en distintos sectores.
    img(src='@/assets/curso/temas/61.svg', alt='')
    figcaption.mb-5 Fuente. El Autor, 2024.
    h3 Sector tecnológico
    p.mb-4 El sector tecnológico se encuentra en constante transformación debido al surgimiento de innovaciones disruptivas que redefinen los modelos de negocio y los entornos sociales. A continuación, se presentan las tendencias clave que están marcando el panorama de la innovación tecnológica y su impacto en diferentes contextos organizacionales.
    .bg-full-width.bg-slyder.p-5.mb-5
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Inteligencia Artificial (IA)
            p La IA está revolucionando industrias mediante soluciones como aprendizaje automático, procesamiento de lenguaje natural y visión por computadora. Su capacidad para optimizar procesos y generar insights está transformando sectores como la salud, la educación y la manufactura.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/62.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Blockchain
            p Más allá de las criptomonedas, el blockchain  permite mayor transparencia, seguridad y descentralización en transacciones y procesos. Es relevante en áreas como cadenas de suministro, identidad digital y contratos inteligentes.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/63.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Computación Cuántica
            p Aunque todavía en desarrollo, la computación cuántica promete resolver problemas complejos en criptografía, simulaciones moleculares y optimización que están más allá del alcance de las computadoras clásicas.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/64.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Edge Computing 
            p Esta tecnología acerca el procesamiento de datos al lugar donde se generan, reduciendo la latencia y mejorando la eficiencia en aplicaciones como IoT (Internet de las cosas), vehículos autónomos y análisis en tiempo real.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/65.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Tecnologías 5G
            p La conectividad 5G habilita velocidades de transmisión más rápidas y baja latencia, impulsando innovaciones en realidad aumentada, telemedicina y ciudades inteligentes.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/66.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-white.shadow-soft.py-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/video.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tecnología e innovación para la vida
                  p Para ampliar sus conocimientos en los temas de proyectos de investigación e innovación que has estudiado, le sugerimos explorar el siguiente vídeo:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Ver video
                    i.fas.fa-arrow-right
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        h3 Metodologías específicas del sector
        p.mb-0 El dominio de metodologías específicas del sector tecnológico es fundamental para garantizar la efectividad en la gestión de proyectos de innovación. En el contexto colombiano, esto implica no solo implementar marcos globales como DevOps, metodologías ágiles o Design Thinking, sino también adaptarlos a las particularidades del mercado local. La capacidad de ajustar estas herramientas según las limitaciones y oportunidades de cada proyecto resulta esencial para maximizar su impacto.
          br
          br
          |Enfoques metodológicos sugeridos:
      .col-lg-3.col-7:  img(src='@/assets/curso/temas/67.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/68.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center DevOps
          p.mb-0.text-center Mejora la colaboración entre desarrollo y operaciones para entregar software más rápido.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/69.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Metodologías ágiles
          p.mb-0.text-center SCRUM o Kanban  para proyectos que requieren adaptación constante a las necesidades locales.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/70.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center.fst-italic Design Thinking
          p.mb-0.text-center Para resolver problemas centrados en el usuario y desarrollar soluciones innovadoras.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/71.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Innovación frugal
          p.mb-0.text-center Creación de soluciones accesibles con recursos limitados, considerando el contexto económico local.
    p.mb-4 La investigación de Martínez-Gómez (2024) destaca la importancia de adaptar las mejores prácticas internacionales a las condiciones específicas de mercados emergentes como el colombiano. Este enfoque metodológico contextualizado permite optimizar recursos y garantizar resultados sostenibles.
    div(style="background-color: #EAFAFC").mb-4
      .row.justify-content-center
        .col-lg-7.mb-lg-0.mb-3
          .p-5
            p.mb-4 Por ejemplo, en un proyecto de desarrollo de tecnologías emergentes, podría implementarse un marco metodológico híbrido que combine:
            ol.lista-ol--cuadro(data-aos="fade-up")
              li 
                .lista-ol--cuadro__vineta(style="background-color: #A530FE")
                  span.text-white 1
                | Prácticas de validación rápida: Para minimizar riesgos y ajustar el proyecto según los aprendizajes.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #A530FE")
                  span.text-white 2
                | Herramientas ágiles de gestión: Tableros Kanban adaptados a pequeñas empresas.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #A530FE")
                  span.text-white 3
                | Métodos de retroalimentación continua: Basados en interacciones frecuentes con usuarios locales.
        .col-lg-5.col-7
          .p-5.pb-0
            img(src="@/assets/curso/temas/72.png", style="max-width: 100%")
    p.mb-4 Este enfoque permite superar desafíos locales y posicionar los proyectos como soluciones competitivas en el ámbito global.
    .bg-full-width.bg-color-2.mb-lg-5(style="background-color: #E7EFF8 ")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Integración de Metodologías
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Integración de Metodologías, que aborda la complementariedad de Lean Startup y Design Thinking, casos de éxito, la adaptación al contexto colombiano, herramientas de análisis de datos y gestión ágil de proyectos, destacando estrategias prácticas para impulsar la innovación con un enfoque adaptado y sostenible.


            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Integración de Metodologías.

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/73.png', alt='')



    

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>
