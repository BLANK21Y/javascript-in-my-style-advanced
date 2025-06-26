// JavaScript intermediate task definitions
const tasks = {
    variables: [
        {
            title: "Variable Declaration",
            instructions: "Declare variables using let, const, and var. Create a string, number, boolean, and array.",
            expectedAnswer: "let.*const.*var.*=.*string.*number.*boolean.*array|\\[.*\\]",
            hint: "Use let name = 'value', const PI = 3.14, var age = 25, let items = []"
        },
        {
            title: "String Manipulation",
            instructions: "Create a string and use split(), join(), slice(), and template literals.",
            expectedAnswer: "split\\(.*\\)|join\\(.*\\)|slice\\(.*\\)|`.*\\$\\{.*\\}`",
            hint: "Use str.split(' '), arr.join('-'), str.slice(0,5), and `Hello ${name}`"
        },
        {
            title: "Array Methods",
            instructions: "Create an array and use push(), pop(), map(), filter(), and reduce() methods.",
            expectedAnswer: "push\\(.*\\)|pop\\(.*\\)|map\\(.*\\)|filter\\(.*\\)|reduce\\(.*\\)",
            hint: "Use arr.push(item), arr.map(x => x*2), arr.filter(x => x>5), arr.reduce((a,b) => a+b)"
        },
        {
            title: "Object Properties",
            instructions: "Create an object with properties and methods. Access properties using dot and bracket notation.",
            expectedAnswer: "\\{.*:.*\\}|\\[.*\\]|\\.",
            hint: "Use obj = {name: 'John', age: 30}, obj.name, obj['age'], obj.method = function(){}"
        },
        {
            title: "Type Conversion",
            instructions: "Convert between different data types using Number(), String(), Boolean(), parseInt().",
            expectedAnswer: "Number\\(.*\\)|String\\(.*\\)|Boolean\\(.*\\)|parseInt\\(.*\\)",
            hint: "Use Number('123'), String(456), Boolean(0), parseInt('10px')"
        },
        {
            title: "Destructuring Assignment",
            instructions: "Use array and object destructuring to extract values.",
            expectedAnswer: "\\[.*\\].*=.*\\[|\\{.*\\}.*=.*\\{",
            hint: "Use [a, b] = [1, 2] and {name, age} = person"
        },
        {
            title: "Spread Operator",
            instructions: "Use the spread operator (...) to copy arrays and objects.",
            expectedAnswer: "\\.\\.\\..*\\[|\\.\\.\\..*\\{",
            hint: "Use [...array1, ...array2] and {...obj1, ...obj2}"
        },
        {
            title: "Conditional Statements",
            instructions: "Use if-else statements and ternary operators for conditional logic.",
            expectedAnswer: "if.*\\{|else.*\\{|\\?.*:",
            hint: "Use if(condition){} else{} and condition ? value1 : value2"
        },
        {
            title: "Loops and Iteration",
            instructions: "Create for loops, while loops, and use forEach() method.",
            expectedAnswer: "for.*\\{|while.*\\{|forEach\\(.*\\)",
            hint: "Use for(let i=0; i<10; i++), while(condition), arr.forEach(item => {})"
        },
        {
            title: "Error Handling",
            instructions: "Implement try-catch-finally blocks for error handling.",
            expectedAnswer: "try.*\\{.*catch.*\\{|finally.*\\{",
            hint: "Use try{code} catch(error){handle} finally{cleanup}"
        }
    ],
    functions: [
        {
            title: "Function Declaration",
            instructions: "Create functions using function declaration and function expression syntax.",
            expectedAnswer: "function.*\\(.*\\).*\\{|=.*function.*\\(.*\\).*\\{",
            hint: "Use function name(){} and const func = function(){}"
        },
        {
            title: "Arrow Functions",
            instructions: "Create arrow functions with and without parameters. Understand implicit return.",
            expectedAnswer: "=>|\\(.*\\).*=>.*\\{|\\(.*\\).*=>.*[^{]",
            hint: "Use () => {}, (x) => x*2, (a,b) => a+b"
        },
        {
            title: "Function Parameters",
            instructions: "Use default parameters, rest parameters (...args), and the arguments object.",
            expectedAnswer: "=.*\\)|\\.\\.\\.|arguments",
            hint: "Use function(a=1, b=2), function(...args), and arguments[0]"
        },
        {
            title: "Higher-Order Functions",
            instructions: "Create functions that accept other functions as parameters or return functions.",
            expectedAnswer: "function.*\\(.*function|return.*function|\\(.*\\).*=>.*\\(.*\\).*=>",
            hint: "Use function(callback){}, return function(){}, or func => x => x*2"
        },
        {
            title: "Closures",
            instructions: "Create a closure that maintains private variables and returns inner functions.",
            expectedAnswer: "function.*\\{.*function.*\\{.*return.*function|return.*function.*\\{.*\\}.*\\}",
            hint: "function outer(){let private; return function inner(){return private}}"
        },
        {
            title: "Scope Chain",
            instructions: "Demonstrate global, function, and block scope with let, const, and var.",
            expectedAnswer: "let.*\\{|const.*\\{|var.*function|\\{.*let|\\{.*const",
            hint: "Show how variables are accessed in different scopes"
        },
        {
            title: "Callback Functions",
            instructions: "Create and use callback functions for asynchronous operations like setTimeout.",
            expectedAnswer: "setTimeout\\(.*function|setTimeout\\(.*=>|callback\\(.*\\)",
            hint: "Use setTimeout(function(){}, 1000) or setTimeout(() => {}, 1000)"
        },
        {
            title: "Promises",
            instructions: "Create promises using new Promise() and handle them with .then(), .catch(), .finally().",
            expectedAnswer: "new Promise\\(.*\\)|then\\(.*\\)|catch\\(.*\\)|finally\\(.*\\)",
            hint: "Use new Promise((resolve, reject) => {}), promise.then().catch().finally()"
        },
        {
            title: "Async/Await",
            instructions: "Use async/await syntax to handle asynchronous operations.",
            expectedAnswer: "async.*function|await.*\\(|async.*=>",
            hint: "Use async function(){}, await promise, async () => {}"
        },
        {
            title: "Module Patterns",
            instructions: "Create module patterns using IIFE or demonstrate import/export syntax.",
            expectedAnswer: "\\(function\\(.*\\)\\{|export.*\\{|import.*from|export default",
            hint: "Use (function(){})(), export {func}, import {func} from 'module'"
        }
    ],
    dom: [
        {
            title: "Element Selection",
            instructions: "Select elements using getElementById, querySelector, and querySelectorAll.",
            expectedAnswer: "getElementById\\(.*\\)|querySelector\\(.*\\)|querySelectorAll\\(.*\\)",
            hint: "Use document.getElementById('id'), document.querySelector('.class')"
        },
        {
            title: "Content Manipulation",
            instructions: "Change element content using innerHTML, textContent, and innerText.",
            expectedAnswer: "innerHTML.*=|textContent.*=|innerText.*=",
            hint: "Use element.innerHTML = '<p>HTML</p>', element.textContent = 'text'"
        },
        {
            title: "Attribute Manipulation",
            instructions: "Get and set element attributes using getAttribute and setAttribute.",
            expectedAnswer: "getAttribute\\(.*\\)|setAttribute\\(.*\\)",
            hint: "Use element.getAttribute('src'), element.setAttribute('class', 'new')"
        },
        {
            title: "CSS Style Manipulation",
            instructions: "Change element styles using the style property and classList methods.",
            expectedAnswer: "style\\.|classList\\.|add\\(.*\\)|remove\\(.*\\)|toggle\\(.*\\)",
            hint: "Use element.style.color = 'red', element.classList.add('active')"
        },
        {
            title: "Event Handling",
            instructions: "Add event listeners for click, change, and form events.",
            expectedAnswer: "addEventListener\\(.*\\)|onclick.*=|onchange.*=|onsubmit.*=",
            hint: "Use element.addEventListener('click', function(){})"
        },
        {
            title: "Element Creation",
            instructions: "Create new elements using createElement and appendChild.",
            expectedAnswer: "createElement\\(.*\\)|appendChild\\(.*\\)|append\\(.*\\)",
            hint: "Use document.createElement('div'), parent.appendChild(child)"
        },
        {
            title: "Element Removal",
            instructions: "Remove elements using removeChild, remove, or replaceChild methods.",
            expectedAnswer: "removeChild\\(.*\\)|remove\\(.*\\)|replaceChild\\(.*\\)",
            hint: "Use parent.removeChild(child), element.remove()"
        },
        {
            title: "Form Validation",
            instructions: "Validate form inputs and display error messages using DOM manipulation.",
            expectedAnswer: "value.*length|value.*===|checkValidity\\(.*\\)|setCustomValidity\\(.*\\)",
            hint: "Check input.value.length, input.checkValidity(), show error messages"
        },
        {
            title: "Local Storage",
            instructions: "Store and retrieve data using localStorage and sessionStorage.",
            expectedAnswer: "localStorage\\.|sessionStorage\\.|setItem\\(.*\\)|getItem\\(.*\\)|removeItem\\(.*\\)",
            hint: "Use localStorage.setItem('key', 'value'), localStorage.getItem('key')"
        },
        {
            title: "Dynamic Content",
            instructions: "Create dynamic content that updates based on user interaction and data.",
            expectedAnswer: "addEventListener.*\\{.*innerHTML|addEventListener.*\\{.*textContent|onclick.*\\{.*createElement",
            hint: "Combine event listeners with DOM manipulation to create dynamic content"
        }
    ]
};

