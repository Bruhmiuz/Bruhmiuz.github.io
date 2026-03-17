const chatTitle = document.getElementById('chatTitle');
const chatView = document.getElementById('chatView');
const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');
const userText = document.getElementById('userText');
const textInputArea = document.getElementById('textInputArea');
const mcqInputArea = document.getElementById('mcqInputArea');
const mcqOptionsContainer = document.getElementById('mcqOptions');
const importantPage = document.getElementById('importantPage');
const importantList = document.getElementById('importantList');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const viewImportantBtn = document.getElementById('viewImportant');
const backToChatBtn = document.getElementById('backToChat');
const closeModalBtn = document.getElementById('closeModal');
const chatInputContainer = document.getElementById('chatInputContainer');
const toggleInputBtn = document.getElementById('toggleInputBtn');

const chatName = chatTitle.textContent;
const botAvatar = "images/bellabot.png";

let currentNode = "start";
let score = 0;
let scoreTotal = 0;
let lastSender = null;
let isInputVisible = false;

const messageQueue = [];
let isBusy = false;

const messageHistory = [];
const importantMessages = new Set();
const preloadedEmbeds = new Map();

function initializeQuiz() {
  const seen = new Set();

  // Preload all embed iframes marked as preload
  for (const key in dialogueSystem) {
    const node = dialogueSystem[key];
    if (node.type === 'embed' && node.preload && typeof node.content === 'string') {
      const url = node.content.trim();
      if (!seen.has(url)) {
        seen.add(url);

        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.className = 'embed-frame';
        iframe.style.display = 'none'; // hidden by default
        iframe.setAttribute('data-preloaded-url', url);

        modalContent.appendChild(iframe);
        preloadedEmbeds.set(url, iframe);
      }
    }
  }

  const selector = document.getElementById('checkpointSelector');
  const buttons = document.getElementById('checkpointButtons');
  const container = document.getElementById('chatContainer');

  selector.style.display = 'block';

  checkpoints.forEach(({ id, label, showCompulsoryMessages }) => {
    const btn = document.createElement('button');
    btn.className = 'checkpoint-btn';
    const btnText = document.createElement('span');
    btnText.textContent = label.trim();
    btn.appendChild(btnText);
    btn.addEventListener('click', () => {
      selector.style.display = 'none';
      container.style.display = 'flex';

      if (showCompulsoryMessages) addSystemMessage("Loading message history...");

      for (let i = 0; i < showCompulsoryMessages; i++) {
          addBotMessage(compulsoryMessages[i]);
      }

      // addSystemMessage("🧠 If you encounter any doubts, do clarify them on Telegram! 🧠");
    
      renderMessage(id);
      chatBox.scrollTop = chatBox.scrollHeight;
    });
    buttons.appendChild(btn);
  });
}

function queueMessage(func) {
  messageQueue.push(func);
  if (!isBusy) processQueue();
}

function processQueue() {
  if (messageQueue.length === 0 || isBusy) return;
  const nextFunc = messageQueue.shift();
  nextFunc();
  setTimeout(processQueue, 250);
}

function addUserMessage(content) {
  const msgWrapper = document.createElement('div');
  msgWrapper.className = 'message user';

  const msgContent = document.createElement('div');
  msgContent.className = 'bubble';
  msgContent.innerHTML = content.trim();
  renderTex(msgContent);

  msgWrapper.appendChild(msgContent);
  chatBox.appendChild(msgWrapper);
  chatBox.scrollTop = chatBox.scrollHeight;
  lastSender = 'user';
  return msgContent;
}

