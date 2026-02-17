// Data for communication cards (Hierarchical)
let customPhrases = JSON.parse(localStorage.getItem('myCustomPhrases')) || [];

const phrases = [
    { label: "はい", text: "はい", icon: "⭕️", type: "positive" },
    { label: "いいえ", text: "いいえ", icon: "❌", type: "negative" },
    { label: "ありがとう", text: "ありがとうございます", icon: "🙏", type: "social" },

    // Category: Greetings
    {
        label: "挨拶",
        icon: "🗣️",
        type: "category",
        subPhrases: [
            { label: "おはよう", text: "おはようございます", icon: "☀️", type: "social" },
            { label: "こんにちは", text: "こんにちは", icon: "🕛", type: "social" },
            { label: "こんばんは", text: "こんばんは", icon: "🌙", type: "social" },
            { label: "おやすみ", text: "おやすみなさい", icon: "🛌", type: "social" },
            { label: "すいません", text: "すいません", icon: "🙋", type: "social" },
            { label: "ごめんなさい", text: "ごめんなさい", icon: "🙇", type: "social" },
            { label: "はじめまして", text: "はじめまして", icon: "🤝", type: "social" },
            { label: "さようなら", text: "さようなら", icon: "👋", type: "social" }
        ]
    },

    // Category: Favorites / Custom
    {
        label: "お気に入り・追加",
        icon: "⭐️",
        type: "category",
        id: "favorites", // specific ID for logic
        subPhrases: [
            // This will be populated dynamically
            { label: "➕ 追加する", icon: "➕", type: "action", action: "openAddModal" }
        ]
    },

    // Category: Physical Condition
    {
        label: "体調",
        icon: "🤒",
        type: "category",
        subPhrases: [
            {
                label: "痛い",
                icon: "⚡️",
                type: "category",
                subPhrases: [
                    { label: "頭が痛い", text: "頭が痛いです", icon: "🤕", type: "pain" },
                    { label: "お腹が痛い", text: "お腹が痛いです", icon: "🤢", type: "pain" },
                    { label: "胸が苦しい", text: "胸が苦しいです", icon: "🫀", type: "pain" },
                    { label: "足が痛い", text: "足が痛いです", icon: "🦵", type: "pain" },
                    { label: "ここが痛い", text: "ここが痛いです", icon: "👇", type: "pain" }
                ]
            },
            { label: "寒い", text: "寒いです", icon: "🥶", type: "feeling" },
            { label: "暑い", text: "暑いです", icon: "🥵", type: "feeling" },
            { label: "気分悪い", text: "気分が悪いです", icon: "🤢", type: "pain" },
            { label: "かゆい", text: "かゆいところがあります", icon: "🐜", type: "feeling" },
            { label: "痰を出したい", text: "痰を出したいです", icon: "😮‍💨", type: "pain" }
        ]
    },

    // Category: Needs
    {
        label: "生活・要望",
        icon: "🏠",
        type: "category",
        subPhrases: [
            { label: "トイレ", text: "トイレに行きたいです", icon: "🚻", type: "need" },
            {
                label: "飲み物",
                icon: "🥤",
                type: "category",
                subPhrases: [
                    { label: "水", text: "お水が飲みたいです", icon: "💧", type: "need" },
                    { label: "お茶", text: "お茶が飲みたいです", icon: "🍵", type: "need" },
                    { label: "とろみ", text: "とろみをつけてください", icon: "🥣", type: "need" }
                ]
            },
            { label: "お腹すいた", text: "お腹がすきました", icon: "🍚", type: "need" },
            {
                label: "身だしなみ",
                icon: "🪞",
                type: "category",
                subPhrases: [
                    { label: "歯磨き", text: "歯磨きがしたいです", icon: "🪥", type: "action" },
                    { label: "顔を洗う", text: "顔を洗いたいです", icon: "🧖", type: "action" },
                    { label: "着替え", text: "着替えがしたいです", icon: "👕", type: "action" },
                    { label: "お風呂", text: "お風呂に入りたいです", icon: "🛁", type: "action" },
                    { label: "爪切り", text: "爪を切ってほしいです", icon: "💅", type: "action" }
                ]
            },
            { label: "休憩", text: "少し休みたいです", icon: "🛏", type: "action" },
            { label: "座りたい", text: "座りたいです", icon: "🪑", type: "action" },
            { label: "横になりたい", text: "横になりたいです", icon: "🛌", type: "action" }
        ]
    },

    // Category: Feelings
    {
        label: "気持ち",
        icon: "💭",
        type: "category",
        subPhrases: [
            { label: "嬉しい", text: "嬉しいです", icon: "😊", type: "feeling" },
            { label: "悲しい", text: "悲しいです", icon: "😢", type: "feeling" },
            { label: "不安", text: "不安です", icon: "😰", type: "feeling" },
            { label: "寂しい", text: "寂しいです", icon: "🥺", type: "feeling" },
            { label: "家に帰りたい", text: "家に帰りたいです", icon: "🏠", type: "feeling" },
            { label: "困っている", text: "困っています", icon: "😥", type: "feeling" }
        ]
    },

    // Category: Call Someone / Medical
    {
        label: "人を呼ぶ・医療",
        icon: "🔔",
        type: "category",
        subPhrases: [
            { label: "家族", text: "家族を呼んでください", icon: "🏠", type: "request" },
            { label: "医者", text: "先生を呼んでください", icon: "👨‍⚕️", type: "request" },
            { label: "看護師", text: "看護師さんを呼んでください", icon: "👩‍⚕️", type: "request" },
            { label: "誰か来て", text: "誰か来てください", icon: "🔔", type: "request" },
            { label: "薬", text: "薬を飲みたいです", icon: "💊", type: "medical" },
            { label: "リハビリ", text: "リハビリの時間です", icon: "🤸", type: "medical" },
            { label: "車椅子", text: "車椅子に乗りたいです", icon: "🦽", type: "medical" }
        ]
    },

    // Category: Items/Activity
    {
        label: "物・活動",
        icon: "📦",
        type: "category",
        subPhrases: [
            { label: "テレビ", text: "テレビが見たいです", icon: "📺", type: "leisure" },
            { label: "メガネ", text: "メガネを取りたいです", icon: "👓", type: "item" },
            { label: "スマホ", text: "スマートフォンがほしいです", icon: "📱", type: "item" },
            { label: "ティッシュ", text: "ティッシュをください", icon: "🧻", type: "item" },
            { label: "電気", text: "電気をつけたり消したりしたいです", icon: "💡", type: "item" }
        ]
    },

    // External Link
    {
        label: "支援センターHP",
        icon: "🏥",
        type: "link",
        url: "https://scdc.hiroshima-u.ac.jp/"
    }
];

