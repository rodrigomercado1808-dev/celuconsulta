// Personalizá estos datos para tu taller.
const CONFIG = {
  whatsappNumber: '5491155775741', // Formato internacional, solo números.
  location: 'Parque Avellaneda y alrededores',
  businessName: 'Celu Dramático'
};

// Preguntas de seguimiento según el problema seleccionado.
const detailOptions = {
  power: {
    title: '¿Qué ocurre cuando intentás encenderlo?',
    options: [
      { value: 'no_response', label: 'No muestra ninguna señal', icon: '⚫' },
      { value: 'vibrate', label: 'Vibra o suena, pero la pantalla queda negra', icon: '📳' },
      { value: 'logo', label: 'Aparece el logo, pero no inicia', icon: '🔄' },
      { value: 'restart', label: 'Se reinicia o se apaga durante el inicio', icon: '🔁' },
      { value: 'unsure', label: 'No estoy seguro/a', icon: '🤔' }
    ]
  },
  charge: {
    title: '¿Cómo se comporta al conectarlo?',
    options: [
      { value: 'not_detected', label: 'No aparece que esté cargando', icon: '🔋' },
      { value: 'intermittent', label: 'Carga solo si muevo el cable', icon: '🔌' },
      { value: 'slow', label: 'Carga muy lento o se desconecta', icon: '🐢' },
      { value: 'hot', label: 'El teléfono o el cargador se calientan', icon: '🌡️' },
      { value: 'unsure', label: 'No estoy seguro/a', icon: '🤔' }
    ]
  },
  screen: {
    title: '¿Qué problema ves en la pantalla?',
    options: [
      { value: 'cracked', label: 'Está rota o tiene el vidrio quebrado', icon: '🕸️' },
      { value: 'lines', label: 'Tiene líneas, manchas o parpadea', icon: '📊' },
      { value: 'black', label: 'Queda negra, aunque el teléfono parece encendido', icon: '⬛' },
      { value: 'touch', label: 'La imagen se ve, pero falla el táctil', icon: '👆' },
      { value: 'unsure', label: 'No estoy seguro/a', icon: '🤔' }
    ]
  },
  battery: {
    title: '¿Qué notás en la batería?',
    options: [
      { value: 'drains', label: 'Se descarga mucho más rápido que antes', icon: '📉' },
      { value: 'shutdown', label: 'Se apaga aunque todavía marca carga', icon: '⏻' },
      { value: 'percentage', label: 'El porcentaje salta o cambia de golpe', icon: '🔢' },
      { value: 'swollen', label: 'La tapa o pantalla parece levantada', icon: '⚠️' },
      { value: 'unsure', label: 'No estoy seguro/a', icon: '🤔' }
    ]
  },
  touch: {
    title: '¿Cómo falla la pantalla táctil?',
    options: [
      { value: 'zone', label: 'Hay una zona que no responde', icon: '👆' },
      { value: 'ghost', label: 'Toca sola o abre cosas sin que la toque', icon: '👻' },
      { value: 'delay', label: 'Responde con demora o de forma irregular', icon: '⏱️' },
      { value: 'after_drop', label: 'Empezó después de un golpe', icon: '💥' },
      { value: 'unsure', label: 'No estoy seguro/a', icon: '🤔' }
    ]
  },
  audio: {
    title: '¿Qué problema de sonido presenta?',
    options: [
      { value: 'speaker', label: 'No se escucha el audio del teléfono', icon: '🔈' },
      { value: 'microphone', label: 'No me escuchan durante las llamadas', icon: '🎙️' },
      { value: 'calls', label: 'El audio de las llamadas se escucha mal', icon: '📞' },
      { value: 'headphones', label: 'No reconoce auriculares', icon: '🎧' },
      { value: 'unsure', label: 'No estoy seguro/a', icon: '🤔' }
    ]
  },
  network: {
    title: '¿Qué conexión está fallando?',
    options: [
      { value: 'wifi', label: 'Wi-Fi', icon: '📶' },
      { value: 'mobile', label: 'Datos móviles o señal', icon: '📡' },
      { value: 'bluetooth', label: 'Bluetooth', icon: '🔵' },
      { value: 'multiple', label: 'Más de una conexión', icon: '🔀' },
      { value: 'unsure', label: 'No estoy seguro/a', icon: '🤔' }
    ]
  },
  performance: {
    title: '¿Qué hace el teléfono?',
    options: [
      { value: 'slow', label: 'Está lento en general', icon: '🐢' },
      { value: 'freezes', label: 'Se queda congelado o no responde', icon: '🧊' },
      { value: 'apps', label: 'Se cierran las aplicaciones', icon: '📲' },
      { value: 'restarts', label: 'Se reinicia solo', icon: '🔄' },
      { value: 'unsure', label: 'No estoy seguro/a', icon: '🤔' }
    ]
  },
  camera: {
    title: '¿Qué falla en la cámara?',
    options: [
      { value: 'black', label: 'La imagen aparece negra', icon: '⬛' },
      { value: 'blur', label: 'La imagen sale borrosa o no enfoca', icon: '🔎' },
      { value: 'app', label: 'La aplicación de cámara se cierra', icon: '📷' },
      { value: 'glass', label: 'El vidrio de la cámara está roto', icon: '🪟' },
      { value: 'unsure', label: 'No estoy seguro/a', icon: '🤔' }
    ]
  },
  overheating: {
    title: '¿Cuándo se calienta más?',
    options: [
      { value: 'charging', label: 'Mientras está cargando', icon: '🔌' },
      { value: 'apps', label: 'Al usar juegos o aplicaciones exigentes', icon: '🎮' },
      { value: 'idle', label: 'Incluso sin usarlo', icon: '🌡️' },
      { value: 'recent', label: 'Empezó hace poco y no sé por qué', icon: '🆕' },
      { value: 'unsure', label: 'No estoy seguro/a', icon: '🤔' }
    ]
  },
  liquid: {
    title: '¿Qué pasó con el líquido?',
    options: [
      { value: 'splash', label: 'Le cayó un poco de líquido', icon: '💧' },
      { value: 'wet', label: 'Se mojó bastante o cayó al agua', icon: '🌊' },
      { value: 'after', label: 'Funcionó un rato y después falló', icon: '⏱️' },
      { value: 'unsure', label: 'No estoy seguro/a', icon: '🤔' }
    ]
  },
  other: {
    title: '¿Cuál se acerca más a lo que hace?',
    options: [
      { value: 'intermittent', label: 'La falla aparece y desaparece', icon: '🔁' },
      { value: 'after_update', label: 'Empezó después de una actualización', icon: '⬆️' },
      { value: 'after_drop', label: 'Empezó después de un golpe', icon: '💥' },
      { value: 'after_liquid', label: 'Empezó después de mojarse', icon: '💧' },
      { value: 'unsure', label: 'Es algo distinto o no estoy seguro/a', icon: '🤔' }
    ]
  }
};