function addBotMessage(nodeId) {
  const msgWrapper = document.createElement('div');
  msgWrapper.className = 'message bot';

  const node = dialogueSystem[nodeId];

  if (!messageHistory.includes(nodeId)) {
    messageHistory.push(nodeId);
  }

  const avatar = document.createElement('img');
  avatar.className = 'avatar';
  avatar.src = botAvatar;
  if (lastSender === 'bot') avatar.classList.add('hidden');
  msgWrapper.appendChild(avatar);
 
  let msgContent;
  if (node.type === 'image') {
    msgContent = createImageMessage(nodeId, true);
  } else if (node.type === 'embed') {
    msgContent = createEmbedMessage(nodeId, true);
  } else if (node.type === 'tex') {
    msgContent = createTexMessage(nodeId, true);
  } else {
    msgContent = document.createElement('div');
    msgContent.className = 'bubble';
    msgContent.innerHTML = node.content.trim();
    renderTex(msgContent);

    const star = document.createElement('span');
    star.textContent = '★';
    star.className = 'star-icon';
    
    if (importantMessages.has(nodeId) || node.important) {
      star.classList.add('active');
      importantMessages.add(nodeId);
    }

    star.addEventListener('click', () => {
      if (importantMessages.has(nodeId)) {
        importantMessages.delete(nodeId);
        star.classList.remove('active');
      } else {
        importantMessages.add(nodeId);
        star.classList.add('active');
      }
    });
    msgContent.appendChild(star);
  }

  msgWrapper.appendChild(msgContent);
  chatBox.appendChild(msgWrapper);
  lastSender = 'bot';
  return msgContent;
}

function createImageMessage(nodeId, inChatView = true) {
  const wrapper = document.createElement('div');
  wrapper.className = 'message-wrapper';

  const node = dialogueSystem[nodeId];
  const src = `${node.content.trim()}`;

  const img = document.createElement('img');
  img.src = src;
  img.className = 'sticker-image';
  if (node.sticker) img.style.border = 'unset';

  // Enable zoom
  img.addEventListener('click', () => {
    const zoomed = document.createElement('img');
    zoomed.src = src;
    zoomed.className = 'zoomed-image';
    attachZoomPanEvents(zoomed);
    showInModal(zoomed);
  });

  wrapper.appendChild(img);

  if (inChatView) { // Message in chat-view
    const star = document.createElement('span');
    star.textContent = '★';
    star.className = 'star-icon';

    if (importantMessages.has(nodeId) || node.important) {
      star.classList.add('active');
      importantMessages.add(nodeId);
    }

    star.addEventListener('click', e => {
      e.stopPropagation(); // prevent zoom trigger
      if (importantMessages.has(nodeId)) {
        importantMessages.delete(nodeId);
        star.classList.remove('active');
      } else {
        importantMessages.add(nodeId);
        star.classList.add('active');
      }
    });

    wrapper.appendChild(star);
  }

  return wrapper;
}

function createEmbedMessage(nodeId, inChatView = true) {
  const wrapper = document.createElement('div');
  wrapper.className = 'message-wrapper';

  const node = dialogueSystem[nodeId];
  const url = node.content.trim();

  const preview = document.createElement('div');
  preview.className = 'preview-thumbnail';
  preview.title = url;
  if (node.previewImage) preview.style.backgroundImage = `url(${node.previewImage.trim()})`;

  const previewText = document.createElement('span');
  previewText.textContent = (node.previewText ?? "Click to open embed").trim();
  preview.appendChild(previewText);

  preview.addEventListener('click', () => {
    if (node.preload) {
      const preloaded = preloadedEmbeds.get(url);
      preloaded.style.display = 'flex';
      modal.style.display = 'flex';
    } else {
      const iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.className = 'embed-frame';
      modalContent.appendChild(iframe);
      modal.style.display = 'flex';
    }
  });

  wrapper.appendChild(preview);

  if (inChatView) {
    const star = document.createElement('span');
    star.textContent = '★';
    star.className = 'star-icon';

    if (importantMessages.has(nodeId) || node.important) {
      star.classList.add('active');
      importantMessages.add(nodeId);
    }

    star.addEventListener('click', e => {
      e.stopPropagation();
      if (importantMessages.has(nodeId)) {
        importantMessages.delete(nodeId);
        star.classList.remove('active');
      } else {
        importantMessages.add(nodeId);
        star.classList.add('active');
      }
    });

    wrapper.appendChild(star);
  }

  return wrapper;
}

