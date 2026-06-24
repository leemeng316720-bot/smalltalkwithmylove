// =========================================
// 名人对谈 - 圆桌逻辑（含假数据测试）
// =========================================

// ---- 角色配置 ----
const CAST = [
  {
    name: '村上春树',
    field: '文学 / 小说',
    initial: '村',
    color: '#2d5a27',
    avatar: 'haruki.png',
    reply: '嗯，孤独啊。我想想……大概就像我跑马拉松到第三十公里时的感觉。周围没有人，只有自己的呼吸声。那时候我不会想"为什么我要一个人跑"，而是想"这条路的尽头会有什么呢"。孤独不是需要被填满的空洞，而是某种入口。你推开那扇门，里面可能有只猫，有口井，或者有一段你还没写出的旋律。我不觉得孤独是坏事，只是……如果你在那个房间里待太久，要记得偶尔出来煮杯咖啡。'
  },
  {
    name: '汉娜·阿伦特',
    field: '政治哲学',
    initial: '阿',
    color: '#8b1a1a',
    avatar: 'arendt.png',
    reply: '你所说的"孤独"，是指希腊的 monos——独自一人，还是指 modern loneliness——在人群中的不被看见？这两者有根本区别。前者是选择的，后者是结构性的。当公共领域被消解，当行动的空间被压缩，人就会陷入一种"世界性的孤独"。这种孤独不是私人情感，而是政治状况。如果我问你，你最后一次感到自己"被他人看见"是在什么场合？那可能比你描述的情绪更关键。'
  },
  {
    name: '奥里亚娜·法拉奇',
    field: '战地记者 / 访谈',
    initial: '法',
    color: '#4a3728',
    avatar: 'fallaci.png',
    reply: '孤独？我见过真正的孤独。在越南的弹坑里，一个美国士兵抱着他朋友的尸体，他看着我，问我"为什么"。我没有答案。孤独不是你在咖啡馆里发发呆、写写诗的那种矫情。孤独是当你站在权力的对面，发现没有人跟你站在一起。孤独是你说出了真相，然后所有人都转过头去。你说孤独？告诉我，你是因为什么而孤独？'
  },
  {
    name: '里尔克',
    field: '诗歌',
    initial: '里',
    color: '#5c4a6b',
    avatar: 'rilke.png',
    reply: '亲爱的朋友，关于孤独，我曾在给一位青年诗人的信中写道：你必须忍受它。孤独不是匮乏，而是丰盛的黑暗。就像一颗种子在土里，它必须独自待在那里，直到它准备好破土。你不要寻找答案来填满它，你要让它生长。如果夜晚太长，就看看窗外的树——它们也是独自站着，但它们在春天开花。你的孤独，也许正是你尚未完成的诗。'
  },
  {
    name: '柏拉图',
    field: '哲学',
    initial: '柏',
    color: '#1a3a52',
    avatar: 'plato.png',
    reply: '让我们来看看。你提到了孤独，但我怀疑你指的是不同的东西。是像洞穴中那个转身看见阳光的人所感到的孤独？还是像被放逐的诗人，他的灵魂记得理念世界但身体却困于尘世？如果是前者，那是觉醒的代价；如果是后者，那是回忆的苦涩。我问你：当你感到孤独时，你感到的是缺少同伴，还是感到某种更真实的东西在召唤你？如果是后者，那也许不是孤独，而是灵魂的乡愁。'
  },
  {
    name: '黛安娜·阿西尔',
    field: '编辑 / 回忆录',
    initial: '黛',
    color: '#6b5a4a',
    avatar: 'athill.png',
    reply: '嗯，我活了这么久了，告诉你一件事。孤独？我九十岁的时候才真正地面对它。我的编辑室早就空了，那些我编辑过的作家——有些成了天才，有些成了酒鬼，大多数都去世了。孤独不是一个年轻人该焦虑的问题。它更像衰老，你阻止不了它，只能学会和它相处。我发现最好的方式是：找一本好书，泡一杯茶，然后接受没有人会来敲门这个事实。这其实也没那么糟。'
  },
  {
    name: '迈克尔·杰克逊',
    field: '音乐 / 舞蹈',
    initial: '迈',
    color: '#3a1a4a',
    avatar: 'mj.png',
    reply: '孤独……我在舞台上， millions of people screaming my name……但有时候，那是一种最深的孤独。你知道的，就像你在人群中，但你感到没有人真正了解你。我写过一首歌叫《Stranger in Moscow》，那首歌是在俄罗斯的酒店里写的，外面下着雪，我在房间里，感到自己像个陌生人。但是……音乐让我不再孤独。当我跳舞的时候，我感觉到某种东西连接着我和其他人。也许你也需要找到属于你的那个舞台。'
  },
  {
    name: '木心',
    field: '文学 / 绘画 / 美学',
    initial: '木',
    color: '#2a2a2a',
    avatar: 'muxin.png',
    reply: '我这一生，说来都是错的。从二十二岁到五十六岁，我不发一字。那时候的人，多少右派、反革命、边缘人，都巴望时代收容，我不然。我只是在写，在画，在裁缝自己的衬衫，在煮一锅好菜。孤独？你要爱你的寂寞，像对待一个病人一样温柔地对待它。文学是一字一字地救出自己，书法是一笔一笔地救出自己。没有长夜痛哭过的人，不足语人生。'
  }
];

