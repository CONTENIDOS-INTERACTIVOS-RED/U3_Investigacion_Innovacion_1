export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Investigación e innovación en la práctica',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Diseño de Proyectos de Investigación – Innovación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Identificación de oportunidades',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Importancia de la detección de necesidades',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Fomento de la creatividad',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Diseño y planificación',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas para la Gestión de la Innovación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '<em>Lean Startup</em>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<em>Design Thinking</em>',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Aplicación sectorial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Análisis PESTEL',
      significado:
        'herramienta de análisis del entorno que examina factores políticos, económicos, sociales, tecnológicos, ecológicos y legales.',
    },
    {
      termino: 'Análisis predictivo',
      significado:
        'técnica que utiliza datos históricos para predecir tendencias y comportamientos futuros.',
    },
    {
      termino: '<em>Blockchain</em>',
      significado:
        'tecnología de registro distribuido que permite el almacenamiento seguro y transparente de información.',
    },
    {
      termino: '<em>Brainstorming</em>',
      significado:
        'técnica grupal para generar ideas creativas en la resolución de problemas.',
    },
    {
      termino: 'Cinco Fuerzas de Porter',
      significado:
        'modelo de análisis competitivo que examina el poder de negociación de proveedores, clientes, competidores, nuevos entrantes y productos sustitutos.',
    },
    {
      termino: '<em>Crowdsourcing</em>',
      significado:
        'práctica de obtener información o aportes de un grupo grande de personas.',
    },
    {
      termino: '<em>Design Thinking</em>',
      significado:
        'metodología centrada en el usuario para resolver problemas de forma creativa e innovadora.',
    },
    {
      termino: '<em>DevOps</em>',
      significado:
        'conjunto de prácticas que combina el desarrollo de software y las operaciones IT.',
    },
    {
      termino: 'Ecosistema de innovación',
      significado:
        'red de actores y recursos que facilitan y apoyan la innovación en un territorio.',
    },
    {
      termino: '<em>Edge Computing</em>',
      significado: 'procesamiento de datos cerca del punto donde se generan.',
    },
    {
      termino: 'Innovación frugal',
      significado:
        'enfoque que busca desarrollar soluciones con recursos limitados.',
    },
    {
      termino: '<em>Insights</em>',
      significado:
        'información clave para la toma de decisiones estratégicas y el desarrollo de soluciones que crean valor real para los usuarios.',
    },
    {
      termino: '<em>IoT (Internet of Things)</em>',
      significado: 'red de objetos físicos conectados digitalmente.',
    },
    {
      termino: '<em>Kanban</em>',
      significado:
        'sistema visual para gestionar y mejorar el flujo de trabajo.',
    },
    {
      termino: '<em>KPIs</em>',
      significado:
        '(<em>Key Performance Indicators</em>): Indicadores clave de desempeño.',
    },
    {
      termino: '<em>Lean Manufacturing</em>',
      significado:
        'metodología de mejora continua que busca eliminar los desperdicios en los procesos productivos, optimizando recursos y operaciones para generar el máximo valor al cliente',
    },
    {
      termino: '<em>Lean Startup</em>',
      significado:
        'metodología para desarrollar negocios y productos basada en la experimentación.',
    },
    {
      termino: 'Pivotar',
      significado:
        'realizar un cambio estratégico significativo en un proyecto o negocio.',
    },
    {
      termino: 'SCAMPER',
      significado: 'técnica de generación de ideas basada en verbos de acción.',
    },
    {
      termino: 'SCRUM',
      significado: 'marco de trabajo ágil para la gestión de proyectos.',
    },
    {
      termino: '<em>Sprint</em>',
      significado:
        'período de tiempo definido para completar un conjunto de tareas.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado: 'partes interesadas en un proyecto.',
    },
    {
      termino: '<em>Text Mining</em>',
      significado:
        'proceso de extraer información valiosa de datos textuales no estructurados.',
    },
    {
      termino: '<em>WBS (Work Breakdown Structure)</em>',
      significado:
        'estructura de desglose del trabajo que divide un proyecto en componentes manejables.',
    },
    {
      termino: '<em>WIP (Work In Progress)</em>',
      significado:
        'trabajo en progreso, cantidad de tareas que se están realizando simultáneamente.',
    },
  ],
}