// Progress tracking
let progress = {
    variables: 0,
    functions: 0,
    dom: 0
};

// Theme management
function initializeTheme() {
    const savedTheme = localStorage.getItem('jsTheme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('jsTheme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Progress management
function updateProgress() {
    const levels = ['variables', 'functions', 'dom'];
    let totalCompleted = 0;
    
    levels.forEach(level => {
        const progressBar = document.getElementById(`${level}Progress`);
        const progressText = progressBar.parentElement.nextElementSibling;
        const completed = progress[level];
        const total = tasks[level].length;
        
        progressBar.style.width = `${(completed / total) * 100}%`;
        progressBar.setAttribute('data-progress', (completed / total) * 100);
        progressText.textContent = `${completed}/${total} completed`;
        
        totalCompleted += completed;
    });
    
    // Update certificate status
    updateCertificateStatus(totalCompleted);
}

function updateCertificateStatus(completed) {
    const certificateStatus = document.getElementById('certificateStatus');
    const certificateGenerator = document.getElementById('certificateGenerator');
    
    if (completed === 30) {
        certificateStatus.innerHTML = '<div class="lock-icon">🏆</div><span>30/30 Tasks Completed - Certificate Available!</span>';
        certificateGenerator.style.display = 'block';
    } else {
        certificateStatus.innerHTML = `<div class="lock-icon">🔒</div><span>${completed}/30 Tasks Completed</span>`;
        certificateGenerator.style.display = 'none';
    }
}

// Task management
function startTask(level, taskIndex) {
    const task = tasks[level][taskIndex];
    const mainContent = document.getElementById('mainContent');
    const editorInterface = document.getElementById('editorInterface');
    const taskInstructions = document.getElementById('taskInstructions');
    const codeEditor = document.getElementById('codeEditor');
    const backToMain = document.getElementById('backToMain');
    const consoleOutput = document.getElementById('consoleOutput');
    
    console.log('Starting task:', level, taskIndex, task);
    
    // Show editor interface
    mainContent.style.display = 'none';
    editorInterface.style.display = 'block';
    backToMain.style.display = 'block';
    
    // Set task instructions
    taskInstructions.innerHTML = `
        <h3>${task.title}</h3>
        <p><strong>Instructions:</strong> ${task.instructions}</p>
        <p><strong>Hint:</strong> ${task.hint}</p>
    `;
    
    // Clear editor and console
    codeEditor.value = '';
    consoleOutput.textContent = 'Console output will appear here when you run your code...';
    
    // Store current task info
    window.currentTask = { level, taskIndex };
    
    // Update task status
    updateTaskStatus(level, taskIndex, 'in-progress');
}

function updateTaskStatus(level, taskIndex, status) {
    const statusElement = document.getElementById(`${level}-${taskIndex}-status`);
    if (statusElement) {
        statusElement.textContent = status === 'completed' ? 'Completed' : 
                                   status === 'in-progress' ? 'In Progress' : 'Not Started';
        statusElement.className = `task-status ${status}`;
    }
}

function runCode() {
    const code = document.getElementById('codeEditor').value;
    const consoleOutput = document.getElementById('consoleOutput');
    
    // Clear previous output
    consoleOutput.innerHTML = '';
    
    // Create a custom console for capturing output
    const customConsole = {
        log: (...args) => {
            const output = args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' ');
            consoleOutput.innerHTML += `<div class="console-log">> ${output}</div>`;
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
        },
        error: (...args) => {
            const output = args.map(arg => String(arg)).join(' ');
            consoleOutput.innerHTML += `<div class="console-error">ERROR: ${output}</div>`;
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
        },
        warn: (...args) => {
            const output = args.map(arg => String(arg)).join(' ');
            consoleOutput.innerHTML += `<div class="console-warn">WARNING: ${output}</div>`;
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
        }
    };
    
    try {
        // Create a function with custom console and execute the code
        const executeCode = new Function('console', 'document', 'window', code);
        executeCode(customConsole, document, window);
        
        if (consoleOutput.innerHTML === '') {
            consoleOutput.innerHTML = '<div class="console-log">Code executed successfully (no output)</div>';
        }
    } catch (error) {
        customConsole.error(error.message);
    }
    
    // Visual feedback for run button
    const runBtn = document.getElementById('runCode');
    const originalText = runBtn.textContent;
    
    runBtn.textContent = '✓ Running...';
    runBtn.style.background = '#38a169';
    
    setTimeout(() => {
        runBtn.textContent = originalText;
        runBtn.style.background = '';
    }, 1000);
}

function validateCode() {
    const code = document.getElementById('codeEditor').value.trim();
    const validationResult = document.getElementById('validationResult');
    const currentTask = window.currentTask;
    
    console.log('Validating code:', code, 'Current task:', currentTask);
    
    if (!currentTask) {
        console.log('No current task found');
        return;
    }
    
    const task = tasks[currentTask.level][currentTask.taskIndex];
    const expectedRegex = new RegExp(task.expectedAnswer, 'is');
    
    // Remove extra whitespace and normalize code for comparison
    const normalizedCode = code.replace(/\s+/g, ' ').trim();
    
    console.log('Expected regex:', task.expectedAnswer);
    console.log('Normalized code:', normalizedCode);
    console.log('Regex test result:', expectedRegex.test(normalizedCode));
    
    if (expectedRegex.test(normalizedCode)) {
        // Task completed successfully
        validationResult.innerHTML = '✅ Excellent! Your JavaScript code meets the requirements.';
        validationResult.className = 'validation-result success';
        validationResult.style.display = 'block';
        
        // Update progress
        progress[currentTask.level] = Math.max(progress[currentTask.level], currentTask.taskIndex + 1);
        updateTaskStatus(currentTask.level, currentTask.taskIndex, 'completed');
        updateProgress();
        
        // Save progress
        saveProgress();
        
        // Auto-hide validation result after 3 seconds
        setTimeout(() => {
            validationResult.style.display = 'none';
        }, 3000);
        
    } else {
        // Task not completed
        validationResult.innerHTML = '❌ Your code doesn\'t meet the requirements. Please check the hint and try again!';
        validationResult.className = 'validation-result error';
        validationResult.style.display = 'block';
        
        // Auto-hide validation result after 5 seconds
        setTimeout(() => {
            validationResult.style.display = 'none';
        }, 5000);
    }
}

function backToTasks() {
    const mainContent = document.getElementById('mainContent');
    const editorInterface = document.getElementById('editorInterface');
    const validationResult = document.getElementById('validationResult');
    const backToMain = document.getElementById('backToMain');
    
    // Hide editor interface
    editorInterface.style.display = 'none';
    mainContent.style.display = 'block';
    backToMain.style.display = 'none';
    
    // Hide validation result
    validationResult.style.display = 'none';
    
    // Clear current task
    window.currentTask = null;
}

// Certificate generation with 2.png template
function generateCertificate() {
    const userName = document.getElementById('userName').value || 'John Doe';
    const generatedCertificate = document.getElementById('generatedCertificate');
    const canvas = document.getElementById('certificateCanvas');
    const ctx = canvas.getContext('2d');
    
    console.log('Generating certificate for:', userName);
    
    // Set high-resolution canvas for crisp output
    const scale = window.devicePixelRatio || 2;
    const width = 1200;
    const height = 900;
    
    // Set actual canvas size
    canvas.width = width * scale;
    canvas.height = height * scale;
    
    // Scale the canvas back down using CSS
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    
    // Scale the drawing context so everything draws at the higher resolution
    ctx.scale(scale, scale);
    
    // Enable anti-aliasing for smoother text
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.textRenderingOptimization = 'optimizeQuality';
    
    // Show the certificate section
    generatedCertificate.style.display = 'block';
    
    // Load the certificate template
    const img = new Image();
    img.crossOrigin = "anonymous";
    
    img.onload = function() {
        console.log('Certificate template loaded');
        // Clear canvas and draw template
        ctx.clearRect(0, 0, width, height);
        
        // Draw image with high quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);
        
        // Add user name with high-quality text rendering
        ctx.font = 'bold 48px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Add text shadow for better visibility
        ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 4;
        
        ctx.fillText(userName, width / 2, 450);
        
        // Reset shadow
        ctx.shadowColor = 'transparent';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        
        // Add current date with high quality
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        ctx.font = '24px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#666';
        ctx.fillText(`Completed on ${currentDate}`, width / 2, 720);
    };
    
    img.onerror = function() {
        console.error('Failed to load certificate template');
        // Create a high-quality fallback certificate with JavaScript theme
        ctx.clearRect(0, 0, width, height);
        
        // Background with gradient using skin tone colors
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#F5E6D3');
        gradient.addColorStop(1, '#E8B895');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Decorative border
        ctx.strokeStyle = '#D2A373';
        ctx.lineWidth = 8;
        ctx.strokeRect(40, 40, width - 80, height - 80);
        
        // Inner border
        ctx.strokeStyle = '#E8B895';
        ctx.lineWidth = 4;
        ctx.strokeRect(60, 60, width - 120, height - 120);
        
        // JavaScript logo background
        ctx.fillStyle = '#F7DF1E';
        ctx.fillRect(100, 100, 150, 150);
        ctx.fillStyle = '#323330';
        ctx.font = 'bold 72px "Inter", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('JS', 175, 200);
        
        // Title with shadow
        ctx.fillStyle = '#323330';
        ctx.font = 'bold 72px "Inter", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.shadowBlur = 6;
        
        ctx.fillText('Certificate of Completion', width / 2, 180);
        
        // Subtitle
        ctx.font = '36px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#D2A373';
        ctx.fillText('JavaScript Intermediate Learning', width / 2, 240);
        
        // Reset shadow for user name
        ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 4;
        
        // User name
        ctx.font = 'bold 48px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#000000';
        ctx.fillText(userName, width / 2, 450);
        
        // Description
        ctx.shadowColor = 'transparent';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        
        ctx.font = '28px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#4a4a4a';
        ctx.fillText('has successfully completed all 30 JavaScript intermediate tasks', width / 2, 510);
        
        // Achievement badge
        ctx.font = '24px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#48bb78';
        ctx.fillText('★ JavaScript Mastery Achieved ★', width / 2, 570);
        
        // Date
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        ctx.font = '24px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#666';
        ctx.fillText(`Completed on ${currentDate}`, width / 2, 720);
        
        // Signatures placeholder
        ctx.font = '20px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#888';
        ctx.fillText('JavaScript Learning Platform', width / 2, 780);
        
        // Decorative JavaScript elements
        ctx.fillStyle = '#F7DF1E';
        ctx.font = '30px "Monaco", "Consolas", monospace';
        ctx.textAlign = 'left';
        ctx.fillText('{ }', 150, 350);
        ctx.fillText('( )', 150, 400);
        ctx.fillText('=> ', 150, 450);
        
        ctx.textAlign = 'right';
        ctx.fillText('[ ]', width - 150, 350);
        ctx.fillText('var', width - 150, 400);
        ctx.fillText('let', width - 150, 450);
    };
    
    // Try to load the certificate template (2.png first)
    img.src = '2.png';
    
    // If 2.png fails, try 2.jpg
    img.addEventListener('error', function() {
        img.src = '2.jpg';
    });
}

function downloadCertificate(format) {
    const canvas = document.getElementById('certificateCanvas');
    const userName = document.getElementById('userName').value || 'John Doe';
    
    console.log('Downloading certificate as:', format);
    
    if (format === 'pdf') {
        // For PDF, use high-quality PNG conversion
        const imgData = canvas.toDataURL('image/png', 1.0);
        
        // Create a new window with the image for printing as PDF
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>JavaScript Certificate - ${userName}</title>
                    <style>
                        @media print {
                            body { margin: 0; }
                            img { max-width: 100%; height: auto; page-break-inside: avoid; }
                        }
                    </style>
                </head>
                <body style="margin:0; display:flex; justify-content:center; align-items:center; min-height:100vh;">
                    <img src="${imgData}" style="max-width:100%; height:auto;">
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
        return;
    }
    
    // For image formats, use maximum quality
    let mimeType, quality;
    if (format === 'png') {
        mimeType = 'image/png';
        quality = 1.0;
    } else {
        mimeType = 'image/jpeg';
        quality = 0.95;
    }
    
    const link = document.createElement('a');
    link.download = `javascript-certificate-${userName.replace(/\s+/g, '-').toLowerCase()}.${format}`;
    link.href = canvas.toDataURL(mimeType, quality);
    link.click();
}

// Save progress to localStorage
function saveProgress() {
    const progressData = {
        progress: progress,
        timestamp: new Date().toISOString(),
        version: '1.0'
    };
    localStorage.setItem('jsLearningProgress', JSON.stringify(progressData));
    console.log('Progress saved:', progressData);
}

// Load progress from localStorage
function loadProgress() {
    const savedData = localStorage.getItem('jsLearningProgress');
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            
            if (parsedData.progress) {
                progress = parsedData.progress;
                console.log('Progress loaded (new format):', parsedData);
            } else {
                progress = parsedData;
                console.log('Progress loaded (old format):', parsedData);
            }
            
            // Update task statuses
            Object.keys(progress).forEach(level => {
                for (let i = 0; i < progress[level]; i++) {
                    updateTaskStatus(level, i, 'completed');
                }
            });
        } catch (error) {
            console.error('Error loading progress:', error);
            progress = { variables: 0, functions: 0, dom: 0 };
        }
    }
}