// Elements
const boardContainer = document.getElementById('board-container');
const helpModal = document.getElementById('help-modal');
const helpBtn = document.getElementById('help-btn');
const closeModal = document.getElementById('close-modal');
const editBtn = document.getElementById('edit-btn');
const cancelEditBtn = document.getElementById('cancel-edit');
const cardDisplay = document.getElementById('card-display');
const cardEdit = document.getElementById('card-edit');
const helpCardForm = document.getElementById('help-card-form');
const newsTicker = document.getElementById('news-ticker');

// Add Phrase Modal Elements
const addPhraseModal = document.getElementById('add-phrase-modal');
const closeAddModal = document.getElementById('close-add-modal');
const addPhraseForm = document.getElementById('add-phrase-form');
const cancelAddBtn = document.getElementById('cancel-add-btn');
const iconOptions = document.querySelectorAll('.icon-option');
const iconInput = document.getElementById('new-phrase-icon');

// Whiteboard Elements
const drawModal = document.getElementById('draw-modal');
const drawBtn = document.getElementById('draw-btn');
const closeDrawModal = document.getElementById('close-draw-modal');
const canvas = document.getElementById('drawing-canvas');
const clearCanvasBtn = document.getElementById('clear-canvas');
const colorBtns = document.querySelectorAll('.color-btn');
const widthBtns = document.querySelectorAll('.width-btn');

