// Lista de nomes de arquivo realistas
const filenames = [
    'update_sistema.zip',
    'dados_backup.tar.gz',
    'aplicacao_new.exe',
    'recursos_media.rar',
    'configuracoes.dmg',
    'pacote_completo.iso',
    'arquivo_importante.zip'
];

// Lista de mensagens de status
const statusMessages = [
    'Iniciando download...',
    'Conectando ao servidor...',
    'Analisando arquivos...',
    'Preparando transfer...',
    'Baixando dados...',
    'Processando informações...',
    'Finalizando...'
];

let currentFile = 0;
let currentStatus = 0;

// Elementos do DOM
const progressBar = document.getElementById('progressBar');
const percentage = document.getElementById('percentage');
const statusText = document.getElementById('status');
const speedText = document.getElementById('speed');
const timeText = document.getElementById('time');
const filenameText = document.getElementById('filename');
const downloadedText = document.getElementById('downloaded');
const totalText = document.getElementById('total');

// Tamanhos aleatórios (em MB)
let totalMB = Math.floor(Math.random() * 800) + 200; // 200-1000 MB
let downloadedMB = 0;

function updateUI(progress) {
    // Atualizar barra de progresso
    progressBar.style.width = progress + '%';
    
    // Atualizar percentual
    percentage.textContent = progress + '%';
    
    // Atualizar MB baixado
    downloadedMB = Math.floor((progress / 100) * totalMB);
    downloadedText.textContent = downloadedMB;
    
    // Velocidade simulada (varia entre 2-15 MB/s)
    const speed = (Math.random() * 13 + 2).toFixed(2);
    speedText.textContent = '✈ Velocidade: ' + speed + ' MB/s';
    
    // Tempo restante simulado
    const remainingMB = totalMB - downloadedMB;
    const speedNum = parseFloat(speed);
    const remainingSeconds = Math.floor(remainingMB / speedNum);
    
    let timeString = '';
    if (remainingSeconds > 0) {
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;
        timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    } else {
        timeString = '00:00';
    }
    timeText.textContent = '⏱ Tempo restante: ' + timeString;
}

function animateDownload() {
    let progress = 0;
    let statusIndex = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 15; // Progresso variável
        
        if (progress >= 100) {
            progress = 100;
            updateUI(progress);
            
            // Completar ciclo
            setTimeout(() => {
                // Reiniciar próximo arquivo
                currentFile = (currentFile + 1) % filenames.length;
                filenameText.textContent = filenames[currentFile];
                totalMB = Math.floor(Math.random() * 800) + 200;
                totalText.textContent = totalMB;
                
                // Novo ciclo
                clearInterval(interval);
                animateDownload();
            }, 1500); // Pausa antes de reiniciar
            
            return;
        }
        
        // Atualizar status a cada intervalo
        statusIndex = Math.floor((progress / 100) * (statusMessages.length - 1));
        statusText.textContent = statusMessages[statusIndex];
        
        updateUI(progress);
    }, 500);
}

// Inicializar
filenameText.textContent = filenames[0];
totalText.textContent = totalMB;
animateDownload();
