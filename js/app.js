/* 「你的醫生」頁面渲染。醫療文字全部來自 data.js（由 content/ 經 build 產生），本檔不含任何醫療判斷。 */
(function () {
  'use strict';
  var D = window.YD;
  var PREVIEW = D.mode === 'preview';
  var CFG = D.config;
  var EM = CFG.emergency.primary.number;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(sel) { return document.querySelector(sel); }
  function param(name) { return new URLSearchParams(location.search).get(name) || ''; }
  var AREA = { head: '頭頸部', chest: '胸部', abdomen: '腹部', back: '背部', 'whole-body': '全身', skin: '皮膚', neuro: '腦和神經', limbs: '手腳', child: '兒童' };
  var AREA_ORDER = ['head', 'neuro', 'chest', 'abdomen', 'back', 'limbs', 'skin', 'whole-body', 'child'];

  /* 單色線條圖示（裝飾用，aria-hidden） */
  var ICON_PATHS = {
    'chest-pain': '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/><path d="M8.5 11h2l1-2 1.5 4 1-2h1.5"/>',
    'shortness-of-breath': '<path d="M3 9h10a3 3 0 1 0-3-3"/><path d="M3 15h14a3 3 0 1 1-3 3"/><path d="M3 12h6"/>',
    'abdominal-pain': '<path d="M8 3.5c-2.6 3.5-2.6 13.5 0 17"/><path d="M16 3.5c2.6 3.5 2.6 13.5 0 17"/><circle cx="12" cy="12" r="1.3"/>',
    'headache': '<circle cx="12" cy="11" r="6.5"/><path d="M9.5 17.3V21M14.5 17.3V21"/><path d="M4 5l2 1.5M20 5l-2 1.5M12 1.8V3.5"/>',
    'fever': '<path d="M10 14.2V5a2 2 0 1 1 4 0v9.2a4 4 0 1 1-4 0z"/><path d="M12 9v7.5"/><path d="M17.5 6h2M17.5 9h2"/>',
    'back-pain': '<rect x="9.5" y="2.5" width="5" height="4" rx="1.5"/><rect x="9.5" y="8.5" width="5" height="4" rx="1.5"/><rect x="9.5" y="14.5" width="5" height="4" rx="1.5"/><path d="M12 19v2.5"/><path d="M5.5 16.5l2-1M18.5 16.5l-2-1"/>',
    'poisoning': '<path d="M9.5 2.5h5M10 2.5v4.2L6.5 12a5.5 5.5 0 1 0 11 0L14 6.7V2.5"/><path d="M10 14.5l4 3M14 14.5l-4 3"/>',
    'rash': '<circle cx="12" cy="12" r="8.5"/><circle cx="9" cy="9.5" r="1"/><circle cx="14.5" cy="8.5" r=".9"/><circle cx="11" cy="14" r="1.1"/><circle cx="15.5" cy="13.5" r=".9"/><circle cx="8.2" cy="13.8" r=".6"/>'
  };
  ICON_PATHS.stroke = '<path d="M12 4.5c-3.8 0-6.5 2.6-6.5 6 0 2 .9 3.6 2.4 4.6V19h8.2v-3.9c1.5-1 2.4-2.6 2.4-4.6 0-3.4-2.7-6-6.5-6z"/><path d="M12 4.5v14.5"/><path d="M14.5 9l1.5 1.5-1.5 1.5"/>';
  ICON_PATHS['memory-loss'] = '<circle cx="12" cy="11" r="7"/><path d="M9.8 9.2a2.3 2.3 0 1 1 3.2 2.1c-.7.3-1 .8-1 1.5v.4"/><path d="M12 16h.01"/>';
  ICON_PATHS.weakness = '<circle cx="12" cy="4.5" r="1.8"/><path d="M12 7v6"/><path d="M8 10l4-1 4 1"/><path d="M12 13l-2.5 7M12 13l2.5 7"/><path d="M5 20h14" stroke-dasharray="1.5 2"/>';
  ICON_PATHS.dizziness = '<circle cx="12" cy="12" r="2"/><path d="M12 5a7 7 0 0 1 7 7"/><path d="M12 19a7 7 0 0 1-7-7"/><path d="M19 12l-2-2M5 12l2 2"/>';
  ICON_PATHS.fainting = '<circle cx="7" cy="7.5" r="2"/><path d="M8.5 9.5l5 3.5h6"/><path d="M4 18h16"/><path d="M15 6h2.5L15 9h2.5"/>';
  ICON_PATHS['gi-bleeding'] = '<path d="M12 3.5s-5 5.8-5 9.5a5 5 0 0 0 10 0c0-3.7-5-9.5-5-9.5z"/><path d="M10 14.5a2 2 0 0 0 2 2"/>';
  ICON_PATHS.palpitations = '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/><path d="M7 11.5h2.5l1-2.5 2 5 1-2.5H17"/>';
  ICON_PATHS['vomiting-diarrhea'] = '<path d="M8 3.5c-2.6 3.5-2.6 13.5 0 17"/><path d="M16 3.5c2.6 3.5 2.6 13.5 0 17"/><path d="M10 10.5c1.3-1 2.7 1 4 0M10 14c1.3-1 2.7 1 4 0"/>';
  ICON_PATHS['head-injury'] = '<circle cx="12" cy="11" r="6.5"/><path d="M9.5 17.3V21M14.5 17.3V21"/><path d="M15 3.5l1.5 2.5 2.5-1-1 2.5 2.5 1.5"/>';
  ICON_PATHS['leg-swelling'] = '<path d="M9 3v9.5c0 2-1 3.5-1 5.5 0 1.7 1.3 3 3 3h4"/><path d="M14 3v8"/><path d="M14 11c2.2 1 3 3 2.5 5"/>';
  ICON_PATHS.seizure = '<path d="M13 2.5L6.5 13H12l-1 8.5L17.5 11H12z"/>';
  ICON_PATHS['coughing-blood'] = '<path d="M4 10.5c2.5-1.5 5-1.5 7 0"/><path d="M4 14c2.5-1.5 5-1.5 7 0"/><path d="M17 7.5s-3 3.5-3 5.7a3 3 0 0 0 6 0c0-2.2-3-5.7-3-5.7z"/>';
  ICON_PATHS['eye-problems'] = '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>';
  ICON_PATHS.urinary = '<path d="M12 3.5s-5 5.8-5 9.5a5 5 0 0 0 10 0c0-3.7-5-9.5-5-9.5z"/><path d="M12 11v4M10 13h4"/>';
  ICON_PATHS['sore-throat'] = '<path d="M8 3.5v5a4 4 0 0 0 8 0v-5"/><path d="M10 12.5V20M14 12.5V20"/><path d="M9.5 16h5"/>';
  ICON_PATHS['child-fever'] = ICON_PATHS.fever;
  ICON_PATHS['child-poisoning'] = ICON_PATHS.poisoning;
  function icon(slug) {
    var p = ICON_PATHS[slug] || '<circle cx="12" cy="12" r="8.5"/><path d="M12 8v5M12 16h.01"/>';
    return '<svg class="ico" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + p + '</svg>';
  }
  function symCards(list) {
    return '<ul class="sym-grid">' + list.map(function (s) {
      return '<li><a class="sym-card" href="symptom.html?slug=' + esc(s.slug) + '">' + icon(s.slug) +
        '<span class="sym-t">' + esc(s.title) + (s.status !== 'published' ? ' <span class="chip-draft">草稿</span>' : '') + '</span>' +
        '<span class="sym-a">' + esc((s.aliases || []).slice(0, 3).join('・')) + '</span>' +
        '<span class="sym-go" aria-hidden="true">→</span></a></li>';
    }).join('') + '</ul>';
  }

  /* ---------- 共用：頁首、頁尾 ---------- */
  function header() {
    var h = '<a class="skip" href="#main">跳到主要內容</a>';
    if (PREVIEW) {
      h += '<div class="preview-banner" role="note"><div class="wrap"><strong>內部預覽版</strong>：本版包含尚未經醫師審核的草稿，不可公開或提供給民眾。' +
        ' <a href="review.html">審核清單</a></div></div>';
    }
    h += '<header class="site-header"><div class="wrap">' +
      '<a class="brand" href="index.html"><span class="brand-dot" aria-hidden="true"></span><span class="brand-text">' + esc(CFG.siteName) + '<small>' + esc(CFG.tagline) + '</small></span></a>' +
      '<nav class="nav" aria-label="主要導覽">' +
      '<a class="navlink hide-sm" href="symptoms.html">症狀索引</a>' +
      '<a class="navlink hide-sm" href="about.html">關於</a>' +
      '<a class="em-pill" href="emergency.html" aria-label="緊急狀況怎麼辦，撥打 ' + esc(EM) + '"><span aria-hidden="true">⚠</span>緊急 ' + esc(EM) + '</a>' +
      '</nav></div></header>';
    document.body.insertAdjacentHTML('afterbegin', h);
  }
  function footer() {
    var f = '<footer class="site-footer"><div class="wrap">' +
      '<nav aria-label="頁尾"><a href="symptoms.html">症狀索引</a><a href="emergency.html">緊急狀況</a>' +
      '<a href="about.html#purpose">網站用途</a><a href="about.html#review">內容審核方式</a><a href="about.html#references">參考網站</a><a href="about.html#privacy">隱私政策</a>' +
      (PREVIEW ? '<a href="review.html">審核清單</a>' : '') + '</nav>' +
      '<p>本網站提供一般衛教與就醫方向，不能取代醫師診斷。如果症狀嚴重或讓你擔心，請就醫；危急時請撥打 ' + esc(EM) + '。</p>' +
      '<p>內容版本：' + esc(CFG.contentUpdatedAt) + '・服務地區：' + esc(CFG.regionName) + '</p>' +
      '</div></footer>';
    document.body.insertAdjacentHTML('beforeend', f);
  }
  function telLink(num, label) {
    return '<a class="call-btn" href="tel:' + esc(num) + '"><span aria-hidden="true">☎</span>' + esc(label || ('撥打 ' + num)) + '</a>';
  }
  function emStrip(text) {
    return '<div class="em-strip" role="region" aria-label="緊急求助"><p>' + esc(text || '可能危及生命？不要等，立即撥打 ' + EM + '。') + '</p>' + telLink(EM) + '</div>';
  }
  function draftFlag(s) { return s.status !== 'published' ? ' <span class="draft-flag">草稿・未審核</span>' : ''; }

  /* ---------- 首頁 ---------- */
  function renderHome() {
    var list = D.symptoms;
    var cards = list.length
      ? symCards(list)
      : '<div class="notice"><p><strong>症狀頁正在醫師審核中，尚未開放。</strong></p><p class="small muted">我們只公開經醫師審核的內容。現在如果身體不舒服，請就醫或諮詢醫療人員；危急時請撥打 ' + esc(EM) + '。</p></div>';
    $('#main').innerHTML =
      '<section class="hero"><div class="wrap">' +
      '<p class="eyebrow">症狀衛教・醫師審核</p>' +
      '<h1>哪裡不舒服？<br>先找到下一步。</h1>' +
      '<p class="lead">用你自己的話描述症狀，先看到現在該怎麼做，再了解可能的原因。</p>' +
      '<form class="search" role="search" action="symptoms.html" method="get">' +
      '<label for="q" class="skip">描述你的症狀</label>' +
      '<span class="search-field"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>' +
      '<input id="q" name="q" type="search" autocomplete="off" placeholder="例如：胸口悶、肚子痛、起疹子" aria-describedby="q-hint"></span>' +
      '<button type="submit">搜尋</button></form>' +
      '<p id="q-hint" class="hint">可以輸入口語說法；本網站不會記錄你輸入的內容。</p>' +
      '<div id="live" aria-live="polite"></div>' +
      '</div></section>' +
      '<div class="wrap">' +
      '<section aria-labelledby="common-h"><p class="eyebrow" id="common-h">常見症狀</p>' + cards + '</section>' +
      emStrip('胸痛、很喘、叫不醒、中風徵兆？不要等，立即撥打 ' + EM + '。') +
      '<section aria-labelledby="how-h"><p class="eyebrow" id="how-h">怎麼使用</p><ol class="steps">' +
      '<li><span class="step-n">01</span><strong>描述症狀</strong><span>用平常說話的方式輸入，例如「胸口悶」。</span></li>' +
      '<li><span class="step-n">02</span><strong>先看就醫建議</strong><span>立即求助、今天就醫，或儘快安排門診。</span></li>' +
      '<li><span class="step-n">03</span><strong>再了解可能原因</strong><span>醫師會考慮的方向與就醫前的準備。</span></li>' +
      '</ol>' +
      '<p class="small muted">內容由醫師審核並列出參考來源，不能取代醫師診斷。<a href="about.html#review">內容審核方式</a>・<a href="about.html#privacy">隱私政策</a></p></section>' +
      '</div>';
    var input = $('#q'), live = $('#live');
    input.addEventListener('input', function () {
      var r = YDSearch.search(D.symptoms, input.value);
      live.innerHTML = input.value.trim() ? resultList(r, true) : '';
    });
  }

  function resultList(r, compact) {
    if (!r.length) return compact ? '' : '';
    return '<ul class="results">' + r.map(function (x) {
      var s = x.symptom;
      return '<li><a href="symptom.html?slug=' + esc(s.slug) + '"><span class="t">' + esc(s.title) + '</span>' + draftFlag(s) +
        '<span class="a" style="display:block">也常說成：' + esc((s.aliases || []).slice(0, 5).join('、')) + '</span></a></li>';
    }).join('') + '</ul>';
  }

  /* ---------- 症狀索引 ---------- */
  function renderIndex() {
    var q = param('q');
    var html = '<div class="wrap"><h1>症狀索引</h1>' +
      '<form class="search" role="search" onsubmit="return false">' +
      '<label for="q" class="skip">搜尋症狀</label>' +
      '<input id="q" type="search" autocomplete="off" placeholder="輸入症狀或口語說法" value="' + esc(q) + '">' +
      '<button type="submit">搜尋</button></form>' +
      '<div id="out" aria-live="polite"></div>' +
      '<h2>依身體部位</h2>';
    if (!D.symptoms.length) {
      html += '<div class="notice"><p>目前尚無經醫師審核發布的症狀頁。</p></div>';
    } else {
      AREA_ORDER.forEach(function (a) {
        var items = D.symptoms.filter(function (s) { return s.bodyArea === a; });
        if (!items.length) return;
        html += '<p class="eyebrow" style="margin-top:28px">' + esc(AREA[a]) + '</p>' + symCards(items);
      });
    }
    html += emStrip() + '</div>';
    $('#main').innerHTML = html;
    var input = $('#q'), out = $('#out');
    function run() {
      var v = input.value.trim();
      if (!v) { out.innerHTML = ''; return; }
      var r = YDSearch.search(D.symptoms, v);
      if (r.length) {
        out.innerHTML = '<p class="small muted">「' + esc(v) + '」的搜尋結果：</p>' + resultList(r);
      } else {
        out.innerHTML = '<div class="notice" role="status"><p><strong>找不到「' + esc(v) + '」相關的頁面。</strong></p>' +
          '<p class="small">本網站不會猜測診斷。請試試其他說法，例如身體部位加上感覺（「肚子痛」「胸口悶」），或從下方的身體部位找。</p>' +
          '<p class="small">如果症狀很嚴重、突然發生，或讓你很擔心，請就醫或諮詢醫療人員；危急時請撥打 ' + esc(EM) + '（<a href="emergency.html">緊急狀況怎麼辦</a>）。</p></div>';
      }
    }
    input.addEventListener('input', run);
    input.form.addEventListener('submit', run);
    run();
  }

  /* ---------- 症狀頁 ---------- */
  function refs(arr, srcIndex) {
    if (!arr || !arr.length) return '';
    return '<sup class="ref">' + arr.map(function (id) {
      var n = srcIndex[id];
      return n ? '<a href="#src-' + n + '" aria-label="參考來源 ' + n + '">[' + n + ']</a>' : '';
    }).join('') + '</sup>';
  }
  function pendingFlag(it) {
    return PREVIEW && it.needsSource ? ' <span class="draft-flag" title="' + esc(it.sourceNote || '') + '">待補來源</span>' : '';
  }
  function itemList(items, srcIndex) {
    return '<ul>' + items.map(function (it) { return '<li>' + esc(it.text) + refs(it.refs, srcIndex) + pendingFlag(it) + '</li>'; }).join('') + '</ul>';
  }
  function safetyNet() {
    var t = CFG.safetyNet && CFG.safetyNet.routine;
    return t ? '<p class="safety-net" role="note"><span aria-hidden="true">⚠</span> <strong>' + esc(t) + '</strong></p>' : '';
  }
  function levelCard(cls, tag, icon, block, srcIndex, extra) {
    if (!block || !block.items || !block.items.length) return '';
    return '<section class="level ' + cls + '" aria-labelledby="lv-' + cls + '">' +
      '<span class="tag"><span aria-hidden="true">' + icon + '</span>' + tag + '</span>' +
      '<h3 id="lv-' + cls + '">' + esc(block.heading) + '</h3>' +
      (block.intro ? '<p>' + esc(block.intro) + '</p>' : '') +
      itemList(block.items, srcIndex) + (extra || '') + '</section>';
  }

  var WIDE_MQ = '(min-width: 1180px)';
  function renderSymptom() {
    var slug = param('slug');
    var s = D.symptoms.filter(function (x) { return x.slug === slug; })[0];
    if (!s) {
      document.title = '找不到頁面｜' + CFG.siteName;
      $('#main').innerHTML = '<div class="wrap"><h1>找不到這個頁面</h1><p>這個症狀頁不存在，或尚未完成醫師審核。</p>' +
        '<p><a href="symptoms.html">回症狀索引</a></p>' + emStrip() + '</div>';
      return;
    }
    document.title = s.title + '｜' + CFG.siteName;
    var srcIndex = {};
    s.sources.forEach(function (id, i) { srcIndex[id] = i + 1; });
    var a = s.actions;

    var emExtra = '';
    if (a.emergency.doNow && a.emergency.doNow.length) {
      emExtra += '<div class="donow"><h4>現在可以做的事</h4>' + itemList(a.emergency.doNow, srcIndex) + '</div>';
    }
    emExtra += '<p style="margin:12px 0 0">' + telLink(EM) + '</p>';

    var observeHtml = '';
    if (a.observe) {
      observeHtml = '<section class="level ro"><span class="tag">觀察</span><h3>' + esc(a.observe.heading) + '</h3>' +
        '<p><strong>前提：</strong></p>' + itemList(a.observe.conditions, srcIndex) +
        '<p><strong>觀察時間：</strong>' + esc(a.observe.duration) + '</p>' +
        '<p><strong>出現以下情況請重新就醫：</strong></p>' + itemList(a.observe.returnIf, srcIndex) + '</section>';
    } else if (a.observeOmittedReason) {
      observeHtml = '<p class="no-observe">' + esc(a.observeOmittedReason) + '如果不確定該怎麼做，請諮詢醫療人員。</p>';
    }

    var delayHtml = '';
    if (a.delayRisks && a.delayRisks.items && a.delayRisks.items.length) {
      delayHtml = '<section class="delay" aria-labelledby="delay-h"><h3 id="delay-h"><span aria-hidden="true">⏱</span> ' + esc(a.delayRisks.heading) + '</h3>' +
        (a.delayRisks.intro ? '<p>' + esc(a.delayRisks.intro) + '</p>' : '') + itemList(a.delayRisks.items, srcIndex) + '</section>';
    }

    var c = s.possibleCauses;
    // 腹部九宮格：以患者本人的左右為準（看圖時，右側在畫面左邊）
    var GRID = [['ruq', 'epi', 'luq'], ['rflank', 'umb', 'lflank'], ['rlq', 'pelvic', 'llq']];
    var GRID_LABEL = { ruq: '右上腹', epi: '上腹中央', luq: '左上腹', rflank: '右側腹', umb: '肚臍周圍', lflank: '左側腹', rlq: '右下腹', pelvic: '下腹中央', llq: '左下腹' };
    function bodyMap(regions) {
      var have = {};
      regions.forEach(function (r) { have[r.id] = r; });
      var cells = GRID.map(function (row) {
        return row.map(function (id) {
          var r = have[id];
          return r ? '<a class="bm-cell" href="#loc-' + esc(id) + '"><span>' + esc(GRID_LABEL[id]) + '</span><small>' + r.causes.length + ' 種</small></a>'
                   : '<span class="bm-cell bm-empty" aria-hidden="true"><span>' + esc(GRID_LABEL[id]) + '</span></span>';
        }).join('');
      }).join('');
      var extra = regions.filter(function (r) { return GRID.join(',').split(',').indexOf(r.id) < 0; });
      return '<div class="bodymap"><div class="bm-figure"><p class="bm-side" aria-hidden="true"><span>你的右邊</span><span>你的左邊</span></p>' +
        '<nav class="bm-grid" aria-label="依疼痛位置跳到可能的原因">' + cells + '</nav></div>' +
        (extra.length ? '<ul class="chips bm-extra">' + extra.map(function (r) { return '<li><a href="#loc-' + esc(r.id) + '">' + esc(r.region) + '</a></li>'; }).join('') + '</ul>' : '') +
        '</div>';
    }
    var locHtml = '';
    if (c.byLocation && c.byLocation.length) {
      locHtml = '<h3 id="by-location" style="margin-top:24px">依疼痛位置</h3>' +
        '<p class="disclaimer">' + esc(c.byLocationIntro || '') + '</p>' +
        bodyMap(c.byLocation) +
        c.byLocation.map(function (r) {
          return '<div class="cause-group loc" id="loc-' + esc(r.id) + '"><h4>' + esc(r.region) + '</h4><ul>' + r.causes.map(function (x) {
            return '<li><strong>' + esc(x.name) + '</strong>' + refs(x.refs, srcIndex) + pendingFlag(x) + '<span class="plain">' + esc(x.clues) + '</span></li>';
          }).join('') + '</ul></div>';
        }).join('');
    }
    if (c.painPatterns && c.painPatterns.length) {
      locHtml += '<h3 style="margin-top:24px">' + esc(c.patternsHeading || '依痛的型態') + '</h3>' +
        (c.patternsIntro ? '<p class="disclaimer">' + esc(c.patternsIntro) + '</p>' : '') +
        '<div class="cause-group"><ul>' + c.painPatterns.map(function (p) {
        return '<li><strong>' + esc(p.pattern) + '</strong>' + refs(p.refs, srcIndex) + pendingFlag(p) + '<span class="plain">' + esc(p.text) + '</span></li>';
      }).join('') + '</ul></div>';
    }
    function causeList(arr) {
      return '<ul>' + arr.map(function (x) { return '<li><strong>' + esc(x.name) + '</strong>' + refs(x.refs, srcIndex) + pendingFlag(x) + '<span class="plain">' + esc(x.plain) + '</span></li>'; }).join('') + '</ul>';
    }

    var feedback = CFG.feedbackEmail
      ? '<a href="mailto:' + esc(CFG.feedbackEmail) + '?subject=' + encodeURIComponent('內容回報：' + s.title) + '">回報內容錯誤或過時</a>'
      : (PREVIEW ? '<span class="warn">（尚未設定回報信箱：config.feedbackEmail）</span>' : '');

    var rf = a.emergency.items;
    var aside = '<aside class="rf-aside" aria-label="立即求助重點">' +
      '<p class="rf-tag"><span aria-hidden="true">⚠</span>立即求助</p>' +
      '<p class="rf-lead">有下列任何一項，請立即撥打 ' + esc(EM) + '：</p>' +
      '<ul>' + rf.map(function (it) { return '<li>' + esc(it.text) + '</li>'; }).join('') + '</ul>' +
      telLink(EM) + '<p class="rf-more"><a href="#now">看完整建議</a></p></aside>';
    // 審閱者決定：所有螢幕都先看可能的原因，「現在該怎麼做」放最後。
    // 立即求助的重點：寬螢幕在右側欄，手機在底部固定列。
    var WIDE = true;
    var JUMP = { now: '<a href="#now">現在該怎麼做</a>', causes: '<a href="#causes">可能的原因</a>', prepare: '<a href="#prepare">就醫前準備</a>' };
    var parts = {
      head: '<p class="crumb"><a href="symptoms.html">症狀索引</a> <span aria-hidden="true">/</span> ' + esc(AREA[s.bodyArea] || '') + '</p>' +
      (s.status !== 'published' ? '<p class="draft-flag" role="note">草稿・尚未經醫師審核，僅供內部預覽</p>' : '') +
      '<div class="sym-head">' + icon(s.slug) + '<h1>' + esc(s.title) + '</h1></div>' +
      '<p class="aliases">也常說成：' + esc(s.aliases.slice(0, 6).join('、')) + '</p>' +
      '<p class="audience">' + esc(s.audienceNote) + '</p>' +
        '<nav class="jump' + (WIDE ? ' jump-wide' : '') + '" aria-label="本頁內容">' + (WIDE ? JUMP.causes + JUMP.prepare + JUMP.now : JUMP.now + JUMP.causes + JUMP.prepare) + '</nav>',
      now: '<h2 id="now">現在該怎麼做</h2>' +
      levelCard('em', '立即求助', '⚠', a.emergency, srcIndex, emExtra) +
      levelCard('ur', '儘速就醫', '●', a.urgent, srcIndex) +
      levelCard('ro', '儘快門診', '○', a.routine, srcIndex, (a.routine && a.routine.doNow && a.routine.doNow.length ? '<div class="donow"><h4>等待看診時的照顧</h4>' + itemList(a.routine.doNow, srcIndex) + '</div>' : '') + safetyNet()) +
      observeHtml + delayHtml,
      intro: '<h2>先了解一下</h2><p>' + esc(s.summary) + '</p>' + (s.definition ? '<p>' + esc(s.definition) + refs(s.definitionRefs, srcIndex) + '</p>' : ''),
      qa: '<h2>醫師可能會問你</h2><p class="small muted">先想好這些問題的答案，可以幫助你描述症狀。這些問題不是用來自行判斷病因。</p>' +
      '<ol class="qa">' + s.keyQuestions.map(function (k) { return '<li><strong>' + esc(k.q) + '</strong><div class="why">' + esc(k.why) + '</div></li>'; }).join('') + '</ol>',
      causes: '<h2 id="causes">可能的原因</h2>' +
      (s.thinking ? '<section class="thinking" aria-labelledby="think-h"><h3 id="think-h">' + esc(s.thinking.heading) + (s.thinking.status !== 'published' ? ' <span class="draft-flag">草稿・未審核</span>' : '') + '</h3>' +
        (s.thinking.intro ? '<p class="small muted">' + esc(s.thinking.intro) + '</p>' : '') +
        '<ol class="think-steps">' + s.thinking.steps.map(function (t) { return '<li><strong>' + esc(t.title) + '</strong>' + refs(t.refs, srcIndex) + pendingFlag(t) + '<span class="plain">' + esc(t.text) + '</span></li>'; }).join('') + '</ol></section>' : '') +
      '<p class="disclaimer">以下不是診斷，也不代表發生的機率高低，只是說明醫師會考慮的方向。原因需要由醫師檢查後判斷。</p>' +
      '<div class="causes"><div class="cause-group"><h3>醫師會優先排除的嚴重原因</h3>' + causeList(c.ruleOutFirst) + '</div>' +
      '<div class="cause-group"><h3>其他較常見的原因</h3>' + causeList(c.otherCommon) + '</div></div>' +
      locHtml,
      extra: (s.specialPopulations && s.specialPopulations.length ? '<h2>特別注意</h2>' + '<div class="cause-group">' + itemList(s.specialPopulations, srcIndex) + '</div>' : '') +
      (s.links && s.links.length ? '<h2>延伸閱讀</h2><ul class="links">' + s.links.map(function (l) { return '<li><a href="' + esc(l.url) + '"' + (/^https?:/.test(l.url) ? ' rel="noopener" target="_blank"' : '') + '>' + esc(l.label) + '</a>' + (l.note ? '<br><span class="small muted">' + esc(l.note) + '</span>' : '') + '</li>'; }).join('') + '</ul>' : ''),
      prep: '<h2 id="prepare">就醫前可以準備</h2><ul>' + s.visitPreparation.map(function (v) { return '<li>' + esc(v) + '</li>'; }).join('') + '</ul>',
      src: '<h2 id="sources">審核與參考來源</h2><div class="meta"><dl>' +
      '<dt>審閱醫師</dt><dd>' + (s.reviewedBy ? esc(s.reviewedBy) + '（' + esc(s.reviewerCredentials) + '）' : '<span class="warn">尚未審核</span>') + '</dd>' +
      '<dt>最後審核</dt><dd>' + esc(s.reviewedAt || '—') + '</dd>' +
      '<dt>下次審核</dt><dd>' + esc(s.nextReviewAt || '—') + '</dd></dl>' +
      '<ol class="sources">' + s.sources.map(function (id, i) {
        var src = D.sources[id];
        return '<li id="src-' + (i + 1) + '">' + esc(src.publisher) + '. ' + esc(src.title) + '. <a href="' + esc(src.url) + '" rel="noopener" target="_blank">' + esc(src.url) + '</a></li>';
      }).join('') + '</ol>' +
      '<p class="small muted">本頁為依上述來源獨立撰寫的繁體中文衛教內容，並非翻譯。</p>' +
      (feedback ? '<p>' + feedback + '</p>' : '') + '</div>'
    };
    var order = WIDE ? ['head', 'causes', 'intro', 'qa', 'extra', 'prep', 'now', 'src'] : ['head', 'now', 'intro', 'qa', 'causes', 'extra', 'prep', 'src'];
    var html = '<div class="wrap sym-wrap' + (WIDE ? ' is-wide' : '') + '"><div class="sym-page">' +
      order.map(function (k) { return parts[k]; }).join('') +
      '</div>' + aside + '</div>' +
      '<div class="rf-bar" role="region" aria-label="立即求助"><a class="rf-bar-link" href="#now"><span aria-hidden="true">⚠</span> 什麼情況要立即求助</a>' +
      '<a class="rf-bar-call" href="tel:' + esc(EM) + '"><span aria-hidden="true">☎</span> ' + esc(EM) + '</a></div>';
    $('#main').innerHTML = html;
    // 側欄：紅色卡不在畫面上時顯示，避免重複
    var emCard = document.querySelector('.level.em'), asideEl = document.querySelector('.rf-aside');
    // 紅色卡在畫面上時隱藏側欄與底部列；其他時候顯示（直接依捲動位置判斷，不靠延遲的回呼）
    var barEl = document.querySelector('.rf-bar');
    function syncRf() {
      if (!emCard) return;
      var r = emCard.getBoundingClientRect(), vis = r.bottom > 0 && r.top < window.innerHeight;
      if (asideEl) asideEl.classList.toggle('on', !vis);
      if (barEl) barEl.classList.toggle('on', !vis);
    }
    syncRf();
    if (!renderSymptom.bound) {
      renderSymptom.bound = true;
      window.addEventListener('scroll', function () { if (renderSymptom.sync) renderSymptom.sync(); }, { passive: true });
      window.addEventListener('resize', function () { if (renderSymptom.sync) renderSymptom.sync(); });
    }
    renderSymptom.sync = syncRf;
    // 視窗寬度跨過門檻時重新排版
    if (!renderSymptom.mq && window.matchMedia) {
      renderSymptom.mq = window.matchMedia(WIDE_MQ);
      var onChange = function () { var y = window.scrollY; renderSymptom(); window.scrollTo(0, y); };
      if (renderSymptom.mq.addEventListener) renderSymptom.mq.addEventListener('change', onChange); else renderSymptom.mq.addListener(onChange);
    }
  }

  /* ---------- 緊急頁 ---------- */
  function renderEmergency() {
    var e = D.emergency;
    function childSection(b, id, ordered) {
      if (!b) return '';
      var tag = ordered ? 'ol' : 'ul';
      return '<h2 id="' + id + '">' + esc(b.heading) + (b.status !== 'published' ? ' <span class="draft-flag">草稿・未審核</span>' : '') + '</h2>' +
        (b.intro ? '<p>' + esc(b.intro) + '</p>' : '') +
        '<' + tag + ' class="cpr-steps">' + b.items.map(function (it) { return '<li>' + esc(it.text) + refs(it.refs, srcIndex) + pendingFlag(it) + '</li>'; }).join('') + '</' + tag + '>';
    }
    var fb = CFG.emergency.fallback;
    var srcIndex = {}, srcList = [];
    var html = '<div class="wrap"><h1>緊急狀況怎麼辦</h1>' +
      emStrip('如果你認為有生命危險，請立即撥打 ' + EM + '。') +
      '<p><strong>' + esc(EM) + '</strong>：' + esc(CFG.emergency.primary.label) + '，24 小時服務。</p>' +
      (fb ? '<p><strong>' + esc(fb.number) + '</strong>：' + esc(fb.label) + '。</p>' : '');
    if (e) {
      [e.callWhen, e.onThePhone, e.cpr, e.poisoning, e.childCpr, e.childChoking].filter(Boolean).forEach(function (b) {
        b.items.forEach(function (it) { (it.refs || []).forEach(function (id) { if (!srcIndex[id]) { srcList.push(id); srcIndex[id] = srcList.length; } }); });
      });
      if (e.status !== 'published') html += '<p class="draft-flag" role="note">以下內容為草稿・尚未經醫師審核</p>';
      html += '<h2>' + esc(e.callWhen.heading) + '</h2><div class="level em">' + itemList(e.callWhen.items, srcIndex) + '</div>' +
        '<h2>' + esc(e.onThePhone.heading) + '</h2>' + itemList(e.onThePhone.items, srcIndex) +
        (e.cpr ? '<h2 id="cpr">' + esc(e.cpr.heading) + '</h2>' + (e.cpr.intro ? '<p>' + esc(e.cpr.intro) + '</p>' : '') + '<ol class="cpr-steps">' + e.cpr.items.map(function (it) { return '<li>' + esc(it.text) + refs(it.refs, srcIndex) + '</li>'; }).join('') + '</ol>' : '') +
        '<h2>' + esc(e.poisoning.heading) + '</h2>' + itemList(e.poisoning.items, srcIndex) +
        '<p><a href="symptom.html?slug=poisoning">看「中毒、誤食」頁</a></p>' +
        childSection(e.childCpr, 'child-cpr', true) + childSection(e.childChoking, 'choking', true);
    }
    var contacts = CFG.otherContacts || [];
    if (contacts.length) {
      html += '<h2>其他諮詢專線</h2><ul>' + contacts.map(function (c) {
        return '<li><strong><a href="tel:' + esc(c.number.replace(/-/g, '')) + '">' + esc(c.number) + '</a></strong>　' + esc(c.label) +
          (c.verified ? '' : ' <span class="draft-flag">號碼待確認</span>') + '</li>';
      }).join('') + '</ul>';
    }
    if (e) {
      html += '<h2 id="sources">審核與參考來源</h2><div class="meta"><dl>' +
        '<dt>審閱醫師</dt><dd>' + (e.reviewedBy ? esc(e.reviewedBy) + '（' + esc(e.reviewerCredentials) + '）' : '<span class="warn">尚未審核</span>') + '</dd>' +
        '<dt>最後審核</dt><dd>' + esc(e.reviewedAt || '—') + '</dd>' +
        '<dt>下次審核</dt><dd>' + esc(e.nextReviewAt || '—') + '</dd></dl>' +
        '<ol class="sources">' + srcList.map(function (id, i) {
          var s = D.sources[id];
          return '<li id="src-' + (i + 1) + '">' + esc(s.publisher) + '. ' + esc(s.title) + '. <a href="' + esc(s.url) + '" rel="noopener" target="_blank">' + esc(s.url) + '</a></li>';
        }).join('') + '</ol>' +
        (CFG.feedbackEmail ? '<p><a href="mailto:' + esc(CFG.feedbackEmail) + '?subject=' + encodeURIComponent('內容回報：緊急狀況怎麼辦') + '">回報內容錯誤或過時</a></p>' : '') +
        '</div>';
    }
    html += '</div>';
    $('#main').innerHTML = html;
  }

  /* ---------- 審核清單（僅預覽版） ---------- */
  function renderReview() {
    if (!PREVIEW) { $('#main').innerHTML = '<div class="wrap"><h1>找不到頁面</h1></div>'; return; }
    var R = D.review;
    var html = '<div class="wrap"><h1>臨床審核清單</h1>' +
      '<p>產生時間：' + esc(D.builtAt) + '。每頁需完成下列四項審查才能發布：危險徵象、降級風險、漏判情境、特殊族群。</p>' +
      '<p class="small">發布方式：在 <code>content/symptoms/&lt;slug&gt;.json</code> 填入 reviewedBy、reviewerCredentials、reviewedAt、nextReviewAt，並把 status 改為 "published"，再執行 build。</p>';
    R.pages.forEach(function (p) {
      html += '<div class="review-card"><h2 style="margin-top:0">' + esc(p.title) + ' <span class="draft-flag">' + esc(p.status) + '</span></h2>' +
        (p.slug ? '<p><a href="symptom.html?slug=' + esc(p.slug) + '">開啟預覽</a></p>' : '<p><a href="emergency.html">開啟預覽</a></p>') +
        '<p><strong>審查重點</strong></p><ul>' +
        '<li>☐ 危險徵象：「立即求助」清單是否完整、措辭民眾能懂</li>' +
        '<li>☐ 降級風險：有沒有任何敘述可能讓危急患者延後就醫</li>' +
        '<li>☐ 漏判情境：非典型表現是否已涵蓋</li>' +
        '<li>☐ 特殊族群：年長者、孕婦、免疫低下、抗凝血藥使用者</li></ul>' +
        (p.reviewedBy ? '<p class="small muted">已發布：' + esc(p.reviewedBy) + '，' + esc(p.reviewedAt) + '；下次審閱 ' + esc(p.nextReviewAt) + '</p>' : '') +
        '<p><strong>待審閱者決定</strong></p>' + (p.reviewNotes.length ? '<ol>' + p.reviewNotes.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ol>' : '<p class="ok">沒有待決定的問題。</p>') +
        (p.reviewLog.length ? '<details><summary>處理紀錄（' + p.reviewLog.length + ' 則）</summary><ul>' + p.reviewLog.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul></details>' : '') +
        (p.unreferenced.length ? '<p class="warn">沒有附來源的敘述（' + p.unreferenced.length + '）</p><ul>' + p.unreferenced.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul>' : '<p class="ok">每一條就醫建議都有附來源。</p>') +
        '</div>';
    });
    html += '<div class="review-card"><h2 style="margin-top:0">待確認的電話</h2><ul>' + R.contacts.map(function (c) {
      return '<li><strong>' + esc(c.number) + '</strong> ' + esc(c.label) + '<br><span class="small muted">' + esc(c.verifyNote) + '</span></li>';
    }).join('') + '</ul></div>';
    html += '<div class="review-card"><h2 style="margin-top:0">參考來源連結檢查</h2><div class="table-scroll"><table><thead><tr><th>來源</th><th>狀態</th></tr></thead><tbody>' +
      Object.keys(D.sources).map(function (id) {
        var s = D.sources[id];
        return '<tr><td><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.publisher) + '：' + esc(s.title) + '</a></td><td>' +
          (s.linkCheck === 'ok' ? '<span class="ok">可開啟</span>' : '<span class="warn">網站擋自動檢查，請人工點開</span>') + '</td></tr>';
      }).join('') + '</tbody></table></div></div></div>';
    $('#main').innerHTML = html;
  }

  /* ---------- 關於 ---------- */
  function renderAbout() {
    var box = $('#site-refs');
    if (!box) return;
    var refs = Object.keys(D.sources).map(function (id) { return D.sources[id]; })
      .filter(function (s) { return s.siteReference; })
      .sort(function (a, b) { return a.siteReference.order - b.siteReference.order; });
    box.innerHTML = '<ol class="qa">' + refs.map(function (s) {
      var r = s.siteReference;
      return '<li><strong>' + esc(r.label || s.title) + '</strong>　<span class="small muted">' + esc(s.publisher) + '</span>' +
        '<div class="why">本站借鑑：' + esc(r.learnedFrom) + '</div>' +
        '<div class="small"><a href="' + esc(s.url) + '" rel="noopener" target="_blank">' + esc(s.url) + '</a></div></li>';
    }).join('') + '</ol>';
  }

  header();
  footer();
  var page = document.body.getAttribute('data-page');
  ({ home: renderHome, index: renderIndex, symptom: renderSymptom, emergency: renderEmergency, review: renderReview, about: renderAbout }[page] || function () {})();
})();