const baseSteps = [
  {
    id: 'problem',
    title: '¿Cuál es el problema principal?',
    options: [
      { value: 'power', label: 'No enciende', icon: '⏻' },
      { value: 'charge', label: 'No carga bien', icon: '🔌' },
      { value: 'screen', label: 'Pantalla rota o con imagen defectuosa', icon: '📱' },
      { value: 'battery', label: 'La batería dura poco o se apaga', icon: '🪫' },
      { value: 'touch', label: 'Falla el táctil', icon: '👆' },
      { value: 'audio', label: 'Problemas de sonido o micrófono', icon: '🔊' },
      { value: 'network', label: 'Problemas de señal o conexión', icon: '📶' },
      { value: 'performance', label: 'Está lento, se congela o reinicia', icon: '🐢' },
      { value: 'camera', label: 'Problemas con la cámara', icon: '📷' },
      { value: 'overheating', label: 'Se calienta demasiado', icon: '🌡️' },
      { value: 'liquid', label: 'Se mojó o le entró líquido', icon: '💧' },
      { value: 'other', label: 'Otra falla', icon: '🧰' }
    ]
  },
  {
    id: 'detail',
    title: 'Detalle del problema',
    options: []
  },
  {
    id: 'pattern',
    title: '¿Cuándo o cómo empezó?',
    options: [
      { value: 'sudden', label: 'De repente, sin aviso', icon: '⚡' },
      { value: 'gradual', label: 'Fue empeorando con el tiempo', icon: '📉' },
      { value: 'intermittent', label: 'Aparece y desaparece', icon: '🔁' },
      { value: 'after_update', label: 'Después de una actualización o cambio', icon: '⬆️' },
      { value: 'unknown', label: 'No sé cuándo empezó', icon: '🤔' }
    ]
  },
  {
    id: 'incident',
    title: '¿Ocurrió algo antes de que empezara la falla?',
    options: [
      { value: 'drop', label: 'Se cayó o recibió un golpe', icon: '💥' },
      { value: 'liquid', label: 'Se mojó o le entró líquido', icon: '💧' },
      { value: 'repair', label: 'Tuvo una reparación reciente', icon: '🧰' },
      { value: 'nothing', label: 'Nada que recuerde', icon: '🤷' },
      { value: 'unknown', label: 'No estoy seguro/a', icon: '🕵️' }
    ]
  },
  {
    id: 'risk',
    title: '¿Notás alguna señal de riesgo?',
    options: [
      { value: 'none', label: 'No, ninguna de estas señales', icon: '✅' },
      { value: 'hot', label: 'Calor excesivo o que no parece normal', icon: '🌡️' },
      { value: 'swollen', label: 'Batería hinchada o carcasa levantada', icon: '⚠️' },
      { value: 'smell', label: 'Olor a quemado, humo o chispas', icon: '🚨' },
      { value: 'wet', label: 'Está húmedo o se mojó recientemente', icon: '💧' },
      { value: 'unknown', label: 'No estoy seguro/a', icon: '🤔' }
    ]
  },
  {
    id: 'attempt',
    title: '¿Qué probaste hasta ahora?',
    options: [
      { value: 'restart', label: 'Reiniciarlo', icon: '🔄' },
      { value: 'charger', label: 'Otro cable o cargador compatible', icon: '🔌' },
      { value: 'settings', label: 'Revisar ajustes o conexiones', icon: '⚙️' },
      { value: 'nothing', label: 'Todavía nada', icon: '🙈' },
      { value: 'other', label: 'Otra cosa', icon: '🧰' }
    ]
  }
];

