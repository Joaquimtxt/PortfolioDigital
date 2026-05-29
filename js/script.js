const timelineData = [
  {
    period: "2º semestre de 2023",
    title: "Robótica no Sesi 026",
    description:
      "Primeiro contato com circuitos, lógica de programação e Arduino, com participação em duas OBRs.",
    tools: [
      { name: "Arduino", image: "img/Arduino.png" }
    ]
  },
  {
    period: "1º semestre de 2024",
    title: "Base técnica e primeiros fundamentos web",
    description:
      "Início do ensino técnico integrado, com foco em fundamentos de desenvolvimento e prática em laboratório.",
    tools: [
      { name: "HTML", image: "img/HTML.png" },
      { name: "CSS", image: "img/CSS.png" },
      { name: "JavaScript", image: "img/JS.png" },
      { name: "Python", image: "img/Python.png" }
    ]
  },
  {
    period: "2º semestre de 2024",
    title: "Ampliação do stack e interfaces",
    description:
      "Aprofundamento em front-end e início da prática de responsividade, e com o C# para desenvolvimento de MVCs",
    tools: [
      { name: "Bootstrap", image: "img/Bootstrap.png" },
      { name: "C#", image: "img/csharp.png" }
    ]
  },
  {
    period: "2025",
    title: "Projetos com mais profundidade",
    description:
      "Desenvolvimento com React, MSSQL e C#(Api .rest), consolidando lógica de interface e base de dados. Uso de Arduino para projetos de microcontroladores MQTT com ESP-32.",
    tools: [
      { name: "React", image: "img/React.png" },
      { name: "MSSQL", image: "img/MSSQL.png" },
      { name: "Arduino", image: "img/Arduino.png" },
      { name: "C#", image: "img/csharp.png" }
    ]
  },
  {
    period: "2026",
    title: "Fatec e estágio na NovaPC",
    description:
      "Retomada de HTML, CSS e JavaScript na Fatec, junto com a experiência prática no estágio usando PHP. Aprofundamento em C# e Docker no curso do Senai",
    tools: [
      { name: "HTML", image: "img/HTML.png" },
      { name: "CSS", image: "img/CSS.png" },
      { name: "JavaScript", image: "img/JS.png" },
      { name: "PHP", image: "img/PHP.png" },
      { name: "C#", image: "img/csharp.png" },
      { name: "Docker", image: "img/Docker.png" }
    ]
  }
];

const anoAtualizado = () => {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const dataNascimento = new Date("2007-08-10");

  let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

  const mesAtual = dataAtual.getMonth();
  const mesNascimento = dataNascimento.getMonth();
  const diaAtual = dataAtual.getDate();
  const diaNascimento = dataNascimento.getDate();

  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
    idade--;
  }

  const anoAtElement = document.getElementById("anoAt");
  const idadeElement = document.getElementById("Idade");

  if (anoAtElement) {
    anoAtElement.textContent = anoAtual;
  }

  if (idadeElement) {
    idadeElement.textContent = idade;
  }
};

const initTimeline = () => {
  const rangeElement = document.getElementById("timelineRange");
  const cardElement = document.getElementById("timelineCard");

  if (!rangeElement || !cardElement) {
    return;
  }

  const renderTimelineCard = (index) => {
    const entry = timelineData[index];

    cardElement.classList.add("is-changing");

    window.setTimeout(() => {
      cardElement.innerHTML = `
        <div class="d-flex flex-column flex-md-row justify-content-between gap-2 align-items-md-center">
          <div>
            <div class="timeline-period">${entry.period}</div>
            <h4 class="mb-2 text-white">${entry.title}</h4>
          </div>
          <span class="badge rounded-pill text-bg-warning align-self-start align-self-md-center"></span>
        </div>
        <p class="text-white-50 mb-0 mt-2">${entry.description}</p>
        <div class="timeline-tools">
          ${entry.tools
            .map(
              (tool) => `
                <article class="timeline-tool">
                  <img src="${tool.image}" alt="${tool.name}">
                  <span>${tool.name}</span>
                </article>
              `
            )
            .join("")}
        </div>
      `;

      cardElement.classList.remove("is-changing");
    }, 120);
  };

  rangeElement.addEventListener("input", (event) => {
    renderTimelineCard(Number(event.target.value));
  });

  renderTimelineCard(Number(rangeElement.value));
};

document.addEventListener("DOMContentLoaded", () => {
  anoAtualizado();
  initTimeline();
});