function createTexMessage(nodeId, inChatView = true) {
  const wrapper = document.createElement('div');
  wrapper.className = 'message-wrapper';

  const node = dialogueSystem[nodeId];
  const content = node.content.trim();

  // Use placeholder as real test container
  const placeholder = document.createElement('div');
  placeholder.className = 'tex-message';
  placeholder.style.visibility = 'hidden';
  wrapper.appendChild(placeholder);

  const inlineTex = document.createElement('div');
  inlineTex.className = 'tex-content';
  inlineTex.innerHTML = content;
  renderTex(inlineTex);

  placeholder.appendChild(inlineTex);

  setTimeout(() => {
    const causesOverflow =
      placeholder.scrollWidth > placeholder.clientWidth ||
      placeholder.scrollHeight > placeholder.clientHeight;

    const inner = document.createElement('div');

    if (!causesOverflow) {
      inner.className = 'tex-message';
      inner.appendChild(inlineTex);
    } else {
      inner.className = 'preview-thumbnail';
      if (node.previewImage) {
        inner.style.backgroundImage = `url(${node.previewImage.trim()})`;
      }
      const label = document.createElement('span');
      label.textContent = (node.previewText ?? "Click to open page").trim();
      inner.appendChild(label);
    }

    // Allow popup on click
    inner.addEventListener('click', () => {
      const script = document.createElement('div');
      script.className = 'latex-script';
      script.innerHTML = content;
      renderTex(script);
      showInModal(script);
    });

    wrapper.replaceChild(inner, placeholder);

    if (inChatView) {
      const star = document.createElement('span');
      star.textContent = '★';
      star.className = 'star-icon';
      if (importantMessages.has(nodeId) || node.important) {
        star.classList.add('active');
        importantMessages.add(nodeId);
      }
      star.addEventListener('click', e => {
        e.stopPropagation();
        if (importantMessages.has(nodeId)) {
          importantMessages.delete(nodeId);
          star.classList.remove('active');
        } else {
          importantMessages.add(nodeId);
          star.classList.add('active');
        }
      });

      wrapper.appendChild(star);
    }
  }, 0);

  return wrapper;
}

function addSystemMessage(msg) {
  lastSender = '';
  const div = document.createElement('div');
  div.className = 'system-message';
  div.textContent = msg;
  chatBox.appendChild(div);
}

function showInput(type) {
  textInputArea.style.display = type === 'text' ? 'flex' : 'none';
  mcqInputArea.style.display = type !== 'text' ? 'flex' : 'none';
  chatInputContainer.style.display = 'flex';
  chatInputContainer.classList.add('show');
  isInputVisible = false; 
}

function hideInput() {
  chatInputContainer.classList.remove('expanded');
  chatInputContainer.classList.remove('show');
  setTimeout(() => {
    chatInputContainer.style.display = 'none';
  }, 300);
  isInputVisible = false;
  adjustChatBoxPadding();
}

function showInModal(element) {
  modalContent.appendChild(element);
  modal.style.display = 'flex';
}

function adjustChatBoxPadding() {
  const isExpanded = chatInputContainer.classList.contains('expanded');
  const expandedHeight = chatInput.offsetHeight + 44; // input + toggle bar
  if (isExpanded) {
    chatBox.style.paddingBottom = `${expandedHeight}px`;
    chatBox.scrollTop = chatBox.scrollHeight;
  } else {
    chatBox.style.paddingBottom = '44px';
  }
  chatBox.style.paddingBottom = isExpanded ? `${expandedHeight}px` : '44px';
}

function renderMessage(nodeId) {
  isBusy = true;
  currentNode = nodeId;
  const node = dialogueSystem[nodeId];
  if (!node) return;

  addBotMessage(nodeId);

  if (node.systemMessage) {
    addSystemMessage(node.systemMessage);
  }

  const delay = node.delay ?? 250;

  if ((node.type === 'plain' || node.type === 'image' || node.type === 'embed' || node.type === 'tex') && node.next) {
    setTimeout(() => {
      renderMessage(node.next);
    }, delay);
    return;
  }

  setTimeout(() => {
    if (node.type === 'dialogue') {
      renderMCQOptions(node.options, 'dialogue');
      showInput('mcq');
    } else if (node.type === 'mcq' || node.type === 'single-mcq') {
      scoreTotal += node.marks;
      renderMCQOptions(node.options, node.type);
      showInput('mcq');
    } else if (node.type === 'text') {
      scoreTotal += node.marks;
      showInput('text');
    } else {
      isBusy = false;
      processQueue();
    }
  }, delay);
}

