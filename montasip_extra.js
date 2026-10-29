// ===== Montasip · ajustes en línea (se carga después de mejoras_comunes.js) · 29-10-2026 =====
// 1) Charla propia: Montaje seguro de paneles SIP (sección Trabajo en obra), con 3 versiones por pregunta.
(function () {
  try {
    if (typeof TOPICS === 'undefined' || TOPICS.some(t => t.id === 'montaje_sip')) return;
    const sc = (k, alt) => (typeof S === 'object' && typeof S[k] === 'function') ? k : alt;
    const O = (q, o, w) => ({ q, o, a: 0, w });
    const VF = (q, v, w) => ({ q, vf: v, w });
    const Q = (s, b, v1, v2) => Object.assign({ s }, b, { v: [v1, v2] });
    const t = {
      id: 'montaje_sip', sec: 'obra', mins: 6, title: 'Montaje seguro de paneles SIP', thumb: sc('pz_izaje_ok', 'pz_obra'),
      learn: [
        { s: sc('pz_obra', 'pz_bienvenida'), t: 'El panel SIP', x: 'Un panel SIP tiene dos placas de OSB y un núcleo de poliestireno (EPS). Es liviano para su tamaño, pero un panel completo <b>puede pesar más de 25 kg</b> y es muy grande: con viento se comporta como una <b>vela</b>.', k: 'Grande, pesado y le pega el viento.' },
        { s: sc('pz_faena_inst', 'pz_obra'), t: 'Antes de montar: planifica', x: 'Revisa el <b>plano y la secuencia de montaje</b>, delimita la zona de trabajo, despeja el acceso y confirma con tu encargado quién hace cada tarea. <b>Con viento fuerte o lluvia intensa no se montan paneles.</b>', k: 'Plan, zona delimitada y buen clima.' },
        { s: sc('pz_acopio', 'pz_orden_ok'), t: 'Traslado manual de paneles', x: 'Los paneles se mueven <b>entre dos o más personas</b> o con ayuda mecánica (Ley 20.949: hombres hasta 25 kg). Coordinen la voz de mando, levanten con las piernas y miren el camino. Usen <b>guantes</b>: el OSB tiene astillas y cantos.', k: 'Entre dos, coordinados y con guantes.' },
        { s: sc('pz_izaje_ok', 'pz_obra'), t: 'Izaje de paneles', x: 'Si el panel se sube con grúa o pluma: lo dirige <b>un solo rigger</b>, se revisan eslingas y ganchos, se usan <b>cuerdas guía</b> para controlar el giro y <b>nadie se pone bajo la carga</b>. Si el viento mueve la carga, se suspende el izaje.', k: 'Un rigger, cuerdas guía y nadie bajo la carga.' },
        { s: sc('pz_alt_arnes', 'pz_alt_intro'), t: 'Montaje en altura', x: 'Sobre 1,8 m: <b>arnés de cuerpo completo</b> conectado a un punto de anclaje o línea de vida, andamio con <b>tarjeta verde</b> y bordes protegidos. Nunca te pares sobre un panel sin fijar ni sobre vigas sin protección.', k: 'Arnés conectado y andamio con tarjeta verde.' },
        { s: sc('pz_alt_borde_ok', 'pz_alt_intro'), t: 'Aplomar, apuntalar y fijar', x: 'Un panel recién parado puede volcarse. Se <b>apuntala de inmediato</b> con puntales provisorios y se fija según el plano. <b>Nunca dejes un panel suelto</b> al terminar la jornada ni lo sueltes antes de que esté asegurado.', k: 'Panel parado = panel apuntalado.' },
        { s: sc('pz_sierra_ok', 'pz_polvo_corte'), t: 'Corte de paneles', x: 'Corta con la sierra con su <b>resguardo</b> y el panel bien apoyado. El corte de OSB y EPS genera polvo y partículas: usa <b>lentes, mascarilla y protector auditivo</b>. Desconecta la sierra para cambiar el disco.', k: 'Resguardo, lentes, mascarilla y fonos.' },
        { s: sc('pz_elec_ext_ok', 'pz_elec_tablero_ok'), t: 'Herramientas eléctricas y fijaciones', x: 'Atornilladores, taladros y clavadoras: extensiones <b>sin uniones con cinta</b>, enchufes certificados y lejos del agua. Nunca apuntes una clavadora a una persona ni dejes tornillos y clavos tirados en el piso.', k: 'Herramienta revisada y orden en la losa.' },
        { s: sc('pz_orden_ok', 'pz_acopio'), t: 'Acopio y orden', x: 'Los paneles se acopian <b>horizontales, sobre polines</b>, en una superficie pareja, amarrados o con peso encima para que el viento no los levante. Despunte, plásticos y tornillos se retiran al terminar cada tarea.', k: 'Acopio parejo, amarrado y zona limpia.' }
      ],
      quiz: [
        Q(sc('pz_obra', 'pz_bienvenida'), O('¿Por qué hay que tener especial cuidado con el viento al mover paneles SIP?', ['Porque el panel actúa como una vela y te puede desequilibrar', 'Porque el viento moja el panel', 'No importa el viento'], 'El panel grande actúa como una vela.'),
          O('Hay viento fuerte en la obra y tienes que trasladar un panel. ¿Qué haces?', ['Espero a que el viento baje y aviso a mi encargado', 'Lo llevo solo y rápido', 'Lo arrastro por el suelo'], 'Con viento fuerte se suspende el traslado y el montaje.'),
          VF('Con viento fuerte se pueden montar paneles SIP sin problema.', false, 'Falso: con viento fuerte no se montan paneles.')),
        Q(sc('pz_acopio', 'pz_orden_ok'), O('¿Cómo se traslada manualmente un panel SIP completo?', ['Entre dos o más personas, coordinados y con guantes', 'Una sola persona sobre la cabeza', 'Arrastrándolo'], 'Entre dos o más y coordinados.'),
          O('¿Cuál es el peso máximo que un hombre adulto puede cargar manualmente según la Ley 20.949?', ['25 kg', '50 kg', '40 kg'], 'Hombres: 25 kg. Sobre eso, ayuda mecánica o entre varios.'),
          O('¿Qué EPP es clave para manipular paneles de OSB?', ['Guantes de seguridad', 'Ninguno', 'Solo protector solar'], 'El OSB tiene astillas y cantos: guantes siempre.')),
        Q(sc('pz_izaje_ok', 'pz_obra'), O('Se iza un panel con grúa. ¿Dónde NO debes estar nunca?', ['Bajo la carga suspendida', 'Detrás de la zona delimitada', 'Junto al rigger fuera del radio'], 'Nadie bajo la carga suspendida.'),
          O('¿Para qué se usan las cuerdas guía al izar un panel?', ['Para controlar el giro del panel sin acercarse a la carga', 'Para amarrar al trabajador', 'Para colgar herramientas'], 'Controlan el giro a distancia.'),
          O('¿Quién da las señales al operador de grúa durante el izaje?', ['Un solo rigger o señalero designado', 'Cualquiera que esté cerca', 'Todos al mismo tiempo'], 'Un solo rigger para evitar confusiones.')),
        Q(sc('pz_alt_arnes', 'pz_alt_intro'), O('Montas paneles a más de 1,8 m. ¿Qué es obligatorio?', ['Arnés de cuerpo completo conectado a un anclaje o línea de vida', 'Solo casco', 'Trabajar rápido'], 'Sobre 1,8 m: arnés conectado.'),
          O('¿Qué tarjeta debe tener el andamio para que puedas usarlo?', ['Tarjeta verde', 'Tarjeta roja', 'No necesita tarjeta'], 'Verde = andamio revisado y apto.'),
          O('¿Dónde está prohibido pararse durante el montaje?', ['Sobre un panel que aún no está fijado', 'Sobre un andamio con tarjeta verde', 'En el piso de la losa'], 'Un panel sin fijar puede ceder.')),
        Q(sc('pz_alt_borde_ok', 'pz_alt_intro'), O('Acabas de parar un panel de muro. ¿Qué haces de inmediato?', ['Lo apuntalo con puntales provisorios hasta fijarlo', 'Lo suelto para ir a buscar otro', 'Lo dejo apoyado contra la pared'], 'Panel parado = panel apuntalado.'),
          O('Termina la jornada y queda un panel parado sin fijar. ¿Qué corresponde?', ['Apuntalarlo o bajarlo; nunca dejarlo suelto', 'Dejarlo así hasta mañana', 'Amarrarlo con una cinta de embalaje'], 'Nunca se deja un panel suelto.'),
          VF('Un panel recién parado puede volcarse si no se apuntala.', true, 'Verdadero: por eso se apuntala de inmediato.')),
        Q(sc('pz_sierra_ok', 'pz_polvo_corte'), O('¿Qué EPP usas para cortar paneles SIP con sierra?', ['Lentes, mascarilla y protector auditivo', 'Solo guantes', 'Ninguno, es un corte corto'], 'Polvo, partículas y ruido: lentes, mascarilla y fonos.'),
          O('Tienes que cambiar el disco de la sierra. ¿Qué haces primero?', ['La desconecto', 'La dejo enchufada y apagada', 'Lo cambio con la sierra girando'], 'Siempre desconectar antes de cambiar el disco.'),
          O('¿Cómo debe estar el panel al cortarlo?', ['Bien apoyado y firme', 'Sostenido por un compañero en el aire', 'Sobre la rodilla'], 'Apoyado y firme para que la sierra no se trabe.')),
        Q(sc('pz_elec_ext_ok', 'pz_elec_tablero_ok'), O('¿Cuál extensión eléctrica puedes usar?', ['Una sin uniones con cinta y con enchufes certificados', 'Una con uniones con cinta aisladora', 'Una con el cable pelado'], 'Sin uniones con cinta y certificada.'),
          O('¿Qué está prohibido con una clavadora neumática?', ['Apuntarla a una persona', 'Usar lentes', 'Revisarla antes de usarla'], 'Nunca se apunta a una persona.'),
          O('Ves tornillos y clavos tirados en la losa. ¿Qué haces?', ['Los recojo o aviso para que se retiren', 'Los dejo ahí', 'Los barro hacia el borde'], 'El orden evita pinchazos y caídas.')),
        Q(sc('pz_orden_ok', 'pz_acopio'), O('¿Cómo se acopian los paneles SIP en la obra?', ['Horizontales, sobre polines, en superficie pareja y amarrados', 'Parados contra una pared', 'Directo en el barro'], 'Horizontales, sobre polines y amarrados.'),
          O('¿Por qué se amarran o se les pone peso a los paneles acopiados?', ['Para que el viento no los levante', 'Para que se vean ordenados', 'No es necesario'], 'El viento puede levantarlos.'),
          O('¿Cuándo se retira el despunte, los plásticos y los tornillos?', ['Al terminar cada tarea', 'Al final del mes', 'Cuando lo pida el mandante'], 'Orden permanente durante el montaje.'))
      ]
    };
    const norma = ['Ley 16.744 y DS 44/2023: el empleador informa los riesgos y capacita en las medidas de control.', 'Ley 20.949: peso máximo de carga humana (25 kg hombres, 20 kg mujeres y menores de 18).', 'Procedimientos de trabajo en altura e izaje de Montasip.'];
    if (typeof nuevoTema === 'function') nuevoTema(t, norma); else { TOPICS.push(t); if (typeof NORMAS !== 'undefined') NORMAS[t.id] = norma; }
    // que aparezca primero dentro de "Trabajo en obra"
    const i = TOPICS.findIndex(x => x.id === 'montaje_sip'), j = TOPICS.findIndex(x => x.sec === 'obra');
    if (i > j && j >= 0) { const [x] = TOPICS.splice(i, 1); TOPICS.splice(j, 0, x); }
  } catch (e) { console.log('montasip_extra: ' + e); }
})();