// =========================================
// Supabase Edge Functions 配置
// =========================================
// ⚠️ 部署后替换为实际的 Supabase 项目地址和 Anon Key
const SUPABASE_URL = 'https://odjqhckldirrujshkllg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kanFoY2tsZGlycnVqc2hrbGxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMDQ0NTksImV4cCI6MjA5Nzc4MDQ1OX0.ZO8FrEFzh0jzDta-fXzHI7XdnGLJlvtF_8IA5fRZ43M';

// =========================================
// 调用 Supabase Edge Function
// =========================================
async function callSupabaseFunction(functionName, body) {
  const url = `${SUPABASE_URL}/functions/v1/${functionName}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
    },
    body: JSON.stringify(body)
  });
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || `HTTP ${response.status}`);
  }
  
  return response.json();
}

// =========================================
// 调用频率限制（防手滑/无意识刷）
// =========================================
const DAILY_LIMIT = {
  roundtable: 20,   // 每天最多 20 次圆桌
  private: 50       // 每天最多 50 轮单人对谈
};
const DAILY_USAGE_KEY = 'salon_daily_usage';

function getDailyUsage() {
  const today = new Date().toDateString();
  const stored = JSON.parse(localStorage.getItem(DAILY_USAGE_KEY) || '{"date":"","roundtable":0,"private":0}');
  if (stored.date !== today) {
    return { date: today, roundtable: 0, private: 0 };
  }
  return stored;
}

function recordUsage(type) {
  const usage = getDailyUsage();
  usage[type]++;
  localStorage.setItem(DAILY_USAGE_KEY, JSON.stringify(usage));
  return usage;
}

function checkDailyLimit(type) {
  const usage = getDailyUsage();
  const limit = DAILY_LIMIT[type];
  if (usage[type] >= limit) {
    return {
      allowed: false,
      message: `今日${type === 'roundtable' ? '圆桌' : '对话'}次数已用完（${limit}次），请明天再试。`
    };
  }
  return { allowed: true, remaining: limit - usage[type] };
}



function showApiKeyModal() {
  const modal = document.getElementById('apikey-modal');
  const modalTitle = document.querySelector('.modal-title');
  const modalDesc = document.querySelector('.modal-desc');
  const modalInput = document.getElementById('apikey-input');
  const modalSave = document.getElementById('apikey-save');
  
  if (modal && modalTitle && modalDesc) {
    const usage = getDailyUsage();
    modalTitle.textContent = '今日使用额度';
    modalDesc.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 8px;">
        <div style="text-align: center; padding: 12px; background: rgba(201,169,110,0.05); border-radius: 8px; border: 1px solid #3a3228;">
          <div style="font-size: 1.5rem; color: #c9a96e; font-weight: 600;">${usage.roundtable}/${DAILY_LIMIT.roundtable}</div>
          <div style="font-size: 0.75rem; color: #8a7a6a; margin-top: 4px;">圆桌</div>
        </div>
        <div style="text-align: center; padding: 12px; background: rgba(201,169,110,0.05); border-radius: 8px; border: 1px solid #3a3228;">
          <div style="font-size: 1.5rem; color: #c9a96e; font-weight: 600;">${usage.private}/${DAILY_LIMIT.private}</div>
          <div style="font-size: 0.75rem; color: #8a7a6a; margin-top: 4px;">对谈</div>
        </div>
      </div>
      <p style="font-size: 0.75rem; color: #6a5a4a; margin-top: 8px;">配额每日 00:00 自动重置</p>
    `;
    
    // 隐藏输入框和保存按钮（硬编码模式下不需要）
    if (modalInput) modalInput.style.display = 'none';
    if (modalSave) modalSave.style.display = 'none';
    
    modal.style.display = 'flex';
  }
}

