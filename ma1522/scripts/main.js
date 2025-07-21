const chatContainer = document.querySelector('.chat-container');
const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');
const userText = document.getElementById('userText');
const textInputArea = document.getElementById('textInputArea');
const mcqInputArea = document.getElementById('mcqInputArea');
const mcqOptionsContainer = document.getElementById('mcqOptions');
const importantPage = document.getElementById('importantPage');
const importantList = document.getElementById('importantList');
const viewImportantBtn = document.getElementById('viewImportantBtn');
const backToChatBtn = document.getElementById('backToChat');

const botAvatar = "images/bellabot.png";

let currentNode = "start";
let score = 0;
let scoreTotal = 0;
let lastSender = null;

const messageQueue = [];
let processingQueue = false;
let isBusy = false;

const messageHistory = [];
const importantMessages = new Set();

function queueMessage(func) {
  messageQueue.push(func);
  if (!processingQueue) processNextMessage();
}

function processNextMessage() {
  if (processingQueue || messageQueue.length === 0) return;
  if (isBusy) return;
  processingQueue = true;
  const nextFunc = messageQueue.shift();
  nextFunc();
  processingQueue = false;
  setTimeout(processNextMessage, 100);
}

function addMessage(content, sender = 'bot', styleClass = '', isImage = false) {
  const msgWrapper = document.createElement('div');
  msgWrapper.className = `message ${sender}`;
  const avatar = document.createElement('img');
  avatar.className = 'avatar';
  avatar.src = botAvatar;

  if (sender === 'bot' && lastSender === 'bot') avatar.classList.add('hidden');

  let msgContent;

  if (isImage) {
    msgContent = document.createElement('div');
    msgContent.className = 'image-wrapper';
    img = createImageMessage(content, true); // true = show star
    
    // Enable zoom on click
    img.addEventListener('click', () => {
      document.getElementById('imageModal').style.display = 'block';
      document.getElementById('zoomedImage').src = content;
    });

    msgContent.appendChild(img);

    const key = content.trim(); // Use image path as key
    if (!messageHistory.includes(key)) {
      messageHistory.push(key);
    }
  } else {
    msgContent = document.createElement('div');
    msgContent.className = `bubble ${styleClass}`;
    msgContent.innerHTML = content;
    renderMathInElement(msgContent);

    if (sender === 'bot') {
      const key = content.trim();
      if (!messageHistory.includes(key)) {
        messageHistory.push(key);
      }
      const star = document.createElement('span');
      star.textContent = '★';
      star.className = 'star-icon';
      if (importantMessages.has(key)) {
        star.classList.add('active');
      }
      star.addEventListener('click', () => {
        if (importantMessages.has(key)) {
          importantMessages.delete(key);
          star.classList.remove('active');
        } else {
          importantMessages.add(key);
          star.classList.add('active');
        }
      });
      msgContent.appendChild(star);
    }
  }

  if (sender === 'bot') msgWrapper.appendChild(avatar);
  msgWrapper.appendChild(msgContent);
  chatBox.appendChild(msgWrapper);
  chatBox.scrollTop = chatBox.scrollHeight;
  lastSender = sender;
  return msgContent;
}

function createImageMessage(content, showStar = true) {
  const wrapper = document.createElement('div');
  wrapper.className = 'image-wrapper';

  const img = document.createElement('img');
  img.src = content;
  img.className = 'sticker-image';

  // Enable zoom
  img.addEventListener('click', () => {
    document.getElementById('imageModal').style.display = 'block';
    document.getElementById('zoomedImage').src = content;
  });

  wrapper.appendChild(img);

  if (showStar) {
    const key = content.trim();
    if (!messageHistory.includes(key)) messageHistory.push(key);

    const star = document.createElement('span');
    star.textContent = '★';
    star.className = 'star-icon';

    if (importantMessages.has(key)) {
      star.classList.add('active');
    }

    star.addEventListener('click', (e) => {
      e.stopPropagation();
      if (importantMessages.has(key)) {
        importantMessages.delete(key);
        star.classList.remove('active');
      } else {
        importantMessages.add(key);
        star.classList.add('active');
      }
    });

    wrapper.appendChild(star);
  }

  return wrapper;
}

