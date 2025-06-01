// Data from the application_data_json
const dashboardData = {
  bibliotecas_distrito: [
    {"distrito": "Lisboa", "bibliotecas": 455, "densidade": 162.5, "nuts2": "AML"},
    {"distrito": "Porto", "bibliotecas": 410, "densidade": 183.2, "nuts2": "Norte"},
    {"distrito": "Setúbal", "bibliotecas": 230, "densidade": 125.4, "nuts2": "AML"},
    {"distrito": "Braga", "bibliotecas": 219, "densidade": 256.8, "nuts2": "Norte"},
    {"distrito": "Aveiro", "bibliotecas": 185, "densidade": 252.8, "nuts2": "Centro"},
    {"distrito": "Faro", "bibliotecas": 140, "densidade": 304.3, "nuts2": "Algarve"},
    {"distrito": "Santarém", "bibliotecas": 125, "densidade": 198.7, "nuts2": "Centro"},
    {"distrito": "Leiria", "bibliotecas": 124, "densidade": 315.2, "nuts2": "Centro"},
    {"distrito": "Coimbra", "bibliotecas": 120, "densidade": 298.5, "nuts2": "Centro"},
    {"distrito": "Viseu", "bibliotecas": 106, "densidade": 187.3, "nuts2": "Centro"},
    {"distrito": "Viana do Castelo", "bibliotecas": 71, "densidade": 145.6, "nuts2": "Norte"},
    {"distrito": "Beja", "bibliotecas": 67, "densidade": 14.3, "nuts2": "Alentejo"},
    {"distrito": "Évora", "bibliotecas": 59, "densidade": 35.8, "nuts2": "Alentejo"},
    {"distrito": "Castelo Branco", "bibliotecas": 55, "densidade": 31.2, "nuts2": "Centro"},
    {"distrito": "Vila Real", "bibliotecas": 49, "densidade": 28.5, "nuts2": "Norte"},
    {"distrito": "Guarda", "bibliotecas": 40, "densidade": 24.1, "nuts2": "Centro"},
    {"distrito": "Portalegre", "bibliotecas": 37, "densidade": 31.8, "nuts2": "Alentejo"},
    {"distrito": "Bragança", "bibliotecas": 32, "densidade": 18.5, "nuts2": "Norte"}
  ],
  regioes_nuts2: [
    {
      "regiao": "Norte",
      "bibliotecas": 903,
      "populacao": 3645000,
      "pisa_leitura": 477,
      "pisa_matematica": 473,
      "pib_indice": 85,
      "densidade_bibliotecas": 24.8,
      "avaliacao_be": 3.2
    },
    {
      "regiao": "Centro", 
      "bibliotecas": 621,
      "populacao": 2210000,
      "pisa_leitura": 485,
      "pisa_matematica": 481,
      "pib_indice": 82,
      "densidade_bibliotecas": 28.1,
      "avaliacao_be": 3.4
    },
    {
      "regiao": "Área Metropolitana de Lisboa",
      "bibliotecas": 605,
      "populacao": 2800000,
      "pisa_leitura": 476,
      "pisa_matematica": 472,
      "pib_indice": 125,
      "densidade_bibliotecas": 21.6,
      "avaliacao_be": 3.3
    },
    {
      "regiao": "Alentejo",
      "bibliotecas": 255,
      "populacao": 700000,
      "pisa_leitura": 467,
      "pisa_matematica": 463,
      "pib_indice": 75,
      "densidade_bibliotecas": 36.4,
      "avaliacao_be": 3.1
    },
    {
      "regiao": "Algarve",
      "bibliotecas": 140,
      "populacao": 460000,
      "pisa_leitura": 456,
      "pisa_matematica": 452,
      "pib_indice": 95,
      "densidade_bibliotecas": 30.4,
      "avaliacao_be": 3.0
    },
    {
      "regiao": "Madeira",
      "bibliotecas": 50,
      "populacao": 250000,
      "pisa_leitura": 478,
      "pisa_matematica": 474,
      "pib_indice": 88,
      "densidade_bibliotecas": 20.0,
      "avaliacao_be": 3.2
    },
    {
      "regiao": "Açores",
      "bibliotecas": 25,
      "populacao": 245000,
      "pisa_leitura": 412,
      "pisa_matematica": 408,
      "pib_indice": 85,
      "densidade_bibliotecas": 10.2,
      "avaliacao_be": 2.8
    }
  ],
  programas: [
    {
      "nome": "Rede de Bibliotecas Escolares (RBE)",
      "ano_inicio": 1996,
      "escolas_aderentes": 2524,
      "objetivo": "Integrar bibliotecas escolares no sistema educativo"
    },
    {
      "nome": "Plano Nacional de Leitura 2027",
      "ano_inicio": 2017,
      "escolas_aderentes": 1800,
      "objetivo": "Promover competências de leitura e literacia"
    },
    {
      "nome": "Concurso Nacional de Leitura",
      "ano_inicio": 2007,
      "participantes_anuais": 180000,
      "objetivo": "Estimular gosto pela leitura entre jovens"
    }
  ],
  timeline_atividades: [
    {"mes": "Janeiro", "atividade": "Arranque do ano letivo - Planos de leitura"},
    {"mes": "Março", "atividade": "Semana da Leitura"},
    {"mes": "Abril", "atividade": "Dia Mundial do Livro"},
    {"mes": "Maio", "atividade": "Concurso Nacional de Leitura - Fase Nacional"},
    {"mes": "Outubro", "atividade": "Mês Internacional da Biblioteca Escolar"},
    {"mes": "Dezembro", "atividade": "Avaliação anual das bibliotecas escolares"}
  ],
  impacto_educacional: {
    "percentagem_alunos_nivel_2_leitura": 76.9,
    "percentagem_bibliotecas_nivel_3_ou_superior": 86,
    "reducao_low_performers": 3.1,
    "melhoria_competencias_informacao": "significativa"
  }
};