const answers = {};
let currentStep = 0;

const questionArea = document.querySelector('#question-area');
const stepCounter = document.querySelector('#step-counter');
const progressFill = document.querySelector('#progress-fill');
const nextButton = document.querySelector('#next-button');
const backButton = document.querySelector('#back-button');
const quizCard = document.querySelector('#quiz-card');
const resultCard = document.querySelector('#result-card');

function getSteps() {
  return baseSteps.map(step => {
    if (step.id === 'detail') {
      const detail = detailOptions[answers.problem] || detailOptions.other;
      return { ...step, title: detail.title, options: detail.options };
    }
    return step;
  });
}

function getAnswerLabel(stepId) {
  const step = getSteps().find(item => item.id === stepId);
  return step?.options.find(option => option.value === answers[stepId])?.label
    || 'Sin respuesta';
}

function renderStep() {
  const steps = getSteps();
  const step = steps[currentStep];

  stepCounter.textContent = `Pregunta \({currentStep + 1} de \){steps.length}`;
  progressFill.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
  backButton.hidden = currentStep === 0;
  nextButton.disabled = !answers[step.id];
  nextButton.textContent = currentStep === steps.length - 1
    ? 'Ver orientación →'
    : 'Continuar →';

  questionArea.innerHTML = `
    <h3 class="question-title" id="current-question">${step.title}</h3>
    <div class="option-list" role="group" aria-labelledby="current-question">
      ${step.options.map(option => `
        <button
          type="button"
          class="option ${answers[step.id] === option.value ? 'selected' : ''}"
          data-step="${step.id}"
          data-value="${option.value}"
          aria-pressed="${answers[step.id] === option.value}">
          <span class="option-emoji" aria-hidden="true">${option.icon}</span>
          <span>${option.label}</span>
        </button>
      `).join('')}
    </div>
  `;

  questionArea.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', () => {
      const selectedStep = button.dataset.step;
      const previousValue = answers[selectedStep];
      answers[selectedStep] = button.dataset.value;

      // Si cambia el problema inicial, borra respuestas que dependían de él.
      if (selectedStep === 'problem' && previousValue !== answers.problem) {
        ['detail', 'pattern', 'incident', 'risk', 'attempt']
          .forEach(key => delete answers[key]);
        currentStep = 0;
      }

      renderStep();
      nextButton.focus();
    });
  });
}

