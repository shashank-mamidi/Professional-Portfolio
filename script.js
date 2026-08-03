const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* Interactive Sensor-to-AI Pipeline */

const pipelineSteps = document.querySelectorAll(".pipeline-step");

const pipelineData = {
  "physical-event": {
    stage: "Stage 01",
    title: "Physical Event",
    description:
      "A real-world event produces a measurable quantity such as vibration, pressure, temperature, sound, light, or motion.",
    function:
      "The system encounters the physical condition that needs to be measured or classified.",
    uncertainty:
      "Different physical conditions may produce similar observable signals.",
    focus:
      "Define measurable characteristics and operating conditions."
  },

  sensor: {
    stage: "Stage 02",
    title: "Sensor",
    description:
      "The sensor converts the physical event into an electrical signal.",
    function:
      "The sensor captures information from the physical environment.",
    uncertainty:
      "Noise, drift, sensitivity variation, saturation, temperature effects, and mismatch can alter the signal.",
    focus:
      "Sensitivity, dynamic range, calibration, signal-to-noise ratio, and repeatability."
  },

  afe: {
    stage: "Stage 03",
    title: "Analog Front End",
    description:
      "The analog front end conditions the sensor signal before conversion.",
    function:
      "Amplifiers, filters, bias circuits, references, and protection circuits prepare the signal.",
    uncertainty:
      "Offset, gain error, distortion, bandwidth limitations, clipping, and supply interference can corrupt the signal.",
    focus:
      "Noise, linearity, bandwidth, gain accuracy, stability, dynamic range, and power."
  },

  adc: {
    stage: "Stage 04",
    title: "Analog-to-Digital Conversion",
    description:
      "The ADC samples and quantizes the conditioned analog signal.",
    function:
      "The converter translates the continuous-time signal into digital values.",
    uncertainty:
      "Quantization noise, aliasing, insufficient resolution, reference errors, and nonlinearity can remove useful information.",
    focus:
      "Resolution, sampling rate, ENOB, linearity, reference quality, bandwidth, and power."
  },

  processing: {
    stage: "Stage 05",
    title: "Digital Processing",
    description:
      "Digital logic prepares the converted signal for AI/ML inference.",
    function:
      "The system filters, normalizes, compresses, or extracts features from the data.",
    uncertainty:
      "Incorrect preprocessing, feature loss, scaling errors, synchronization problems, or insufficient precision can change the model input.",
    focus:
      "Data integrity, latency, memory movement, numerical precision, and efficiency."
  },

  model: {
    stage: "Stage 06",
    title: "AI/ML Model",
    description:
      "The model analyzes processed data and estimates a class, condition, or prediction.",
    function:
      "The model identifies patterns and maps them to a learned output.",
    uncertainty:
      "Overfitting, biased data, ambiguous classes, out-of-distribution inputs, and approximation can produce errors.",
    focus:
      "Generalization, confidence estimation, robustness, model size, quantization, and validation."
  },

  decision: {
    stage: "Stage 07",
    title: "System Decision",
    description:
      "The final output becomes a decision, alert, control command, or classification result.",
    function:
      "The system uses the model output to determine the appropriate action.",
    uncertainty:
      "False positives, false negatives, low confidence, incorrect thresholds, or delayed responses can affect behavior.",
    focus:
      "Decision thresholds, safety margins, response time, fault handling, and validation."
  }
};

function updatePipelineDetails(stageName) {
  const data = pipelineData[stageName];

  if (!data) {
    return;
  }

  const detailKicker = document.getElementById("detailKicker");
  const detailTitle = document.getElementById("detailTitle");
  const detailDescription = document.getElementById("detailDescription");
  const detailFunction = document.getElementById("detailFunction");
  const detailUncertainty = document.getElementById("detailUncertainty");
  const detailFocus = document.getElementById("detailFocus");

  if (
    !detailKicker ||
    !detailTitle ||
    !detailDescription ||
    !detailFunction ||
    !detailUncertainty ||
    !detailFocus
  ) {
    return;
  }

  detailKicker.textContent = data.stage;
  detailTitle.textContent = data.title;
  detailDescription.textContent = data.description;
  detailFunction.textContent = data.function;
  detailUncertainty.textContent = data.uncertainty;
  detailFocus.textContent = data.focus;

  pipelineSteps.forEach((step) => {
    const isActive = step.dataset.stage === stageName;

    step.classList.toggle("active", isActive);
    step.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

pipelineSteps.forEach((step) => {
  step.addEventListener("click", () => {
    updatePipelineDetails(step.dataset.stage);
  });
});