// Reset progress function
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        progress = { variables: 0, functions: 0, dom: 0 };
        localStorage.removeItem('jsLearningProgress');
        
        Object.keys(tasks).forEach(level => {
            tasks[level].forEach((task, index) => {
                updateTaskStatus(level, index, 'not-started');
            });
        });
        
        updateProgress();
        console.log('Progress reset');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    // Initialize theme
    initializeTheme();
    
    // Load saved progress
    loadProgress();
    
    // Initialize progress display
    updateProgress();
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        console.log('Theme toggle listener added');
    }
    
    // Back to home button
    const backToHomeBtn = document.getElementById('backToHome');
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
        console.log('Back to home button listener added');
    }
    
    // Task start buttons
    document.querySelectorAll('.start-task-btn').forEach(button => {
        button.addEventListener('click', function() {
            const taskCard = this.closest('.task-card');
            const level = taskCard.getAttribute('data-level');
            const taskIndex = parseInt(taskCard.getAttribute('data-task'));
            startTask(level, taskIndex);
        });
    });
    
    // Editor actions
    const runCodeBtn = document.getElementById('runCode');
    const validateCodeBtn = document.getElementById('validateCode');
    const backToTasksBtn = document.getElementById('backToTasks');
    const backToMainBtn = document.getElementById('backToMain');
    
    if (runCodeBtn) {
        runCodeBtn.addEventListener('click', runCode);
        console.log('Run code button listener added');
    }
    
    if (validateCodeBtn) {
        validateCodeBtn.addEventListener('click', validateCode);
        console.log('Validate code button listener added');
    }
    
    if (backToTasksBtn) {
        backToTasksBtn.addEventListener('click', backToTasks);
        console.log('Back to tasks button listener added');
    }
    
    if (backToMainBtn) {
        backToMainBtn.addEventListener('click', backToTasks);
        console.log('Back to main button listener added');
    }
    
    // Certificate generation
    const generateCertBtn = document.getElementById('generateCertificate');
    if (generateCertBtn) {
        generateCertBtn.addEventListener('click', generateCertificate);
        console.log('Generate certificate button listener added');
    }
    
    console.log('All event listeners initialized');
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to validate code
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (window.currentTask) {
            validateCode();
        }
    }
    
    // Escape to go back to tasks
    if (e.key === 'Escape') {
        if (window.currentTask) {
            backToTasks();
        }
    }
    
    // Ctrl/Cmd + R to run code
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault();
        if (window.currentTask) {
            runCode();
        }
    }
});