// Keyboard Elements
const keyboardModal = document.getElementById('keyboard-modal');
const keyboardBtn = document.getElementById('keyboard-btn');
const closeKeyboardModal = document.getElementById('close-keyboard-modal');
const keyboardInput = document.getElementById('keyboard-input');
const speakKeyboardBtn = document.getElementById('speak-keyboard-btn');
const clearKeyboardBtn = document.getElementById('clear-keyboard');
const historyList = document.getElementById('quick-history');

// SOS Elements
const sosModal = document.getElementById('sos-modal');
const sosBtn = document.getElementById('sos-btn');
const closeSosModal = document.getElementById('close-sos-modal');
const sosContainer = document.getElementById('sos-buttons-container');

// Global Variables
let synth = window.speechSynthesis;
let voices = [];
let navigationStack = [];
const fields = ['name', 'age', 'blood', 'condition', 'emergency', 'hospital'];
let ctx; // Canvas context
let isDrawing = false;
let currentX = 0;
let currentY = 0;
let messageHistory = JSON.parse(localStorage.getItem('myMessageHistory')) || [];

// --- Initialization ---
function init() {
    loadCustomPhrases(); // Merge custom phrases into Favorites
    renderButtons(phrases); // Render root level

    // Fetch News from Google Sheets
    fetchNews();

    // Help Card Event Listeners
    if (helpBtn) helpBtn.addEventListener('click', openHelpModal);
    if (closeModal) closeModal.addEventListener('click', closeHelpModal);
    if (editBtn) editBtn.addEventListener('click', () => toggleEditMode(true));
    if (cancelEditBtn) cancelEditBtn.addEventListener('click', () => toggleEditMode(false));
    if (helpCardForm) helpCardForm.addEventListener('submit', saveHelpCard);

    // Custom Phrase Event Listeners
    if (closeAddModal) closeAddModal.addEventListener('click', closeAddPhraseModal);
    if (cancelAddBtn) cancelAddBtn.addEventListener('click', closeAddPhraseModal);
    if (addPhraseForm) addPhraseForm.addEventListener('submit', saveCustomPhrase);

    iconOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            iconOptions.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            iconInput.value = opt.dataset.icon;
        });
    });

    // Whiteboard Event Listeners
    if (drawBtn) drawBtn.addEventListener('click', openDrawModal);
    if (closeDrawModal) closeDrawModal.addEventListener('click', closeDrawModalFunc);
    if (clearCanvasBtn) clearCanvasBtn.addEventListener('click', clearCanvas);

    // Keyboard Event Listeners
    if (keyboardBtn) keyboardBtn.addEventListener('click', openKeyboardModal);
    if (closeKeyboardModal) closeKeyboardModal.addEventListener('click', closeKeyboardModalFunc);
    if (speakKeyboardBtn) speakKeyboardBtn.addEventListener('click', speakFromKeyboard);
    if (clearKeyboardBtn) clearKeyboardBtn.addEventListener('click', () => {
        if (keyboardInput) keyboardInput.value = '';
    });

    // SOS Event Listeners
    if (sosBtn) sosBtn.addEventListener('click', openSosModal);
    if (closeSosModal) closeSosModal.addEventListener('click', closeSosModalFunc);

    // Canvas Drawing Events
    if (canvas) {
        ctx = canvas.getContext('2d');
        // Mouse
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);
        // Touch
        canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
        canvas.addEventListener('touchend', stopDrawing);

        // Window resize
        window.addEventListener('resize', resizeCanvas);
    }

    // Tools
    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            colorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (ctx) ctx.strokeStyle = btn.dataset.color;
        });
    });

    widthBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            widthBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (ctx) ctx.lineWidth = btn.dataset.width;
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === helpModal) {
            closeHelpModal();
        }
        if (e.target === addPhraseModal) {
            closeAddPhraseModal();
        }
        // Don't close whiteboard on outside click to prevent accidental loss
    });

    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices();

    // IOS Safari fix: sometimes voices aren't loaded until interaction
    // We try to load them again on first touch
    document.body.addEventListener('touchstart', function () {
        if (voices.length === 0) loadVoices();
    }, { once: true });
}