function getResult() {
  const { problem, detail, incident, risk, pattern } = answers;

  // Las señales de riesgo tienen prioridad sobre cualquier otra respuesta.
  if (risk === 'smell') {
    return {
      icon: '🚨',
      title: 'Dejá de usarlo y no lo conectes',
      copy: 'Olor a quemado, humo o chispas pueden indicar un problema eléctrico. No intentes seguir probándolo.',
      tip: 'Apagalo si podés hacerlo sin riesgo, desconectalo y coordiná una revisión técnica.'
    };
  }

  if (risk === 'swollen' || detail === 'swollen') {
    return {
      icon: '⚠️',
      title: 'Conviene dejar de usarlo y revisarlo',
      copy: 'Una carcasa levantada puede ser señal de una batería hinchada. No la presiones, no intentes abrir el equipo y evitá cargarlo.',
      tip: 'Mantenelo alejado del calor y coordiná una revisión técnica cuanto antes.'
    };
  }

  if (risk === 'wet' || incident === 'liquid' || problem === 'liquid') {
    return {
      icon: '💧',
      title: 'Posible ingreso de líquido: no lo cargues',
      copy: 'Aunque parezca funcionar, la humedad puede generar fallas o corrosión. El test no permite saber cuánto afectó al equipo.',
      tip: 'Apagalo si todavía está encendido, no lo conectes al cargador y no uses arroz. Consultá para revisarlo.'
    };
  }

  if (risk === 'hot' || problem === 'overheating') {
    return {
      icon: '🌡️',
      title: 'El calentamiento necesita atención',
      copy: 'Puede relacionarse con el uso, la carga, la batería o algún componente. Si el calor es intenso o aparece sin usarlo, no lo dejes cargando.',
      tip: 'Dejalo enfriar en un lugar ventilado. Si vuelve a calentarse mucho, apagalo y pedí una revisión.'
    };
  }

  const results = {
    power: {
      no_response: {
        title: 'No hay respuesta al intentar encenderlo',
        copy: 'Puede relacionarse con la batería, el sistema de carga, la pantalla o la alimentación interna. No se puede distinguir la causa sin revisar el equipo.',
        tip: 'Si ya probaste un cargador y cable compatibles, no insistas con cargas prolongadas; conviene revisar el equipo.'
      },
      vibrate: {
        title: 'El teléfono podría encender, pero no mostrar imagen',
        copy: 'Si vibra o suena y la pantalla queda negra, puede haber una falla de pantalla o de otro componente. Hace falta comprobarlo técnicamente.',
        tip: 'Probá llamarlo desde otro teléfono. Si recibe llamadas pero no muestra imagen, contanos ese dato al consultar.'
      },
      logo: {
        title: 'El inicio se queda detenido en el logo',
        copy: 'Puede ser un problema de arranque del sistema o una falla de hardware. El test no permite confirmar cuál.',
        tip: 'Evitá restablecerlo de fábrica si necesitás conservar tus datos. Consultá antes de realizar cambios que puedan borrarlos.'
      },
      restart: {
        title: 'Se apaga o reinicia durante el inicio',
        copy: 'Puede estar relacionado con batería, software o algún componente interno. El momento en que ocurre ayuda a orientar la revisión.',
        tip: 'Si empezó después de una caída, reparación o actualización, mencioná ese antecedente al consultar.'
      }
    },
    charge: {
      not_detected: {
        title: 'El teléfono no detecta la carga',
        copy: 'Las causas posibles incluyen el cargador, el cable, el conector de carga o la batería. No es posible confirmar la pieza sin probar el equipo.',
        tip: 'Probá una toma y un cargador compatibles que sepas que funcionan. No introduzcas objetos en el conector.'
      },
      intermittent: {
        title: 'La carga se interrumpe al mover el cable',
        copy: 'Puede haber desgaste o suciedad en el conector, un cable dañado o una conexión inestable.',
        tip: 'No fuerces ni muevas el cable para mantener la carga. Conviene revisar el conector y probar con accesorios compatibles.'
      },
      slow: {
        title: 'La carga es lenta o se corta',
        copy: 'Puede depender del cargador, el cable, la temperatura, el uso durante la carga o el sistema de carga del teléfono.',
        tip: 'Probá un cargador compatible y evitá usarlo intensamente mientras carga. Si continúa, pedí una revisión.'
      },
      hot: {
        title: 'Hay calentamiento durante la carga',
        copy: 'Un poco de temperatura puede ocurrir, pero el calentamiento excesivo no debe ignorarse. Puede tener varias causas.',
        tip: 'Desconectalo si se calienta demasiado y no lo dejes cargando sin supervisión. Si persiste, coordiná una revisión.'
      }
    },
    screen: {
      cracked: {
        title: 'La pantalla o el vidrio están dañados',
        copy: 'Un golpe puede afectar el vidrio, el módulo de pantalla o componentes internos. El aspecto externo no siempre muestra todo el daño.',
        tip: 'No presiones las partes rotas. Consultá para revisar si corresponde cambio de módulo u otra reparación.'
      },
      lines: {
        title: 'Las líneas o manchas requieren revisar la pantalla',
        copy: 'Pueden relacionarse con el módulo de pantalla o con un golpe, presión o humedad. Hace falta inspeccionar el equipo.',
        tip: 'Si empeora al moverlo o después de un golpe, comentá cuándo empezó y si el táctil todavía responde.'
      },
      black: {
        title: 'La pantalla queda negra, pero el equipo parece encendido',
        copy: 'Podría fallar la pantalla, la conexión del módulo u otra parte del teléfono. El test no puede confirmarlo a distancia.',
        tip: 'Contanos si vibra, suena o recibe llamadas; ese dato ayuda a orientar la revisión.'
      },
      touch: {
        title: 'La imagen aparece, pero falla el táctil',
        copy: 'Puede estar relacionado con el módulo de pantalla, un golpe, humedad o una falla intermitente.',
        tip: 'Evitá ingresar claves muchas veces si el táctil toca solo. Consultá indicando qué zonas no responden.'
      }
    },
    battery: {
      drains: {
        title: 'La batería se descarga más rápido de lo habitual',
        copy: 'Puede deberse al desgaste de la batería, al uso de aplicaciones, la señal o ajustes del sistema. No se puede confirmar solo con este test.',
        tip: 'Si el cambio fue repentino o el equipo también se apaga, mencioná esos síntomas al pedir una revisión.'
      },
      shutdown: {
        title: 'Se apaga aunque todavía marque carga',
        copy: 'Puede relacionarse con el estado de la batería, la lectura del porcentaje o la alimentación del equipo.',
        tip: 'Anotá aproximadamente con qué porcentaje se apaga y si ocurre al usar una aplicación o cámara.'
      },
      percentage: {
        title: 'El porcentaje de batería cambia de forma irregular',
        copy: 'Puede haber una lectura incorrecta o un problema de batería o carga. Hace falta comprobar el comportamiento del equipo.',
        tip: 'Si además se apaga, se calienta mucho o la carcasa está levantada, dejá de usarlo y consultá.'
      }
    },
    touch: {
      zone: {
        title: 'Una zona de la pantalla no responde',
        copy: 'Puede ser un problema del táctil o del módulo de pantalla, especialmente si hubo un golpe o presión.',
        tip: 'Indicá qué zona falla y si la imagen tiene manchas o grietas.'
      },
      ghost: {
        title: 'La pantalla registra toques que no hiciste',
        copy: 'Los toques fantasma pueden relacionarse con el módulo, humedad, un protector o un cargador inadecuado.',
        tip: 'Probá desconectarlo del cargador y retirar el protector solo si sale fácilmente. Si continúa, pedí revisión.'
      },
      delay: {
        title: 'El táctil responde con demora o de forma irregular',
        copy: 'Puede deberse a software, carga del sistema o una falla del módulo. El contexto y la frecuencia ayudan a orientar el diagnóstico.',
        tip: 'Contanos si empezó después de una caída, reparación o actualización.'
      },
      after_drop: {
        title: 'El táctil falló después de un golpe',
        copy: 'El impacto puede afectar el módulo aunque el vidrio no esté roto. Es recomendable revisar la pantalla.',
        tip: 'Evitá presionarla o flexionar el equipo y coordiná una revisión.'
      }
    },
    audio: {
      speaker: {
        title: 'El parlante no reproduce el sonido correctamente',
        copy: 'Puede ser una configuración, una obstrucción o una falla del parlante. Hay que comprobarlo para diferenciarlo.',
        tip: 'Revisá el volumen y que no esté conectado a Bluetooth. Si sigue igual, consultanos.'
      },
      microphone: {
        title: 'El micrófono podría no estar captando tu voz',
        copy: 'Puede depender de permisos, obstrucción o una falla del micrófono. Probar una grabación de voz puede ayudar a describirlo.',
        tip: 'Indicá si ocurre en todas las llamadas y aplicaciones o solo en una.'
      },
      calls: {
        title: 'El audio de las llamadas se escucha mal',
        copy: 'Puede relacionarse con el auricular, el parlante, el micrófono, la señal o la configuración.',
        tip: 'Contanos si ocurre usando altavoz, auriculares y llamadas normales.'
      },
      headphones: {
        title: 'No reconoce los auriculares',
        copy: 'Puede ser un problema de los auriculares, el adaptador, el conector o la conexión Bluetooth.',
        tip: 'Si podés, probá los auriculares en otro equipo o probá otros auriculares compatibles.'
      }
    },
    network: {
      wifi: {
        title: 'La conexión Wi-Fi presenta problemas',
        copy: 'Puede depender del router, la configuración o el teléfono. Si pasa en varias redes, es un dato útil para la revisión.',
        tip: 'Probá si otros equipos se conectan a esa red y reiniciá el teléfono antes de restablecer ajustes.'
      },
      mobile: {
        title: 'La señal o los datos móviles fallan',
        copy: 'Puede relacionarse con cobertura, SIM, cuenta del operador o el teléfono.',
        tip: 'Comprobá si la SIM funciona en otro equipo y si el problema ocurre en distintas zonas.'
      },
      bluetooth: {
        title: 'La conexión Bluetooth no funciona como esperás',
        copy: 'Puede tratarse del accesorio, el emparejamiento o la configuración del teléfono.',
        tip: 'Probá olvidar el accesorio y emparejarlo otra vez. Si falla con varios dispositivos, mencionálo al consultar.'
      },
      multiple: {
        title: 'Fallan varias conexiones',
        copy: 'Si Wi-Fi, Bluetooth o señal fallan a la vez, conviene revisar configuración y antecedentes del equipo.',
        tip: 'Contanos qué conexiones fallan y si empezó después de una actualización, caída o reparación.'
      }
    },
    performance: {
      slow: {
        title: 'El teléfono funciona más lento de lo habitual',
        copy: 'Puede estar relacionado con almacenamiento, aplicaciones, software o el estado general del equipo.',
        tip: 'Si podés, liberá espacio y reinicialo. No borres datos importantes sin una copia de seguridad.'
      },
      freezes: {
        title: 'El teléfono se congela o deja de responder',
        copy: 'Puede ser una aplicación, el sistema o una falla del equipo. La frecuencia y el momento en que ocurre son importantes.',
        tip: 'Anotá si sucede al abrir una aplicación específica y evitá restablecer el equipo sin respaldar tus datos.'
      },
      apps: {
        title: 'Las aplicaciones se cierran solas',
        copy: 'Puede ser un problema de una aplicación, espacio disponible, actualización o sistema.',
        tip: 'Indicá qué aplicaciones se cierran y si el problema empezó después de una actualización.'
      },
      restarts: {
        title: 'El teléfono se reinicia solo',
        copy: 'Puede estar relacionado con software, batería o componentes internos. Hace falta revisar el contexto para orientar la causa.',
        tip: 'Contanos cada cuánto pasa y si el equipo se calienta o se apaga al usar alguna aplicación.'
      }
    },
    camera: {
      black: {
        title: 'La cámara muestra una imagen negra',
        copy: 'Puede ser un permiso, una aplicación o un problema del módulo de cámara. Probá si ocurre también en otra aplicación.',
        tip: 'Si la falla sigue en distintas aplicaciones, consultanos para revisar el equipo.'
      },
      blur: {
        title: 'La cámara no enfoca o las fotos salen borrosas',
        copy: 'Puede haber suciedad, movimiento, daño en el vidrio o una falla del enfoque.',
        tip: 'Limpiá suavemente el vidrio exterior con un paño. Si sigue sin enfocar, conviene revisarla.'
      },
      app: {
        title: 'La aplicación de cámara se cierra',
        copy: 'Puede ser un problema de software o de la cámara. Probar la cámara desde otra aplicación puede aportar información.',
        tip: 'Indicá si falla la cámara frontal, la trasera o ambas.'
      },
      glass: {
        title: 'El vidrio de la cámara está dañado',
        copy: 'El vidrio roto puede afectar las fotos y permitir que entre polvo o humedad.',
        tip: 'Evitá tocar el lente y consultá para revisar el vidrio y el módulo.'
      }
    },
    overheating: {
      charging: {
        title: 'Se calienta mientras carga',
        copy: 'Puede relacionarse con el cargador, el uso durante la carga, la batería o el circuito de carga.',
        tip: 'Desconectalo si el calor es excesivo y probá solo accesorios compatibles. Si persiste, pedí revisión.'
      },
      apps: {
        title: 'Se calienta al usar aplicaciones exigentes',
        copy: 'Juegos, cámara, navegación o señal débil pueden aumentar la temperatura; un calentamiento intenso o persistente necesita atención.',
        tip: 'Cerrá aplicaciones que no uses y dejalo enfriar. Si se calienta sin uso, consultá.'
      },
      idle: {
        title: 'Se calienta incluso sin usarlo',
        copy: 'El calentamiento sin actividad puede tener distintas causas y conviene revisarlo, sobre todo si se repite.',
        tip: 'Desconectalo si está cargando. Si el calor es intenso, apagalo y no lo dejes sin supervisión.'
      },
      recent: {
        title: 'El calentamiento empezó recientemente',
        copy: 'Puede coincidir con una aplicación, actualización, cargador o cambio en el equipo. El test no determina la causa.',
        tip: 'Contanos cuándo empezó y si coincide con una actualización, una reparación o un cargador nuevo.'
      }
    },
    other: {
      intermittent: {
        title: 'La falla aparece y desaparece',
        copy: 'Las fallas intermitentes pueden depender de una conexión, una aplicación o un componente. Registrar cuándo ocurre ayuda a revisarlo.',
        tip: 'Anotá qué estabas haciendo y si el teléfono estaba cargando cuando apareció.'
      },
      after_update: {
        title: 'La falla empezó después de una actualización',
        copy: 'Puede estar relacionada con software, configuración o coincidir con otra falla. No se puede confirmar la causa solo con el test.',
        tip: 'Indicá qué actualización instalaste y qué síntoma apareció después.'
      },
      after_drop: {
        title: 'La falla empezó después de un golpe',
        copy: 'Un impacto puede afectar componentes internos aunque no haya daño visible.',
        tip: 'Comentá cuándo se cayó y qué funciones dejaron de andar.'
      },
      after_liquid: {
        title: 'La falla apareció después de mojarse',
        copy: 'La humedad puede producir daños incluso si el equipo parece seco por fuera.',
        tip: 'No lo cargues ni intentes calentarlo. Apagalo si podés hacerlo con seguridad y consultá.'
      }
    }
  };

  const specific = results[problem]?.[detail];

  if (specific) {
    let copy = specific.copy;

    if (incident === 'drop') {
      copy += ' Como hubo un golpe, conviene mencionarlo al técnico: puede cambiar qué partes hay que revisar.';
    } else if (pattern === 'gradual') {
      copy += ' El hecho de que haya empeorado gradualmente también es importante para la revisión.';
    }

    return {
      icon: problem === 'charge' ? '🔌' : problem === 'screen' ? '📱' : '🔎',
      title: specific.title,
      copy,
      tip: specific.tip
    };
  }

  return {
    icon: '🔎',
    title: 'Hace falta revisar el equipo para orientar la causa',
    copy: 'Tus respuestas describen el síntoma, pero varias fallas pueden producir comportamientos parecidos. El test no reemplaza una revisión técnica.',
    tip: 'Mandanos el modelo del teléfono, el síntoma principal y cuándo empezó para coordinar una consulta.'
  };
}

