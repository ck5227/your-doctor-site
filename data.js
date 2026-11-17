/* 由 scripts/build.mjs 產生，請勿手動修改。來源：content/ */
window.YD = {
 "mode": "public",
 "builtAt": "2026-11-17T23:19:25.762Z",
 "config": {
  "siteName": "你的醫生",
  "tagline": "依症狀了解可能疾病",
  "region": "TW",
  "regionName": "台灣",
  "contentUpdatedAt": "2026-11-17",
  "feedbackEmail": "017138@tool.caaumed.org.tw",
  "symptomOrder": [
   "chest-pain",
   "shortness-of-breath",
   "coughing-blood",
   "cough",
   "palpitations",
   "high-blood-pressure",
   "abdominal-pain",
   "gi-bleeding",
   "vomiting-diarrhea",
   "urinary",
   "pregnancy-bleeding",
   "testicle-pain",
   "back-pain",
   "leg-swelling",
   "sprain-fracture",
   "headache",
   "head-injury",
   "eye-problems",
   "nosebleed",
   "sore-throat",
   "ear-pain",
   "toothache",
   "stroke",
   "memory-loss",
   "weakness",
   "dizziness",
   "fainting",
   "seizure",
   "fever",
   "heat-illness",
   "rash",
   "burns",
   "wounds-bites",
   "poisoning",
   "snake-bee",
   "marine-injury",
   "suicidal-thoughts",
   "child-fever",
   "child-poisoning"
  ],
  "emergency": {
   "primary": {
    "number": "119",
    "label": "緊急救護（消防局救護車）",
    "verified": true,
    "source": "nfa-119"
   },
   "fallback": {
    "number": "112",
    "label": "手機收訊不佳、119 撥不通時使用；撥通後依語音按 9 轉接 119",
    "verified": true,
    "source": "nfa-119"
   }
  },
  "otherContacts": [
   {
    "id": "poison",
    "label": "臺北榮民總醫院毒藥物防治諮詢中心（24 小時）；也可撥 02-2875-7525 轉 85500",
    "number": "02-2871-7121",
    "verified": true,
    "source": "vgh-tox",
    "verifiedBy": "潘麒亘（臨床毒物專科醫師）",
    "verifiedAt": "2026-11-12"
   },
   {
    "id": "mental",
    "label": "衛福部安心專線（心理危機、自殺防治，24 小時免付費）",
    "number": "1925",
    "verified": true,
    "source": "mohw-1925"
   },
   {
    "id": "cdc",
    "label": "疾管署防疫專線（傳染病諮詢，全年無休免付費）",
    "number": "1922",
    "verified": true,
    "source": "cdc-tw"
   }
  ],
  "safety": {
   "noObserveSymptoms": [
    "chest-pain",
    "poisoning",
    "child-poisoning",
    "stroke",
    "memory-loss",
    "fainting",
    "seizure",
    "leg-swelling",
    "coughing-blood",
    "snake-bee",
    "pregnancy-bleeding",
    "testicle-pain",
    "suicidal-thoughts"
   ],
   "_noObserveNote": "列在此處的症狀不得提供「在家觀察」選項；build 會直接失敗。"
  },
  "safetyNet": {
   "routine": "可以先安排門診，不代表可以一直等。看診之前，如果症狀再次出現、變得更嚴重，或出現上方任何一項，請立即到醫院急診；危急時撥打 119。",
   "approvedBy": "潘麒亘（急診醫學專科醫師、臨床毒物專科醫師）",
   "approvedAt": "2026-11-10",
   "note": "審閱醫師指示：即使建議可以晚點看門診，也必須保守；症狀再次出現就要馬上到醫院。全站所有「儘快安排門診」區塊都會顯示這段文字。"
  },
  "siteUrl": "https://ck5227.github.io/your-doctor-site/"
 },
 "sources": {
  "nhs-chest": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Chest pain",
   "url": "https://www.nhs.uk/symptoms/chest-pain/",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok",
   "siteReference": {
    "order": 2,
    "label": "NHS 胸痛",
    "learnedFrom": "症狀頁的範本：先列需要立即求助的情況，再列一般就醫建議。"
   }
  },
  "nhs-sob": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Shortness of breath",
   "url": "https://www.nhs.uk/symptoms/shortness-of-breath/",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "nhs-abdo": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Stomach ache",
   "url": "https://www.nhs.uk/symptoms/stomach-ache/",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "nhs-headache": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Headaches",
   "url": "https://www.nhs.uk/symptoms/headaches/",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "nhs-fever": {
   "publisher": "NHS（英國國民保健署）",
   "title": "High temperature (fever) in adults",
   "url": "https://www.nhs.uk/symptoms/fever-in-adults/",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-chest": {
   "publisher": "Mayo Clinic",
   "title": "Chest pain – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/chest-pain/symptoms-causes/syc-20370838",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-sob": {
   "publisher": "Mayo Clinic",
   "title": "Shortness of breath – Causes / When to see a doctor",
   "url": "https://www.mayoclinic.org/symptoms/shortness-of-breath/basics/causes/sym-20050890",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-abdo": {
   "publisher": "Mayo Clinic",
   "title": "Abdominal pain – Causes / When to see a doctor",
   "url": "https://www.mayoclinic.org/symptoms/abdominal-pain/basics/causes/sym-20050728",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-headache": {
   "publisher": "Mayo Clinic",
   "title": "Headache – Causes / When to see a doctor",
   "url": "https://www.mayoclinic.org/symptoms/headache/basics/causes/sym-20050800",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-fever": {
   "publisher": "Mayo Clinic",
   "title": "Fever – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/fever/symptoms-causes/syc-20352759",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-anaphylaxis": {
   "publisher": "Mayo Clinic",
   "title": "Anaphylaxis – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/anaphylaxis/symptoms-causes/syc-20351468",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mlp-chest": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Chest pain",
   "url": "https://medlineplus.gov/ency/article/003079.htm",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mlp-sob": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Breathing difficulty",
   "url": "https://medlineplus.gov/ency/article/003075.htm",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mlp-abdo": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Abdominal pain",
   "url": "https://medlineplus.gov/ency/article/003120.htm",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mlp-headache": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Headache",
   "url": "https://medlineplus.gov/ency/article/003024.htm",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mlp-fever": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Fever",
   "url": "https://medlineplus.gov/ency/article/003090.htm",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "aha-mi": {
   "publisher": "American Heart Association（美國心臟協會）",
   "title": "Warning Signs of a Heart Attack",
   "url": "https://www.heart.org/health-topics/heart-attack/warning-signs-of-a-heart-attack",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "blocked",
   "siteReference": {
    "order": 8,
    "label": "美國心臟協會心肌梗塞警訊",
    "learnedFrom": "心臟病發作的警訊與「先撥打急救電話」的原則，用於胸痛與緊急協助頁。"
   }
  },
  "asa-stroke": {
   "publisher": "American Stroke Association（美國中風協會）",
   "title": "Stroke Symptoms (F.A.S.T.)",
   "url": "https://www.stroke.org/en/about-stroke/stroke-symptoms",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "blocked"
  },
  "who-dengue": {
   "publisher": "World Health Organization（世界衛生組織）",
   "title": "Dengue and severe dengue – Fact sheet",
   "url": "https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue",
   "type": "國際衛生機構",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "cdc-co": {
   "publisher": "U.S. CDC（美國疾病管制暨預防中心）",
   "title": "Carbon Monoxide (CO) Poisoning Basics",
   "url": "https://www.cdc.gov/carbon-monoxide/about/index.html",
   "type": "政府衛生機構",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "guideline-chest-2021": {
   "publisher": "Circulation 2021;144:e368–e454",
   "title": "Gulati M, et al. 2021 AHA/ACC/ASE/CHEST/SAEM/SCCT/SCMR Guideline for the Evaluation and Diagnosis of Chest Pain",
   "url": "https://doi.org/10.1161/CIR.0000000000001029",
   "type": "臨床指引",
   "checkedAt": "2026-11-10",
   "linkCheck": "blocked"
  },
  "guideline-headache-2019": {
   "publisher": "Ann Emerg Med 2019;74(4):e41–e74",
   "title": "Godwin SA, et al. ACEP Clinical Policy: Critical Issues in the Evaluation and Management of Adult Patients Presenting to the ED With Acute Headache",
   "url": "https://doi.org/10.1016/j.annemergmed.2019.07.009",
   "type": "臨床指引",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "guideline-sepsis-2021": {
   "publisher": "Crit Care Med 2021;49(11):e1063–e1143",
   "title": "Evans L, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021",
   "url": "https://doi.org/10.1097/CCM.0000000000005337",
   "type": "臨床指引",
   "checkedAt": "2026-11-10",
   "linkCheck": "blocked"
  },
  "nfa-119": {
   "publisher": "內政部消防署",
   "title": "119、112 報案說明",
   "url": "https://www.nfa.gov.tw/cht/?code=list&ids=66",
   "type": "台灣政府",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "nfa-report": {
   "publisher": "內政部消防署",
   "title": "119 報案要領",
   "url": "https://www.nfa.gov.tw/cht/index.php?code=list&ids=68",
   "type": "台灣政府",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mohw-1925": {
   "publisher": "衛生福利部",
   "title": "1925 安心專線（24 小時免付費）",
   "url": "https://www.mohw.gov.tw/cp-16-57989-1.html",
   "type": "台灣政府",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "cdc-tw": {
   "publisher": "衛生福利部疾病管制署",
   "title": "疾管署首頁（防疫專線 1922 或 0800-001922）",
   "url": "https://www.cdc.gov.tw/",
   "type": "台灣政府",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mlp-poisoning": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Poisoning first aid",
   "url": "https://medlineplus.gov/ency/article/007579.htm",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "nhs-poisoning": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Poisoning",
   "url": "https://www.nhs.uk/conditions/poisoning/",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-poisoning": {
   "publisher": "Mayo Clinic",
   "title": "Poisoning: First aid",
   "url": "https://www.mayoclinic.org/first-aid/first-aid-poisoning/basics/art-20056657",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "poison-org": {
   "publisher": "National Capital Poison Center（美國毒物中心）",
   "title": "First Aid for Poisonings",
   "url": "https://www.poison.org/first-aid-for-poisonings",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "hrsa-poison": {
   "publisher": "U.S. HRSA Poison Help",
   "title": "Calling Poison Help – FAQ",
   "url": "https://poisonhelp.hrsa.gov/faq/calling-poison-help",
   "type": "政府衛生機構",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-appendicitis": {
   "publisher": "Mayo Clinic",
   "title": "Appendicitis – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/appendicitis/symptoms-causes/syc-20369543",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mlp-appendicitis": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Appendicitis",
   "url": "https://medlineplus.gov/ency/article/000256.htm",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "nhs-appendicitis": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Appendicitis",
   "url": "https://www.nhs.uk/conditions/appendicitis/",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-kidneystones": {
   "publisher": "Mayo Clinic",
   "title": "Kidney stones – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/kidney-stones/symptoms-causes/syc-20355755",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mlp-kidneystones": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Kidney stones",
   "url": "https://medlineplus.gov/ency/article/000458.htm",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "nhs-kidneystones": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Kidney stones",
   "url": "https://www.nhs.uk/conditions/kidney-stones/",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-gallstones": {
   "publisher": "Mayo Clinic",
   "title": "Gallstones – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/gallstones/symptoms-causes/syc-20354214",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-diverticulitis": {
   "publisher": "Mayo Clinic",
   "title": "Diverticulitis – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/diverticulitis/symptoms-causes/syc-20371758",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-pancreatitis": {
   "publisher": "Mayo Clinic",
   "title": "Pancreatitis – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/pancreatitis/symptoms-causes/syc-20360227",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-ectopic": {
   "publisher": "Mayo Clinic",
   "title": "Ectopic pregnancy – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/ectopic-pregnancy/symptoms-causes/syc-20372088",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mlp-rash": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Rashes",
   "url": "https://medlineplus.gov/ency/article/003220.htm",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mlp-hives": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Hives",
   "url": "https://medlineplus.gov/ency/article/000845.htm",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "nhs-hives": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Hives",
   "url": "https://www.nhs.uk/conditions/hives/",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "nhs-anaphylaxis": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Anaphylaxis",
   "url": "https://www.nhs.uk/conditions/anaphylaxis/",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "nhs-allergies": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Allergies",
   "url": "https://www.nhs.uk/conditions/allergies/",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "nhs-sjs": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Stevens-Johnson syndrome",
   "url": "https://www.nhs.uk/conditions/stevens-johnson-syndrome/",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-sjs": {
   "publisher": "Mayo Clinic",
   "title": "Stevens-Johnson syndrome – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/stevens-johnson-syndrome/symptoms-causes/syc-20355936",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "nhs-meningitis": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Meningitis",
   "url": "https://www.nhs.uk/conditions/meningitis/",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-drug-allergy": {
   "publisher": "Mayo Clinic",
   "title": "Drug allergy – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/drug-allergy/symptoms-causes/syc-20371835",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-cellulitis": {
   "publisher": "Mayo Clinic",
   "title": "Cellulitis – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/cellulitis/symptoms-causes/syc-20370762",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-shingles": {
   "publisher": "Mayo Clinic",
   "title": "Shingles – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/shingles/symptoms-causes/syc-20353054",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-hives": {
   "publisher": "Mayo Clinic",
   "title": "Chronic hives – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/chronic-hives/symptoms-causes/syc-20352719",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-food-allergy": {
   "publisher": "Mayo Clinic",
   "title": "Food allergy – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/food-allergy/symptoms-causes/syc-20355095",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mohw-cbz": {
   "publisher": "衛生福利部（原衛生署食品藥物管理局）",
   "title": "含 Carbamazepine 成分藥品的臨床效益仍高於風險，高危險族群宜進行 HLA-B*1502 基因檢測",
   "url": "https://www.mohw.gov.tw/cp-16-26506-1.html",
   "type": "台灣政府",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mohw-nhi-hla": {
   "publisher": "衛生福利部",
   "title": "全民健康保險自 99 年 6 月 1 日起新增、修訂 19 項支付標準（HLA-B 1502 基因檢測）",
   "url": "https://www.mohw.gov.tw/cp-16-26435-1.html",
   "type": "台灣政府",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "nhs-back": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Back pain",
   "url": "https://www.nhs.uk/conditions/back-pain/",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mlp-lbp": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Low back pain – acute",
   "url": "https://medlineplus.gov/ency/article/007425.htm",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-back": {
   "publisher": "Mayo Clinic",
   "title": "Back pain – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/back-pain/symptoms-causes/syc-20369906",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "nhs-sciatica": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Sciatica",
   "url": "https://www.nhs.uk/conditions/sciatica/",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-aaa": {
   "publisher": "Mayo Clinic",
   "title": "Abdominal aortic aneurysm – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/abdominal-aortic-aneurysm/symptoms-causes/syc-20350688",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "nhs-aaa": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Abdominal aortic aneurysm",
   "url": "https://www.nhs.uk/conditions/abdominal-aortic-aneurysm/",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-kidney-infection": {
   "publisher": "Mayo Clinic",
   "title": "Kidney infection – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/kidney-infection/symptoms-causes/syc-20353387",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "mayo-herniated": {
   "publisher": "Mayo Clinic",
   "title": "Herniated disk – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/herniated-disk/symptoms-causes/syc-20354095",
   "type": "衛教",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok"
  },
  "nhs-index": {
   "publisher": "NHS（英國國民保健署）",
   "title": "NHS 症狀索引（Symptoms A to Z）",
   "url": "https://www.nhs.uk/symptoms/",
   "type": "編輯參考",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok",
   "siteReference": {
    "order": 1,
    "learnedFrom": "症狀導覽方式；每頁先給明確的立即求助與一般就醫建議；短句白話。"
   }
  },
  "mlp-index": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "MedlinePlus 症狀索引",
   "url": "https://medlineplus.gov/symptoms.html",
   "type": "編輯參考",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok",
   "siteReference": {
    "order": 3,
    "learnedFrom": "白話衛教寫法、來源透明、標示更新日期。"
   }
  },
  "mlp-evaluating": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "MedlinePlus 醫療資訊品質評估（Evaluating Health Information）",
   "url": "https://medlineplus.gov/evaluatinghealthinformation.html",
   "type": "編輯參考",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok",
   "siteReference": {
    "order": 4,
    "learnedFrom": "判斷健康資訊可信度的原則：誰撰寫、誰審核、依據為何、何時更新。本站每頁的審閱者與來源標示依此設計。"
   }
  },
  "hd-checker": {
   "publisher": "healthdirect Australia（澳洲政府健康資訊服務）",
   "title": "healthdirect 症狀檢查器（Symptom Checker）",
   "url": "https://www.healthdirect.gov.au/symptom-checker",
   "type": "編輯參考",
   "checkedAt": "2026-11-10",
   "linkCheck": "blocked",
   "siteReference": {
    "order": 5,
    "learnedFrom": "先確認危險情況，再建議下一步的順序；逐題問答。本站不使用自動分流演算法。"
   }
  },
  "hd-quality": {
   "publisher": "healthdirect Australia（澳洲政府健康資訊服務）",
   "title": "healthdirect 分流服務的品質與安全聲明",
   "url": "https://about.healthdirect.gov.au/quality-and-safety-of-healthdirects-triage-service-statement",
   "type": "編輯參考",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok",
   "siteReference": {
    "order": 6,
    "learnedFrom": "臨床治理：內容由臨床人員審核、定期複審、接受回報。"
   }
  },
  "mayo-index": {
   "publisher": "Mayo Clinic",
   "title": "Mayo Clinic 症狀索引",
   "url": "https://www.mayoclinic.org/symptoms",
   "type": "編輯參考",
   "checkedAt": "2026-11-10",
   "linkCheck": "ok",
   "siteReference": {
    "order": 7,
    "learnedFrom": "讓民眾由症狀了解可能原因。本站列出原因時不排序機率，也不當作診斷。"
   }
  },
  "nhs-heart-attack": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Heart attack",
   "url": "https://www.nhs.uk/conditions/heart-attack/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-angina": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Angina",
   "url": "https://www.nhs.uk/conditions/angina/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-pe": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Pulmonary embolism",
   "url": "https://www.nhs.uk/conditions/pulmonary-embolism/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-asthma": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Asthma",
   "url": "https://www.nhs.uk/conditions/asthma/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-heart-failure": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Heart failure",
   "url": "https://www.nhs.uk/conditions/heart-failure/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-pneumonia": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Pneumonia",
   "url": "https://www.nhs.uk/conditions/pneumonia/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-copd": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Chronic obstructive pulmonary disease (COPD)",
   "url": "https://www.nhs.uk/conditions/chronic-obstructive-pulmonary-disease-copd/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-panic": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Panic disorder",
   "url": "https://www.nhs.uk/mental-health/conditions/panic-disorder/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-anaemia": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Iron deficiency anaemia",
   "url": "https://www.nhs.uk/conditions/iron-deficiency-anaemia/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-co": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Carbon monoxide poisoning",
   "url": "https://www.nhs.uk/conditions/carbon-monoxide-poisoning/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-migraine": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Migraine",
   "url": "https://www.nhs.uk/conditions/migraine/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-tension": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Tension headaches",
   "url": "https://www.nhs.uk/conditions/tension-headaches/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-cluster": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Cluster headaches",
   "url": "https://www.nhs.uk/conditions/cluster-headaches/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-gca": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Temporal arteritis",
   "url": "https://www.nhs.uk/conditions/temporal-arteritis/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-sah": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Subarachnoid haemorrhage",
   "url": "https://www.nhs.uk/conditions/subarachnoid-haemorrhage/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-sinusitis": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Sinusitis (sinus infection)",
   "url": "https://www.nhs.uk/conditions/sinusitis-sinus-infection/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-glaucoma": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Glaucoma",
   "url": "https://www.nhs.uk/conditions/glaucoma/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-flu": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Flu",
   "url": "https://www.nhs.uk/conditions/flu/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-uti": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Urinary tract infections (UTIs)",
   "url": "https://www.nhs.uk/conditions/urinary-tract-infections-utis/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-heat": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Heat exhaustion and heatstroke",
   "url": "https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-sepsis": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Sepsis",
   "url": "https://www.nhs.uk/conditions/sepsis/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-dv": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Diarrhoea and vomiting",
   "url": "https://www.nhs.uk/symptoms/diarrhoea-and-vomiting/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nhs-tonsillitis": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Tonsillitis",
   "url": "https://www.nhs.uk/conditions/tonsillitis/",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "mayo-dissection": {
   "publisher": "Mayo Clinic",
   "title": "Aortic dissection – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/aortic-dissection/symptoms-causes/syc-20369496",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "mayo-pneumothorax": {
   "publisher": "Mayo Clinic",
   "title": "Pneumothorax – Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/pneumothorax/symptoms-causes/syc-20350367",
   "type": "衛教",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "mohw-stroke": {
   "publisher": "衛生福利部（國民健康署、台灣腦中風學會）",
   "title": "2021 世界中風日：「微笑、舉手、說你好」口訣，助民眾正確辨識速撥 119 送醫",
   "url": "https://www.mohw.gov.tw/cp-5021-63690-1.html",
   "type": "台灣政府",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "nfa-cpr": {
   "publisher": "內政部消防署",
   "title": "大家不可不會的 CPR：民眾版成人心肺復甦術（叫、叫、壓、電）",
   "url": "https://www.nfa.gov.tw/cht/index.php?article_id=905&code=list&flag=detail&ids=21",
   "type": "台灣政府",
   "checkedAt": "2026-11-11",
   "linkCheck": "ok"
  },
  "vgh-tox": {
   "publisher": "臺北榮民總醫院",
   "title": "毒藥物防治諮詢中心（24 小時諮詢專線）",
   "url": "https://vghtpehh.vghtpe.gov.tw/0002251.html",
   "type": "台灣醫療機構",
   "checkedAt": "2026-11-12",
   "linkCheck": "blocked",
   "verifiedBy": "潘麒亘（臨床毒物專科醫師）於 2026-11-12 確認電話"
  },
  "tox-site": {
   "publisher": "臨床毒物學精要",
   "title": "臨床毒物學精要：中毒症候群、解毒劑與臨床陷阱快速查詢（專業人員參考）",
   "url": "https://ck5227.github.io/toxicology/",
   "type": "專業參考",
   "checkedAt": "2026-11-12",
   "linkCheck": "ok"
  },
  "nhs-fever-child": {
   "publisher": "NHS（英國國民保健署）",
   "title": "High temperature (fever) in children",
   "url": "https://www.nhs.uk/conditions/fever-in-children/",
   "type": "衛教",
   "checkedAt": "2026-11-12",
   "linkCheck": "ok"
  },
  "nhs-baby-ill": {
   "publisher": "NHS（英國國民保健署）",
   "title": "When to get urgent medical help for babies and children under 5",
   "url": "https://www.nhs.uk/baby/health/is-your-baby-or-toddler-seriously-ill/",
   "type": "衛教",
   "checkedAt": "2026-11-12",
   "linkCheck": "ok"
  },
  "nhs-febrile": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Febrile seizures",
   "url": "https://www.nhs.uk/conditions/febrile-seizures/",
   "type": "衛教",
   "checkedAt": "2026-11-12",
   "linkCheck": "ok"
  },
  "nhs-kawasaki": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Kawasaki disease",
   "url": "https://www.nhs.uk/conditions/kawasaki-disease/",
   "type": "衛教",
   "checkedAt": "2026-11-12",
   "linkCheck": "ok"
  },
  "nhs-bronchiolitis": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Bronchiolitis",
   "url": "https://www.nhs.uk/conditions/bronchiolitis/",
   "type": "衛教",
   "checkedAt": "2026-11-12",
   "linkCheck": "ok"
  },
  "aap-fever": {
   "publisher": "American Academy of Pediatrics（美國兒科醫學會，HealthyChildren.org）",
   "title": "Fever: When to Call the Pediatrician",
   "url": "https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/When-to-Call-the-Pediatrician.aspx",
   "type": "衛教",
   "checkedAt": "2026-11-12",
   "linkCheck": "ok"
  },
  "poison-patch": {
   "publisher": "National Capital Poison Center（美國毒物中心）",
   "title": "Using skin patch medicines safely",
   "url": "https://www.poison.org/articles/using-skin-patch-medicines-safely",
   "type": "衛教",
   "checkedAt": "2026-11-12",
   "linkCheck": "ok"
  },
  "sja-child-cpr": {
   "publisher": "St John Ambulance（英國聖約翰救傷隊）",
   "title": "How to do CPR on a child",
   "url": "https://www.sja.org.uk/first-aid-advice/child-cpr/",
   "type": "衛教",
   "checkedAt": "2026-11-12",
   "linkCheck": "ok"
  },
  "sja-baby-cpr": {
   "publisher": "St John Ambulance（英國聖約翰救傷隊）",
   "title": "How to do CPR on a baby (under one year old)",
   "url": "https://www.sja.org.uk/first-aid-advice/baby-cpr/",
   "type": "衛教",
   "checkedAt": "2026-11-12",
   "linkCheck": "ok"
  },
  "sja-child-choking": {
   "publisher": "St John Ambulance（英國聖約翰救傷隊）",
   "title": "Choking child",
   "url": "https://www.sja.org.uk/first-aid-advice/child-choking/",
   "type": "衛教",
   "checkedAt": "2026-11-12",
   "linkCheck": "ok"
  },
  "sja-baby-choking": {
   "publisher": "St John Ambulance（英國聖約翰救傷隊）",
   "title": "Choking baby (under one year old)",
   "url": "https://www.sja.org.uk/first-aid-advice/baby-choking/",
   "type": "衛教",
   "checkedAt": "2026-11-12",
   "linkCheck": "ok"
  },
  "mohw-cpr": {
   "publisher": "衛生福利部",
   "title": "民眾版心肺復甦術參考指引摘要表（110 年 4 月 23 日修訂，含成人、兒童、嬰兒）",
   "url": "https://dep.mohw.gov.tw/DOMA/dl-13882-22bd0839-e9ad-45b6-8665-1bdd2344446a.html",
   "type": "台灣政府",
   "checkedAt": "2026-11-12",
   "linkCheck": "ok"
  },
  "nhs-stroke": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Symptoms of a stroke",
   "url": "https://www.nhs.uk/conditions/stroke/symptoms/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-tia": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Transient ischaemic attack (TIA)",
   "url": "https://www.nhs.uk/conditions/transient-ischaemic-attack-tia/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mayo-stroke": {
   "publisher": "Mayo Clinic",
   "title": "Stroke: Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/stroke/symptoms-causes/syc-20350113",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mayo-tga": {
   "publisher": "Mayo Clinic",
   "title": "Transient global amnesia: Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/transient-global-amnesia/symptoms-causes/syc-20378531",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mlp-memory": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Memory loss",
   "url": "https://medlineplus.gov/ency/article/003257.htm",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-confusion": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Sudden confusion (delirium)",
   "url": "https://www.nhs.uk/conditions/confusion/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mlp-weakness": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Weakness",
   "url": "https://medlineplus.gov/ency/article/003174.htm",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-gbs": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Guillain-Barré syndrome",
   "url": "https://www.nhs.uk/conditions/guillain-barre-syndrome/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mlp-hypokalemia": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Low blood potassium",
   "url": "https://medlineplus.gov/ency/article/000479.htm",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mlp-hpp": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Hypokalemic periodic paralysis",
   "url": "https://medlineplus.gov/ency/article/000312.htm",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mlp-tpp": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Thyrotoxic periodic paralysis",
   "url": "https://medlineplus.gov/ency/article/000319.htm",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-hypo": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Low blood sugar (hypoglycaemia)",
   "url": "https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-mg": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Myasthenia gravis",
   "url": "https://www.nhs.uk/conditions/myasthenia-gravis/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-tired": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Tiredness and fatigue",
   "url": "https://www.nhs.uk/conditions/tiredness-and-fatigue/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-bells": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Bell's palsy",
   "url": "https://www.nhs.uk/conditions/bells-palsy/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mayo-bells": {
   "publisher": "Mayo Clinic",
   "title": "Bell's palsy: Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/bells-palsy/symptoms-causes/syc-20370028",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mlp-facial": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Facial paralysis",
   "url": "https://medlineplus.gov/ency/article/003028.htm",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mayo-tm": {
   "publisher": "Mayo Clinic",
   "title": "Transverse myelitis: Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/transverse-myelitis/symptoms-causes/syc-20354726",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-dizzy": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Dizziness",
   "url": "https://www.nhs.uk/symptoms/dizziness/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-vertigo": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Vertigo",
   "url": "https://www.nhs.uk/conditions/vertigo/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mayo-dizzy": {
   "publisher": "Mayo Clinic",
   "title": "Dizziness: Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/dizziness/symptoms-causes/syc-20371787",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-labyrinthitis": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Labyrinthitis and vestibular neuritis",
   "url": "https://www.nhs.uk/conditions/labyrinthitis/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-faint": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Fainting",
   "url": "https://www.nhs.uk/symptoms/fainting/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mlp-faint": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Fainting",
   "url": "https://medlineplus.gov/ency/article/003092.htm",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mayo-faint-fa": {
   "publisher": "Mayo Clinic",
   "title": "Fainting: First aid",
   "url": "https://www.mayoclinic.org/first-aid/first-aid-fainting/basics/art-20056606",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mayo-syncope": {
   "publisher": "Mayo Clinic",
   "title": "Vasovagal syncope: Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/vasovagal-syncope/symptoms-causes/syc-20350527",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-vomit-blood": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Vomiting blood",
   "url": "https://www.nhs.uk/symptoms/vomiting-blood/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-blood-poo": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Bleeding from the bottom (rectal bleeding)",
   "url": "https://www.nhs.uk/symptoms/bleeding-from-the-bottom-rectal-bleeding/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mayo-gi-bleed": {
   "publisher": "Mayo Clinic",
   "title": "Gastrointestinal bleeding: Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/gastrointestinal-bleeding/symptoms-causes/syc-20372729",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mlp-black-stool": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Black or tarry stools",
   "url": "https://medlineplus.gov/ency/article/003130.htm",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-palp": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Heart palpitations",
   "url": "https://www.nhs.uk/symptoms/heart-palpitations/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mayo-palp": {
   "publisher": "Mayo Clinic",
   "title": "Heart palpitations: Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/heart-palpitations/symptoms-causes/syc-20373196",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-af": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Atrial fibrillation: Symptoms",
   "url": "https://www.nhs.uk/conditions/atrial-fibrillation/symptoms/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-svt": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Supraventricular tachycardia (SVT)",
   "url": "https://www.nhs.uk/conditions/supraventricular-tachycardia-svt/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-dehyd": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Dehydration",
   "url": "https://www.nhs.uk/conditions/dehydration/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-food-poison": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Food poisoning",
   "url": "https://www.nhs.uk/conditions/food-poisoning/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-head": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Head injury and concussion",
   "url": "https://www.nhs.uk/conditions/head-injury-and-concussion/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mayo-head-fa": {
   "publisher": "Mayo Clinic",
   "title": "Head trauma: First aid",
   "url": "https://www.mayoclinic.org/first-aid/first-aid-head-trauma/basics/art-20056626",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-dvt": {
   "publisher": "NHS（英國國民保健署）",
   "title": "DVT (deep vein thrombosis)",
   "url": "https://www.nhs.uk/conditions/deep-vein-thrombosis-dvt/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mayo-dvt": {
   "publisher": "Mayo Clinic",
   "title": "Deep vein thrombosis (DVT): Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/deep-vein-thrombosis/symptoms-causes/syc-20352557",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-cellulitis": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Cellulitis",
   "url": "https://www.nhs.uk/conditions/cellulitis/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-epilepsy": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Epilepsy",
   "url": "https://www.nhs.uk/conditions/epilepsy/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mlp-seizure": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Seizures",
   "url": "https://medlineplus.gov/ency/article/003200.htm",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mayo-seizure": {
   "publisher": "Mayo Clinic",
   "title": "Seizures: Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/seizure/symptoms-causes/syc-20365711",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-cough-blood": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Coughing up blood (blood in phlegm)",
   "url": "https://www.nhs.uk/symptoms/coughing-up-blood/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mlp-cough-blood": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Coughing up blood",
   "url": "https://medlineplus.gov/ency/article/003073.htm",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-red-eye": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Red eye",
   "url": "https://www.nhs.uk/symptoms/red-eye/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-eye-pain": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Eye pain",
   "url": "https://www.nhs.uk/symptoms/eye-pain/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-vision-loss": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Vision loss",
   "url": "https://www.nhs.uk/conditions/vision-loss/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-eye-injury": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Eye injuries",
   "url": "https://www.nhs.uk/conditions/eye-injuries/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-retinal-detach": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Detached retina (retinal detachment)",
   "url": "https://www.nhs.uk/conditions/detached-retina-retinal-detachment/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-blood-urine": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Blood in urine",
   "url": "https://www.nhs.uk/symptoms/blood-in-urine/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mlp-dysuria": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Urination - painful",
   "url": "https://medlineplus.gov/ency/article/003145.htm",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-sore-throat": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Sore throat",
   "url": "https://www.nhs.uk/conditions/sore-throat/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mayo-epiglottitis": {
   "publisher": "Mayo Clinic",
   "title": "Epiglottitis: Symptoms and causes",
   "url": "https://www.mayoclinic.org/diseases-conditions/epiglottitis/symptoms-causes/syc-20372227",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "tsem-snake": {
   "publisher": "台灣急診醫學會（台灣急診醫學通訊 3(4)，2020）",
   "title": "台灣蛇咬傷與蜂螫的急性處置：文獻回顧（何政軒、白豐誠、蔡適鴻，三軍總醫院急診醫學部）",
   "url": "https://www.sem.org.tw/EJournal/Detail/248",
   "type": "台灣專業學會",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "tsem-marine": {
   "publisher": "台灣急診醫學會（台灣急診醫學通訊 3(4)：e2020030402，2020）",
   "title": "常見的海洋生物傷口處置（莫心怡、翁健瑞、馬漢平，雙和醫院急診部）",
   "url": "https://www.sem.org.tw/EJournal/Detail/236",
   "type": "台灣專業學會",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mohw-snake": {
   "publisher": "衛生福利部疾病管制署",
   "title": "清明連假民眾如至野外山區，請慎防毒蛇咬傷，如被毒蛇咬傷應速就醫注射抗蛇毒血清治療（五要五不）",
   "url": "https://mohw.gov.tw/cp-16-82064-1.html",
   "type": "台灣政府",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-stings": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Insect bites and stings",
   "url": "https://www.nhs.uk/conditions/insect-bites-and-stings/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "tsem-chem": {
   "publisher": "台灣急診醫學會（台灣急診醫學通訊 3(4)：e2020030401，2020）",
   "title": "化學物質濺身的緊急處置（廖婉如、鄧昭芳、黃獻皞，臺北榮民總醫院急診部、臨床毒物與職業醫學科）",
   "url": "https://www.sem.org.tw/EJournal/Detail/235",
   "type": "台灣專業學會",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-burns": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Burns and scalds",
   "url": "https://www.nhs.uk/conditions/burns-and-scalds/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-nosebleed": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Nosebleed",
   "url": "https://www.nhs.uk/conditions/nosebleed/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-cuts": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Cuts and grazes",
   "url": "https://www.nhs.uk/conditions/cuts-and-grazes/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-bites": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Animal and human bites",
   "url": "https://www.nhs.uk/conditions/animal-and-human-bites/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-tetanus": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Tetanus",
   "url": "https://www.nhs.uk/conditions/tetanus/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mohw-rabies": {
   "publisher": "衛生福利部疾病管制署",
   "title": "國內發生2起狂犬病陽性鼬獾咬傷人事件，請民眾勿接觸野生動物，不慎遭抓咬傷請儘速就醫",
   "url": "https://www.mohw.gov.tw/cp-3791-39890-1.html",
   "type": "台灣政府",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-sprain": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Sprains and strains",
   "url": "https://www.nhs.uk/conditions/sprains-and-strains/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-broken-arm": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Broken arm or wrist",
   "url": "https://www.nhs.uk/conditions/broken-arm-or-wrist/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-broken-ankle": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Broken ankle",
   "url": "https://www.nhs.uk/conditions/broken-ankle/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-cough": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Cough",
   "url": "https://www.nhs.uk/conditions/cough/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-tb": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Tuberculosis (TB)",
   "url": "https://www.nhs.uk/conditions/tuberculosis-tb/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mohw-tb": {
   "publisher": "衛生福利部疾病管制署",
   "title": "「舉手一起篩，結核說掰掰」世界結核病日記者會（2025）",
   "url": "https://www.mohw.gov.tw/cp-16-81981-1.html",
   "type": "台灣政府",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-earache": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Earache",
   "url": "https://www.nhs.uk/conditions/earache/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-ear-infection": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Ear infections",
   "url": "https://www.nhs.uk/conditions/ear-infections/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-mastoiditis": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Mastoiditis",
   "url": "https://www.nhs.uk/conditions/mastoiditis/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-toothache": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Toothache",
   "url": "https://www.nhs.uk/conditions/toothache/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-dental-abscess": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Dental abscess",
   "url": "https://www.nhs.uk/conditions/dental-abscess/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-preg-bleed": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Vaginal bleeding in pregnancy",
   "url": "https://www.nhs.uk/pregnancy/related-conditions/common-symptoms/vaginal-bleeding/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-miscarriage": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Miscarriage",
   "url": "https://www.nhs.uk/conditions/miscarriage/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-ectopic": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Ectopic pregnancy",
   "url": "https://www.nhs.uk/conditions/ectopic-pregnancy/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-testicle": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Testicle pain",
   "url": "https://www.nhs.uk/conditions/testicle-pain/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-bp": {
   "publisher": "NHS（英國國民保健署）",
   "title": "High blood pressure",
   "url": "https://www.nhs.uk/conditions/high-blood-pressure/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mayo-htn-crisis": {
   "publisher": "Mayo Clinic",
   "title": "Hypertensive crisis: What are the symptoms?",
   "url": "https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/expert-answers/hypertensive-crisis/faq-20058491",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-suicidal": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Help for suicidal thoughts",
   "url": "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "nhs-mh-crisis": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Where to get urgent help for mental health",
   "url": "https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/",
   "type": "衛教",
   "checkedAt": "2026-11-17",
   "linkCheck": "ok"
  },
  "mlp-burns": {
   "publisher": "MedlinePlus（美國國家醫學圖書館）",
   "title": "Burns",
   "url": "https://medlineplus.gov/ency/article/000030.htm",
   "type": "衛教",
   "checkedAt": "2026-11-18",
   "linkCheck": "ok"
  },
  "nhs-asthma-attack": {
   "publisher": "NHS（英國國民保健署）",
   "title": "Asthma attack",
   "url": "https://www.nhs.uk/conditions/asthma/asthma-attack/",
   "type": "衛教",
   "checkedAt": "2026-11-18",
   "linkCheck": "ok"
  },
  "nice-head": {
   "publisher": "NICE（英國國家健康與照顧卓越研究院）",
   "title": "Head injury: assessment and early management (NG232)",
   "url": "https://www.nice.org.uk/guidance/ng232/chapter/Recommendations",
   "type": "指引",
   "checkedAt": "2026-11-18",
   "linkCheck": "ok"
  },
  "cdc-tetanus": {
   "publisher": "CDC（美國疾病管制與預防中心）",
   "title": "Clinical Guidance for Wound Management to Prevent Tetanus",
   "url": "https://www.cdc.gov/tetanus/hcp/clinical-guidance/index.html",
   "type": "指引",
   "checkedAt": "2026-11-18",
   "linkCheck": "ok"
  }
 },
 "symptoms": [
  {
   "slug": "chest-pain",
   "title": "胸痛",
   "aliases": [
    "胸口痛",
    "胸口悶",
    "胸悶",
    "心口痛",
    "心口悶",
    "胸口緊",
    "胸口壓迫感",
    "胸部壓迫",
    "胸口刺痛",
    "心臟痛",
    "心痛",
    "胸口灼熱",
    "胸口重重的",
    "胸部疼痛"
   ],
   "bodyArea": "chest",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。兒童胸痛請直接諮詢醫師。",
   "summary": "胸痛可能來自心臟、肺部、大血管、腸胃或肌肉。有些原因會在短時間內危及生命，而且心臟病發作的痛不一定很劇烈，也可能像胃痛或燒灼感。所以新發生或說不出原因的胸痛，都應該立即讓醫療人員評估。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-11",
   "nextReviewAt": "2027-11-11",
   "actions": {
    "emergency": {
     "heading": "立即撥打 119",
     "intro": "出現下列任何一項，請馬上撥打 119，不要等它自己好：",
     "items": [
      {
       "text": "新發生、說不出原因的胸痛、胸悶或壓迫感——即使只有這一項，也要撥打 119",
       "refs": [
        "mayo-chest"
       ]
      },
      {
       "text": "突然發生的胸痛，或胸口緊、重、像被壓住，而且沒有消退",
       "refs": [
        "nhs-chest",
        "mayo-chest"
       ]
      },
      {
       "text": "痛的感覺像燒灼感、消化不良或胃痛——心臟病發作也可能是這種感覺，不要自己認定是胃的問題",
       "refs": [
        "nhs-chest",
        "mayo-chest"
       ]
      },
      {
       "text": "痛延伸到手臂（左手或右手都算）、肩膀、背部、兩側肩胛骨之間、脖子、下巴或牙齒",
       "refs": [
        "nhs-chest",
        "mayo-chest",
        "mlp-chest"
       ]
      },
      {
       "text": "同時有喘不過氣、冒冷汗、噁心或嘔吐、頭暈、快要昏倒，或異常疲倦",
       "refs": [
        "nhs-chest",
        "mayo-chest"
       ]
      },
      {
       "text": "胸痛時心跳很快、很亂，或有心悸",
       "refs": [
        "mlp-chest"
       ]
      },
      {
       "text": "突然的劇烈胸痛，延伸到上背部（像撕裂般）",
       "refs": [
        "mlp-chest",
        "mayo-chest"
       ]
      },
      {
       "text": "長途旅行、臥床或手術之後，突然胸痛並且喘，特別是有一隻腳腫起來",
       "refs": [
        "mlp-chest"
       ]
      },
      {
       "text": "已經知道有心絞痛，這次痛得更厲害、輕微活動就發作、持續比平常久，或休息時也會痛",
       "refs": [
        "mlp-chest"
       ]
      },
      {
       "text": "曾經被診斷心肌梗塞或肺栓塞，又出現胸痛",
       "refs": [
        "mlp-chest"
       ]
      }
     ],
     "doNow": [
      {
       "text": "撥打 119 等救護車。如果真的叫不到救護車，請別人載你去急診；不要自己開車。",
       "refs": [
        "nhs-chest",
        "mayo-chest"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "目前沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "胸痛已經消失，但當時痛得很厲害——仍要就醫，請今天到急診，不要因為現在不痛了就不看（如果又再痛，請撥打 119）",
       "refs": [
        "nhs-angina",
        "mayo-chest"
       ]
      },
      {
       "text": "最近反覆出現胸痛或胸悶，時好時壞（如果現在正在痛，而且是新發生、說不出原因，請依上方撥打 119）",
       "refs": [
        "nhs-chest"
       ]
      },
      {
       "text": "胸痛合併發燒、咳嗽或咳痰",
       "refs": [
        "nhs-chest",
        "mlp-chest"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "胸痛持續 3 到 5 天以上，或吞東西時會痛、吞嚥困難",
       "refs": [
        "mlp-chest"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "新發生或原因不明的胸痛，不提供在家觀察的建議。"
   },
   "keyQuestions": [
    {
     "q": "什麼時候開始？是突然發生，還是慢慢變明顯？",
     "why": "突然發生的胸痛比較需要立即處理。"
    },
    {
     "q": "痛起來像什麼？壓迫、悶、刺痛、灼熱，還是撕裂般？",
     "why": "痛的感覺能幫醫師判斷方向，但不能單靠描述排除心臟問題。"
    },
    {
     "q": "痛會不會延伸到手臂、背部、脖子、下巴或牙齒？",
     "why": "延伸痛是心臟和大血管問題的警訊之一。"
    },
    {
     "q": "做什麼會變嚴重或變輕？例如走路、深呼吸、按壓、姿勢、吃東西。",
     "why": "可以幫助區分心臟、肺部、腸胃或肌肉的原因。"
    },
    {
     "q": "有沒有其他症狀？例如喘、冒冷汗、噁心、頭暈、心悸、發燒、咳嗽。",
     "why": "伴隨症狀會改變就醫的急迫程度。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "心肌梗塞（心臟病發作）",
      "plain": "供應心臟的血管阻塞，心肌缺氧。",
      "refs": [
       "mayo-chest",
       "nhs-chest"
      ]
     },
     {
      "name": "主動脈剝離",
      "plain": "身體最大的血管內壁撕裂。",
      "refs": [
       "mayo-chest",
       "mlp-chest"
      ]
     },
     {
      "name": "肺栓塞",
      "plain": "血塊卡在肺部血管。",
      "refs": [
       "mayo-chest",
       "mlp-chest"
      ]
     },
     {
      "name": "氣胸",
      "plain": "肺部漏氣，肺塌陷。",
      "refs": [
       "mayo-chest"
      ]
     },
     {
      "name": "心包膜炎",
      "plain": "包住心臟的薄膜發炎。",
      "refs": [
       "mayo-chest"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "胃食道逆流",
      "plain": "胃酸往上跑，胸口灼熱。但心臟病發作也可能有類似感覺，不能自行判斷。",
      "refs": [
       "mayo-chest",
       "nhs-chest"
      ]
     },
     {
      "name": "肌肉或肋軟骨發炎",
      "plain": "胸壁肌肉、軟骨受傷或發炎，按壓通常會痛。",
      "refs": [
       "mayo-chest",
       "nhs-chest"
      ]
     },
     {
      "name": "肺炎或肋膜炎",
      "plain": "肺部感染或肺外膜發炎，深呼吸會痛。",
      "refs": [
       "mayo-chest",
       "nhs-chest",
       "mlp-chest"
      ]
     },
     {
      "name": "帶狀疱疹（皮蛇）",
      "plain": "沿神經分布的刺痛，之後可能出現水泡。",
      "refs": [
       "mayo-chest"
      ]
     },
     {
      "name": "恐慌發作或焦慮",
      "plain": "症狀可能和心臟病很像，需先由醫師排除其他原因。",
      "refs": [
       "mayo-chest",
       "nhs-chest"
      ]
     }
    ],
    "patternsHeading": "依痛的特徵",
    "patternsIntro": "痛的特徵只是線索，不能用來自己判斷。心臟病發作也可能像消化不良或肌肉痛；新發生、說不出原因的胸痛，即使符合下方較不危險的描述，仍請依上方「立即求助」處理。",
    "painPatterns": [
     {
      "pattern": "胸口像被壓住、擠壓或緊縮，痛延伸到手臂、脖子、下巴，合併喘、冒汗、噁心",
      "text": "可能是心肌梗塞（心臟病發作），請立即撥打 119。",
      "refs": [
       "nhs-heart-attack",
       "mayo-chest"
      ]
     },
     {
      "pattern": "活動、壓力、情緒激動或天冷時胸口緊或悶，休息幾分鐘就好",
      "text": "可能是心絞痛，代表心臟的血流不足，請儘速就醫；休息幾分鐘後還在痛，請撥打 119。",
      "refs": [
       "nhs-angina"
      ]
     },
     {
      "pattern": "突然、劇烈的胸痛或上背痛，像被撕裂，延伸到脖子或背部",
      "text": "可能是主動脈剝離，請立即撥打 119。",
      "refs": [
       "mayo-dissection"
      ]
     },
     {
      "pattern": "突然很喘，吸氣時胸痛更厲害，咳血，或一隻腳（常是小腿）又痛又腫",
      "text": "可能是肺栓塞，請立即撥打 119。",
      "refs": [
       "nhs-pe"
      ]
     },
     {
      "pattern": "突然胸痛，同時覺得喘",
      "text": "可能是氣胸（肺塌陷），請立即撥打 119。",
      "refs": [
       "mayo-pneumothorax",
       "mayo-chest"
      ]
     },
     {
      "pattern": "尖銳的刺痛，深呼吸或躺下時更痛",
      "text": "可能是心包膜炎（包住心臟的薄膜發炎），請立即就醫。",
      "refs": [
       "nhs-chest",
       "mayo-chest"
      ]
     },
     {
      "pattern": "吸氣或咳嗽時更痛，合併發燒、咳黃綠色的痰",
      "text": "可能是肺部感染、肺炎或肋膜炎，請今天就醫。",
      "refs": [
       "nhs-chest",
       "nhs-pneumonia"
      ]
     },
     {
      "pattern": "吃東西後開始痛，胸口灼熱，食物或酸苦的液體往上跑，覺得脹",
      "text": "常見於胃食道逆流或消化不良。但心臟病發作也可能是這種感覺，不要自己認定是胃的問題。",
      "refs": [
       "nhs-chest",
       "mayo-chest"
      ]
     },
     {
      "pattern": "胸部受傷或用力運動後開始痛，按壓會痛，讓肌肉休息後比較好",
      "text": "常見於胸壁肌肉拉傷或扭傷。",
      "refs": [
       "nhs-chest",
       "mayo-chest"
      ]
     },
     {
      "pattern": "一側皮膚先刺痛，之後出現會變成水泡的疹子",
      "text": "可能是帶狀疱疹（皮蛇），請今天就醫。",
      "refs": [
       "nhs-chest",
       "mayo-shingles"
      ]
     },
     {
      "pattern": "擔心或壓力大時出現，合併心跳加快、冒汗、頭暈",
      "text": "可能和焦慮或恐慌發作有關。這些症狀也可能來自其他疾病，需要先由醫師排除。",
      "refs": [
       "nhs-chest",
       "nhs-panic"
      ]
     }
    ]
   },
   "specialPopulations": [],
   "visitPreparation": [
    "胸痛開始的時間、每次持續多久、發作幾次",
    "痛的位置和感覺，有沒有延伸到別處",
    "目前使用的所有藥物，包括保健食品；特別告訴醫師是否使用抗凝血劑，或最近用過威而鋼這類治療勃起功能障礙的藥",
    "過去病史：心臟病、高血壓、糖尿病、高血脂、中風、抽菸",
    "以前的心電圖或檢查報告（如果有）",
    "藥物過敏史"
   ],
   "sources": [
    "mayo-chest",
    "nhs-chest",
    "mlp-chest",
    "nhs-angina",
    "nhs-heart-attack",
    "mayo-dissection",
    "nhs-pe",
    "mayo-pneumothorax",
    "nhs-pneumonia",
    "mayo-shingles",
    "nhs-panic"
   ],
   "thinking": {
    "status": "published",
    "heading": "醫師怎麼想",
    "intro": "醫師看胸痛，會先排除會致命的原因，再由外而內，一層一層想。這只是說明醫師的思考順序，不能用來自己判斷；只要有上方「立即求助」的任何一項，請立即就醫。",
    "steps": [
     {
      "title": "先排除會致命的原因",
      "text": "心肌梗塞、主動脈剝離、肺栓塞、氣胸。這些無法從外表分辨，需要醫師檢查才能確認，所以新發生、說不出原因的胸痛都要立即就醫。",
      "refs": [
       "mayo-chest",
       "nhs-chest"
      ]
     },
     {
      "title": "皮膚",
      "text": "帶狀疱疹（皮蛇）。",
      "refs": [
       "mayo-chest"
      ]
     },
     {
      "title": "肌肉和骨頭",
      "text": "肌肉或肋軟骨發炎。",
      "refs": [
       "mayo-chest"
      ]
     },
     {
      "title": "肺和肋膜",
      "text": "肺炎或肋膜炎、氣胸、肺栓塞。",
      "refs": [
       "mayo-chest"
      ]
     },
     {
      "title": "心臟和主動脈",
      "text": "心肌梗塞、心絞痛、心包膜炎、主動脈剝離。",
      "refs": [
       "mayo-chest"
      ]
     },
     {
      "title": "食道和腸胃",
      "text": "胃食道逆流。",
      "refs": [
       "mayo-chest"
      ]
     },
     {
      "title": "其他",
      "text": "恐慌發作或焦慮。",
      "refs": [
       "mayo-chest"
      ]
     }
    ]
   }
  },
  {
   "slug": "shortness-of-breath",
   "title": "呼吸困難",
   "aliases": [
    "喘",
    "很喘",
    "喘不過氣",
    "呼吸急促",
    "呼吸不順",
    "吸不到氣",
    "上氣不接下氣",
    "胸悶喘",
    "氣喘吁吁",
    "透不過氣",
    "呼吸短促"
   ],
   "bodyArea": "chest",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。嬰幼兒呼吸困難請直接撥打 119 或就醫。",
   "summary": "呼吸困難是覺得吸不到足夠空氣。突然發生或很嚴重的喘，可能是心臟、肺部、嚴重過敏或中毒造成，需要立即處理。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-11",
   "nextReviewAt": "2027-11-11",
   "actions": {
    "emergency": {
     "heading": "立即撥打 119",
     "intro": "出現下列任何一項，請馬上撥打 119：",
     "items": [
      {
       "text": "突然變得很喘；或喘到說不出完整的句子（符合其中一項就算）",
       "refs": [
        "mayo-sob",
        "nhs-sob",
        "mlp-sob"
       ]
      },
      {
       "text": "患者沒有反應、停止呼吸，或沒有正常呼吸",
       "refs": [
        "mlp-sob"
       ]
      },
      {
       "text": "嘴唇、臉或皮膚發紫、發灰，或變得非常蒼白",
       "refs": [
        "nhs-sob",
        "mlp-sob"
       ]
      },
      {
       "text": "喘合併胸痛、胸悶，或痛延伸到手臂、背部、脖子、下巴",
       "refs": [
        "nhs-sob",
        "mayo-sob"
       ]
      },
      {
       "text": "突然意識混亂、很想睡、叫不太醒",
       "refs": [
        "nhs-sob",
        "mlp-sob"
       ]
      },
      {
       "text": "喘合併昏倒、快要昏倒，或噁心想吐",
       "refs": [
        "mayo-sob"
       ]
      },
      {
       "text": "長時間沒有活動（手術、生病、受傷、打石膏）後，或長途搭車、搭機後，新出現的喘",
       "refs": [
        "mayo-sob"
       ]
      },
      {
       "text": "嚴重過敏：嘴唇、舌頭或喉嚨腫起來、喉嚨覺得緊，全身起疹子，呼吸有咻咻聲，頭暈、快昏倒或脈搏快而弱",
       "refs": [
        "mayo-anaphylaxis",
        "mlp-sob",
        "nhs-anaphylaxis"
       ]
      },
      {
       "text": "東西卡在喉嚨（嗆到），咳不出來",
       "refs": [
        "nhs-sob"
       ]
      },
      {
       "text": "吸入濃煙、化學氣體，或在不通風處使用瓦斯熱水器、燒炭後出現喘、頭痛、頭暈",
       "refs": [
        "cdc-co",
        "nhs-poisoning",
        "mayo-sob"
       ]
      },
      {
       "text": "有氣喘，急救吸入劑用到醫師指示的最大劑量仍沒有改善，或愈來愈喘",
       "refs": [
        "nhs-asthma-attack"
       ]
      },
      {
       "text": "喘合併咳血（不論多少）",
       "refs": [
        "nhs-cough-blood"
       ]
      }
     ],
     "doNow": [
      {
       "text": "撥打 119 叫救護車，不要自己開車去急診。可以的話把平常用的藥帶著。",
       "refs": [
        "nhs-sob",
        "nfa-119"
       ]
      },
      {
       "text": "醫師曾開立腎上腺素注射筆，出現嚴重過敏時立刻使用，並且仍要撥打 119。即使症狀好轉也要到急診，因為可能再次發作。",
       "refs": [
        "mayo-anaphylaxis"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "休息時也會喘，或簡單說話就喘",
       "refs": [
        "mlp-sob"
       ]
      },
      {
       "text": "喘在幾天內愈來愈嚴重，或做一點小事就喘",
       "refs": [
        "nhs-sob",
        "mayo-sob",
        "mlp-sob"
       ]
      },
      {
       "text": "有氣喘或慢性肺病，比平常明顯更喘",
       "refs": [
        "mlp-sob"
       ]
      },
      {
       "text": "咳嗽聲像狗叫，或呼吸有咻咻聲",
       "refs": [
        "mlp-sob",
        "mayo-sob"
       ]
      },
      {
       "text": "喘合併心悸",
       "refs": [
        "nhs-sob"
       ]
      },
      {
       "text": "喘合併發燒、咳嗽、咳痰",
       "refs": [
        "nhs-sob",
        "mlp-sob"
       ]
      },
      {
       "text": "躺平會喘、半夜喘醒，或腳踝、小腿腫起來",
       "refs": [
        "mayo-sob",
        "mlp-sob"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "活動時喘了好幾週，慢慢變差",
       "refs": [
        "nhs-sob",
        "mayo-sob"
       ]
      },
      {
       "text": "咳嗽超過 2 週（請看「咳嗽」頁）",
       "refs": [
        "mohw-tb"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。"
   },
   "keyQuestions": [
    {
     "q": "是突然發生，還是幾天、幾週慢慢變喘？",
     "why": "突然發生的喘通常比較緊急。"
    },
    {
     "q": "在休息時也喘，還是活動時才喘？",
     "why": "休息也喘代表較嚴重。"
    },
    {
     "q": "有沒有胸痛、發燒、咳嗽、腳腫、皮膚起疹子？",
     "why": "伴隨症狀能幫助找出原因。"
    },
    {
     "q": "發作前有沒有吃了什麼、被叮咬、吸入煙霧或化學物質？",
     "why": "過敏和中毒需要特別處理。"
    },
    {
     "q": "有沒有氣喘、慢性肺病、心臟病，或最近開刀、長途旅行、長期臥床？",
     "why": "這些背景會影響醫師優先排除的方向。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "嚴重過敏反應（過敏性休克）",
      "plain": "全身性過敏，喉嚨可能腫起來。",
      "refs": [
       "mayo-anaphylaxis"
      ]
     },
     {
      "name": "氣喘或慢性肺病嚴重發作",
      "plain": "呼吸道收縮，空氣進出困難。",
      "refs": [
       "mayo-sob",
       "mlp-sob"
      ]
     },
     {
      "name": "心肌梗塞或心臟衰竭",
      "plain": "心臟功能突然變差，肺部積水。",
      "refs": [
       "mayo-sob"
      ]
     },
     {
      "name": "肺栓塞",
      "plain": "血塊卡在肺部血管。",
      "refs": [
       "mayo-sob"
      ]
     },
     {
      "name": "氣胸",
      "plain": "肺部漏氣塌陷。",
      "refs": [
       "mayo-sob"
      ]
     },
     {
      "name": "一氧化碳中毒",
      "plain": "燒炭、熱水器或爐具在不通風處使用造成。",
      "refs": [
       "cdc-co",
       "mayo-sob"
      ]
     },
     {
      "name": "重症肺炎",
      "plain": "肺部嚴重感染。",
      "refs": [
       "mayo-sob"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "肺炎、新冠肺炎等呼吸道感染",
      "plain": "常合併發燒、咳嗽。",
      "refs": [
       "mayo-sob"
      ]
     },
     {
      "name": "氣喘、慢性阻塞性肺病",
      "plain": "長期的呼吸道疾病。",
      "refs": [
       "mayo-sob"
      ]
     },
     {
      "name": "貧血",
      "plain": "血液攜氧能力不足。",
      "refs": [
       "mayo-sob"
      ]
     },
     {
      "name": "體能下降或體重過重",
      "plain": "活動時容易喘。",
      "refs": [
       "mayo-sob",
       "nhs-sob"
      ]
     },
     {
      "name": "焦慮或恐慌",
      "plain": "需先由醫師排除其他原因。",
      "refs": [
       "nhs-sob",
       "mayo-sob"
      ]
     }
    ],
    "patternsHeading": "依喘的特徵",
    "patternsIntro": "喘的特徵只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119。",
    "painPatterns": [
     {
      "pattern": "突然很喘，吸氣時胸痛更厲害，咳血，或一隻腳（常是小腿）又痛又腫",
      "text": "可能是肺栓塞，請立即撥打 119。",
      "refs": [
       "nhs-pe"
      ]
     },
     {
      "pattern": "突然胸痛，同時覺得喘",
      "text": "可能是氣胸（肺塌陷），請立即撥打 119。",
      "refs": [
       "mayo-pneumothorax"
      ]
     },
     {
      "pattern": "喘合併胸口緊、重或壓迫，痛延伸到手臂、背部、脖子或下巴",
      "text": "可能是心肌梗塞（心臟病發作），請立即撥打 119。",
      "refs": [
       "nhs-sob",
       "nhs-heart-attack"
      ]
     },
     {
      "pattern": "接觸食物、藥物或被昆蟲螫後幾分鐘內，喉嚨或舌頭腫、喉嚨緊、呼吸有咻咻聲，可能合併起疹子",
      "text": "可能是嚴重過敏反應，請立即撥打 119。",
      "refs": [
       "nhs-anaphylaxis"
      ]
     },
     {
      "pattern": "在使用瓦斯熱水器、爐具或燒炭的空間裡，喘合併頭痛、頭暈、噁心、虛弱；離開或到戶外後好一些",
      "text": "可能是一氧化碳中毒。請立刻到戶外，並撥打 119 或到急診，不要再回到那個空間。",
      "refs": [
       "nhs-co",
       "cdc-co"
      ]
     },
     {
      "pattern": "呼吸有咻咻聲、咳嗽、胸口緊，時好時壞，晚上或清晨比較嚴重",
      "text": "可能是氣喘。用了自己的急救吸入劑沒有改善，或愈來愈喘，請撥打 119。",
      "refs": [
       "nhs-asthma"
      ]
     },
     {
      "pattern": "躺下或做日常活動就喘，腳、腳踝或腿腫，晚上咳嗽",
      "text": "可能是心臟衰竭，請今天就醫。",
      "refs": [
       "nhs-heart-failure",
       "nhs-sob"
      ]
     },
     {
      "pattern": "喘合併咳嗽、發燒、全身痠痛，可能咳黃綠色的痰",
      "text": "可能是肺炎，請今天就醫。",
      "refs": [
       "nhs-pneumonia"
      ]
     },
     {
      "pattern": "抽菸或曾經抽菸的人，做以前很輕鬆的活動就喘，咳嗽有痰一直不好，慢慢加重",
      "text": "可能是慢性阻塞性肺病，請儘快安排門診。",
      "refs": [
       "nhs-copd"
      ]
     },
     {
      "pattern": "容易累、沒有體力，臉色比平常蒼白，覺得心跳很明顯",
      "text": "可能是貧血，請儘快安排門診。",
      "refs": [
       "nhs-anaemia"
      ]
     },
     {
      "pattern": "突然發作，合併心跳很快、發抖、冒汗、手指發麻、強烈的害怕",
      "text": "可能是恐慌發作，多數在 5 到 20 分鐘內結束。這些症狀也可能來自其他疾病，需要先由醫師排除。",
      "refs": [
       "nhs-panic"
      ]
     }
    ]
   },
   "specialPopulations": [],
   "visitPreparation": [
    "開始的時間，是突然還是逐漸變喘",
    "做什麼事會喘（走幾步、爬幾層樓）",
    "使用中的所有藥物，包括吸入劑和保健食品",
    "過敏史，以及這次發作前接觸過的食物、藥物或環境",
    "過去病史：氣喘、慢性肺病、心臟病",
    "抽菸史"
   ],
   "sources": [
    "mayo-sob",
    "nhs-sob",
    "mlp-sob",
    "mayo-anaphylaxis",
    "nhs-anaphylaxis",
    "cdc-co",
    "nhs-poisoning",
    "nhs-asthma-attack",
    "nhs-cough-blood",
    "nfa-119",
    "mohw-tb",
    "nhs-pe",
    "mayo-pneumothorax",
    "nhs-heart-attack",
    "nhs-co",
    "nhs-asthma",
    "nhs-heart-failure",
    "nhs-pneumonia",
    "nhs-copd",
    "nhs-anaemia",
    "nhs-panic"
   ],
   "thinking": {
    "status": "published",
    "heading": "醫師怎麼想",
    "intro": "醫師看呼吸困難，會先排除會致命的原因，再看是突然發生，還是慢慢變喘好幾週。這只是說明醫師的思考順序，不能用來自己判斷；只要有上方「立即求助」的任何一項，請立即就醫。",
    "steps": [
     {
      "title": "先排除會致命的原因",
      "text": "嚴重過敏反應、心肌梗塞、肺栓塞、氣胸、一氧化碳中毒、氣喘或慢性肺病嚴重發作。",
      "refs": [
       "mayo-sob"
      ]
     },
     {
      "title": "突然發生的喘",
      "text": "例如嚴重過敏反應、氣喘發作、一氧化碳中毒、心肌梗塞、心臟衰竭、肺炎、氣胸、肺栓塞。",
      "refs": [
       "mayo-sob"
      ]
     },
     {
      "title": "持續好幾週以上的喘",
      "text": "例如氣喘、慢性阻塞性肺病、心臟的問題、體重過重、很少活動造成的體能下降，以及焦慮或恐慌。",
      "refs": [
       "mayo-sob"
      ]
     }
    ]
   }
  },
  {
   "slug": "coughing-blood",
   "title": "咳血（痰裡有血）",
   "bodyArea": "chest",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "咳血",
    "咳出血",
    "痰有血",
    "痰裡有血",
    "痰中帶血",
    "血痰",
    "咳嗽有血",
    "咯血"
   ],
   "summary": "咳血有很多可能的原因，也可能是肺栓塞、肺癌等嚴重的問題，請一定要就醫檢查。咳出的血不只幾點或幾絲，或合併喘、心跳很快、胸痛，請立即撥打 119。",
   "definition": "咳血是從肺部或呼吸道咳出血來，常和痰混在一起、有泡泡，通常是鮮紅色或鐵鏽色。這和嘴巴、喉嚨或腸胃道出血不同。",
   "definitionRefs": [
    "mlp-cough-blood"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "咳血，加上下列任何一項，請立即就醫：",
     "items": [
      {
       "text": "咳出的血不只幾點或幾絲",
       "refs": [
        "nhs-cough-blood"
       ]
      },
      {
       "text": "呼吸困難或很喘",
       "refs": [
        "nhs-cough-blood",
        "mlp-cough-blood"
       ]
      },
      {
       "text": "心跳很快",
       "refs": [
        "nhs-cough-blood"
       ]
      },
      {
       "text": "胸痛或上背痛",
       "refs": [
        "nhs-cough-blood",
        "mlp-cough-blood"
       ]
      },
      {
       "text": "頭暈、快昏倒",
       "refs": [
        "mlp-cough-blood"
       ]
      },
      {
       "text": "尿或大便裡也有血",
       "refs": [
        "mlp-cough-blood"
       ]
      },
      {
       "text": "發燒",
       "refs": [
        "mlp-cough-blood"
       ]
      }
     ],
     "doNow": [
      {
       "text": "不要自己開車去急診，請別人載或撥打 119；把正在吃的藥帶去。",
       "refs": [
        "nhs-cough-blood"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "任何咳血，即使只有痰裡幾絲血、沒有其他症狀",
       "refs": [
        "nhs-cough-blood",
        "mlp-cough-blood"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": []
    },
    "observe": null,
    "observeOmittedReason": "咳血不提供在家觀察。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "咳血有時是肺栓塞或肺癌等嚴重疾病的徵兆。",
       "refs": [
        "nhs-cough-blood"
       ]
      },
      {
       "text": "大量咳血可能致命。",
       "refs": [
        "mlp-cough-blood"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "咳出多少血？持續多久了？",
     "why": "出血量和時間決定處理的急迫性。"
    },
    {
     "q": "確定是咳出來的，不是從鼻子、嘴巴流出或吐出來的？",
     "why": "咳血和腸胃道出血的原因不同。"
    },
    {
     "q": "有沒有喘、胸痛、發燒、體重減輕？",
     "why": "幫助找出原因。"
    },
    {
     "q": "有沒有吃抗凝血藥？有沒有抽菸、肺病或結核病接觸史？",
     "why": "這些和咳血的原因有關。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "肺栓塞",
      "plain": "肺部的血管被血塊塞住，可能合併喘、胸痛、心跳很快。",
      "refs": [
       "nhs-cough-blood",
       "mlp-cough-blood"
      ]
     },
     {
      "name": "肺癌",
      "plain": "",
      "refs": [
       "nhs-cough-blood",
       "mlp-cough-blood"
      ]
     },
     {
      "name": "結核病",
      "plain": "",
      "refs": [
       "nhs-cough-blood",
       "mlp-cough-blood"
      ]
     },
     {
      "name": "抗凝血藥過量",
      "plain": "血液太稀，容易出血。",
      "refs": [
       "mlp-cough-blood"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "長期或劇烈咳嗽",
      "plain": "喉嚨受刺激，通常只有少量的血。",
      "refs": [
       "nhs-cough-blood",
       "mlp-cough-blood"
      ]
     },
     {
      "name": "肺炎、支氣管炎等呼吸道感染",
      "plain": "",
      "refs": [
       "nhs-cough-blood",
       "mlp-cough-blood"
      ]
     },
     {
      "name": "支氣管擴張症",
      "plain": "呼吸道變寬、痰變多。",
      "refs": [
       "nhs-cough-blood",
       "mlp-cough-blood"
      ]
     }
    ],
    "patternsHeading": "依出現的情況",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "咳血合併突然喘、胸痛或上背痛、心跳很快",
      "text": "可能是肺栓塞，請立即撥打 119。",
      "refs": [
       "nhs-cough-blood"
      ]
     },
     {
      "pattern": "劇烈咳嗽很多天後，痰裡有幾絲血",
      "text": "可能是咳嗽刺激造成，但仍要今天就醫檢查。",
      "refs": [
       "mlp-cough-blood",
       "nhs-cough-blood"
      ]
     },
     {
      "pattern": "咳嗽、發燒、喘，痰裡有血",
      "text": "可能是肺炎等呼吸道感染，請立即撥打 119 或到急診。",
      "refs": [
       "mlp-cough-blood"
      ]
     },
     {
      "pattern": "正在吃抗凝血藥",
      "text": "可能是血液太稀造成出血，請今天就醫；量多或合併上方任何一項，請撥打 119。",
      "refs": [
       "mlp-cough-blood"
      ]
     }
    ]
   },
   "specialPopulations": [],
   "visitPreparation": [
    "咳血開始的時間、每次的量（可以拍照）",
    "使用中的所有藥物，特別是抗凝血藥",
    "抽菸史、肺病病史、結核病接觸史"
   ],
   "sources": [
    "mlp-cough-blood",
    "nhs-cough-blood"
   ]
  },
  {
   "slug": "cough",
   "title": "咳嗽",
   "bodyArea": "chest",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "咳嗽",
    "一直咳",
    "咳不停",
    "久咳",
    "慢性咳嗽",
    "乾咳",
    "有痰",
    "咳痰",
    "咳嗽很久",
    "結核病",
    "肺結核"
   ],
   "summary": "咳嗽多半是感冒或流感，通常 3 到 4 週內會自己好。咳嗽合併很喘、胸痛、咳血，請立即就醫；咳嗽超過 2 週，請就醫檢查是否有結核病。",
   "definition": "大多數咳嗽是感冒或流感造成，其他原因包括抽菸、胃食道逆流、過敏。",
   "definitionRefs": [
    "nhs-cough"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "咳嗽，加上下列任何一項，請立即就醫：",
     "items": [
      {
       "text": "很喘、呼吸困難，或說不出完整的句子",
       "refs": [
        "nhs-cough",
        "nhs-sob"
       ]
      },
      {
       "text": "胸痛",
       "refs": [
        "nhs-cough"
       ]
      },
      {
       "text": "咳出的血不只幾點或幾絲（請看「咳血」頁）",
       "refs": [
        "nhs-cough-blood"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "咳得很厲害，或很快變嚴重，咳不停",
       "refs": [
        "nhs-cough"
       ]
      },
      {
       "text": "覺得非常不舒服",
       "refs": [
        "nhs-cough"
       ]
      },
      {
       "text": "脖子側邊腫痛（淋巴結腫）",
       "refs": [
        "nhs-cough"
       ]
      },
      {
       "text": "痰裡有血絲",
       "refs": [
        "nhs-cough-blood",
        "nhs-tb"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "咳嗽超過 2 週，或合併胸痛、體重減輕、發燒（請檢查是否有結核病）",
       "refs": [
        "mohw-tb",
        "nhs-tb"
       ]
      },
      {
       "text": "體重莫名減輕，或晚上盜汗",
       "refs": [
        "nhs-cough",
        "nhs-tb"
       ]
      },
      {
       "text": "免疫力差（例如正在化療或有糖尿病）",
       "refs": [
        "nhs-cough"
       ]
      },
      {
       "text": "沒有上方任何一項：可以到診所看診",
       "refs": [
        "nhs-cough"
       ]
      }
     ],
     "doNow": [
      {
       "text": "多休息、多喝水；發燒或不舒服時，儘量待在家、避免接觸別人。",
       "refs": [
        "nhs-cough"
       ]
      },
      {
       "text": "溫檸檬蜂蜜水可能有幫助（1 歲以下不能吃蜂蜜）。",
       "refs": [
        "nhs-cough"
       ]
      },
      {
       "text": "吃藥前請先看說明書或問藥師，懷孕時有些藥不能吃。",
       "refs": [
        "nhs-cough"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "結核病可以規則服藥治好，及早診斷才能及早治療。",
       "refs": [
        "mohw-tb"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "咳了多久？有沒有痰？痰的顏色？",
     "why": "咳嗽超過 2 週要檢查結核病。"
    },
    {
     "q": "有沒有喘、胸痛、發燒、咳血？",
     "why": "這些需要更快就醫。"
    },
    {
     "q": "有沒有體重減輕、晚上盜汗？",
     "why": "可能是結核病的症狀。"
    },
    {
     "q": "有沒有抽菸、胃食道逆流、過敏？",
     "why": "這些是常見的咳嗽原因。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "肺炎",
      "plain": "咳嗽、發燒、喘、胸痛。",
      "refs": [
       "nhs-pneumonia"
      ]
     },
     {
      "name": "結核病",
      "plain": "咳嗽超過 2 到 3 週、可能有血痰、發燒、盜汗、體重減輕。",
      "refs": [
       "nhs-tb",
       "mohw-tb"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "感冒、流感",
      "plain": "最常見。",
      "refs": [
       "nhs-cough"
      ]
     },
     {
      "name": "抽菸",
      "plain": "",
      "refs": [
       "nhs-cough"
      ]
     },
     {
      "name": "胃食道逆流",
      "plain": "",
      "refs": [
       "nhs-cough"
      ]
     },
     {
      "name": "過敏",
      "plain": "例如過敏性鼻炎。",
      "refs": [
       "nhs-cough"
      ]
     }
    ],
    "patternsHeading": "依咳嗽的情況",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "咳嗽、發燒、喘、胸痛，可能咳黃綠色的痰",
      "text": "可能是肺炎；喘或胸痛請立即就醫。",
      "refs": [
       "nhs-pneumonia"
      ]
     },
     {
      "pattern": "咳嗽超過 2 週，合併有痰、胸痛、體重減輕、發燒或盜汗",
      "text": "請就醫檢查是否有結核病（胸部 X 光）。",
      "refs": [
       "mohw-tb",
       "nhs-tb"
      ]
     },
     {
      "pattern": "流鼻水、喉嚨痛之後咳嗽",
      "text": "多半是感冒，通常 3 到 4 週內會好。",
      "refs": [
       "nhs-cough"
      ]
     },
     {
      "pattern": "咳嗽合併胸口灼熱（火燒心）",
      "text": "可能和胃食道逆流有關，請安排門診。",
      "refs": [
       "nhs-cough"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "免疫力差的人（例如正在化療或有糖尿病）咳嗽請就醫。",
     "refs": [
      "nhs-cough"
     ]
    }
   ],
   "visitPreparation": [
    "咳嗽開始的時間",
    "有沒有發燒、體重減輕、盜汗",
    "抽菸史、結核病接觸史",
    "使用中的所有藥物"
   ],
   "sources": [
    "nhs-cough",
    "nhs-sob",
    "nhs-cough-blood",
    "nhs-tb",
    "mohw-tb",
    "nhs-pneumonia"
   ]
  },
  {
   "slug": "palpitations",
   "title": "心悸（心跳很快、亂跳）",
   "bodyArea": "chest",
   "audience": [
    "adult"
   ],
   "status": "published",
   "aliases": [
    "心悸",
    "心跳很快",
    "心跳很大力",
    "心跳亂跳",
    "心跳不規則",
    "心臟亂跳",
    "心跳漏拍",
    "心慌",
    "心臟怦怦跳",
    "心律不整",
    "心房顫動",
    "心跳加速"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "summary": "心悸是突然很明顯感覺到自己的心跳：很快、很用力、不規則或漏拍。通常無害，常和壓力、咖啡因或運動有關；但如果合併胸痛、喘或快昏倒，可能是危險的心律不整，請立即撥打 119。",
   "definition": "心悸是感覺心跳變得不舒服或不尋常，可能在胸口、脖子或喉嚨感覺到，持續幾秒、幾分鐘或更久。",
   "definitionRefs": [
    "nhs-palp"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119",
     "intro": "正在心悸，加上下列任何一項，請立即撥打 119：",
     "items": [
      {
       "text": "心悸一直沒有停",
       "refs": [
        "nhs-palp"
       ]
      },
      {
       "text": "胸痛或胸悶",
       "refs": [
        "nhs-palp",
        "mayo-palp"
       ]
      },
      {
       "text": "呼吸困難",
       "refs": [
        "nhs-palp",
        "mayo-palp"
       ]
      },
      {
       "text": "頭暈、快昏倒、跌倒或昏倒",
       "refs": [
        "nhs-palp",
        "mayo-palp",
        "nhs-af"
       ]
      }
     ],
     "doNow": [
      {
       "text": "不要自己開車去急診；把正在吃的藥帶去。",
       "refs": [
        "nhs-palp"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "心悸時曾經合併胸痛、喘或快昏倒，但現在已經停了",
       "refs": [
        "nhs-palp"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "心悸反覆發作，或愈來愈頻繁",
       "refs": [
        "nhs-palp",
        "nhs-af"
       ]
      },
      {
       "text": "每次持續超過幾分鐘",
       "refs": [
        "nhs-palp"
       ]
      },
      {
       "text": "有心臟病，或家人有心臟病",
       "refs": [
        "nhs-palp"
       ]
      },
      {
       "text": "覺得心跳不規則（可能是心房顫動）",
       "refs": [
        "nhs-af"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "少數心悸是危及生命的心律不整造成，可能讓心臟無法有效跳動。",
       "refs": [
        "mayo-palp"
       ]
      },
      {
       "text": "心房顫動可能在心臟裡形成血塊，引起中風。",
       "refs": [
        "mayo-palp"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "心跳是很快、很用力，還是不規則、漏拍？",
     "why": "不同的感覺指向不同的心律。"
    },
    {
     "q": "是突然開始、突然停止嗎？每次持續多久？",
     "why": "幫助判斷是哪一種心律不整。"
    },
    {
     "q": "有沒有胸痛、喘、頭暈或昏倒？",
     "why": "這些表示需要立即處理。"
    },
    {
     "q": "心悸前有沒有喝咖啡、茶、酒、抽菸，或吃感冒藥？",
     "why": "這些是常見的誘發因素。"
    },
    {
     "q": "有沒有心臟病、甲狀腺疾病、貧血？",
     "why": "這些疾病都可能造成心悸。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "心律不整",
      "plain": "例如心房顫動、上心室心搏過速。",
      "refs": [
       "nhs-palp",
       "nhs-af",
       "nhs-svt"
      ]
     },
     {
      "name": "其他心臟病",
      "plain": "例如心臟瓣膜疾病。",
      "refs": [
       "nhs-palp"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "壓力、焦慮或恐慌發作",
      "plain": "",
      "refs": [
       "nhs-palp",
       "mayo-palp"
      ]
     },
     {
      "name": "劇烈運動、睡眠不足",
      "plain": "",
      "refs": [
       "nhs-palp",
       "mayo-palp"
      ]
     },
     {
      "name": "咖啡因、尼古丁、酒精或毒品",
      "plain": "",
      "refs": [
       "nhs-palp",
       "mayo-palp"
      ]
     },
     {
      "name": "藥物",
      "plain": "例如含偽麻黃鹼的感冒藥、某些氣喘藥。",
      "refs": [
       "mayo-palp",
       "nhs-palp"
      ]
     },
     {
      "name": "月經、懷孕、更年期",
      "plain": "荷爾蒙變化。",
      "refs": [
       "nhs-palp",
       "mayo-palp"
      ]
     },
     {
      "name": "甲狀腺亢進",
      "plain": "",
      "refs": [
       "nhs-palp",
       "mayo-palp"
      ]
     },
     {
      "name": "貧血",
      "plain": "",
      "refs": [
       "nhs-palp"
      ]
     }
    ],
    "patternsHeading": "依心跳的感覺",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "心跳突然變很快，又突然停止，可能持續幾分鐘到幾小時",
      "text": "可能是上心室心搏過速，請安排門診；合併喘、胸痛或快昏倒，請撥打 119。",
      "refs": [
       "nhs-svt"
      ]
     },
     {
      "pattern": "脈搏不規則，可能合併疲倦、喘、頭暈",
      "text": "可能是心房顫動，請安排門診；合併胸痛、喘、頭暈、昏倒，或一側手腳無力麻木、說話困難、視力模糊、劇烈頭痛，請撥打 119。",
      "refs": [
       "nhs-af"
      ]
     },
     {
      "pattern": "偶爾覺得心跳漏一拍或多跳一下",
      "text": "心悸很常見，通常無害；反覆發作或愈來愈頻繁，請安排門診。",
      "refs": [
       "nhs-palp"
      ]
     },
     {
      "pattern": "喝咖啡、茶、酒、抽菸或吃感冒藥之後",
      "text": "可能是這些刺激物引起，可以減少使用；反覆發作請安排門診。",
      "refs": [
       "nhs-palp",
       "mayo-palp"
      ]
     },
     {
      "pattern": "合併疲倦、喘、臉色蒼白",
      "text": "可能是貧血，請安排門診。",
      "refs": [
       "nhs-tired"
      ]
     },
     {
      "pattern": "合併手抖、怕熱、流汗、體重減輕",
      "text": "可能是甲狀腺亢進，請安排門診。",
      "refs": [
       "mlp-tpp"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "有心臟病的人，心跳太快時比較容易血壓下降而昏倒。",
     "refs": [
      "mayo-palp"
     ]
    }
   ],
   "visitPreparation": [
    "心悸開始和結束的時間、每次多久",
    "心悸時摸到的脈搏快慢、規不規則（可以用血壓計或手錶記錄）",
    "使用中的所有藥物和保健品",
    "咖啡、茶、酒、菸的習慣",
    "病史：心臟病、甲狀腺疾病"
   ],
   "sources": [
    "nhs-palp",
    "mayo-palp",
    "nhs-af",
    "nhs-svt",
    "nhs-tired",
    "mlp-tpp"
   ],
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17"
  },
  {
   "slug": "high-blood-pressure",
   "title": "血壓很高",
   "bodyArea": "chest",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "血壓很高",
    "血壓高",
    "高血壓",
    "血壓飆高",
    "血壓180",
    "量血壓很高",
    "高血壓危象"
   ],
   "summary": "在家量到血壓 180/120 以上，又有胸痛、喘、手腳或臉麻木無力、說話或走路困難、視力改變，請立即撥打 119。沒有症狀時，先休息幾分鐘再量一次，仍然很高請今天就醫。",
   "definition": "高血壓危象是血壓突然大幅升高到 180/120 mmHg 以上，可能傷害心臟、腦、腎臟和眼睛。",
   "definitionRefs": [
    "mayo-htn-crisis"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119",
     "intro": "血壓 180/120 以上，加上下列任何一項，請立即撥打 119：",
     "items": [
      {
       "text": "胸痛",
       "refs": [
        "mayo-htn-crisis"
       ]
      },
      {
       "text": "呼吸困難",
       "refs": [
        "mayo-htn-crisis"
       ]
      },
      {
       "text": "手腳或臉麻木、刺痛、失去感覺（常常只有一側），或走路、說話困難",
       "refs": [
        "mayo-htn-crisis"
       ]
      },
      {
       "text": "視力改變或看不清楚",
       "refs": [
        "mayo-htn-crisis"
       ]
      },
      {
       "text": "劇烈頭痛、意識混亂、抽搐，或叫不醒",
       "refs": [
        "mayo-htn-crisis"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "血壓 180/120 以上、沒有症狀：先休息幾分鐘再量一次，仍然很高",
       "refs": [
        "mayo-htn-crisis"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "40 歲以上，超過 5 年沒有量過血壓",
       "refs": [
        "nhs-bp"
       ]
      },
      {
       "text": "常常量到血壓偏高",
       "refs": [
        "nhs-bp"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "高血壓危象是緊急狀況，可能引起心臟病發作或中風。",
       "refs": [
        "mayo-htn-crisis"
       ]
      },
      {
       "text": "高血壓通常沒有症狀，不量就不會知道。",
       "refs": [
        "nhs-bp"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "量到的血壓是多少？休息後再量一次是多少？",
     "why": "確認血壓是否真的很高。"
    },
    {
     "q": "有沒有胸痛、喘、頭痛、看不清楚、手腳無力？",
     "why": "這些表示器官可能受到傷害。"
    },
    {
     "q": "平常有沒有吃降血壓藥？最近有沒有忘記吃或停藥？",
     "why": "忘記吃藥或突然停藥是常見原因。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "高血壓緊急症",
      "plain": "血壓很高，而且器官受到傷害，可能危及生命。",
      "refs": [
       "mayo-htn-crisis"
      ]
     },
     {
      "name": "中風",
      "plain": "",
      "refs": [
       "mayo-htn-crisis",
       "nhs-stroke"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "忘記吃降血壓藥",
      "plain": "",
      "refs": [
       "mayo-htn-crisis"
      ]
     },
     {
      "name": "藥物交互作用",
      "plain": "",
      "refs": [
       "mayo-htn-crisis"
      ]
     }
    ],
    "patternsHeading": "依出現的症狀",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "血壓很高，合併臉歪、一側手腳無力、說話不清楚",
      "text": "可能是中風，請立即撥打 119。",
      "refs": [
       "mayo-htn-crisis",
       "nhs-stroke"
      ]
     },
     {
      "pattern": "血壓很高，合併胸痛或很喘",
      "text": "請立即撥打 119。",
      "refs": [
       "mayo-htn-crisis"
      ]
     },
     {
      "pattern": "血壓很高、沒有症狀，休息幾分鐘後再量仍然很高",
      "text": "請今天就醫。",
      "refs": [
       "mayo-htn-crisis"
      ]
     },
     {
      "pattern": "最近忘記吃降血壓藥，或自己停藥",
      "text": "請就醫，由醫師評估和調整用藥。",
      "refs": [
       "mayo-htn-crisis"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "高血壓在年長者很常見。",
     "refs": [
      "nhs-bp"
     ]
    }
   ],
   "visitPreparation": [
    "量到的血壓數值和時間（可以拍照）",
    "使用中的所有藥物，最近有沒有漏吃或停藥",
    "血壓計"
   ],
   "sources": [
    "mayo-htn-crisis",
    "nhs-bp",
    "nhs-stroke"
   ]
  },
  {
   "slug": "abdominal-pain",
   "title": "腹痛",
   "aliases": [
    "肚子痛",
    "肚子不舒服",
    "胃痛",
    "胃不舒服",
    "腹部疼痛",
    "下腹痛",
    "上腹痛",
    "右下腹痛",
    "絞痛",
    "肚痛",
    "肚子絞痛",
    "心窩痛",
    "肚臍痛"
   ],
   "bodyArea": "abdomen",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。兒童腹痛請諮詢醫師。",
   "summary": "大多數腹痛和腸胃炎、便秘或消化不良有關，但有些原因需要緊急手術或治療。痛得不厲害不代表不嚴重，所以要看伴隨症狀決定多快就醫。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-11",
   "nextReviewAt": "2027-11-11",
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "腹痛加上下列任何一項，請立即就醫。患者昏倒、意識不清或無法行動時，請撥打 119：",
     "items": [
      {
       "text": "劇烈腹痛——不論是突然發生或慢慢變得很痛；或痛到坐立難安、找不到舒服的姿勢",
       "refs": [
        "nhs-abdo",
        "mayo-abdo"
       ]
      },
      {
       "text": "吐血，或吐出像咖啡渣、綠色的東西",
       "refs": [
        "nhs-abdo",
        "mlp-abdo"
       ]
      },
      {
       "text": "解黑色柏油狀大便，或大便有血（不論多少）",
       "refs": [
        "mlp-abdo",
        "mayo-abdo"
       ]
      },
      {
       "text": "肚子摸起來很硬，或一按就痛",
       "refs": [
        "mlp-abdo",
        "mayo-abdo"
       ]
      },
      {
       "text": "肚子脹起來，或無法排氣、無法排便",
       "refs": [
        "nhs-abdo",
        "mlp-abdo",
        "mayo-abdo"
       ]
      },
      {
       "text": "完全尿不出來",
       "refs": [
        "nhs-abdo"
       ]
      },
      {
       "text": "腹痛合併胸痛、喘，或痛延伸到脖子、肩膀、兩側肩胛骨之間",
       "refs": [
        "mlp-abdo",
        "mayo-abdo"
       ]
      },
      {
       "text": "腹痛合併發燒",
       "refs": [
        "mayo-abdo"
       ]
      },
      {
       "text": "一直噁心、嘔吐",
       "refs": [
        "mayo-abdo"
       ]
      },
      {
       "text": "皮膚或眼白變色（例如變黃）",
       "refs": [
        "mayo-abdo"
       ]
      },
      {
       "text": "皮膚出現壓了不會消失的紅疹或出血點",
       "refs": [
        "nhs-abdo"
       ]
      },
      {
       "text": "懷孕中或可能懷孕，出現腹痛（特別是合併陰道出血）",
       "refs": [
        "mlp-abdo",
        "nhs-abdo"
       ]
      },
      {
       "text": "正在接受癌症治療",
       "refs": [
        "mlp-abdo"
       ]
      },
      {
       "text": "車禍、跌倒或撞擊之後出現腹痛",
       "refs": [
        "mlp-abdo",
        "mayo-abdo"
       ]
      },
      {
       "text": "誤食化學品、清潔劑、漂白水、農藥，或吃了過量的藥物之後肚子痛——不要等其他症狀出現",
       "refs": [
        "nhs-dv",
        "nhs-poisoning",
        "mlp-poisoning"
       ]
      }
     ],
     "doNow": [
      {
       "text": "不要自己開車去急診，請別人載你或撥打 119。",
       "refs": [
        "nhs-abdo",
        "mayo-abdo"
       ]
      },
      {
       "text": "在醫師評估前，先不要自行服用止痛藥或瀉藥。",
       "refs": [
        "mayo-abdo",
        "mlp-abdo"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "右下腹痛（不論輕重；闌尾炎早期可能只是輕微的痛）",
       "refs": [
        "mayo-abdo",
        "mlp-abdo"
       ]
      },
      {
       "text": "解尿疼痛、頻尿或腰側痛，合併腹痛",
       "refs": [
        "nhs-abdo",
        "mlp-abdo"
       ]
      },
      {
       "text": "腹痛持續好幾個小時沒有改善，或愈來愈痛",
       "refs": [
        "nhs-abdo",
        "mayo-abdo"
       ]
      },
      {
       "text": "肚子摸到腫塊，或非懷孕時有異常陰道出血、分泌物",
       "refs": [
        "nhs-abdo"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "腹瀉超過 5 天、腹脹超過 2 天，或腹部不適超過 1 週",
       "refs": [
        "mlp-abdo"
       ]
      },
      {
       "text": "反覆發作、和吃東西有關的上腹痛或胃灼熱",
       "refs": [
        "mayo-abdo",
        "nhs-abdo"
       ]
      },
      {
       "text": "腹痛合併沒有刻意減重卻體重下降",
       "refs": [
        "mayo-abdo"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫。拖延可能讓原本可以治療的問題變得危險：",
     "items": [
      {
       "text": "闌尾炎沒有及早治療，闌尾可能破裂，造成整個腹腔感染（腹膜炎）、敗血症或膿瘍，需要緊急手術。",
       "refs": [
        "nhs-appendicitis",
        "mayo-appendicitis"
       ]
      },
      {
       "text": "痛變輕不代表沒事：闌尾破裂時，痛可能突然短暫好轉，之後變成整個肚子劇痛。",
       "refs": [
        "nhs-appendicitis"
       ]
      },
      {
       "text": "子宮外孕沒有治療，輸卵管可能破裂，造成危及生命的腹內大出血，可能出現極度頭暈、昏倒或休克。",
       "refs": [
        "mayo-ectopic"
       ]
      },
      {
       "text": "結石合併發燒、畏寒，可能已經感染，請立即就醫；而且不痛了，不代表結石已經排出。",
       "refs": [
        "mayo-kidneystones",
        "mlp-kidneystones"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "痛在哪裡？上腹、肚臍周圍、右下腹、左下腹，還是整個肚子？有沒有移動？",
     "why": "位置能提示可能的器官。"
    },
    {
     "q": "是突然劇痛、一陣一陣的絞痛，還是持續悶痛？",
     "why": "劇烈的痛較需要緊急處理。"
    },
    {
     "q": "有沒有嘔吐、腹瀉、便秘、發燒、血便或黑便？",
     "why": "伴隨症狀會改變就醫的急迫程度。"
    },
    {
     "q": "最後一次月經是什麼時候？有沒有可能懷孕？",
     "why": "必須排除子宮外孕。"
    },
    {
     "q": "有沒有開過腹部手術、膽結石、腎結石，或正在吃止痛藥、抗凝血藥？",
     "why": "這些背景會影響醫師優先排除的方向。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "闌尾炎（盲腸炎）",
      "plain": "常見右下腹痛。",
      "refs": [
       "mayo-abdo",
       "mlp-abdo"
      ]
     },
     {
      "name": "腸阻塞",
      "plain": "腸子堵住，肚子脹、嘔吐、無法排氣。",
      "refs": [
       "mayo-abdo",
       "mlp-abdo"
      ]
     },
     {
      "name": "消化性潰瘍出血",
      "plain": "胃或十二指腸潰瘍出血，可能吐血或解黑便。",
      "refs": [
       "mlp-abdo"
      ]
     },
     {
      "name": "子宮外孕",
      "plain": "受精卵著床在子宮以外的地方。",
      "refs": [
       "mayo-abdo",
       "mlp-abdo"
      ]
     },
     {
      "name": "急性胰臟炎、膽囊炎",
      "plain": "上腹劇痛。",
      "refs": [
       "mayo-abdo"
      ]
     },
     {
      "name": "心肌梗塞",
      "plain": "有時只表現為上腹痛。",
      "refs": [
       "mayo-abdo"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "腸胃炎",
      "plain": "常合併腹瀉、嘔吐。",
      "refs": [
       "mayo-abdo",
       "nhs-abdo"
      ]
     },
     {
      "name": "便秘、脹氣",
      "plain": "最常見的腹痛原因之一。",
      "refs": [
       "mayo-abdo",
       "nhs-abdo"
      ]
     },
     {
      "name": "消化不良、胃炎、胃食道逆流",
      "plain": "上腹痛、胃灼熱。",
      "refs": [
       "mayo-abdo"
      ]
     },
     {
      "name": "經痛",
      "plain": "月經前後下腹痛。",
      "refs": [
       "mayo-abdo",
       "nhs-abdo"
      ]
     },
     {
      "name": "泌尿道感染、腎結石",
      "plain": "下腹或腰側痛，解尿不適。",
      "refs": [
       "mayo-abdo",
       "nhs-abdo"
      ]
     },
     {
      "name": "腸躁症",
      "plain": "反覆腹痛合併排便習慣改變。",
      "refs": [
       "mayo-abdo",
       "nhs-abdo"
      ]
     }
    ],
    "byLocationIntro": "痛的位置只是線索，不能用來自己判斷：同一個位置可能有好幾種原因，痛的位置也可能隨時間移動。請不要自己按壓肚子來判斷是哪一種病。只要有上方「立即求助」的任何一項，請立即就醫。",
    "byLocation": [
     {
      "id": "rlq",
      "region": "右下腹",
      "causes": [
       {
        "name": "闌尾炎（盲腸炎）",
        "clues": "按壓右下腹、走路、咳嗽或身體震動時會更痛；常合併食慾變差、噁心嘔吐、低燒、便秘或腹瀉。典型是先在肚臍周圍痛，幾個小時後移到右下腹，而且愈來愈痛。",
        "refs": [
         "mayo-appendicitis",
         "mlp-appendicitis",
         "nhs-appendicitis"
        ]
       },
       {
        "name": "腎臟或輸尿管結石",
        "clues": "痛一陣一陣、強度起伏，從腰側或背部延伸到下腹、鼠蹊部；可能痛到坐立難安、找不到舒服的姿勢，或解尿疼痛、頻尿。",
        "refs": [
         "mayo-kidneystones",
         "nhs-kidneystones",
         "mlp-kidneystones"
        ]
       },
       {
        "name": "婦科問題（骨盆腔發炎、卵巢囊腫破裂）",
        "clues": "女性的右下腹痛也要考慮子宮、卵巢的問題。",
        "refs": [
         "nhs-appendicitis"
        ]
       },
       {
        "name": "子宮外孕",
        "clues": "可能懷孕的人出現下腹或骨盆痛，合併陰道出血。",
        "refs": [
         "mayo-ectopic"
        ]
       }
      ]
     },
     {
      "id": "llq",
      "region": "左下腹",
      "causes": [
       {
        "name": "憩室炎",
        "clues": "最常在左下腹，通常突然而且強烈；可能合併發燒、噁心、按壓會痛，或突然腹瀉、便秘。較常見於年長者。",
        "refs": [
         "mayo-diverticulitis"
        ]
       },
       {
        "name": "腎臟或輸尿管結石",
        "clues": "一陣一陣的痛，從腰側或背部延伸到下腹、鼠蹊部。",
        "refs": [
         "mayo-kidneystones",
         "nhs-kidneystones",
         "mlp-kidneystones"
        ]
       },
       {
        "name": "子宮外孕",
        "clues": "可能懷孕的人出現下腹或骨盆痛，合併陰道出血。",
        "refs": [
         "mayo-ectopic"
        ]
       }
      ]
     },
     {
      "id": "umb",
      "region": "肚臍周圍",
      "causes": [
       {
        "name": "闌尾炎早期",
        "clues": "闌尾炎常常先從肚臍周圍開始痛，之後才移到右下腹。",
        "refs": [
         "mayo-appendicitis",
         "mlp-appendicitis",
         "nhs-appendicitis"
        ]
       }
      ]
     },
     {
      "id": "epi",
      "region": "上腹中央（心窩）",
      "causes": [
       {
        "name": "膽結石",
        "clues": "胸骨正下方突然、而且很快變強的痛，可能持續幾分鐘到幾小時。",
        "refs": [
         "mayo-gallstones",
         "nhs-abdo"
        ]
       },
       {
        "name": "胰臟炎",
        "clues": "上腹持續痛，吃東西後可能更痛，常延伸到背部；可能合併發燒、噁心嘔吐、按壓會痛。",
        "refs": [
         "mayo-pancreatitis"
        ]
       },
       {
        "name": "闌尾炎早期",
        "clues": "一開始可能在上腹中央或肚臍周圍痛。",
        "refs": [
         "mlp-appendicitis"
        ]
       },
       {
        "name": "心肌梗塞",
        "clues": "心臟病發作有時以上腹痛表現；特別是合併胸悶、胸痛時，請撥打 119。",
        "refs": [
         "mayo-abdo"
        ]
       }
      ]
     },
     {
      "id": "ruq",
      "region": "右上腹",
      "causes": [
       {
        "name": "膽結石、膽囊炎",
        "clues": "右上腹突然、而且很快變強的痛，可能延伸到右肩或兩側肩胛骨之間，常合併噁心嘔吐；合併發燒時要考慮膽囊發炎。",
        "refs": [
         "mayo-gallstones",
         "nhs-abdo"
        ]
       }
      ]
     },
     {
      "id": "flank",
      "region": "腰側或背部",
      "causes": [
       {
        "name": "腎臟或輸尿管結石",
        "clues": "腰側或後背、肋骨下方的劇痛，可延伸到下腹、鼠蹊部、睪丸或陰唇；痛會一陣一陣起伏。合併發燒、畏寒或持續嘔吐時，請立即就醫。",
        "refs": [
         "mayo-kidneystones",
         "nhs-kidneystones",
         "mlp-kidneystones"
        ]
       }
      ]
     },
     {
      "id": "pelvic",
      "region": "下腹中央（骨盆）",
      "causes": [
       {
        "name": "經痛、子宮內膜異位",
        "clues": "月經前後的痛；子宮內膜異位也可能在行房或排便時痛。",
        "refs": [
         "nhs-abdo"
        ]
       },
       {
        "name": "骨盆腔發炎",
        "clues": "女性生殖器官的感染。",
        "refs": [
         "mayo-abdo",
         "mlp-abdo"
        ]
       },
       {
        "name": "子宮外孕",
        "clues": "可能懷孕的人出現骨盆痛，合併陰道出血；血液刺激時可能肩膀痛或有想排便的感覺。",
        "refs": [
         "mayo-ectopic"
        ]
       }
      ]
     },
     {
      "id": "diffuse",
      "region": "整個肚子",
      "causes": [
       {
        "name": "腸胃炎、消化不良、脹氣",
        "clues": "痛的範圍超過半個肚子，比較常見於這些原因。",
        "refs": [
         "mlp-abdo"
        ]
       },
       {
        "name": "腸阻塞",
        "clues": "整個肚子痛而且愈來愈嚴重時，要考慮腸子堵住。",
        "refs": [
         "mlp-abdo"
        ]
       },
       {
        "name": "闌尾破裂",
        "clues": "原本右下腹痛，突然短暫好轉，之後變成整個肚子劇痛——請立即就醫。",
        "refs": [
         "nhs-appendicitis"
        ]
       }
      ]
     }
    ],
    "painPatterns": [
     {
      "pattern": "一陣一陣的絞痛",
      "text": "常突然開始、突然停止，而且常很劇烈。腎結石和膽結石是常見原因。",
      "refs": [
       "mlp-abdo"
      ]
     },
     {
      "pattern": "抽筋般的痛",
      "text": "多半不嚴重，常和脹氣有關，之後可能腹瀉。如果發作更頻繁、超過 24 小時，或合併發燒、血便，就需要就醫。",
      "refs": [
       "mlp-abdo"
      ]
     },
     {
      "pattern": "集中在某一處的痛",
      "text": "比較可能是某個器官的問題，例如闌尾、膽囊或胃。",
      "refs": [
       "mlp-abdo"
      ]
     },
     {
      "pattern": "範圍超過半個肚子的痛",
      "text": "較常見於腸胃炎、消化不良或脹氣；如果愈來愈痛，可能是腸阻塞。",
      "refs": [
       "mlp-abdo"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "腹痛的嚴重程度不一定代表疾病的嚴重度，痛得不厲害也可能是嚴重問題。",
     "refs": [
      "mlp-abdo"
     ]
    },
    {
     "text": "育齡女性腹痛，要考慮懷孕相關問題。",
     "refs": [
      "mlp-abdo"
     ]
    },
    {
     "text": "懷孕時，闌尾的位置會往上移，闌尾炎的痛可能出現在上腹。",
     "refs": [
      "mayo-appendicitis"
     ]
    },
    {
     "text": "年長者的闌尾炎可能出現突然的意識混亂。",
     "refs": [
      "nhs-appendicitis"
     ]
    }
   ],
   "visitPreparation": [
    "開始的時間、位置，以及有沒有轉移",
    "最後一次進食、排便、排尿的時間",
    "嘔吐物或大便的顏色（可以拍照）",
    "最後一次月經的日期",
    "使用中的所有藥物，特別是止痛藥、抗凝血藥、類固醇",
    "過去腹部手術和疾病史"
   ],
   "sources": [
    "nhs-abdo",
    "mayo-abdo",
    "mlp-abdo",
    "nhs-dv",
    "nhs-poisoning",
    "mlp-poisoning",
    "nhs-appendicitis",
    "mayo-appendicitis",
    "mayo-ectopic",
    "mayo-kidneystones",
    "mlp-kidneystones",
    "mlp-appendicitis",
    "nhs-kidneystones",
    "mayo-diverticulitis",
    "mayo-gallstones",
    "mayo-pancreatitis"
   ],
   "thinking": {
    "status": "published",
    "heading": "醫師怎麼想",
    "intro": "醫師看腹痛，會先排除會致命的原因，再看痛的位置，也會想到肚子以外的器官。這只是說明醫師的思考順序，不能用來自己判斷；只要有上方「立即求助」的任何一項，請立即就醫。",
    "steps": [
     {
      "title": "先排除會致命的原因",
      "text": "闌尾炎、腸阻塞、消化性潰瘍出血、子宮外孕、急性胰臟炎或膽囊炎。",
      "refs": [
       "mayo-abdo",
       "mlp-abdo"
      ]
     },
     {
      "title": "看痛的位置",
      "text": "痛的位置和型態是重要的線索；醫師會想這個位置底下有哪些器官（見下方的位置圖）。",
      "refs": [
       "mayo-abdo",
       "mlp-abdo"
      ]
     },
     {
      "title": "想到肚子以外的原因",
      "text": "心肌梗塞也可能讓上腹痛；泌尿道感染、腎結石；女性還要想到子宮外孕和經痛。",
      "refs": [
       "mayo-abdo"
      ]
     }
    ]
   }
  },
  {
   "slug": "gi-bleeding",
   "title": "吐血、解黑便或血便",
   "bodyArea": "abdomen",
   "audience": [
    "adult"
   ],
   "status": "published",
   "aliases": [
    "吐血",
    "嘔血",
    "吐咖啡色",
    "黑便",
    "解黑便",
    "大便黑黑的",
    "柏油便",
    "血便",
    "便血",
    "大便有血",
    "肛門出血",
    "痔瘡出血",
    "衛生紙有血",
    "腸胃道出血",
    "胃出血"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "summary": "吐血、解黑色柏油狀的大便，常是胃或食道出血，請立即到急診；大量出血可能很快休克。少量、一次性的鮮紅色血（例如衛生紙上有血）通常不嚴重，但也要檢查。",
   "definition": "腸胃道出血可能出現在嘔吐物或大便中，但不一定看得出來，有時只表現為大便變黑。",
   "definitionRefs": [
    "mayo-gi-bleed"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "有下列任何一項，請立即到急診。合併頭暈、昏倒、冒冷汗時，請撥打 119：",
     "items": [
      {
       "text": "吐血：鮮紅色、咖啡色或黑色，或像咖啡渣",
       "refs": [
        "nhs-vomit-blood",
        "mayo-gi-bleed"
       ]
      },
      {
       "text": "解黑色、像柏油，或暗紅色的大便",
       "refs": [
        "mayo-gi-bleed",
        "mlp-black-stool",
        "nhs-blood-poo"
       ]
      },
      {
       "text": "大量出血：馬桶的水變紅、有大血塊，或一直流血不停",
       "refs": [
        "nhs-blood-poo"
       ]
      },
      {
       "text": "出血合併頭暈、快昏倒或昏倒、皮膚濕冷蒼白、心跳或呼吸很快、意識混亂",
       "refs": [
        "nhs-vomit-blood",
        "mayo-gi-bleed"
       ]
      },
      {
       "text": "出血合併肚子痛",
       "refs": [
        "nhs-vomit-blood"
       ]
      }
     ],
     "doNow": [
      {
       "text": "不要自己開車去急診，請別人載或撥打 119；把正在吃的藥帶去。",
       "refs": [
        "nhs-vomit-blood",
        "nhs-blood-poo"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "大便裡混著血，或血樣腹瀉",
       "refs": [
        "nhs-blood-poo"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "少量、一次性的鮮紅色血：衛生紙上有血、大便表面有血絲，或馬桶的水淡粉紅色",
       "refs": [
        "nhs-blood-poo"
       ]
      },
      {
       "text": "大便有血持續 3 週，或排便習慣改變 3 週、體重莫名減輕、比平常疲倦",
       "refs": [
        "nhs-blood-poo"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "出血如果突然發生又愈來愈多，可能很快休克。",
       "refs": [
        "mayo-gi-bleed"
       ]
      },
      {
       "text": "出血有時看不出來，可能只表現為大便變黑。",
       "refs": [
        "mayo-gi-bleed"
       ]
      },
      {
       "text": "肛門出血有時是大腸癌的徵兆，早期發現比較好治療。",
       "refs": [
        "nhs-blood-poo"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "吐出來或解出來的是什麼顏色？大概多少？",
     "why": "顏色能幫助判斷出血的位置。"
    },
    {
     "q": "有沒有吃抗凝血藥、阿斯匹靈，或布洛芬等止痛藥？",
     "why": "這些藥會增加出血的機會。"
    },
    {
     "q": "有沒有肝病、胃潰瘍病史，或常喝酒？",
     "why": "和出血的原因有關。"
    },
    {
     "q": "有沒有頭暈、快昏倒、心跳很快？",
     "why": "可能表示出血量大。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "消化性潰瘍出血",
      "plain": "上消化道出血最常見的原因。",
      "refs": [
       "mayo-gi-bleed",
       "mlp-black-stool"
      ]
     },
     {
      "name": "食道靜脈曲張出血",
      "plain": "常見於嚴重肝病，例如長期喝酒。",
      "refs": [
       "mayo-gi-bleed",
       "mlp-black-stool"
      ]
     },
     {
      "name": "食道撕裂",
      "plain": "劇烈嘔吐或咳嗽之後。",
      "refs": [
       "mayo-gi-bleed",
       "nhs-vomit-blood"
      ]
     },
     {
      "name": "腸胃道腫瘤",
      "plain": "",
      "refs": [
       "mayo-gi-bleed",
       "nhs-blood-poo"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "胃炎、胃食道逆流",
      "plain": "",
      "refs": [
       "nhs-vomit-blood",
       "mayo-gi-bleed"
      ]
     },
     {
      "name": "痔瘡",
      "plain": "排便時鮮紅色血，可能合併肛門痛、癢、有腫塊。",
      "refs": [
       "nhs-blood-poo",
       "mayo-gi-bleed"
      ]
     },
     {
      "name": "肛裂",
      "plain": "便秘後解便很痛、有鮮紅色血。",
      "refs": [
       "nhs-blood-poo"
      ]
     },
     {
      "name": "大腸憩室",
      "plain": "",
      "refs": [
       "mayo-gi-bleed"
      ]
     },
     {
      "name": "發炎性腸道疾病",
      "plain": "例如潰瘍性結腸炎。",
      "refs": [
       "mayo-gi-bleed"
      ]
     },
     {
      "name": "藥物",
      "plain": "阿斯匹靈、布洛芬等止痛藥、抗凝血藥。",
      "refs": [
       "nhs-vomit-blood",
       "nhs-blood-poo",
       "mlp-black-stool"
      ]
     }
    ],
    "patternsHeading": "依出血的樣子",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "吐出鮮紅色、咖啡色，或像咖啡渣的東西",
      "text": "通常是胃或食道出血，請立即到急診。",
      "refs": [
       "nhs-vomit-blood",
       "mayo-gi-bleed"
      ]
     },
     {
      "pattern": "解黑色、像柏油、很臭的大便",
      "text": "通常是食道、胃或十二指腸出血，請立即到急診。",
      "refs": [
       "mlp-black-stool"
      ]
     },
     {
      "pattern": "有肝硬化或長期喝酒，吐血",
      "text": "可能是食道靜脈曲張出血，請立即撥打 119。",
      "refs": [
       "mayo-gi-bleed"
      ]
     },
     {
      "pattern": "劇烈嘔吐或咳嗽之後吐血",
      "text": "可能是食道撕裂，請立即到急診。",
      "refs": [
       "nhs-vomit-blood",
       "mayo-gi-bleed"
      ]
     },
     {
      "pattern": "排便時有鮮紅色血，合併肛門痛、癢或有腫塊；或便秘後解便很痛",
      "text": "可能是痔瘡或肛裂，請安排門診。量多或一直流血，請立即就醫。",
      "refs": [
       "nhs-blood-poo"
      ]
     },
     {
      "pattern": "吃了鐵劑、含鉍的胃藥、活性碳、黑甘草或藍莓之後大便變黑",
      "text": "這些也會讓大便變黑，但無法自己確定；不確定時，請立即到急診。",
      "refs": [
       "mlp-black-stool"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "吃抗凝血藥或抗血小板藥（例如阿斯匹靈）的人，腸胃道出血的風險比較高。",
     "refs": [
      "mlp-black-stool"
     ]
    }
   ],
   "visitPreparation": [
    "吐出物或大便的顏色和量（可以拍照）",
    "使用中的所有藥物，特別是抗凝血藥、阿斯匹靈、止痛藥、鐵劑",
    "病史：肝病、胃潰瘍",
    "喝酒的習慣"
   ],
   "sources": [
    "mayo-gi-bleed",
    "nhs-vomit-blood",
    "mlp-black-stool",
    "nhs-blood-poo"
   ],
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17"
  },
  {
   "slug": "vomiting-diarrhea",
   "title": "嘔吐、腹瀉（拉肚子）",
   "bodyArea": "abdomen",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "嘔吐",
    "一直吐",
    "想吐",
    "噁心",
    "腹瀉",
    "拉肚子",
    "水瀉",
    "上吐下瀉",
    "腸胃炎",
    "吃壞肚子",
    "食物中毒",
    "脫水"
   ],
   "summary": "嘔吐和腹瀉很常見，多半是腸胃炎或食物中毒，通常幾天內會好；重點是補充水分、注意脫水。但吐血、吐綠色的東西、劇烈肚子痛或頭痛、意識改變，請立即就醫。",
   "definition": "成人和兒童的腹瀉通常在 5 到 7 天內停止，嘔吐通常在 1 到 2 天內停止。",
   "definitionRefs": [
    "nhs-dv"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "嘔吐或腹瀉，加上下列任何一項，請立即就醫：",
     "items": [
      {
       "text": "吐血，或吐出像咖啡渣的東西",
       "refs": [
        "nhs-dv",
        "nhs-vomit-blood"
       ]
      },
      {
       "text": "吐出綠色的東西",
       "refs": [
        "nhs-dv"
       ]
      },
      {
       "text": "可能吃到有毒的東西",
       "refs": [
        "nhs-dv"
       ]
      },
      {
       "text": "脖子僵硬，看亮光會痛",
       "refs": [
        "nhs-dv"
       ]
      },
      {
       "text": "突然劇烈頭痛",
       "refs": [
        "nhs-dv"
       ]
      },
      {
       "text": "突然劇烈肚子痛",
       "refs": [
        "nhs-dv"
       ]
      },
      {
       "text": "皮膚、嘴唇或舌頭發青、發灰、蒼白或出現花斑，或皮膚摸起來冰冷",
       "refs": [
        "nhs-dv",
        "nhs-dehyd"
       ]
      },
      {
       "text": "呼吸非常困難，或呼吸又快又淺",
       "refs": [
        "nhs-dv",
        "nhs-dehyd"
       ]
      },
      {
       "text": "意識混亂、反應和平常不一樣，或比平常想睡、叫不太醒",
       "refs": [
        "nhs-dv",
        "nhs-dehyd"
       ]
      }
     ],
     "doNow": [
      {
       "text": "不要自己開車去急診，請別人載或撥打 119；把正在吃的藥帶去。",
       "refs": [
        "nhs-dehyd"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "一直吐，連水都喝不下",
       "refs": [
        "nhs-dv"
       ]
      },
      {
       "text": "血便或血樣腹瀉",
       "refs": [
        "nhs-dv"
       ]
      },
      {
       "text": "腹瀉超過 7 天，或嘔吐超過 2 天",
       "refs": [
        "nhs-dv"
       ]
      },
      {
       "text": "脫水的徵象：特別疲倦、站起來頭暈而且不會好、尿很少或很深黃、心跳或呼吸很快",
       "refs": [
        "nhs-dehyd"
       ]
      },
      {
       "text": "喝了口服電解質液之後，仍有脫水的徵象",
       "refs": [
        "nhs-dv"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "沒有上方任何一項：可以到診所看診",
       "refs": [
        "nhs-dv",
        "nhs-food-poison"
       ]
      }
     ],
     "doNow": [
      {
       "text": "多喝水，想吐時小口小口喝。",
       "refs": [
        "nhs-dv"
       ]
      },
      {
       "text": "不要喝果汁或汽水，可能讓腹瀉更嚴重。",
       "refs": [
        "nhs-dv",
        "nhs-dehyd"
       ]
      },
      {
       "text": "吃得下再吃，避免油膩和辛辣的食物。",
       "refs": [
        "nhs-dv"
       ]
      },
      {
       "text": "常用肥皂洗手；沾到嘔吐物或糞便的衣物要分開清洗。至少 2 天沒有再吐或腹瀉，再回去上班上學。",
       "refs": [
        "nhs-dv"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "脫水嚴重時可能休克，出現皮膚冰冷、發青、呼吸很快或意識混亂。",
       "refs": [
        "nhs-dehyd"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "吐和拉了多久？一天幾次？",
     "why": "時間和次數幫助判斷脫水的程度。"
    },
    {
     "q": "吐出來或拉出來的有沒有血、黑色或綠色？",
     "why": "這些顏色需要立即處理。"
    },
    {
     "q": "喝得下水嗎？尿量有沒有變少？",
     "why": "幫助判斷有沒有脫水。"
    },
    {
     "q": "有沒有吃到可疑的食物？一起吃的人也不舒服嗎？",
     "why": "可能是食物中毒。"
    },
    {
     "q": "有沒有慢性病？正在吃哪些藥？",
     "why": "某些疾病和藥物會讓脫水更危險。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "腸胃道出血",
      "plain": "吐血或吐咖啡渣狀的東西。",
      "refs": [
       "nhs-dv",
       "nhs-vomit-blood"
      ]
     },
     {
      "name": "中毒",
      "plain": "可能吃到有毒的東西。",
      "refs": [
       "nhs-dv"
      ]
     },
     {
      "name": "腦膜炎",
      "plain": "合併脖子僵硬、怕光、劇烈頭痛。",
      "refs": [
       "nhs-dv",
       "nhs-meningitis"
      ]
     },
     {
      "name": "嚴重脫水或休克",
      "plain": "",
      "refs": [
       "nhs-dehyd"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "腸胃炎",
      "plain": "最常見。",
      "refs": [
       "nhs-dv"
      ]
     },
     {
      "name": "食物中毒",
      "plain": "吃到受污染的食物，幾小時到幾天後發生。",
      "refs": [
       "nhs-dv",
       "nhs-food-poison"
      ]
     }
    ],
    "patternsHeading": "依出現的情況",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "吐出鮮紅色、咖啡色或像咖啡渣的東西",
      "text": "可能是胃或食道出血，請立即到急診。",
      "refs": [
       "nhs-dv",
       "nhs-vomit-blood"
      ]
     },
     {
      "pattern": "吐出綠色的東西",
      "text": "請立即就醫。",
      "refs": [
       "nhs-dv"
      ]
     },
     {
      "pattern": "合併脖子僵硬、看亮光會痛、劇烈頭痛",
      "text": "可能是腦膜炎，請立即撥打 119。",
      "refs": [
       "nhs-dv",
       "nhs-meningitis"
      ]
     },
     {
      "pattern": "一起吃東西的人也上吐下瀉，在吃完幾小時到幾天內發生",
      "text": "可能是食物中毒，通常一週內會好；出現脫水或上方任何一項，請就醫。",
      "refs": [
       "nhs-food-poison"
      ]
     },
     {
      "pattern": "尿很少或很深黃、站起來頭暈、特別疲倦",
      "text": "可能是脫水，請今天就醫。",
      "refs": [
       "nhs-dehyd"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "5 歲以下的兒童和年長者比較容易脫水，要多補充水分。",
     "refs": [
      "nhs-dehyd"
     ]
    }
   ],
   "visitPreparation": [
    "吐和拉開始的時間、一天幾次",
    "吐出物或大便的顏色（可以拍照）",
    "最近吃過的食物，一起吃的人有沒有不舒服",
    "使用中的所有藥物"
   ],
   "sources": [
    "nhs-dv",
    "nhs-vomit-blood",
    "nhs-dehyd",
    "nhs-food-poison",
    "nhs-meningitis"
   ]
  },
  {
   "slug": "urinary",
   "title": "解尿痛、頻尿或血尿",
   "bodyArea": "abdomen",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "解尿痛",
    "小便痛",
    "尿尿痛",
    "排尿疼痛",
    "頻尿",
    "急尿",
    "尿道炎",
    "膀胱炎",
    "泌尿道感染",
    "血尿",
    "小便有血",
    "尿有血",
    "尿液混濁"
   ],
   "summary": "解尿痛、頻尿多半是泌尿道感染，通常不嚴重但需要治療。合併發燒、腰痛可能是腎臟感染；血尿一定要檢查。意識混亂或想睡、說話困難，請立即撥打 119。",
   "definition": "泌尿道感染可能出現解尿疼痛或灼熱、頻尿、急尿、尿液混濁或有血、下腹痛，或肋骨下方的背痛。",
   "definitionRefs": [
    "nhs-uti"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "有下列任何一項，請立即就醫：",
     "items": [
      {
       "text": "意識混亂、很想睡，或說話困難",
       "refs": [
        "nhs-uti"
       ]
      },
      {
       "text": "合併意識混亂、無法控制的發抖、呼吸困難，或皮膚、嘴唇發紫或出現花斑（可能是敗血症）",
       "refs": [
        "nhs-sepsis"
       ]
      }
     ],
     "doNow": [
      {
       "text": "不要自己開車去急診，請別人載或撥打 119；把正在吃的藥帶去。",
       "refs": [
        "nhs-uti"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "發燒、覺得忽冷忽熱、發抖，或體溫低於 36°C",
       "refs": [
        "nhs-uti",
        "mlp-dysuria"
       ]
      },
      {
       "text": "合併腰痛或肋骨下方的背痛",
       "refs": [
        "nhs-uti",
        "mlp-dysuria"
       ]
      },
      {
       "text": "腰側、背部到鼠蹊部一陣一陣劇痛，痛到坐立難安",
       "refs": [
        "nhs-blood-urine",
        "nhs-kidneystones"
       ]
      },
      {
       "text": "尿裡有血（粉紅色、紅色或深咖啡色）",
       "refs": [
        "nhs-blood-urine"
       ]
      },
      {
       "text": "懷孕中",
       "refs": [
        "nhs-uti",
        "mlp-dysuria"
       ]
      },
      {
       "text": "男性、65 歲以上，或有糖尿病",
       "refs": [
        "nhs-uti"
       ]
      },
      {
       "text": "症狀很快變嚴重，或治療 2 天後沒有改善",
       "refs": [
        "nhs-uti"
       ]
      },
      {
       "text": "陰莖或陰道有分泌物",
       "refs": [
        "mlp-dysuria"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "沒有上方任何一項：可以到診所看診",
       "refs": [
        "nhs-uti"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "血尿有時是癌症的徵兆，早期發現比較好治療。",
       "refs": [
        "nhs-blood-urine"
       ]
      },
      {
       "text": "泌尿道感染可能往上影響腎臟，出現發燒和腰痛。",
       "refs": [
        "nhs-uti"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "有沒有發燒、發抖、腰痛？",
     "why": "可能是腎臟感染。"
    },
    {
     "q": "尿是什麼顏色？有沒有血？",
     "why": "血尿需要進一步檢查。"
    },
    {
     "q": "有沒有懷孕的可能？有沒有糖尿病？",
     "why": "這些情況需要更早治療。"
    },
    {
     "q": "有沒有分泌物、新的性伴侶？",
     "why": "可能是性傳染病。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "腎臟感染",
      "plain": "發燒、發抖、腰痛。",
      "refs": [
       "nhs-uti",
       "mayo-kidney-infection"
      ]
     },
     {
      "name": "敗血症",
      "plain": "感染引起的嚴重全身反應。",
      "refs": [
       "nhs-sepsis"
      ]
     },
     {
      "name": "腎結石",
      "plain": "腰側、背部到鼠蹊部一陣一陣劇痛。",
      "refs": [
       "nhs-blood-urine",
       "nhs-kidneystones"
      ]
     },
     {
      "name": "泌尿道的癌症",
      "plain": "血尿可能是徵兆。",
      "refs": [
       "nhs-blood-urine"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "膀胱炎（泌尿道感染）",
      "plain": "解尿痛、頻尿、急尿、尿液混濁。",
      "refs": [
       "nhs-uti",
       "mlp-dysuria"
      ]
     },
     {
      "name": "性傳染病",
      "plain": "例如淋病、披衣菌，可能有分泌物。",
      "refs": [
       "mlp-dysuria"
      ]
     },
     {
      "name": "陰道炎",
      "plain": "例如念珠菌感染。",
      "refs": [
       "mlp-dysuria"
      ]
     },
     {
      "name": "攝護腺肥大",
      "plain": "50 歲以上男性，尿不太出來、常要起床小便。",
      "refs": [
       "nhs-blood-urine"
      ]
     }
    ],
    "patternsHeading": "依出現的症狀",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "解尿痛或灼熱、頻尿、急尿、尿液混濁",
      "text": "可能是膀胱炎（泌尿道感染），請到診所看診。",
      "refs": [
       "nhs-uti",
       "nhs-blood-urine"
      ]
     },
     {
      "pattern": "合併發燒、發抖、腰痛",
      "text": "可能是腎臟感染，請今天就醫。",
      "refs": [
       "nhs-uti",
       "mayo-kidney-infection"
      ]
     },
     {
      "pattern": "腰側、背部到鼠蹊部一陣一陣劇痛，坐立難安、噁心，可能有血尿",
      "text": "可能是腎結石，請今天就醫。",
      "refs": [
       "nhs-blood-urine",
       "nhs-kidneystones"
      ]
     },
     {
      "pattern": "年長者或失智症患者突然變得糊塗、躁動，或尿失禁比平常嚴重",
      "text": "可能是泌尿道感染，請今天就醫；很想睡或說話困難，請撥打 119。",
      "refs": [
       "nhs-uti"
      ]
     },
     {
      "pattern": "剛吃過甜菜根，或開始吃新的藥，尿變紅或咖啡色",
      "text": "也可能不是血尿；不確定時，請今天就醫。",
      "refs": [
       "nhs-blood-urine"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "年長者、失智症患者或有導尿管的人，泌尿道感染可能只表現為意識混亂、躁動或尿失禁變嚴重。",
     "refs": [
      "nhs-uti"
     ]
    }
   ],
   "visitPreparation": [
    "症狀開始的時間",
    "尿的顏色（可以拍照）",
    "使用中的所有藥物",
    "是否懷孕、有沒有糖尿病"
   ],
   "sources": [
    "nhs-uti",
    "nhs-sepsis",
    "mlp-dysuria",
    "nhs-blood-urine",
    "nhs-kidneystones",
    "mayo-kidney-infection"
   ]
  },
  {
   "slug": "pregnancy-bleeding",
   "title": "懷孕出血",
   "bodyArea": "abdomen",
   "audienceNote": "適用懷孕中的女性。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "懷孕出血",
    "懷孕流血",
    "孕期出血",
    "懷孕陰道出血",
    "懷孕肚子痛",
    "流產",
    "小產",
    "子宮外孕",
    "安胎",
    "懷孕見紅"
   ],
   "summary": "懷孕出血不一定嚴重，但有時需要緊急治療，請一定要讓醫護人員評估。出血量多、肚子劇痛、肩膀痛、頭暈或昏倒，請立即撥打 119。",
   "definition": "懷孕出血可能是內褲或衛生紙上的粉紅、紅或咖啡色點狀血，也可能多到需要衛生棉，甚至很快浸濕衛生棉、有血塊。",
   "definitionRefs": [
    "nhs-preg-bleed"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119",
     "intro": "懷孕中出血，加上下列任何一項，請立即撥打 119：",
     "items": [
      {
       "text": "肚子劇痛（痛到無法專心看電視、看書或做日常的事）",
       "refs": [
        "nhs-preg-bleed"
       ]
      },
      {
       "text": "肩膀痛",
       "refs": [
        "nhs-preg-bleed",
        "nhs-ectopic"
       ]
      },
      {
       "text": "想吐、快昏倒、頭暈或失去意識",
       "refs": [
        "nhs-preg-bleed"
       ]
      },
      {
       "text": "出血量多：衛生棉剛換上很快就濕透",
       "refs": [
        "nhs-preg-bleed"
       ]
      }
     ],
     "doNow": [
      {
       "text": "請撥打 119 叫救護車。",
       "refs": [
        "nhs-preg-bleed"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "少量出血或點狀出血，不痛或只有輕微肚子痛",
       "refs": [
        "nhs-preg-bleed"
       ]
      },
      {
       "text": "出血合併腹瀉，或解尿、解便時疼痛或有壓迫感",
       "refs": [
        "nhs-preg-bleed"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": []
    },
    "observe": null,
    "observeOmittedReason": "懷孕出血不提供在家觀察。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "懷孕出血有時需要緊急治療，一定要讓醫護人員評估。",
       "refs": [
        "nhs-preg-bleed"
       ]
      },
      {
       "text": "子宮外孕可能在肚子裡大量出血，危及生命。",
       "refs": [
        "nhs-ectopic",
        "mayo-ectopic"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "懷孕幾週了？",
     "why": "不同週數的出血原因不同。"
    },
    {
     "q": "出血量多少？有沒有血塊？",
     "why": "出血量決定處理的急迫性。"
    },
    {
     "q": "有沒有肚子痛、肩膀痛、頭暈？",
     "why": "可能是子宮外孕等需要立即處理的狀況。"
    },
    {
     "q": "有沒有媽媽手冊或產檢紀錄？",
     "why": "幫助醫師了解懷孕的狀況。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "子宮外孕",
      "plain": "下腹一側痛、肩膀尖端痛、陰道出血。",
      "refs": [
       "nhs-ectopic",
       "nhs-preg-bleed"
      ]
     },
     {
      "name": "流產",
      "plain": "懷孕 24 週前陰道出血，可能合併下腹痛和抽痛。",
      "refs": [
       "nhs-miscarriage",
       "nhs-preg-bleed"
      ]
     },
     {
      "name": "胎盤的問題",
      "plain": "例如前置胎盤。",
      "refs": [
       "nhs-preg-bleed"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "懷孕很早期的著床出血",
      "plain": "",
      "refs": [
       "nhs-preg-bleed"
      ]
     },
     {
      "name": "子宮頸血管的變化",
      "plain": "例如性行為後出血。",
      "refs": [
       "nhs-preg-bleed"
      ]
     },
     {
      "name": "感染",
      "plain": "例如泌尿道感染或性傳染病。",
      "refs": [
       "nhs-preg-bleed"
      ]
     },
     {
      "name": "「見紅」",
      "plain": "封住子宮頸的黏液塞帶著血排出，可能表示要開始生產。",
      "refs": [
       "nhs-preg-bleed"
      ]
     }
    ],
    "patternsHeading": "依出現的症狀",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "懷孕早期，下腹一側痛、肩膀尖端痛，可能有陰道出血",
      "text": "可能是子宮外孕，請立即撥打 119。",
      "refs": [
       "nhs-ectopic"
      ]
     },
     {
      "pattern": "懷孕 24 週前陰道出血，合併下腹痛和抽痛",
      "text": "可能是流產，請立即就醫。",
      "refs": [
       "nhs-miscarriage"
      ]
     },
     {
      "pattern": "出血很快浸濕衛生棉，或頭暈、快昏倒",
      "text": "請立即撥打 119。",
      "refs": [
       "nhs-preg-bleed"
      ]
     },
     {
      "pattern": "少量點狀出血，不痛",
      "text": "不一定嚴重，但請今天就醫評估。",
      "refs": [
       "nhs-preg-bleed"
      ]
     }
    ]
   },
   "specialPopulations": [],
   "visitPreparation": [
    "懷孕週數",
    "媽媽手冊或產檢紀錄",
    "出血開始的時間和量",
    "使用中的所有藥物"
   ],
   "audience": [
    "adult"
   ],
   "sources": [
    "nhs-preg-bleed",
    "nhs-ectopic",
    "mayo-ectopic",
    "nhs-miscarriage"
   ]
  },
  {
   "slug": "testicle-pain",
   "title": "睪丸痛",
   "bodyArea": "abdomen",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用男性。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "睪丸痛",
    "蛋蛋痛",
    "陰囊痛",
    "陰囊腫",
    "睪丸腫",
    "睪丸扭轉",
    "副睪丸炎",
    "睪丸硬塊"
   ],
   "summary": "睪丸突然劇痛，可能是睪丸扭轉，不及時治療可能失去睪丸，請立即到急診。睪丸有硬塊、腫起來或形狀改變，請今天就醫。",
   "definition": "睪丸痛有很多原因，有時很嚴重；突然、劇烈或一直不好的疼痛，請立即就醫。",
   "definitionRefs": [
    "nhs-testicle"
   ],
   "actions": {
    "emergency": {
     "heading": "立即到急診",
     "intro": "有下列任何一項，請立即到急診：",
     "items": [
      {
       "text": "一側睪丸突然劇痛",
       "refs": [
        "nhs-testicle"
       ]
      },
      {
       "text": "睪丸痛合併想吐、嘔吐或肚子痛",
       "refs": [
        "nhs-testicle"
       ]
      },
      {
       "text": "睪丸痛超過 1 小時，或休息時還在痛",
       "refs": [
        "nhs-testicle"
       ]
      }
     ],
     "doNow": [
      {
       "text": "不要自己開車去急診，請別人載或撥打 119；把正在吃的藥帶去。",
       "refs": [
        "nhs-testicle"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "睪丸有硬塊",
       "refs": [
        "nhs-testicle"
       ]
      },
      {
       "text": "睪丸腫起來、形狀或摸起來的感覺改變",
       "refs": [
        "nhs-testicle"
       ]
      },
      {
       "text": "睪丸痠痛或不舒服，讓你擔心",
       "refs": [
        "nhs-testicle"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": []
    },
    "observe": null,
    "observeOmittedReason": "睪丸痛不提供在家觀察。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "睪丸扭轉如果沒有及時治療，可能失去睪丸。",
       "refs": [
        "nhs-testicle"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "是突然痛，還是慢慢痛？痛多久了？",
     "why": "突然劇痛要先想到睪丸扭轉。"
    },
    {
     "q": "有沒有想吐、嘔吐、肚子痛？",
     "why": "睪丸扭轉常合併這些症狀。"
    },
    {
     "q": "有沒有摸到硬塊、腫脹？最近有沒有受傷？",
     "why": "幫助找出原因。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "睪丸扭轉",
      "plain": "突然劇痛，需要儘快在醫院治療。",
      "refs": [
       "nhs-testicle"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "副睪丸炎（感染）",
      "plain": "",
      "refs": [
       "nhs-testicle"
      ]
     },
     {
      "name": "受傷",
      "plain": "",
      "refs": [
       "nhs-testicle"
      ]
     },
     {
      "name": "腹股溝疝氣",
      "plain": "",
      "refs": [
       "nhs-testicle"
      ]
     },
     {
      "name": "囊腫、精索靜脈曲張",
      "plain": "",
      "refs": [
       "nhs-testicle"
      ]
     },
     {
      "name": "睪丸癌",
      "plain": "單純疼痛通常不是癌症，癌症多半會摸到硬塊或腫脹。",
      "refs": [
       "nhs-testicle"
      ]
     }
    ],
    "patternsHeading": "依出現的症狀",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "一側睪丸突然劇痛，可能合併想吐、嘔吐或肚子痛",
      "text": "可能是睪丸扭轉，請立即到急診。",
      "refs": [
       "nhs-testicle"
      ]
     },
     {
      "pattern": "睪丸痛超過 1 小時，或休息時也痛",
      "text": "請立即到急診。",
      "refs": [
       "nhs-testicle"
      ]
     },
     {
      "pattern": "摸到睪丸有硬塊或腫脹",
      "text": "請今天就醫檢查。",
      "refs": [
       "nhs-testicle"
      ]
     },
     {
      "pattern": "受傷後睪丸痛",
      "text": "突然劇痛、痛超過 1 小時或休息時也痛，請立即到急診；腫起來或形狀改變，請今天就醫。",
      "refs": [
       "nhs-testicle"
      ]
     }
    ]
   },
   "specialPopulations": [],
   "visitPreparation": [
    "疼痛開始的時間",
    "有沒有受傷",
    "使用中的所有藥物"
   ],
   "sources": [
    "nhs-testicle"
   ]
  },
  {
   "slug": "back-pain",
   "title": "腰痛（下背痛）",
   "aliases": [
    "腰痛",
    "下背痛",
    "背痛",
    "腰酸背痛",
    "腰酸",
    "閃到腰",
    "腰扭到",
    "坐骨神經痛",
    "腰側痛",
    "腰部疼痛",
    "後腰痛",
    "椎間盤突出",
    "骨刺",
    "腰很痛"
   ],
   "bodyArea": "back",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。兒童或青少年的背痛請諮詢醫師。",
   "summary": "腰痛很常見，大多是肌肉或韌帶拉傷，通常幾週內會改善。但少數腰痛是神經嚴重受壓迫、主動脈瘤破裂、腎臟感染、骨折或腫瘤的警訊，需要立即處理。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-11",
   "nextReviewAt": "2027-11-11",
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "腰痛加上下列任何一項，請立即撥打 119 或到急診：",
     "items": [
      {
       "text": "兩隻腳都痛、麻、刺痛或無力，或腳無力愈來愈嚴重",
       "refs": [
        "nhs-back",
        "nhs-sciatica"
       ]
      },
      {
       "text": "生殖器或肛門周圍麻木、失去感覺",
       "refs": [
        "nhs-back",
        "nhs-sciatica"
       ]
      },
      {
       "text": "大小便改變：尿不出來、很難開始解尿，或無法控制大小便（和平常不一樣）",
       "refs": [
        "nhs-back",
        "nhs-sciatica",
        "mayo-back",
        "mlp-lbp"
       ]
      },
      {
       "text": "性功能突然改變，例如無法勃起，或生殖器的感覺改變",
       "refs": [
        "nhs-back"
       ]
      },
      {
       "text": "突然、劇烈的腰痛或肚子痛，或合併昏倒（特別是 65 歲以上或抽菸的人）",
       "refs": [
        "nhs-aaa",
        "mayo-aaa"
       ]
      },
      {
       "text": "腰痛合併胸痛",
       "refs": [
        "nhs-back"
       ]
      },
      {
       "text": "腰痛合併發燒",
       "refs": [
        "mayo-back",
        "mlp-lbp"
       ]
      },
      {
       "text": "車禍、跌倒或撞擊之後腰痛",
       "refs": [
        "nhs-back",
        "mayo-back",
        "mlp-lbp"
       ]
      },
      {
       "text": "突然、劇烈的上背痛（兩側肩胛骨之間）或胸痛，感覺像撕裂一樣，可能延伸到脖子",
       "refs": [
        "mayo-dissection"
       ]
      }
     ],
     "doNow": [
      {
       "text": "不要自己開車去急診，請別人載你或撥打 119。",
       "refs": [
        "nhs-back",
        "nhs-sciatica"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "覺得發熱、發冷、發抖，或全身不舒服",
       "refs": [
        "nhs-back"
       ]
      },
      {
       "text": "腰痛愈來愈嚴重，惡化得很快",
       "refs": [
        "nhs-back"
       ]
      },
      {
       "text": "痛到找不到舒服的姿勢、坐立難安",
       "refs": [
        "mlp-lbp",
        "mayo-kidneystones"
       ]
      },
      {
       "text": "解尿疼痛、灼熱、頻尿或尿中有血，合併腰痛",
       "refs": [
        "mlp-lbp",
        "mayo-kidney-infection"
       ]
      },
      {
       "text": "痛延伸到膝蓋以下，或一隻腳麻、刺痛、無力，或走路不穩",
       "refs": [
        "mlp-lbp",
        "mayo-back",
        "mayo-herniated"
       ]
      },
      {
       "text": "躺下時更痛，或晚上痛到醒過來",
       "refs": [
        "mlp-lbp",
        "nhs-back"
       ]
      },
      {
       "text": "背部或脊椎紅腫",
       "refs": [
        "mlp-lbp"
       ]
      },
      {
       "text": "有癌症病史的人出現新的腰痛",
       "refs": [
        "mlp-lbp"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "在家處理幾週後沒有改善，或已經影響日常生活",
       "refs": [
        "nhs-back",
        "mayo-back"
       ]
      },
      {
       "text": "沒有刻意減重卻體重下降",
       "refs": [
        "nhs-back",
        "mayo-back",
        "mlp-lbp"
       ]
      },
      {
       "text": "背部摸到腫塊、腫起來，或背的形狀改變",
       "refs": [
        "nhs-back"
       ]
      },
      {
       "text": "打噴嚏、咳嗽或排便時更痛",
       "refs": [
        "nhs-back"
       ]
      },
      {
       "text": "痛在上背（兩側肩胛骨之間），而不是下背（如果是突然、劇烈或像撕裂的痛，請依上方撥打 119）",
       "refs": [
        "nhs-back",
        "mayo-dissection"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫。拖延可能讓原本可以治療的問題變得危險：",
     "items": [
      {
       "text": "兩腳無力、會陰麻木或大小便改變，可能是嚴重的脊椎神經問題，需要儘快在醫院治療。",
       "refs": [
        "nhs-sciatica",
        "nhs-back"
       ]
      },
      {
       "text": "腹主動脈瘤破裂會造成危及生命的出血，需要緊急手術。",
       "refs": [
        "mayo-aaa",
        "nhs-aaa"
       ]
      },
      {
       "text": "腎臟感染沒有及時治療，可能造成腎臟永久損傷，或細菌進入血液造成嚴重感染。",
       "refs": [
        "mayo-kidney-infection"
       ]
      },
      {
       "text": "少數腰痛是骨折、癌症或感染的徵兆，延誤可能錯過治療時機。",
       "refs": [
        "nhs-back",
        "mlp-lbp"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "什麼時候開始？是搬重物、扭到之後才痛，還是沒有原因突然痛？",
     "why": "受傷後的痛和沒有原因的劇痛，處理方向不同。"
    },
    {
     "q": "痛會不會延伸到腳？有沒有麻、刺痛或無力？是一隻腳還是兩隻腳？",
     "why": "兩隻腳都有症狀，代表神經可能嚴重受壓迫。"
    },
    {
     "q": "解尿、排便有沒有改變？生殖器或肛門周圍有沒有麻木？",
     "why": "這些是需要立即處理的神經警訊。"
    },
    {
     "q": "有沒有發燒、解尿疼痛、體重減輕？晚上會不會痛醒？",
     "why": "這些可能代表感染、結石或腫瘤。"
    },
    {
     "q": "有沒有癌症、骨質疏鬆、抽菸，或最近受傷？",
     "why": "這些背景會影響醫師優先排除的方向。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "神經嚴重受壓迫（馬尾症候群）",
      "plain": "兩腳無力麻木、會陰麻木、大小便失控，需要儘快在醫院治療。",
      "refs": [
       "nhs-sciatica",
       "nhs-back"
      ]
     },
     {
      "name": "腹主動脈瘤破裂",
      "plain": "肚子裡的主動脈膨大後破裂，突然劇烈的肚子痛或腰痛。",
      "refs": [
       "mayo-aaa",
       "nhs-aaa",
       "mlp-lbp"
      ]
     },
     {
      "name": "主動脈剝離",
      "plain": "身體最大的血管內壁撕裂，突然劇烈的胸痛或上背痛，像被撕裂。",
      "refs": [
       "mayo-dissection"
      ]
     },
     {
      "name": "腎臟感染",
      "plain": "腰側痛合併發燒、畏寒、解尿疼痛。",
      "refs": [
       "mayo-kidney-infection",
       "mlp-lbp"
      ]
     },
     {
      "name": "脊椎骨折",
      "plain": "外傷後，或骨質疏鬆造成的壓迫性骨折。",
      "refs": [
       "mlp-lbp",
       "mayo-back"
      ]
     },
     {
      "name": "脊椎感染",
      "plain": "骨頭或椎間盤感染、膿瘍。",
      "refs": [
       "mlp-lbp"
      ]
     },
     {
      "name": "侵犯脊椎的癌症",
      "plain": "較少見，可能有體重下降、晚上痛醒。",
      "refs": [
       "mlp-lbp",
       "nhs-back"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "肌肉或韌帶拉傷",
      "plain": "最常見，常在搬重物、突然轉身或久坐後開始痛。",
      "refs": [
       "mlp-lbp",
       "mayo-back",
       "nhs-back"
      ]
     },
     {
      "name": "椎間盤突出、坐骨神經痛",
      "plain": "痛從屁股沿著一隻腳往下延伸，可能合併麻、刺痛。",
      "refs": [
       "mayo-herniated",
       "nhs-sciatica",
       "mlp-lbp"
      ]
     },
     {
      "name": "腎結石",
      "plain": "腰側痛一陣一陣，延伸到下腹或鼠蹊。",
      "refs": [
       "mayo-kidneystones",
       "mlp-lbp"
      ]
     },
     {
      "name": "脊椎狹窄、關節炎",
      "plain": "較常見於年長者。",
      "refs": [
       "mlp-lbp"
      ]
     },
     {
      "name": "婦科問題或懷孕相關",
      "plain": "例如子宮內膜異位、卵巢囊腫。",
      "refs": [
       "mlp-lbp"
      ]
     }
    ],
    "patternsHeading": "依痛的特徵",
    "patternsIntro": "痛的特徵只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即就醫。",
    "painPatterns": [
     {
      "pattern": "搬重物或扭到後開始痛，活動時更痛",
      "text": "常見於肌肉或韌帶拉傷。",
      "refs": [
       "mlp-lbp"
      ]
     },
     {
      "pattern": "從屁股沿著一隻腳後側痛下去，合併麻或刺痛",
      "text": "常見於坐骨神經痛，多由椎間盤突出造成。",
      "refs": [
       "nhs-sciatica",
       "mayo-herniated"
      ]
     },
     {
      "pattern": "腰側一陣一陣劇痛，延伸到下腹或鼠蹊",
      "text": "可能是腎結石。",
      "refs": [
       "mayo-kidneystones"
      ]
     },
     {
      "pattern": "腰側痛合併發燒、畏寒、解尿疼痛",
      "text": "可能是腎臟感染，請立即就醫。",
      "refs": [
       "mayo-kidney-infection",
       "mayo-back"
      ]
     },
     {
      "pattern": "突然的劇烈腰痛或肚子痛",
      "text": "可能是腹主動脈瘤破裂，請撥打 119。",
      "refs": [
       "nhs-aaa"
      ]
     },
     {
      "pattern": "休息也不改善、晚上痛醒",
      "text": "需要醫師排除骨頭、感染或腫瘤的問題。",
      "refs": [
       "nhs-back",
       "mlp-lbp"
      ]
     },
     {
      "pattern": "突然、劇烈的上背痛或胸痛，像被撕裂",
      "text": "可能是主動脈剝離，請撥打 119。",
      "refs": [
       "mayo-dissection"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "65 歲以上或抽菸的人，突然劇烈的腰痛或肚子痛要考慮腹主動脈瘤。",
     "refs": [
      "mayo-aaa",
      "nhs-aaa"
     ]
    },
    {
     "text": "骨質疏鬆的人可能發生脊椎壓迫性骨折。",
     "refs": [
      "mlp-lbp",
      "mayo-back"
     ]
    },
    {
     "text": "有癌症病史的人出現新的腰痛，請今天就醫。",
     "refs": [
      "mlp-lbp"
     ]
    }
   ],
   "visitPreparation": [
    "腰痛開始的時間和經過（例如搬東西、跌倒）",
    "痛的位置，以及有沒有延伸到腳",
    "腳有沒有麻、刺痛或無力；大小便有沒有改變",
    "使用中的所有藥物，特別是止痛藥、類固醇、抗凝血藥",
    "過去病史：癌症、骨質疏鬆、腎結石"
   ],
   "sources": [
    "nhs-back",
    "nhs-sciatica",
    "mayo-back",
    "mlp-lbp",
    "nhs-aaa",
    "mayo-aaa",
    "mayo-kidneystones",
    "mayo-kidney-infection",
    "mayo-herniated",
    "mayo-dissection"
   ],
   "thinking": {
    "status": "published",
    "heading": "醫師怎麼想",
    "intro": "醫師看腰痛，會先排除會致命的原因，再由外而內，先想背部本身，再想背後的器官。這只是說明醫師的思考順序，不能用來自己判斷；只要有上方「立即求助」的任何一項，請立即就醫。",
    "steps": [
     {
      "title": "先排除會致命的原因",
      "text": "神經嚴重受壓迫（馬尾症候群）、腹主動脈瘤破裂、主動脈剝離、脊椎感染、脊椎骨折、侵犯脊椎的癌症。",
      "refs": [
       "mlp-lbp",
       "nhs-back"
      ]
     },
     {
      "title": "背部本身：肌肉和韌帶",
      "text": "最常見的是肌肉或韌帶拉傷、肌肉痙攣。",
      "refs": [
       "mlp-lbp"
      ]
     },
     {
      "title": "背部本身：椎間盤、神經和脊椎骨",
      "text": "椎間盤突出、坐骨神經痛、脊椎狹窄、關節炎、脊椎骨折。",
      "refs": [
       "mlp-lbp"
      ]
     },
     {
      "title": "背後的器官",
      "text": "腎臟（結石、感染）、腹主動脈瘤，以及女性生殖器官的問題。",
      "refs": [
       "mlp-lbp"
      ]
     }
    ]
   }
  },
  {
   "slug": "leg-swelling",
   "title": "小腿腫痛（單腳腫、痛）",
   "bodyArea": "limbs",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "小腿腫",
    "小腿痛",
    "腳腫",
    "單腳腫",
    "腳腫痛",
    "小腿腫痛",
    "腿腫",
    "大腿腫痛",
    "深部靜脈血栓",
    "靜脈栓塞",
    "血栓",
    "經濟艙症候群"
   ],
   "summary": "一隻腳突然腫、痛，可能是深部靜脈血栓（腳的靜脈裡有血塊），請今天就醫；血塊可能跑到肺部造成肺栓塞，合併喘或胸痛時請立即撥打 119。",
   "definition": "深部靜脈血栓是靜脈裡形成血塊，通常在腳。",
   "definitionRefs": [
    "nhs-dvt"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119",
     "intro": "腳腫痛，加上下列任何一項，請立即撥打 119：",
     "items": [
      {
       "text": "突然喘、呼吸急促",
       "refs": [
        "nhs-dvt",
        "mayo-dvt"
       ]
      },
      {
       "text": "胸痛、胸悶或上背痛（深呼吸或咳嗽時可能更痛）",
       "refs": [
        "nhs-dvt",
        "nhs-pe",
        "mayo-dvt"
       ]
      },
      {
       "text": "頭暈、昏倒，或心跳、呼吸很快",
       "refs": [
        "mayo-dvt"
       ]
      },
      {
       "text": "皮膚紅腫熱痛，合併發高燒或發冷發抖、心跳或呼吸很快、意識混亂，或頭暈快昏倒",
       "refs": [
        "nhs-cellulitis"
       ]
      }
     ],
     "doNow": [
      {
       "text": "不要自己開車去急診；把正在吃的藥帶去。",
       "refs": [
        "nhs-dvt"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "一隻腳（通常是小腿或大腿）抽痛、腫脹，皮膚變紅、變暗或發青，或靜脈腫起來",
       "refs": [
        "nhs-dvt"
       ]
      },
      {
       "text": "一塊皮膚痛、熱、腫，可能發紅或起水泡",
       "refs": [
        "nhs-cellulitis"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": []
    },
    "observe": null,
    "observeOmittedReason": "單腳腫痛不提供在家觀察。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "腳的血塊可能跑到肺部，造成肺栓塞，可能危及生命。",
       "refs": [
        "nhs-dvt",
        "mayo-dvt"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "是一隻腳還是兩隻腳？從什麼時候開始？",
     "why": "單腳突然腫痛要先想到血栓。"
    },
    {
     "q": "最近有沒有手術、受傷、長時間坐車搭飛機，或臥床不能動？",
     "why": "這些都會增加血栓的風險。"
    },
    {
     "q": "有沒有吃避孕藥或荷爾蒙、懷孕或剛生產、有癌症？",
     "why": "這些都會增加血栓的風險。"
    },
    {
     "q": "自己或家人以前有沒有血栓？",
     "why": "血栓的病史會增加風險。"
    },
    {
     "q": "有沒有喘或胸痛？",
     "why": "可能是血塊跑到肺部。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "深部靜脈血栓",
      "plain": "腳的靜脈裡有血塊。",
      "refs": [
       "nhs-dvt",
       "mayo-dvt"
      ]
     },
     {
      "name": "肺栓塞",
      "plain": "血塊跑到肺部，突然喘、胸痛。",
      "refs": [
       "nhs-dvt",
       "mayo-dvt"
      ]
     },
     {
      "name": "蜂窩性組織炎",
      "plain": "皮膚感染，紅、腫、熱、痛。",
      "refs": [
       "nhs-cellulitis"
      ]
     }
    ],
    "otherCommon": [],
    "patternsHeading": "依出現的情況",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "一隻小腿或大腿抽痛、腫脹，皮膚發紅或變暗",
      "text": "可能是深部靜脈血栓，請今天就醫。",
      "refs": [
       "nhs-dvt"
      ]
     },
     {
      "pattern": "腳腫痛之後突然喘、胸痛（深呼吸更痛）、頭暈或昏倒",
      "text": "可能是肺栓塞，請立即撥打 119。",
      "refs": [
       "nhs-dvt",
       "mayo-dvt"
      ]
     },
     {
      "pattern": "長時間坐車搭飛機、手術或受傷後不能動、懷孕或產後，出現單腳腫痛",
      "text": "血栓的風險比較高，請今天就醫。",
      "refs": [
       "mayo-dvt"
      ]
     },
     {
      "pattern": "一塊皮膚痛、熱、腫，可能發紅、起水泡，或覺得像感冒一樣不舒服",
      "text": "可能是蜂窩性組織炎，請今天就醫。",
      "refs": [
       "nhs-cellulitis"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "60 歲以上、肥胖、抽菸、有癌症或心臟衰竭、懷孕或產後 6 週內、吃避孕藥或荷爾蒙、以前有過血栓的人，比較容易發生深部靜脈血栓。",
     "refs": [
      "nhs-dvt",
      "mayo-dvt"
     ]
    }
   ],
   "visitPreparation": [
    "腫痛開始的時間、哪一隻腳",
    "最近的手術、受傷、長途旅行",
    "使用中的所有藥物，特別是避孕藥、荷爾蒙",
    "自己和家人的血栓病史"
   ],
   "sources": [
    "nhs-dvt",
    "mayo-dvt",
    "nhs-pe",
    "nhs-cellulitis"
   ]
  },
  {
   "slug": "sprain-fracture",
   "title": "扭傷、骨折（手腳受傷）",
   "bodyArea": "limbs",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "扭傷",
    "腳扭到",
    "拐到腳",
    "手扭到",
    "骨折",
    "斷掉",
    "手腕痛",
    "腳踝扭傷",
    "腳踝腫",
    "韌帶拉傷",
    "肌肉拉傷",
    "跌倒手腫",
    "脫臼"
   ],
   "summary": "扭傷和拉傷很常見，前 2 到 3 天可以休息、冰敷、抬高。但手腳變形或角度怪異、骨頭突出、麻木刺痛、腳趾或手指發白發青、嚴重出血或劇痛，請立即到急診。",
   "definition": "扭傷是韌帶拉傷或扭到；拉傷是肌肉受傷。手腕骨折、脫臼和嚴重扭傷很難從外表分辨，通常需要照 X 光。",
   "definitionRefs": [
    "nhs-sprain",
    "nhs-broken-arm"
   ],
   "actions": {
    "emergency": {
     "heading": "立即到急診",
     "intro": "受傷後有下列任何一項，請立即到急診：",
     "items": [
      {
       "text": "手、腳變形，或角度很怪",
       "refs": [
        "nhs-broken-arm",
        "nhs-broken-ankle"
       ]
      },
      {
       "text": "骨頭從皮膚穿出來",
       "refs": [
        "nhs-broken-arm",
        "nhs-broken-ankle"
       ]
      },
      {
       "text": "受傷的手或腳麻木、刺痛，或腳趾、手指發青、發白",
       "refs": [
        "nhs-broken-arm",
        "nhs-broken-ankle"
       ]
      },
      {
       "text": "有嚴重的傷口，或大量出血",
       "refs": [
        "nhs-broken-arm",
        "nhs-broken-ankle"
       ]
      },
      {
       "text": "劇烈疼痛",
       "refs": [
        "nhs-broken-ankle"
       ]
      },
      {
       "text": "受傷當下聽到「喀」一聲",
       "refs": [
        "nhs-sprain"
       ]
      },
      {
       "text": "受傷部位周圍的皮膚變青、變灰，或摸起來冰冷",
       "refs": [
        "nhs-sprain"
       ]
      }
     ],
     "doNow": [
      {
       "text": "手受傷：用毛巾做成三角巾吊著手臂；拿掉戒指、手錶，手指可能會腫起來。",
       "refs": [
        "nhs-broken-arm"
       ]
      },
      {
       "text": "有傷口出血：用乾淨的布壓住止血；骨頭穿出時，壓在傷口周圍，不要直接壓在骨頭上。",
       "refs": [
        "nhs-broken-arm",
        "nhs-broken-ankle"
       ]
      },
      {
       "text": "可能需要手術時，到醫院前先不要吃喝東西。",
       "refs": [
        "nhs-broken-arm"
       ]
      },
      {
       "text": "不要自己開車去急診。",
       "refs": [
        "nhs-broken-arm",
        "nhs-broken-ankle"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "很痛，或愈來愈痛",
       "refs": [
        "nhs-sprain",
        "nhs-broken-arm",
        "nhs-broken-ankle"
       ]
      },
      {
       "text": "腫得很厲害、瘀青很多，或愈來愈嚴重",
       "refs": [
        "nhs-sprain",
        "nhs-broken-arm"
       ]
      },
      {
       "text": "腳完全不能踩地，或走不到幾步",
       "refs": [
        "nhs-sprain",
        "nhs-broken-ankle"
       ]
      },
      {
       "text": "很僵硬、很難活動",
       "refs": [
        "nhs-sprain",
        "nhs-broken-arm"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "輕微扭傷，沒有上方任何一項：可以到診所看診",
       "refs": [
        "nhs-sprain"
       ]
      },
      {
       "text": "自己照顧之後沒有改善，或愈來愈嚴重",
       "refs": [
        "nhs-sprain"
       ]
      }
     ],
     "doNow": [
      {
       "text": "前 2 到 3 天：休息，不要讓受傷的地方承重；用毛巾包冰袋冰敷，每 2 到 3 小時最多冰 20 分鐘；儘量抬高。",
       "refs": [
        "nhs-sprain"
       ]
      },
      {
       "text": "前幾天避免熱敷、泡熱水、喝酒和按摩，可以減少腫脹。",
       "refs": [
        "nhs-sprain"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "手腕骨折、脫臼和嚴重扭傷很難從外表分辨，通常需要照 X 光。",
       "refs": [
        "nhs-broken-arm"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "怎麼受傷的？",
     "why": "受傷的方式幫助判斷有沒有骨折。"
    },
    {
     "q": "受傷的腳能不能踩地？手能不能用？",
     "why": "無法承重或使用可能是骨折。"
    },
    {
     "q": "有沒有麻、刺痛，手指腳趾的顏色正常嗎？",
     "why": "可能是神經或血管受傷。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "骨折",
      "plain": "受傷後突然疼痛、腫、瘀青、很難活動，可能變形或麻。",
      "refs": [
       "nhs-broken-arm",
       "nhs-broken-ankle"
      ]
     },
     {
      "name": "開放性骨折",
      "plain": "骨頭穿出皮膚。",
      "refs": [
       "nhs-broken-arm",
       "nhs-broken-ankle"
      ]
     },
     {
      "name": "神經或血管受傷",
      "plain": "麻木、刺痛，手指腳趾發青發白。",
      "refs": [
       "nhs-broken-arm",
       "nhs-broken-ankle"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "扭傷（韌帶）",
      "plain": "常在腳踝、手腕、拇指、膝蓋。",
      "refs": [
       "nhs-sprain"
      ]
     },
     {
      "name": "拉傷（肌肉）",
      "plain": "可能有肌肉抽筋。",
      "refs": [
       "nhs-sprain"
      ]
     }
    ],
    "patternsHeading": "依受傷後的情況",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "受傷的手腳變形、角度怪異，或骨頭穿出",
      "text": "請立即到急診。",
      "refs": [
       "nhs-broken-arm",
       "nhs-broken-ankle"
      ]
     },
     {
      "pattern": "受傷後手指或腳趾發青、發白、麻",
      "text": "可能壓迫到血管或神經，請立即到急診。",
      "refs": [
       "nhs-broken-arm",
       "nhs-broken-ankle"
      ]
     },
     {
      "pattern": "腳踝扭到後腫痛，可以踩地走路",
      "text": "可能是扭傷；前 2 到 3 天休息、冰敷、抬高，請到診所看診。",
      "refs": [
       "nhs-sprain"
      ]
     },
     {
      "pattern": "腳完全不能踩地，或走不到幾步",
      "text": "可能是骨折，請今天就醫照 X 光。",
      "refs": [
       "nhs-sprain",
       "nhs-broken-ankle"
      ]
     }
    ]
   },
   "specialPopulations": [],
   "visitPreparation": [
    "受傷的時間和方式",
    "使用中的所有藥物",
    "受傷後有沒有吃東西（可能需要手術時）"
   ],
   "sources": [
    "nhs-sprain",
    "nhs-broken-arm",
    "nhs-broken-ankle"
   ]
  },
  {
   "slug": "headache",
   "title": "頭痛",
   "aliases": [
    "頭疼",
    "頭很痛",
    "偏頭痛",
    "頭脹",
    "頭脹痛",
    "太陽穴痛",
    "後腦痛",
    "後腦勺痛",
    "頭快爆炸",
    "頭暈頭痛",
    "頭重"
   ],
   "bodyArea": "head",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。兒童頭痛請諮詢醫師。",
   "summary": "大多數頭痛是緊縮型頭痛或偏頭痛，不會危及生命。但少數頭痛是腦出血、中風、腦膜炎或一氧化碳中毒的警訊，需要立即處理。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-11",
   "nextReviewAt": "2027-11-11",
   "actions": {
    "emergency": {
     "heading": "立即撥打 119",
     "intro": "頭痛加上下列任何一項，請馬上撥打 119：",
     "items": [
      {
       "text": "突然爆發的劇烈頭痛，很快就痛到最高點",
       "refs": [
        "nhs-headache",
        "mayo-headache",
        "mlp-headache"
       ]
      },
      {
       "text": "這輩子最痛的一次頭痛——即使你平常就常頭痛",
       "refs": [
        "mayo-headache",
        "mlp-headache"
       ]
      },
      {
       "text": "可能是中風——記住「微笑、舉手、說你好」，任何一個動作做不好就撥打 119：臉歪一邊、一側手腳無力或麻木、說話不清楚、聽不懂別人說話、失去平衡或走路困難、突然看不見或看不清楚。症狀很快緩解也一樣要送醫",
       "refs": [
        "nhs-headache",
        "mayo-headache",
        "mlp-headache",
        "asa-stroke",
        "mohw-stroke",
        "nhs-tia"
       ]
      },
      {
       "text": "高燒、脖子僵硬、怕光，或皮膚出現壓了不會消失的紅紫色疹子（任一項就算）",
       "refs": [
        "nhs-headache",
        "mayo-headache"
       ]
      },
      {
       "text": "最近（3 個月內）頭部受到撞擊後頭痛",
       "refs": [
        "nhs-headache",
        "mayo-headache"
       ]
      },
      {
       "text": "意識混亂、很想睡、記憶出問題、抽搐或昏倒",
       "refs": [
        "nhs-headache",
        "mlp-headache",
        "mayo-headache"
       ]
      },
      {
       "text": "頭痛合併說不出原因的噁心、嘔吐（不像感冒或宿醉）",
       "refs": [
        "mayo-headache"
       ]
      },
      {
       "text": "頭痛合併眼睛紅、眼睛痛（可能是急性青光眼）",
       "refs": [
        "nhs-glaucoma",
        "mlp-headache"
       ]
      }
     ],
     "doNow": [
      {
       "text": "撥打 119 叫救護車，不要自己開車。可以的話把平常用的藥帶著。",
       "refs": [
        "nhs-headache"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "第一次出現、而且影響日常生活的頭痛",
       "refs": [
        "mlp-headache"
       ]
      },
      {
       "text": "50 歲以上第一次出現的新型態頭痛",
       "refs": [
        "mlp-headache"
       ]
      },
      {
       "text": "太陽穴痛、頭皮一碰就痛，或咀嚼時下巴痛",
       "refs": [
        "nhs-headache",
        "nhs-gca"
       ]
      },
      {
       "text": "咳嗽、打噴嚏、彎腰或運動時誘發頭痛，或讓頭痛變嚴重",
       "refs": [
        "nhs-headache"
       ]
      },
      {
       "text": "頭痛在 24 小時內愈來愈嚴重，或合併體重減輕",
       "refs": [
        "mlp-headache"
       ]
      },
      {
       "text": "免疫力低下（例如化療中、愛滋病）或有癌症病史的人出現新的頭痛",
       "refs": [
        "mlp-headache"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "頭痛反覆發作、影響工作或睡眠",
       "refs": [
        "nhs-headache",
        "mayo-headache"
       ]
      },
      {
       "text": "一週有 3 天以上需要吃止痛藥（可能造成「藥物過度使用頭痛」）",
       "refs": [
        "mlp-headache"
       ]
      },
      {
       "text": "頭痛的型態和平常不一樣，或止痛藥沒有效",
       "refs": [
        "mayo-headache",
        "nhs-headache"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。"
   },
   "keyQuestions": [
    {
     "q": "是突然爆發，還是慢慢開始？多久痛到最高點？",
     "why": "突然爆發的頭痛需要排除腦出血。"
    },
    {
     "q": "這種頭痛以前有過嗎？和平常的頭痛一樣嗎？",
     "why": "新的或型態改變的頭痛需要評估。"
    },
    {
     "q": "有沒有發燒、脖子硬、嘔吐、手腳無力、說話不清、視力改變？",
     "why": "這些是嚴重原因的警訊。"
    },
    {
     "q": "最近頭部有沒有受傷？有沒有吃抗凝血藥？",
     "why": "外傷加上抗凝血藥會增加腦出血風險。"
    },
    {
     "q": "家裡其他人也有類似症狀嗎？在哪裡發作？",
     "why": "多人同時發作要考慮一氧化碳中毒。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "蜘蛛網膜下腔出血（腦出血的一種）",
      "plain": "腦部血管破裂，常見突然爆發的劇烈頭痛。",
      "refs": [
       "guideline-headache-2019",
       "mayo-headache"
      ]
     },
     {
      "name": "中風",
      "plain": "腦部血管阻塞或出血。",
      "refs": [
       "mayo-headache",
       "asa-stroke"
      ]
     },
     {
      "name": "腦膜炎、腦炎",
      "plain": "腦部或包覆腦的薄膜感染。",
      "refs": [
       "mayo-headache",
       "nhs-headache"
      ]
     },
     {
      "name": "一氧化碳中毒",
      "plain": "不通風環境使用瓦斯或燒炭。",
      "refs": [
       "cdc-co"
      ]
     },
     {
      "name": "頭部外傷後顱內出血",
      "plain": "撞擊後腦內出血。",
      "refs": [
       "mayo-headache"
      ]
     },
     {
      "name": "急性青光眼",
      "plain": "眼壓突然升高，眼睛紅痛、視力模糊。",
      "refs": [
       "mayo-headache"
      ]
     },
     {
      "name": "巨細胞動脈炎（顳動脈炎）",
      "plain": "年長者頭部血管發炎，可能影響視力。",
      "refs": [
       "mayo-headache"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "緊縮型頭痛",
      "plain": "最常見，頭像被箍住，壓力或姿勢不良誘發。",
      "refs": [
       "mayo-headache",
       "mlp-headache"
      ]
     },
     {
      "name": "偏頭痛",
      "plain": "常為單側搏動性痛，可能怕光、噁心。",
      "refs": [
       "mayo-headache",
       "mlp-headache"
      ]
     },
     {
      "name": "藥物過度使用頭痛",
      "plain": "止痛藥吃太多天反而引起頭痛。",
      "refs": [
       "mayo-headache",
       "nhs-headache",
       "mlp-headache"
      ]
     },
     {
      "name": "感冒、鼻竇炎",
      "plain": "合併鼻塞、發燒。",
      "refs": [
       "mayo-headache"
      ]
     },
     {
      "name": "睡眠不足、脫水、咖啡因戒斷、飲酒",
      "plain": "生活型態相關。",
      "refs": [
       "nhs-headache",
       "mayo-headache",
       "mlp-headache"
      ]
     }
    ],
    "patternsHeading": "依頭痛的特徵",
    "patternsIntro": "頭痛的特徵只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "突然爆發、極度劇烈的頭痛，可能合併脖子僵硬、嘔吐、怕光",
      "text": "可能是蜘蛛網膜下腔出血（腦出血的一種），請立即撥打 119。",
      "refs": [
       "nhs-sah"
      ]
     },
     {
      "pattern": "頭痛合併臉歪一邊、一側手腳無力或麻木、說話不清楚、看不清楚",
      "text": "可能是中風或腦出血，請立即撥打 119。",
      "refs": [
       "nhs-sah",
       "nhs-migraine"
      ]
     },
     {
      "pattern": "發燒、脖子僵硬、看亮光眼睛會痛、頭痛愈來愈嚴重，或出現壓了不會褪色的疹子",
      "text": "可能是腦膜炎，請立即撥打 119。",
      "refs": [
       "nhs-meningitis"
      ]
     },
     {
      "pattern": "待在某個房間或建築物時頭痛、頭暈、噁心，離開或到戶外後好一些",
      "text": "可能是一氧化碳中毒。請立刻到戶外並就醫，不要再回到那個空間。",
      "refs": [
       "nhs-co",
       "cdc-co"
      ]
     },
     {
      "pattern": "眼睛劇痛、發紅，視力模糊，看燈光有彩虹般的光圈，噁心嘔吐",
      "text": "可能是急性青光眼，請立即到急診。",
      "refs": [
       "nhs-glaucoma"
      ]
     },
     {
      "pattern": "太陽穴或頭皮一碰就痛，吃東西或說話時下巴痛，看東西變兩個，或一眼、兩眼看不見",
      "text": "可能是顳動脈炎，沒有儘快治療可能造成失明或中風，請今天就醫；如果看東西變兩個、一眼或兩眼看不見，請立即到急診。",
      "refs": [
       "nhs-gca",
       "nhs-headache"
      ]
     },
     {
      "pattern": "頭的兩側像被壓住或箍緊，脖子痠痛，還能照常活動",
      "text": "常見於緊縮型頭痛。",
      "refs": [
       "nhs-tension",
       "mlp-headache"
      ]
     },
     {
      "pattern": "頭的一側一跳一跳地痛，活動時更痛，噁心嘔吐，怕光怕吵；有些人先看到閃光或鋸齒狀的線",
      "text": "常見於偏頭痛。",
      "refs": [
       "nhs-migraine",
       "mlp-headache"
      ]
     },
     {
      "pattern": "一側眼睛周圍尖銳的劇痛，每次 15 分鐘到 3 小時，同一側眼睛紅、流淚、鼻塞，痛到坐不住",
      "text": "可能是叢發性頭痛，請儘快安排門診。第一次出現一邊眼皮下垂或兩眼瞳孔大小不同，請立即到急診。",
      "refs": [
       "nhs-cluster"
      ]
     },
     {
      "pattern": "臉頰、眼睛周圍或前額痛而且有壓痛，合併鼻塞、黃綠色鼻涕，常在感冒後出現",
      "text": "常見於鼻竇炎。",
      "refs": [
       "nhs-sinusitis",
       "mlp-headache"
      ]
     },
     {
      "pattern": "每週超過 3 天規律地吃止痛藥，頭痛卻一再出現",
      "text": "可能是藥物過度使用頭痛，請儘快安排門診。",
      "refs": [
       "mlp-headache"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "正在使用抗凝血藥（俗稱血液稀釋劑）的人，頭部撞到之後出現頭痛，請立即到急診；有「頭部撞傷」頁的危險徵兆時，請撥打 119。",
     "refs": [
      "nhs-head"
     ]
    }
   ],
   "visitPreparation": [
    "頭痛開始的時間，多快痛到最高點",
    "痛的位置與感覺，以前是否有過",
    "每週吃止痛藥的天數與藥名",
    "使用中的所有藥物，特別是抗凝血藥、避孕藥",
    "伴隨症狀：發燒、嘔吐、視力或手腳的改變",
    "發作的環境，以及同住的人是否有類似症狀"
   ],
   "sources": [
    "nhs-headache",
    "mayo-headache",
    "mlp-headache",
    "asa-stroke",
    "mohw-stroke",
    "nhs-tia",
    "nhs-glaucoma",
    "nhs-gca",
    "guideline-headache-2019",
    "cdc-co",
    "nhs-sah",
    "nhs-migraine",
    "nhs-meningitis",
    "nhs-co",
    "nhs-tension",
    "nhs-cluster",
    "nhs-sinusitis",
    "nhs-head"
   ],
   "thinking": {
    "status": "published",
    "heading": "醫師怎麼想",
    "intro": "醫師看頭痛，會先排除會致命的原因，再分「頭痛本身就是問題」還是「其他疾病造成的頭痛」。這只是說明醫師的思考順序，不能用來自己判斷；只要有上方「立即求助」的任何一項，請立即就醫。",
    "steps": [
     {
      "title": "先排除會致命的原因",
      "text": "蜘蛛網膜下腔出血、中風、腦膜炎、一氧化碳中毒、頭部外傷後顱內出血、急性青光眼、巨細胞動脈炎。",
      "refs": [
       "mayo-headache"
      ]
     },
     {
      "title": "原發性頭痛：頭痛本身就是問題",
      "text": "不是其他疾病造成的，例如緊縮型頭痛、偏頭痛、叢發性頭痛。",
      "refs": [
       "mayo-headache"
      ]
     },
     {
      "title": "續發性頭痛：其他疾病造成的頭痛",
      "text": "輕重差很多，例如鼻竇炎、止痛藥用太多，也包括上面那些會致命的原因。",
      "refs": [
       "mayo-headache"
      ]
     }
    ]
   }
  },
  {
   "slug": "head-injury",
   "title": "頭部撞傷",
   "bodyArea": "head",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "撞到頭",
    "頭部撞傷",
    "頭部外傷",
    "跌倒撞到頭",
    "腦震盪",
    "頭撞到",
    "頭受傷",
    "車禍撞到頭",
    "頭腫一包",
    "摔到頭"
   ],
   "summary": "大多數頭部撞傷不嚴重，但出現任何症狀都要就醫。撞到後叫不醒、一直想睡、抽搐、手腳無力、說話或走路有困難，請立即撥打 119。",
   "definition": "腦震盪是頭部撞傷後暫時的腦部損傷，症狀可能持續幾週。",
   "definitionRefs": [
    "nhs-head"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "撞到頭，加上下列任何一項，請立即撥打 119 或到急診：",
     "items": [
      {
       "text": "昏過去還沒醒，或醒著但一直想睡、張不開眼睛",
       "refs": [
        "nhs-head",
        "mayo-head-fa"
       ]
      },
      {
       "text": "抽搐",
       "refs": [
        "nhs-head",
        "mayo-head-fa"
       ]
      },
      {
       "text": "從超過 1 公尺或 5 階樓梯的高度摔下，或車禍等高速撞擊",
       "refs": [
        "nhs-head",
        "mayo-head-fa"
       ]
      },
      {
       "text": "看東西或聽力有問題，或兩邊瞳孔一大一小",
       "refs": [
        "nhs-head",
        "mayo-head-fa"
       ]
      },
      {
       "text": "耳朵或鼻子流出透明的液體或血、耳朵後面瘀青，或沒撞到眼睛卻出現黑眼圈",
       "refs": [
        "nhs-head",
        "mayo-head-fa"
       ]
      },
      {
       "text": "身體任何部位新出現麻木或無力，或走路、平衡、理解、說話、書寫有困難",
       "refs": [
        "nhs-head",
        "mayo-head-fa"
       ]
      },
      {
       "text": "頭部傷口有東西插著、頭骨凹陷，或頭臉大量出血",
       "refs": [
        "nhs-head",
        "mayo-head-fa"
       ]
      },
      {
       "text": "行為改變，或意識混亂、躁動愈來愈嚴重",
       "refs": [
        "nhs-head",
        "mayo-head-fa"
       ]
      },
      {
       "text": "有吃抗凝血藥，或有容易出血的疾病（即使沒有其他症狀，也請立即到急診）",
       "refs": [
        "nhs-head"
       ]
      },
      {
       "text": "撞到之後曾經昏過去超過幾秒，即使現在已經醒來",
       "refs": [
        "mayo-head-fa"
       ]
      },
      {
       "text": "撞到頭之後嘔吐（即使只吐一次）",
       "refs": [
        "nhs-head",
        "nice-head"
       ]
      },
      {
       "text": "受傷時有喝酒或用藥",
       "refs": [
        "nhs-head",
        "nice-head"
       ]
      },
      {
       "text": "想不起受傷前後發生的事",
       "refs": [
        "nice-head"
       ]
      }
     ],
     "doNow": [
      {
       "text": "讓他靜靜躺著，頭和肩膀稍微墊高。除非必要不要移動他，避免轉動脖子；戴著安全帽的不要脫下。",
       "refs": [
        "mayo-head-fa"
       ]
      },
      {
       "text": "用乾淨的布用力按壓止血；懷疑頭骨骨折時，不要直接用力壓傷口。",
       "refs": [
        "mayo-head-fa"
       ]
      },
      {
       "text": "沒有呼吸、咳嗽或任何動作：開始心肺復甦術（做法見「緊急狀況怎麼辦」頁）。",
       "refs": [
        "mayo-head-fa",
        "nfa-cpr"
       ]
      },
      {
       "text": "撞到頭的人不要自己開車去醫院。",
       "refs": [
        "nhs-head"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "撞到頭之後頭暈",
       "refs": [
        "nhs-head"
       ]
      },
      {
       "text": "頭痛、耳鳴、平衡不好、視力模糊、無法專心等腦震盪症狀",
       "refs": [
        "mayo-head-fa"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "症狀超過 2 週沒有好，或不確定什麼時候可以開車、上班上學或運動",
       "refs": [
        "nhs-head"
       ]
      }
     ],
     "doNow": [
      {
       "text": "受傷後前幾天，用毛巾包冰袋冰敷，每次短時間，可以消腫。",
       "refs": [
        "nhs-head"
       ]
      },
      {
       "text": "受傷後至少前 24 小時，要有大人陪在旁邊。",
       "refs": [
        "nhs-head"
       ]
      },
      {
       "text": "完全恢復之前不要開車、喝酒或吃安眠藥；至少 3 週不要從事會碰撞的運動。",
       "refs": [
        "nhs-head"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "大多數頭部撞傷不嚴重，但出現任何症狀都要就醫。",
       "refs": [
        "nhs-head"
       ]
      },
      {
       "text": "受傷後的症狀可能持續到 2 週。",
       "refs": [
        "nhs-head"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "怎麼撞到的？從多高摔下？",
     "why": "撞擊的力道和頭部傷害的風險有關。"
    },
    {
     "q": "有沒有昏過去？多久？",
     "why": "昏迷的時間是重要的資訊。"
    },
    {
     "q": "有沒有吃抗凝血藥或阿斯匹靈？",
     "why": "這些藥會增加出血的風險。"
    },
    {
     "q": "撞到後有沒有吐、頭痛、頭暈或一直想睡？",
     "why": "這些可能是腦部受傷的表現。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "頭部外傷後顱內出血",
      "plain": "",
      "refs": [
       "mayo-headache"
      ]
     },
     {
      "name": "頭骨骨折",
      "plain": "",
      "refs": [
       "mayo-head-fa"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "腦震盪",
      "plain": "頭痛、噁心、耳鳴、平衡不好、視力模糊、無法專心。",
      "refs": [
       "nhs-head",
       "mayo-head-fa"
      ]
     },
     {
      "name": "頭皮瘀青或腫包",
      "plain": "",
      "refs": [
       "nhs-head"
      ]
     }
    ],
    "patternsHeading": "依撞傷後的情況",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "撞到後一直想睡、叫不太醒，或意識愈來愈差",
      "text": "可能是嚴重的腦部傷害，請立即撥打 119。",
      "refs": [
       "nhs-head",
       "mayo-head-fa"
      ]
     },
     {
      "pattern": "耳朵或鼻子流出透明液體、耳後瘀青，或沒撞到眼睛卻出現黑眼圈",
      "text": "可能是嚴重的頭部傷害，請立即撥打 119。",
      "refs": [
       "nhs-head",
       "mayo-head-fa"
      ]
     },
     {
      "pattern": "頭痛、噁心、耳鳴、平衡不好、視力模糊、無法專心",
      "text": "可能是腦震盪，請今天就醫評估。",
      "refs": [
       "mayo-head-fa"
      ]
     },
     {
      "pattern": "有吃抗凝血藥的人撞到頭",
      "text": "請立即到急診評估；出現上方任何一項，請撥打 119。",
      "refs": [
       "nhs-head"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "有吃抗凝血藥或有容易出血的疾病，撞到頭請立即到急診；受傷時有喝酒或用藥，也請立即到急診。",
     "refs": [
      "nhs-head",
      "nice-head"
     ]
    }
   ],
   "visitPreparation": [
    "怎麼撞到、從多高摔下",
    "有沒有昏過去、多久",
    "使用中的所有藥物，特別是抗凝血藥、阿斯匹靈",
    "看到經過的人一起去"
   ],
   "sources": [
    "nhs-head",
    "mayo-head-fa",
    "nice-head",
    "nfa-cpr",
    "mayo-headache"
   ]
  },
  {
   "slug": "eye-problems",
   "title": "眼睛紅、痛，或視力突然改變",
   "bodyArea": "head",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "眼睛紅",
    "紅眼",
    "眼睛痛",
    "眼睛紅痛",
    "看不清楚",
    "視力模糊",
    "眼前有黑影",
    "飛蚊症",
    "閃光",
    "眼睛被噴到",
    "化學物質噴到眼睛",
    "眼睛有異物",
    "結膜炎",
    "眼睛充血"
   ],
   "summary": "眼睛紅多半是感染或乾眼，常不嚴重。但突然看不見、視力改變、眼睛劇痛、看亮光會痛、眼睛受傷或被化學品噴到，請立即到急診。",
   "definition": "眼睛紅通常是感染或乾眼造成，但原因很多，請不要自己判斷。",
   "definitionRefs": [
    "nhs-red-eye"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "有下列任何一項，請立即到急診：",
     "items": [
      {
       "text": "一眼或兩眼突然看不見",
       "refs": [
        "nhs-vision-loss",
        "nhs-eye-pain"
       ]
      },
      {
       "text": "突然劇烈眼睛痛，或痛到晚上睡不著",
       "refs": [
        "nhs-vision-loss",
        "nhs-eye-pain"
       ]
      },
      {
       "text": "眼睛紅，加上視力改變（波浪線、閃光、看不見）",
       "refs": [
        "nhs-red-eye"
       ]
      },
      {
       "text": "眼睛紅，加上看亮光會痛",
       "refs": [
        "nhs-red-eye"
       ]
      },
      {
       "text": "眼睛紅，加上劇烈頭痛和噁心",
       "refs": [
        "nhs-red-eye",
        "nhs-eye-pain"
       ]
      },
      {
       "text": "眼睛受傷、被刺到，或有東西卡在眼睛裡（例如玻璃、砂石）",
       "refs": [
        "nhs-red-eye",
        "nhs-eye-pain",
        "nhs-eye-injury"
       ]
      },
      {
       "text": "漂白水、清潔劑等化學品噴到眼睛",
       "refs": [
        "nhs-red-eye",
        "nhs-eye-injury"
       ]
      },
      {
       "text": "兩邊瞳孔一大一小",
       "refs": [
        "nhs-red-eye"
       ]
      },
      {
       "text": "戴隱形眼鏡，眼睛痛又看不清楚",
       "refs": [
        "nhs-eye-pain"
       ]
      },
      {
       "text": "最近 4 週內做過眼睛手術或治療，眼睛劇痛或看不清楚",
       "refs": [
        "nhs-eye-pain"
       ]
      }
     ],
     "doNow": [
      {
       "text": "化學品噴到眼睛：立刻用大量乾淨的流動清水（不要用熱水）輕柔沖眼睛至少 20 分鐘，等救護時也繼續沖；不要自己用其他藥水中和。把容器帶去醫院。",
       "refs": [
        "nhs-eye-injury",
        "tsem-chem"
       ]
      },
      {
       "text": "不要自己開車去急診，請別人載或撥打 119。",
       "refs": [
        "nhs-red-eye",
        "nhs-eye-pain"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "眼睛很紅、很痛",
       "refs": [
        "nhs-red-eye",
        "nhs-vision-loss"
       ]
      },
      {
       "text": "視力模糊、看東西有兩個影像，或看到閃光",
       "refs": [
        "nhs-vision-loss",
        "nhs-eye-pain"
       ]
      },
      {
       "text": "眼前突然出現很多黑點、線條（飛蚊），或有一片黑影像簾幕一樣移過來",
       "refs": [
        "nhs-retinal-detach",
        "nhs-vision-loss"
       ]
      },
      {
       "text": "戴隱形眼鏡，眼睛紅",
       "refs": [
        "nhs-red-eye"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "眼睛紅、有黏黏的分泌物",
       "refs": [
        "nhs-red-eye"
       ]
      },
      {
       "text": "眼睛紅或眼皮、睫毛的問題超過幾天",
       "refs": [
        "nhs-red-eye"
       ]
      },
      {
       "text": "視力慢慢變差",
       "refs": [
        "nhs-vision-loss"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "有些造成視力喪失的疾病可能永久失明，早期診斷和治療可能避免視力繼續變差。",
       "refs": [
        "nhs-vision-loss"
       ]
      },
      {
       "text": "強鹼化學品造成的灼傷往往比外表看起來更深，疼痛也可能延遲出現。",
       "refs": [
        "tsem-chem"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "是一眼還是兩眼？突然發生還是慢慢變差？",
     "why": "突然的視力改變需要立即處理。"
    },
    {
     "q": "有沒有痛、怕光、分泌物、看到閃光或黑影？",
     "why": "幫助分辨原因。"
    },
    {
     "q": "有沒有受傷、被噴到東西、戴隱形眼鏡？",
     "why": "這些需要特別處理。"
    },
    {
     "q": "最近有沒有做過眼睛手術？有沒有糖尿病？",
     "why": "和併發症、視力變差的原因有關。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "急性青光眼",
      "plain": "眼睛紅、痛，合併劇烈頭痛、噁心。",
      "refs": [
       "nhs-red-eye",
       "nhs-glaucoma"
      ]
     },
     {
      "name": "視網膜剝離",
      "plain": "突然很多飛蚊、閃光，或黑影像簾幕一樣移過來。",
      "refs": [
       "nhs-retinal-detach",
       "nhs-vision-loss"
      ]
     },
     {
      "name": "眼睛受傷或化學品灼傷",
      "plain": "",
      "refs": [
       "nhs-eye-injury"
      ]
     },
     {
      "name": "眼睛裡面的感染或發炎",
      "plain": "例如戴隱形眼鏡造成的感染、葡萄膜炎：痛、紅、視力模糊、怕光。",
      "refs": [
       "nhs-eye-pain"
      ]
     },
     {
      "name": "中風",
      "plain": "突然看不見，可能合併臉歪、手腳無力、說話不清楚。",
      "refs": [
       "nhs-stroke"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "結膜炎",
      "plain": "眼睛有沙沙或灼熱感，有黏黏的分泌物。",
      "refs": [
       "nhs-red-eye",
       "nhs-eye-pain"
      ]
     },
     {
      "name": "乾眼",
      "plain": "眼睛痠、模糊、流眼淚。",
      "refs": [
       "nhs-red-eye",
       "nhs-eye-pain"
      ]
     },
     {
      "name": "結膜下出血",
      "plain": "眼白上一塊鮮紅色。",
      "refs": [
       "nhs-red-eye"
      ]
     },
     {
      "name": "眼皮發炎、睫毛倒插",
      "plain": "",
      "refs": [
       "nhs-red-eye"
      ]
     },
     {
      "name": "白內障",
      "plain": "視力慢慢變模糊，看燈光有光暈。",
      "refs": [
       "nhs-vision-loss"
      ]
     }
    ],
    "patternsHeading": "依眼睛的症狀",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "眼睛紅、痛，合併劇烈頭痛、噁心",
      "text": "可能是急性青光眼，請立即到急診。",
      "refs": [
       "nhs-red-eye",
       "nhs-glaucoma"
      ]
     },
     {
      "pattern": "突然出現很多飛蚊或閃光，或有黑影像簾幕一樣移過來",
      "text": "可能是視網膜剝離，請今天就醫；看不見請立即到急診。",
      "refs": [
       "nhs-retinal-detach",
       "nhs-vision-loss"
      ]
     },
     {
      "pattern": "一眼突然看不見，合併臉歪、手腳無力或說話不清楚",
      "text": "可能是中風，請立即撥打 119。",
      "refs": [
       "nhs-stroke"
      ]
     },
     {
      "pattern": "眼白上一塊鮮紅色",
      "text": "可能是結膜下出血（微血管破裂）；合併痛、視力改變或受傷，請依上方就醫。",
      "refs": [
       "nhs-red-eye"
      ]
     },
     {
      "pattern": "眼睛有沙沙、灼熱感，有黏黏的分泌物",
      "text": "可能是結膜炎，請安排門診。",
      "refs": [
       "nhs-red-eye",
       "nhs-eye-pain"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "有糖尿病的人視力慢慢變差，請安排眼科檢查。",
     "refs": [
      "nhs-vision-loss"
     ]
    }
   ],
   "visitPreparation": [
    "症狀開始的時間、哪一隻眼睛",
    "化學品噴到時，帶著容器",
    "使用中的眼藥和其他藥物",
    "有沒有戴隱形眼鏡、最近的眼睛手術"
   ],
   "sources": [
    "nhs-red-eye",
    "nhs-vision-loss",
    "nhs-eye-pain",
    "nhs-eye-injury",
    "tsem-chem",
    "nhs-retinal-detach",
    "nhs-glaucoma",
    "nhs-stroke"
   ]
  },
  {
   "slug": "nosebleed",
   "title": "流鼻血",
   "bodyArea": "head",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "流鼻血",
    "鼻出血",
    "鼻子流血",
    "鼻血",
    "鼻血止不住"
   ],
   "summary": "流鼻血很常見，通常不嚴重，大多可以自己止血：坐下、身體前傾、捏住鼻翼 10 到 15 分鐘。流超過 10 到 15 分鐘、量很多、撞到頭後流鼻血，或覺得虛弱、頭暈、呼吸困難，請立即到急診。",
   "definition": "鼻子裡面很容易受傷而流血，例如挖鼻孔、太用力擤鼻涕或鼻腔太乾。",
   "definitionRefs": [
    "nhs-nosebleed"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "流鼻血，加上下列任何一項，請立即就醫：",
     "items": [
      {
       "text": "流超過 10 到 15 分鐘還沒停",
       "refs": [
        "nhs-nosebleed"
       ]
      },
      {
       "text": "出血量看起來很多",
       "refs": [
        "nhs-nosebleed"
       ]
      },
      {
       "text": "吞下很多血而吐出來",
       "refs": [
        "nhs-nosebleed"
       ]
      },
      {
       "text": "撞到頭之後開始流鼻血",
       "refs": [
        "nhs-nosebleed"
       ]
      },
      {
       "text": "覺得虛弱或頭暈",
       "refs": [
        "nhs-nosebleed"
       ]
      },
      {
       "text": "呼吸困難",
       "refs": [
        "nhs-nosebleed"
       ]
      }
     ],
     "doNow": [
      {
       "text": "坐下來，身體和頭往前傾，嘴巴張開用嘴呼吸。",
       "refs": [
        "nhs-nosebleed"
       ]
      },
      {
       "text": "捏住鼻孔上方軟的地方 10 到 15 分鐘。",
       "refs": [
        "nhs-nosebleed"
       ]
      },
      {
       "text": "不要自己開車去急診，請別人載或撥打 119；把正在吃的藥帶去。",
       "refs": [
        "nhs-nosebleed"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": []
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "常常流鼻血",
       "refs": [
        "nhs-nosebleed"
       ]
      },
      {
       "text": "有貧血的症狀：心悸、喘、臉色比平常蒼白",
       "refs": [
        "nhs-nosebleed"
       ]
      },
      {
       "text": "正在吃抗凝血藥（例如 warfarin）",
       "refs": [
        "nhs-nosebleed"
       ]
      },
      {
       "text": "有凝血方面的疾病（例如血友病）",
       "refs": [
        "nhs-nosebleed"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "需要就醫的流鼻血，常是從鼻子比較深的地方流出來，多發生在成人。",
       "refs": [
        "nhs-nosebleed"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "流了多久？量多少？",
     "why": "決定需不需要立即處理。"
    },
    {
     "q": "有沒有撞到頭或鼻子？",
     "why": "外傷後流鼻血需要檢查。"
    },
    {
     "q": "有沒有吃抗凝血藥？有沒有高血壓或凝血疾病？",
     "why": "這些和流鼻血有關。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "頭部或鼻子受傷",
      "plain": "",
      "refs": [
       "nhs-nosebleed"
      ]
     },
     {
      "name": "凝血異常或抗凝血藥",
      "plain": "",
      "refs": [
       "nhs-nosebleed"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "挖鼻孔、太用力擤鼻涕",
      "plain": "",
      "refs": [
       "nhs-nosebleed"
      ]
     },
     {
      "name": "鼻腔太乾",
      "plain": "例如天氣溫度變化。",
      "refs": [
       "nhs-nosebleed"
      ]
     }
    ],
    "patternsHeading": "依出現的情況",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "撞到頭之後流鼻血",
      "text": "請立即到急診。",
      "refs": [
       "nhs-nosebleed"
      ]
     },
     {
      "pattern": "正在吃抗凝血藥，流鼻血",
      "text": "捏住鼻子止血；超過 10 到 15 分鐘還沒停，請立即到急診；止住了也請安排門診。",
      "refs": [
       "nhs-nosebleed"
      ]
     },
     {
      "pattern": "挖鼻孔、擤鼻涕後少量流鼻血，捏住後就停了",
      "text": "通常不嚴重；常常發生請安排門診。",
      "refs": [
       "nhs-nosebleed"
      ]
     },
     {
      "pattern": "常流鼻血，合併心悸、喘、臉色蒼白",
      "text": "可能有貧血，請安排門診。",
      "refs": [
       "nhs-nosebleed"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "兒童、45 歲以上的成人、孕婦和有高血壓的人比較容易流鼻血。",
     "refs": [
      "nhs-nosebleed"
     ]
    }
   ],
   "visitPreparation": [
    "流鼻血的時間和次數",
    "使用中的所有藥物，特別是抗凝血藥",
    "病史：高血壓、凝血疾病"
   ],
   "sources": [
    "nhs-nosebleed"
   ]
  },
  {
   "slug": "sore-throat",
   "title": "喉嚨痛",
   "bodyArea": "head",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "喉嚨痛",
    "咽喉痛",
    "吞嚥痛",
    "吞口水會痛",
    "扁桃腺發炎",
    "扁桃腺炎",
    "喉嚨發炎",
    "喉嚨腫",
    "咽喉炎"
   ],
   "summary": "喉嚨痛很常見，多半是病毒感染，通常一週內會好。但呼吸困難、吞不下口水而流口水、吸氣時有尖銳的聲音，請立即撥打 119。",
   "definition": "喉嚨痛通常是感冒或流感等病毒造成，少數是細菌感染。",
   "definitionRefs": [
    "nhs-sore-throat"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "喉嚨痛，加上下列任何一項，請立即撥打 119 或到急診：",
     "items": [
      {
       "text": "呼吸困難",
       "refs": [
        "nhs-sore-throat",
        "nhs-tonsillitis",
        "mayo-epiglottitis"
       ]
      },
      {
       "text": "吞不下去，或吞不下口水而一直流口水",
       "refs": [
        "nhs-sore-throat",
        "nhs-tonsillitis",
        "mayo-epiglottitis"
       ]
      },
      {
       "text": "吸氣時發出尖銳的聲音",
       "refs": [
        "nhs-sore-throat",
        "mayo-epiglottitis"
       ]
      },
      {
       "text": "嘴巴裡或喉嚨腫起來，或說話困難、嘴巴張不開",
       "refs": [
        "nhs-tonsillitis"
       ]
      },
      {
       "text": "喉嚨痛很嚴重，而且很快變嚴重",
       "refs": [
        "nhs-sore-throat",
        "nhs-tonsillitis"
       ]
      }
     ],
     "doNow": [
      {
       "text": "不要自己開車去急診，請別人載或撥打 119。",
       "refs": [
        "nhs-sore-throat"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "發高燒，或覺得忽冷忽熱、發抖",
       "refs": [
        "nhs-sore-throat"
       ]
      },
      {
       "text": "扁桃腺上有白色或黃色的膿點",
       "refs": [
        "nhs-tonsillitis"
       ]
      },
      {
       "text": "脫水：尿變少、尿很深很臭",
       "refs": [
        "nhs-sore-throat"
       ]
      },
      {
       "text": "免疫力低下（例如化療中、糖尿病）",
       "refs": [
        "nhs-sore-throat"
       ]
      },
      {
       "text": "痛到很難吃東西或喝水",
       "refs": [
        "nhs-tonsillitis"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "沒有上方任何一項：可以到診所看診",
       "refs": [
        "nhs-sore-throat"
       ]
      },
      {
       "text": "喉嚨痛超過一週沒有好轉，或常常喉嚨痛",
       "refs": [
        "nhs-sore-throat",
        "nhs-tonsillitis"
       ]
      },
      {
       "text": "嘴巴或脖子有腫塊，或嘴破超過 3 週沒好",
       "refs": [
        "nhs-sore-throat"
       ]
      }
     ],
     "doNow": [
      {
       "text": "多喝水、多休息，吃涼的或軟的食物。",
       "refs": [
        "nhs-sore-throat"
       ]
      },
      {
       "text": "成人可以用溫鹽水漱口：半茶匙鹽溶在一杯溫水裡，漱完吐掉。",
       "refs": [
        "nhs-sore-throat"
       ]
      },
      {
       "text": "避免抽菸或待在煙霧多的地方。",
       "refs": [
        "nhs-sore-throat"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "會厭炎是醫療緊急狀況，可能很快阻塞呼吸道。",
       "refs": [
        "mayo-epiglottitis"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "喉嚨痛多久了？有沒有愈來愈嚴重？",
     "why": "很快變嚴重需要立即處理。"
    },
    {
     "q": "吞得下口水嗎？呼吸順嗎？嘴巴張得開嗎？",
     "why": "這些是呼吸道可能阻塞的警訊。"
    },
    {
     "q": "有沒有發燒、咳嗽、流鼻水？",
     "why": "幫助分辨病毒或細菌感染。"
    },
    {
     "q": "最近有沒有喝到很燙的東西或吸入濃煙？",
     "why": "也可能造成喉嚨嚴重腫脹。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "會厭炎",
      "plain": "吞嚥很痛、流口水、吸氣有尖銳聲、身體前傾才好呼吸。",
      "refs": [
       "mayo-epiglottitis"
      ]
     },
     {
      "name": "扁桃腺周圍膿瘍",
      "plain": "喉嚨痛很快變嚴重、嘴巴張不開、說話困難。",
      "refs": [
       "nhs-tonsillitis"
      ]
     },
     {
      "name": "嚴重過敏反應",
      "plain": "喉嚨或舌頭腫、呼吸困難。",
      "refs": [
       "nhs-anaphylaxis"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "感冒、流感等病毒感染",
      "plain": "最常見，通常一週內會好。",
      "refs": [
       "nhs-sore-throat"
      ]
     },
     {
      "name": "扁桃腺炎",
      "plain": "扁桃腺紅腫，可能有膿點。",
      "refs": [
       "nhs-tonsillitis"
      ]
     },
     {
      "name": "抽菸或煙霧刺激",
      "plain": "",
      "refs": [
       "nhs-sore-throat"
      ]
     }
    ],
    "patternsHeading": "依出現的症狀",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "吞嚥很痛、流口水、吸氣有尖銳聲，坐著身體前傾才好呼吸",
      "text": "可能是會厭炎，請立即撥打 119。",
      "refs": [
       "mayo-epiglottitis"
      ]
     },
     {
      "pattern": "喉嚨痛很快變嚴重，嘴巴張不開、說話困難、吞不下去",
      "text": "可能是扁桃腺周圍膿瘍，請立即到急診。",
      "refs": [
       "nhs-tonsillitis"
      ]
     },
     {
      "pattern": "喉嚨或舌頭突然腫起來、呼吸困難",
      "text": "可能是嚴重過敏反應，請立即撥打 119。",
      "refs": [
       "nhs-anaphylaxis"
      ]
     },
     {
      "pattern": "扁桃腺紅腫，上面有膿點",
      "text": "可能是扁桃腺炎，請今天就醫。",
      "refs": [
       "nhs-tonsillitis"
      ]
     },
     {
      "pattern": "合併流鼻水、咳嗽",
      "text": "多半是感冒等病毒感染，通常一週內會好。",
      "refs": [
       "nhs-sore-throat"
      ]
     }
    ]
   },
   "specialPopulations": [],
   "visitPreparation": [
    "症狀開始的時間、最高溫度",
    "使用中的所有藥物",
    "有沒有過敏"
   ],
   "sources": [
    "nhs-sore-throat",
    "nhs-tonsillitis",
    "mayo-epiglottitis",
    "nhs-anaphylaxis"
   ]
  },
  {
   "slug": "ear-pain",
   "title": "耳朵痛",
   "bodyArea": "head",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "耳朵痛",
    "耳痛",
    "中耳炎",
    "外耳炎",
    "耳朵發炎",
    "耳朵流膿",
    "耳朵流水",
    "耳朵悶",
    "耳後痛"
   ],
   "summary": "耳朵痛常是耳朵感染，多半幾天內會好。但耳朵後面紅腫痛、耳朵往外推，可能是乳突炎，請今天就醫；耳朵痛超過 2 到 3 天、發燒、耳朵流液體、聽力改變，也請今天就醫。",
   "definition": "耳朵痛常見的原因是耳朵感染。",
   "definitionRefs": [
    "nhs-earache"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "耳朵痛，加上下列任何一項，請立即就醫：",
     "items": [
      {
       "text": "發燒合併脖子僵硬、看亮光會痛、劇烈頭痛或意識混亂",
       "refs": [
        "nhs-meningitis"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "耳朵後面痛、紅、腫，耳朵被往外推",
       "refs": [
        "nhs-mastoiditis"
       ]
      },
      {
       "text": "痛超過 2 到 3 天",
       "refs": [
        "nhs-earache"
       ]
      },
      {
       "text": "全身不舒服，或發高燒、忽冷忽熱、發抖",
       "refs": [
        "nhs-earache",
        "nhs-ear-infection"
       ]
      },
      {
       "text": "耳朵周圍腫起來",
       "refs": [
        "nhs-earache",
        "nhs-ear-infection"
       ]
      },
      {
       "text": "耳朵流出液體",
       "refs": [
        "nhs-earache",
        "nhs-ear-infection"
       ]
      },
      {
       "text": "聽力變差或改變",
       "refs": [
        "nhs-earache",
        "nhs-ear-infection"
       ]
      },
      {
       "text": "有東西卡在耳朵裡",
       "refs": [
        "nhs-earache"
       ]
      },
      {
       "text": "合併想吐、嘔吐、頭暈，或嚴重喉嚨痛",
       "refs": [
        "nhs-ear-infection"
       ]
      },
      {
       "text": "有糖尿病，或有心臟、肺、腎臟或神經方面的疾病，或免疫力低下（例如化療中）",
       "refs": [
        "nhs-ear-infection"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "常常耳朵痛或耳朵感染",
       "refs": [
        "nhs-earache",
        "nhs-ear-infection"
       ]
      },
      {
       "text": "沒有上方任何一項：可以到診所看診",
       "refs": [
        "nhs-earache"
       ]
      }
     ],
     "doNow": [
      {
       "text": "可以吃普拿疼（乙醯胺酚）或布洛芬止痛；用溫毛巾敷耳朵。",
       "refs": [
        "nhs-earache"
       ]
      },
      {
       "text": "不要把棉花棒或任何東西放進耳朵，不要自己挖耳垢，不要讓水進入耳朵。",
       "refs": [
        "nhs-earache",
        "nhs-ear-infection"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "乳突炎如果沒有及時治療，可能造成永久聽力喪失或腦膜炎。",
       "refs": [
        "nhs-mastoiditis"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "痛多久了？一邊還是兩邊？",
     "why": "持續 2 到 3 天以上要就醫。"
    },
    {
     "q": "有沒有發燒、流液體、聽力變差？",
     "why": "這些表示需要治療。"
    },
    {
     "q": "耳朵後面有沒有紅腫？",
     "why": "可能是乳突炎。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "乳突炎",
      "plain": "耳朵後面的骨頭感染，痛、紅、腫，耳朵被往外推。",
      "refs": [
       "nhs-mastoiditis"
      ]
     },
     {
      "name": "腦膜炎",
      "plain": "發燒、脖子僵硬、怕光、劇烈頭痛。",
      "refs": [
       "nhs-meningitis"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "耳朵感染（中耳炎、外耳炎）",
      "plain": "",
      "refs": [
       "nhs-ear-infection",
       "nhs-earache"
      ]
     }
    ],
    "patternsHeading": "依出現的症狀",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "耳朵後面痛、紅、腫，耳朵被往外推",
      "text": "可能是乳突炎，請今天就醫。",
      "refs": [
       "nhs-mastoiditis"
      ]
     },
     {
      "pattern": "耳朵痛、發燒，可能流出液體",
      "text": "可能是耳朵感染，請今天就醫。",
      "refs": [
       "nhs-ear-infection"
      ]
     },
     {
      "pattern": "耳朵痛合併發燒、脖子僵硬、怕光、劇烈頭痛",
      "text": "可能是腦膜炎，請立即撥打 119。",
      "refs": [
       "nhs-meningitis"
      ]
     },
     {
      "pattern": "耳朵痛合併聽力變差，或覺得有東西卡在耳朵裡",
      "text": "請今天就醫；不要自己用棉花棒或其他東西掏耳朵。",
      "refs": [
       "nhs-earache"
      ]
     }
    ]
   },
   "specialPopulations": [],
   "visitPreparation": [
    "耳朵痛開始的時間、哪一邊",
    "有沒有發燒、流液體、聽力改變",
    "使用中的所有藥物"
   ],
   "sources": [
    "nhs-earache",
    "nhs-meningitis",
    "nhs-mastoiditis",
    "nhs-ear-infection"
   ]
  },
  {
   "slug": "toothache",
   "title": "牙痛、牙齦腫",
   "bodyArea": "head",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "牙痛",
    "牙齒痛",
    "蛀牙",
    "牙齦腫",
    "牙齦痛",
    "牙齒膿包",
    "智齒痛",
    "臉頰腫",
    "牙齦膿腫"
   ],
   "summary": "牙痛請看牙醫。但眼睛周圍或脖子腫起來，或嘴巴、脖子腫到呼吸、吞嚥、說話困難，請立即到急診。",
   "definition": "牙齒膿包（牙齒或牙齦化膿）是感染造成，不會自己好，需要牙醫儘快處理。",
   "definitionRefs": [
    "nhs-dental-abscess"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "牙痛，加上下列任何一項，請立即就醫：",
     "items": [
      {
       "text": "眼睛周圍或脖子腫起來",
       "refs": [
        "nhs-toothache",
        "nhs-dental-abscess"
       ]
      },
      {
       "text": "嘴巴或脖子腫到呼吸、吞嚥或說話困難",
       "refs": [
        "nhs-toothache",
        "nhs-dental-abscess"
       ]
      },
      {
       "text": "眼睛腫痛，或視力突然出問題",
       "refs": [
        "nhs-dental-abscess"
       ]
      },
      {
       "text": "嘴巴裡腫得很厲害，或嘴巴張不開",
       "refs": [
        "nhs-dental-abscess"
       ]
      }
     ],
     "doNow": [
      {
       "text": "不要自己開車去急診，請別人載或撥打 119。",
       "refs": [
        "nhs-toothache",
        "nhs-dental-abscess"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要看牙醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天看牙醫：",
     "items": [
      {
       "text": "可能是牙齒膿包：劇烈牙痛或牙齦痛、臉或下巴腫、嘴巴有怪味、咀嚼困難",
       "refs": [
        "nhs-dental-abscess"
       ]
      },
      {
       "text": "牙痛合併發燒、咬東西會痛、牙齦紅",
       "refs": [
        "nhs-toothache"
       ]
      },
      {
       "text": "臉頰或下巴腫起來",
       "refs": [
        "nhs-toothache"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快看牙醫，不要拖延：",
     "items": [
      {
       "text": "牙痛超過 2 天",
       "refs": [
        "nhs-toothache"
       ]
      },
      {
       "text": "吃止痛藥也沒有好",
       "refs": [
        "nhs-toothache"
       ]
      }
     ],
     "doNow": [
      {
       "text": "可以吃布洛芬或普拿疼止痛；成人可以用溫鹽水漱口。",
       "refs": [
        "nhs-toothache"
       ]
      },
      {
       "text": "吃軟的食物，避免用痛的那一側咀嚼；不要吃甜的、很燙或很冰的東西；不要抽菸。",
       "refs": [
        "nhs-toothache"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "牙齒膿包不會自己好，需要牙醫儘快處理。",
       "refs": [
        "nhs-dental-abscess"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "痛多久了？吃止痛藥有用嗎？",
     "why": "持續或止痛藥無效要看牙醫。"
    },
    {
     "q": "臉、下巴、眼睛周圍或脖子有沒有腫？",
     "why": "腫脹擴散可能危險。"
    },
    {
     "q": "呼吸、吞嚥、張嘴有沒有困難？",
     "why": "這些需要立即到急診。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "牙齒膿包擴散",
      "plain": "臉、眼睛周圍或脖子腫，呼吸吞嚥困難。",
      "refs": [
       "nhs-dental-abscess",
       "nhs-toothache"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "蛀牙",
      "plain": "",
      "refs": [
       "nhs-toothache"
      ]
     },
     {
      "name": "牙齒膿包",
      "plain": "",
      "refs": [
       "nhs-toothache",
       "nhs-dental-abscess"
      ]
     },
     {
      "name": "牙齒裂開或受損、補牙鬆脫",
      "plain": "",
      "refs": [
       "nhs-toothache"
      ]
     },
     {
      "name": "智齒等長出來的牙齒周圍感染",
      "plain": "",
      "refs": [
       "nhs-toothache"
      ]
     },
     {
      "name": "牙周病",
      "plain": "",
      "refs": [
       "nhs-toothache"
      ]
     }
    ],
    "patternsHeading": "依出現的症狀",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "劇烈牙痛，臉或下巴腫、嘴巴有怪味",
      "text": "可能是牙齒膿包，請今天看牙醫；腫到眼睛或脖子，請立即到急診。",
      "refs": [
       "nhs-dental-abscess"
      ]
     },
     {
      "pattern": "吃甜的、冷的或熱的東西時痛",
      "text": "可能是蛀牙或牙齒受損，請儘快看牙醫。",
      "refs": [
       "nhs-toothache",
       "nhs-dental-abscess"
      ]
     },
     {
      "pattern": "智齒周圍的牙齦腫痛",
      "text": "可能是智齒周圍感染，請儘快看牙醫。",
      "refs": [
       "nhs-toothache"
      ]
     },
     {
      "pattern": "牙痛合併咬東西會痛、牙齦紅、發燒",
      "text": "可能是感染，請今天看牙醫。",
      "refs": [
       "nhs-toothache"
      ]
     }
    ]
   },
   "specialPopulations": [],
   "visitPreparation": [
    "痛開始的時間、哪一顆牙",
    "吃過的止痛藥",
    "使用中的所有藥物"
   ],
   "sources": [
    "nhs-dental-abscess",
    "nhs-toothache"
   ]
  },
  {
   "slug": "stroke",
   "title": "中風徵兆（臉歪、手腳無力、說話不清）",
   "bodyArea": "neuro",
   "audience": [
    "adult"
   ],
   "status": "published",
   "aliases": [
    "中風",
    "腦中風",
    "嘴歪",
    "臉歪",
    "單側無力",
    "半邊無力",
    "一邊手腳無力",
    "一邊手腳麻",
    "半身不遂",
    "口齒不清",
    "說話不清楚",
    "講話不清楚",
    "說不出話",
    "突然看不見",
    "手舉不起來",
    "小中風",
    "暫時性腦缺血"
   ],
   "audienceNote": "適用 18 歲以上成人。中風任何年紀都可能發生。",
   "summary": "中風是腦部的血管塞住或出血。臉歪、一側手腳無力或麻木、說話不清楚，常常是突然發生。每一分鐘都很重要，請立即撥打 119；即使症狀已經消失，也要立即就醫。",
   "definition": "中風是腦部的血液供應被阻斷，或腦部的血管破裂出血。症狀在短時間內完全消失的，稱為暫時性腦缺血（小中風），一開始無法和中風分辨。",
   "definitionRefs": [
    "mayo-stroke",
    "nhs-tia"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119",
     "intro": "出現下列任何一項，請立即撥打 119，不要等它自己好：",
     "items": [
      {
       "text": "臉歪一邊，笑起來不對稱",
       "refs": [
        "nhs-stroke",
        "mohw-stroke"
       ]
      },
      {
       "text": "一側的手或腳無力、麻木，手舉不起來或舉不久",
       "refs": [
        "nhs-stroke",
        "mohw-stroke"
       ]
      },
      {
       "text": "說話不清楚、說不出話、想不出字，或聽不懂別人說的話",
       "refs": [
        "nhs-stroke",
        "mayo-stroke"
       ]
      },
      {
       "text": "一眼或兩眼突然看不清楚或看不見",
       "refs": [
        "nhs-stroke",
        "mayo-stroke"
       ]
      },
      {
       "text": "突然意識混亂或失憶",
       "refs": [
        "nhs-stroke"
       ]
      },
      {
       "text": "突然頭暈、走路不穩或跌倒",
       "refs": [
        "nhs-stroke"
       ]
      },
      {
       "text": "突然劇烈頭痛",
       "refs": [
        "nhs-stroke",
        "mayo-stroke"
       ]
      },
      {
       "text": "過去 24 小時內出現過上面任何症狀——即使現在已經好了",
       "refs": [
        "nhs-stroke",
        "nhs-tia",
        "mayo-stroke"
       ]
      }
     ],
     "doNow": [
      {
       "text": "記住「微笑、舉手、說你好」：請他笑一下、兩手平舉、說一句話，任何一個做不好，就撥打 119。",
       "refs": [
        "mohw-stroke"
       ]
      },
      {
       "text": "記下症狀開始的時間，告訴救護人員；有些治療愈早給，效果愈好。",
       "refs": [
        "mayo-stroke"
       ]
      },
      {
       "text": "不要等症狀自己消失。等救護車時，陪在旁邊注意他的狀況。",
       "refs": [
        "mayo-stroke"
       ]
      },
      {
       "text": "不要自己開車去急診。",
       "refs": [
        "nhs-stroke"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "以前出現過上面的症狀，當時沒有就醫，現在已經超過 24 小時",
       "refs": [
        "nhs-tia"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": []
    },
    "observe": null,
    "observeOmittedReason": "中風徵兆不提供在家觀察。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "中風愈晚治療，腦部受損和失能的機會愈大。",
       "refs": [
        "mayo-stroke"
       ]
      },
      {
       "text": "一開始無法只靠症狀分辨是小中風還是中風。",
       "refs": [
        "nhs-tia",
        "mayo-stroke"
       ]
      },
      {
       "text": "小中風是警訊，表示近期發生完整中風的風險很高。",
       "refs": [
        "nhs-tia"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "症狀是幾點開始的？",
     "why": "有些中風的治療要愈早給愈好。"
    },
    {
     "q": "哪一邊無力或麻木？臉、手、腳哪些地方？",
     "why": "幫助醫師判斷腦部哪裡出了問題。"
    },
    {
     "q": "有沒有說話、看東西、走路或頭痛的問題？",
     "why": "這些也可能是中風的表現。"
    },
    {
     "q": "有沒有高血壓、糖尿病、心律不整（心房顫動）、抽菸？有沒有吃抗凝血藥？",
     "why": "這些和中風的風險與治療有關。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "缺血性中風",
      "plain": "腦部的血管被血塊塞住。",
      "refs": [
       "mayo-stroke"
      ]
     },
     {
      "name": "出血性中風（腦出血）",
      "plain": "腦部的血管破裂出血。",
      "refs": [
       "mayo-stroke"
      ]
     },
     {
      "name": "暫時性腦缺血（小中風）",
      "plain": "症狀幾分鐘到幾小時內完全消失，但仍是中風的警訊。",
      "refs": [
       "nhs-tia"
      ]
     },
     {
      "name": "低血糖",
      "plain": "使用胰島素或降血糖藥的人，可能出現意識混亂、無力。",
      "refs": [
       "nhs-hypo",
       "nhs-confusion"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "周邊顏面神經麻痺（例如貝爾氏麻痺）",
      "plain": "嘴角歪斜、眼睛閉不緊，需要就醫；症狀和中風很像，一般人無法自己分辨。",
      "refs": [
       "mayo-bells",
       "nhs-bells"
      ]
     },
     {
      "name": "神經受壓迫（例如椎間盤突出）",
      "plain": "某個部位無力或麻。",
      "refs": [
       "mlp-weakness"
      ]
     }
    ],
    "patternsHeading": "依出現的症狀",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "突然臉歪、一側手腳無力或麻木、說話不清楚",
      "text": "可能是中風，請立即撥打 119。",
      "refs": [
       "nhs-stroke"
      ]
     },
     {
      "pattern": "同樣的症狀幾分鐘到幾小時內就完全好了",
      "text": "可能是暫時性腦缺血（小中風），一樣要立即撥打 119，到醫院評估。",
      "refs": [
       "nhs-tia"
      ]
     },
     {
      "pattern": "一側嘴角歪斜、眼睛閉不緊",
      "text": "可能是周邊顏面神經麻痺（例如貝爾氏麻痺），需要就醫。一般人不容易自己分辨，無法確定，或合併手腳無力、說話不清楚、劇烈頭痛、抽搐或看不見時，請依上方撥打 119。",
      "refs": [
       "mayo-bells",
       "mlp-facial",
       "nhs-bells"
      ]
     },
     {
      "pattern": "突然劇烈頭痛，合併嘔吐、頭暈或意識改變",
      "text": "可能是出血性中風，請立即撥打 119。",
      "refs": [
       "mayo-stroke"
      ]
     },
     {
      "pattern": "有糖尿病、使用胰島素或降血糖藥，出現冒汗、發抖、心悸、意識混亂或無力",
      "text": "可能是低血糖。還能安全吞嚥時，先喝一小杯果汁或含糖飲料；叫不醒或沒有改善，請撥打 119。",
      "refs": [
       "nhs-hypo"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "中風在年紀大的人比較常見，但任何年紀都可能發生。",
     "refs": [
      "nhs-stroke"
     ]
    }
   ],
   "visitPreparation": [
    "症狀開始的時間",
    "看到發生經過的人一起去",
    "使用中的所有藥物，特別是抗凝血藥、降血糖藥",
    "病史：高血壓、糖尿病、心律不整、以前的中風"
   ],
   "sources": [
    "mayo-stroke",
    "nhs-tia",
    "nhs-stroke",
    "mohw-stroke",
    "nhs-hypo",
    "nhs-confusion",
    "mlp-weakness",
    "mayo-bells",
    "nhs-bells",
    "mlp-facial"
   ],
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17"
  },
  {
   "slug": "memory-loss",
   "title": "突然失憶、意識混亂",
   "bodyArea": "neuro",
   "audience": [
    "adult"
   ],
   "status": "published",
   "aliases": [
    "失憶",
    "突然失憶",
    "短暫失憶",
    "暫時性全面失憶",
    "記不起剛剛的事",
    "一直重複問同樣的問題",
    "意識混亂",
    "突然糊塗",
    "搞不清楚狀況",
    "譫妄",
    "胡言亂語",
    "變得很健忘",
    "健忘"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "summary": "突然記不得剛剛發生的事、一直重複問同樣的問題，或突然意識混亂，可能是中風、低血糖、感染、一氧化碳中毒等需要立即處理的原因。暫時性全面失憶本身不危險，但無法從外表分辨，請立即就醫。",
   "definition": "暫時性全面失憶（TGA）是突然發生、無法記住新事情的狀態：患者清醒、知道自己是誰，但記不得剛剛的事，常一直重複問同樣的問題，通常在幾小時內慢慢恢復。",
   "definitionRefs": [
    "mayo-tga"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "有人突然出現下列任何一項，請立即就醫：",
     "items": [
      {
       "text": "突然記不得剛剛發生的事，一直重複問同樣的問題",
       "refs": [
        "mayo-tga",
        "nhs-confusion"
       ]
      },
      {
       "text": "突然意識混亂：搞不清楚自己在哪裡、說話或思考不清楚，或看到、聽到不存在的東西",
       "refs": [
        "nhs-confusion"
       ]
      },
      {
       "text": "合併臉歪、一側手腳無力或說話不清楚（中風徵兆）",
       "refs": [
        "nhs-stroke",
        "nhs-confusion"
       ]
      },
      {
       "text": "頭部受傷之後",
       "refs": [
        "nhs-confusion",
        "mlp-memory"
       ]
      },
      {
       "text": "有糖尿病、使用胰島素或降血糖藥",
       "refs": [
        "nhs-confusion",
        "nhs-hypo"
       ]
      },
      {
       "text": "同住的人也一起頭痛或不舒服（可能是一氧化碳中毒）",
       "refs": [
        "nhs-confusion",
        "nhs-co"
       ]
      },
      {
       "text": "抽搐之後",
       "refs": [
        "nhs-confusion",
        "mlp-memory"
       ]
      }
     ],
     "doNow": [
      {
       "text": "他自己太混亂無法求助時，由你幫他撥打 119。",
       "refs": [
        "mayo-tga"
       ]
      },
      {
       "text": "陪在他身邊，告訴他你是誰、他在哪裡，用簡單的短句安撫他；不要一直問問題考他。",
       "refs": [
        "nhs-confusion"
       ]
      },
      {
       "text": "記下他正在吃的藥，帶去醫院。",
       "refs": [
        "nhs-confusion"
       ]
      },
      {
       "text": "不要自己開車去急診，請別人載或撥打 119。",
       "refs": [
        "nhs-confusion"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": []
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "好幾個月來慢慢變得愈來愈健忘或糊塗，而且沒有上方任何一項",
       "refs": [
        "nhs-confusion",
        "mlp-memory"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "突然失憶或意識混亂不提供在家觀察。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "暫時性全面失憶本身不危險，但無法從外表和中風等危及生命的疾病分辨。",
       "refs": [
        "mayo-tga"
       ]
      },
      {
       "text": "許多突然意識混亂的原因需要儘快檢查和治療，有時會危及生命。",
       "refs": [
        "nhs-confusion"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "從什麼時候開始？持續多久了？",
     "why": "發生的快慢和時間長短，是醫師判斷原因的第一步。"
    },
    {
     "q": "有沒有人看到發生經過？有沒有撞到頭或抽搐？",
     "why": "目擊者的描述對診斷很重要。"
    },
    {
     "q": "他知道自己是誰、認得家人嗎？",
     "why": "幫助醫師分辨是哪一種記憶問題。"
    },
    {
     "q": "有沒有糖尿病、偏頭痛、癲癇？正在吃哪些藥？有沒有喝酒？",
     "why": "藥物、酒精和這些疾病都可能造成意識混亂。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "中風或小中風",
      "plain": "可能合併臉歪、手腳無力、說話不清楚。",
      "refs": [
       "nhs-confusion",
       "mlp-memory"
      ]
     },
     {
      "name": "低血糖",
      "plain": "使用降血糖藥的人常見。",
      "refs": [
       "nhs-confusion"
      ]
     },
     {
      "name": "頭部受傷",
      "plain": "撞到頭之後。",
      "refs": [
       "nhs-confusion",
       "mlp-memory"
      ]
     },
     {
      "name": "癲癇發作",
      "plain": "某些類型的癲癇會造成意識混亂。",
      "refs": [
       "nhs-confusion",
       "mlp-memory"
      ]
     },
     {
      "name": "一氧化碳中毒",
      "plain": "同住的人可能也一起不舒服。",
      "refs": [
       "nhs-confusion"
      ]
     },
     {
      "name": "感染",
      "plain": "例如泌尿道感染（年長者常見），或腦炎、腦膜炎。",
      "refs": [
       "nhs-confusion",
       "mlp-memory"
      ]
     },
     {
      "name": "酒精或藥物",
      "plain": "喝酒、戒酒，或某些處方藥、毒品。",
      "refs": [
       "nhs-confusion",
       "mlp-memory"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "暫時性全面失憶（TGA）",
      "plain": "原因不明，通常幾小時內慢慢恢復。",
      "refs": [
       "mayo-tga",
       "mlp-memory"
      ]
     },
     {
      "name": "失智症",
      "plain": "通常是慢慢發生，不是突然。",
      "refs": [
       "mlp-memory",
       "nhs-confusion"
      ]
     },
     {
      "name": "重大壓力或創傷事件之後",
      "plain": "心理因素也可能影響記憶。",
      "refs": [
       "mlp-memory"
      ]
     },
     {
      "name": "維生素 B1 或 B12 不足",
      "plain": "營養缺乏也會影響記憶。",
      "refs": [
       "mlp-memory"
      ]
     }
    ],
    "patternsHeading": "依出現的情況",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "中年以上的人突然記不得剛剛的事、一直重複問同樣的問題，但知道自己是誰、認得家人，沒有手腳無力",
      "text": "可能是暫時性全面失憶，通常幾小時內慢慢恢復；但無法和中風等危險疾病分辨，仍要立即就醫。",
      "refs": [
       "mayo-tga"
      ]
     },
     {
      "pattern": "剛泡冷水或熱水、劇烈運動、受到情緒打擊之後發生",
      "text": "這些是暫時性全面失憶常見的誘發情境，但仍要立即就醫。",
      "refs": [
       "mayo-tga"
      ]
     },
     {
      "pattern": "合併臉歪、一側手腳無力或說話不清楚",
      "text": "可能是中風，請立即撥打 119。",
      "refs": [
       "nhs-stroke"
      ]
     },
     {
      "pattern": "有糖尿病，合併冒汗、發抖、心悸",
      "text": "可能是低血糖。還能安全吞嚥時，先喝一小杯果汁或含糖飲料；叫不醒或沒有改善，請撥打 119。",
      "refs": [
       "nhs-hypo"
      ]
     },
     {
      "pattern": "在使用瓦斯熱水器、爐具或燒炭的空間，同住的人一起頭痛、不舒服",
      "text": "可能是一氧化碳中毒，請立即撥打 119。",
      "refs": [
       "nhs-confusion",
       "nhs-co"
      ]
     },
     {
      "pattern": "年長者突然變得糊塗",
      "text": "常見原因是泌尿道感染等感染，請立即就醫。",
      "refs": [
       "nhs-confusion"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "年長者或失智症患者突然變得更糊塗，常見的原因是泌尿道感染。",
     "refs": [
      "nhs-confusion"
     ]
    }
   ],
   "visitPreparation": [
    "看到發生經過的人一起去",
    "症狀開始的時間",
    "使用中的所有藥物",
    "病史：糖尿病、偏頭痛、癲癇",
    "最近有沒有撞到頭"
   ],
   "sources": [
    "mayo-tga",
    "nhs-confusion",
    "nhs-stroke",
    "mlp-memory",
    "nhs-hypo",
    "nhs-co"
   ],
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17"
  },
  {
   "slug": "weakness",
   "title": "無力（全身無力、雙腳無力）",
   "bodyArea": "neuro",
   "audience": [
    "adult"
   ],
   "status": "published",
   "aliases": [
    "無力",
    "全身無力",
    "四肢無力",
    "手腳無力",
    "雙腳無力",
    "腳沒力",
    "腳軟",
    "站不起來",
    "沒力氣",
    "虛弱",
    "走不動",
    "手沒力",
    "肌肉無力",
    "癱軟",
    "週期性麻痺",
    "低血鉀"
   ],
   "audienceNote": "適用 18 歲以上成人。只有一側的臉、手或腳無力，請看「中風徵兆」頁並立即撥打 119。",
   "summary": "無力可能是全身，也可能只在某個部位。一側突然無力可能是中風；雙腳無力合併大小便異常、或無力合併呼吸吞嚥困難，都需要立即處理。",
   "definition": "無力可能是真的肌肉力量變差，也可能只是覺得沒力氣（例如感冒時）。只在某個部位的無力比較容易察覺。",
   "definitionRefs": [
    "mlp-weakness"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "無力加上下列任何一項，請立即就醫：",
     "items": [
      {
       "text": "一側的臉、手或腳突然無力或麻木，或說話不清楚（中風徵兆）",
       "refs": [
        "nhs-stroke",
        "mlp-weakness"
       ]
      },
      {
       "text": "呼吸困難、吞嚥困難或說話困難",
       "refs": [
        "mlp-hpp",
        "nhs-gbs",
        "nhs-mg"
       ]
      },
      {
       "text": "兩隻腳都無力或麻木，或腳無力愈來愈嚴重",
       "refs": [
        "nhs-sciatica"
       ]
      },
      {
       "text": "生殖器或肛門周圍麻木，或尿不出來、無法控制大小便",
       "refs": [
        "nhs-sciatica"
       ]
      },
      {
       "text": "心跳不規則、頭暈或昏倒",
       "refs": [
        "mlp-hpp",
        "mlp-hypokalemia"
       ]
      },
      {
       "text": "有糖尿病，出現意識混亂或叫不醒",
       "refs": [
        "nhs-hypo"
       ]
      },
      {
       "text": "合併意識混亂、無法控制的發抖、呼吸困難，或皮膚、嘴唇發紫或出現花斑（可能是敗血症）",
       "refs": [
        "nhs-sepsis"
       ]
      },
      {
       "text": "無力反覆發作（發作之間完全正常），現在正在發作、手腳無力",
       "refs": [
        "mlp-tpp"
       ]
      }
     ],
     "doNow": [
      {
       "text": "有糖尿病又出現冒汗、發抖等低血糖症狀：還能安全吞嚥時，先喝一小杯果汁或含糖飲料，10 到 15 分鐘後再量一次血糖。叫不醒時不要餵食，讓他側躺並撥打 119。",
       "refs": [
        "nhs-hypo"
       ]
      },
      {
       "text": "不要自己開車去急診，請別人載或撥打 119。",
       "refs": [
        "nhs-stroke",
        "nhs-gbs"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "感冒、腸胃炎等病毒感染之後出現無力",
       "refs": [
        "mlp-weakness"
       ]
      },
      {
       "text": "手腳先發麻刺痛，接著無力，幾天到幾週內愈來愈嚴重",
       "refs": [
        "nhs-gbs"
       ]
      },
      {
       "text": "無力反覆發作、發作之間完全正常，常在睡醒、吃了大量澱粉或甜食、很鹹的一餐，或運動後休息時發作",
       "refs": [
        "mlp-hpp",
        "mlp-tpp"
       ]
      },
      {
       "text": "嚴重腹瀉、嘔吐，或正在吃利尿劑，出現無力、抽筋或心悸",
       "refs": [
        "mlp-hypokalemia"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "一直覺得很累、沒力氣，持續一段時間沒有改善，也找不到原因，而且沒有上方任何一項",
       "refs": [
        "nhs-tired",
        "mlp-weakness"
       ]
      },
      {
       "text": "眼皮下垂、看東西有兩個影像，或咀嚼、吞嚥、說話容易累，傍晚比較嚴重",
       "refs": [
        "nhs-mg"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "呼吸或吞嚥的肌肉無力是緊急狀況；週期性麻痺發作時也可能出現危險的心律不整。",
       "refs": [
        "mlp-hpp"
       ]
      },
      {
       "text": "血鉀很低可能引起心律不整，甚至心跳停止。",
       "refs": [
        "mlp-hypokalemia"
       ]
      },
      {
       "text": "格林-巴利症候群的症狀通常在頭 2 到 4 週持續惡化，需要住院治療。",
       "refs": [
        "nhs-gbs"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "是全身無力，還是某個部位（一側、雙腳、臉、眼皮）？",
     "why": "無力的部位能幫助醫師找原因。"
    },
    {
     "q": "是突然發生、慢慢變差，還是反覆發作？",
     "why": "發生的方式和時間幫助判斷原因。"
    },
    {
     "q": "有沒有呼吸、吞嚥或說話困難？大小便正常嗎？",
     "why": "這些是需要立即處理的警訊。"
    },
    {
     "q": "最近有沒有感冒、腹瀉嘔吐，或新吃的藥（例如利尿劑）？",
     "why": "感染和藥物都可能造成無力。"
    },
    {
     "q": "有沒有糖尿病、甲狀腺疾病？家人有沒有類似的發作？",
     "why": "週期性麻痺可能和甲狀腺或家族有關。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "中風",
      "plain": "一側的臉、手或腳突然無力。",
      "refs": [
       "nhs-stroke",
       "mlp-weakness"
      ]
     },
     {
      "name": "神經嚴重受壓迫（馬尾症候群）",
      "plain": "雙腳無力，合併會陰麻木或大小便異常。",
      "refs": [
       "nhs-sciatica"
      ]
     },
     {
      "name": "脊髓的問題（橫斷性脊髓炎、脊髓受壓迫、脊髓中風）",
      "plain": "雙腳無力、麻木，可能合併大小便異常；脊髓受壓迫需要緊急手術。",
      "refs": [
       "mayo-tm"
      ]
     },
     {
      "name": "格林-巴利症候群",
      "plain": "神經發炎，手腳發麻後無力，可能影響呼吸。",
      "refs": [
       "nhs-gbs",
       "mlp-weakness"
      ]
     },
     {
      "name": "電解質失衡（例如低血鉀、低血鈉，包括週期性麻痺）",
      "plain": "可能引起心律不整。",
      "refs": [
       "mlp-weakness",
       "mlp-hypokalemia",
       "mlp-hpp",
       "mlp-tpp"
      ]
     },
     {
      "name": "低血糖",
      "plain": "使用胰島素或降血糖藥的人。",
      "refs": [
       "nhs-hypo"
      ]
     },
     {
      "name": "敗血症",
      "plain": "感染引起的嚴重全身反應。",
      "refs": [
       "nhs-sepsis"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "感冒等感染",
      "plain": "覺得沒力氣，但肌肉力量沒有真的變差。",
      "refs": [
       "mlp-weakness"
      ]
     },
     {
      "name": "貧血",
      "plain": "可能合併心悸、喘、臉色蒼白。",
      "refs": [
       "mlp-weakness",
       "nhs-tired"
      ]
     },
     {
      "name": "甲狀腺亢進",
      "plain": "可能合併手抖、怕熱、心悸、體重減輕。",
      "refs": [
       "mlp-weakness",
       "nhs-tired"
      ]
     },
     {
      "name": "神經受壓迫（例如椎間盤突出）",
      "plain": "某個部位無力或麻。",
      "refs": [
       "mlp-weakness"
      ]
     },
     {
      "name": "睡眠不足、壓力、生活作息",
      "plain": "常見的疲累原因。",
      "refs": [
       "nhs-tired"
      ]
     }
    ],
    "patternsHeading": "依無力的部位和方式",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "只有一側的臉、手或腳突然無力或麻木",
      "text": "可能是中風，請立即撥打 119。",
      "refs": [
       "nhs-stroke"
      ]
     },
     {
      "pattern": "兩隻腳無力，合併生殖器或肛門周圍麻木、尿不出來或無法控制大小便",
      "text": "可能是神經嚴重受壓迫（馬尾症候群），請立即到急診。",
      "refs": [
       "nhs-sciatica"
      ]
     },
     {
      "pattern": "雙腳沉重、無力或麻木，走路絆到、拖著腳，可能合併背痛或大小便異常",
      "text": "可能是脊髓的問題（橫斷性脊髓炎、脊髓受壓迫）或電解質失衡，請立即就醫。",
      "refs": [
       "mayo-tm",
       "mlp-weakness"
      ]
     },
     {
      "pattern": "手腳先發麻刺痛，接著無力，幾天到幾週內愈來愈嚴重",
      "text": "可能是格林-巴利症候群，請今天就醫；出現呼吸或吞嚥困難，請立即撥打 119。",
      "refs": [
       "nhs-gbs"
      ]
     },
     {
      "pattern": "睡醒、飽餐或運動後休息時，突然四肢無力（常在肩膀、髖部），發作之間完全正常；可能合併心悸、手抖、怕熱、體重減輕",
      "text": "可能是低血鉀週期性麻痺（包括甲狀腺亢進引起的），正在發作請立即到急診；已經恢復，請今天就醫；合併呼吸困難、心跳不規則或昏倒，請撥打 119。",
      "refs": [
       "mlp-hpp",
       "mlp-tpp"
      ]
     },
     {
      "pattern": "嚴重腹瀉、嘔吐，或吃利尿劑之後無力、抽筋、心悸",
      "text": "可能是低血鉀，請今天就醫。",
      "refs": [
       "mlp-hypokalemia"
      ]
     },
     {
      "pattern": "眼皮下垂、看東西有兩個影像，咀嚼、吞嚥、說話容易累，傍晚比較嚴重",
      "text": "可能是重症肌無力，請安排門診；突然吞嚥或呼吸困難，請立即就醫。",
      "refs": [
       "nhs-mg"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "甲狀腺亢進引起的週期性麻痺，亞洲男性比較常見。",
     "refs": [
      "mlp-tpp"
     ]
    }
   ],
   "visitPreparation": [
    "無力開始的時間、部位，是否反覆發作",
    "使用中的所有藥物，特別是利尿劑、降血糖藥",
    "最近的感冒、腹瀉或嘔吐",
    "病史：糖尿病、甲狀腺疾病",
    "家人有沒有類似的發作"
   ],
   "sources": [
    "mlp-weakness",
    "nhs-stroke",
    "mlp-hpp",
    "nhs-gbs",
    "nhs-mg",
    "nhs-sciatica",
    "mlp-hypokalemia",
    "nhs-hypo",
    "nhs-sepsis",
    "mlp-tpp",
    "nhs-tired",
    "mayo-tm"
   ],
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17"
  },
  {
   "slug": "dizziness",
   "title": "頭暈、眩暈（天旋地轉）",
   "bodyArea": "neuro",
   "audience": [
    "adult"
   ],
   "status": "published",
   "aliases": [
    "頭暈",
    "眩暈",
    "暈眩",
    "天旋地轉",
    "頭重腳輕",
    "頭昏",
    "頭昏眼花",
    "站不穩",
    "走路不穩",
    "耳石",
    "耳石症",
    "梅尼爾氏症",
    "轉頭就暈",
    "起床頭暈"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "summary": "頭暈很常見，通常不嚴重，常會自己好。但新出現、嚴重的頭暈，如果合併劇烈頭痛、胸痛、心跳不規則、手腳或臉無力、說話不清楚、看東西或聽力突然改變，可能是中風或心臟的問題，請立即撥打 119。",
   "definition": "頭暈包括覺得站不穩、頭重腳輕、快昏倒，或覺得自己或周圍在旋轉（眩暈）。",
   "definitionRefs": [
    "nhs-dizzy"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "新出現、嚴重的頭暈或眩暈，加上下列任何一項，請立即就醫：",
     "items": [
      {
       "text": "突然劇烈頭痛，或胸痛",
       "refs": [
        "mayo-dizzy"
       ]
      },
      {
       "text": "心跳很快或不規則",
       "refs": [
        "mayo-dizzy"
       ]
      },
      {
       "text": "手腳或臉無力、麻木，或走路不穩、跌倒",
       "refs": [
        "mayo-dizzy",
        "nhs-vertigo"
       ]
      },
      {
       "text": "說話不清楚或意識混亂",
       "refs": [
        "mayo-dizzy",
        "nhs-vertigo"
       ]
      },
      {
       "text": "看東西有兩個影像、突然看不見，或聽力突然改變",
       "refs": [
        "mayo-dizzy",
        "nhs-vertigo"
       ]
      },
      {
       "text": "呼吸困難",
       "refs": [
        "mayo-dizzy"
       ]
      },
      {
       "text": "昏倒或抽搐",
       "refs": [
        "mayo-dizzy"
       ]
      },
      {
       "text": "一直嘔吐",
       "refs": [
        "mayo-dizzy"
       ]
      },
      {
       "text": "叫不醒",
       "refs": [
        "nhs-vertigo"
       ]
      },
      {
       "text": "頭暈、眩暈合併一側耳朵突然聽不到",
       "refs": [
        "mayo-dizzy",
        "nhs-vertigo"
       ]
      }
     ],
     "doNow": [
      {
       "text": "先躺下，等頭暈過去再慢慢起身；不要突然彎腰或站起來。",
       "refs": [
        "nhs-dizzy"
       ]
      },
      {
       "text": "頭暈時不要開車、爬梯子或操作機器。",
       "refs": [
        "nhs-dizzy"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "眩暈合併劇烈頭痛、一直想吐或嘔吐，或發燒、發冷發抖",
       "refs": [
        "nhs-vertigo"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "頭暈一直沒有好，或反覆發作，而且沒有上方任何一項",
       "refs": [
        "nhs-dizzy",
        "nhs-vertigo",
        "mayo-dizzy"
       ]
      },
      {
       "text": "合併耳鳴",
       "refs": [
        "nhs-dizzy"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "少數頭暈是心臟病、心律不整或小中風等疾病造成的。",
       "refs": [
        "mayo-dizzy"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "是天旋地轉，還是頭重腳輕、快昏倒？",
     "why": "不同的感覺指向不同的原因。"
    },
    {
     "q": "什麼時候會暈？轉頭、躺下、起身時？每次持續多久？",
     "why": "誘發的動作和時間長短是重要線索。"
    },
    {
     "q": "有沒有聽力變差、耳鳴、看東西、說話或手腳的問題？",
     "why": "幫助分辨是耳朵還是腦部的問題。"
    },
    {
     "q": "正在吃哪些藥？有沒有糖尿病、心臟病、偏頭痛？",
     "why": "藥物和這些疾病都可能造成頭暈。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "中風或小中風",
      "plain": "可能合併手腳或臉無力、說話不清楚、看東西有兩個影像。",
      "refs": [
       "mayo-dizzy",
       "nhs-vertigo"
      ]
     },
     {
      "name": "心律不整或其他心臟病",
      "plain": "心跳很快或不規則、胸痛。",
      "refs": [
       "mayo-dizzy"
      ]
     },
     {
      "name": "低血糖",
      "plain": "使用胰島素或降血糖藥的人，可能合併冒汗、焦慮。",
      "refs": [
       "mayo-dizzy",
       "nhs-dizzy"
      ]
     },
     {
      "name": "身體的血量不足",
      "plain": "例如出血或嚴重脫水。",
      "refs": [
       "mayo-dizzy"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "耳石症（良性陣發性姿勢性眩暈）",
      "plain": "頭快速轉動時，突然短暫天旋地轉。",
      "refs": [
       "mayo-dizzy"
      ]
     },
     {
      "name": "前庭神經炎、迷路炎",
      "plain": "內耳發炎，突然天旋地轉、站不穩、噁心。",
      "refs": [
       "nhs-labyrinthitis",
       "mayo-dizzy"
      ]
     },
     {
      "name": "姿勢性低血壓",
      "plain": "坐起或站起來太快時頭暈。",
      "refs": [
       "mayo-dizzy",
       "nhs-dizzy"
      ]
     },
     {
      "name": "偏頭痛",
      "plain": "不一定伴隨頭痛。",
      "refs": [
       "mayo-dizzy",
       "nhs-dizzy"
      ]
     },
     {
      "name": "藥物副作用",
      "plain": "例如抗癲癇藥、抗憂鬱藥、鎮靜藥、降血壓藥。",
      "refs": [
       "mayo-dizzy"
      ]
     },
     {
      "name": "貧血、脫水或中暑",
      "plain": "可能合併疲倦、臉色蒼白。",
      "refs": [
       "mayo-dizzy",
       "nhs-dizzy"
      ]
     },
     {
      "name": "壓力或焦慮",
      "plain": "",
      "refs": [
       "nhs-dizzy"
      ]
     }
    ],
    "patternsHeading": "依頭暈的感覺和情境",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "頭快速轉動、躺下或翻身時，突然短暫的天旋地轉",
      "text": "可能是耳石症，請安排門診。",
      "refs": [
       "mayo-dizzy"
      ]
     },
     {
      "pattern": "突然持續的天旋地轉、站不穩、噁心嘔吐，可能合併聽力變差或耳鳴",
      "text": "可能是前庭神經炎或迷路炎；一側耳朵突然聽不到，請立即到急診。合併上方任何一項，請撥打 119。",
      "refs": [
       "nhs-labyrinthitis"
      ]
     },
     {
      "pattern": "坐起或站起來時頭暈、快昏倒",
      "text": "可能是姿勢性低血壓。起床時先在床邊坐一下再站起來。",
      "refs": [
       "mayo-dizzy",
       "nhs-vertigo"
      ]
     },
     {
      "pattern": "反覆發作、一次持續好幾小時的眩暈，合併時好時壞的聽力變差、耳鳴、耳朵悶塞",
      "text": "可能是梅尼爾氏症，請安排門診。",
      "refs": [
       "mayo-dizzy"
      ]
     },
     {
      "pattern": "有偏頭痛，反覆發作幾分鐘到幾小時的眩暈",
      "text": "可能和偏頭痛有關，請安排門診。",
      "refs": [
       "mayo-dizzy"
      ]
     },
     {
      "pattern": "有糖尿病，合併冒汗、發抖、心悸",
      "text": "可能是低血糖。還能安全吞嚥時，先喝一小杯果汁或含糖飲料；叫不醒或沒有改善，請撥打 119。",
      "refs": [
       "nhs-hypo"
      ]
     },
     {
      "pattern": "合併心跳很快或不規則、胸痛",
      "text": "可能是心律不整或心臟的問題，請立即撥打 119。",
      "refs": [
       "mayo-dizzy"
      ]
     }
    ]
   },
   "specialPopulations": [],
   "visitPreparation": [
    "頭暈開始的時間、每次持續多久、誘發的動作",
    "使用中的所有藥物",
    "病史：糖尿病、心臟病、偏頭痛、耳朵的問題"
   ],
   "sources": [
    "nhs-dizzy",
    "mayo-dizzy",
    "nhs-vertigo",
    "nhs-labyrinthitis",
    "nhs-hypo"
   ],
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17"
  },
  {
   "slug": "fainting",
   "title": "昏倒、暈厥",
   "bodyArea": "whole-body",
   "audience": [
    "adult"
   ],
   "status": "published",
   "aliases": [
    "昏倒",
    "暈倒",
    "暈厥",
    "昏厥",
    "失去意識",
    "突然倒下",
    "眼前發黑",
    "快昏倒",
    "腦貧血",
    "起身昏倒"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "summary": "昏倒是短暫失去意識。多數不嚴重，但也可能是心臟或出血等嚴重問題。在原因確定之前，請把昏倒當成緊急狀況處理。",
   "definition": "昏倒（暈厥）是短時間失去意識，通常是腦部的血流突然減少。",
   "definitionRefs": [
    "nhs-faint",
    "mayo-syncope"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119",
     "intro": "有人昏倒，加上下列任何一項，請立即撥打 119：",
     "items": [
      {
       "text": "沒有呼吸，或 1 分鐘內叫不醒",
       "refs": [
        "nhs-faint",
        "mayo-faint-fa"
       ]
      },
      {
       "text": "醒來後沒有完全恢復，或說話、看東西、手腳活動有問題",
       "refs": [
        "nhs-faint",
        "mlp-faint"
       ]
      },
      {
       "text": "胸痛、胸悶，或心跳很快、很用力、不規則",
       "refs": [
        "nhs-faint",
        "mlp-faint"
       ]
      },
      {
       "text": "運動中昏倒，或躺著的時候昏倒",
       "refs": [
        "nhs-faint"
       ]
      },
      {
       "text": "昏倒前後受了重傷，或從高處跌落",
       "refs": [
        "nhs-faint",
        "mlp-faint"
       ]
      },
      {
       "text": "抽搐、咬到舌頭，或大小便失禁",
       "refs": [
        "nhs-faint",
        "mlp-faint"
       ]
      },
      {
       "text": "懷孕中",
       "refs": [
        "mlp-faint"
       ]
      },
      {
       "text": "50 歲以上",
       "refs": [
        "mlp-faint"
       ]
      },
      {
       "text": "有糖尿病",
       "refs": [
        "mlp-faint"
       ]
      }
     ],
     "doNow": [
      {
       "text": "快昏倒時：立刻躺下或坐下；坐著時把頭放在兩膝之間。不要太快站起來。",
       "refs": [
        "mayo-faint-fa"
       ]
      },
      {
       "text": "有人昏倒時：讓他平躺，鬆開領口和皮帶；沒有受傷又有呼吸，可以把腳抬高約 30 公分。懷孕（特別是 28 週以上）的人，改成側躺。",
       "refs": [
        "mayo-faint-fa",
        "mlp-faint",
        "nhs-faint"
       ]
      },
      {
       "text": "吐了就讓他側躺，避免嗆到。",
       "refs": [
        "mlp-faint"
       ]
      },
      {
       "text": "沒有呼吸：撥打 119 並開始心肺復甦術（做法見「緊急狀況怎麼辦」頁）。",
       "refs": [
        "mayo-faint-fa",
        "nfa-cpr"
       ]
      },
      {
       "text": "不要自己開車去急診。",
       "refs": [
        "nhs-faint"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "已經完全恢復，但這是第一次昏倒、最近常常昏倒，或不知道原因",
       "refs": [
        "mlp-faint",
        "nhs-faint"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": []
    },
    "observe": null,
    "observeOmittedReason": "昏倒的原因確定之前，本頁不提供在家觀察。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "昏倒可能沒有大礙，也可能是心臟等嚴重問題；原因確定之前，應把失去意識當成緊急狀況。",
       "refs": [
        "mayo-faint-fa"
       ]
      },
      {
       "text": "心跳太快時血壓會下降而昏倒，有心臟病的人比較容易發生。",
       "refs": [
        "mayo-palp"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "昏倒前在做什麼？站很久、運動、躺著、上廁所、咳嗽？",
     "why": "昏倒前的情境是判斷原因的重要線索。"
    },
    {
     "q": "昏倒前有沒有頭暈、冒汗、眼前發黑、胸痛或心悸？",
     "why": "幫助分辨是一般的昏倒，還是心臟的問題。"
    },
    {
     "q": "昏倒了多久？有沒有抽搐、咬到舌頭、尿失禁？",
     "why": "幫助分辨昏倒和癲癇發作。"
    },
    {
     "q": "有沒有心臟病、糖尿病？正在吃哪些藥？",
     "why": "藥物和這些疾病都可能造成昏倒。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "心律不整或心臟病發作",
      "plain": "可能合併胸痛、心悸。",
      "refs": [
       "mlp-faint",
       "nhs-faint"
      ]
     },
     {
      "name": "出血或嚴重脫水",
      "plain": "血壓突然下降。",
      "refs": [
       "mlp-faint"
      ]
     },
     {
      "name": "中風",
      "plain": "醒來後說話、手腳活動有問題。",
      "refs": [
       "mlp-faint"
      ]
     },
     {
      "name": "癲癇發作",
      "plain": "抽搐、咬到舌頭、大小便失禁。",
      "refs": [
       "mlp-faint"
      ]
     },
     {
      "name": "低血糖",
      "plain": "使用降血糖藥的人。",
      "refs": [
       "mlp-faint"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "血管迷走神經性昏厥",
      "plain": "看到血、情緒激動、站很久或太熱時，心跳和血壓突然下降。",
      "refs": [
       "mayo-syncope",
       "nhs-faint"
      ]
     },
     {
      "name": "站起來太快（姿勢性低血壓）",
      "plain": "",
      "refs": [
       "nhs-faint",
       "mlp-faint"
      ]
     },
     {
      "name": "沒吃東西、喝水不夠或太熱",
      "plain": "",
      "refs": [
       "nhs-faint"
      ]
     },
     {
      "name": "用力咳嗽、解便或半夜解尿時",
      "plain": "",
      "refs": [
       "mlp-faint"
      ]
     },
     {
      "name": "藥物",
      "plain": "例如降血壓藥、抗焦慮或抗憂鬱藥。",
      "refs": [
       "mlp-faint"
      ]
     },
     {
      "name": "喝酒或使用毒品",
      "plain": "",
      "refs": [
       "nhs-faint",
       "mlp-faint"
      ]
     }
    ],
    "patternsHeading": "依昏倒前的情境",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "運動中或躺著的時候突然昏倒",
      "text": "可能是心臟的問題，請立即撥打 119。",
      "refs": [
       "nhs-faint"
      ]
     },
     {
      "pattern": "昏倒前胸痛、胸悶，或心跳很快、很用力、不規則",
      "text": "可能是心律不整或心臟病發作，請立即撥打 119。",
      "refs": [
       "mlp-faint",
       "nhs-faint"
      ]
     },
     {
      "pattern": "看到血、受到驚嚇、站很久或很熱時，先頭暈、冒汗再昏倒，很快醒來",
      "text": "可能是血管迷走神經性昏厥，通常不危險；第一次發生或原因不明，仍要就醫檢查。",
      "refs": [
       "mayo-syncope",
       "mlp-faint"
      ]
     },
     {
      "pattern": "從躺著或坐著突然站起來時昏倒",
      "text": "可能是姿勢性低血壓。之後起身要慢。",
      "refs": [
       "nhs-faint",
       "mlp-faint"
      ]
     },
     {
      "pattern": "用力咳嗽、解便或半夜起床解尿時昏倒",
      "text": "這些情境也可能引起昏倒，請就醫檢查。",
      "refs": [
       "mlp-faint"
      ]
     },
     {
      "pattern": "有糖尿病，昏倒前冒汗、發抖",
      "text": "可能是低血糖。有糖尿病的人昏倒，請撥打 119；等待時如果已經清醒、能安全吞嚥，可以先喝一小杯果汁或含糖飲料。",
      "refs": [
       "mlp-faint",
       "nhs-hypo"
      ]
     },
     {
      "pattern": "昏倒前後吐血或解黑便",
      "text": "可能是腸胃道出血，請立即撥打 119。",
      "refs": [
       "mlp-faint",
       "nhs-vomit-blood"
      ]
     },
     {
      "pattern": "抽搐、咬到舌頭或大小便失禁",
      "text": "可能是癲癇發作，請立即撥打 119。",
      "refs": [
       "mlp-faint"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "50 歲以上、懷孕或有糖尿病的人昏倒，請撥打 119。",
     "refs": [
      "mlp-faint"
     ]
    }
   ],
   "visitPreparation": [
    "看到昏倒經過的人一起去",
    "昏倒前在做什麼、昏倒多久",
    "使用中的所有藥物",
    "病史：心臟病、糖尿病、癲癇"
   ],
   "sources": [
    "nhs-faint",
    "mayo-syncope",
    "mayo-faint-fa",
    "mlp-faint",
    "nfa-cpr",
    "mayo-palp",
    "nhs-hypo",
    "nhs-vomit-blood"
   ],
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17"
  },
  {
   "slug": "seizure",
   "title": "抽搐、癲癇發作",
   "bodyArea": "neuro",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。兒童發燒時抽搐，請看「兒童發燒」頁。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "抽搐",
    "癲癇",
    "羊癲瘋",
    "全身抽動",
    "翻白眼",
    "口吐白沫",
    "癲癇發作",
    "痙攣",
    "抽搐發作"
   ],
   "summary": "抽搐通常幾秒到幾分鐘會自己停止。發作時最重要的是保護他不要受傷。第一次抽搐、抽超過 5 分鐘、抽完沒有恢復或接連發作，請立即撥打 119。",
   "definition": "抽搐（癲癇發作）是腦部突然異常放電，可能造成意識、動作或感覺的改變。兩次以上沒有明確誘因的發作，稱為癲癇。",
   "definitionRefs": [
    "mayo-seizure"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119",
     "intro": "有人抽搐，加上下列任何一項，請立即撥打 119：",
     "items": [
      {
       "text": "第一次抽搐",
       "refs": [
        "nhs-epilepsy",
        "mlp-seizure"
       ]
      },
      {
       "text": "抽超過 5 分鐘，或比他平常的發作更久",
       "refs": [
        "nhs-epilepsy",
        "mayo-seizure"
       ]
      },
      {
       "text": "抽完沒有恢復，或還沒恢復又抽第二次",
       "refs": [
        "nhs-epilepsy",
        "mlp-seizure",
        "mayo-seizure"
       ]
      },
      {
       "text": "24 小時內抽了 3 次以上",
       "refs": [
        "nhs-epilepsy"
       ]
      },
      {
       "text": "抽完之後沒有呼吸",
       "refs": [
        "mayo-seizure"
       ]
      },
      {
       "text": "在水裡抽搐",
       "refs": [
        "mlp-seizure"
       ]
      },
      {
       "text": "抽搐時受傷",
       "refs": [
        "mayo-seizure",
        "mlp-seizure"
       ]
      },
      {
       "text": "懷孕、有糖尿病，或發高燒、中暑",
       "refs": [
        "mayo-seizure",
        "mlp-seizure"
       ]
      },
      {
       "text": "這次的發作和平常不一樣",
       "refs": [
        "mlp-seizure"
       ]
      }
     ],
     "doNow": [
      {
       "text": "讓他躺在安全的地上，移開周圍尖銳或危險的東西，頭下墊軟的東西。",
       "refs": [
        "mlp-seizure"
       ]
      },
      {
       "text": "鬆開脖子周圍的衣服；讓他側躺，萬一吐了才不會嗆到。",
       "refs": [
        "mlp-seizure"
       ]
      },
      {
       "text": "記下開始和結束的時間。",
       "refs": [
        "nhs-febrile"
       ]
      },
      {
       "text": "不要壓住他，不要把任何東西（包括手指）放進他嘴裡，也不要拉他的舌頭。",
       "refs": [
        "mlp-seizure"
       ]
      },
      {
       "text": "完全清醒之前，不要給他吃喝任何東西。",
       "refs": [
        "mlp-seizure"
       ]
      },
      {
       "text": "抽搐明確停止後沒有呼吸，才開始心肺復甦術。陪在旁邊，直到他恢復或救護人員到達。",
       "refs": [
        "mlp-seizure"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "覺得自己可能抽搐過，但當時沒有就醫",
       "refs": [
        "nhs-epilepsy"
       ]
      },
      {
       "text": "有癲癇，很久沒發作又再發作",
       "refs": [
        "nhs-epilepsy"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": []
    },
    "observe": null,
    "observeOmittedReason": "抽搐不提供在家觀察。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "抽搐持續很久，或接連發作沒有恢復，需要緊急治療，以免腦部受損。",
       "refs": [
        "nhs-epilepsy"
       ]
      },
      {
       "text": "抽搐可能造成意外或受傷。",
       "refs": [
        "nhs-epilepsy"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "抽了多久？全身還是身體一部分？",
     "why": "發作的時間和型態幫助判斷原因。"
    },
    {
     "q": "是第一次嗎？有沒有癲癇，平常吃藥嗎？最近有沒有漏吃？",
     "why": "漏吃藥是常見的誘發原因。"
    },
    {
     "q": "抽之前有沒有發燒、頭痛、撞到頭、喝酒或戒酒？",
     "why": "這些都可能引起抽搐。"
    },
    {
     "q": "有沒有糖尿病？懷孕嗎？",
     "why": "低血糖和懷孕相關的抽搐需要立即處理。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "低血糖或血鈉異常",
      "plain": "",
      "refs": [
       "mlp-seizure"
      ]
     },
     {
      "name": "腦部感染（腦膜炎、腦炎）",
      "plain": "",
      "refs": [
       "mlp-seizure"
      ]
     },
     {
      "name": "頭部受傷",
      "plain": "",
      "refs": [
       "mlp-seizure"
      ]
     },
     {
      "name": "中風",
      "plain": "",
      "refs": [
       "mlp-seizure"
      ]
     },
     {
      "name": "中毒或毒品",
      "plain": "",
      "refs": [
       "mlp-seizure"
      ]
     },
     {
      "name": "中暑",
      "plain": "",
      "refs": [
       "mlp-seizure",
       "mayo-seizure"
      ]
     },
     {
      "name": "懷孕相關（子癲症）",
      "plain": "",
      "refs": [
       "mlp-seizure"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "癲癇",
      "plain": "",
      "refs": [
       "mlp-seizure",
       "nhs-epilepsy"
      ]
     },
     {
      "name": "酒精或某些藥物戒斷",
      "plain": "長期使用後突然停止。",
      "refs": [
       "mlp-seizure"
      ]
     }
    ],
    "patternsHeading": "依發作前後的情況",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "第一次抽搐",
      "text": "需要檢查原因，請立即撥打 119。",
      "refs": [
       "nhs-epilepsy",
       "mlp-seizure"
      ]
     },
     {
      "pattern": "有糖尿病，抽搐前冒汗、發抖",
      "text": "可能是低血糖，請撥打 119；抽搐或叫不醒時不要餵食。",
      "refs": [
       "mlp-seizure",
       "nhs-hypo"
      ]
     },
     {
      "pattern": "長期喝酒的人停酒之後抽搐",
      "text": "可能是酒精戒斷，請撥打 119。",
      "refs": [
       "mlp-seizure"
      ]
     },
     {
      "pattern": "發燒、頭痛、脖子僵硬之後抽搐",
      "text": "可能是腦部感染，請立即撥打 119。",
      "refs": [
       "mlp-seizure"
      ]
     },
     {
      "pattern": "撞到頭之後抽搐",
      "text": "請立即撥打 119。",
      "refs": [
       "mlp-seizure",
       "nhs-head"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "懷孕中抽搐，對孕婦和胎兒都有危險，請立即撥打 119。",
     "refs": [
      "mayo-seizure",
      "mlp-seizure"
     ]
    }
   ],
   "visitPreparation": [
    "看到發作經過的人一起去（可以錄影）",
    "發作開始和結束的時間",
    "使用中的所有藥物，最近有沒有漏吃",
    "病史：癲癇、糖尿病、最近有沒有撞到頭"
   ],
   "sources": [
    "mayo-seizure",
    "nhs-epilepsy",
    "mlp-seizure",
    "nhs-febrile",
    "nhs-hypo",
    "nhs-head"
   ]
  },
  {
   "slug": "fever",
   "title": "發燒",
   "aliases": [
    "發熱",
    "體溫高",
    "高燒",
    "燒起來",
    "身體很燙",
    "畏寒發抖",
    "發冷",
    "忽冷忽熱",
    "燒不退",
    "微燒",
    "低燒"
   ],
   "bodyArea": "whole-body",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。嬰兒與兒童發燒，請看「兒童發燒」頁。",
   "summary": "發燒通常是身體對感染的反應，多數由病毒感冒引起。但若合併意識改變、呼吸困難、皮膚出疹或出血，可能是嚴重感染，需要立即處理。",
   "definition": "成人體溫達 38°C 以上一般視為發燒。即使體溫計不到 38°C，覺得身體發熱、發冷或發抖，也可能是發燒。",
   "definitionRefs": [
    "nhs-fever"
   ],
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-11",
   "nextReviewAt": "2027-11-11",
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "發燒加上下列任何一項，請立即就醫。患者意識不清、呼吸困難、抽搐或無法行走時，請撥打 119：",
     "items": [
      {
       "text": "意識混亂、講話不清楚、很想睡、叫不太醒",
       "refs": [
        "mayo-fever",
        "mlp-fever"
       ]
      },
      {
       "text": "呼吸困難、很喘",
       "refs": [
        "mayo-fever",
        "mlp-fever"
       ]
      },
      {
       "text": "嘴唇、舌頭或指甲發紫",
       "refs": [
        "mlp-fever"
       ]
      },
      {
       "text": "抽搐",
       "refs": [
        "mayo-fever",
        "mlp-fever"
       ]
      },
      {
       "text": "無法走路，或虛弱到站不起來",
       "refs": [
        "mlp-fever"
       ]
      },
      {
       "text": "劇烈頭痛、脖子僵硬或怕光（任一項就算）",
       "refs": [
        "mayo-fever",
        "mlp-fever"
       ]
      },
      {
       "text": "新出現皮疹或瘀青，特別是壓了不會消失的紅紫色斑點",
       "refs": [
        "mayo-fever",
        "mlp-fever"
       ]
      },
      {
       "text": "胸痛",
       "refs": [
        "mayo-fever"
       ]
      },
      {
       "text": "腹痛",
       "refs": [
        "mayo-fever",
        "who-dengue"
       ]
      },
      {
       "text": "一直嘔吐",
       "refs": [
        "mayo-fever",
        "who-dengue"
       ]
      },
      {
       "text": "解尿疼痛",
       "refs": [
        "mayo-fever",
        "mlp-fever"
       ]
      },
      {
       "text": "牙齦或鼻子出血、吐血或血便、皮膚蒼白濕冷、手腳冰冷、躁動不安、非常口渴或極度虛弱（可能是嚴重登革熱，常在退燒時才出現）",
       "refs": [
        "who-dengue"
       ]
      },
      {
       "text": "正在接受化學治療，或因疾病、藥物使免疫力很差",
       "refs": [
        "mlp-fever"
       ]
      }
     ],
     "doNow": [
      {
       "text": "懷疑登革熱時，不要自行服用阿斯匹靈或布洛芬（ibuprofen）類止痛藥。",
       "refs": [
        "who-dengue"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "發燒超過 2 到 3 天（48 到 72 小時），或愈來愈高",
       "refs": [
        "mlp-fever",
        "nhs-fever"
       ]
      },
      {
       "text": "體溫達 39.4°C 以上，或吃退燒藥也降不下來",
       "refs": [
        "mayo-fever",
        "mlp-fever"
       ]
      },
      {
       "text": "反覆發燒，斷斷續續持續一週以上",
       "refs": [
        "mlp-fever"
       ]
      },
      {
       "text": "最近出國回來（即使沒有其他症狀）",
       "refs": [
        "mlp-fever"
       ]
      },
      {
       "text": "出現發燒、頭痛、眼窩後痛、肌肉關節痛或皮疹，住在或去過登革熱流行地區",
       "refs": [
        "who-dengue"
       ]
      },
      {
       "text": "有心臟病、糖尿病、慢性肺病等嚴重慢性病",
       "refs": [
        "mlp-fever"
       ]
      },
      {
       "text": "一直吐，連水都喝不下",
       "refs": [
        "nhs-dv"
       ]
      },
      {
       "text": "開始吃新的藥，或藥量改變之後發燒",
       "refs": [
        "mlp-fever"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "年輕、身體健康的成人，只有感冒症狀（流鼻水、喉嚨痛、咳嗽），而且沒有上方任何一項：可以到診所看診",
       "refs": [
        "mlp-fever",
        "nhs-flu"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。"
   },
   "keyQuestions": [
    {
     "q": "發燒幾天了？最高幾度？用什麼方式量的？",
     "why": "發燒的天數與高度幫助判斷嚴重度。"
    },
    {
     "q": "還有哪些症狀？咳嗽、喉嚨痛、腹瀉、解尿痛、皮疹、頭痛？",
     "why": "伴隨症狀能幫助找出感染的位置。"
    },
    {
     "q": "最近有沒有出國、被蚊蟲叮咬、接觸生病的人？",
     "why": "登革熱等傳染病需要特別處理。"
    },
    {
     "q": "有沒有慢性病、正在化療，或使用類固醇、免疫抑制藥物？",
     "why": "免疫力差的人發燒需要更快處理。"
    },
    {
     "q": "最近有沒有開始吃新的藥物？",
     "why": "某些藥物會引起發燒或體溫過高。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "腦膜炎",
      "plain": "包覆腦部的薄膜感染。",
      "refs": [
       "mayo-fever",
       "mlp-fever"
      ]
     },
     {
      "name": "嚴重肺炎",
      "plain": "肺部感染，合併喘。",
      "refs": [
       "mlp-fever"
      ]
     },
     {
      "name": "泌尿道或腎臟感染",
      "plain": "解尿痛、腰痛合併發燒。",
      "refs": [
       "mlp-fever"
      ]
     },
     {
      "name": "嚴重登革熱",
      "plain": "蚊子傳播的病毒感染，可能出血或休克。",
      "refs": [
       "who-dengue"
      ]
     },
     {
      "name": "免疫力低下時的感染",
      "plain": "化療或免疫力很差時，感染可能快速惡化。",
      "refs": [
       "mlp-fever"
      ]
     },
     {
      "name": "藥物或中暑引起的體溫過高",
      "plain": "不是感染，處理方式不同。",
      "refs": [
       "mayo-fever"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "感冒、流感、新冠肺炎等病毒感染",
      "plain": "最常見，通常合併咳嗽、喉嚨痛、肌肉痠痛。",
      "refs": [
       "mayo-fever",
       "nhs-fever"
      ]
     },
     {
      "name": "腸胃炎",
      "plain": "合併腹瀉、嘔吐。",
      "refs": [
       "mlp-fever"
      ]
     },
     {
      "name": "泌尿道感染",
      "plain": "解尿痛、頻尿。",
      "refs": [
       "mayo-fever",
       "mlp-fever"
      ]
     },
     {
      "name": "皮膚感染（蜂窩性組織炎）",
      "plain": "皮膚紅、腫、熱、痛。",
      "refs": [
       "mlp-fever"
      ]
     }
    ],
    "patternsHeading": "依合併的症狀",
    "patternsIntro": "合併的症狀只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "發燒合併脖子僵硬、看亮光眼睛會痛、愈來愈嚴重的頭痛、意識混亂，或壓了不會褪色的疹子",
      "text": "可能是腦膜炎，請立即撥打 119。",
      "refs": [
       "nhs-meningitis"
      ]
     },
     {
      "pattern": "意識混亂或說話不清楚、無法控制的發抖、呼吸困難、皮膚或嘴唇蒼白發紫或出現花斑、一整天幾乎沒有尿",
      "text": "可能是敗血症（感染引起的嚴重全身反應），幾小時內就可能惡化，請立即撥打 119。體溫也可能反而偏低。",
      "refs": [
       "nhs-sepsis"
      ]
     },
     {
      "pattern": "在高溫環境或運動後，體溫非常高、皮膚很燙卻不流汗、呼吸和心跳很快、意識混亂",
      "text": "可能是中暑（熱中暑），請立即撥打 119。等待時把人移到陰涼處，用冷水擦拭並搧風降溫。",
      "refs": [
       "nhs-heat"
      ]
     },
     {
      "pattern": "發燒合併咳嗽、喘、胸痛、全身痠痛，可能咳黃綠色的痰",
      "text": "可能是肺炎。有喘或胸痛時請立即就醫。",
      "refs": [
       "nhs-pneumonia"
      ]
     },
     {
      "pattern": "發燒合併解尿疼痛或灼熱、頻尿、下腹痛或腰側痛、發冷發抖",
      "text": "可能是泌尿道感染或腎臟感染，請立即就醫。",
      "refs": [
       "nhs-uti",
       "mayo-kidney-infection"
      ]
     },
     {
      "pattern": "發燒合併一處皮膚紅、腫、熱、痛，範圍在擴大",
      "text": "可能是蜂窩性組織炎，請立即就醫。",
      "refs": [
       "mayo-cellulitis"
      ]
     },
     {
      "pattern": "高燒合併劇烈頭痛、眼窩後方痛、肌肉關節痛、噁心嘔吐、起疹子",
      "text": "可能是登革熱，請今天就醫。退燒後才出現劇烈肚子痛、一直嘔吐、牙齦或鼻子出血，可能是嚴重登革熱，請立即就醫。",
      "refs": [
       "who-dengue"
      ]
     },
     {
      "pattern": "很快出現的高燒，全身痠痛、非常疲倦、乾咳、喉嚨痛、頭痛",
      "text": "常見於流感。65 歲以上、孕婦、有慢性病或免疫力低下的人，或覺得喘時，請今天就醫。",
      "refs": [
       "nhs-flu"
      ]
     },
     {
      "pattern": "發燒合併喉嚨痛、吞嚥困難，扁桃腺紅腫或有白點、膿點",
      "text": "可能是扁桃腺炎。扁桃腺有膿點，或痛到無法進食喝水時，請今天就醫。",
      "refs": [
       "nhs-tonsillitis"
      ]
     },
     {
      "pattern": "發燒合併腹瀉、嘔吐",
      "text": "常見於腸胃炎。一直嘔吐無法喝水、肚子痛或血便時，請立即就醫。",
      "refs": [
       "mlp-fever",
       "nhs-dv"
      ]
     }
    ]
   },
   "specialPopulations": [],
   "visitPreparation": [
    "發燒開始的日期、最高溫度、量體溫的方式",
    "已經使用過的退燒藥，名稱與時間",
    "其他症狀與出現的順序",
    "最近 2 週的旅遊史與接觸史",
    "使用中的所有藥物，特別是化療、類固醇、免疫抑制劑",
    "慢性病史"
   ],
   "sources": [
    "nhs-fever",
    "mayo-fever",
    "mlp-fever",
    "who-dengue",
    "nhs-dv",
    "nhs-flu",
    "nhs-meningitis",
    "nhs-sepsis",
    "nhs-heat",
    "nhs-pneumonia",
    "nhs-uti",
    "mayo-kidney-infection",
    "mayo-cellulitis",
    "nhs-tonsillitis"
   ],
   "links": [
    {
     "label": "兒童發燒",
     "url": "symptom.html?slug=child-fever",
     "note": "嬰兒與兒童發燒的就醫建議"
    }
   ],
   "thinking": {
    "status": "published",
    "heading": "醫師怎麼想",
    "intro": "醫師看發燒，會先排除會致命的原因，再找感染在身體哪裡，也會想到不是感染的原因。這只是說明醫師的思考順序，不能用來自己判斷；只要有上方「立即求助」的任何一項，請立即就醫。",
    "steps": [
     {
      "title": "先排除會致命的原因",
      "text": "腦膜炎、敗血症、嚴重肺炎、嚴重登革熱，以及免疫力低下時的感染。",
      "refs": [
       "mlp-fever",
       "nhs-sepsis",
       "who-dengue"
      ]
     },
     {
      "title": "找感染在哪裡",
      "text": "幾乎任何感染都會發燒：喉嚨、耳朵、鼻竇、肺、腸胃、泌尿道、皮膚、骨頭，或包覆腦部的薄膜（腦膜炎）。",
      "refs": [
       "mlp-fever"
      ]
     },
     {
      "title": "想到不是感染的原因",
      "text": "某些藥物、自體免疫或發炎性疾病，以及中暑。",
      "refs": [
       "mlp-fever",
       "nhs-heat"
      ]
     },
     {
      "title": "問旅遊和接觸",
      "text": "住在或去過登革熱流行地區。",
      "refs": [
       "who-dengue"
      ]
     }
    ]
   }
  },
  {
   "slug": "heat-illness",
   "title": "中暑、熱衰竭",
   "bodyArea": "whole-body",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "中暑",
    "熱衰竭",
    "熱中暑",
    "熱傷害",
    "曬太久",
    "太熱頭暈"
   ],
   "summary": "在高溫或運動後出現疲倦、頭暈、頭痛、噁心、大量流汗，可能是熱衰竭：移到陰涼處、降溫、補充水分，30 分鐘內應該好轉。體溫很高、皮膚很燙卻不流汗、意識混亂、抽搐或昏倒，可能是中暑，請立即撥打 119。",
   "definition": "熱衰竭只要能在 30 分鐘內降溫，通常不需要急救；如果變成中暑（熱中暑），就是緊急狀況。",
   "definitionRefs": [
    "nhs-heat"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119",
     "intro": "在高溫環境或運動後，有下列任何一項，請立即撥打 119：",
     "items": [
      {
       "text": "在陰涼處休息、降溫、喝水 30 分鐘後仍然不舒服",
       "refs": [
        "nhs-heat"
       ]
      },
      {
       "text": "體溫很高",
       "refs": [
        "nhs-heat"
       ]
      },
      {
       "text": "皮膚很燙、發紅，卻不流汗",
       "refs": [
        "nhs-heat"
       ]
      },
      {
       "text": "心跳很快、呼吸很快或很喘",
       "refs": [
        "nhs-heat"
       ]
      },
      {
       "text": "意識混亂、動作不協調",
       "refs": [
        "nhs-heat"
       ]
      },
      {
       "text": "抽搐，或失去意識",
       "refs": [
        "nhs-heat"
       ]
      }
     ],
     "doNow": [
      {
       "text": "把人移到陰涼的地方，脫掉外套、襪子等不必要的衣物。",
       "refs": [
        "nhs-heat"
       ]
      },
      {
       "text": "清醒能喝時，給他喝大量的水，也可以喝運動飲料或口服電解質液。",
       "refs": [
        "nhs-heat"
       ]
      },
      {
       "text": "用涼水噴或擦他的皮膚並搧風；用布包冰袋放在腋下或脖子；等待救護時，可以用濕涼的床單包住他。",
       "refs": [
        "nhs-heat"
       ]
      },
      {
       "text": "失去意識：讓他側躺，告訴救護人員；沒有呼吸就開始心肺復甦術。",
       "refs": [
        "nhs-heat",
        "nfa-cpr"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": []
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "熱衰竭的症狀在 30 分鐘內降溫後已經好轉：繼續休息、補充水分；不確定時可以就醫諮詢",
       "refs": [
        "nhs-heat"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "熱衰竭如果沒有降溫，可能變成中暑，是緊急狀況。",
       "refs": [
        "nhs-heat"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "在什麼環境？做了什麼活動？多久了？",
     "why": "高溫和運動是中暑的主要原因。"
    },
    {
     "q": "還有沒有流汗？意識清楚嗎？",
     "why": "不流汗、意識混亂是中暑的警訊。"
    },
    {
     "q": "有沒有喝水？有沒有慢性病或正在吃的藥？",
     "why": "脫水和某些藥物會增加風險。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "中暑（熱中暑）",
      "plain": "體溫很高、皮膚很燙不流汗、意識混亂、抽搐。",
      "refs": [
       "nhs-heat"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "熱衰竭",
      "plain": "疲倦、頭暈、頭痛、噁心、大量流汗、皮膚蒼白濕冷、抽筋、很口渴。",
      "refs": [
       "nhs-heat"
      ]
     }
    ],
    "patternsHeading": "依出現的症狀",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "大量流汗、皮膚蒼白濕冷、頭暈、噁心、手腳或肚子抽筋、很口渴",
      "text": "可能是熱衰竭；移到陰涼處、降溫、補充水分，30 分鐘內應該好轉。",
      "refs": [
       "nhs-heat"
      ]
     },
     {
      "pattern": "體溫很高、皮膚很燙卻不流汗、心跳呼吸很快、意識混亂",
      "text": "可能是中暑，請立即撥打 119，等待時持續降溫。",
      "refs": [
       "nhs-heat"
      ]
     },
     {
      "pattern": "降溫休息 30 分鐘後還是不舒服",
      "text": "可能已經變成中暑，請立即撥打 119。",
      "refs": [
       "nhs-heat"
      ]
     },
     {
      "pattern": "在高溫環境中抽搐或昏倒",
      "text": "可能是中暑，請立即撥打 119；失去意識時讓他側躺，沒有呼吸就開始心肺復甦術。",
      "refs": [
       "nhs-heat"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "天氣炎熱或運動時，發生熱衰竭和中暑的風險很高。",
     "refs": [
      "nhs-heat"
     ]
    }
   ],
   "visitPreparation": [
    "發生的時間、環境和活動",
    "有沒有喝水、量過體溫",
    "使用中的所有藥物"
   ],
   "sources": [
    "nhs-heat",
    "nfa-cpr"
   ]
  },
  {
   "slug": "rash",
   "title": "皮疹（紅疹、過敏）",
   "aliases": [
    "皮疹",
    "紅疹",
    "疹子",
    "起疹子",
    "皮膚紅疹",
    "蕁麻疹",
    "風疹塊",
    "起風疹塊",
    "過敏",
    "皮膚過敏",
    "藥物過敏",
    "食物過敏",
    "皮膚癢",
    "全身癢",
    "起紅點",
    "紅點點",
    "起水泡",
    "皮膚紅腫",
    "皮蛇",
    "帶狀疱疹"
   ],
   "bodyArea": "skin",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。兒童出疹請諮詢醫師；兒童出現壓了不會褪色的紅紫斑，請立即就醫。",
   "summary": "多數皮疹來自皮膚碰到刺激物、蕁麻疹或濕疹，不會危及生命。但如果合併臉或喉嚨腫、呼吸困難，或在吃新藥後出現水泡、脫皮，或出現壓了不會褪色的紅紫斑，可能在短時間內危及生命。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-10",
   "nextReviewAt": "2027-11-10",
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "皮疹加上下列任何一項，請立即撥打 119 或到急診：",
     "items": [
      {
       "text": "嘴唇、嘴巴、舌頭、喉嚨或臉突然腫起來",
       "refs": [
        "nhs-anaphylaxis",
        "nhs-hives",
        "mlp-hives"
       ]
      },
      {
       "text": "呼吸很快、很喘、有咻咻聲，或喉嚨緊、吞嚥困難、聲音沙啞",
       "refs": [
        "nhs-anaphylaxis",
        "mlp-hives",
        "mlp-rash"
       ]
      },
      {
       "text": "頭暈、快要昏倒或昏倒，或突然意識混亂、很想睡",
       "refs": [
        "nhs-anaphylaxis",
        "mlp-hives",
        "mayo-food-allergy"
       ]
      },
      {
       "text": "皮膚、嘴唇或舌頭發紫、發灰，或變得很蒼白",
       "refs": [
        "nhs-anaphylaxis"
       ]
      },
      {
       "text": "壓了不會褪色的紅點或紫斑（用透明玻璃杯側面壓在皮膚上也看得到），特別是合併發燒、劇烈頭痛或脖子僵硬",
       "refs": [
        "nhs-meningitis",
        "mlp-rash"
       ]
      },
      {
       "text": "吃了新的藥物（或感染）之後，皮疹快速擴散到全身，或出現中間顏色深、外圈顏色淺的圓形疹子",
       "refs": [
        "nhs-sjs"
       ]
      },
      {
       "text": "皮膚起水泡、脫皮，或大範圍說不出原因的皮膚疼痛",
       "refs": [
        "nhs-sjs",
        "mayo-sjs"
       ]
      },
      {
       "text": "嘴巴、嘴唇、眼睛或生殖器出現破皮、水泡或疼痛",
       "refs": [
        "nhs-sjs",
        "mayo-sjs"
       ]
      },
      {
       "text": "紅腫的皮膚範圍快速擴大，或合併發燒",
       "refs": [
        "mayo-cellulitis"
       ]
      }
     ],
     "doNow": [
      {
       "text": "撥打 119，告訴人員你懷疑是嚴重過敏反應。不要自己開車去急診。",
       "refs": [
        "nhs-anaphylaxis",
        "nhs-sjs"
       ]
      },
      {
       "text": "嚴重過敏時先躺下，可以把腳抬高；如果呼吸困難，可以慢慢坐起來；懷孕的人向左側躺。即使覺得好轉，也不要站起來或走動。",
       "refs": [
        "nhs-anaphylaxis"
       ]
      },
      {
       "text": "醫師曾開立腎上腺素注射筆，立刻使用；即使症狀好轉，也要到急診。",
       "refs": [
        "mayo-anaphylaxis",
        "nhs-anaphylaxis"
       ]
      },
      {
       "text": "被蜜蜂等昆蟲螫到，如果針還留在皮膚上，試著把它移除。",
       "refs": [
        "nhs-anaphylaxis"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "最近開始吃新的藥物後出現皮疹：可以先停用這個新開始的藥，並在今天就醫、和醫師討論。原本長期在吃的藥，不要自己一起停。藥物過敏可能在用藥後幾小時、幾天甚至幾週才出現，請帶著藥袋就醫。",
       "refs": [
        "mohw-cbz",
        "nhs-sjs",
        "mayo-drug-allergy",
        "mlp-rash"
       ]
      },
      {
       "text": "會痛的紅疹和水泡，可能是帶狀疱疹（皮蛇）：常在身體一側先痛，幾天後出現一條帶狀的水泡。早期治療可以縮短病程、減少併發症，請儘快就醫。",
       "refs": [
        "mayo-shingles"
       ]
      },
      {
       "text": "皮疹合併發燒、覺得身體不舒服，或合併關節痛、喉嚨痛",
       "refs": [
        "nhs-hives",
        "mlp-rash"
       ]
      },
      {
       "text": "皮疹在擴散",
       "refs": [
        "nhs-hives"
       ]
      },
      {
       "text": "皮膚紅、腫、熱、痛，或出現紅色條紋（可能是感染）",
       "refs": [
        "mlp-rash",
        "mayo-cellulitis"
       ]
      },
      {
       "text": "眼睛周圍、臉頰腫起來，但沒有呼吸或吞嚥困難",
       "refs": [
        "nhs-hives",
        "mayo-hives"
       ]
      },
      {
       "text": "身體一側的疼痛水泡出現在眼睛附近（可能是帶狀疱疹）",
       "refs": [
        "mayo-shingles"
       ]
      },
      {
       "text": "蕁麻疹 2 天沒有改善、很嚴重，或一直反覆發作",
       "refs": [
        "nhs-hives",
        "mayo-hives"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "吃了某種食物之後出現過敏症狀，需要找出過敏原",
       "refs": [
        "mayo-food-allergy"
       ]
      },
      {
       "text": "蕁麻疹持續超過 6 週（慢性蕁麻疹）",
       "refs": [
        "mayo-hives",
        "mlp-hives"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫。拖延可能讓原本可以治療的問題變得危險：",
     "items": [
      {
       "text": "嚴重過敏反應發生得很快，可能在幾分鐘內危及生命。不要等症狀自己消退。",
       "refs": [
        "nhs-anaphylaxis",
        "mayo-anaphylaxis",
        "mayo-food-allergy"
       ]
      },
      {
       "text": "藥物引起的嚴重皮膚反應（史蒂文生氏-強生症候群）需要立即住院治療，可能造成皮膚感染、器官受損，甚至影響視力。",
       "refs": [
        "nhs-sjs"
       ]
      },
      {
       "text": "蜂窩性組織炎可能很快擴散，延誤治療可能進入血液，造成敗血症。",
       "refs": [
        "mayo-cellulitis"
       ]
      },
      {
       "text": "眼睛附近的帶狀疱疹沒有治療，可能造成永久的眼睛傷害。",
       "refs": [
        "mayo-shingles"
       ]
      },
      {
       "text": "帶狀疱疹早期治療可以縮短病程、減少併發症。最常見的併發症是水泡好了以後仍持續疼痛（帶狀疱疹後神經痛）。",
       "refs": [
        "mayo-shingles"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "皮疹什麼時候出現？有沒有擴散、變大或改變樣子？",
     "why": "快速擴散或變化的皮疹需要較快處理。"
    },
    {
     "q": "出現前有沒有吃新的藥物、新的食物，被蚊蟲叮咬，或接觸化學品、植物？",
     "why": "找出可能的過敏原或刺激物。"
    },
    {
     "q": "會癢還是會痛？有沒有水泡、脫皮？用透明玻璃杯壓會不會褪色？",
     "why": "疼痛、水泡、脫皮和壓不褪色是嚴重疾病的線索。"
    },
    {
     "q": "有沒有發燒、喘、嘴唇或喉嚨腫、頭暈？",
     "why": "這些代表可能是全身性的反應。"
    },
    {
     "q": "嘴巴、眼睛或生殖器有沒有破皮或疼痛？",
     "why": "黏膜受影響是嚴重藥物反應的警訊。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "嚴重過敏反應（過敏性休克）",
      "plain": "食物、藥物或昆蟲螫咬引起，常在幾分鐘內出現。",
      "refs": [
       "nhs-anaphylaxis",
       "mayo-anaphylaxis"
      ]
     },
     {
      "name": "史蒂文生氏-強生症候群",
      "plain": "常由藥物引起的嚴重皮膚反應：先像感冒，幾天後出現擴散的紅疹、水泡和脫皮。",
      "refs": [
       "nhs-sjs",
       "mayo-sjs"
      ]
     },
     {
      "name": "藥物疹合併全身症狀（DRESS）",
      "plain": "用藥後幾天到幾週出現皮疹、全身腫、淋巴結腫大等。",
      "refs": [
       "mayo-drug-allergy"
      ]
     },
     {
      "name": "腦膜炎、敗血症",
      "plain": "可能出現壓不褪色的紅點，很快變成紅紫色斑塊。",
      "refs": [
       "nhs-meningitis"
      ]
     },
     {
      "name": "蜂窩性組織炎",
      "plain": "細菌從皮膚破口進入，造成紅、腫、熱、痛，可能擴散。",
      "refs": [
       "mayo-cellulitis"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "蕁麻疹",
      "plain": "會癢、隆起的紅色膨疹，每一塊通常不到 24 小時就消退，但可能在別處再出現。",
      "refs": [
       "mayo-hives",
       "mlp-hives",
       "nhs-hives"
      ]
     },
     {
      "name": "接觸性皮膚炎",
      "plain": "皮膚碰到刺激物或過敏原，例如化妝品、清潔劑、植物。",
      "refs": [
       "mlp-rash"
      ]
     },
     {
      "name": "濕疹（異位性皮膚炎）",
      "plain": "紅、癢、脫屑，常見於有過敏或氣喘的人。",
      "refs": [
       "mlp-rash"
      ]
     },
     {
      "name": "帶狀疱疹（皮蛇）",
      "plain": "身體一側先痛，幾天後出現一條帶狀的水泡。",
      "refs": [
       "mayo-shingles",
       "mlp-rash"
      ]
     },
     {
      "name": "藥物過敏",
      "plain": "最常見的表現是蕁麻疹、皮疹和發燒。",
      "refs": [
       "mayo-drug-allergy"
      ]
     }
    ],
    "patternsHeading": "依皮疹的樣子",
    "patternsIntro": "皮疹的樣子只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即就醫。",
    "painPatterns": [
     {
      "pattern": "會痛的紅疹加水泡，在身體一側呈帶狀",
      "text": "可能是帶狀疱疹（皮蛇），請儘快就醫。",
      "refs": [
       "mayo-shingles"
      ]
     },
     {
      "pattern": "會癢、隆起、邊界清楚的膨疹，此起彼落",
      "text": "常見於蕁麻疹；每一塊通常不到 24 小時就消退。",
      "refs": [
       "mlp-hives",
       "mayo-hives"
      ]
     },
     {
      "pattern": "水泡、脫皮，加上嘴巴或眼睛破皮",
      "text": "可能是藥物引起的嚴重皮膚反應，請立即就醫。",
      "refs": [
       "nhs-sjs",
       "mayo-sjs"
      ]
     },
     {
      "pattern": "壓了不會褪色的紅點或紫斑",
      "text": "可能是腦膜炎或敗血症，請立即就醫。",
      "refs": [
       "nhs-meningitis"
      ]
     },
     {
      "pattern": "紅、腫、熱、痛，範圍在擴大",
      "text": "可能是蜂窩性組織炎，合併發燒或快速擴大時請立即就醫。",
      "refs": [
       "mayo-cellulitis"
      ]
     },
     {
      "pattern": "紅、癢、脫屑",
      "text": "常見於濕疹或接觸性皮膚炎。",
      "refs": [
       "mlp-rash"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "藥物引起的嚴重皮膚反應，可能在用藥期間，也可能在停藥後兩週內才出現。",
     "refs": [
      "mayo-sjs"
     ]
    },
    {
     "text": "50 歲以上或免疫力低下的人得到帶狀疱疹，發生併發症的風險較高。",
     "refs": [
      "mayo-shingles"
     ]
    },
    {
     "text": "常引起嚴重皮膚反應的藥物包括：痛風藥 allopurinol；抗癲癇藥 carbamazepine、phenytoin、phenobarbital、lamotrigine；磺胺類抗生素和 sulfasalazine；oxicam 類消炎止痛藥（例如 meloxicam、piroxicam）；抗愛滋病毒藥 nevirapine。開始使用這些藥物後，如果出現皮疹、嘴巴破或喉嚨痛，要特別警覺。",
     "refs": [
      "nhs-sjs",
      "mayo-sjs",
      "mohw-cbz"
     ]
    },
    {
     "text": "亞洲人較常帶有 HLA-B*1502 基因，帶有這個基因的人使用 carbamazepine，較容易發生史蒂文生氏-強生症候群。台灣健保自 2010 年 6 月起給付用藥前的 HLA-B*1502 基因檢測，結果會註記在健保卡的過敏藥物欄位。",
     "refs": [
      "mohw-cbz",
      "mohw-nhi-hla"
     ]
    },
    {
     "text": "曾經因為某種藥物發生史蒂文生氏-強生症候群的人，再次使用同一種藥物可能復發。",
     "refs": [
      "mayo-sjs",
      "nhs-sjs"
     ]
    }
   ],
   "visitPreparation": [
    "皮疹出現的時間和變化（可以每天拍照記錄）",
    "最近 2 週內新用的所有藥物，包括中藥、保健食品，以及停藥的日期；帶著藥袋",
    "發作前吃過的食物、接觸過的物品，或被叮咬的經過",
    "過去的藥物或食物過敏史",
    "其他症狀：發燒、喘、嘴巴或眼睛不舒服"
   ],
   "sources": [
    "nhs-anaphylaxis",
    "nhs-hives",
    "mlp-hives",
    "mlp-rash",
    "mayo-food-allergy",
    "nhs-meningitis",
    "nhs-sjs",
    "mayo-sjs",
    "mayo-cellulitis",
    "mayo-anaphylaxis",
    "mohw-cbz",
    "mayo-drug-allergy",
    "mayo-shingles",
    "mayo-hives",
    "mohw-nhi-hla"
   ]
  },
  {
   "slug": "burns",
   "title": "燒燙傷",
   "bodyArea": "skin",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "燒燙傷",
    "燙傷",
    "燒傷",
    "被燙到",
    "熱水燙到",
    "油燙到",
    "蒸氣燙傷",
    "電燒傷",
    "觸電"
   ],
   "summary": "所有燒燙傷都要立刻處理：用涼的流動清水沖 20 分鐘。面積很大或很深、在臉部、生殖器或屁股，或是化學品、電造成的，請立即到急診。",
   "definition": "燒傷通常是火、熨斗等乾熱造成，也可能是電或化學品；燙傷是熱液體或蒸氣造成。",
   "definitionRefs": [
    "nhs-burns"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "燒燙傷有下列任何一項，請立即就醫：",
     "items": [
      {
       "text": "面積很大或很深",
       "refs": [
        "nhs-burns"
       ]
      },
      {
       "text": "在臉部、生殖器或屁股",
       "refs": [
        "nhs-burns"
       ]
      },
      {
       "text": "酸、化學品或電造成的",
       "refs": [
        "nhs-burns"
       ]
      },
      {
       "text": "面積約手掌大或更大",
       "refs": [
        "mlp-burns"
       ]
      },
      {
       "text": "手、腳、臉、鼠蹊部、屁股或大關節的燒燙傷起水泡",
       "refs": [
        "mlp-burns"
       ]
      },
      {
       "text": "吸入濃煙",
       "refs": [
        "mlp-burns"
       ]
      },
      {
       "text": "出現休克的徵象",
       "refs": [
        "mlp-burns"
       ]
      }
     ],
     "doNow": [
      {
       "text": "儘快（受傷 3 小時內）用涼的流動清水沖 20 分鐘；沒有自來水時，可以用涼的瓶裝水或濕毛巾。",
       "refs": [
        "nhs-burns"
       ]
      },
      {
       "text": "拿掉傷口附近的衣物或飾品，但黏在傷口上的不要硬拉。",
       "refs": [
        "nhs-burns"
       ]
      },
      {
       "text": "沖完之後，可以用保鮮膜平鋪蓋在傷口上，不要纏繞。",
       "refs": [
        "nhs-burns"
       ]
      },
      {
       "text": "不要塗任何藥膏、油或奶油，不要用 OK 繃或有黏性的敷料，不要弄破水泡。",
       "refs": [
        "nhs-burns"
       ]
      },
      {
       "text": "化學品造成的：請看「中毒、誤食」頁的沖洗方式。",
       "refs": [
        "nhs-burns",
        "tsem-chem"
       ]
      },
      {
       "text": "不要自己開車去急診，請別人載或撥打 119；把正在吃的藥帶去。",
       "refs": [
        "nhs-burns"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "不確定該怎麼處理",
       "refs": [
        "nhs-burns"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "小面積的燒燙傷，而且沒有上方任何一項：可以到診所看診",
       "refs": [
        "nhs-burns"
       ]
      }
     ],
     "doNow": [
      {
       "text": "可以吃普拿疼（乙醯胺酚）或布洛芬止痛。",
       "refs": [
        "nhs-burns"
       ]
      },
      {
       "text": "癒合時變乾、變癢，可以請藥師推薦潤膚藥膏。",
       "refs": [
        "nhs-burns"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "嚴重、面積大或深的燒燙傷可能需要住院、打點滴，甚至手術。",
       "refs": [
        "nhs-burns"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "怎麼燒燙傷的？熱水、火、電、還是化學品？",
     "why": "電和化學品造成的傷害，可能比外表看起來嚴重。"
    },
    {
     "q": "面積多大？在身體哪裡？",
     "why": "面積大或在特殊部位需要急診處理。"
    },
    {
     "q": "有沒有立刻用涼水沖？沖了多久？",
     "why": "早期降溫可以減少傷害。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "大面積或深度燒燙傷",
      "plain": "",
      "refs": [
       "nhs-burns"
      ]
     },
     {
      "name": "電燒傷",
      "plain": "",
      "refs": [
       "nhs-burns"
      ]
     },
     {
      "name": "化學灼傷",
      "plain": "嚴重程度無法只從外觀判斷。",
      "refs": [
       "nhs-burns",
       "tsem-chem"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "小面積燙傷",
      "plain": "多半可以在家照顧，大約 2 週癒合。",
      "refs": [
       "nhs-burns"
      ]
     }
    ],
    "patternsHeading": "依燒燙傷的原因和部位",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "被電到、觸電",
      "text": "請立即到急診。",
      "refs": [
       "nhs-burns"
      ]
     },
     {
      "pattern": "化學品濺到皮膚",
      "text": "先用大量流動清水沖洗，並立即到急診。",
      "refs": [
       "nhs-burns",
       "tsem-chem"
      ]
     },
     {
      "pattern": "燙傷在臉部、生殖器或屁股",
      "text": "請立即到急診。",
      "refs": [
       "nhs-burns"
      ]
     },
     {
      "pattern": "小面積燙傷，沖完涼水後只有紅、痛",
      "text": "多半可以在家照顧；請到診所看診確認。",
      "refs": [
       "nhs-burns"
      ]
     }
    ]
   },
   "specialPopulations": [],
   "visitPreparation": [
    "燒燙傷的原因（熱水、火、電、化學品）和時間",
    "化學品的容器或名稱",
    "使用中的所有藥物"
   ],
   "sources": [
    "nhs-burns",
    "mlp-burns",
    "tsem-chem"
   ]
  },
  {
   "slug": "wounds-bites",
   "title": "割傷、擦傷、被動物咬傷",
   "bodyArea": "skin",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "割傷",
    "擦傷",
    "傷口",
    "流血不止",
    "被割到",
    "被刀割",
    "被玻璃割到",
    "被狗咬",
    "被貓咬",
    "被貓抓",
    "動物咬傷",
    "被人咬",
    "狂犬病",
    "鼬獾",
    "破傷風"
   ],
   "summary": "多數割傷擦傷可以自己止血、清洗、包紮。但血止不住、噴血、傷口很大很深、有東西插著、傷口附近麻或不能動，請立即到急診。被野生動物或流浪犬貓抓咬傷，請用肥皂和大量清水沖洗 15 分鐘，儘速就醫評估狂犬病。",
   "definition": "割傷和擦傷多半在幾天內開始癒合；但有感染風險或傷口嚴重時，需要醫護人員處理。",
   "definitionRefs": [
    "nhs-cuts"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "有下列任何一項，請立即就醫：",
     "items": [
      {
       "text": "血止不住",
       "refs": [
        "nhs-cuts",
        "nhs-bites"
       ]
      },
      {
       "text": "鮮紅色的血一陣一陣噴出來，很難控制",
       "refs": [
        "nhs-cuts"
       ]
      },
      {
       "text": "傷口附近失去感覺，或很難活動",
       "refs": [
        "nhs-cuts"
       ]
      },
      {
       "text": "臉部或手掌的嚴重割傷",
       "refs": [
        "nhs-cuts"
       ]
      },
      {
       "text": "傷口很大或很深",
       "refs": [
        "nhs-cuts",
        "nhs-bites"
       ]
      },
      {
       "text": "傷口裡有東西插著（例如玻璃碎片）——不要自己拔出來",
       "refs": [
        "nhs-cuts"
       ]
      },
      {
       "text": "手指、耳朵等身體部位被咬斷或切斷",
       "refs": [
        "nhs-bites"
       ]
      }
     ],
     "doNow": [
      {
       "text": "洗手後戴手套；傷口裡沒有東西時，用乾淨的布用力壓住傷口止血。",
       "refs": [
        "nhs-cuts"
       ]
      },
      {
       "text": "傷口裡有東西插著：不要拔，也不要壓在東西上，從兩側壓住傷口邊緣。",
       "refs": [
        "nhs-cuts"
       ]
      },
      {
       "text": "傷口在手或手臂，舉高超過頭；在腳，躺下並把腳抬高超過心臟。血滲出來就再加一層布繼續壓。",
       "refs": [
        "nhs-cuts"
       ]
      },
      {
       "text": "被切斷的部位：用乾淨的紙巾包好放進塑膠袋，袋子外面放冰塊，一起帶去醫院。",
       "refs": [
        "nhs-bites"
       ]
      },
      {
       "text": "不要自己開車去急診，請別人載或撥打 119；把正在吃的藥帶去。",
       "refs": [
        "nhs-cuts",
        "nhs-bites"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "被野生動物（例如鼬獾、蝙蝠）或流浪犬貓抓傷、咬傷",
       "refs": [
        "mohw-rabies",
        "nhs-cuts"
       ]
      },
      {
       "text": "被人咬傷",
       "refs": [
        "nhs-bites",
        "nhs-cuts"
       ]
      },
      {
       "text": "咬傷在手、腳、臉或頭",
       "refs": [
        "nhs-bites"
       ]
      },
      {
       "text": "傷口裡可能有牙齒、毛髮、泥土，或清洗後還是很髒",
       "refs": [
        "nhs-cuts",
        "nhs-bites"
       ]
      },
      {
       "text": "傷口紅、腫、熱、愈來愈痛，或流膿、有臭味",
       "refs": [
        "nhs-cuts",
        "nhs-bites"
       ]
      },
      {
       "text": "割傷大於約 5 公分",
       "refs": [
        "nhs-cuts"
       ]
      },
      {
       "text": "發燒、發冷發抖，或覺得全身不舒服",
       "refs": [
        "nhs-cuts",
        "nhs-bites"
       ]
      },
      {
       "text": "傷口髒（沾到泥土、口水或糞便）或被咬傷，而且超過 5 年沒有打破傷風疫苗，或不確定上次什麼時候打",
       "refs": [
        "cdc-tetanus"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "小的割傷擦傷，沒有上方任何一項：可以到診所看診",
       "refs": [
        "nhs-cuts"
       ]
      }
     ],
     "doNow": [
      {
       "text": "止血後，用自來水或瓶裝水沖洗傷口，拍乾，再用肥皂和水清洗傷口周圍的皮膚，最後蓋上乾淨的敷料或 OK 繃。",
       "refs": [
        "nhs-cuts"
       ]
      },
      {
       "text": "保持敷料乾淨乾燥，需要時更換。",
       "refs": [
        "nhs-cuts"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "狂犬病發病後致死率接近 100%；被動物抓咬傷後及時就醫並接受暴露後預防接種，可以降低發病的風險。",
       "refs": [
        "mohw-rabies"
       ]
      },
      {
       "text": "泥土進入傷口有破傷風的風險，破傷風可能危及生命。",
       "refs": [
        "nhs-tetanus"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "怎麼受傷的？被什麼割到或咬到？",
     "why": "動物和人的咬傷、髒的傷口感染風險比較高。"
    },
    {
     "q": "什麼時候受傷？血止住了嗎？",
     "why": "決定處理的急迫性。"
    },
    {
     "q": "上一次打破傷風疫苗是什麼時候？",
     "why": "可能需要補打破傷風疫苗。"
    },
    {
     "q": "被動物咬：是野生動物、流浪動物，還是家裡的寵物？寵物有沒有打狂犬病疫苗？",
     "why": "醫師會評估需不需要打狂犬病疫苗。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "大量出血",
      "plain": "",
      "refs": [
       "nhs-cuts"
      ]
     },
     {
      "name": "神經或肌腱受傷",
      "plain": "傷口附近麻或不能動。",
      "refs": [
       "nhs-cuts"
      ]
     },
     {
      "name": "狂犬病暴露",
      "plain": "被野生動物或流浪犬貓抓咬傷；台灣的狂犬病主要在鼬獾等野生動物。",
      "refs": [
       "mohw-rabies"
      ]
     },
     {
      "name": "破傷風",
      "plain": "",
      "refs": [
       "nhs-tetanus",
       "nhs-bites"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "傷口感染",
      "plain": "紅、腫、熱、痛、流膿。",
      "refs": [
       "nhs-cuts",
       "nhs-bites"
      ]
     }
    ],
    "patternsHeading": "依受傷的方式",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "被鼬獾、蝙蝠等野生動物，或流浪犬貓抓咬傷",
      "text": "請立刻用肥皂和大量清水沖洗傷口 15 分鐘，再用優碘或 70% 酒精消毒，儘速到「人用狂犬病疫苗接種服務醫院」就醫評估。不要接觸或捕捉野生動物。",
      "refs": [
       "mohw-rabies"
      ]
     },
     {
      "pattern": "被狗、貓或人咬破皮",
      "text": "用肥皂和溫水清洗，輕輕擠出一點血，蓋上乾淨的敷料；請今天就醫。",
      "refs": [
       "nhs-bites"
      ]
     },
     {
      "pattern": "傷口沾到泥土或很髒，或很久沒打破傷風疫苗",
      "text": "可能需要補打破傷風疫苗，請今天就醫。",
      "refs": [
       "nhs-tetanus",
       "nhs-bites"
      ]
     },
     {
      "pattern": "傷口幾天後紅、腫、熱、痛，或流膿",
      "text": "可能是傷口感染，請今天就醫。",
      "refs": [
       "nhs-cuts"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "每年帶家裡的犬、貓打狂犬病疫苗。",
     "refs": [
      "mohw-rabies"
     ]
    }
   ],
   "visitPreparation": [
    "受傷的時間和原因",
    "咬人的是哪一種動物、有沒有打疫苗、現在在哪裡",
    "上一次打破傷風疫苗的時間",
    "使用中的所有藥物"
   ],
   "sources": [
    "nhs-cuts",
    "nhs-bites",
    "mohw-rabies",
    "cdc-tetanus",
    "nhs-tetanus"
   ]
  },
  {
   "slug": "poisoning",
   "title": "中毒、誤食",
   "aliases": [
    "中毒",
    "誤食",
    "吃錯藥",
    "吃太多藥",
    "藥吃太多",
    "藥物過量",
    "服藥過量",
    "吞藥",
    "一氧化碳",
    "一氧化碳中毒",
    "燒炭",
    "誤喝",
    "喝到清潔劑",
    "喝農藥",
    "農藥中毒",
    "漂白水",
    "化學品",
    "吸入毒氣"
   ],
   "bodyArea": "whole-body",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。兒童誤食請直接撥打 119 或到急診。",
   "summary": "吞下、碰到或吸入藥物、清潔劑、農藥、化學品或一氧化碳，都可能中毒。中毒的症狀可能幾小時甚至幾天後才出現，所以懷疑中毒時不要等症狀出現，請立即就醫。",
   "definition": "中毒是指吞下、碰到或吸入有害的物質，例如化學品或藥物。",
   "definitionRefs": [
    "nhs-poisoning"
   ],
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-11",
   "nextReviewAt": "2027-11-11",
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "懷疑中毒時，不要等症狀出現。有下列任何一項，請立即撥打 119 或到急診：",
     "items": [
      {
       "text": "懷疑吞下、碰到或吸入有害的東西，例如藥物、清潔劑、漂白水、農藥、化學品、有毒的植物或菇類——即使現在沒有症狀",
       "refs": [
        "nhs-poisoning",
        "mlp-poisoning"
       ]
      },
      {
       "text": "故意或意外吃下過量的藥物（常常合併喝酒）",
       "refs": [
        "mayo-poisoning"
       ]
      },
      {
       "text": "叫不醒、沒有反應、停止呼吸，或呼吸很困難",
       "refs": [
        "nhs-poisoning",
        "mayo-poisoning"
       ]
      },
      {
       "text": "抽搐",
       "refs": [
        "nhs-poisoning",
        "mayo-poisoning"
       ]
      },
      {
       "text": "很想睡、意識混亂，或躁動到無法控制",
       "refs": [
        "mayo-poisoning"
       ]
      },
      {
       "text": "嘴巴或嘴唇周圍燒傷、發紅，或呼吸有汽油、化學品的味道",
       "refs": [
        "mayo-poisoning",
        "mlp-poisoning"
       ]
      },
      {
       "text": "在使用瓦斯熱水器、爐具、燒炭或發電機的空間裡，出現頭痛、頭暈、噁心、虛弱、喘或意識混亂（可能是一氧化碳中毒）",
       "refs": [
        "nhs-co",
        "cdc-co"
       ]
      },
      {
       "text": "被氫氟酸（化骨水）濺到——即使看起來沒有灼傷、還不太痛",
       "refs": [
        "tsem-chem"
       ]
      }
     ],
     "doNow": [
      {
       "text": "沒有反應而且沒有正常呼吸：撥打 119 並開始心肺復甦術（做法見「緊急狀況怎麼辦」頁）。",
       "refs": [
        "nhs-poisoning",
        "nfa-cpr"
       ]
      },
      {
       "text": "不要催吐，可能會嗆到。除非毒物諮詢中心或醫護人員指示，不要給患者吃喝任何東西，也不要用檸檬汁、醋等偏方中和。",
       "refs": [
        "nhs-poisoning",
        "mlp-poisoning"
       ]
      },
      {
       "text": "吸入毒氣：先通知別人，確定安全再把人移到空氣新鮮的地方、打開門窗；不要點火或使用打火機。",
       "refs": [
        "mlp-poisoning",
        "mayo-poisoning",
        "nhs-co"
       ]
      },
      {
       "text": "皮膚沾到化學品：戴手套脫掉沾到的衣物，用大量流動的清水（溫水）輕柔沖洗至少 15 到 20 分鐘，不要用高壓水柱；強鹼可能要沖更久。",
       "refs": [
        "mayo-poisoning",
        "tsem-chem"
       ]
      },
      {
       "text": "不要自己用醋、鹼水或其他藥品做酸鹼中和，中和時產生的熱可能讓灼傷更嚴重。帶著化學品的容器或名稱去醫院。",
       "refs": [
        "tsem-chem"
       ]
      },
      {
       "text": "眼睛沾到：用冷水或溫水輕輕沖洗 20 分鐘，或沖到救護人員到達。",
       "refs": [
        "mayo-poisoning"
       ]
      },
      {
       "text": "把藥罐、包裝或容器（含標籤）帶去醫院；患者吐了，可以把嘔吐物裝起來一起帶去。",
       "refs": [
        "nhs-poisoning",
        "mlp-poisoning"
       ]
      },
      {
       "text": "不要自己開車去急診，請別人載你或撥打 119。",
       "refs": [
        "nhs-poisoning"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "不確定吃到、碰到或吸入的東西有沒有害——可以先撥打臺北榮總毒藥物防治諮詢中心 02-2871-7121（24 小時，或 02-2875-7525 轉 85500）詢問，或立即到急診；不要等症狀出現",
       "refs": [
        "nhs-poisoning",
        "mlp-poisoning",
        "vgh-tox"
       ]
      },
      {
       "text": "在某個房間或建築物裡反覆頭痛、頭暈、噁心，離開或到戶外後就好一些（先停用可能漏氣的熱水器、爐具，不要再回到那個空間）",
       "refs": [
        "nhs-co"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": []
    },
    "observe": null,
    "observeOmittedReason": "中毒的症狀可能延遲出現，本頁不提供在家觀察。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "中毒的症狀可能幾小時甚至幾天後才出現，現在沒有症狀不代表沒事。",
       "refs": [
        "nhs-poisoning",
        "mlp-poisoning"
       ]
      },
      {
       "text": "沒有症狀的人，到醫院後可能仍需要觀察幾個小時。",
       "refs": [
        "nhs-poisoning"
       ]
      },
      {
       "text": "一氧化碳沒有顏色也沒有味道；睡著或喝醉的人可能在出現症狀之前就死亡。",
       "refs": [
        "nhs-co",
        "cdc-co"
       ]
      },
      {
       "text": "會灼傷喉嚨的毒物，催吐吐出來時會再灼傷一次。",
       "refs": [
        "mlp-poisoning"
       ]
      },
      {
       "text": "強鹼灼傷的疼痛常常延遲出現，灼傷往往比外表看起來更深；化學灼傷的嚴重程度無法只從外觀判斷。",
       "refs": [
        "tsem-chem"
       ]
      },
      {
       "text": "氫氟酸（化骨水）濺到皮膚，初期可能只有發紅、灰白或疼痛，但吸收後可能造成低血鈣和致命的心律不整。",
       "refs": [
        "tsem-chem"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "吃到、碰到或吸入的是什麼？有沒有包裝或容器？",
     "why": "知道是什麼東西，醫師才能選擇正確的處理方式。"
    },
    {
     "q": "大概多少量？什麼時候發生的？",
     "why": "量和時間會影響需要的檢查、治療和觀察時間。"
    },
    {
     "q": "是吞下、皮膚或眼睛沾到，還是吸入？",
     "why": "不同的接觸方式，處理方式不同。"
    },
    {
     "q": "有沒有同時喝酒，或吃了其他藥物？",
     "why": "多種物質混在一起，危險性可能更高。"
    },
    {
     "q": "是意外，還是想不開？",
     "why": "醫師需要知道，才能提供完整的照顧與協助。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "藥物過量",
      "plain": "例如止痛藥（普拿疼、布洛芬）、抗憂鬱藥。",
      "refs": [
       "nhs-poisoning",
       "mlp-poisoning"
      ]
     },
     {
      "name": "一氧化碳中毒",
      "plain": "熱水器、爐具、燒炭、發電機在不通風的地方使用。",
      "refs": [
       "nhs-co",
       "cdc-co"
      ]
     },
     {
      "name": "農藥",
      "plain": "殺蟲劑等農藥。",
      "refs": [
       "nhs-poisoning",
       "mlp-poisoning"
      ]
     },
     {
      "name": "清潔劑、漂白水等化學品",
      "plain": "家用清潔劑、洗衣精、工作場所的化學品。",
      "refs": [
       "nhs-poisoning",
       "mlp-poisoning"
      ]
     },
     {
      "name": "酒精和毒品",
      "plain": "常和藥物一起造成中毒。",
      "refs": [
       "nhs-poisoning",
       "mlp-poisoning",
       "mayo-poisoning"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "有毒的植物或菇類",
      "plain": "誤食野外採的植物或菇類。",
      "refs": [
       "nhs-poisoning",
       "mlp-poisoning"
      ]
     },
     {
      "name": "食物中毒",
      "plain": "食物沒有正確準備或保存造成，通常不嚴重、一週內會好；但有本頁上方任何一項，仍要立即就醫。",
      "refs": [
       "nhs-poisoning"
      ]
     }
    ],
    "patternsHeading": "依現場的線索",
    "patternsIntro": "這些線索不能用來自己判斷，懷疑中毒時請立即就醫。中毒的症狀也可能像中風、酒醉或低血糖。",
    "painPatterns": [
     {
      "pattern": "旁邊有空的藥罐、藥袋，或散落的藥丸",
      "text": "可能吃下過量的藥物，請撥打 119，並把藥罐帶去醫院。",
      "refs": [
       "mayo-poisoning"
      ]
     },
     {
      "pattern": "嘴巴周圍燒傷、發紅，呼吸有汽油或化學品的味道",
      "text": "可能吞下化學品，請撥打 119；不要催吐。",
      "refs": [
       "mayo-poisoning",
       "mlp-poisoning"
      ]
     },
     {
      "pattern": "在某個房間裡頭痛、頭暈、噁心，離開或到戶外後好一些",
      "text": "可能是一氧化碳中毒，請離開那個空間並就醫。",
      "refs": [
       "nhs-co"
      ]
     },
     {
      "pattern": "突然生病說不出原因，被發現時在熱水器、汽車、火災現場或不通風的地方",
      "text": "要考慮中毒，請撥打 119。",
      "refs": [
       "mlp-poisoning"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "如果是想不開而服藥，除了撥打 119，也可以撥打 1925 安心專線。",
     "refs": [
      "mohw-1925"
     ]
    },
    {
     "text": "嬰幼兒、年長者，以及有心臟病、貧血或呼吸問題的人，更容易因一氧化碳而生病。",
     "refs": [
      "cdc-co"
     ]
    }
   ],
   "visitPreparation": [
    "吃到、碰到或吸入的東西，以及它的藥罐、包裝或容器（含標籤）",
    "大概的量和發生的時間",
    "目前出現的症狀",
    "平常使用的所有藥物",
    "患者的年齡和大約體重"
   ],
   "sources": [
    "nhs-poisoning",
    "mlp-poisoning",
    "mayo-poisoning",
    "nhs-co",
    "cdc-co",
    "tsem-chem",
    "nfa-cpr",
    "vgh-tox",
    "mohw-1925"
   ],
   "links": [
    {
     "label": "臺北榮總毒藥物防治諮詢中心",
     "url": "https://vghtpehh.vghtpe.gov.tw/0002251.html",
     "note": "24 小時諮詢：02-2871-7121，或 02-2875-7525 轉 85500"
    },
    {
     "label": "臨床毒物學精要",
     "url": "https://ck5227.github.io/toxicology/",
     "note": "中毒症候群、解毒劑與臨床處置，給醫護人員參考"
    }
   ]
  },
  {
   "slug": "snake-bee",
   "title": "被蛇咬、被蜂螫",
   "bodyArea": "whole-body",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "被蛇咬",
    "蛇咬",
    "蛇咬傷",
    "毒蛇咬傷",
    "被毒蛇咬",
    "龜殼花",
    "青竹絲",
    "赤尾青竹絲",
    "雨傘節",
    "眼鏡蛇",
    "百步蛇",
    "鎖鏈蛇",
    "抗蛇毒血清",
    "被蜂螫",
    "蜂螫",
    "被蜂叮",
    "被蜜蜂叮",
    "虎頭蜂",
    "被虎頭蜂叮",
    "胡蜂"
   ],
   "summary": "被蛇咬請一律當成毒蛇咬傷，立即就醫；最好的治療是儘早打足夠的抗蛇毒血清。被蜂螫大多只有局部紅腫，但出現喘、嘴唇喉嚨腫、嘔吐肚子痛、頭暈昏倒，或被虎頭蜂螫很多下，請立即撥打 119。",
   "definition": "台灣醫療上重要的毒蛇有龜殼花、赤尾青竹絲、百步蛇、鎖鏈蛇、眼鏡蛇和雨傘節；其中龜殼花和青竹絲咬傷最常見。蜂螫要分是蜜蜂，還是虎頭蜂等胡蜂：胡蜂可以連續攻擊。",
   "definitionRefs": [
    "tsem-snake",
    "mohw-snake"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "有下列任何一項，請立即就醫：",
     "items": [
      {
       "text": "被蛇咬——不論是不是毒蛇、現在有沒有症狀，都當成毒蛇咬傷處理",
       "refs": [
        "mohw-snake",
        "tsem-snake"
       ]
      },
      {
       "text": "被蜂螫後，嘴唇、嘴巴、喉嚨或舌頭腫起來",
       "refs": [
        "nhs-stings"
       ]
      },
      {
       "text": "呼吸很快、很喘、有喘鳴聲，或吞嚥困難",
       "refs": [
        "nhs-stings",
        "tsem-snake"
       ]
      },
      {
       "text": "嘔吐、肚子痛",
       "refs": [
        "tsem-snake",
        "nhs-stings"
       ]
      },
      {
       "text": "胸痛、心跳不規則、頭暈、快昏倒或昏倒",
       "refs": [
        "tsem-snake",
        "nhs-stings"
       ]
      },
      {
       "text": "皮膚、嘴唇或舌頭發青、蒼白，或意識混亂",
       "refs": [
        "nhs-stings"
       ]
      },
      {
       "text": "症狀很快變嚴重",
       "refs": [
        "tsem-snake"
       ]
      },
      {
       "text": "被虎頭蜂等胡蜂螫，或被螫很多下",
       "refs": [
        "tsem-snake",
        "nhs-stings"
       ]
      }
     ],
     "doNow": [
      {
       "text": "被蛇咬：保持冷靜，儘速就醫。記下蛇的外觀特徵；拿掉戒指、手環等飾品，避免肢體腫起來。",
       "refs": [
        "mohw-snake"
       ]
      },
      {
       "text": "被蛇咬：不要割開傷口、不要用嘴吸毒液、不要冰敷、不要喝酒或刺激性飲料，不要延誤就醫。",
       "refs": [
        "mohw-snake"
       ]
      },
      {
       "text": "被蜂螫：用指甲或卡片邊緣把螫針橫向刮掉，不要用夾子夾；再用肥皂和水清洗。",
       "refs": [
        "nhs-stings",
        "tsem-snake"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "被蜂螫在嘴巴、喉嚨或眼睛附近",
       "refs": [
        "nhs-stings"
       ]
      },
      {
       "text": "以前被蟲螫有過嚴重的過敏反應",
       "refs": [
        "nhs-stings"
       ]
      },
      {
       "text": "發燒、淋巴結腫，或症狀愈來愈嚴重、一直沒有改善",
       "refs": [
        "nhs-stings"
       ]
      },
      {
       "text": "被螫後 5 天到 2 週，出現發燒、虛弱、淋巴結腫或多處關節痛（延遲反應）",
       "refs": [
        "tsem-snake"
       ]
      },
      {
       "text": "螫傷中央出現白色、像壞死的區域",
       "refs": [
        "tsem-snake"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "被蜜蜂螫，只有局部紅、腫、癢、痛，而且沒有上方任何一項：可以到診所看診",
       "refs": [
        "tsem-snake",
        "nhs-stings"
       ]
      },
      {
       "text": "傷口紅、熱、腫痛或流膿（可能感染）",
       "refs": [
        "nhs-stings",
        "tsem-snake"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "被蛇咬不提供在家觀察。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "毒蛇咬傷嚴重時可能造成呼吸障礙、瀰漫性出血、敗血症、腎衰竭、截肢，甚至死亡；及早使用抗蛇毒血清可以有效中止或逆轉毒性。",
       "refs": [
        "mohw-snake"
       ]
      },
      {
       "text": "雨傘節咬傷的呼吸抑制，通常在咬傷後 1.5 到 6 小時才出現。",
       "refs": [
        "tsem-snake"
       ]
      },
      {
       "text": "被蜂螫的部位愈多，預後可能愈差。",
       "refs": [
        "tsem-snake"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "被什麼咬或螫？記得蛇的樣子嗎？有沒有照片？",
     "why": "辨認蛇種，才能選擇正確的抗蛇毒血清。"
    },
    {
     "q": "什麼時間被咬或被螫？",
     "why": "有些症狀會延遲出現。"
    },
    {
     "q": "被螫了幾下？是蜜蜂還是虎頭蜂？",
     "why": "虎頭蜂可以連續攻擊，被螫愈多處愈危險。"
    },
    {
     "q": "以前被蜂螫有沒有嚴重過敏？",
     "why": "過敏體質的人可能很快出現嚴重反應。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "毒蛇咬傷",
      "plain": "最好的治療是儘早使用足夠的抗蛇毒血清。",
      "refs": [
       "tsem-snake",
       "mohw-snake"
      ]
     },
     {
      "name": "嚴重過敏反應",
      "plain": "被蜂螫後嘴唇喉嚨腫、喘、頭暈昏倒。",
      "refs": [
       "nhs-stings",
       "tsem-snake"
      ]
     },
     {
      "name": "大量蜂螫的全身中毒",
      "plain": "可能造成橫紋肌溶解、急性腎衰竭、心律不整、休克。",
      "refs": [
       "tsem-snake"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "蜜蜂螫傷的局部反應",
      "plain": "紅腫通常維持幾天，會自己慢慢好。",
      "refs": [
       "tsem-snake"
      ]
     },
     {
      "name": "傷口感染",
      "plain": "",
      "refs": [
       "tsem-snake",
       "nhs-stings"
      ]
     }
    ],
    "patternsHeading": "依傷口和症狀（台灣常見的蛇種）",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。辨認蛇種要由醫師判斷，請不要為了確認蛇種延誤就醫。",
    "painPatterns": [
     {
      "pattern": "傷口腫脹、瘀青、疼痛",
      "text": "常見於龜殼花或赤尾青竹絲咬傷（全台平地到低海拔山區都有，是最常見的毒蛇咬傷），請立即到急診。",
      "refs": [
       "tsem-snake",
       "mohw-snake"
      ]
     },
     {
      "pattern": "傷口有清楚的牙痕，很快大範圍腫脹、起血泡",
      "text": "可能是百步蛇咬傷，請立即撥打 119。",
      "refs": [
       "tsem-snake"
      ]
     },
     {
      "pattern": "傷口不太腫，但身體其他地方出血",
      "text": "可能是鎖鏈蛇咬傷（分布在東部和南部），請立即撥打 119。",
      "refs": [
       "tsem-snake"
      ]
     },
     {
      "pattern": "傷口潰爛",
      "text": "常見於眼鏡蛇咬傷，請立即到急診。",
      "refs": [
       "tsem-snake"
      ]
     },
     {
      "pattern": "被蛇咬後幾小時出現呼吸困難",
      "text": "可能是雨傘節等神經毒性的咬傷，請立即撥打 119。",
      "refs": [
       "tsem-snake"
      ]
     },
     {
      "pattern": "被虎頭蜂追、被螫很多下",
      "text": "虎頭蜂可以連續攻擊，被螫處愈多愈危險，請立即撥打 119。",
      "refs": [
       "tsem-snake"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "到野外或山區：穿長袖衣物和包鞋；進入草叢先打草驚蛇；不要翻動中空林木或石塊；避免在夜間、日出和雨後停留。",
     "refs": [
      "mohw-snake"
     ]
    },
    {
     "text": "在山林活動：穿淺色長袖衣物和運動鞋，不要擦有香味的化妝品，避開蜂群活動的地方。",
     "refs": [
      "tsem-snake"
     ]
    }
   ],
   "visitPreparation": [
    "被咬或被螫的時間",
    "蛇的外觀特徵或照片",
    "被螫了幾下、是蜜蜂還是虎頭蜂",
    "過敏史、使用中的所有藥物"
   ],
   "links": [
    {
     "label": "疾管署抗蛇毒血清儲備點查詢",
     "url": "https://gov.tw/yPR",
     "note": "查詢附近儲備抗蛇毒血清的醫院"
    }
   ],
   "sources": [
    "tsem-snake",
    "mohw-snake",
    "nhs-stings"
   ]
  },
  {
   "slug": "marine-injury",
   "title": "被水母螫、魚刺或海膽刺傷（海洋生物）",
   "bodyArea": "whole-body",
   "audience": [
    "adult"
   ],
   "audienceNote": "適用 18 歲以上成人。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "水母",
    "被水母螫",
    "水母螫傷",
    "僧帽水母",
    "箱水母",
    "海膽",
    "被海膽刺",
    "海星",
    "魚刺刺傷",
    "被魚刺刺到",
    "魟魚",
    "獅子魚",
    "海蛇",
    "被海蛇咬",
    "珊瑚割傷",
    "海邊受傷",
    "弧菌",
    "殺魚割傷"
   ],
   "summary": "在台灣海邊常見的傷害有水母螫傷、魚刺或海膽刺傷，以及海蛇咬傷。多數只有局部疼痛，但呼吸困難、全身劇痛、昏倒，或被海蛇咬（即使不痛），請立即撥打 119。海洋相關的傷口容易感染，請注意紅腫和發燒。",
   "definition": "水母、珊瑚以刺細胞螫傷；海膽、海星、魟魚、獅子魚以刺刺傷；海蛇以咬傷造成傷害。",
   "definitionRefs": [
    "tsem-marine"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "有下列任何一項，請立即就醫：",
     "items": [
      {
       "text": "呼吸困難、全身劇痛、昏倒或休克",
       "refs": [
        "tsem-marine"
       ]
      },
      {
       "text": "被海蛇咬——即使不痛",
       "refs": [
        "tsem-marine"
       ]
      },
      {
       "text": "被魟魚刺傷",
       "refs": [
        "tsem-marine"
       ]
      },
      {
       "text": "全身痙攣或無力",
       "refs": [
        "tsem-marine"
       ]
      },
      {
       "text": "刺傷很深、刺進關節或肚子",
       "refs": [
        "tsem-marine"
       ]
      },
      {
       "text": "傷口紅腫愈來愈嚴重或發燒，特別是有慢性病或免疫力差的人",
       "refs": [
        "tsem-marine"
       ]
      }
     ],
     "doNow": [
      {
       "text": "水母螫傷：不要搓揉傷口，立即用海水沖洗；看得到的觸手，用卡片或膠帶移除。",
       "refs": [
        "tsem-marine"
       ]
      },
      {
       "text": "不確定是不是箱水母時，不要用醋，可能讓其他水母的螫傷更嚴重。",
       "refs": [
        "tsem-marine"
       ]
      },
      {
       "text": "魚刺、海膽、魟魚、獅子魚刺傷：泡溫水（乾淨的溫水或海水，約 43 到 45°C），直到疼痛緩解；小心燙傷。",
       "refs": [
        "tsem-marine"
       ]
      },
      {
       "text": "沖洗傷口用海水或大量溫水，不要冰敷。",
       "refs": [
        "tsem-marine"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "刺斷在皮膚裡",
       "refs": [
        "tsem-marine"
       ]
      },
      {
       "text": "碰過海水的傷口（例如被珊瑚割傷、殺魚時割傷）紅腫",
       "refs": [
        "tsem-marine"
       ]
      },
      {
       "text": "被獅子魚等有毒的魚刺傷，疼痛擴散、起水泡或麻",
       "refs": [
        "tsem-marine"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "被一般的水母螫，只有灼熱刺痛，而且沒有上方任何一項：可以到診所看診",
       "refs": [
        "tsem-marine"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "海洋相關的傷口都應視為已感染；海水中的弧菌可能造成嚴重的傷口感染和敗血症，有慢性病或免疫力差的人要特別注意。",
       "refs": [
        "tsem-marine"
       ]
      },
      {
       "text": "海蛇咬傷剛開始常常不痛而被忽略，30 分鐘到 4 小時內可能出現劇痛和無力；沒有治療的重症個案死亡率很高。",
       "refs": [
        "tsem-marine"
       ]
      },
      {
       "text": "有毒的魚即使死了很久，刺仍然有毒。",
       "refs": [
        "tsem-marine"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "被什麼螫、刺或咬？在海水還是淡水？",
     "why": "不同的生物和水域，處理方式和感染的細菌不同。"
    },
    {
     "q": "多久以前？刺有沒有留在傷口裡？",
     "why": "殘留的刺需要移除。"
    },
    {
     "q": "有沒有喘、全身痛、無力或痙攣？",
     "why": "這些是全身中毒的徵象。"
    },
    {
     "q": "有沒有慢性病或免疫力差？",
     "why": "弧菌感染在這些人比較危險。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "僧帽水母或箱水母螫傷",
      "plain": "可能引起呼吸困難、休克，甚至死亡。",
      "refs": [
       "tsem-marine"
      ]
     },
     {
      "name": "海蛇咬傷",
      "plain": "神經毒和肌肉毒，可能造成無力、橫紋肌溶解、腎衰竭。",
      "refs": [
       "tsem-marine"
      ]
     },
     {
      "name": "魟魚刺傷",
      "plain": "劇烈疼痛，之後可能痙攣、呼吸困難。",
      "refs": [
       "tsem-marine"
      ]
     },
     {
      "name": "弧菌感染",
      "plain": "嚴重的傷口感染和敗血症。",
      "refs": [
       "tsem-marine"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "一般水母螫傷",
      "plain": "台灣沿海最常見，多半只有急性疼痛和灼熱感。",
      "refs": [
       "tsem-marine"
      ]
     },
     {
      "name": "海膽、海星刺傷",
      "plain": "多半是局部疼痛和紅腫。",
      "refs": [
       "tsem-marine"
      ]
     },
     {
      "name": "珊瑚割傷",
      "plain": "皮膚撕裂傷和局部紅腫。",
      "refs": [
       "tsem-marine"
      ]
     },
     {
      "name": "獅子魚刺傷",
      "plain": "立即疼痛，可能擴散到四肢，傷口周圍起水泡、麻。",
      "refs": [
       "tsem-marine"
      ]
     }
    ],
    "patternsHeading": "依傷口和症狀",
    "patternsIntro": "這些只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "被水母螫後劇烈疼痛、明顯的紅色鞭痕",
      "text": "可能是僧帽水母，請就醫；出現呼吸困難或休克，請撥打 119。",
      "refs": [
       "tsem-marine"
      ]
     },
     {
      "pattern": "被水母螫後 20 到 30 分鐘，全身劇烈疼痛",
      "text": "可能是箱水母，請立即撥打 119。",
      "refs": [
       "tsem-marine"
      ]
     },
     {
      "pattern": "被海蛇咬，當下不痛，之後出現劇痛、無力或嘴巴張不開",
      "text": "可能是海蛇毒，請立即撥打 119。",
      "refs": [
       "tsem-marine"
      ]
     },
     {
      "pattern": "被魚刺刺傷後立即疼痛、往四肢擴散，傷口周圍起水泡、麻",
      "text": "可能是獅子魚等有毒的魚，請泡溫水（小心燙傷）並今天就醫。",
      "refs": [
       "tsem-marine"
      ]
     },
     {
      "pattern": "被海膽刺傷在關節",
      "text": "可能引起嚴重的關節發炎，需要手術，請立即就醫。",
      "refs": [
       "tsem-marine"
      ]
     }
    ]
   },
   "specialPopulations": [
    {
     "text": "有慢性病或免疫力差的人，海洋相關的傷口要特別注意弧菌感染。",
     "refs": [
      "tsem-marine"
     ]
    }
   ],
   "visitPreparation": [
    "被什麼生物螫、刺或咬（可以拍照）",
    "受傷的時間和地點（海水或淡水）",
    "有沒有刺留在傷口裡",
    "慢性病、使用中的藥物、破傷風疫苗接種情形"
   ],
   "sources": [
    "tsem-marine"
   ]
  },
  {
   "slug": "suicidal-thoughts",
   "title": "想自殺、想傷害自己（心理危機）",
   "bodyArea": "whole-body",
   "audience": [
    "adult"
   ],
   "audienceNote": "你不是一個人。不論是你自己，還是擔心身邊的人，都可以尋求幫助。",
   "status": "published",
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-17",
   "nextReviewAt": "2027-11-17",
   "aliases": [
    "想自殺",
    "自殺",
    "想死",
    "不想活",
    "想傷害自己",
    "自殘",
    "割腕",
    "活不下去",
    "撐不下去",
    "心理危機",
    "輕生",
    "安心專線",
    "1925"
   ],
   "summary": "如果你有想結束生命的念頭，請告訴別人，現在就可以得到幫助。已經傷害自己、吃了過量的藥，或覺得快要傷害自己，請立即撥打 119。想找人談，可以撥打 1925 安心專線（24 小時免付費）。",
   "definition": "心理的緊急狀況和身體的緊急狀況一樣重要；尋求幫助不是在浪費別人的時間。",
   "definitionRefs": [
    "nhs-mh-crisis"
   ],
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "有下列任何一項，請立即撥打 119，或請別人帶你到急診：",
     "items": [
      {
       "text": "已經嚴重傷害自己，例如吃了過量的藥",
       "refs": [
        "nhs-suicidal",
        "nhs-mh-crisis"
       ]
      },
      {
       "text": "覺得自己快要傷害自己",
       "refs": [
        "nhs-suicidal"
       ]
      },
      {
       "text": "覺得沒有辦法保護自己或別人的安全",
       "refs": [
        "nhs-mh-crisis"
       ]
      }
     ],
     "doNow": [
      {
       "text": "吃了過量的藥：也請看「中毒、誤食」頁，把藥袋或藥罐帶去醫院。",
       "refs": [
        "nhs-suicidal",
        "mohw-1925"
       ]
      },
      {
       "text": "不要自己開車去急診，請別人載或撥打 119。",
       "refs": [
        "nhs-mh-crisis"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "現在就找人談",
     "intro": "有想結束生命的念頭，但還沒有行動：",
     "items": [
      {
       "text": "撥打 1925 安心專線（24 小時免付費）。",
       "refs": [
        "mohw-1925",
        "nhs-suicidal"
       ]
      },
      {
       "text": "告訴你信任的家人或朋友，他們可以陪你、幫助你保持安全。",
       "refs": [
        "nhs-suicidal"
       ]
      },
      {
       "text": "儘快就醫；如果正在看身心科，聯絡你的醫療團隊。",
       "refs": [
        "nhs-suicidal"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": []
    },
    "observe": null,
    "observeOmittedReason": "心理危機不提供在家觀察，請找人陪你並尋求幫助。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "心理的緊急狀況和身體的緊急狀況一樣重要，請不要覺得求助是在浪費別人的時間。",
       "refs": [
        "nhs-mh-crisis"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "你現在安全嗎？有沒有已經傷害自己或吃了藥？",
     "why": "已經傷害自己需要立即處理。"
    },
    {
     "q": "身邊有沒有可以陪你的人？",
     "why": "有人陪伴可以幫助你保持安全。"
    },
    {
     "q": "有沒有正在看身心科、吃什麼藥？",
     "why": "幫助醫療人員了解你的狀況。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "服藥過量或中毒",
      "plain": "",
      "refs": [
       "nhs-suicidal"
      ]
     },
     {
      "name": "自我傷害",
      "plain": "",
      "refs": [
       "nhs-suicidal"
      ]
     }
    ],
    "otherCommon": [],
    "patternsHeading": "依現在的狀況",
    "patternsIntro": "這些不是診斷。不論是哪一種狀況，你都不需要一個人面對；有立即危險時，請撥打 119。",
    "painPatterns": [
     {
      "pattern": "已經傷害自己，或吃了過量的藥",
      "text": "請立即撥打 119，或請別人帶你到急診。",
      "refs": [
       "nhs-suicidal"
      ]
     },
     {
      "pattern": "覺得沒有辦法保護自己或別人的安全",
      "text": "請立即撥打 119 或到急診。",
      "refs": [
       "nhs-mh-crisis"
      ]
     },
     {
      "pattern": "覺得撐不下去、想結束生命，但還沒有行動",
      "text": "請撥打 1925 安心專線（24 小時），告訴信任的人，並儘快就醫。",
      "refs": [
       "mohw-1925",
       "nhs-suicidal"
      ]
     },
     {
      "pattern": "擔心身邊的人想自殺",
      "text": "陪在他身邊；他有立即危險時，請撥打 119。",
      "refs": [
       "nhs-suicidal"
      ]
     }
    ]
   },
   "specialPopulations": [],
   "visitPreparation": [
    "正在吃的所有藥物",
    "可以陪你的人"
   ],
   "sources": [
    "nhs-mh-crisis",
    "nhs-suicidal",
    "mohw-1925"
   ]
  },
  {
   "slug": "child-fever",
   "title": "兒童發燒",
   "aliases": [
    "小孩發燒",
    "寶寶發燒",
    "嬰兒發燒",
    "幼兒發燒",
    "小朋友發燒",
    "孩子發燒",
    "小孩燒不退",
    "寶寶燒不退",
    "熱痙攣",
    "熱性痙攣",
    "發燒抽筋",
    "小孩發燒抽筋",
    "小孩高燒"
   ],
   "bodyArea": "child",
   "audience": [
    "child"
   ],
   "audienceNote": "適用嬰兒與兒童。青少年可以參考成人的「發燒」頁。",
   "summary": "發燒在幼兒很常見，多數 1 到 4 天會退。嬰兒年紀愈小，發燒愈需要小心；孩子如果叫不醒、呼吸困難、抽搐或出現壓了不會褪色的疹子，請立即撥打 119。",
   "definition": "兒童體溫達 38°C 以上就算發燒。可以用電子體溫計量腋溫；剛洗完澡或包得很緊時體溫會暫時偏高，等幾分鐘再量一次。",
   "definitionRefs": [
    "nhs-fever-child"
   ],
   "status": "published",
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "孩子發燒，加上下列任何一項，請立即就醫。孩子叫不醒、呼吸困難或正在抽搐時，請撥打 119：",
     "items": [
      {
       "text": "未滿 3 個月的嬰兒，體溫 38°C 以上",
       "refs": [
        "nhs-baby-ill",
        "aap-fever"
       ]
      },
      {
       "text": "3 到 6 個月的嬰兒，體溫 39°C 以上",
       "refs": [
        "nhs-baby-ill"
       ]
      },
      {
       "text": "很想睡、叫不太醒、全身軟趴趴，或對你沒有平常的反應",
       "refs": [
        "nhs-fever-child",
        "nhs-baby-ill"
       ]
      },
      {
       "text": "呼吸困難：呼吸很快、發出呻吟聲，或吸氣時肚子、肋骨下方凹陷",
       "refs": [
        "nhs-fever-child",
        "nhs-baby-ill"
       ]
      },
      {
       "text": "皮膚、嘴唇或舌頭發青、發灰、比平常蒼白，或出現花斑",
       "refs": [
        "nhs-fever-child",
        "nhs-baby-ill"
       ]
      },
      {
       "text": "出現壓了不會褪色的紅、紫或咖啡色斑點",
       "refs": [
        "nhs-fever-child",
        "nhs-baby-ill"
       ]
      },
      {
       "text": "脖子僵硬，或很怕光",
       "refs": [
        "nhs-fever-child",
        "nhs-baby-ill"
       ]
      },
      {
       "text": "抽搐（第一次發生；超過 5 分鐘；24 小時內抽不只一次；只有一側身體抽動；或抽完超過 1 小時仍比平常想睡）",
       "refs": [
        "nhs-febrile"
       ]
      },
      {
       "text": "手腳異常冰冷，或皮膚摸起來濕冷",
       "refs": [
        "nhs-fever-child",
        "nhs-baby-ill"
       ]
      },
      {
       "text": "一直哭鬧安撫不了、意識混亂，或哭聲微弱、尖銳、停不下來",
       "refs": [
        "nhs-fever-child",
        "nhs-baby-ill"
       ]
      },
      {
       "text": "超過 12 小時沒有尿，或尿布都是乾的",
       "refs": [
        "nhs-baby-ill"
       ]
      },
      {
       "text": "嘴唇、舌頭或喉嚨腫起來，吞嚥或說話有困難",
       "refs": [
        "nhs-baby-ill"
       ]
      },
      {
       "text": "體溫反而低於 36°C，或摸起來冰冷、發抖",
       "refs": [
        "nhs-baby-ill"
       ]
      }
     ],
     "doNow": [
      {
       "text": "孩子沒有反應而且沒有正常呼吸：撥打 119 並開始兒童心肺復甦術（做法見「緊急狀況怎麼辦」頁）。",
       "refs": [
        "sja-child-cpr",
        "mohw-cpr"
       ]
      },
      {
       "text": "孩子抽搐時：記下開始和結束的時間；用手或軟的東西護住頭；移開旁邊危險的東西。不要壓住或搬動孩子，不要把任何東西放進嘴裡。停止抽搐後讓孩子側躺。",
       "refs": [
        "nhs-febrile"
       ]
      },
      {
       "text": "孩子正在抽搐或沒有反應時，請撥打 119，不要自己開車送急診。",
       "refs": [
        "nhs-febrile"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "未滿 2 歲，發燒超過 24 小時；2 歲以上，發燒超過 3 天（72 小時）",
       "refs": [
        "aap-fever"
       ]
      },
      {
       "text": "體溫反覆超過 40°C",
       "refs": [
        "aap-fever"
       ]
      },
      {
       "text": "發燒合併疹子或其他生病的徵兆",
       "refs": [
        "nhs-fever-child"
       ]
      },
      {
       "text": "不想吃東西，或不像平常的樣子，讓你擔心",
       "refs": [
        "nhs-fever-child"
       ]
      },
      {
       "text": "可能脫水：尿布不太濕、眼睛凹陷、哭的時候沒有眼淚",
       "refs": [
        "nhs-fever-child"
       ]
      },
      {
       "text": "退燒之後看起來還是很不舒服，或愈來愈差",
       "refs": [
        "aap-fever"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "3 個月以上，沒有上方任何一項：可以到診所或小兒科看診，醫師評估有需要會轉診",
       "refs": [
        "nhs-fever-child",
        "aap-fever"
       ]
      }
     ],
     "doNow": [
      {
       "text": "多給孩子喝水；喝母乳的寶寶照常餵奶。",
       "refs": [
        "nhs-fever-child"
       ]
      },
      {
       "text": "不要用脫光衣服或擦冷水的方式退燒，也不要穿太多、蓋太厚。",
       "refs": [
        "nhs-fever-child",
        "nhs-febrile"
       ]
      },
      {
       "text": "16 歲以下不要給阿斯匹靈。",
       "refs": [
        "nhs-fever-child",
        "nhs-kawasaki"
       ]
      },
      {
       "text": "退燒藥請依醫師或藥師的指示使用；不要自行交替使用兩種退燒藥。2 個月以下不要給乙醯胺酚（acetaminophen），3 個月以下不要給布洛芬（ibuprofen）；有水痘、脫水或氣喘的孩子，也不要自行給布洛芬。",
       "refs": [
        "nhs-fever-child",
        "nhs-bronchiolitis"
       ]
      },
      {
       "text": "晚上也要定時去看孩子的狀況。",
       "refs": [
        "nhs-fever-child",
        "nhs-baby-ill"
       ]
      }
     ]
    },
    "observe": null,
    "observeOmittedReason": "目前沒有經醫師核准、可以在家觀察的條件。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "嬰幼兒生重病時，不一定會出現所有症狀。你覺得孩子不對勁，就要立即就醫。",
       "refs": [
        "nhs-baby-ill"
       ]
      },
      {
       "text": "未滿 3 個月的嬰兒發燒，可能代表嚴重的疾病。",
       "refs": [
        "nhs-baby-ill"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "孩子幾歲（嬰兒幾個月）？大約多重？",
     "why": "年紀愈小，發燒愈需要小心；用藥也要依體重。"
    },
    {
     "q": "發燒幾天了？最高幾度？用什麼方式量的？",
     "why": "發燒的天數和高度幫助判斷嚴重度。"
    },
    {
     "q": "精神和活力如何？吃喝、尿量和平常比起來怎麼樣？",
     "why": "活力和尿量比體溫更能反映孩子病得多重。"
    },
    {
     "q": "還有哪些症狀？疹子、咳嗽、喘、嘔吐腹瀉、耳朵痛、抽搐？",
     "why": "伴隨症狀能幫助找出感染的位置。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "腦膜炎",
      "plain": "包覆腦部的薄膜感染，可能出現脖子僵硬、怕光、壓不褪色的疹子。",
      "refs": [
       "nhs-fever-child",
       "nhs-meningitis"
      ]
     },
     {
      "name": "敗血症",
      "plain": "感染引起的嚴重全身反應，幾小時內就可能惡化。",
      "refs": [
       "nhs-sepsis",
       "nhs-baby-ill"
      ]
     }
    ],
    "otherCommon": [
     {
      "name": "感冒等病毒感染",
      "plain": "最常見，多數 1 到 4 天會退燒。",
      "refs": [
       "nhs-fever-child"
      ]
     },
     {
      "name": "打完疫苗後的反應",
      "plain": "疫苗也可能引起發燒。",
      "refs": [
       "nhs-fever-child",
       "nhs-baby-ill"
      ]
     }
    ],
    "patternsHeading": "依合併的症狀",
    "patternsIntro": "合併的症狀只是線索，不能用來自己判斷。只要有上方「立即求助」的任何一項，請立即撥打 119 或到急診。",
    "painPatterns": [
     {
      "pattern": "發燒時突然全身僵硬、抽動、叫不醒，通常 2 到 3 分鐘停止，之後想睡或煩躁",
      "text": "可能是熱性痙攣，常見於 6 個月到 6 歲的孩子。第一次發生一定要到醫院檢查。",
      "refs": [
       "nhs-febrile"
      ]
     }
    ]
   },
   "specialPopulations": [],
   "visitPreparation": [
    "孩子的年齡和大約體重",
    "發燒開始的時間、最高溫度、量體溫的方式",
    "已經用過的退燒藥，名稱、劑量和時間",
    "最近的喝奶或喝水量、尿布或上廁所的次數",
    "其他症狀出現的順序；有抽搐的話，記下抽了多久"
   ],
   "sources": [
    "nhs-fever-child",
    "nhs-baby-ill",
    "aap-fever",
    "nhs-febrile",
    "nhs-kawasaki",
    "nhs-bronchiolitis",
    "nhs-meningitis",
    "nhs-sepsis",
    "sja-child-cpr",
    "mohw-cpr"
   ],
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-12",
   "nextReviewAt": "2027-11-12"
  },
  {
   "slug": "child-poisoning",
   "title": "兒童誤食",
   "aliases": [
    "小孩誤食",
    "寶寶誤食",
    "兒童中毒",
    "小孩中毒",
    "小孩吃到藥",
    "小孩吃錯藥",
    "寶寶吃到藥",
    "誤吞",
    "小孩吞東西",
    "小孩喝到清潔劑",
    "小孩喝到漂白水",
    "藥物貼片",
    "吃到貼布"
   ],
   "bodyArea": "child",
   "audience": [
    "child"
   ],
   "audienceNote": "適用嬰兒與兒童。青少年與成人請看「中毒、誤食」頁。",
   "summary": "孩子對很少量的藥物或化學品就可能很敏感。吸吮藥物貼片，或吃到藥物、清潔劑，即使現在看起來沒事，也請立即就醫。",
   "definition": "兒童誤食是指孩子吞下、舔到或吸吮不該吃的東西，例如藥物、清潔劑、化學品或藥物貼片。",
   "definitionRefs": [
    "mayo-poisoning"
   ],
   "status": "published",
   "actions": {
    "emergency": {
     "heading": "立即撥打 119 或到急診",
     "intro": "有下列任何一項，請立即就醫。孩子叫不醒、呼吸困難或抽搐時，請撥打 119：",
     "items": [
      {
       "text": "懷疑吃到藥物、清潔劑、漂白水、農藥或化學品——即使現在沒有症狀",
       "refs": [
        "mayo-poisoning",
        "nhs-poisoning"
       ]
      },
      {
       "text": "吸吮、咬過或貼著別人的藥物貼片",
       "refs": [
        "mayo-poisoning",
        "poison-patch"
       ]
      },
      {
       "text": "很想睡、叫不醒、呼吸困難、抽搐，或躁動到無法安撫",
       "refs": [
        "mayo-poisoning"
       ]
      },
      {
       "text": "嘴巴或嘴唇周圍燒傷、發紅，或呼吸有汽油、化學品的味道",
       "refs": [
        "mayo-poisoning"
       ]
      },
      {
       "text": "嘔吐",
       "refs": [
        "mayo-poisoning"
       ]
      }
     ],
     "doNow": [
      {
       "text": "孩子沒有反應而且沒有正常呼吸：撥打 119 並開始兒童心肺復甦術（做法見「緊急狀況怎麼辦」頁）。",
       "refs": [
        "mayo-poisoning",
        "sja-child-cpr",
        "mohw-cpr"
       ]
      },
      {
       "text": "把孩子嘴裡看得到的東西拿出來。",
       "refs": [
        "mayo-poisoning"
       ]
      },
      {
       "text": "不要催吐。",
       "refs": [
        "mayo-poisoning"
       ]
      },
      {
       "text": "皮膚上還貼著藥物貼片：撕下來，也要檢查孩子的上顎，貼片可能黏在那裡。",
       "refs": [
        "mayo-poisoning",
        "poison-patch"
       ]
      },
      {
       "text": "把藥罐、包裝或容器（含標籤）帶去醫院。",
       "refs": [
        "mayo-poisoning"
       ]
      }
     ]
    },
    "urgent": {
     "heading": "今天就要就醫",
     "intro": "沒有上面的任何一項，但符合下列情況，請今天就醫：",
     "items": [
      {
       "text": "不確定孩子吃到的東西有沒有害——可以先撥打臺北榮總毒藥物防治諮詢中心 02-2871-7121（24 小時，或 02-2875-7525 轉 85500）詢問，或立即到急診；不要等症狀出現",
       "refs": [
        "vgh-tox",
        "mayo-poisoning"
       ]
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": []
    },
    "observe": null,
    "observeOmittedReason": "孩子誤食的症狀可能延遲出現，本頁不提供在家觀察。",
    "delayRisks": {
     "heading": "延遲就醫的風險",
     "intro": "不確定要不要就醫時，請選擇就醫：",
     "items": [
      {
       "text": "孩子對少量的某些藥物和化學品就特別敏感。",
       "refs": [
        "mayo-poisoning"
       ]
      },
      {
       "text": "中毒的症狀可能幾小時甚至幾天後才出現，現在沒有症狀不代表沒事。",
       "refs": [
        "nhs-poisoning"
       ]
      }
     ]
    }
   },
   "keyQuestions": [
    {
     "q": "吃到什麼？有沒有包裝或藥罐？",
     "why": "知道是什麼東西，醫師才能選擇正確的處理方式。"
    },
    {
     "q": "大概吃了多少？什麼時候發生的？",
     "why": "量和時間決定需要的檢查和處理。"
    },
    {
     "q": "孩子幾歲、大約多重？",
     "why": "同樣的量，體重愈輕的孩子愈危險。"
    },
    {
     "q": "現在有什麼症狀？有沒有吐、流口水、吞不下、想睡？",
     "why": "症狀幫助判斷嚴重度。"
    }
   ],
   "possibleCauses": {
    "ruleOutFirst": [
     {
      "name": "藥物貼片中毒",
      "plain": "貼片裡的藥量對孩子可能很危險。",
      "refs": [
       "poison-patch",
       "mayo-poisoning"
      ]
     },
     {
      "name": "大人的藥物",
      "plain": "孩子對少量的某些藥物就很敏感。",
      "refs": [
       "mayo-poisoning"
      ]
     },
     {
      "name": "清潔劑、化學品",
      "plain": "可能灼傷嘴巴和喉嚨。",
      "refs": [
       "mayo-poisoning"
      ]
     }
    ],
    "otherCommon": [],
    "patternsHeading": "依現場的線索",
    "patternsIntro": "這些線索不能用來自己判斷，懷疑孩子誤食時請立即就醫。",
    "painPatterns": [
     {
      "pattern": "旁邊有打開的藥罐、藥袋，或散落的藥丸",
      "text": "可能吃到藥物，請立即就醫，並把藥罐帶去。",
      "refs": [
       "mayo-poisoning"
      ]
     },
     {
      "pattern": "孩子皮膚上或嘴巴裡有貼片",
      "text": "可能是藥物貼片，撕下並檢查上顎，請立即就醫。",
      "refs": [
       "mayo-poisoning",
       "poison-patch"
      ]
     },
     {
      "pattern": "嘴巴周圍燒傷、發紅，身上有化學品的味道或污漬",
      "text": "可能吃到清潔劑或化學品，請立即撥打 119。",
      "refs": [
       "mayo-poisoning"
      ]
     }
    ]
   },
   "specialPopulations": [],
   "visitPreparation": [
    "吃到的東西，以及它的藥罐、包裝或標籤",
    "大概的量和發生的時間",
    "孩子的年齡和大約體重",
    "目前出現的症狀"
   ],
   "sources": [
    "mayo-poisoning",
    "nhs-poisoning",
    "poison-patch",
    "vgh-tox",
    "sja-child-cpr",
    "mohw-cpr"
   ],
   "links": [
    {
     "label": "臺北榮總毒藥物防治諮詢中心",
     "url": "https://vghtpehh.vghtpe.gov.tw/0002251.html",
     "note": "24 小時諮詢：02-2871-7121，或 02-2875-7525 轉 85500"
    }
   ],
   "reviewedBy": "潘麒亘",
   "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
   "reviewedAt": "2026-11-12",
   "nextReviewAt": "2027-11-12"
  }
 ],
 "emergency": {
  "title": "緊急狀況怎麼辦",
  "status": "published",
  "reviewedBy": "潘麒亘",
  "reviewerCredentials": "急診醫學專科醫師、臨床毒物專科醫師",
  "reviewedAt": "2026-11-11",
  "nextReviewAt": "2027-11-11",
  "callWhen": {
   "heading": "出現這些情況，請立即撥打 119",
   "items": [
    {
     "text": "沒有反應、沒有正常呼吸，或突然倒下",
     "refs": [
      "mlp-sob",
      "nhs-poisoning"
     ]
    },
    {
     "text": "胸痛、胸悶或壓迫感——新發生、說不出原因的都算，包括像燒灼感或消化不良的胸痛",
     "refs": [
      "nhs-chest",
      "mayo-chest"
     ]
    },
    {
     "text": "很喘、說不出完整的句子，或嘴唇、皮膚發紫、發灰",
     "refs": [
      "nhs-sob",
      "mlp-sob"
     ]
    },
    {
     "text": "中風徵兆——記住「微笑、舉手、說你好」，任何一個動作做不好就撥打 119：臉歪一邊、一側手腳無力、說話不清楚、突然看不見",
     "refs": [
      "nhs-headache",
      "mayo-headache",
      "asa-stroke",
      "mohw-stroke"
     ]
    },
    {
     "text": "突然爆發、這輩子最痛的頭痛",
     "refs": [
      "mlp-headache",
      "nhs-headache"
     ]
    },
    {
     "text": "叫不醒、突然意識混亂、抽搐",
     "refs": [
      "nhs-sob",
      "nhs-headache",
      "mlp-fever"
     ]
    },
    {
     "text": "嚴重過敏：舌頭或喉嚨腫脹、呼吸困難、頭暈或快昏倒。不要等症狀自己消退",
     "refs": [
      "mayo-anaphylaxis"
     ]
    },
    {
     "text": "懷疑中毒：吞下或吸入藥物、農藥、化學品，或懷疑一氧化碳中毒——不要等症狀出現",
     "refs": [
      "mlp-poisoning",
      "nhs-poisoning"
     ]
    },
    {
     "text": "故意或意外吃下過量藥物",
     "refs": [
      "mayo-poisoning"
     ]
    }
   ]
  },
  "onThePhone": {
   "heading": "打 119 時要說什麼",
   "items": [
    {
     "text": "先說地點：地址、明顯的地標或相對位置",
     "refs": [
      "nfa-report"
     ]
    },
    {
     "text": "說明發生了什麼事",
     "refs": [
      "nfa-report"
     ]
    },
    {
     "text": "依照線上人員的詢問回答，例如患者有沒有意識、有沒有正常呼吸",
     "refs": [
      "nfa-report"
     ]
    }
   ]
  },
  "poisoning": {
   "heading": "誤食藥物或化學品",
   "items": [
    {
     "text": "有呼吸困難、抽搐、很想睡或叫不醒，立即撥打 119。",
     "refs": [
      "mayo-poisoning",
      "nhs-poisoning"
     ]
    },
    {
     "text": "不確定吃到的東西有沒有害，可以撥打臺北榮總毒藥物防治諮詢中心 02-2871-7121（24 小時，或 02-2875-7525 轉 85500）；有上方任何危險徵象，請直接撥打 119。",
     "refs": [
      "vgh-tox"
     ]
    },
    {
     "text": "不要催吐。除非毒物諮詢中心或醫護人員指示，不要給患者吃喝任何東西，也不要用鹽水、醋等偏方。",
     "refs": [
      "mlp-poisoning",
      "nhs-poisoning",
      "mayo-poisoning",
      "poison-org"
     ]
    },
    {
     "text": "把藥罐、包裝或容器（含標籤）帶去醫院。",
     "refs": [
      "mlp-poisoning",
      "nhs-poisoning",
      "mayo-poisoning",
      "hrsa-poison"
     ]
    },
    {
     "text": "如果是想不開而服藥，除了撥打 119，也可以撥打 1925 安心專線。",
     "refs": [
      "mohw-1925"
     ]
    }
   ]
  },
  "cpr": {
   "heading": "心肺復甦術：叫、叫、壓、電",
   "intro": "以下是消防署的民眾版成人（8 歲以上）心肺復甦術。打完 119 不要掛電話，派遣員會在電話中教你。",
   "items": [
    {
     "text": "先確認你和患者周圍的環境安全。",
     "refs": [
      "nfa-cpr"
     ]
    },
    {
     "text": "叫：大聲叫患者、輕拍雙肩，看他有沒有反應。",
     "refs": [
      "nfa-cpr"
     ]
    },
    {
     "text": "叫：沒有反應，就大聲呼救、撥打 119，請旁人去拿 AED。電話不要掛斷，開擴音，聽從 119 人員的指示。",
     "refs": [
      "nfa-cpr"
     ]
    },
    {
     "text": "看呼吸：沒有呼吸或幾乎沒有呼吸，就立刻開始壓胸，不要猶豫。",
     "refs": [
      "nfa-cpr"
     ]
    },
    {
     "text": "壓：跪在患者身旁，一手掌根放在兩乳頭連線的中央，另一手交疊在上面，手肘打直。用力往下壓 5 到 6 公分，每分鐘 100 到 120 下（大約每秒 2 下），每次放鬆讓胸部回彈。口訣「用力壓、快快壓、胸回彈、莫中斷」，中斷不要超過 10 秒。",
     "refs": [
      "nfa-cpr"
     ]
    },
    {
     "text": "不敢或不會口對口吹氣，可以不吹氣，一直壓胸就好。",
     "refs": [
      "nfa-cpr"
     ]
    },
    {
     "text": "電：AED 一到就打開電源，照語音指示把貼片貼在胸口，貼的時候繼續壓胸。機器分析時不要碰患者；建議電擊時，大喊「大家離開」，確認沒人碰到患者再按電擊鈕。",
     "refs": [
      "nfa-cpr"
     ]
    },
    {
     "text": "持續壓胸，直到救護人員到達，或患者開始有動作、恢復正常呼吸。",
     "refs": [
      "nfa-cpr"
     ]
    },
    {
     "text": "依緊急醫療救護法，一般民眾為了救人而施行急救，適用緊急避難免責的規定，可以放心救人。",
     "refs": [
      "nfa-cpr"
     ]
    }
   ]
  },
  "childCpr": {
   "status": "published",
   "heading": "兒童與嬰兒的心肺復甦術",
   "intro": "以下依衛福部民眾版心肺復甦術參考指引，適用 1 到 8 歲兒童與未滿 1 歲嬰兒（新生兒除外）。打完 119 不要掛電話，聽從 119 人員的指示。",
   "items": [
    {
     "text": "先確認你和孩子周圍的環境安全。",
     "refs": [
      "mohw-cpr"
     ]
    },
    {
     "text": "叫：拍拍孩子、大聲叫他，看有沒有反應。",
     "refs": [
      "mohw-cpr"
     ]
    },
    {
     "text": "叫：沒有反應，就大聲呼救、用手機撥打 119 並開擴音，請旁人去拿 AED。只有你一個人又沒有手機時，先做 5 個循環的 CPR，再去打電話；嬰兒可以抱著一起去。",
     "refs": [
      "mohw-cpr",
      "sja-baby-cpr"
     ]
    },
    {
     "text": "看呼吸：沒有呼吸或幾乎沒有呼吸，就立刻開始壓胸。",
     "refs": [
      "mohw-cpr"
     ]
    },
    {
     "text": "壓（1 到 8 歲）：用一手掌根壓在兩乳頭連線中央，往下壓胸部厚度的 1/3（約 5 公分，不要超過 6 公分）。",
     "refs": [
      "mohw-cpr",
      "sja-child-cpr"
     ]
    },
    {
     "text": "壓（未滿 1 歲）：用兩手環抱嬰兒胸部，兩根大拇指壓在兩乳頭連線中央的下方，往下壓胸部厚度的 1/3（約 4 公分）。",
     "refs": [
      "mohw-cpr",
      "sja-baby-cpr"
     ]
    },
    {
     "text": "每分鐘 100 到 120 下（大約每秒 2 下），每次放鬆讓胸部完全回彈，中斷不要超過 10 秒。",
     "refs": [
      "mohw-cpr"
     ]
    },
    {
     "text": "會的話請給人工呼吸：每壓 30 下，抬下巴吹 2 口氣，每口 1 秒，看到胸部起伏；嬰兒要用嘴同時蓋住口和鼻。不會或不敢吹氣，就一直壓胸。",
     "refs": [
      "mohw-cpr",
      "sja-child-cpr",
      "sja-baby-cpr"
     ]
    },
    {
     "text": "電：AED 一到就打開電源，照語音指示貼片。優先使用兒童貼片或兒童模式；沒有的話，用成人貼片也可以。",
     "refs": [
      "mohw-cpr",
      "sja-child-cpr"
     ]
    },
    {
     "text": "持續 CPR，直到救護人員到達，或孩子開始有動作、恢復正常呼吸。",
     "refs": [
      "mohw-cpr"
     ]
    }
   ]
  },
  "childChoking": {
   "status": "published",
   "heading": "孩子噎到",
   "intro": "孩子還能咳嗽、哭或說話，就鼓勵他繼續咳。咳不出聲、哭不出來、無法呼吸時，立即急救：",
   "items": [
    {
     "text": "1 歲以上：讓孩子身體前傾，用掌根在兩側肩胛骨中間用力拍背 5 下；沒有吐出來，就站在孩子背後，一手握拳放在肚臍和胸骨下緣之間，另一手包住拳頭，往內往上快速推 5 下。",
     "refs": [
      "sja-child-choking"
     ]
    },
    {
     "text": "未滿 1 歲：讓嬰兒趴在你的大腿上、扶住頭，拍背 5 下；沒有吐出來，就翻成仰躺，兩根大拇指放在兩乳頭連線下方一指寬，往下快速壓 5 下。",
     "refs": [
      "sja-baby-choking"
     ]
    },
    {
     "text": "每做完一輪就看看嘴巴，只拿出看得到的東西，不要用手指在嘴裡亂挖。",
     "refs": [
      "sja-child-choking",
      "sja-baby-choking"
     ]
    },
    {
     "text": "還沒有排除，就撥打 119，並持續重複拍背和推擠，直到救護人員到達。",
     "refs": [
      "sja-child-choking",
      "sja-baby-choking"
     ]
    },
    {
     "text": "孩子失去反應：開始兒童心肺復甦術。",
     "refs": [
      "sja-child-choking",
      "sja-baby-choking"
     ]
    },
    {
     "text": "做過腹部推擠或胸部按壓的孩子，即使東西吐出來了，也要到醫院檢查。",
     "refs": [
      "sja-child-choking",
      "sja-baby-choking"
     ]
    }
   ]
  }
 }
};