// DOM Elements
const navTabs = document.querySelectorAll('.nav__tab');
const sections = document.querySelectorAll('.section');
const themeToggle = document.getElementById('themeToggle');
const exportBtn = document.getElementById('exportBtn');
const regionSelect = document.getElementById('regionSelect');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeThemeToggle();
  initializeExportFunction();
  initializeRegionFilter();
  initializeModal();
  initializeInteractiveElements();
  populateComparisonTable();
  generateTimeline();
  generateLiteracyIndicators();
});

// Navigation functionality
function initializeNavigation() {
  navTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetSection = this.getAttribute('data-tab');
      
      // Update active tab
      navTabs.forEach(t => t.classList.remove('nav__tab--active'));
      this.classList.add('nav__tab--active');
      
      // Update active section
      sections.forEach(section => {
        section.classList.remove('section--active');
        if (section.id === targetSection) {
          section.classList.add('section--active');
        }
      });
      
      // Scroll to top of section
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
}

// Theme toggle functionality
function initializeThemeToggle() {
  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  updateThemeToggleText(currentTheme);

  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-color-scheme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-color-scheme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleText(newTheme);
  });
}

function updateThemeToggleText(theme) {
  themeToggle.textContent = theme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro';
}

// Export functionality
function initializeExportFunction() {
  exportBtn.addEventListener('click', function() {
    const csvData = convertDataToCSV();
    downloadCSV(csvData, 'bibliotecas_escolares_portugal.csv');
  });
}

function convertDataToCSV() {
  const headers = ['Região', 'Bibliotecas', 'População', 'PISA Leitura', 'PIB Índice', 'Avaliação BE'];
  const rows = dashboardData.regioes_nuts2.map(region => [
    region.regiao,
    region.bibliotecas,
    region.populacao.toLocaleString(),
    region.pisa_leitura,
    region.pib_indice,
    region.avaliacao_be
  ]);
  
  const csvContent = [headers, ...rows]
    .map(row => row.map(field => `"${field}"`).join(','))
    .join('\n');
  
  return csvContent;
}

function downloadCSV(csvContent, filename) {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Region filter functionality
function initializeRegionFilter() {
  regionSelect.addEventListener('change', function() {
    const selectedRegion = this.value;
    filterTableByRegion(selectedRegion);
  });
}

function filterTableByRegion(selectedRegion) {
  const tableBody = document.getElementById('tableBody');
  const rows = tableBody.querySelectorAll('tr');
  
  rows.forEach(row => {
    const regionCell = row.cells[0];
    if (!selectedRegion || regionCell.textContent.includes(selectedRegion)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// Modal functionality
function initializeModal() {
  modalClose.addEventListener('click', closeModal);
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('modal--active')) {
      closeModal();
    }
  });
}

function openModal(title, content) {
  modalTitle.textContent = title;
  modalBody.innerHTML = content;
  modal.classList.add('modal--active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('modal--active');
  document.body.style.overflow = '';
}

// Interactive elements
function initializeInteractiveElements() {
  // Map regions
  const mapRegions = document.querySelectorAll('.map-region');
  mapRegions.forEach(region => {
    region.addEventListener('click', function() {
      const regionName = this.getAttribute('data-region');
      const regionData = getRegionDetails(regionName);
      openModal(`Região: ${regionName}`, createRegionModalContent(regionData));
    });
  });

  // Program cards
  const programCards = document.querySelectorAll('.program-card');
  programCards.forEach(card => {
    card.addEventListener('click', function() {
      const programType = this.getAttribute('data-program');
      const programData = getProgramDetails(programType);
      openModal(programData.nome, createProgramModalContent(programData));
    });
  });

  // Gallery items
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const imageType = this.getAttribute('data-image');
      const imageData = getImageDetails(imageType);
      openModal(imageData.title, createImageModalContent(imageData));
    });
  });
}

// Helper functions for modal content
function getRegionDetails(regionName) {
  const regionMap = {
    'Norte': 'Norte',
    'Centro': 'Centro',
    'AML': 'Área Metropolitana de Lisboa',
    'Alentejo': 'Alentejo',
    'Algarve': 'Algarve',
    'Madeira': 'Madeira',
    'Açores': 'Açores'
  };
  
  const mappedName = regionMap[regionName] || regionName;
  return dashboardData.regioes_nuts2.find(r => r.regiao === mappedName);
}