function createWhatsappLink() {
  const lines = [
    'Hola, completé la consulta técnica del celular.',
    `Falla principal: ${getAnswerLabel('problem')}.`,
    `Detalle: ${getAnswerLabel('detail')}.`,
    `Cuándo empezó: ${getAnswerLabel('pattern')}.`,
    `Antecedente: ${getAnswerLabel('incident')}.`,
    `Señal de riesgo: ${getAnswerLabel('risk')}.`,
    `Ya probé: ${getAnswerLabel('attempt')}.`,
    '¿Me pueden orientar y decir cómo coordinar una revisión?'
  ];

  const message = lines.join('\n');
  return `https://wa.me/\({CONFIG.whatsappNumber}?text=\){encodeURIComponent(message)}`;
}

function showResult() {
  const result = getResult();

  document.querySelector('#result-icon').textContent = result.icon;
  document.querySelector('#result-title').textContent = result.title;
  document.querySelector('#result-copy').textContent = result.copy;
  document.querySelector('#result-tip-text').textContent = result.tip;
  document.querySelector('#whatsapp-button').href = createWhatsappLink();

  quizCard.hidden = true;
  resultCard.hidden = false;
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

nextButton.addEventListener('click', () => {
  const steps = getSteps();

  if (!answers[steps[currentStep].id]) return;

  if (currentStep < steps.length - 1) {
    currentStep += 1;
    renderStep();
  } else {
    showResult();
  }
});

backButton.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep -= 1;
    renderStep();
  }
});

document.querySelector('#restart-button').addEventListener('click', () => {
  Object.keys(answers).forEach(key => delete answers[key]);
  currentStep = 0;
  resultCard.hidden = true;
  quizCard.hidden = false;
  renderStep();
  quizCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

const generalMessage = encodeURIComponent(
  'Hola, quiero hacer una consulta técnica por mi celular.'
);
const generalLink =
  `https://wa.me/\({CONFIG.whatsappNumber}?text=\){generalMessage}`;

document.querySelector('#footer-whatsapp').href = generalLink;

renderStep();