function addSystemMessage(msg) {
  const div = document.createElement("div");
  div.className = "system-message";
  div.textContent = msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showInput(type) {
  chatInput.style.display = 'flex';
  textInputArea.style.display = type === 'text' ? 'flex' : 'none';
  mcqInputArea.style.display = type !== 'text' ? 'flex' : 'none';
  setTimeout(() => {
    chatInput.classList.add('show');
    chatBox.scrollTop = chatBox.scrollHeight;
    if (type === 'text') userText.focus();
  }, 250);
}

function renderContent(nodeId, dialogueSystem) {
  isBusy = true;
  currentNode = nodeId;
  chatInput.classList.remove("show");
  const node = dialogueSystem[nodeId];
  if (!node) return;

  setTimeout(() => {
    if (node.type === "image") {
      const imagePath = `images/${node.content}`;
      addMessage(imagePath, 'bot', '', true);
    } else {
      addMessage(node.content, 'bot');
    }

    chatInput.style.display = 'none';
    const delay = (node.delay ?? -500) + 500;

    if ((node.type === "plain" || node.type === "image") && node.next) {
      setTimeout(() => {
        renderContent(node.next, dialogueSystem);
      }, delay);
      return;
    }

    setTimeout(() => {
      if (node.type === "dialogue") {
        renderMCQOptions(node.options, "dialogue");
        showInput('mcq');
      } else if (node.type === "mcq" || node.type === "single-mcq") {
        scoreTotal += node.marks;
        renderMCQOptions(node.options, node.type);
        showInput('mcq');
      } else if (node.type === "text") {
        scoreTotal += node.marks;
        showInput('text');
      }
      isBusy = false;
      processNextMessage();
    }, delay);
  }, 500);
}

function renderMCQOptions(optionsObj, type) {
  mcqOptionsContainer.innerHTML = "";
  Object.entries(optionsObj).forEach(([key, label]) => {
    const div = document.createElement("div");
    div.className = "option-item";
    div.dataset.key = key;
    div.innerHTML = label;
    renderMathInElement(div);
    div.addEventListener("click", () => {
      if (type === "single-mcq" || type === "dialogue") {
        document.querySelectorAll(".option-item").forEach(el => el.classList.remove("selected"));
        div.classList.add("selected");
      } else {
        div.classList.toggle("selected");
      }
    });
    mcqOptionsContainer.appendChild(div);
  });
}

function submitTextAnswer(dialogueSystem) {
  const answer = userText.value.trim();
  if (!answer) return;

  const userBubble = addMessage(answer, 'user');
  userText.value = "";
  const node = dialogueSystem[currentNode];

  setTimeout(() => {
    let thisScore = 0;
    const isMarked = typeof node.marks === 'number';

    const normalizedAnswer = answer.toLowerCase();
    const isCorrect = node.answers && node.answers instanceof Set &&
                      [...node.answers].some(ans => ans.toLowerCase().trim() === normalizedAnswer);

    if (isCorrect) {
      userBubble.classList.add("correct");
      if (isMarked) {
        thisScore = node.marks;
        score += thisScore;
        addSystemMessage(`📊 Score: ${round2(thisScore)}/${round2(node.marks)}`);
      }
    } else {
      userBubble.classList.add("incorrect");
      if (isMarked) {
        addSystemMessage(`📊 Score: 0/${round2(node.marks)}`);
      }
    }

    renderContent(node.next, dialogueSystem);
  }, 400);
}

function submitMCQAnswer(dialogueSystem) {
  const selectedEls = Array.from(document.querySelectorAll('.option-item.selected'));
  if (!selectedEls.length) return;
  const selectedKeys = selectedEls.map(el => el.dataset.key);
  lastSender = 'user';
  const node = dialogueSystem[currentNode];
  if (node.type === "dialogue") {
    const selectedKey = selectedKeys[0];
    const selectedLabel = node.options[selectedKey];
    addMessage(selectedLabel, 'user');
    renderContent(node.respondToIdx[selectedKey], dialogueSystem);
    return;
  }

  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  const row = document.createElement("div");
  row.className = "mcq-response";

  Object.entries(node.options).forEach(([key, label]) => {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.innerHTML = label;
    renderMathInElement(bubble);
    bubble.dataset.key = key;
    row.appendChild(bubble);
  });
  userMessage.appendChild(row);
  chatBox.appendChild(userMessage);
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    row.childNodes.forEach(bubble => {
      const key = bubble.dataset.key;
      if (selectedKeys.includes(key)) bubble.classList.add("selected");
    });
    setTimeout(() => {
      let thisScore = 0;
      const isMarked = typeof node.marks === 'number';
      let marksPerOption;
      if (node.type === "single-mcq") {
        marksPerOption = node.marks;
      } else {
        marksPerOption = node.marks / node.answersIdx.size;
      }
      
      const shownExplanations = new Set();
      row.childNodes.forEach(bubble => {
        const key = bubble.dataset.key;
        const isSelected = selectedKeys.includes(key);
        const isCorrect = node.answersIdx.has(Number(key));
        if (isSelected && isCorrect) {
          bubble.classList.remove("selected");
          bubble.classList.add("correct");
          thisScore += marksPerOption;
        } else if (isSelected && !isCorrect) {
          bubble.classList.remove("selected");
          bubble.classList.add("incorrect");
          thisScore -= marksPerOption;
        } else if (!isSelected && isCorrect) {
          bubble.classList.add("missed");
        }
        if (node.respondToIdx && isSelected && node.respondToIdx[key]) {
          const responseId = node.respondToIdx[key];
          if (!shownExplanations.has(responseId)) {
            shownExplanations.add(responseId);
            queueMessage(() => renderContent(responseId, dialogueSystem));
          }
        }
      });
      if (isMarked) {
        thisScore = Math.max(0, thisScore);
        score += thisScore;
        addSystemMessage(`📊 Score: ${round2(thisScore)}/${round2(node.marks)}`);
      }
      queueMessage(() => renderContent(node.next, dialogueSystem));
    }, 300);
  }, 100);
}

