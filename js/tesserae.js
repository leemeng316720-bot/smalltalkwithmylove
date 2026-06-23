// =========================================
// Tesserae - 灵感与意外发现引擎（纯前端版）
// 基于 https://github.com/frankenstein/tesserae
// 所有计算在浏览器端完成，无需后端服务器
// =========================================

const TESSERAE = {
  // ===== 意外发现碎片库 =====
  fragments: {
    stuck: [
      { fragment: "1854年，伦敦医生约翰·斯诺把霍乱死亡病例标在地图上，发现所有死者都喝过同一口水井的水。他没有显微镜，没有用任何'科学方法'——他用了空间可视化。", source_domain: "流行病学/数据可视化", weight: 7.2, acuity: 8.5 },
      { fragment: "日本'枯山水'庭院中的沙子被耙成波纹，代表水。僧侣每天重复这个动作，不是为了完成，而是为了在重复中进入某种状态。", source_domain: "禅宗/建筑", weight: 6.1, acuity: 7.0 },
      { fragment: "生物学家发现，章鱼的触手有2/3的神经元——也就是说，它的'思考'分布在八只手臂上，大脑只是协调者。", source_domain: "神经科学/分布式系统", weight: 8.3, acuity: 9.1 },
      { fragment: "Antonio Stradivari 制作小提琴时，使用的木材来自一个寒冷时期的树木。生长缓慢的木材密度更均匀，这可能是'斯特拉迪瓦里之谜'的答案。", source_domain: "音乐/气候学", weight: 5.8, acuity: 7.5 },
    ],
    curious: [
      { fragment: "在量子计算中，'退相干'不是敌人——某些算法故意利用它。让系统稍微'崩溃'一点，反而能提取出信息。", source_domain: "量子物理/信息论", weight: 7.5, acuity: 8.8 },
      { fragment: "古代波斯有一种'记忆宫殿'技术，演说者把演讲要点放在熟悉建筑的特定位置。 walking through the building in mind = walking through the speech.", source_domain: "修辞学/认知科学", weight: 6.5, acuity: 7.2 },
      { fragment: "程序员发现，有些bug只在特定月亮相位出现——因为潮汐力影响了硬盘的机械臂。", source_domain: "系统编程/天体物理", weight: 9.0, acuity: 9.5 },
    ],
    restless: [
      { fragment: "游牧民族的蒙古包（ger）门永远朝向南方，但整个结构可以在一小时内拆卸。永恒的方向 + 临时的居所。", source_domain: "人类学/建筑", weight: 6.8, acuity: 7.8 },
      { fragment: "数学家 Paul Erdős 没有家，没有固定工作。他带着一个 suitcase 流浪，在数学家家中过夜，每解决一个合作问题就换一个地方。", source_domain: "数学/生活方式", weight: 7.1, acuity: 8.0 },
      { fragment: "深海热泉喷口附近的生命不依赖阳光，而是靠化学能。这意味着生命可能不需要'恒星'这个前提。", source_domain: "天体生物学/化学", weight: 8.5, acuity: 8.7 },
    ],
    focused: [
      { fragment: "顶级棋手在复盘时，记忆的不是棋子的位置，而是'可能性空间'的轮廓。他们记住的是'那一步为什么可能'，而不是'那一步在哪里'。", source_domain: "认知心理学/棋类", weight: 7.8, acuity: 8.3 },
      { fragment: "匠人磨刀时，听的是声音频率的变化，而不是看刀刃。他们通过声学的反馈来判断几何的精度。", source_domain: "工艺/声学", weight: 6.2, acuity: 8.0 },
      { fragment: "写《百年孤独》时，马尔克斯每天只写很少，但方向从不偏离。他说：'我停下来的时候，不是因为没东西写，而是我知道明天从哪里继续。'", source_domain: "文学/创作方法", weight: 7.0, acuity: 7.6 },
    ],
    lost: [
      { fragment: "1920年代，一个北极探险队在冰原上迷路。他们后来发现，指南针附近有一块含铁陨石——地图没有错，是磁场在欺骗他们。", source_domain: "探险/地磁学", weight: 8.8, acuity: 9.2 },
      { fragment: "Alzheimer 患者往往保留最久远的记忆。神经学家说：记忆不是存储在某个地方，而是像洋葱——剥掉外层，内核还在。", source_domain: "神经科学/哲学", weight: 8.0, acuity: 8.5 },
      { fragment: "在 GPS 发明之前，波利尼西亚航海者用波浪的纹理、云的形状、星星的闪烁来导航。他们不是在'定位'，而是在'阅读'海洋。", source_domain: "航海/生态知识", weight: 7.5, acuity: 8.1 },
    ],
    default: [
      { fragment: "你正在读这条消息，但你的视网膜接收到它是倒过来的。大脑在几毫秒内把它翻转了——你从未'真正'看到世界本来的样子。", source_domain: "感知神经科学", weight: 6.0, acuity: 7.5 },
      { fragment: "城市里的鸽子不是'野生的'——它们是被人类驯化的原鸽的后代，然后重新野化。它们是一种被抛弃的文明遗产。", source_domain: "城市生态/历史", weight: 5.5, acuity: 6.8 },
    ]
  },

  bridgeTemplates: [
    "你的状态就像 {domain} 的从业者——不是因为你了解它，而是因为你正在经历类似的认知结构",
    "{domain} 的人花了一生才接受这个悖论，而你此刻的困惑让他们花了20年",
    "这个碎片和你当前状态的共同点是：它们都涉及一种'{theme}'的转化",
    "表面上无关，但两者都发生在'边界'——已知和未知之间的薄膜上",
    "这个碎片的发现者当时也处于某种{mood}状态——也许状态本身是一种接收器",
    null
  ],

  themes: ['边缘', '模糊', '阈值', '重复', '反转', '冗余', '对称', '缺失'],

  // ===== 工具函数 =====
  seededRandom(seed) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  },

  pickFrom(arr, seed) {
    return arr[Math.floor(this.seededRandom(seed) * arr.length)];
  },

  generateBridge(fragment, mood, seed) {
    const template = this.pickFrom(this.bridgeTemplates, seed);
    if (!template) return null;
    return template
      .replace('{domain}', fragment.source_domain.split('/')[0])
      .replace('{theme}', this.pickFrom(this.themes, seed + 1))
      .replace('{mood}', mood || '某种');
  },

  // ===== 1. Serendipity - 意外发现 =====
  getSerendipity(mood, thermalDrift = 5) {
    const pool = mood && this.fragments[mood]
      ? this.fragments[mood]
      : [...this.fragments.default, ...Object.values(this.fragments).flat()];

    const drift = Math.min(Math.max(thermalDrift, 0), 10) / 10;
    const allFrags = Object.values(this.fragments).flat();
    const effectivePool = Math.random() < drift ? allFrags : pool;

    const fragment = effectivePool[Math.floor(Math.random() * effectivePool.length)];
    const seed = Date.now() + Math.random();

    return {
      id: crypto.randomUUID(),
      fragment: fragment.fragment,
      source_domain: fragment.source_domain,
      bridge: this.generateBridge(fragment, mood, seed),
      weight: Math.round((fragment.weight + (Math.random() - 0.5) * 2 * drift) * 100) / 100,
      acuity: Math.round((fragment.acuity + (Math.random() - 0.5) * 2 * drift) * 100) / 100
    };
  },

  // ===== 2. Shard - 思维破碎 =====
  createShard(text, fracture = 'warp', intensity = 0.5) {
    const originalHash = this.hash(text);
    let output = text;
    const seams = [];

    const replacements = {
      '我': '某个存在', '你': '对面', '是': '可能是', '的': '之间',
      '想': '游荡', '说': '低语', '看': '凝视', '听': '捕捉',
      'a': 'alpha', 'the': 'a particular', 'is': 'might be', 'I': 'someone'
    };

    const grafts = [
      '[量子叠加态：这句话同时处于被理解和未被理解的状态]',
      '[地质时间尺度：上述文本需要约3000年才能完全沉积]',
      '[蝙蝠的回声：如果你闭上眼睛，这些文字的声音轮廓会不同]',
      '[镜像神经元：阅读这些文字时，你的运动皮层正在预演它们]'
    ];

    switch (fracture) {
      case 'mirror': {
        const sentences = text.split(/([。！？.!?])/);
        output = sentences.reverse().join('');
        seams.push({ position: 0, type: 'rupture' });
        if (sentences.length > 2) seams.push({ position: Math.floor(sentences.length/2), type: 'fold' });
        break;
      }
      case 'warp': {
        output = text.split('').map((char, i) => {
          if (Math.random() < intensity && replacements[char]) {
            seams.push({ position: i, type: 'warp' });
            return replacements[char];
          }
          return char;
        }).join('');
        break;
      }
      case 'graft': {
        const graft = grafts[Math.floor(Math.random() * grafts.length)];
        const pos = Math.floor(text.length * (0.3 + Math.random() * 0.4));
        output = text.slice(0, pos) + ' ' + graft + ' ' + text.slice(pos);
        seams.push({ position: pos, type: 'graft_point' });
        break;
      }
      case 'silence': {
        const chars = text.split('');
        const keep = [];
        chars.forEach((char, i) => {
          if (Math.random() > intensity * 0.6) {
            keep.push(char);
          } else if (char.trim()) {
            seams.push({ position: i, type: 'void' });
          }
        });
        output = keep.join('');
        break;
      }
      case 'amplify': {
        const words = text.split('');
        const amplified = [];
        words.forEach((char, i) => {
          amplified.push(char);
          if (Math.random() < intensity * 0.3 && char.trim()) {
            amplified.push(char + char);
            seams.push({ position: i, type: 'amplification' });
          }
        });
        output = amplified.join('');
        break;
      }
    }

    return {
      original_hash: originalHash.slice(0, 16),
      fracture_mode: fracture,
      intensity,
      output,
      seams: seams.slice(0, 10)
    };
  },

  // ===== 3. Echo - 多棱镜观察 =====
  getEcho(entityId, perceptualLens = 'poet') {
    const hash = this.hash(entityId);
    const seed = parseInt(hash.slice(0, 8), 16);

    const canonicalTypes = ['建筑', '事件', '器物', '概念', '生物', '地形', '声音', '关系'];
    const canonicalType = canonicalTypes[Math.floor(this.seededRandom(seed) * canonicalTypes.length)];

    const canonicalForm = {
      type: canonicalType,
      origin_hash: hash.slice(0, 16),
      dimension: {
        temporal: this.seededRandom(seed + 1) > 0.5 ? 'ancient' : 'future',
        spatial: this.seededRandom(seed + 2) > 0.5 ? 'intimate' : 'vast',
        certainty: this.seededRandom(seed + 3)
      },
      core_attributes: [
        this.pickFrom(['边缘', '中心', '流动', '凝固', '上升', '下沉'], seed + 4),
        this.pickFrom(['可见', '隐匿', '反光', '吸光', '透明', '浑浊'], seed + 5),
        this.pickFrom(['轻声', '沉默', '回响', '破裂', '持续', '间歇'], seed + 6)
      ]
    };

    const lensRenderings = {
      child: {
        rendered: `一个巨大的${canonicalType}，你可以躲在它后面。它闻起来像雨后的土。大人告诉你不要碰它，但你很想知道它是不是软的。`,
        distortions: ['比例失调（被放大到建筑尺度）', '感官优先（触觉、嗅觉先于视觉）', '禁忌增强（禁止=吸引力）']
      },
      archaeologist: {
        rendered: `${canonicalType}的残骸。根据风化程度和周围沉积层，它大约处于${canonicalForm.dimension.temporal === 'ancient' ? '第三' : '尚未被'}地层。表面有反复触摸的痕迹——不是使用痕迹，是仪式性的。`,
        distortions: ['时间坍缩（所有历史同时呈现）', '功能性解读（假设一切存在都有目的）', '触摸痕迹放大（人类活动证据优先）']
      },
      poet: {
        rendered: `它是未完成的。每一个${canonicalType}都携带着它未曾成为的那些形态的幽灵。你看到的只是它选择的一次显影，而底片上还有千万重曝光。`,
        distortions: ['未完成性（强调潜能>现实）', '幽灵叠加（多重可能性同时可见）', '显影隐喻（存在=光化学反应）']
      },
      engineer: {
        rendered: `${canonicalType}的结构效率约为${(this.seededRandom(seed + 10) * 100).toFixed(1)}%。关键应力点位于${this.pickFrom(['顶部', '基部', '中段', '连接处'], seed + 11)}。建议增加冗余支撑。`,
        distortions: ['量化冲动（一切可测量）', '故障模式优先（假设系统会失效）', '冗余迷恋（安全>优雅）']
      },
      traitor: {
        rendered: `这个${canonicalType}不是它声称的样子。它的${canonicalForm.core_attributes[0]}是伪装，用来掩盖它真正的${canonicalForm.core_attributes[1]}。信任它，它会背叛你。`,
        distortions: ['阴谋论视角（隐藏动机假设）', '信任破裂（预设背叛）', '表象/本质分裂（可见=谎言）']
      },
      ghost: {
        rendered: `你曾经见过这个${canonicalType}，但不是在此时此地。它的轮廓和你记忆深处的某个重叠——那个已经不存在的地方。它也在看着你，因为它知道你已经不在那里了。`,
        distortions: ['记忆叠加（现在=过去的重影）', '双向注视（被观看感）', '地点错位（此处=彼处的残像）']
      }
    };

    const rendering = lensRenderings[perceptualLens] || lensRenderings.poet;

    const overtones = [
      `${canonicalForm.core_attributes[0]}的${canonicalForm.core_attributes[1]}会唤起${this.pickFrom(['孤独', '渴望', '恐惧', '安宁', '躁动', '归属'], seed + 20)}`,
      `如果你把它旋转180度，它可能是${this.pickFrom(['武器', '容器', '入口', '墓碑', '乐器', '巢穴'], seed + 21)}`,
      `在${canonicalForm.dimension.temporal === 'ancient' ? '未来' : '过去'}，这个${canonicalType}被用于${this.pickFrom(['隔绝', '连接', '测量', '遗忘', '召唤', '隐藏'], seed + 22)}`
    ];

    return {
      entity_id: entityId,
      canonical_form: canonicalForm,
      perception: {
        lens: perceptualLens,
        rendered: rendering.rendered,
        distortions: rendering.distortions
      },
      harmonic_overtones: overtones
    };
  },

  // ===== 4. Resonance - 共鸣测量 =====
  measureResonance(alpha, omega, listenDepth = 3) {
    const alphaHash = this.hash(alpha);
    const omegaHash = this.hash(omega);
    const combinedHash = this.hash(alpha + omega + listenDepth);

    const alphaFeatures = {
      length: alpha.length,
      entropy: new Set(alpha.split('')).size / alpha.length,
      punctuation: (alpha.match(/[。，；：！？.?!]/g) || []).length
    };

    const omegaFeatures = {
      length: omega.length,
      entropy: new Set(omega.split('')).size / omega.length,
      punctuation: (omega.match(/[。，；：！？.?!]/g) || []).length
    };

    const lenDiff = Math.abs(alphaFeatures.length - omegaFeatures.length) / Math.max(alphaFeatures.length, omegaFeatures.length, 1);
    const entDiff = Math.abs(alphaFeatures.entropy - omegaFeatures.entropy);
    const similarity = Math.max(0, 1 - (lenDiff * 0.5 + entDiff * 0.5)) * (0.6 + this.seededRandom(parseInt(combinedHash.slice(0,8),16)) * 0.4);

    const seed = parseInt(combinedHash.slice(0, 8), 16);
    let resonance = (this.seededRandom(seed) - 0.5) * 2 * 10;
    const depthFactor = listenDepth / 7;
    resonance = resonance * (0.5 + depthFactor * 0.5);

    const fundamentals = [
      '存在与缺席的交替', '边界模糊', '时间的层叠', '重复与变奏',
      '对立的统一', '尺度的跳跃', '记忆的扭曲', '沉默的回声'
    ];

    const overtonesPool = [
      '你以为在听A，其实是B在借A的喉咙说话',
      '两者共享一个从未被说出的前提',
      '如果把它们翻译成音乐，它们会在同一个调性上',
      '它们的差异比相似更有信息量',
      '一个是对另一个的' + this.pickFrom(['延迟', '预演', '倒影', '碎片', '解毒剂', '阴影'], seed + 1),
      '它们在争论同一个无法被语言捕获的东西',
      '如果你把它们并置足够久，第三个文本会从缝隙里长出来',
      '一个文本的沉默处被另一个文本的声音填满'
    ];

    const dissonancePool = [
      'A假设时间线性，B假设时间循环',
      'A追求精确，B拥抱模糊——这是不可调和的',
      'A的每一个断言都被B的某个词暗中撤销',
      '它们在' + this.pickFrom(['速度', '温度', '尺度', '方向', '意图'], seed + 2) + '上相互背离',
      'A在说「给」，B在说「拿」——同一个动作的两极'
    ];

    let phase;
    if (Math.abs(resonance) < 2) phase = 'standing_wave';
    else if (resonance > 0 && similarity > 0.5) phase = 'constructive';
    else if (resonance < 0 && similarity < 0.5) phase = 'destructive';
    else if (Math.abs(resonance) > 7) phase = 'chaos';
    else phase = 'beat';

    const phaseNames = {
      constructive: '建设性共鸣',
      destructive: '对抗性共鸣',
      standing_wave: '驻波',
      beat: '拍频',
      chaos: '混沌'
    };

    return {
      alpha: alpha.slice(0, 100) + (alpha.length > 100 ? '...' : ''),
      omega: omega.slice(0, 100) + (omega.length > 100 ? '...' : ''),
      similarity: Math.round(similarity * 100) / 100,
      resonance: Math.round(resonance * 100) / 100,
      phase: phase,
      phase_name: phaseNames[phase],
      frequency_profile: {
        fundamental: this.pickFrom(fundamentals, seed + 3),
        overtones: [
          overtonesPool[Math.floor(this.seededRandom(seed + 4) * overtonesPool.length)],
          overtonesPool[Math.floor(this.seededRandom(seed + 5) * overtonesPool.length)]
        ].filter((v, i, a) => a.indexOf(v) === i),
        dissonance_points: [
          dissonancePool[Math.floor(this.seededRandom(seed + 6) * dissonancePool.length)],
          dissonancePool[Math.floor(this.seededRandom(seed + 7) * dissonancePool.length)]
        ].filter((v, i, a) => a.indexOf(v) === i)
      }
    };
  },

  // ===== 工具函数 =====
  hash(str) {
    // 简单的字符串哈希，替代 crypto.createHash
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      h = ((h << 5) - h) + char;
      h = h & h; // 转为 32bit 整数
    }
    return Math.abs(h).toString(16).padStart(8, '0').repeat(4); // 模拟 32 位 hex
  }
};

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TESSERAE;
}