function renderMCQOptions(optionsObj, type) {
  mcqOptionsContainer.innerHTML = "";
  Object.entries(optionsObj).forEach(([key, label]) => {
    const div = document.createElement('div');
    div.className = 'option-item';
    div.dataset.key = key;
    div.innerHTML = label.trim();
    renderTex(div);
    div.addEventListener('click', () => {
      if (type === 'single-mcq' || type === 'dialogue') {
        document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
        div.classList.add('selected');
      } else {
        div.classList.toggle('selected');
      }
    });
    mcqOptionsContainer.appendChild(div);
  });
}

function submitTextAnswer() {
  const answer = userText.value.trim();
  if (!answer) return;
  hideInput();

  setTimeout(() => {
    const userBubble = addUserMessage(answer);
    userText.value = "";
    const node = dialogueSystem[currentNode];

    let thisScore = 0;
    const isMarked = typeof node.marks === 'number';

    const normalizedAnswer = answer.toLowerCase();
    const isCorrect = node.answers && node.answers instanceof Set &&
                      [...node.answers].some(ans => ans.toLowerCase().trim() === normalizedAnswer);

    if (isCorrect) {
      userBubble.classList.add('correct');
      if (isMarked) {
        thisScore = node.marks;
        score += thisScore;
        addSystemMessage(`📊 Score: ${round2(thisScore)}/${round2(node.marks)}`);
      }
    } else {
      userBubble.classList.add('incorrect');
      if (isMarked) {
        addSystemMessage(`📊 Score: 0/${round2(node.marks)}`);
      }
      if (node.respondToWrong) {
        queueMessage(() => renderMessage(node.respondToWrong));
      }
    }

    isBusy = false;
    queueMessage(() => renderMessage(node.next));
  }, 300);
}

function submitMCQAnswer() {
  const selectedEls = Array.from(document.querySelectorAll('.option-item.selected'));
  if (!selectedEls.length) return;

  hideInput();

  setTimeout(() => {
    const selectedKeys = selectedEls.map(el => el.dataset.key);

    const node = dialogueSystem[currentNode];
    if (node.type === 'dialogue') {
      const selectedKey = selectedKeys[0];
      addUserMessage(node.options[selectedKey]);

      isBusy = false;
      queueMessage(() => renderMessage(node.respondToIdx[selectedKey]));
      return;
    }

    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    const row = document.createElement('div');
    row.className = 'mcq-response';

    Object.entries(node.options).forEach(([key, label]) => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.innerHTML = label.trim();
      renderTex(bubble);
      bubble.dataset.key = key;
      row.appendChild(bubble);
    });

    userMessage.appendChild(row);
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    lastSender = 'user';

    row.childNodes.forEach(bubble => {
      if (selectedKeys.includes(bubble.dataset.key)) bubble.classList.add('selected');
    });

    let thisScore = 0;
    const isMarked = typeof node.marks === 'number';
    let marksPerOption;
    if (node.type === 'single-mcq') {
      marksPerOption = node.marks;
    } else {
      marksPerOption = node.marks / node.answersIdx.size;
    }

    const shownExplanations = new Set();
    row.childNodes.forEach(bubble => {
      const key = bubble.dataset.key;
      const isSelected = selectedKeys.includes(key);
      node.answersIdx = new Set(node.answersIdx); // in case it was array
      const isCorrect = node.answersIdx.has(Number(key));
      if (isSelected && isCorrect) {
        bubble.classList.remove('selected');
        bubble.classList.add('correct');
        thisScore += marksPerOption;
      } else if (isSelected && !isCorrect) {
        bubble.classList.remove('selected');
        bubble.classList.add('incorrect');
        thisScore -= marksPerOption;
      } else if (!isSelected && isCorrect) {
        bubble.classList.add('missed');
      }
      if (node.respondToIdx && isSelected && node.respondToIdx[key]) {
        const responseId = node.respondToIdx[key];
        if (!shownExplanations.has(responseId)) {
          shownExplanations.add(responseId);
          queueMessage(() => renderMessage(responseId));
        }
      }
    });

    if (isMarked) {
      thisScore = Math.max(0, thisScore);
      score += thisScore;
      addSystemMessage(`📊 Score: ${round2(thisScore)}/${round2(node.marks)}`);
    }

    isBusy = false;
    queueMessage(() => renderMessage(node.next));
  }, 300);
}