function createRegionModalContent(regionData) {
  if (!regionData) return '<p>Dados não encontrados para esta região.</p>';
  
  return `
    <div class="region-details">
      <h4>Estatísticas da Região</h4>
      <ul>
        <li><strong>Bibliotecas:</strong> ${regionData.bibliotecas}</li>
        <li><strong>População:</strong> ${regionData.populacao.toLocaleString()}</li>
        <li><strong>PISA Leitura:</strong> ${regionData.pisa_leitura}</li>
        <li><strong>PISA Matemática:</strong> ${regionData.pisa_matematica}</li>
        <li><strong>PIB per capita (índice):</strong> ${regionData.pib_indice}</li>
        <li><strong>Densidade de bibliotecas:</strong> ${regionData.densidade_bibliotecas} por 100k hab</li>
        <li><strong>Avaliação BE:</strong> ${regionData.avaliacao_be}/4.0</li>
      </ul>
    </div>
  `;
}

function getProgramDetails(programType) {
  const programMap = {
    'rbe': dashboardData.programas[0],
    'pnl': dashboardData.programas[1],
    'cnl': dashboardData.programas[2]
  };
  
  return programMap[programType] || dashboardData.programas[0];
}

function createProgramModalContent(programData) {
  const participantesText = programData.escolas_aderentes 
    ? `${programData.escolas_aderentes} escolas aderentes`
    : `${programData.participantes_anuais.toLocaleString()} participantes anuais`;
    
  return `
    <div class="program-details">
      <p><strong>Ano de início:</strong> ${programData.ano_inicio}</p>
      <p><strong>Objetivo:</strong> ${programData.objetivo}</p>
      <p><strong>Alcance:</strong> ${participantesText}</p>
      <h4>Impacto do Programa</h4>
      <p>Este programa tem contribuído significativamente para a promoção da leitura e literacia em Portugal, integrando-se no sistema educativo nacional e criando uma rede de apoio às bibliotecas escolares.</p>
    </div>
  `;
}

function getImageDetails(imageType) {
  const imageMap = {
    'reading-activities': {
      title: 'Atividades de Leitura',
      description: 'Promoção da leitura nas bibliotecas escolares através de atividades diversificadas.'
    },
    'semana-leitura': {
      title: 'Semana da Leitura',
      description: 'Evento anual que celebra a leitura com múltiplas atividades educativas.'
    },
    'hora-conto': {
      title: 'Hora do Conto',
      description: 'Sessões regulares de leitura para promover o gosto pelos livros desde cedo.'
    }
  };
  
  return imageMap[imageType] || imageMap['reading-activities'];
}

function createImageModalContent(imageData) {
  return `
    <div class="image-details">
      <p>${imageData.description}</p>
      <h4>Importância da Atividade</h4>
      <p>Esta atividade é fundamental para o desenvolvimento das competências de leitura e para criar um ambiente positivo em torno dos livros e da literatura.</p>
    </div>
  `;
}

// Populate comparison table
function populateComparisonTable() {
  const tableBody = document.getElementById('tableBody');
  
  dashboardData.regioes_nuts2.forEach(region => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${region.regiao}</td>
      <td>${region.bibliotecas}</td>
      <td>${region.pisa_leitura}</td>
      <td>${region.pib_indice}</td>
      <td>${region.populacao.toLocaleString()}</td>
      <td>${region.avaliacao_be}/4.0</td>
    `;
    tableBody.appendChild(row);
  });
}

// Generate timeline
function generateTimeline() {
  const timelineContainer = document.getElementById('activitiesTimeline');
  
  dashboardData.timeline_atividades.forEach(item => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.innerHTML = `
      <div class="timeline-month">${item.mes}</div>
      <div class="timeline-activity">${item.atividade}</div>
    `;
    timelineContainer.appendChild(timelineItem);
  });
}

// Generate literacy indicators
function generateLiteracyIndicators() {
  const indicatorsContainer = document.getElementById('literacyIndicators');
  
  dashboardData.regioes_nuts2.forEach(region => {
    const indicator = document.createElement('div');
    indicator.className = 'literacy-indicator';
    
    // Determine light color based on PISA score
    let lightClass = 'literacy-light--red';
    if (region.pisa_leitura >= 480) {
      lightClass = 'literacy-light--green';
    } else if (region.pisa_leitura >= 460) {
      lightClass = 'literacy-light--yellow';
    }
    
    indicator.innerHTML = `
      <div class="literacy-light ${lightClass}"></div>
      <div class="literacy-info">
        <h4>${region.regiao}</h4>
        <p>PISA: ${region.pisa_leitura} | BE: ${region.avaliacao_be}/4.0</p>
      </div>
    `;
    
    indicatorsContainer.appendChild(indicator);
  });
}

// Utility functions
function formatNumber(num) {
  return new Intl.NumberFormat('pt-PT').format(num);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}