// --- Custom Phrases Logic ---
function loadCustomPhrases() {
    const favorites = phrases.find(p => p.id === 'favorites');
    if (favorites) {
        // Reset to just the "Add" button
        favorites.subPhrases = [
            { label: "➕ 追加する", icon: "➕", type: "action", action: "openAddModal" }
        ];
        // Add saved phrases
        if (customPhrases.length > 0) {
            customPhrases.forEach(cp => {
                favorites.subPhrases.unshift({ ...cp, isCustom: true });
            });
        }
    }
}

function openAddPhraseModal() {
    if (addPhraseModal) {
        addPhraseModal.classList.remove('hidden');
        // Reset form
        addPhraseForm.reset();
        iconOptions.forEach(o => o.classList.remove('selected'));
        if (iconOptions[0]) {
            iconOptions[0].classList.add('selected');
            iconInput.value = iconOptions[0].dataset.icon;
        }
    }
}

function closeAddPhraseModal() {
    if (addPhraseModal) addPhraseModal.classList.add('hidden');
}

function saveCustomPhrase(e) {
    e.preventDefault();
    const label = document.getElementById('new-phrase-label').value;
    const text = document.getElementById('new-phrase-text').value;
    const icon = document.getElementById('new-phrase-icon').value;

    if (label && text) {
        const newPhrase = { label, text, icon, type: 'custom' };
        customPhrases.push(newPhrase);
        localStorage.setItem('myCustomPhrases', JSON.stringify(customPhrases));

        loadCustomPhrases(); // Refresh the array

        // If we are currently viewing the Favorites category, re-render
        // Find favorites category object
        const favs = phrases.find(p => p.id === 'favorites');
        if (favs) {
            // We need to re-render the Favorites list. 
            // Check if we are currently viewing favorites (this is a simplification)
            // But regardless, re-rendering the category's subPhrases is safe if we are "inside" it
            // However, since we are inside a modal, when we close it, we want the view to update.
            // If the user was in Favorites -> Click Add -> logic runs -> Close Modal -> User sees updated list
            // Since navigationStack is used, we might need to update the *current* view if it is favorites.

            // Simple hack: if we are in favorites, just call renderButtons with new list
            // But we don't track "current view object" easily. 
            // Let's just re-render favorites subPhrases - this will work if the user is ON that screen.
            renderButtons(favs.subPhrases);
        }

        closeAddPhraseModal();
    }
}

// --- Help Card Logic ---
function openHelpModal() {
    if (!helpModal) return;
    loadHelpCard(); // Load latest data
    helpModal.classList.remove('hidden');
    toggleEditMode(false); // Always start in view mode
}

function closeHelpModal() {
    if (helpModal) helpModal.classList.add('hidden');
}

function toggleEditMode(isEdit) {
    if (isEdit) {
        cardDisplay.classList.add('hidden');
        cardEdit.classList.remove('hidden');
        // Pre-fill form
        const data = JSON.parse(localStorage.getItem('myHelpCard')) || {};
        fields.forEach(field => {
            const input = document.getElementById(`input-${field}`);
            if (input) input.value = data[field] || '';
        });
    } else {
        cardDisplay.classList.remove('hidden');
        cardEdit.classList.add('hidden');
    }
}

function saveHelpCard(e) {
    e.preventDefault();
    const data = {};
    fields.forEach(field => {
        const input = document.getElementById(`input-${field}`);
        if (input) data[field] = input.value;
    });

    localStorage.setItem('myHelpCard', JSON.stringify(data));
    loadHelpCard(); // Refresh view
    toggleEditMode(false); // Switch back to view
}

function loadHelpCard() {
    const data = JSON.parse(localStorage.getItem('myHelpCard')) || {};

    fields.forEach(field => {
        const display = document.getElementById(`disp-${field}`);
        if (display) {
            if (data[field]) {
                // Determine if we need to replace newlines for textareas
                if (['condition', 'emergency', 'hospital'].includes(field)) {
                    display.innerHTML = `<p>${data[field].replace(/\n/g, '<br>')}</p>`;
                } else {
                    display.textContent = data[field];
                }
            } else {
                // Placeholder if empty
                if (['condition', 'emergency', 'hospital'].includes(field)) {
                    display.innerHTML = `<p style="color:#aaa;">(未登録)</p>`;
                } else {
                    display.textContent = '----';
                }
            }
        }
    });
}