function round2(val) {
  return Math.round(val * 100) / 100;
}

function renderTex(element) {
  renderMathInElement(element, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\[", right: "\\]", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false }
    ],
    throwOnError: false
  });
}

function attachZoomPanEvents(img) {
  let scale = 1;
  let isPanning = false;
  let startX = 0, startY = 0;
  let translateX = 0, translateY = 0;

  function reset() {
    scale = 1;
    translateX = 0;
    translateY = 0;
    img.style.transform = 'scale(1) translate(0px, 0px)';
  }

  // Wheel zoom
  img.addEventListener('wheel', e => {
    e.preventDefault();
    const zoomIntensity = 0.1;
    scale += (e.deltaY < 0 ? zoomIntensity : -zoomIntensity);
    scale = Math.max(1, Math.min(scale, 5));
    img.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  });

  // Mouse zoom/pan
  img.addEventListener('mousedown', e => {
    if (scale <= 1) return;
    isPanning = true;
    img.style.cursor = 'grabbing';
    startX = e.clientX - translateX * scale;
    startY = e.clientY - translateY * scale;
    e.preventDefault();
  });

  img.addEventListener('mousemove', e => {
    if (!isPanning) {
      img.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
      return;
    }
    const dx = (e.clientX - startX) / scale;
    const dy = (e.clientY - startY) / scale;
    translateX = dx;
    translateY = dy;
    img.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  });

  img.addEventListener('mouseup', () => {
    isPanning = false;
    img.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  });

  img.addEventListener('mouseleave', () => {
    isPanning = false;
    img.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  });

  // Close resets zoom
  closeModalBtn.addEventListener('click', reset);
}

userText.addEventListener('keypress', e => {
  if (e.key === 'Enter') submitTextAnswer();
});

toggleInputBtn.addEventListener('click', () => {
  if (isInputVisible) {
      chatInputContainer.classList.remove('expanded');
  } else {
      chatInputContainer.classList.add('expanded');
  }
  isInputVisible = !isInputVisible;
  adjustChatBoxPadding();
});

viewImportantBtn.addEventListener('click', () => {
  chatTitle.textContent = "Starred Messages";
  importantList.innerHTML = "";
  messageHistory.forEach(nodeId => {
    if (importantMessages.has(nodeId)) {

      const node = dialogueSystem[nodeId];
      let element;
      if (node.type === 'image') {
        element = createImageMessage(nodeId, false); 
      } else if (node.type === 'embed') {
        element = createEmbedMessage(nodeId, false);
      } else if (node.type === 'tex') {
        element = createTexMessage(nodeId, false);
      } else {
        element = document.createElement('div');
        element.className = 'bubble important-message';
        element.innerHTML = node.content.trim();
        renderTex(element);
      }

      element.style.margin = '6px 0';
      importantList.appendChild(element);
    }
  });

  chatView.classList.remove('active');
  chatView.classList.add('hidden-left');
  importantPage.classList.remove('hidden-right');
  importantPage.classList.add('active');
  backToChatBtn.style.display = 'inline-block';
  viewImportantBtn.style.display = 'none';
});
  
backToChatBtn.addEventListener('click', () => {
  chatTitle.textContent = chatName;

  importantPage.classList.remove('active');
  importantPage.classList.add('hidden-right');
  chatView.classList.remove('hidden-left');
  chatView.classList.add('active');
  backToChatBtn.style.display = 'none';
  viewImportantBtn.style.display = 'inline-block';
});

closeModalBtn.addEventListener('click', () => {
  modalContent.querySelectorAll('iframe').forEach(iframe => {
    const isPreloaded = iframe.hasAttribute('data-preloaded-url');
    if (isPreloaded) {
      iframe.style.display = 'none';
    } else {
      iframe.remove();
    }
  });

  // Also remove other non-persistent content
  modalContent.querySelectorAll('img, .latex-script').forEach(el => el.remove());

  modal.style.display = 'none';
});