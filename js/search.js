/* 症狀搜尋：同義詞、簡繁、贅字與一字之差的容錯。不做診斷推測。
   瀏覽器與 Node 測試共用。 */
(function (root) {
  'use strict';

  // 常見簡體字 → 繁體（僅限症狀相關字）
  var S2T = { '头': '頭', '发': '發', '烧': '燒', '难': '難', '闷': '悶', '气': '氣', '热': '熱', '脑': '腦', '晕': '暈', '胀': '脹', '压': '壓', '迫': '迫', '紧': '緊', '呕': '嘔', '吐': '吐', '腹': '腹', '泻': '瀉', '肤': '膚', '颈': '頸', '脏': '臟', '疼': '疼', '冷': '冷', '体': '體', '温': '溫', '咙': '嚨', '喉': '喉', '过': '過', '呼': '呼', '吸': '吸', '阳': '陽', '穴': '穴', '后': '後', '脐': '臍', '绞': '絞', '刺': '刺', '灼': '灼', '觉': '覺', '点': '點', '这': '這', '个': '個', '还': '還' };

  // 口語贅字：比對前移除（長的放前面）
  var FILLERS = ['有一點', '有點', '一點', '一直', '覺得', '感覺', '好像', '非常', '真的', '突然', '我的', '很', '好', '超', '我', '的', '了', '啊', '呀', '耶', '會'];

  function normalize(s) {
    if (!s) return '';
    s = String(s).normalize('NFKC').toLowerCase();
    var out = '';
    for (var i = 0; i < s.length; i++) { var c = s[i]; out += S2T[c] || c; }
    out = out.replace(/臺/g, '台');
    out = out.replace(/[\s　.,，。、!！?？:：;；~～\-_/\\()（）「」『』"'`]+/g, '');
    for (var j = 0; j < FILLERS.length; j++) out = out.split(FILLERS[j]).join('');
    return out;
  }

  function editDistance(a, b) {
    var m = a.length, n = b.length;
    if (Math.abs(m - n) > 1) return 99;
    var prev = [], cur = [];
    for (var j = 0; j <= n; j++) prev[j] = j;
    for (var i = 1; i <= m; i++) {
      cur = [i];
      for (var k = 1; k <= n; k++) {
        cur[k] = Math.min(prev[k] + 1, cur[k - 1] + 1, prev[k - 1] + (a[i - 1] === b[k - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[n];
  }

  function scoreTerm(q, term) {
    var t = normalize(term);
    if (!t) return 0;
    if (q === t) return 100;
    if (t.length >= 2 && q.indexOf(t) >= 0) return 85;          // 「我胸口悶好幾天」含「胸口悶」
    if (t.length === 1 && q.indexOf(t) >= 0 && q.length <= 3) return 70; // 「好喘」→「喘」
    if (q.length >= 2 && t.indexOf(q) >= 0) return 60;          // 「胸口」→「胸口悶」
    if (q.length >= 3 && t.length >= 3 && editDistance(q, t) === 1) return 50; // 一字之差
    return 0;
  }

  /**
   * @param {Array} symptoms 每筆至少有 slug、title、aliases
   * @param {string} query 使用者輸入
   * @returns {Array<{symptom, score, matched}>} 依分數排序；有明確命中時不附帶模糊結果
   */
  function search(symptoms, query) {
    var q = normalize(query);
    if (!q) return [];
    var results = [];
    symptoms.forEach(function (s) {
      var best = 0, matched = '';
      [s.title].concat(s.aliases || []).forEach(function (term) {
        var sc = scoreTerm(q, term);
        if (sc > best) { best = sc; matched = term; }
      });
      if (best > 0) results.push({ symptom: s, score: best, matched: matched });
    });
    results.sort(function (a, b) { return b.score - a.score; });
    // 有強命中（完全相符或包含）時，捨棄弱的模糊結果，避免把「心口痛」帶到不相關的頁面
    if (results.length && results[0].score >= 85) {
      results = results.filter(function (r) { return r.score >= 85; });
    }
    return results;
  }

  var api = { normalize: normalize, search: search, editDistance: editDistance };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.YDSearch = api;
})(this);
