<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Herramientas para la Gestión de la Innovación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .bg-color-1.mb-5(data-aos="fade-up" style="background-color: #E6FBF1")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Al asumir el desafío de gestionar proyectos de investigación e innovación, es fundamental abordar una serie de etapas y emplear herramientas específicas que se adapten a las necesidades y contextos de las iniciativas. Estas herramientas permiten consolidar propuestas competitivas y adecuadas. En esta sesión se profundizará en las herramientas estudiadas en la unidad 2, complementándolas con otras ampliamente utilizadas en la gestión de la innovación, como se detalla en la figura 2.
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/30.png', alt='')
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 2.
      span Herramientas para la gestión de proyectos de investigación e innovación.
    img(src='@/assets/curso/temas/31.svg', alt='')
    figcaption.mb-5 Fuente. El Autor, 2024.
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Lean Startup
    p.mb-4 El enfoque Lean Startup se basa en tres pilares esenciales: la creación de un Producto Mínimo Viable (MVP), la medición de resultados mediante métricas accionables y el aprendizaje continuo para decidir entre pivotar o mantener la dirección estratégica. Este enfoque minimiza los desperdicios y maximiza las oportunidades de aprendizaje, centrándose en generar valor para los usuarios y eliminando actividades que no contribuyan directamente al desarrollo y validación de hipótesis clave.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Mínimo Viable (MVP)" :icono="require('@/assets/curso/temas/32.svg')" style="background-color: #F3F3F3 ")
        .row.justify-content-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src="@/assets/curso/temas/33.png", style="max-width: 100%")
          .col-lg-7
            h4 Producto Mínimo Viable (MVP)
            p.mb-0 Versión inicial de un producto con las funcionalidades esenciales necesarias para validar hipótesis clave de negocio y obtener retroalimentación del usuario.
      .py-4.py-md-5(titulo="Medición precisa" :icono="require('@/assets/curso/temas/34.svg')" style="background-color: #F3F3F3 ")
        .row.justify-content-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src="@/assets/curso/temas/35.png", style="max-width: 100%")
          .col-lg-7
            h4 Medición precisa
            p.mb-0 Uso de métricas específicas y accionables para evaluar el rendimiento del MVP y su alineación con las necesidades del mercado.
      .py-4.py-md-5(titulo="Aprendizaje validado" :icono="require('@/assets/curso/temas/36.svg')" style="background-color: #F3F3F3 ")
        .row.justify-content-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src="@/assets/curso/temas/37.png", style="max-width: 100%")
          .col-lg-7
            h4 Aprendizaje validado
            p.mb-0 Proceso iterativo que permite ajustar estrategias basándose en datos reales obtenidos de usuarios y experimentos.
    h3 Ciclo construir-medir-aprender
    p.mb-4 Este ciclo iterativo es fundamental en el marco Lean Startup para acelerar el desarrollo de productos y servicios. Cada iteración incluye los siguientes pasos:
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/38.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Construir
          p.mb-0.text-center Desarrollar rápidamente prototipos o MVPs para probar hipótesis clave de negocio.
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/39.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Medir
          p.mb-0.text-center Implementar sistemas de medición para recolectar datos significativos sobre el desempeño del MVP y la respuesta del usuario.
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/40.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Aprender
          p.mb-0.text-center Analizar los datos recolectados para extraer aprendizajes y decidir si se deben realizar cambios estratégicos (pivotar) o continuar con el plan actual.
    h3 Producto Mínimo Viable (MVP)
    p.mb-4 El MVP es una herramienta central para validar hipótesis de manera eficiente. Implica un balance entre funcionalidad básica y calidad, asegurando que sea suficiente para obtener retroalimentación significativa de los usuarios.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Definición de funcionalidades")  Identificar las características esenciales necesarias para probar la hipótesis más crítica.
          p.text-small(numero="2" titulo="Retroalimentación temprana") Recibir comentarios de usuarios reales lo más rápido posible para ajustar el producto en las siguientes iteraciones.
          p.text-small(numero="3" titulo="Reducción de riesgos") Minimizar el desperdicio de recursos al evitar el desarrollo excesivo antes de validar la dirección estratégica.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/41.png', alt='')
    h3 Pivotar  y escalabilidad
    p.mb-4 Pivotar implica realizar cambios estratégicos en la dirección del negocio basándose en evidencias, mientras que la escalabilidad se centra en expandir las operaciones de manera sostenible.
    div(style="background-color: #EAFAFC").mb-4
      .row.justify-content-center
        .col-lg-7.mb-lg-0.mb-3
          .p-5
            ol.lista-ol--cuadro(data-aos="fade-up")
              li 
                .lista-ol--cuadro__vineta(style="background-color: #A530FE")
                  span.text-white 1
                | Pivotar. Redefinir el enfoque del negocio cuando los datos sugieren que la estrategia actual no es viable o efectiva. Esto puede incluir cambios en el modelo de negocio, mercado objetivo o producto.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #A530FE")
                  span.text-white 2
                | Escalabilidad. Preparar el negocio para crecer de manera eficiente, asegurando que las operaciones, recursos y sistemas puedan manejar un aumento significativo en la demanda sin comprometer la calidad.
        .col-lg-5.col-7
          .p-5.pb-0
            img(src="@/assets/curso/temas/42.svg", style="max-width: 100%")
    p.mb-4 El enfoque Lean Startup proporciona un marco ágil y eficiente para gestionar proyectos, permitiendo iteraciones rápidas y decisiones fundamentadas basadas en datos reales del mercado. Este modelo es especialmente valioso en entornos de alta incertidumbre donde la capacidad de adaptarse rápidamente es clave para el éxito.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-white.shadow-soft.py-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/video.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 El Método Lean StartUp
                  p Para profundizar en los conocimientos relacionados con proyectos de investigación e innovación estudiados, se recomienda explorar el siguiente video.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Ver video
                    i.fas.fa-arrow-right
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Design Thinking
    p.mb-4 El proceso de Design Thinking se estructura en cinco etapas clave, las cuales guían la creación de soluciones innovadoras centradas en el usuario. Cada una de estas etapas fomenta un enfoque iterativo, flexible y colaborativo.
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/43.svg', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="1")
        .h5.mb-2 titulo
        p Lorem ipsum dolor Curabitur vestibulum tortor quis nisi
    h3 Empatizar con usuarios
    p.mb-4 La etapa de empatizar es fundamental para comprender el contexto, las emociones y las motivaciones de los usuarios.
    .bg-full-width.bg-slyder.p-5.mb-5
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Entrevistas profundas
            p Conversaciones estructuradas para explorar las necesidades y puntos de dolor de los usuarios.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/44.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Observación contextual
            p Estudio del comportamiento de los usuarios en su entorno natural para identificar problemas ocultos.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/45.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Mapas de empatía
            p Herramientas visuales que ayudan a sintetizar y comprender las percepciones y experiencias del usuario.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/46.png', alt='Texto que describa la imagen')
    h3 Definición de problemas
    p.mb-4 En esta etapa, los problemas detectados se sintetizan en declaraciones claras y accionables que guían el proceso de diseño.
    .bg-full-width.mb-4(style="background-color: #EAFAFC ")
      .row.justify-content-center
        .col-lg-4.col-7.mb-lg-0.mb-3: img.p-5.pb-0(src='@/assets/curso/temas/47.svg', alt='')
        .col-lg-7.p-5
          .bg-white.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/temas/48.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5 Declaración del punto de vista (Point of View)
                p.mb-0 Articula el problema desde la perspectiva del usuario, combinando sus necesidades con los insights obtenidos.
          .bg-white.p-4(data-aos="fade-left")
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/temas/49.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5 Preguntas "How Might We“
                p.mb-0 Reformulan los problemas en preguntas abiertas que inspiran soluciones creativas, por ejemplo: "¿Cómo podríamos facilitar el acceso a X?"
    h3 Ideación y prototipado
    p.mb-4 Estas etapas transforman los problemas definidos en soluciones tangibles.
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/50.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2 Ideación	
            p.mb-0 Uso de técnicas como lluvia de ideas, mapas mentales o SCAMPER para generar una amplia gama de ideas sin limitar la creatividad.
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/51.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2 Prototipado
            p.mb-0 Creación de modelos simples o simulaciones de las ideas para explorar su funcionalidad y recoger retroalimentación inicial.
    h3 Testeo y validación
    p.mb-4 Durante el testeo, las soluciones se enfrentan a la realidad del usuario, permitiendo ajustes y mejoras iterativas.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Sesiones de prueba" :icono="require('@/assets/curso/temas/52.svg')" style="background-color: #F3F3F3 ")
        .row.justify-content-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src="@/assets/curso/temas/53.png", style="max-width: 100%")
          .col-lg-7
            h4 Sesiones de prueba
            p.mb-0 Evaluar cómo interactúan los usuarios con el prototipo y recoger un  feedback honesto y constructivo.
      .py-4.py-md-5(titulo="Métricas de éxito" :icono="require('@/assets/curso/temas/54.svg')" style="background-color: #F3F3F3 ")
        .row.justify-content-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src="@/assets/curso/temas/55.png", style="max-width: 100%")
          .col-lg-7
            h4 Métricas de éxito
            p.mb-0 Definir indicadores claros para medir la efectividad y la aceptación de la solución propuesta.
      .py-4.py-md-5(titulo="Iteración basada en resultados" :icono="require('@/assets/curso/temas/56.svg')" style="background-color: #F3F3F3 ")
        .row.justify-content-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src="@/assets/curso/temas/57.png", style="max-width: 100%")
          .col-lg-7
            h4 Iteración basada en resultados
            p.mb-0 Realizar mejoras continúas basadas en los hallazgos obtenidos durante el testeo, para perfeccionar la solución final.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 El Design Thinking fomenta la innovación centrada en el usuario mediante un enfoque iterativo y flexible. Este proceso garantiza que las soluciones desarrolladas respondan de manera efectiva a las necesidades reales, integrando la creatividad y el análisis sistemático en cada etapa.
        .bg-color-white.shadow-soft.py-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/video.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 El proceso de pensamiento de diseño 
                  p Para complementar los conocimientos adquiridos sobre proyectos de investigación e innovación, se sugiere explorar el video indicado a continuación.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Ver video
                    i.fas.fa-arrow-right
      .col-lg-4.col-7: img(src='@/assets/curso/temas/58.png', alt='')
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
              img(src='@/assets/curso/temas/59.png', alt='')


    

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