// --- News Logic ---
const GAS_NEWS_API_URL = 'https://script.google.com/macros/s/AKfycbwbeIHz6ju3ahnr1GhRps6bxtefrPTPFER9WiO8Rw3bdr2ltxgbWgmyxEUhOaktSpkX/exec';

async function fetchNews() {
    if (!newsTicker) return;
    newsTicker.innerHTML = '<p>読み込み中...</p>';

    try {
        const response = await fetch(GAS_NEWS_API_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        // Handle new structure: { news: [], youtube: [] } 
        // We only care about news now.
        let newsItems = [];

        if (Array.isArray(data)) {
            newsItems = data;
        } else if (data && typeof data === 'object') {
            newsItems = data.news || [];
        }

        if (newsItems.length > 0) {
            renderNews(newsItems);
        } else {
            newsTicker.innerHTML = '<p>新しいお知らせはありません。</p>';
        }

    } catch (error) {
        console.error('Failed to fetch news:', error);
        // Fallback to static data if available
        if (typeof newsData !== 'undefined') {
            renderNews(newsData);
        } else {
            newsTicker.innerHTML = '<p>お知らせの読み込みに失敗しました。</p>';
        }
    }
}

function renderNews(news) {
    if (!newsTicker) return;

    newsTicker.innerHTML = '';

    // Sort by date desc
    const sortedNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedNews.forEach(item => {
        const div = document.createElement('div');
        div.className = 'news-item';

        // Category Logic
        let catClass = 'cat-gray'; // Change default to gray to spot unmatched items
        let rawCat = (item.category || '').toString().trim();
        let catLabel = rawCat;

        // Map known categories or use raw text
        if (rawCat === 'important' || rawCat === '重要') {
            catClass = 'cat-important';
            catLabel = '重要';
        } else if (rawCat === 'alert' || rawCat === '緊急' || rawCat === '注意') {
            catClass = 'cat-alert';
            catLabel = rawCat === 'alert' ? '注意' : rawCat;
        } else if (rawCat === 'info' || rawCat === 'お知らせ') {
            catClass = 'cat-info';
            catLabel = 'お知らせ';
        } else {
            // Unknown category - use gray
            catClass = 'cat-gray';
        }

        // Date Logic (Simple YYYY.MM.DD)
        let dateStr = item.date;
        try {
            const d = new Date(item.date);
            if (!isNaN(d.getTime())) {
                const y = d.getFullYear();
                const m = (d.getMonth() + 1).toString().padStart(2, '0');
                const day = d.getDate().toString().padStart(2, '0');
                dateStr = `${y}.${m}.${day}`;
            }
        } catch (e) {
            console.log('Date parse error', e);
        }

        div.innerHTML = `
            <div class="news-meta">
                <span class="news-date">${dateStr}</span>
                <span class="news-category ${catClass}">${catLabel}</span>
            </div>
            <a href="${item.url}" class="news-title" target="_blank">${item.title}</a>
        `;
        newsTicker.appendChild(div);
    });
}
// mapCategory function removed as logic is now inline or handled above

// --- Speech & Board Logic ---
function loadVoices() {
    voices = synth.getVoices();
}

function speak(text, buttonElement) {
    if (synth.speaking) {
        synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';

    // Improved Voice Selection Logic
    // 1. Try Google Japanese
    let jpVoice = voices.find(voice => voice.name.includes('Google 日本語'));

    // 2. Try Microsoft Natural (Edge/Windows)
    if (!jpVoice) {
        jpVoice = voices.find(voice => voice.name.includes('Microsoft') && voice.name.includes('Natural') && voice.lang.includes('ja'));
    }

    // 3. Try any Microsoft Japanese
    if (!jpVoice) {
        jpVoice = voices.find(voice => voice.name.includes('Microsoft') && voice.lang.includes('ja'));
    }

    // 4. Try any voice with 'ja' or 'JP' in lang
    if (!jpVoice) {
        jpVoice = voices.find(voice => voice.lang === 'ja-JP' || voice.lang === 'ja_JP');
    }

    // 5. Broad search
    if (!jpVoice) {
        jpVoice = voices.find(voice => voice.lang.includes('ja'));
    }

    // Apply voice if found
    if (jpVoice) {
        utterance.voice = jpVoice;
    }
    // If not found, we rely on utterance.lang = 'ja-JP' which usually works with default system voice.

    utterance.rate = 1.0; // Reset to default speed for better clarity
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    if (buttonElement) {
        buttonElement.classList.add('playing');

        // Timeout fallback in case onend doesn't fire (common mobile bug)
        setTimeout(() => {
            buttonElement.classList.remove('playing');
        }, 3000); // 3 seconds max visual feedback
    }

    utterance.onend = () => {
        if (buttonElement) buttonElement.classList.remove('playing');
    };

    utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        if (buttonElement) buttonElement.classList.remove('playing');
    };

    synth.speak(utterance);
}

function renderButtons(items) {
    boardContainer.innerHTML = '';

    // Add "Back" button if we are not at root level
    if (navigationStack.length > 0) {
        const backBtn = document.createElement('div');
        backBtn.className = 'comm-card back-card';
        backBtn.setAttribute('role', 'button');
        backBtn.setAttribute('aria-label', '戻る');

        const backIcon = document.createElement('div');
        backIcon.className = 'card-icon';
        backIcon.textContent = '↩️';

        const backLabel = document.createElement('div');
        backLabel.className = 'card-label';
        backLabel.textContent = '戻る';

        backBtn.appendChild(backIcon);
        backBtn.appendChild(backLabel);

        backBtn.addEventListener('click', () => {
            // Pop the last items from stack and render
            const parentItems = navigationStack.pop();
            renderButtons(parentItems);
        });

        boardContainer.appendChild(backBtn);
    }

    items.forEach(phrase => {
        const btn = document.createElement('div');
        btn.className = 'comm-card';

        // Add specific class based on type
        if (phrase.type === 'category') {
            btn.classList.add('category-card');
        } else if (phrase.type === 'link') {
            btn.classList.add('link-card');
        }

        btn.setAttribute('role', 'button');
        btn.setAttribute('aria-label', phrase.label);

        const icon = document.createElement('div');
        icon.className = 'card-icon';
        icon.textContent = phrase.icon;

        const label = document.createElement('div');
        label.className = 'card-label';
        label.textContent = phrase.label;

        btn.appendChild(icon);
        btn.appendChild(label);

        // Click event
        btn.addEventListener('click', () => {
            if (phrase.type === 'action' && phrase.action === 'openAddModal') {
                openAddPhraseModal();
            } else if (phrase.type === 'category' && phrase.subPhrases) {
                // Navigate deeper
                navigationStack.push(items);
                renderButtons(phrase.subPhrases);
            } else if (phrase.type === 'link' && phrase.url) {
                // Open Link
                window.open(phrase.url, '_blank');
            } else {
                // Leaf node - Speak
                speak(phrase.text, btn);
            }
        });

        boardContainer.appendChild(btn);
    });
}

// --- Whiteboard Logic ---
function openDrawModal() {
    if (drawModal) {
        drawModal.classList.remove('hidden');
        // Delay resizing to ensure modal is visible
        setTimeout(resizeCanvas, 100);
    }
}

function closeDrawModalFunc() {
    if (drawModal) drawModal.classList.add('hidden');
}

function resizeCanvas() {
    if (!canvas || !canvas.offsetParent) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    // Restore context style after resize reset
    if (ctx) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        // Get active color/width
        const activeColor = document.querySelector('.color-btn.active');
        const activeWidth = document.querySelector('.width-btn.active');
        ctx.strokeStyle = activeColor ? activeColor.dataset.color : '#000000';
        ctx.lineWidth = activeWidth ? activeWidth.dataset.width : 2;
    }
}

