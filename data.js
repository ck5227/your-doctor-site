/* 由 scripts/build.mjs 產生，請勿手動修改。來源：content/ */
window.YD = {
 "mode": "public",
 "builtAt": "2026-11-13T01:33:16.228Z",
 "config": {
  "siteName": "你的醫生",
  "tagline": "依症狀了解可能疾病",
  "region": "TW",
  "regionName": "台灣",
  "contentUpdatedAt": "2026-11-12",
  "feedbackEmail": "017138@tool.caaumed.org.tw",
  "symptomOrder": [
   "chest-pain",
   "shortness-of-breath",
   "abdominal-pain",
   "back-pain",
   "headache",
   "fever",
   "rash",
   "poisoning",
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
    "child-poisoning"
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
   "checkedAt": "2026-11-11",
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
        "nhs-chest",
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
      "text": "可能是氣胸（肺塌陷），請立即就醫。",
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
    "nhs-chest",
    "mayo-chest",
    "mlp-chest",
    "nhs-heart-attack",
    "nhs-angina",
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
       "text": "嚴重過敏：嘴唇、舌頭或喉嚨腫起來，全身起疹子，呼吸有咻咻聲，頭暈、快昏倒或脈搏快而弱",
       "refs": [
        "mayo-anaphylaxis",
        "mlp-sob"
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
       "text": "有氣喘或慢性肺病，比平常明顯更喘，或平常的急救藥物用了沒有改善（喘到說不出完整句子時，請直接撥 119）",
       "refs": [
        "mlp-sob"
       ]
      },
      {
       "text": "咳出血（不論多少）",
       "refs": [
        "nhs-sob"
       ]
      },
      {
       "text": "喉嚨覺得緊、咳嗽聲像狗叫，或呼吸有咻咻聲",
       "refs": [
        "mlp-sob",
        "mayo-sob"
       ]
      },
      {
       "text": "喘合併心悸，或合併噁心、嘔吐",
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
       "text": "咳嗽超過 3 週",
       "refs": [
        "nhs-sob"
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
      "text": "可能是氣胸（肺塌陷），請立即就醫。",
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
      "pattern": "躺下或做日常活動就喘，腳、腳踝或腿腫，晚上咳嗽，或咳出粉紅色泡沫痰",
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
    "nhs-sob",
    "mayo-sob",
    "mlp-sob",
    "mayo-anaphylaxis",
    "cdc-co",
    "nhs-poisoning",
    "nfa-119",
    "nhs-pe",
    "mayo-pneumothorax",
    "nhs-heart-attack",
    "nhs-anaphylaxis",
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
    "mayo-appendicitis",
    "mlp-appendicitis",
    "nhs-appendicitis",
    "mayo-kidneystones",
    "nhs-kidneystones",
    "mlp-kidneystones",
    "mayo-gallstones",
    "mayo-diverticulitis",
    "mayo-pancreatitis",
    "mayo-ectopic",
    "nhs-dv",
    "nhs-poisoning",
    "mlp-poisoning"
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
        "mohw-stroke"
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
        "nhs-headache"
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
        "nhs-headache"
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
      "text": "可能是顳動脈炎，沒有儘快治療可能造成失明或中風，請今天就醫。",
      "refs": [
       "nhs-gca"
      ]
     },
     {
      "pattern": "頭的兩側像被壓住或箍緊，肩頸緊繃痠痛，還能照常活動",
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
      "pattern": "臉頰、眼睛周圍或前額痛而且有壓痛，合併鼻塞、黃綠色鼻涕，常在感冒後出現，彎腰時更痛",
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
     "text": "正在使用抗凝血藥（俗稱血液稀釋劑）的人，頭部撞到之後出現頭痛，請撥打 119。",
     "refs": [
      "nhs-headache"
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
    "guideline-headache-2019",
    "asa-stroke",
    "cdc-co",
    "nhs-sah",
    "nhs-migraine",
    "nhs-meningitis",
    "nhs-co",
    "nhs-glaucoma",
    "nhs-gca",
    "nhs-tension",
    "nhs-cluster",
    "nhs-sinusitis",
    "mohw-stroke"
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
       "text": "體溫達 40.6°C 以上，或持續在 39.4°C 以上",
       "refs": [
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
       "text": "體溫達 39.4°C 以上",
       "refs": [
        "mayo-fever"
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
       "text": "無法進食喝水，或尿量明顯減少",
       "refs": [
        "mlp-fever"
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
    "mayo-fever",
    "mlp-fever",
    "nhs-fever",
    "who-dengue",
    "nhs-meningitis",
    "nhs-sepsis",
    "nhs-heat",
    "nhs-pneumonia",
    "nhs-uti",
    "mayo-kidney-infection",
    "mayo-cellulitis",
    "nhs-flu",
    "nhs-tonsillitis",
    "nhs-dv"
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
      }
     ]
    },
    "routine": {
     "heading": "儘快安排門診",
     "intro": "下列情況請儘快安排門診，不要拖延：",
     "items": [
      {
       "text": "蕁麻疹 2 天沒有改善、很嚴重，或一直反覆發作",
       "refs": [
        "nhs-hives",
        "mayo-hives"
       ]
      },
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
       "text": "藥物引起的嚴重皮膚反應（史蒂文生氏-強生症候群）需要立即住院治療，可能造成脫水、敗血症，甚至影響視力。",
       "refs": [
        "nhs-sjs",
        "mayo-sjs"
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
      "mayo-sjs"
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
    "mayo-anaphylaxis",
    "mayo-food-allergy",
    "nhs-meningitis",
    "nhs-sjs",
    "mayo-sjs",
    "mayo-cellulitis",
    "mayo-drug-allergy",
    "mayo-hives",
    "mayo-shingles",
    "mohw-cbz",
    "mohw-nhi-hla"
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
       "text": "不要催吐，可能會嗆到。除非醫護人員指示，不要給患者吃喝任何東西，也不要用檸檬汁、醋等偏方中和。",
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
       "text": "皮膚沾到：戴手套脫掉沾到的衣物，用水沖洗皮膚 15 到 20 分鐘。",
       "refs": [
        "mayo-poisoning"
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
    "nfa-cpr",
    "mohw-1925",
    "vgh-tox",
    "tox-site"
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
     "text": "1 歲以上：讓孩子身體前傾，用掌根在兩側肩胛骨中間用力拍背 5 下；沒有吐出來，就站在孩子背後，雙手握拳放在肚臍和胸骨下緣之間，往內往上快速推 5 下。",
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