function hideApiKeyModal() {
  const modal = document.getElementById('apikey-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}



function safeParseJSON(content) {
  try {
    return JSON.parse(content);
  } catch (e) {
    // 回退：用正则提取 JSON 对象
    const match = content.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    throw new Error('无法解析模型输出');
  }
}

// =========================================
// 页面导航
// =========================================

function showPage(pageId) {
  document.querySelectorAll('.page-section').forEach(section => {
    section.classList.remove('active');
  });
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// =========================================
// 加载动画
// =========================================

function showLoading(text) {
  const curtain = document.getElementById('loading-curtain');
  const loadingText = document.getElementById('loading-text');
  const dots = document.querySelectorAll('.loading-dot');
  
  if (curtain && loadingText) {
    loadingText.textContent = text || '七位思想家正在落座……';
    curtain.classList.add('show');
    
    // 重置所有点
    dots.forEach(dot => dot.classList.remove('active'));
    
    // 依次点亮7个点，营造"落座"仪式感
    dots.forEach((dot, i) => {
      setTimeout(() => {
        dot.classList.add('active');
      }, 300 + i * 350);
    });
  }
}

function hideLoading() {
  const curtain = document.getElementById('loading-curtain');
  if (curtain) {
    curtain.classList.remove('show');
  }
}

// =========================================
// 电影感渲染：圆桌卡片逐个显示
// =========================================

async function cinematicRender(replies, container) {
  container.innerHTML = '';
  
  for (let i = 0; i < replies.length; i++) {
    const reply = replies[i];
    const castInfo = CAST[i];
    
    // 创建卡片
    const card = document.createElement('div');
    card.className = 'salon-card';
    card.style.setProperty('--accent-color', castInfo.color);
    card.innerHTML = `
      <div class="salon-card-header">
        <div class="salon-avatar" data-initial="${castInfo.initial}" style="--accent-color: ${castInfo.color}"><img src="avatars/${castInfo.avatar}" alt="${castInfo.name}"></div>
        <div class="salon-meta">
          <span class="salon-name">${castInfo.name}</span>
          <span class="salon-field">${castInfo.field}</span>
        </div>
      </div>
      <div class="salon-reply">${formatReply(reply.reply)}</div>
      <button class="salon-continue" data-index="${i}">
        与 ${castInfo.name} 继续对话
      </button>
    `;
    
    container.appendChild(card);
    
    // 强制重绘后触发进入动画
    await new Promise(resolve => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          card.classList.add('entered');
          // 800ms 间隔后显示下一张
          setTimeout(resolve, 800);
        });
      });
    });
  }
  
  // 绑定继续对话按钮
  container.querySelectorAll('.salon-continue').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index);
      startPrivateChat(index);
    });
  });
}

// 格式化回复：将长文本分段
function formatReply(text) {
  // 按句号/问号/感叹号分割，但保留标点
  const sentences = text.match(/[^.!?。！？]+[.!?。！？]+/g) || [text];
  
  // 每 2-3 句一段
  const paragraphs = [];
  let currentPara = '';
  sentences.forEach((sentence, i) => {
    currentPara += sentence;
    if ((i + 1) % 2 === 0 || i === sentences.length - 1) {
      paragraphs.push(currentPara.trim());
      currentPara = '';
    }
  });
  
  return paragraphs.map(p => `<p>${p}</p>`).join('');
}

// =========================================
// 圆桌流程：从输入到展示
// =========================================

async function startRoundtable(userQuestion) {
  // 检查每日限额
  const limitCheck = checkDailyLimit('roundtable');
  if (!limitCheck.allowed) {
    alert(limitCheck.message);
    return;
  }
  
  // 记录用户问题
  const questionDisplay = document.getElementById('roundtable-question');
  if (questionDisplay) {
    questionDisplay.textContent = userQuestion;
  }
  
  // 切换到展示页
  showPage('page-roundtable-show');
  
  // 显示加载动画
  showLoading('七位思想家正在落座……');
  
  try {
    const result = await callSupabaseFunction('roundtable', { userQuestion });
    const parsed = result;
    
    if (!parsed.roundtable || !Array.isArray(parsed.roundtable)) {
      throw new Error('API 返回格式不正确');
    }
    
    hideLoading();
    
    // 记录圆桌历史
    recordRoundtableHistory(userQuestion, parsed.roundtable);
    
    // 记录本次调用
    const usage = recordUsage('roundtable');
    
    const stage = document.getElementById('salon-stage');
    if (stage) {
      await cinematicRender(parsed.roundtable, stage);
      
      // 圆桌展示完成后，显示共鸣测量按钮
      const resonanceBtn = document.getElementById('btn-measure-resonance');
      if (resonanceBtn) {
        resonanceBtn.style.display = 'block';
      }
    }
  } catch (err) {
    console.error('圆桌 API 调用失败:', err);
    hideLoading();
    
    // 显示错误信息
    const stage = document.getElementById('salon-stage');
    if (stage) {
      let errorTitle = '圆桌出了点问题';
      let errorAdvice = '请检查 API Key 是否正确，或稍后再试。';
      
      if (err.message && (err.message.includes('429') || err.message.includes('overloaded'))) {
        errorTitle = 'Moonshot API 引擎暂时过载';
        errorAdvice = 'API服务器当前繁忙，已自动重试3次。请稍等1-2分钟后再次尝试。这不是你的问题，是服务器暂时负载过高。';
      } else if (err.message && err.message.includes('401')) {
        errorTitle = '配置错误';
        errorAdvice = '请检查 SUPABASE_URL 和 SUPABASE_ANON_KEY 是否配置正确。';
      } else if (err.message && err.message.includes('timeout')) {
        errorTitle = '请求超时';
        errorAdvice = '可能是网络不稳定或prompt太长。请检查网络连接后重试。';
      } else if (err.message && err.message.includes('Failed to fetch')) {
        errorTitle = '网络连接失败';
        errorAdvice = '请检查你的网络连接，或尝试使用VPN。';
      }
      
      stage.innerHTML = `
        <div class="salon-card entered" style="text-align:center; padding: 40px;">
          <div style="color: #8b1a1a; font-size: 1.125rem; margin-bottom: 12px;">${errorTitle}</div>
          <div style="color: #8a7a6a; font-size: 0.875rem; line-height: 1.8;">
            ${err.message}<br>
            ${errorAdvice}
          </div>
        </div>
      `;
    }
  }
}