function clearCanvas() {
    if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function startDrawing(e) {
    isDrawing = true;
    [currentX, currentY] = getCoordinates(e);
}

function draw(e) {
    if (!isDrawing) return;
    const [x, y] = getCoordinates(e);

    ctx.beginPath();
    ctx.moveTo(currentX, currentY);
    ctx.lineTo(x, y);
    ctx.stroke();

    [currentX, currentY] = [x, y];
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath(); // Reset path to prevent connecting separate lines
}

function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

function getCoordinates(e) {
    const rect = canvas.getBoundingClientRect();
    return [
        e.clientX - rect.left,
        e.clientY - rect.top
    ];
}

// --- Keyboard Logic ---
function openKeyboardModal() {
    if (keyboardModal) {
        keyboardModal.classList.remove('hidden');
        renderHistory();
        // Focus input
        setTimeout(() => {
            if (keyboardInput) keyboardInput.focus();
        }, 100);
    }
}

function closeKeyboardModalFunc() {
    if (keyboardModal) keyboardModal.classList.add('hidden');
}

function speakFromKeyboard() {
    const text = keyboardInput.value.trim();
    if (text) {
        speak(text, speakKeyboardBtn);
        addToHistory(text);
    }
}

function addToHistory(text) {
    // Remove if exists (to move to top)
    messageHistory = messageHistory.filter(item => item !== text);
    // Add to top
    messageHistory.unshift(text);
    // Limit to 10
    if (messageHistory.length > 10) messageHistory.pop();

    localStorage.setItem('myMessageHistory', JSON.stringify(messageHistory));
    renderHistory();
}

function renderHistory() {
    if (!historyList) return;
    historyList.innerHTML = '';

    if (messageHistory.length === 0) {
        historyList.innerHTML = '<p class="empty-history">履歴はありません</p>';
        return;
    }

    messageHistory.forEach(text => {
        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `<span class="history-text">${text}</span>`;

        item.addEventListener('click', () => {
            keyboardInput.value = text;
            speak(text, item);
        });

        historyList.appendChild(item);
    });
}

// --- SOS Logic ---
function openSosModal() {
    if (sosModal) {
        renderSosButtons();
        sosModal.classList.remove('hidden');
    }
}

function closeSosModalFunc() {
    if (sosModal) sosModal.classList.add('hidden');
}

function renderSosButtons() {
    if (!sosContainer) return;

    // Always start with 119
    let html = `
        <a href="tel:119" class="sos-button ambulance">
            <span class="sos-icon">🚑</span>
            <div class="sos-label">
                救急車を呼ぶ
                <span class="sos-sub-label">119番</span>
            </div>
        </a>
    `;

    // Check My Card for numbers
    const data = JSON.parse(localStorage.getItem('myHelpCard')) || {};

    // Family / Emergency Contact
    const familyPhone = extractPhoneNumber(data.emergency);
    if (familyPhone) {
        html += `
            <a href="tel:${familyPhone}" class="sos-button family">
                <span class="sos-icon">🏠</span>
                <div class="sos-label">
                    家族に連絡
                    <span class="sos-sub-label">${data.emergency.split('\n')[0].substring(0, 15)}...</span>
                </div>
            </a>
        `;
    }

    // Hospital
    const hospitalPhone = extractPhoneNumber(data.hospital);
    if (hospitalPhone) {
        html += `
            <a href="tel:${hospitalPhone}" class="sos-button hospital">
                <span class="sos-icon">🏥</span>
                <div class="sos-label">
                    病院に連絡
                    <span class="sos-sub-label">${data.hospital.split('\n')[0].substring(0, 15)}...</span>
                </div>
            </a>
        `;
    }

    sosContainer.innerHTML = html;
}

function extractPhoneNumber(text) {
    if (!text) return null;
    // Look for patterns like 090-1234-5678, 082-123-4567, etc.
    // Simple regex for digits and hyphens, at least 9 digits
    const match = text.match(/[\d-]{10,}/);
    if (match) {
        return match[0];
    }
    return null;
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