function round2(val) {
  return Math.round(val * 100) / 100;
}

function initializeQuiz(dialogueSystem) {
  addSystemMessage("🧠 Simulation started");
  renderContent("start", dialogueSystem);
  const chatName = chatTitle.textContent;

  userText.addEventListener("keypress", e => {
    if (e.key === "Enter") submitTextAnswer(dialogueSystem);
  });

  viewImportantBtn.addEventListener('click', () => {
    chatTitle.textContent = 'Starred';
    importantList.innerHTML = '';
    messageHistory.forEach(content => {
      if (importantMessages.has(content)) {
        let element;
        if (content.endsWith('.png') || content.endsWith('.jpg') || content.endsWith('.jpeg') || content.endsWith('.gif')) {
          element = createImageMessage(content, false); 
        } else {
          element = document.createElement('div');
          element.className = 'bubble important-message';
          element.innerHTML = content;
          renderMathInElement(element);
        }
        importantList.appendChild(element);
      }
    });

    document.getElementById('chatView').classList.remove('active');
    document.getElementById('chatView').classList.add('hidden-left');
    document.getElementById('importantPage').classList.remove('hidden-right');
    document.getElementById('importantPage').classList.add('active');
    backToChatBtn.style.display = 'inline-block';
    viewImportantBtn.style.display = 'none';
  });

  backToChatBtn.addEventListener('click', () => {
    chatTitle.textContent = chatName;

    document.getElementById('importantPage').classList.remove('active');
    document.getElementById('importantPage').classList.add('hidden-right');
    document.getElementById('chatView').classList.remove('hidden-left');
    document.getElementById('chatView').classList.add('active');
    backToChatBtn.style.display = 'none';
    viewImportantBtn.style.display = 'inline-block';
  });

  document.getElementById('closeImageModal').onclick = () => {
    document.getElementById('imageModal').style.display = 'none';
  };

  window.addEventListener('click', e => {
    const modal = document.getElementById('imageModal');
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

}