// =========================================
// 单人对谈
// =========================================

let currentPartner = null;
let roundtableHistory = []; // 存储圆桌历史

function recordRoundtableHistory(question, replies) {
  roundtableHistory.push({
    type: 'roundtable',
    question,
    replies,
    timestamp: Date.now()
  });
}

function getRoundtableHistoryForPartner(partnerIndex) {
  // 构建该名人可见的历史上下文
  let context = '';
  for (const entry of roundtableHistory) {
    if (entry.type === 'roundtable') {
      context += `[圆桌时刻] 用户问："${entry.question}"\n`;
      const myReply = entry.replies[partnerIndex];
      if (myReply) {
        context += `你回应道："${myReply.reply}"\n`;
      }
      context += '\n';
    }
  }
  return context;
}

function startPrivateChat(index) {
  const cast = CAST[index];
  currentPartner = cast;
  
  // 更新聊天页头部
  const header = document.getElementById('chat-header');
  if (header) {
    header.innerHTML = `
      <div class="salon-avatar" data-initial="${cast.initial}" style="--accent-color: ${cast.color}"><img src="avatars/${cast.avatar}" alt="${cast.name}"></div>
      <div class="salon-meta">
        <span class="salon-name">${cast.name}</span>
        <span class="salon-field">${cast.field}</span>
      </div>
    `;
  }
  
  // 清空消息区
  const messages = document.getElementById('chat-messages');
  if (messages) {
    messages.innerHTML = '';
  }
  
  showPage('page-private');
}

// 发送消息（单人对谈）
async function sendPrivateMessage() {
  const input = document.getElementById('private-input');
  const messages = document.getElementById('chat-messages');
  if (!input || !messages || !input.value.trim()) return;
  
  // 检查每日限额
  const limitCheck = checkDailyLimit('private');
  if (!limitCheck.allowed) {
    alert(limitCheck.message);
    return;
  }
  
  const userText = input.value.trim();
  input.value = '';
  
  // 添加用户气泡
  addMessageBubble(messages, userText, 'user');
  
  // 显示加载状态（简单禁用输入）
  input.disabled = true;
  const sendBtn = document.getElementById('send-private');
  if (sendBtn) sendBtn.disabled = true;
  
  try {
    const partnerIndex = CAST.indexOf(currentPartner);
    const historyContext = getRoundtableHistoryForPartner(partnerIndex);
    const history = historyContext ? [historyContext] : [];
    
    const result = await callSupabaseFunction('private', {
      partnerName: currentPartner.name,
      userQuestion: userText,
      history: history
    });
    addMessageBubble(messages, result.content, 'celebrity', currentPartner.name);
    
    // 记录本次调用
    recordUsage('private');
  } catch (err) {
    console.error('单人对谈 API 调用失败:', err);
    let errorMsg = '（对话暂时出了点问题';
    if (err.message && err.message.includes('401')) {
      errorMsg += '：配置错误。请检查 SUPABASE_URL 和 SUPABASE_ANON_KEY 是否配置正确';
    } else if (err.message && (err.message.includes('429') || err.message.includes('overloaded'))) {
      errorMsg += '：Moonshot API 引擎暂时过载，已自动重试3次。请稍等1-2分钟后再次尝试。这不是你的问题，是服务器暂时负载过高';
    } else if (err.message && err.message.includes('500')) {
      errorMsg += '：服务器暂时不可用，请稍后再试';
    } else if (err.message && err.message.includes('timeout')) {
      errorMsg += '：请求超时，可能是网络不稳定或prompt太长。请检查网络连接后重试';
    } else if (err.message && err.message.includes('fetch')) {
      errorMsg += '：网络连接失败，请检查网络';
    } else if (err.message) {
      errorMsg += '：' + err.message;
    } else {
      errorMsg += '，请检查 API Key 或稍后再试';
    }
    errorMsg += '。）';
    addMessageBubble(messages, errorMsg, 'celebrity', '系统');
  } finally {
    input.disabled = false;
    if (sendBtn) sendBtn.disabled = false;
    input.focus();
    messages.scrollTop = messages.scrollHeight;
  }
}

