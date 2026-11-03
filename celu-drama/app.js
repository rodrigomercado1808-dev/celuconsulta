// Personalizá estos datos para tu taller.
const CONFIG = {
  whatsappNumber: '5491155775741', // Formato internacional, solo números. Cambialo si corresponde.
  location: 'Parque Avellaneda y alrededores',
  businessName: 'Celu Dramático'
};

const steps = [
  {
    id: 'problem',
    title: 'Primero lo primero: ¿qué le pasa?',
    options: [
      { value: 'power', label: 'No prende', icon: '🔋' },
      { value: 'charge', label: 'No carga o carga mal', icon: '🔌' },
      { value: 'screen', label: 'Pantalla rota o no se ve bien', icon: '📱' },
      { value: 'battery', label: 'La batería dura poco', icon: '🪫' },
      { value: 'audio', label: 'No se escucha bien', icon: '🔇' },
      { value: 'other', label: 'Otra falla / hace cosas raras', icon: '🤨' }
    ]
  },
  {
    id: 'incident',
    title: '¿Pasó algo antes de que empezara la falla?',
    options: [
      { value: 'drop', label: 'Se cayó o recibió un golpe', icon: '💥' },
      { value: 'liquid', label: 'Se mojó o le entró líquido', icon: '💧' },
      { value: 'nothing', label: 'Nada que yo recuerde', icon: '🤷' },
      { value: 'unknown', label: 'No estoy seguro/a', icon: '🕵️' }
    ]
  },
  {
    id: 'attempt',
    title: '¿Qué intentaste hasta ahora?',
    options: [
      { value: 'restart', label: 'Lo reinicié', icon: '🔄' },
      { value: 'charger', label: 'Probé otro cable o cargador', icon: '🔌' },
      { value: 'nothing', label: 'Todavía nada', icon: '🙈' },
      { value: 'other', label: 'Probé otra cosa', icon: '🧰' }
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

function renderStep() {
  const step = steps[currentStep];
  stepCounter.textContent = `Pregunta ${currentStep + 1} de ${steps.length}`;
  progressFill.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
  backButton.hidden = currentStep === 0;
  nextButton.disabled = !answers[step.id];
  nextButton.textContent = currentStep === steps.length - 1 ? 'Ver resultado →' : 'Seguir →';
  questionArea.innerHTML = `
    <h3 class="question-title" id="current-question">${step.title}</h3>
    <div class="option-list" role="group" aria-labelledby="current-question">
      ${step.options.map(option => `
        <button type="button" class="option ${answers[step.id] === option.value ? 'selected' : ''}"
          data-value="${option.value}" aria-pressed="${answers[step.id] === option.value}">
          <span class="option-emoji" aria-hidden="true">${option.icon}</span><span>${option.label}</span>
        </button>`).join('')}
    </div>`;
  questionArea.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', () => {
      answers[step.id] = button.dataset.value;
      renderStep();
      nextButton.focus();
    });
  });
}

function getResult() {
  const { problem, incident } = answers;
  if (incident === 'liquid') return {
    icon: '💧', title: '¡Pausa la misión de rescate!',
    copy: 'Si se mojó, lo más seguro es apagarlo y evitar conectarlo al cargador. Encenderlo o cargarlo podría empeorar el daño.',
    tip: 'No lo cargues ni uses arroz como arreglo. Consultá para que lo revisen cuanto antes.'
  };
  if (problem === 'screen' || (incident === 'drop' && problem !== 'audio')) return {
    icon: '🩹', title: 'Parece que tuvo un encuentro cercano con el piso',
    copy: 'Un golpe puede afectar el módulo, la pantalla u otros componentes. El test no puede confirmar cuál sin revisar el equipo.',
    tip: 'Si la pantalla está rota, evitá presionarla. Podemos revisar si necesita cambio de módulo u otra reparación.'
  };
  if (problem === 'charge') return {
    icon: '🔌', title: 'El equipo y el cargador están en una relación complicada',
    copy: 'Puede ser el cable, el cargador, el pin de carga o la batería. Esta prueba no alcanza para distinguirlo con seguridad.',
    tip: 'Si ya probaste otro cable y cargador compatibles y sigue igual, conviene revisar el pin de carga y la batería.'
  };
  if (problem === 'battery' || problem === 'power') return {
    icon: '🪫', title: 'La batería podría estar pidiendo vacaciones',
    copy: 'Una falla de batería es una posibilidad, pero también puede haber un problema de carga, software u otro componente.',
    tip: 'Si se calienta mucho, se hinchó o tiene olor raro, dejá de usarlo y no lo cargues. Si no, coordiná una revisión.'
  };
  if (problem === 'audio') return {
    icon: '🔇', title: 'El celu se puso en modo mimo',
    copy: 'Podría ser una configuración, suciedad en una salida o una falla del parlante o micrófono. Hay que revisarlo para saberlo.',
    tip: 'Probá subir el volumen y revisar que no esté conectado a Bluetooth. Si sigue igual, consultanos.'
  };
  return {
    icon: '🕵️', title: 'Caso abierto: el celu no cuenta todo',
    copy: 'Con estos datos no se puede identificar la causa. Las fallas electrónicas a veces se parecen, aunque el origen sea distinto.',
    tip: 'Mandanos un mensaje con el modelo y qué hace exactamente, y coordinamos una revisión.'
  };
}

function createWhatsappLink() {
  const labels = Object.fromEntries(steps.map(step => [step.id,
    step.options.find(option => option.value === answers[step.id])?.label || 'Sin respuesta'
  ]));
  const message = `Hola, hice el test del celu dramático. Mi celular: ${labels.problem}. Antes de la falla: ${labels.incident}. Ya probé: ${labels.attempt}. ¿Podemos coordinar una revisión?`;
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
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

const generalMessage = encodeURIComponent('Hola, vi la página y quiero consultar por una reparación.');
const generalLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${generalMessage}`;
document.querySelector('#footer-whatsapp').href = generalLink;
renderStep();
