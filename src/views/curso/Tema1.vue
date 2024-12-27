<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Diseño de Proyectos de Investigación – Innovación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Para diseñar proyectos de investigación e innovación en el desempeño laboral, es crucial comprender y dominar sus principales componentes y las herramientas necesarias para gestionarlos de manera eficiente. En la figura 1 se presentan los aspectos tratados en esta sección para guiar este proceso.
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/3.png', alt='')
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1.
      span Elementos esenciales de los proyectos de investigación- innovación
    img(src='@/assets/curso/temas/4.svg', alt='')
    figcaption  Fuente. El Autor, 2024.
    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Identificación de oportunidades
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .bg-color-2.p-4.h-100(data-aos="fade-left").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La identificación de oportunidades inicia con un análisis estratégico que permite detectar posibilidades innovadoras en diversos contextos. Este proceso es fundamental para orientar investigaciones y proyectos hacia objetivos concretos y viables.
      .col-lg-4.col-7: img(src="@/assets/curso/temas/6.png", style="max-width: 100%")
    h3 Análisis del entorno
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src="@/assets/curso/temas/7.png", style="max-width: 100%")
      .col-lg-8
        .p-5.bg-color-1.mb-4
          p.mb-0 Estas herramientas permiten explorar de manera integral diversos aspectos: las Políticas gubernamentales que influyen en la promoción o limitación de la innovación, las tendencias Económicas que condicionan la viabilidad de los proyectos, las dinámicas Sociales que determinan la aceptación de las soluciones, los avances Tecnológicos que ofrecen nuevas posibilidades, los factores Ecológicos que exigen sostenibilidad y el marco Legal que establece límites y posibilidades para la innovación. Este enfoque analítico multidimensional proporciona una base sólida para la toma de decisiones estratégicas en proyectos de investigación.
        p.mb-0 Según Hervás-Gómez et al. (2024) en su obra Transformando la educación: tecnología, innovación y sociedad en la era digital, resulta fundamental adoptar un enfoque holístico en el análisis del entorno. Los autores sugieren que la combinación de herramientas tradicionales de análisis estratégico con metodologías innovadoras de investigación digital y análisis de datos permite construir una visión más completa y detallada del contexto operativo. Esta integración metodológica facilita no solo la identificación de oportunidades evidentes, sino también aquellas que surgen en la intersección de diversas tendencias y factores contextuales.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10

        .bg-color-white.shadow-soft.py-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/video.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Las 5 fuerzas de Porter
                  p Para profundizar en los conocimientos sobre proyectos de investigación e innovación, se recomienda explorar el siguiente video:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-arrow-right
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Importancia de la detección de necesidades
    p.mb-4 El proceso de identificar necesidades latentes y tendencias emergentes es clave para desarrollar proyectos innovadores. Este enfoque permite no solo responder a demandas existentes, sino anticiparse a futuras exigencias del mercado o sector de trabajo. Para ello, se requiere una combinación de metodologías cualitativas y cuantitativas que ofrezcan una visión integral del panorama.
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/8.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Etnografía digital
          p.mb-0.text-center Observación e interacción en entornos virtuales para identificar comportamientos y necesidades no expresadas.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/9.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Entrevistas en profundidad
          p.mb-0.text-center Análisis detallado de las experiencias y opiniones de usuarios para obtener insights clave.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/10.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Vigilancia tecnológica
          p.mb-0.text-center Monitoreo de avances en ciencia y tecnología para anticipar tendencias disruptivas.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/11.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Análisis de datos
          p.mb-0.text-center Validación y dimensionamiento de oportunidades mediante herramientas estadísticas y #[em big data.]
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        h3 Relevancia de sistemas de vigilancia tecnológica
        p.mb-4 Según Martín Critikián et al. (2021), implementar sistemas de vigilancia tecnológica permite monitorear publicaciones científicas, patentes y desarrollos tecnológicos, complementando este análisis con estudios de tendencias sociales y del mercado. Esta práctica facilita la anticipación de cambios importantes y la identificación de necesidades no satisfechas, posicionando proyectos innovadores de manera estratégica.
        h3 Aplicación práctica
        p.mb-0 Un ejemplo aplicado sería la creación de una plataforma de inteligencia colectiva que utilice herramientas como crowdsourcing y machine learning para recopilar, categorizar y priorizar necesidades emergentes de usuarios. Esta integración de datos en tiempo real permite responder rápidamente a las demandas dinámicas de un público objetivo, creando un ecosistema adaptable y efectivo para la innovación.
      .col-lg-4.col-7
        img(src="@/assets/curso/temas/12.png", style="max-width: 100%")
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Fomento de la creatividad
    p.mb-4 El desarrollo de la creatividad requiere un enfoque estructurado que combine pensamiento divergente (ampliar posibilidades) y convergente (refinar y seleccionar ideas). Este equilibrio fomenta la generación de soluciones innovadoras y viables.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Design Thinking" :icono="require('@/assets/curso/temas/13.svg')" style="background-color: #F3F3F3 ")
        .row.justify-content-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src="@/assets/curso/temas/14.png", style="max-width: 100%")
          .col-lg-7
            h4 Design Thinking
            p.mb-0 Metodología centrada en el usuario que promueve la creación de soluciones basadas en empatía y prototipado.
      .py-4.py-md-5(titulo="SCAMPER" :icono="require('@/assets/curso/temas/13.svg')" style="background-color: #F3F3F3 ")
        .row.justify-content-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src="@/assets/curso/temas/15.png", style="max-width: 100%")
          .col-lg-7
            h4 SCAMPER
            p.mb-0 Herramienta para reestructurar ideas existentes a través de preguntas sobre Sustituir, Combinar, Adaptar, etc.
      .py-4.py-md-5(titulo="Pensamiento lateral" :icono="require('@/assets/curso/temas/13.svg')" style="background-color: #F3F3F3 ")
        .row.justify-content-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src="@/assets/curso/temas/16.png", style="max-width: 100%")
          .col-lg-7
            h4 Pensamiento lateral
            p.mb-0 Estrategias para romper esquemas tradicionales y explorar perspectivas no convencionales.
    h3 Aplicación práctica
    p.mb-4 Morales Cevallos et al. (2023) recomiendan crear un entorno colaborativo que permita el uso de herramientas físicas y virtuales para la ideación. Por ejemplo, un laboratorio de innovación híbrido puede incluir:
    div(style="background-color: #EAFAFC")
      .row.justify-content-center
        .col-lg-7.mb-lg-0.mb-3
          .p-5
            ol.lista-ol--cuadro(data-aos="fade-up")
              li 
                .lista-ol--cuadro__vineta(style="background-color: #A530FE")
                  span.text-white 1
                | Realidad virtual: para visualizar conceptos y explorar prototipos.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #A530FE")
                  span.text-white 2
                | Plataformas colaborativas en tiempo real: para facilitar la participación de equipos distribuidos.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #A530FE")
                  span.text-white 3
                | Documentación automática de ideas: para registrar y organizar propuestas durante las sesiones.
        .col-lg-5.col-7
          .p-5.pb-0
            img(src="@/assets/curso/temas/17.svg", style="max-width: 100%")
    .bg-color-2.p-4.h-100(data-aos="fade-left" style="background-color: #C2F1F8 ").mb-4
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/18.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Este enfoque asegura un proceso creativo enriquecedor, colaborativo y alineado con los objetivos del proyecto, maximizando el impacto de las ideas generadas.
    h3 Brainstorming o lluvia de ideas
    p.mb-4 La lluvia de ideas, conocida también como brainstorming, es una técnica creativa utilizada para generar soluciones innovadoras en equipo. Su propósito es fomentar la libre expresión de ideas, sin juicios ni restricciones, promoviendo un ambiente donde cada participante pueda contribuir con propuestas originales, por más inusuales que parezcan. Es una herramienta clave para impulsar la creatividad colectiva y resolver desafíos de manera colaborativa.
    //todo! Añadir AUDIO CARD 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4 Diseño y planificación
    p.mb-4 El diseño de un plan de acción incluye dividir el proyecto en tareas claras, establecer cronogramas, identificar hitos y definir entregables. Este proceso asegura la ejecución eficiente y el control de cada fase del proyecto.
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/19.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Objetivos SMART
          p.mb-0.text-center Definir objetivos específicos, medibles, alcanzables, relevantes y temporales.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/20.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Cronogramas
          p.mb-0.text-center Establecer tiempos realistas para cada actividad del proyecto.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/21.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Hitos
          p.mb-0.text-center Identificar eventos clave que marquen el progreso del proyecto.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/22.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Entregables
          p.mb-0.text-center Definir productos o resultados concretos esperados en cada fase.
    h3 Asignación de recursos
    p.mb-4 La asignación de recursos implica distribuir eficientemente los elementos tangibles e intangibles necesarios para garantizar el éxito del proyecto.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Humanos") Asignar tareas específicas según las competencias del equipo.
          p.text-small(numero="2" titulo="Financieros") Gestionar presupuestos y prever contingencias económicas.
          p.text-small(numero="3" titulo="Tecnológicos") Proveer herramientas y tecnologías adecuadas para cada etapa.
          p.text-small(numero="4" titulo="Materiales") Disponer de insumos necesarios, asegurando su disponibilidad en tiempo y forma.
      .col-lg-4.col-7
        img(src="@/assets/curso/temas/23.png", style="max-width: 100%")
    p.mb-4 Este enfoque integral en la evaluación y planificación asegura una gestión efectiva de los proyectos innovadores, optimizando recursos y garantizando el logro de los objetivos establecidos.
    .bg-full-width.bg-color-2.mb-lg-5(style="background-color: #E7EFF8 ")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Implementación 
            p.mb-4(data-aos="fade-right") Se invita a revisar los pasos esenciales para la implementación, seguimiento y evaluación de proyectos, destacando la organización inicial, pruebas piloto y control continuo mediante métricas y revisión de hitos. La evaluación final aborda resultados económicos, sociales, ambientales y operativos, garantizando el cumplimiento de los objetivos propuestos.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Pasos esenciales para la implementación, seguimiento y evaluación de proyectos.

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/24.png', alt='')
    h3 Aprendizajes y ajustes necesarios
    p.mb-4 La identificación de aprendizajes permite que cada proyecto no solo cumpla con sus objetivos, sino que también enriquezca futuras iniciativas.
    .bg-full-width.bg-slyder.p-5.mb-5
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Documentación de prácticas exitosas
            p Crear un registro exhaustivo de las estrategias que funcionaron y los resultados obtenidos para replicarlos en futuros proyectos.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/25.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Análisis de desafíos y errores
            p Examinar a fondo las áreas problemáticas para identificar las causas raíz y proponer soluciones sostenibles que eviten recurrencias.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/26.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Sesiones de retrospectiva
            p Realizar reuniones con todos los involucrados para reflexionar sobre la experiencia del proyecto, recolectando puntos de vista y sugerencias para mejorar procesos.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/27.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Implementación de ajustes
            p Incorporar los cambios necesarios en los procedimientos o estrategias para optimizar la eficiencia y el impacto de las iniciativas futuras.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/28.png', alt='Texto que describa la imagen')
    p.mb-4 Este enfoque detallado asegura que la implementación sea eficiente, el monitoreo y control sean proactivos y los aprendizajes permitan una mejora continua en futuras iniciativas.
    .bg-full-width.bg-color-2.mb-lg-5(style="background-color: #E7EFF8 ")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Marco Legal y Ético
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Marco Legal y Ético , que destaca la protección de la propiedad intelectual y la integración de principios éticos en proyectos de innovación, promoviendo estrategias legales y una responsabilidad social sostenida.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Marco Legal y Ético.

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/29.png', alt='')
    




    

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