function addMessageBubble(container, text, type, name) {
  const wrapper = document.createElement('div');
  wrapper.className = `chat-bubble-wrapper ${type}`;
  
  if (type === 'celebrity' && name) {
    const nameTag = document.createElement('div');
    nameTag.className = 'chat-bubble-name';
    nameTag.textContent = name;
    wrapper.appendChild(nameTag);
  }
  
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${type}`;
  
  if (type === 'celebrity') {
    bubble.innerHTML = formatReply(text);
  } else {
    bubble.textContent = text;
  }
  
  wrapper.appendChild(bubble);
  container.appendChild(wrapper);
  container.scrollTop = container.scrollHeight;
}

// 单人模式的假回复生成器（已废弃，保留作为回退）
function generateFakePrivateReply(name, question) {
  const replies = {
    '村上春树': '这让人想起我跑步时听到的爵士乐。有时候不是音乐在回答你，而是节奏本身。我觉得你说的这件事，也许就像煮一锅意大利面——火候到了，答案自然浮现。',
    '汉娜·阿伦特': '你再次提出了一个需要澄清前提的问题。让我换个方式问：你认为自己是在寻求一个答案，还是在寻求一种被理解的体验？',
    '奥里亚娜·法拉奇': '直说吧。我不相信你只是随便问问。你问这个问题，是因为你正在经历什么，对吗？说出来，别绕弯子。',
    '里尔克': '请不要急于找到答案。就像我写信告诉那位年轻人：你要活在问题里。让问题成为你的一部分，像树让雨水成为自己的一部分。',
    '柏拉图': '让我们再回到洞穴。你描述的这种感觉，是不是类似于一个人被松了绑，却还不习惯光亮？如果那是真的，那么答案不在我的口中，而在你自己的回忆里。',
    '黛安娜·阿西尔': '天哪，年轻人就是爱问这些。好吧，我编辑过几百本关于这种问题的书，但真正活过九十年之后，我唯一能告诉你的是：别再问了，去做点什么。',
    '迈克尔·杰克逊': '你问的这个问题……让我想跳舞。你知道，有时候身体会先于头脑知道答案。如果我在录音棚里，我可能会放一段音乐，然后我们一起找到那个旋律。'
  };
  
  return replies[name] || '这确实是一个值得思考的问题。让我好好想想……';
}

// =========================================
// 初始化事件绑定
// =========================================

document.addEventListener('DOMContentLoaded', () => {
  // 预加载所有头像图片，避免切换页面时加载延迟
  CAST.forEach(cast => {
    const img = new Image();
    img.src = `avatars/${cast.avatar}`;
  });
  
  // API Key 弹窗绑定（硬编码模式下仅显示使用额度）
  const apikeyModal = document.getElementById('apikey-modal');
  
  if (apikeyModal) {
    apikeyModal.addEventListener('click', (e) => {
      if (e.target === apikeyModal) {
        hideApiKeyModal();
      }
    });
  }
  
  // 模式选择
  const btnRoundtable = document.getElementById('btn-roundtable');
  const btnPrivate = document.getElementById('btn-private');
  
  if (btnRoundtable) {
    btnRoundtable.addEventListener('click', () => {
      showPage('page-roundtable-input');
    });
  }
  
  if (btnPrivate) {
    btnPrivate.addEventListener('click', () => {
      // 单人对谈：先进入选择界面（简化版：直接跳到第一个）
      showPage('page-private-select');
    });
  }
  
  // 返回按钮
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showPage('page-landing');
    });
  });
  
  // 结束对话按钮
  document.querySelectorAll('.end-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('确定要结束当前对话吗？\n\n对话记录将会被清除。')) {
        // 清除单人对谈状态
        currentPartner = null;
        // 清除圆桌展示
        const salonStage = document.getElementById('salon-stage');
        if (salonStage) salonStage.innerHTML = '';
        // 隐藏共鸣测量
        const resonanceBtn = document.getElementById('btn-measure-resonance');
        if (resonanceBtn) resonanceBtn.style.display = 'none';
        const resonancePanel = document.getElementById('tesserae-resonance');
        if (resonancePanel) resonancePanel.style.display = 'none';
        // 清除输入框
        if (questionInput) questionInput.value = '';
        const privateInput = document.getElementById('private-input');
        if (privateInput) privateInput.value = '';
        // 返回首页
        showPage('page-landing');
      }
    });
  });
  
  // ===== Tesserae 灵感引擎（重写）=====
  
  const sparkBtn = document.getElementById('tesserae-spark-btn');
  const tesseraeModal = document.getElementById('tesserae-modal');
  const tesseraeModalTitle = document.getElementById('tesserae-modal-title');
  const tesseraeModalClose = document.getElementById('tesserae-modal-close');
  const tesseraeModalBody = document.getElementById('tesserae-modal-body');
  const tesseraeComposeInput = document.getElementById('tesserae-compose-input');
  const tesseraeRefreshBtn = document.getElementById('tesserae-refresh-btn');
  const tesseraeSendBtn = document.getElementById('tesserae-send-btn');
  
  let currentSpark = null;
  let currentMode = 'break'; // 'break' = 破冰, 'enrich' = 丰富
  
  // 生成基于碎片的问题建议（根据当前名人定制）
  function generateSuggestion(fragment, userText, partnerName) {
    if (!userText) {
      // 破冰模式：根据名人领域生成开放式问题
      const domain = fragment.source_domain.split('/')[0];
      return `关于${domain}，我想问你：${fragment.fragment} 这让我想到，不知道你怎么看？`;
    } else {
      // 丰富模式：在用户问题基础上延伸
      return `${userText}（另外，我最近想到一件事：${fragment.fragment} 不知道你怎么看？）`;
    }
  }
  
  // 获取当前名人领域
  function getPartnerDomain() {
    if (!currentPartner) return null;
    const domains = {
      '村上春树': 'murakami',
      '汉娜·阿伦特': 'arendt',
      '奥里亚娜·法拉奇': 'fallaci',
      '里尔克': 'rilke',
      '柏拉图': 'plato',
      '黛安娜·阿西尔': 'athill',
      '迈克尔·杰克逊': 'mj',
      '木心': 'muxin'
    };
    return domains[currentPartner.name] || null;
  }
  
  // 打开弹窗并填充内容
  function openTesseraeModal() {
    const privateInput = document.getElementById('private-input');
    const userText = privateInput ? privateInput.value.trim() : '';
    const partnerDomain = getPartnerDomain();
    const result = TESSERAE.getSerendipity('curious', 5, partnerDomain);
    currentSpark = result;
    currentMode = userText ? 'enrich' : 'break';
    
    // 设置标题
    if (tesseraeModalTitle) {
      tesseraeModalTitle.textContent = userText ? '丰富你的问题' : '灵感碎片';
    }
    
    // 显示碎片
    let html = `
      <div class="tesserae-fragment">
        ${result.fragment}
        <div class="tesserae-fragment-meta">来源：${result.source_domain} | 重量：${result.weight} | 锐利：${result.acuity}</div>
        ${result.bridge ? `<div class="tesserae-fragment-bridge">${result.bridge}</div>` : ''}
      </div>
    `;
    
    if (userText) {
      html += `<p style="font-size: 0.8125rem; color: #8a7a6a; margin-top: 12px;">这个碎片来自${result.source_domain.split('/')[0]}领域，与${currentPartner ? currentPartner.name : '当前名人'}的思考相关。你可以把它融入你的问题，或者完全忽略它，写你自己的。</p>`;
    } else {
      html += `<p style="font-size: 0.8125rem; color: #8a7a6a; margin-top: 12px;">这个碎片来自${currentPartner ? currentPartner.name : ''}关心的领域。它可能帮你找到一个想问的问题。</p>`;
    }
    
    tesseraeModalBody.innerHTML = html;
    
    // 设置文本框
    if (tesseraeComposeInput) {
      tesseraeComposeInput.value = generateSuggestion(result, userText, currentPartner ? currentPartner.name : null);
      tesseraeComposeInput.placeholder = userText ? '在这里修改丰富后的问题……' : '基于这个碎片，你想问什么？';
      tesseraeComposeInput.focus();
    }
    
    tesseraeModal.style.display = 'flex';
  }
  
  if (sparkBtn && tesseraeModal) {
    sparkBtn.addEventListener('click', openTesseraeModal);
  }
  
  if (tesseraeModalClose && tesseraeModal) {
    tesseraeModalClose.addEventListener('click', () => {
      tesseraeModal.style.display = 'none';
      if (tesseraeComposeInput) tesseraeComposeInput.value = '';
      currentSpark = null;
    });
  }
  
  // 再来一次：重新获取碎片（根据当前名人）
  if (tesseraeRefreshBtn) {
    tesseraeRefreshBtn.addEventListener('click', () => {
      const privateInput = document.getElementById('private-input');
      const userText = privateInput ? privateInput.value.trim() : '';
      const partnerDomain = getPartnerDomain();
      const result = TESSERAE.getSerendipity('curious', 5, partnerDomain);
      currentSpark = result;
      
      let html = `
        <div class="tesserae-fragment">
          ${result.fragment}
          <div class="tesserae-fragment-meta">来源：${result.source_domain} | 重量：${result.weight} | 锐利：${result.acuity}</div>
          ${result.bridge ? `<div class="tesserae-fragment-bridge">${result.bridge}</div>` : ''}
        </div>
      `;
      
      if (userText) {
        html += `<p style="font-size: 0.8125rem; color: #8a7a6a; margin-top: 12px;">这个碎片来自${result.source_domain.split('/')[0]}领域，与${currentPartner ? currentPartner.name : '当前名人'}的思考相关。你可以把它融入你的问题，或者完全忽略它，写你自己的。</p>`;
      } else {
        html += `<p style="font-size: 0.8125rem; color: #8a7a6a; margin-top: 12px;">这个碎片来自${currentPartner ? currentPartner.name : ''}关心的领域。它可能帮你找到一个想问的问题。</p>`;
      }
      
      tesseraeModalBody.innerHTML = html;
      
      if (tesseraeComposeInput) {
        tesseraeComposeInput.value = generateSuggestion(result, userText, currentPartner ? currentPartner.name : null);
        tesseraeComposeInput.focus();
      }
    });
  }
  
  // 发送给名人：将文本框内容发送到对话
  if (tesseraeSendBtn && tesseraeModal) {
    tesseraeSendBtn.addEventListener('click', () => {
      if (tesseraeComposeInput && tesseraeComposeInput.value.trim()) {
        const privateInput = document.getElementById('private-input');
        if (privateInput) {
          privateInput.value = tesseraeComposeInput.value.trim();
        }
        tesseraeModal.style.display = 'none';
        tesseraeComposeInput.value = '';
        currentSpark = null;
        // 自动发送
        sendPrivateMessage();
      }
    });
  }
  
  // 共鸣测量（圆桌展示完成后）
  const resonanceBtn = document.getElementById('btn-measure-resonance');
  const resonancePanel = document.getElementById('tesserae-resonance');
  const resonanceClose = document.getElementById('tesserae-resonance-close');
  
  if (resonanceBtn && resonancePanel) {
    resonanceBtn.addEventListener('click', () => {
      if (roundtableHistory.length === 0) return;
      
      const lastEntry = roundtableHistory[roundtableHistory.length - 1];
      if (!lastEntry.replies || lastEntry.replies.length < 2) return;
      
      const replies = lastEntry.replies;
      const body = document.getElementById('tesserae-resonance-body');
      if (!body) return;
      
      // 生成雷达图
      const personCount = replies.length;
      const centerX = 160, centerY = 160, radius = 120;
      const angleStep = (2 * Math.PI) / personCount;
      const avgResonance = [];
      
      for (let i = 0; i < personCount; i++) {
        let sum = 0, count = 0;
        for (let j = 0; j < personCount; j++) {
          if (i !== j) {
            const r = TESSERAE.measureResonance(replies[i].reply, replies[j].reply, 3);
            sum += r.resonance;
            count++;
          }
        }
        avgResonance.push({ name: replies[i].name, value: count ? sum / count : 0 });
      }
      
      const maxVal = 10;
      const minVal = -10;
      const range = maxVal - minVal;
      
      let points = '';
      let axisLabels = '';
      let axisLines = '';
      
      for (let i = 0; i < personCount; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const val = avgResonance[i].value;
        const normalized = (val - minVal) / range;
        const r = normalized * radius;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        points += `${x},${y} `;
        
        // 轴标签
        const labelR = radius + 24;
        const lx = centerX + labelR * Math.cos(angle);
        const ly = centerY + labelR * Math.sin(angle);
        axisLabels += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="#8a7a6a">${avgResonance[i].name.slice(0, 2)}</text>`;
        
        // 轴线
        axisLines += `<line x1="${centerX}" y1="${centerY}" x2="${centerX + radius * Math.cos(angle)}" y2="${centerY + radius * Math.sin(angle)}" stroke="#3a3228" stroke-width="0.5" opacity="0.5"/>`;
      }
      
      // 计算圆环（共鸣度等值线）
      const ringLevels = [0.25, 0.5, 0.75];
      let rings = '';
      for (const level of ringLevels) {
        const ringR = level * radius;
        rings += `<circle cx="${centerX}" cy="${centerY}" r="${ringR}" fill="none" stroke="#3a3228" stroke-width="0.5" opacity="0.3"/>`;
      }
      
      const radarSvg = `
        <div class="tesserae-radar-wrapper">
          <div class="tesserae-radar-title">八维共鸣雷达图</div>
          <svg width="320" height="320" viewBox="0 0 320 320" class="tesserae-radar-svg">
            <defs>
              <linearGradient id="radarFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#c9a96e;stop-opacity:0.2" />
                <stop offset="100%" style="stop-color:#8a7a6a;stop-opacity:0.1" />
              </linearGradient>
            </defs>
            ${rings}
            ${axisLines}
            <polygon points="${points}" fill="url(#radarFill)" stroke="#c9a96e" stroke-width="1.5" opacity="0.8"/>
            ${points.split(' ').filter(p => p).map((p, i) => {
              const [px, py] = p.split(',');
              return `<circle cx="${px}" cy="${py}" r="3" fill="#c9a96e"/>`;
            }).join('')}
            ${axisLabels}
          </svg>
          <div class="tesserae-radar-legend">
            ${avgResonance.map(p => `<span class="tesserae-radar-dot" style="color: ${replies.find(r => r.name === p.name)?.color || '#8a7a6a'}">${p.name.slice(0, 2)}: ${p.value.toFixed(1)}</span>`).join('')}
          </div>
        </div>
      `;
      
      let listHtml = '<div class="tesserae-resonance-list">';
      const phaseClass = {
        constructive: 'tesserae-phase-constructive',
        destructive: 'tesserae-phase-destructive',
        standing_wave: 'tesserae-phase-standing',
        beat: 'tesserae-phase-beat',
        chaos: 'tesserae-phase-chaos'
      };
      
      for (let i = 0; i < replies.length - 1; i++) {
        for (let j = i + 1; j < replies.length; j++) {
          const result = TESSERAE.measureResonance(replies[i].reply, replies[j].reply, 3);
          const pc = phaseClass[result.phase] || '';
          
          listHtml += `
            <div class="tesserae-resonance-item">
              <div class="tesserae-resonance-pair">${replies[i].name} ↔ ${replies[j].name}</div>
              <div class="tesserae-resonance-value">
                共鸣度：${result.resonance} <span class="tesserae-resonance-phase ${pc}">${result.phase_name}</span>
              </div>
              <div style="font-size: 0.8125rem; color: #8a7a6a; margin-top: 4px;">基频：${result.frequency_profile.fundamental}</div>
              ${result.frequency_profile.overtones[0] ? `<div style="font-size: 0.75rem; color: #6a5a4a; margin-top: 4px; font-style: italic;">${result.frequency_profile.overtones[0]}</div>` : ''}
            </div>
          `;
        }
      }
      listHtml += '</div>';
      
      body.innerHTML = radarSvg + listHtml;
      resonancePanel.style.display = 'block';
      resonanceBtn.style.display = 'none';
    });
  }
  
  if (resonanceClose && resonancePanel) {
    resonanceClose.addEventListener('click', () => {
      resonancePanel.style.display = 'none';
      if (resonanceBtn) resonanceBtn.style.display = 'block';
    });
  }
  
  // 圆桌提交
  const submitRoundtable = document.getElementById('submit-roundtable');
  const questionInput = document.getElementById('question-input');
  
  if (submitRoundtable && questionInput) {
    submitRoundtable.addEventListener('click', () => {
      const question = questionInput.value.trim();
      if (!question) {
        questionInput.style.borderColor = '#8b1a1a';
        setTimeout(() => {
          questionInput.style.borderColor = '';
        }, 1000);
        return;
      }
      startRoundtable(question);
    });
    
    // 回车提交
    questionInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.metaKey) {
        submitRoundtable.click();
      }
    });
  }
  
  // 单人聊天发送
  const sendBtn = document.getElementById('send-private');
  const privateInput = document.getElementById('private-input');
  
  if (sendBtn) {
    sendBtn.addEventListener('click', sendPrivateMessage);
  }
  
  if (privateInput) {
    privateInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendPrivateMessage();
      }
    });
  }
  
  // 单人对谈选择：名人卡片点击
  document.querySelectorAll('.select-celebrity-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index);
      startPrivateChat(index);
    });
  });
  
  // 渲染首页名人画廊（输入页）——圆桌圆环布局
  const gallery = document.getElementById('cast-gallery');
  if (gallery) {
    const count = CAST.length;
    CAST.forEach((cast, i) => {
      const member = document.createElement('div');
      member.className = 'cast-member';
      // 从顶部（-90°）开始，均匀分布
      const angle = -90 + i * (360 / count);
      member.style.setProperty('--angle', angle + 'deg');
      member.innerHTML = `
        <div class="cast-avatar" data-initial="${cast.initial}" style="--cast-color: ${cast.color}"><img src="avatars/${cast.avatar}" alt="${cast.name}"></div>
        <div class="cast-name">${cast.name}</div>
        <div class="cast-field">${cast.field}</div>
      `;
      gallery.appendChild(member);
    });
  }
  
  // 渲染单人对谈选择页 - 堆叠卡片
  const selectGallery = document.getElementById('private-select-gallery');
  const cardStackPrev = document.getElementById('card-stack-prev');
  const cardStackNext = document.getElementById('card-stack-next');
  const cardStackDots = document.getElementById('card-stack-dots');
  let currentCardIndex = 0;
  
  function renderCardStack() {
    if (!selectGallery) return;
    selectGallery.innerHTML = '';
    
    CAST.forEach((cast, i) => {
      const card = document.createElement('div');
      card.className = 'select-card' + (i === currentCardIndex ? ' active' : '');
      card.dataset.index = i;
      card.style.setProperty('--accent-color', cast.color);
      card.innerHTML = `
        <div class="select-avatar" style="--accent-color: ${cast.color}"><img src="avatars/${cast.avatar}" alt="${cast.name}"></div>
        <div class="select-name">${cast.name}</div>
        <div class="select-field">${cast.field}</div>
        <div class="select-quote">${cast.reply ? cast.reply.slice(0, 60) + '...' : ''}</div>
        <button class="select-choose-btn" data-index="${i}">选择此人</button>
      `;
      selectGallery.appendChild(card);
    });
    
    // 圆点指示器
    if (cardStackDots) {
      cardStackDots.innerHTML = '';
      CAST.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'card-dot' + (i === currentCardIndex ? ' active' : '');
        dot.addEventListener('click', () => {
          currentCardIndex = i;
          updateCardStack();
        });
        cardStackDots.appendChild(dot);
      });
    }
    
    // 选择按钮事件
    selectGallery.querySelectorAll('.select-choose-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.index);
        startPrivateChat(idx);
      });
    });
  }
  
  function updateCardStack() {
    const cards = selectGallery.querySelectorAll('.select-card');
    cards.forEach((card, i) => {
      card.className = 'select-card' + (i === currentCardIndex ? ' active' : '');
    });
    const dots = cardStackDots.querySelectorAll('.card-dot');
    dots.forEach((dot, i) => {
      dot.className = 'card-dot' + (i === currentCardIndex ? ' active' : '');
    });
  }
  
  if (cardStackPrev) {
    cardStackPrev.addEventListener('click', () => {
      currentCardIndex = (currentCardIndex - 1 + CAST.length) % CAST.length;
      updateCardStack();
    });
  }
  
  if (cardStackNext) {
    cardStackNext.addEventListener('click', () => {
      currentCardIndex = (currentCardIndex + 1) % CAST.length;
      updateCardStack();
    });
  }
  
  // 触摸滑动
  let touchStartX = 0;
  let touchEndX = 0;
  
  if (selectGallery) {
    selectGallery.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    selectGallery.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          currentCardIndex = (currentCardIndex + 1) % CAST.length;
        } else {
          currentCardIndex = (currentCardIndex - 1 + CAST.length) % CAST.length;
        }
        updateCardStack();
      }
    }, { passive: true });
  }
  
  renderCardStack();
});
