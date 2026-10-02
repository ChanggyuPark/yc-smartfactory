(() => {
  'use strict';

  const CONFIG = {
    pathname: '/smart-factory',
    pageSelector: '#page2762695',
    rootId: 'yc-smartfactory-app',
    routeClass: 'yc-smartfactory-route-active',
    apiUrl: 'https://yc-smartfactory-form-xxo5.vercel.app/api/smart-factory'
  };

  // 중복 로더 방지
  if (window.__YC_SMARTFACTORY_LANDING_LOADED__) return;
  window.__YC_SMARTFACTORY_LANDING_LOADED__ = true;

  const LANDING_HTML = "<div id=\"app\"><div class=\"lp\"><section class=\"hero\" id=\"top\"><div class=\"wrap\"><div><h1><span class=\"hero-thin\">현장 맞춤형</span> <span class=\"hero-box\">스마트공장 솔루션</span></h1><p class=\"lead\">공장을 진단하고, 필요한 것만 제안합니다. 지원사업 활용부터 구축까지 YC코퍼레이션이 함께합니다.</p><ul class=\"hero-bullets\"><li><span class=\"ed\">자체 개발 솔루션, 공장에 맞게 커스터마이징</span></li><li><span class=\"ed\">소프트웨어부터 장비까지 한 곳에서</span></li><li><span class=\"ed\">구축 후 교육/유지보수까지 지원</span></li></ul><button class=\"btn hero-cta\" data-act=\"tofor\" type=\"button\">공장 진단 신청하기</button><div class=\"stats\"><div class=\"stat\"><span class=\"n\"><span class=\"ed\">400+</span></span><span class=\"l\"><span class=\"ed\">고객사</span></span></div><div class=\"stat\"><span class=\"n\"><span class=\"ed\">4종</span></span><span class=\"l\"><span class=\"ed\">자체 개발 솔루션</span></span></div><div class=\"stat\"><span class=\"n\"><span class=\"ed\">국내 총판</span></span><span class=\"l\"><span class=\"ed\">ENCY CAD/CAM</span></span></div><div class=\"stat\"><span class=\"n\"><span class=\"ed\">50%</span></span><span class=\"l\"><span class=\"ed\">지원사업 활용 시</span></span></div></div><p class=\"trust\"><span class=\"ed\">자체 개발 솔루션 4종 보유 · ENCY 국내 공식 총판 · 오토데스크 공식 파트너 · 경기테크노파크 지원사업 구축 수행</span></p><div class=\"imgspot\"><span class=\"tagi\">배경 사진 자리</span><span class=\"ed\">공장 현장 사진 1장 (1600×900) — 설비 옆 모니터에 관리 화면이 떠 있는 컷이 가장 좋습니다. 텍스트는 사진 안에 넣지 말고 위에 올려주세요.</span></div></div></div></section><section class=\"s tight head-center line-object line-object-grid\"><div class=\"wrap\"><div class=\"s-head\"><h2><span class=\"ed\">공고 전에 준비한 공장이 유리합니다</span></h2></div><div class=\"grid3\"><article class=\"card\"><div class=\"mini-media filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.22)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/02-img.png?updatedAt=1790834042538\");'></div><h3 class=\"why-now-title\"><span class=\"ed\">짧은 접수 일정</span></h3><p><span class=\"ed\">공고 후에 업체를 선정하고 견적까지 받으면 서류 준비가 빠듯해집니다.</span></p></article><article class=\"card\"><div class=\"mini-media filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.22)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/04-img.png?updatedAt=1790834042256\");'></div><h3 class=\"why-now-title\"><span class=\"ed\">사업계획서 수치 근거</span></h3><p><span class=\"ed\">불량률, 작업 시간처럼 지금 상태와 개선 효과를 숫자로 적어야 합니다. 미리 진단해두면 이 숫자가 준비됩니다.</span></p></article><article class=\"card\"><div class=\"mini-media filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.22)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/03-img.png?updatedAt=1790834043100\");'></div><h3 class=\"why-now-title\"><span class=\"ed\">솔루션 구성 검토</span></h3><p><span class=\"ed\">어떤 솔루션을 어떤 범위로 넣을지에 따라 지원 유형과 금액이 달라집니다. 공고 전에 정해두면 신청 방향이 분명해집니다.</span></p></article></div>\n</div></section><section class=\"s tight head-split line-object line-object-corner program-v14 program-v16\" id=\"program\"><div class=\"wrap\"><div class=\"s-head\"><h2><span class=\"ed\">한눈에 보는 유형별 지원금</span></h2><p class=\"lead\"><span class=\"ed\">2026년 스마트 제조혁신 지원사업 기준이며, 정부지원금·자부담·지원기간은 사업 유형에 따라 달라집니다.</span></p></div><div class=\"tblwrap\"><table><thead><tr><th>사업 유형</th><th>총 사업비</th><th>정부지원금</th><th>자부담</th><th>지원 기간</th></tr></thead><tbody><tr><td><b><span class=\"ed\">정부형 스마트공장</span></b> <span class=\"tdesc\"><span class=\"ed\">가장 일반적인 유형. MES·설비 연동·가공 데이터 등 스마트공장 구축 전반 (265개 과제)</span></span></td><td class=\"money\"><span class=\"ed\">4억원</span></td><td class=\"money gov\"><span class=\"ed\">최대 2억원 (50% 이내)</span></td><td class=\"money\"><span class=\"ed\">2억원 (50%)</span></td><td class=\"money\"><span class=\"ed\">최대 9개월</span></td></tr><tr><td><b><span class=\"ed\">정부형 — 동일수준 재신청</span></b> <span class=\"tdesc\"><span class=\"ed\">과거 지원받은 수준과 같은 수준으로 다시 신청하는 경우</span></span></td><td class=\"money\"><span class=\"ed\">1억원</span></td><td class=\"money gov\"><span class=\"ed\">최대 5천만원 (50% 이내)</span></td><td class=\"money\"><span class=\"ed\">5천만원 (50%)</span></td><td class=\"money\"><span class=\"ed\">최대 6개월</span></td></tr><tr><td><b><span class=\"ed\">제조AI 특화</span></b> <span class=\"tdesc\"><span class=\"ed\">AI를 적용한 스마트공장. 2026년 400개 과제로 가장 규모가 큼</span></span></td><td class=\"money\"><span class=\"ed\">4억원</span></td><td class=\"money gov\"><span class=\"ed\">최대 2억원 (50% 이내)</span></td><td class=\"money\"><span class=\"ed\">2억원 (50%)</span></td><td class=\"money\"><span class=\"ed\">최대 9개월</span></td></tr><tr><td><b><span class=\"ed\">탄소중립형</span></b> <span class=\"tdesc\"><span class=\"ed\">공장 에너지관리(FEMS)와 고효율 설비 교체 — FEMS 전용, MES는 불가</span></span></td><td class=\"money\"><span class=\"ed\">4억원</span></td><td class=\"money gov\"><span class=\"ed\">최대 2억원 (50% 이내)</span></td><td class=\"money\"><span class=\"ed\">2억원 (50%)</span></td><td class=\"money\"><span class=\"ed\">최대 9개월</span></td></tr><tr><td><b><span class=\"ed\">제조로봇 도입</span></b> <span class=\"tdesc\"><span class=\"ed\">제조 로봇 도입과 공정 자동화 (자동화공정구축은 최대 9,500만원)</span></span></td><td class=\"money\"><span class=\"ed\">5억원</span></td><td class=\"money gov\"><span class=\"ed\">최대 2억 5천만원 (50% 이내)</span></td><td class=\"money\"><span class=\"ed\">2억 5천만원 (50%)</span></td><td class=\"money\"><span class=\"ed\">최대 8개월</span></td></tr><tr><td><b><span class=\"ed\">대중소 상생형</span></b> <span class=\"tdesc\"><span class=\"ed\">대기업·공공기관이 함께 참여하는 유형. 자부담이 크지만 경쟁이 덜함</span></span></td><td class=\"money\"><span class=\"ed\">4억원</span></td><td class=\"money gov\"><span class=\"ed\">최대 1억 2천만원 (30% 이내)</span></td><td class=\"money\"><span class=\"ed\">2억 8천만원 (70%)</span></td><td class=\"money\"><span class=\"ed\">최대 9개월</span></td></tr><tr><td><b><span class=\"ed\">자율형공장</span></b> <span class=\"tdesc\"><span class=\"ed\">AI·디지털트윈 기반. 이미 '중간1' 이상 구축한 기업 대상</span></span></td><td class=\"money\"><span class=\"ed\">12억원 (2년)</span></td><td class=\"money gov\"><span class=\"ed\">2년 최대 6억원 (50% 이내)</span></td><td class=\"money\"><span class=\"ed\">6억원 (50%)</span></td><td class=\"money\"><span class=\"ed\">최대 2년</span></td></tr></tbody></table></div><p class=\"caution\">※ <span class=\"ed\">2026년 중소벤처기업부 스마트 제조혁신 지원사업 통합공고 기준이며, 실제 지원금과 자부담은 사업 유형·구축 범위·사업비에 따라 달라질 수 있습니다.</span></p></div></section><section class=\"s head-left line-object line-object-track solution-v13 solution-v14\" id=\"solution\" style=\"background:var(--ground)\"><div class=\"wrap\"><div class=\"s-head\"><h2><span class=\"solution-thin\">공장에 맞춰 조합하는</span> <span class=\"solution-box\">6가지 솔루션</span></h2><p class=\"lead\"><span class=\"ed\">필요한 영역만 골라 공장 상황에 맞게 구성할 수 있습니다.</span></p></div><div class=\"areas\"><article class=\"area\"><span class=\"an\"><span class=\"ed\">생산 관리</span></span><span class=\"ad\"><span class=\"ed\">작업지시·실적·불량을 자동 기록</span></span><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span></div></article><article class=\"area\"><span class=\"an\"><span class=\"ed\">에너지 관리</span></span><span class=\"ad\"><span class=\"ed\">설비별 전력 사용량 실시간 측정·절감</span></span><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">Next Carbon (FEMS)</span></span></div></article><article class=\"area\"><span class=\"an\"><span class=\"ed\">안전 관리</span></span><span class=\"ad\"><span class=\"ed\">안전 점검·사고 이력 디지털 관리</span></span><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">Next Safe</span></span></div></article><article class=\"area\"><span class=\"an\"><span class=\"ed\">사업 관리</span></span><span class=\"ad\"><span class=\"ed\">결재·일정·고객관리까지 사무 업무</span></span><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">Smart Dash (그룹웨어+CRM)</span></span></div></article><article class=\"area\"><span class=\"an\"><span class=\"ed\">가공 데이터 · 경로 최적화</span></span><span class=\"ad\"><span class=\"ed\">NC 프로그램을 검증·최적화해 가공시간과 불량을 줄입니다</span></span><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">ENCY CAM</span></span><span class=\"chip\"><span class=\"ed\">ENCY Tuner</span></span><span class=\"chip\"><span class=\"ed\">다축 가공경로 최적화</span></span></div></article><article class=\"area\"><span class=\"an\"><span class=\"ed\">로봇 · 장비</span></span><span class=\"ad\"><span class=\"ed\">로봇 시뮬레이션·실시간 제어와 장비 공급</span></span><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">ENCY Robot</span></span><span class=\"chip\"><span class=\"ed\">ENCY Hyper</span></span><span class=\"chip\"><span class=\"ed\">SmartWare</span></span><span class=\"chip\"><span class=\"ed\">Next Wood</span></span></div></article></div>\n<details class=\"fold\"><summary><span class=\"ed\">전체 솔루션 라인업 보기 (자체 개발 · 총판 · 장비)</span></summary><div class=\"inner\"><div class=\"sol-group\"><div class=\"sol-label\"><b><span class=\"ed\">YC 자체 개발 솔루션</span></b><span><span class=\"ed\">생산/에너지/안전/사업관리</span></span></div><div class=\"sol-grid\"><article class=\"sol\"><span class=\"role\"><span class=\"ed\">그룹웨어 + CRM</span></span><span class=\"nm\"><span class=\"ed\">Smart Dash</span></span><span class=\"ds\"><span class=\"ed\">사업 관리 솔루션</span></span></article><article class=\"sol\"><span class=\"role\"><span class=\"ed\">MES</span></span><span class=\"nm\"><span class=\"ed\">Smart Line</span></span><span class=\"ds\"><span class=\"ed\">생산 관리 솔루션</span></span></article><article class=\"sol\"><span class=\"role\"><span class=\"ed\">FEMS</span></span><span class=\"nm\"><span class=\"ed\">Next Carbon</span></span><span class=\"ds\"><span class=\"ed\">에너지 관리 솔루션</span></span></article><article class=\"sol\"><span class=\"role\"><span class=\"ed\">Safe Management</span></span><span class=\"nm\"><span class=\"ed\">Next Safe</span></span><span class=\"ds\"><span class=\"ed\">안전 관리 솔루션</span></span></article></div></div><div class=\"sol-group\"><div class=\"sol-label\"><b><span class=\"ed\">ENCY 솔루션</span></b><span><span class=\"ed\">가공경로 생성/검증, 로봇 프로그래밍</span></span></div><div class=\"sol-grid\"><article class=\"sol\"><span class=\"role\"><span class=\"ed\">CAM</span></span><span class=\"nm\"><span class=\"ed\">ENCY CAM</span></span><span class=\"ds\"><span class=\"ed\">3축·다축·연속 5축·턴밀 가공경로 생성. 실제 기계 구조를 반영한 시뮬레이션으로 가공 전 검증</span></span></article><article class=\"sol\"><span class=\"role\"><span class=\"ed\">NC 검증·최적화</span></span><span class=\"nm\"><span class=\"ed\">ENCY Tuner</span></span><span class=\"ds\"><span class=\"ed\">기존 G코드를 그대로 불러와 검증·최적화. 프로그램을 다시 짤 필요 없이 충돌 확인과 경로 개선</span></span></article><article class=\"sol\"><span class=\"role\"><span class=\"ed\">OLP</span></span><span class=\"nm\"><span class=\"ed\">ENCY Robot</span></span><span class=\"ds\"><span class=\"ed\">로봇 오프라인 프로그래밍·시뮬레이션</span></span></article><article class=\"sol\"><span class=\"role\"><span class=\"ed\">Robot Digital Twin</span></span><span class=\"nm\"><span class=\"ed\">ENCY Hyper</span></span><span class=\"ds\"><span class=\"ed\">로봇 모니터링·실시간 제어</span></span></article><article class=\"sol\"><span class=\"role\"><span class=\"ed\">CAM / Nesting</span></span><span class=\"nm\"><span class=\"ed\">Carveco</span></span><span class=\"ds\"><span class=\"ed\">목공·조각 가공, 판재 네스팅</span></span></article></div></div><div class=\"sol-group\"><div class=\"sol-label\"><b><span class=\"ed\">업무 시스템</span></b><span><span class=\"ed\">회계/재고/구매/영업 관리</span></span></div><div class=\"sol-grid\"><article class=\"sol\"><span class=\"role\"><span class=\"ed\">ERP</span></span><span class=\"nm\"><span class=\"ed\">Odoo</span></span><span class=\"ds\"><span class=\"ed\">회계·재고·구매·영업 올인원</span></span></article><article class=\"sol\"><span class=\"role\"><span class=\"ed\">ERP</span></span><span class=\"nm\"><span class=\"ed\">얼마에요</span></span><span class=\"ds\"><span class=\"ed\">AI 기반 중소기업 전용 ERP</span></span></article></div></div><div class=\"sol-group\"><div class=\"sol-label\"><b><span class=\"ed\">산업 장비</span></b><span><span class=\"ed\">로봇/레이저/CNC 등 현장 장비</span></span></div><div class=\"sol-grid\"><article class=\"sol\"><span class=\"role\"><span class=\"ed\">산업용 장비</span></span><span class=\"nm\"><span class=\"ed\">SmartWare</span></span><span class=\"ds\"><span class=\"ed\">로봇 · 파이버레이저 · 용접기 · UV프린터 · 3D프린터</span></span></article><article class=\"sol\"><span class=\"role\"><span class=\"ed\">목공·가구 특화</span></span><span class=\"nm\"><span class=\"ed\">Next Wood</span></span><span class=\"ds\"><span class=\"ed\">CNC 라우터 · 목선반 등</span></span></article></div></div></div></details></div></section><section class=\"s head-center line-object line-object-ring package-v13 package-v16\" id=\"package\"><div class=\"wrap\"><div class=\"s-head\"><h2><span class=\"ed\">업종별 맞춤 구성</span></h2><p class=\"lead\"><span class=\"ed\">같은 지원사업도 업종에 따라 구성이 달라집니다. 우리 공장과 가까운 업종을 골라보세요.</span></p></div><div class=\"tabs\" role=\"tablist\"><button aria-controls=\"pkg-0\" aria-selected=\"true\" class=\"tab\" data-i=\"0\" role=\"tab\">기계·금속 가공</button><button aria-controls=\"pkg-1\" aria-selected=\"false\" class=\"tab\" data-i=\"1\" role=\"tab\">목공·가구</button><button aria-controls=\"pkg-2\" aria-selected=\"false\" class=\"tab\" data-i=\"2\" role=\"tab\">사출·성형</button><button aria-controls=\"pkg-3\" aria-selected=\"false\" class=\"tab\" data-i=\"3\" role=\"tab\">식품·음료 제조</button><button aria-controls=\"pkg-4\" aria-selected=\"false\" class=\"tab\" data-i=\"4\" role=\"tab\">금형</button><button aria-controls=\"pkg-5\" aria-selected=\"false\" class=\"tab\" data-i=\"5\" role=\"tab\">판금·용접</button><button aria-controls=\"pkg-6\" aria-selected=\"false\" class=\"tab\" data-i=\"6\" role=\"tab\">전자·조립</button><button aria-controls=\"pkg-7\" aria-selected=\"false\" class=\"tab\" data-i=\"7\" role=\"tab\">디자인·조형 제작</button><button aria-controls=\"pkg-8\" aria-selected=\"false\" class=\"tab\" data-i=\"8\" role=\"tab\">로봇 자동화 도입</button><button aria-controls=\"pkg-9\" aria-selected=\"false\" class=\"tab\" data-i=\"9\" role=\"tab\">소공인 공방 (10인 미만)</button></div><div id=\"pkg-panels\">\n<div class=\"pkg\" id=\"pkg-0\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">기계·금속 가공</span></h3><p class=\"who\"><span class=\"ed\">CNC 선반·머시닝센터 5~20대로 부품을 깎는 가공업체. 다품종 소량 주문이 많고, 납기와 전기요금이 수익을 좌우하는 공장입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">기계가 언제, 왜 멈췄는지 나중에야 안다</span></li><li><span class=\"ed\">가공 프로그램(NC 데이터)이 담당자 개인 PC에 흩어져 있고, 검증은 시험 절삭으로 한다</span></li><li><span class=\"ed\">가공 조건을 작업자 경험으로 잡아 사이클타임이 사람마다 다르다</span></li><li><span class=\"ed\">전기요금 고지서는 오는데 어느 설비가 얼마나 쓰는지 모른다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">CNC·머시닝센터에 데이터 수집장치를 붙여 가동·비가동·알람과 실제 가공시간을 자동 기록</span></li><li><span class=\"ed\">ENCY CAM으로 다축 가공경로를 만들고, 실제 기계 구조를 반영한 시뮬레이션으로 충돌·간섭을 사전 검증</span></li><li><span class=\"ed\">ENCY Tuner로 기존 G코드를 다시 짜지 않고 불러와 검증·최적화 — 공구 경로의 낭비 구간과 비효율 이송을 줄임</span></li><li><span class=\"ed\">NC 프로그램을 버전별로 관리해 '어느 제품은 어느 프로그램으로' 가 사내에 남도록 정리</span></li><li><span class=\"ed\">작업지시를 현장 태블릿으로 내려보내고, 생산 실적과 불량을 터치로 입력</span></li><li><span class=\"ed\">분전반과 주요 설비에 전력 계측기 설치 → 설비별 사용량과 피크 시간대 집계</span></li><li><span class=\"ed\">관리자 화면 하나에 가동률·생산량·전력·알람을 모아서 표시</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span><span class=\"chip\"><span class=\"ed\">ENCY CAM</span></span><span class=\"chip\"><span class=\"ed\">ENCY Tuner</span></span><span class=\"chip\"><span class=\"ed\">Next Carbon (FEMS)</span></span><span class=\"chip\"><span class=\"ed\">장비 연동 IoT</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/05-img-metal.png?updatedAt=1790834048679\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">가공 데이터와 설비 데이터가 한 곳에 모이면, 사이클타임이 긴 프로그램과 대기 시간이 긴 설비가 먼저 눈에 띕니다. 시험 절삭으로 확인하던 것을 화면에서 먼저 검증하니 장비를 세우는 시간도 줄어듭니다.</span></div><p class=\"scale\"><span class=\"ed\">CNC 2~3대 규모부터 시작할 수 있습니다. 설비를 한 번에 다 연결하지 않고 핵심 설비부터 늘려갑니다. 구축 3~4개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-industry=\"기계·금속 가공\">이 조합으로 상담받기</button></aside></div><div class=\"pkg\" hidden=\"\" id=\"pkg-1\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">목공·가구</span></h3><p class=\"who\"><span class=\"ed\">CNC 라우터로 주방·인테리어 가구 부품, 목재 소품을 만드는 제조사. 주문마다 도면이 다르고, 판재 손실이 곧 원가인 공장입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">도면이 PDF·손그림으로 와서 매번 다시 그린다</span></li><li><span class=\"ed\">판재 배치를 눈대중으로 해 자투리가 많이 남는다</span></li><li><span class=\"ed\">작업자마다 가공 조건이 달라 품질이 들쭉날쭉하다</span></li><li><span class=\"ed\">주문·재고 현황이 수첩과 카톡에 흩어져 있다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">Carveco로 도면을 가공 경로로 바꾸고, 판재 배치(네스팅)를 자동 계산 — 자재 사용률까지 표시</span></li><li><span class=\"ed\">자주 쓰는 가공 조건을 템플릿으로 저장해 누가 작업해도 같은 품질로</span></li><li><span class=\"ed\">Next Wood CNC 라우터 도입·세팅과 작업자 교육</span></li><li><span class=\"ed\">Smart Line으로 주문별 작업지시·완료 기록, 자재 사용량과 불량 집계</span></li><li><span class=\"ed\">견적 낼 때 쓸 수 있도록 제품별 자재·작업시간 데이터 축적</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">Carveco</span></span><span class=\"chip\"><span class=\"ed\">Next Wood 장비</span></span><span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/06-img-wood.png?updatedAt=1790834048631\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">같은 판재에서 몇 장을 더 뽑았는지가 숫자로 보입니다. 견적을 낼 때도 '이 제품은 자재가 얼마, 시간이 얼마'라는 근거가 생깁니다.</span></div><p class=\"scale\"><span class=\"ed\">라우터 1대를 쓰는 소규모 공방부터 가능합니다. 구축 2~3개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-industry=\"목공·가구\">이 조합으로 상담받기</button></aside></div><div class=\"pkg\" hidden=\"\" id=\"pkg-2\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">사출·성형</span></h3><p class=\"who\"><span class=\"ed\">사출기 5~30대를 거의 24시간 돌리는 플라스틱 성형업체. 금형 교체 시간과 불량률, 전기요금이 수익을 결정하는 공장입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">샷 수와 양품·불량을 작업자가 종이에 적는다</span></li><li><span class=\"ed\">금형 교체 시간이 기록되지 않아 어디를 줄여야 할지 모른다</span></li><li><span class=\"ed\">호기별 전력 사용량을 모른 채 요금만 낸다</span></li><li><span class=\"ed\">안전 점검 기록이 서류철에만 남아 있다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">사출기 신호를 받아 샷 카운트·가동 상태를 자동 수집</span></li><li><span class=\"ed\">불량 사유를 현장 태블릿에서 버튼으로 입력 → 금형별·호기별·제품별로 집계</span></li><li><span class=\"ed\">금형 교체 시작·완료를 기록해 교체 시간을 데이터로 관리</span></li><li><span class=\"ed\">호기별 전력 계측과 피크 시간대 관리(Next Carbon)</span></li><li><span class=\"ed\">Next Safe로 일일 안전점검·아차사고 기록을 디지털로 전환</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span><span class=\"chip\"><span class=\"ed\">Next Carbon (FEMS)</span></span><span class=\"chip\"><span class=\"ed\">Next Safe</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/07-img-molding.png?updatedAt=1790834048167\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">'어느 금형이, 어느 호기에서, 몇 %의 불량을 내는지'가 한 표로 나옵니다. 지원사업 사업계획서에 쓸 개선 근거도 이 데이터에서 나옵니다.</span></div><p class=\"scale\"><span class=\"ed\">사출기 3~5대 규모부터 가능합니다. 주력 호기만 먼저 연결하고 나중에 넓힙니다. 구축 3~5개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-industry=\"사출·성형\">이 조합으로 상담받기</button></aside></div><div class=\"pkg\" hidden=\"\" id=\"pkg-3\" role=\"tabpanel\">\n<div class=\"pkg-main\">\n<h3><span class=\"ed\">식품·음료 제조</span></h3>\n<p class=\"who\"><span class=\"ed\">HACCP 인증을 받았거나 준비 중인 식품 제조업체. 원료 입고부터 칭량·배합·가열·포장까지 공정마다 기록을 남겨야 하고, 문제가 생기면 어느 원료가 어느 제품으로 갔는지 바로 찾아야 하는 공장입니다.</span></p>\n<div class=\"pkg-block pain-block\">\n<p class=\"bl\">애로사항</p>\n<ul class=\"pains\">\n<li><span class=\"ed\">CCP 점검 기록을 손으로 쓰고, 일지가 서류철로만 쌓인다</span></li>\n<li><span class=\"ed\">원료 로트와 완제품이 연결되지 않아 회수·추적에 시간이 걸린다</span></li>\n<li><span class=\"ed\">배합 비율과 가열 조건을 작업자 경험으로 맞춰 품질이 흔들린다</span></li>\n<li><span class=\"ed\">냉장·냉동·가열 설비 때문에 전기요금이 큰데 어디서 새는지 모른다</span></li>\n</ul>\n</div>\n<div aria-hidden=\"true\" class=\"flow-arrow\">→</div>\n<div class=\"pkg-block build-block\">\n<p class=\"bl\">구축방안</p>\n<ol class=\"buildlist\">\n<li><span class=\"ed\">원료 입고–칭량–배합–가열–포장을 로트 번호로 연결해, 완제품에서 원료까지 역추적되도록 구성</span></li>\n<li><span class=\"ed\">온도·습도 등 CCP 계측값을 센서로 자동 수집하고, 기준을 벗어나면 담당자에게 알림</span></li>\n<li><span class=\"ed\">손으로 쓰던 생산일지·점검일지·CCP 일지를 화면 입력으로 전환하고 보관 기간에 맞춰 자동 저장</span></li>\n<li><span class=\"ed\">배합 레시피를 시스템에 등록해 작업지시서로 그대로 내려보내기</span></li>\n<li><span class=\"ed\">냉장·냉동·가열 설비 전력을 계측해 피크 시간대와 낭비 구간 확인</span></li>\n<li><span class=\"ed\">위생 점검과 작업자 건강 상태 기록을 디지털로 전환</span></li>\n<li><span class=\"ed\">회계·재고·구매는 ERP와 연결 (얼마에요 또는 Odoo)</span></li>\n</ol>\n</div>\n</div>\n<aside class=\"pkg-side\">\n<div class=\"chips\">\n<span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span>\n<span class=\"chip\"><span class=\"ed\">IoT 센서 (온도·습도)</span></span>\n<span class=\"chip\"><span class=\"ed\">Next Carbon (FEMS)</span></span>\n<span class=\"chip\"><span class=\"ed\">Next Safe</span></span>\n<span class=\"chip\"><span class=\"ed\">얼마에요 ERP</span></span>\n</div>\n<div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/08-img-food.png?updatedAt=1790834049037\");'></div>\n<div class=\"eff\"><b>기대 효과</b><span class=\"ed\">문제가 생겼을 때 '어느 원료 로트가 어느 제품으로 갔는지'를 화면에서 바로 찾습니다. 점검 기록이 자동으로 쌓이니 심사 준비에 드는 시간도 줄어듭니다.</span></div>\n<p class=\"scale\"><span class=\"ed\">직원 10명 안팎의 소규모 식품공장부터 가능합니다. 라인 한 개로 시작해 넓혀갑니다. 구축 3~5개월.</span></p>\n<button class=\"btn\" data-act=\"tofor\" data-industry=\"식품·음료 제조\">이 조합으로 상담받기</button>\n</aside>\n</div><div class=\"pkg\" hidden=\"\" id=\"pkg-4\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">금형</span></h3><p class=\"who\"><span class=\"ed\">프레스·사출 금형을 설계하고 직접 가공하는 업체. 형상이 복잡하고 후가공(연마) 비중이 커서 숙련공 의존도가 높은 곳입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">5축 가공 경로를 만드는 데 시간이 오래 걸린다</span></li><li><span class=\"ed\">연마·광택 품질이 사람에 따라 다르다</span></li><li><span class=\"ed\">수정·재가공 이력이 개인 노하우로만 남는다</span></li><li><span class=\"ed\">공정별 소요 시간을 몰라 납기를 감으로 답한다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">ENCY CAM으로 연속 5축 등 고난도 형상의 가공경로를 만들고, 기계 구조를 반영한 시뮬레이션으로 충돌을 사전 확인</span></li><li><span class=\"ed\">ENCY Tuner로 기존에 쓰던 G코드를 그대로 불러와 검증·최적화 — 수십 년 쌓인 가공 데이터를 버리지 않고 개선</span></li><li><span class=\"ed\">폴리싱 로봇 + ENCY Hyper로 연마 공정을 자동화 — 3D 데이터에서 연마 경로 생성</span></li><li><span class=\"ed\">금형별 가공·수정 이력과 실제 가공시간을 기록해 다음 제작 때 재사용</span></li><li><span class=\"ed\">공정별 소요 시간을 쌓아 납기 산출 근거 마련, 작업자 교육과 가공 조건 표준화</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">ENCY CAM</span></span><span class=\"chip\"><span class=\"ed\">ENCY Tuner</span></span><span class=\"chip\"><span class=\"ed\">폴리싱 로봇</span></span><span class=\"chip\"><span class=\"ed\">ENCY Hyper</span></span><span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/09-img-die&amp;mold.png?updatedAt=1790834048098\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">사람에게 묶여 있던 연마 품질과 가공 노하우를 데이터로 옮깁니다. 숙련공은 난이도 높은 작업에 집중하고, 반복 작업은 로봇이 맡습니다.</span></div><p class=\"scale\"><span class=\"ed\">가공기 2~3대 규모부터 가능합니다. 연마 자동화는 비슷한 형상이 반복될수록 효과가 큽니다. 구축 4~6개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-industry=\"금형\">이 조합으로 상담받기</button></aside></div><div class=\"pkg\" hidden=\"\" id=\"pkg-5\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">판금·용접</span></h3><p class=\"who\"><span class=\"ed\">레이저 절단·절곡·용접으로 함체, 구조물, 기계 부품을 만드는 업체. 용접 인력 확보가 가장 어려운 공장입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">용접 숙련공을 구하기 어렵고 고령화되고 있다</span></li><li><span class=\"ed\">철판 배치를 눈대중으로 해 자재 손실이 크다</span></li><li><span class=\"ed\">어느 작업이 어디까지 갔는지 현장에 가봐야 안다</span></li><li><span class=\"ed\">분진·흄 때문에 작업환경과 안전 점검 부담이 있다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">SmartWare 파이버레이저 절단기 도입 + 네스팅으로 철판 손실 절감</span></li><li><span class=\"ed\">반복 형상은 용접 로봇 도입, Ency Robot(OLP)으로 현장을 세우지 않고 프로그램 작성</span></li><li><span class=\"ed\">Smart Line으로 절단–절곡–용접–도장 공정별 진행 현황 표시</span></li><li><span class=\"ed\">작업 실적과 자재 사용량을 함께 기록해 원가 근거 확보</span></li><li><span class=\"ed\">Next Safe로 유해요인·보호구 점검 이력 관리</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">SmartWare 파이버레이저</span></span><span class=\"chip\"><span class=\"ed\">용접 로봇</span></span><span class=\"chip\"><span class=\"ed\">ENCY Robot (OLP)</span></span><span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span><span class=\"chip\"><span class=\"ed\">Next Safe</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/10-img-laser.png?updatedAt=1790834048494\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">반복 용접을 로봇이 맡고 숙련공은 난이도 높은 작업에 집중합니다. 오프라인 프로그래밍이라 로봇을 세워두고 티칭하는 시간도 줄어듭니다.</span></div><p class=\"scale\"><span class=\"ed\">절단기 1대 또는 용접 1셀부터 시작할 수 있습니다. 구축 4~6개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-industry=\"판금·용접\">이 조합으로 상담받기</button></aside></div><div class=\"pkg\" hidden=\"\" id=\"pkg-6\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">전자·조립</span></h3><p class=\"who\"><span class=\"ed\">부품을 받아 조립·검사·포장해 납품하는 다품종 소량 조립업체. 납품처가 생산 이력 추적을 요구하는 곳입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">제품별로 누가 언제 조립했는지 추적이 안 된다</span></li><li><span class=\"ed\">수주·생산·재고가 각각 다른 엑셀에 있다</span></li><li><span class=\"ed\">검사 결과가 담당자 파일로만 남는다</span></li><li><span class=\"ed\">납기 문의에 확인해보고 연락드리겠다고 답한다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">바코드·QR로 제품 단위 조립 이력 기록(작업자·시간·설비까지)</span></li><li><span class=\"ed\">공정별 검사 결과와 불량 사유를 기록하고 원인별로 집계</span></li><li><span class=\"ed\">Odoo ERP로 수주–생산–재고–구매를 하나로 연결</span></li><li><span class=\"ed\">Smart Dash로 견적·고객 상담 이력 관리</span></li><li><span class=\"ed\">납품처 요구 자료(이력 추적표)를 화면에서 바로 출력</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span><span class=\"chip\"><span class=\"ed\">Odoo (ERP)</span></span><span class=\"chip\"><span class=\"ed\">Smart Dash</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/11-img-Electronics.png?updatedAt=1790834049419\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">납품처가 이력을 요구할 때 서류를 다시 만들 필요가 없습니다. 재고와 수주가 연결되니 '지금 만들 수 있는지'를 바로 답할 수 있습니다.</span></div><p class=\"scale\"><span class=\"ed\">조립 라인 1개, 직원 10명 이하 업체도 가능합니다. 구축 3~4개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-industry=\"전자·조립\">이 조합으로 상담받기</button></aside></div><div class=\"pkg\" hidden=\"\" id=\"pkg-7\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">디자인·조형 제작</span></h3><p class=\"who\"><span class=\"ed\">전시물, 조형물, 목업, 사이니지를 만드는 제작사. 한 점짜리 대형 형상이 많고 납기가 짧은 곳입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">대형 형상을 손으로 깎느라 시간이 오래 걸린다</span></li><li><span class=\"ed\">수정 요청이 오면 처음부터 다시 만들어야 한다</span></li><li><span class=\"ed\">대형 CNC는 비싸고 공간을 많이 차지한다</span></li><li><span class=\"ed\">3D 데이터가 있어도 가공으로 바로 이어지지 않는다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">외부에서 받은 3D 데이터를 가공용으로 정리하는 작업 흐름 수립</span></li><li><span class=\"ed\">조형(밀링) 로봇 + ENCY Hyper로 대형 형상 절삭 — 로봇은 CNC보다 작업 범위가 넓음</span></li><li><span class=\"ed\">ENCY Robot으로 배치 전에 도달 범위·간섭을 시뮬레이션으로 확인</span></li><li><span class=\"ed\">큰 형상을 나눠 깎고 접합하는 분할 가공 방식 설계, 소재별(우레탄·목재·스티로폼) 가공 조건 확립</span></li><li><span class=\"ed\">후가공·도장 공정과 연계, 작업자 교육</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">조형 로봇</span></span><span class=\"chip\"><span class=\"ed\">ENCY Hyper</span></span><span class=\"chip\"><span class=\"ed\">ENCY Robot</span></span><span class=\"chip\"><span class=\"ed\">ENCY CAM</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/14-img-design.png?updatedAt=1790834048857\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">3D 데이터만 있으면 크기를 키워도 같은 방식으로 깎습니다. 수정 요청도 데이터에서 반영해 다시 가공하면 되니 재제작 부담이 줄어듭니다.</span></div><p class=\"scale\"><span class=\"ed\">로봇 1대와 작업 셀 하나로 시작할 수 있습니다. 구축 3~5개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-industry=\"디자인·조형 제작\">이 조합으로 상담받기</button></aside></div><div class=\"pkg\" hidden=\"\" id=\"pkg-8\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">로봇 자동화 도입</span></h3><p class=\"who\"><span class=\"ed\">적재·이송·투입·후가공처럼 단순 반복 작업에 계속 사람을 붙여야 하는 공장. 야간·주말 인력 확보가 어려운 곳입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">사람을 구하지 못해 라인을 다 못 돌린다</span></li><li><span class=\"ed\">로봇을 넣고 싶은데 우리 공정에 맞을지 확신이 없다</span></li><li><span class=\"ed\">티칭·프로그램을 누가 맡을지 막막하다</span></li><li><span class=\"ed\">도입 후 활용을 못 할까 봐 투자 결정을 미루고 있다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">공정을 분석해 로봇이 맡을 구간과 사람이 맡을 구간을 나눔</span></li><li><span class=\"ed\">Ency Robot(OLP)으로 배치 전에 시뮬레이션 — 도달 범위·간섭·사이클타임을 화면에서 먼저 확인</span></li><li><span class=\"ed\">SmartWare 로봇과 주변장치(그리퍼·지그·안전펜스) 구성 및 설치</span></li><li><span class=\"ed\">Ency Hyper로 로봇 가동 상태를 실시간 모니터링</span></li><li><span class=\"ed\">로봇 생산 실적을 Smart Line에 연결해 사람 작업과 함께 집계</span></li><li><span class=\"ed\">현장 담당자 교육 — 간단한 경로 수정은 직접 할 수 있게</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">SmartWare 로봇</span></span><span class=\"chip\"><span class=\"ed\">ENCY Robot (OLP)</span></span><span class=\"chip\"><span class=\"ed\">ENCY Hyper</span></span><span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/12-img-robot.png?updatedAt=1790834049360\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">도입 전에 화면에서 먼저 돌려보고 결정합니다. 사이클타임과 배치 가능 여부를 숫자로 확인한 뒤 투자하니, '사놓고 못 쓰는' 위험이 줄어듭니다.</span></div><p class=\"scale\"><span class=\"ed\">로봇 1대로 한 공정만 먼저 바꿔보는 방식도 가능합니다. 구축 4~6개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-solution=\"로봇 자동화·로봇 프로그래밍 (OLP · ENCY Robot · Hyper)\">이 조합으로 상담받기</button></aside></div><div class=\"pkg\" hidden=\"\" id=\"pkg-9\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">소공인 공방 (10인 미만)</span></h3><p class=\"who\"><span class=\"ed\">대표가 직접 작업하는 1~9인 공방. 주문 제작·소량 생산이 중심이라 큰 시스템은 오히려 부담인 곳입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">견적·주문·재고가 카톡과 수첩에 흩어져 있다</span></li><li><span class=\"ed\">장비 1~2대로 납기를 맞추느라 늘 빠듯하다</span></li><li><span class=\"ed\">새 프로그램을 배울 시간이 없다</span></li><li><span class=\"ed\">대형 MES는 우리 규모에 과하다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">Carveco 또는 ENCY CAM으로 설계–가공을 한 흐름으로 연결(필요한 기능만)</span></li><li><span class=\"ed\">소형 CNC·Next Wood 장비 도입, 세팅과 1:1 교육</span></li><li><span class=\"ed\">Smart Dash로 주문·견적·고객 이력을 한 곳에 정리</span></li><li><span class=\"ed\">스마트공방 사업 범위에 맞춘 최소 구성으로 신청 서류 준비 지원</span></li><li><span class=\"ed\">구축 후 온라인교육·기술지원 카페로 이어지는 사후 지원</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">Carveco 또는 ENCY CAM</span></span><span class=\"chip\"><span class=\"ed\">Next Wood 장비</span></span><span class=\"chip\"><span class=\"ed\">Smart Dash</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/13-img-Small.png?updatedAt=1790834049059\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">규모에 맞춰 꼭 필요한 것만 넣습니다. 교육까지 포함해서, 직원이 없어도 대표님 혼자 운영할 수 있는 수준으로 맞춥니다.</span></div><p class=\"scale\"><span class=\"ed\">대표님 혼자 일하는 1인 공방도 가능합니다. 장비 1~2대 + 소프트웨어. 구축 1~3개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-size=\"1~9명\">이 조합으로 상담받기</button></aside></div></div></div></section><section class=\"s head-split line-object line-object-corner cases-v13\" id=\"cases\" style=\"background:var(--ground)\"><div class=\"wrap\"><div class=\"s-head\"><h2><span class=\"ed\">스마트공장 구축 사례</span></h2></div><div class=\"cases\"><article class=\"case\"><div class=\"ph case-image\"><img alt=\"S테크 스마트공장 구축 사례 이미지\" decoding=\"async\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/yc/smart-factory/19-img.jpg\"/></div><div class=\"body\"><h3><span class=\"ed\">S테크</span></h3><p class=\"meta\"><span class=\"ed\">사출 제조</span> · <span class=\"ed\">2022 경기도형 스마트공장 구축지원</span></p><dl><dt>구축 전</dt><dd><span class=\"ed\">사출 공정 관리와 납기 개선, 제품 설계·시제품 제작 프로세스의 효율화가 필요했습니다.</span></dd><dt>구축 내용</dt><dd><span class=\"ed\">생산관리 시스템(MES), 설계 소프트웨어, 3D 프린터 구축</span></dd></dl><p class=\"res\"><span class=\"res-label\">도입 후 변화</span><span class=\"ed\">납기 준수율 30% 증가 · 제조 리드타임 30% 단축 · 반품률 60% 이상 감소</span></p></div></article><article class=\"case\"><div class=\"ph case-image\"><img alt=\"Y우드 스마트공장 구축 사례 이미지\" decoding=\"async\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/yc/smart-factory/20-img.jpg\"/></div><div class=\"body\"><h3><span class=\"ed\">Y우드</span></h3><p class=\"meta\"><span class=\"ed\">목재 제조</span> · <span class=\"ed\">경기테크노파크 지원사업</span></p><dl><dt>구축 전</dt><dd><span class=\"ed\">목재 제조 공정의 설계·생산 정보가 분산돼 있어 디지털 관리가 필요했습니다.</span></dd><dt>구축 내용</dt><dd><span class=\"ed\">목재 제조 공정의 생산·작업 정보 디지털화</span></dd></dl><p class=\"res\"><span class=\"res-label\">도입 후 변화</span><span class=\"ed\">수기·분산 관리 → 디지털 관리 체계로 전환</span></p></div></article><article class=\"case\"><div class=\"ph case-image\"><img alt=\"C메탈 스마트공장 구축 사례 이미지\" decoding=\"async\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/yc/smart-factory/21-img.jpg\"/></div><div class=\"body\"><h3><span class=\"ed\">C메탈</span></h3><p class=\"meta\"><span class=\"ed\">금속 제조</span> · <span class=\"ed\">2023 경기도형 스마트공장 구축지원</span></p><dl><dt>구축 전</dt><dd><span class=\"ed\">재고·납기·도면 관리가 분산돼 있고, 반복 용접 공정의 품질 편차가 있었습니다.</span></dd><dt>구축 내용</dt><dd><span class=\"ed\">생산관리 시스템(MES), 바코드 관리, 용접 자동화 로봇 구축</span></dd></dl><p class=\"res\"><span class=\"res-label\">도입 후 변화</span><span class=\"ed\">용접 공정 불량률 10% → 1% 개선</span></p></div></article><article class=\"case\"><div class=\"ph case-image\"><img alt=\"D우드 스마트공장 구축 사례 이미지\" decoding=\"async\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/yc/smart-factory/22-img.jpg\"/></div><div class=\"body\"><h3><span class=\"ed\">D우드</span></h3><p class=\"meta\"><span class=\"ed\">목공 제조</span> · <span class=\"ed\">혁신바우처</span></p><dl><dt>구축 전</dt><dd><span class=\"ed\">자동화 설비의 가동 상태를 실시간으로 확인하기 어렵고, 재단 공정의 품질 편차 관리가 필요했습니다.</span></dd><dt>구축 내용</dt><dd><span class=\"ed\">CNC 라우터, IoT 센서, 생산관리 시스템을 연동해 설비 모니터링·생산관리를 구축</span></dd></dl><p class=\"res\"><span class=\"res-label\">도입 후 변화</span><span class=\"ed\">KPI · 불량률 1.5% → 0.5% · 설비 가동률 70% → 95%</span></p></div></article></div></div></section><section class=\"s tight head-center process-v13\"><div class=\"wrap\"><div class=\"s-head\"><h2 class=\"process-title-box\"><span class=\"ed\">단계별 진행 과정</span></h2></div><ol class=\"steps\"><li><b><span class=\"ed\">공장 진단 신청</span></b><p><span class=\"ed\">이 페이지에서 바로 신청</span></p></li><li><b><span class=\"ed\">공장 방문 진단</span></b><p><span class=\"ed\">설비 / 데이터 / 전력 / 인력 확인 (약 2시간 소요)</span></p></li><li><b><span class=\"ed\">구성 · 견적 제안</span></b><p><span class=\"ed\">구축 범위와 예상 자부담 정리</span></p></li><li><b><span class=\"ed\">사업계획서 기술 자문</span></b><p><span class=\"ed\">솔루션 구성 / 도입 효과 등 기술 내용 컨설팅</span></p></li><li><b><span class=\"ed\">선정 후 구축 · 교육</span></b><p><span class=\"ed\">설치 / 직원 교육 / 안정화, 이후 유지보수</span></p></li></ol></div></section><section class=\"why-yc-v13 why-yc-head-center line-object-track head-left s line-object tight\"><div class=\"wrap\"><div class=\"s-head\"><h2><span class=\"ed\">YC코퍼레이션을 선택하는 이유</span></h2></div><div class=\"slim\"><div><div class=\"why-media filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.25)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/15-img-solution.jpg?updatedAt=1790834040606\");'></div><b class=\"why-title-strong\"><span class=\"ed\">직접 개발한 솔루션</span></b><p><span class=\"ed\">Smart Line / Next Carbon / Next Safe / Smart Dash 자체 개발. 공장에 맞게 기능을 조정할 수 있습니다.</span></p></div><div><div class=\"why-media filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.25)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/16-img-smart(1).png?updatedAt=1790834047686\");'></div><b class=\"why-title-strong\"><span class=\"ed\">소프트웨어 + 장비를 한 곳에서</span></b><p><span class=\"ed\">MES / CAM / 로봇 / CNC 라우터까지. 업체를 따로 찾을 필요가 없습니다.</span></p></div><div><div class=\"why-media filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.25)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/17-img-smart(2).png?updatedAt=1790834047021\");'></div><b class=\"why-title-strong\"><span class=\"ed\">지원사업 구축 경험</span></b><p><span class=\"ed\">경기테크노파크 지원사업 등 중소 제조기업 스마트공장 구축.</span></p></div><div><div class=\"why-media filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.25)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/18-img-smart(3).png?updatedAt=1790834049663\");'></div><b class=\"why-title-strong\"><span class=\"ed\">구축 후에도 이어지는 지원</span></b><p><span class=\"ed\">온라인 교육과 기술지원 커뮤니티 운영. 설치하고 끝나지 않습니다.</span></p></div></div></div></section><section class=\"final-form-section final-faq-left final\"><div class=\"wrap\"><div class=\"final-copy\"><h2><span class=\"ed\">현장 맞춤형 스마트공장, 진단에서 시작됩니다</span></h2><p><span class=\"ed\">필요한 솔루션과 예상 자부담을 미리 확인해 보세요.</span></p><h3 class=\"faq-left-title faq-inline-title\">자주 묻는 질문</h3><div class=\"faq-left faq-inline faq\"><details><summary><span class=\"ed\">공고는 언제 나오나요?</span></summary><div class=\"ans\"><span class=\"ed\">통합공고는 보통 전년도 11월경 나오고, 접수는 11월부터 이듬해 1월 사이에 진행됩니다(2026년 사업은 2025년 10월 31일 공고). 사전진단을 신청해두시면 공고가 나오는 즉시 안내드립니다.</span></div></details><details><summary><span class=\"ed\">사전진단은 비용이 드나요?</span></summary><div class=\"ans\"><span class=\"ed\">무료입니다. 공장 방문 진단과 솔루션 제안까지 비용은 발생하지 않습니다.</span></div></details><details><summary><span class=\"ed\">지원금은 얼마나 받을 수 있나요?</span></summary><div class=\"ans\"><span class=\"ed\">2026년 정부형 스마트공장 기준으로 총 사업비의 50% 이내, 최대 2억원까지 지원됩니다. 예를 들어 4억원짜리 구축이면 정부 2억원, 회사 부담 2억원입니다. 사업 유형에 따라 한도가 다르고 매년 공고에서 바뀌므로, 진단 후 우리 공장에 맞는 유형과 예상 자부담을 계산해 알려드립니다.</span></div></details><details><summary><span class=\"ed\">선정이 안 되면 어떻게 되나요?</span></summary><div class=\"ans\"><span class=\"ed\">진단·제안까지는 비용이 없고, 다음 공고에 다시 도전할 수 있습니다. 준비한 자료는 그대로 씁니다.</span></div></details><details><summary><span class=\"ed\">직원들이 컴퓨터를 잘 다루지 못합니다</span></summary><div class=\"ans\"><span class=\"ed\">현장에서 쓸 수 있게 화면을 단순하게 구성하고, 구축 후 직원 교육을 진행합니다.</span></div></details><details><summary><span class=\"ed\">쓰던 프로그램이 있는데 다 바꿔야 하나요?</span></summary><div class=\"ans\"><span class=\"ed\">기존 시스템을 유지하면서 부족한 부분만 연결하는 방식도 가능합니다. 진단 때 함께 확인합니다.</span></div></details><details><summary><span class=\"ed\">어떤 업종이 신청할 수 있나요?</span></summary><div class=\"ans\"><span class=\"ed\">제조업 중소기업이 주 대상이며, 10인 미만 소공인을 위한 별도 사업도 있습니다. 자격은 공고 기준으로 확인해드립니다.</span></div></details></div></div>\n<form class=\"form form-v2\" id=\"lead-form\">\n<h3><span class=\"ed\">무료 공장 진단 신청</span></h3>\n<p class=\"sub\"><span class=\"ed\">현장을 보고 필요한 구성과 지원사업 활용 방안을 정리해 드립니다. 1분이면 신청 완료.</span></p>\n<div class=\"form-section\">\n<div class=\"form-section-title\">기본 정보</div>\n<div class=\"fld\">\n<label for=\"f-name\"><span class=\"ed\">성함</span><em class=\"star\">*</em></label>\n<input autocomplete=\"name\" id=\"f-name\" name=\"name\" placeholder=\"홍길동\" required=\"\" type=\"text\"/>\n</div><div class=\"fld\">\n<label for=\"f-position\">\n<span class=\"ed\">직책</span>\n<em class=\"star\">*</em>\n</label>\n<input autocomplete=\"organization-title\" id=\"f-position\" name=\"position\" placeholder=\"예: 대표이사, 부장, 팀장, 담당자\" required=\"\" type=\"text\"/>\n</div>\n<div class=\"fld\">\n<label for=\"f-phone\"><span class=\"ed\">연락처</span><em class=\"star\">*</em></label>\n<input autocomplete=\"tel\" id=\"f-phone\" inputmode=\"numeric\" maxlength=\"13\" name=\"phone\" placeholder=\"010-0000-0000\" required=\"\" type=\"tel\"/>\n</div>\n<div class=\"fld\">\n<label for=\"f-email\"><span class=\"ed\">이메일</span><em class=\"star\">*</em></label>\n<input autocomplete=\"email\" id=\"f-email\" name=\"email\" placeholder=\"name@company.co.kr\" required=\"\" type=\"email\"/>\n</div>\n<div class=\"fld\">\n<label for=\"f-company\"><span class=\"ed\">회사명</span><em class=\"star\">*</em></label>\n<input autocomplete=\"organization\" id=\"f-company\" name=\"company\" placeholder=\"(주)와이씨\" required=\"\" type=\"text\"/>\n</div><div class=\"fld address-field-group\">\n<label>\n<span class=\"ed\">사업장 주소</span>\n<em class=\"star\">*</em>\n</label>\n<div class=\"address-postcode-row\">\n<input id=\"f-postcode\" name=\"postcode\" placeholder=\"우편번호\" readonly=\"\" required=\"\" type=\"text\"/>\n<button class=\"address-search-btn\" id=\"address-search-btn\" type=\"button\">주소 검색</button>\n</div>\n<input id=\"f-address-base\" name=\"address_base\" placeholder=\"기본주소\" readonly=\"\" required=\"\" type=\"text\"/>\n<input id=\"f-address-detail\" name=\"address_detail\" placeholder=\"상세주소를 입력해주세요\" required=\"\" type=\"text\"/>\n</div>\n</div>\n<div class=\"form-section\">\n<div class=\"form-section-title\">공장 정보</div>\n<div class=\"fld\">\n<label for=\"f-size\"><span class=\"ed\">공장 규모 (직원 수)</span><em class=\"star\">*</em></label>\n<select id=\"f-size\" name=\"factory_size\" required=\"\">\n<option value=\"\">선택해주세요</option>\n<option>1~9명</option>\n<option>10~29명</option>\n<option>30~49명</option>\n<option>50~99명</option>\n<option>100명 이상</option>\n</select>\n</div>\n<div class=\"fld\">\n<label for=\"f3\"><span class=\"ed\">업종</span><em class=\"star\">*</em></label>\n<select id=\"f3\" name=\"industry\" required=\"\">\n<option value=\"\">선택해주세요</option>\n<option value=\"기계·금속 가공\">기계·금속 가공</option>\n<option value=\"목공·가구\">목공·가구</option>\n<option value=\"사출·성형\">사출·성형</option>\n<option value=\"식품·음료 제조\">식품·음료 제조</option>\n<option value=\"금형\">금형</option>\n<option value=\"판금·용접\">판금·용접</option>\n<option value=\"전자·조립\">전자·조립</option>\n<option value=\"디자인·조형 제작\">디자인·조형 제작</option>\n<option value=\"주조·단조·열처리\">주조·단조·열처리</option>\n<option value=\"표면처리·도장·도금\">표면처리·도장·도금</option>\n<option value=\"고무·화학·소재\">고무·화학·소재</option>\n<option value=\"자동차·기계부품\">자동차·기계부품</option>\n<option value=\"섬유·의류·피혁\">섬유·의류·피혁</option>\n<option value=\"포장재·인쇄\">포장재·인쇄</option>\n<option value=\"의료기기·정밀기기\">의료기기·정밀기기</option>\n<option value=\"건축자재·콘크리트\">건축자재·콘크리트</option>\n<option value=\"기타 제조업\">기타 제조업</option>\n</select>\n</div>\n<div class=\"fld\">\n<label><span class=\"ed\">스마트공장 지원사업 구축 이력</span><em class=\"star\">*</em></label>\n<div class=\"choices inline\">\n<label class=\"choice\"><input name=\"history\" required=\"\" type=\"radio\" value=\"0회\"/><span>0회</span></label>\n<label class=\"choice\"><input name=\"history\" type=\"radio\" value=\"1회\"/><span>1회</span></label>\n<label class=\"choice\"><input name=\"history\" type=\"radio\" value=\"2회 이상\"/><span>2회 이상</span></label>\n</div>\n</div>\n</div>\n<div class=\"form-section\">\n<div class=\"form-section-title\">관심 내용</div>\n<div class=\"fld\">\n<label><span class=\"ed\">관심 솔루션 (복수 선택)</span><em class=\"star\">*</em></label>\n<div class=\"choices choices-grid\" data-required-group=\"solution\">\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"제조 관리 시스템 (MES · Smart Line)\"/><span>제조 관리 시스템 (MES · Smart Line)</span></label>\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"공장 에너지 관리 솔루션 (FEMS · Next Carbon)\"/><span>공장 에너지 관리 솔루션 (FEMS · Next Carbon)</span></label>\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"산업안전 관리 솔루션 (Next Safe)\"/><span>산업안전 관리 솔루션 (Next Safe)</span></label>\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"가공경로 생성·검증·최적화 (CAM · ENCY CAM · Tuner)\"/><span>가공경로 생성·검증·최적화 (CAM · ENCY CAM · Tuner)</span></label>\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"로봇 자동화·로봇 프로그래밍 (OLP · ENCY Robot · Hyper)\"/><span>로봇 자동화·로봇 프로그래밍 (OLP · ENCY Robot · Hyper)</span></label>\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"설비 데이터 수집·가동 모니터링 (IoT 센서·장비 연동)\"/><span>설비 데이터 수집·가동 모니터링 (IoT 센서·장비 연동)</span></label>\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"산업장비 도입 (CNC·레이저·로봇 · SmartWare)\"/><span>산업장비 도입 (CNC·레이저·로봇 · SmartWare)</span></label>\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"사내 업무·고객 관리 (그룹웨어·CRM · Smart Dash)\"/><span>사내 업무·고객 관리 (그룹웨어·CRM · Smart Dash)</span></label>\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"개별 상담 희망\"/><span>개별 상담 희망</span></label>\n</div>\n<p class=\"check-note\">※ 하나 이상 선택해주세요.</p>\n</div>\n<div class=\"fld\">\n<label for=\"f-message\"><span class=\"ed\">문의 내용</span><em class=\"star\">*</em></label>\n<textarea id=\"f-message\" name=\"message\" placeholder=\"공장 상황이나 궁금한 점을 적어주세요\" required=\"\" rows=\"4\"></textarea>\n</div>\n</div>\n<p class=\"agree privacy-agree\">\n<input id=\"agree\" name=\"privacy_consent\" required=\"\" style=\"width:auto;margin-top:4px\" type=\"checkbox\"/>\n<span class=\"ed\">[필수] 개인정보 수집·이용에 동의합니다. 수집 항목: 성함·연락처·이메일 / 목적: 상담 및 진단 안내 / 보유기간: 3년</span>\n</p>\n<p class=\"agree\">\n<input id=\"mkt\" name=\"marketing_consent\" style=\"width:auto;margin-top:4px\" type=\"checkbox\"/>\n<span class=\"ed\">[선택] 지원사업 공고, 교육·세미나 소식을 메일로 받겠습니다.</span>\n</p>\n<button class=\"btn\" type=\"submit\"><span class=\"ed\">공장 진단 신청하기</span></button>\n<p class=\"form-note\"><span class=\"ed\">전화 상담 010-9181-9077 · yc@ycgroup.co.kr</span></p>\n</form>\n</div></section><div class=\"wrap\"></div><section class=\"s tight cross head-center line-object line-object-grid others-v13\" id=\"others\"><div class=\"wrap\"><div class=\"s-head\"><h2><span class=\"ed\">함께 검토할 수 있는 지원사업</span></h2><p class=\"lead\"><span class=\"ed\">회사 상황에 맞는 지원사업을 함께 검토해보세요.</span></p></div><div class=\"cross-grid\"><article class=\"cross-card\"><span class=\"badge\"><span class=\"ed\">공고 11월경</span></span><h3><span class=\"ed\">중소기업 혁신바우처</span></h3><span class=\"who\"><span class=\"ed\">매출·규모가 작아 스마트공장이 부담스러운 소기업</span></span><p><span class=\"ed\">컨설팅 · 기술지원 · 마케팅 중 필요한 것만 골라 쓰는 바우처 사업입니다. 스마트공장보다 신청이 간단합니다.</span></p><div class=\"go\"><a class=\"coming-link\" href=\"#\"><span class=\"ed\">혁신바우처 자세히 알아보기</span> →</a><span class=\"url\">연결 주소: <span class=\"ed\">/voucher</span></span></div></article><article class=\"cross-card\"><span class=\"badge\"><span class=\"ed\">준비 중</span></span><h3><span class=\"ed\">AI 음성인식 솔루션</span></h3><span class=\"who\"><span class=\"ed\">손으로 적을 수 없는 현장 — 작업 기록이 계속 누락되는 공장</span></span><p><span class=\"ed\">작업자가 말하면 AI가 작업 내용을 정리해 기록합니다. 장갑 낀 손으로 타이핑할 필요가 없습니다. 제조AI 특화 사업과 연결할 수 있습니다.</span></p><div class=\"go\"><a class=\"coming-link\" href=\"#\"><span class=\"ed\">AI 솔루션 알아보기</span> →</a><span class=\"url\">연결 주소: <span class=\"ed\">/ai-voice</span></span></div></article><article class=\"cross-card\"><span class=\"badge\"><span class=\"ed\">운영 중 (목공)</span></span><h3><span class=\"ed\">소공인 스마트공방</span></h3><span class=\"who\"><span class=\"ed\">10인 미만 공방 · 1인 제조업</span></span><p><span class=\"ed\">자동화 장비와 소프트웨어를 묶어 지원받는 소공인 전용 사업입니다. 목공은 넥스트우드에서 이미 안내 중입니다.</span></p><div class=\"go\"><a href=\"https://www.ycgroup.co.kr/2026_smart\"><span class=\"ed\">스마트공방 알아보기</span> →</a><span class=\"url\">연결 주소: <span class=\"ed\">https://www.nextwood.co.kr/smart</span></span></div></article></div></div></section><div aria-hidden=\"true\" class=\"modal\" id=\"coming-modal\"><div aria-labelledby=\"coming-title\" aria-modal=\"true\" class=\"modal-card\" role=\"dialog\"><h3 id=\"coming-title\">페이지를 준비하고 있습니다.</h3><p>해당 상세페이지는 현재 제작 중입니다. 궁금하신 내용은 상담 신청을 남겨주시면 먼저 안내드리겠습니다.</p><div class=\"modal-actions\"><button class=\"btn alt\" id=\"modal-close\" type=\"button\">확인</button><button class=\"btn\" id=\"modal-consult\" type=\"button\">상담 신청하기</button></div></div></div></div></div>";
  let cleanupFns = [];
  let lastPathname = '';

  function isTargetRoute() {
    return window.location.pathname === CONFIG.pathname &&
      !!document.querySelector(CONFIG.pageSelector);
  }

  function addCleanup(fn) {
    cleanupFns.push(fn);
  }

  function runCleanup() {
    cleanupFns.forEach(fn => {
      try { fn(); } catch (e) { console.warn('[YC Smart Factory] cleanup:', e); }
    });
    cleanupFns = [];
  }

  function removeLanding() {
    runCleanup();
    document.getElementById(CONFIG.rootId)?.remove();
    document.documentElement.classList.remove(CONFIG.routeClass);
    document.body?.classList.remove(CONFIG.routeClass);
  }

  function ensureDaumPostcode() {
    if (window.daum?.Postcode) return Promise.resolve();

    const existing = document.querySelector('script[data-yc-daum-postcode="1"]');
    if (existing) {
      return new Promise((resolve, reject) => {
        if (window.daum?.Postcode) return resolve();
        existing.addEventListener('load', resolve, { once: true });
        existing.addEventListener('error', reject, { once: true });
      });
    }

    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
      s.async = true;
      s.dataset.ycDaumPostcode = '1';
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function formatPhone(value) {
    const n = (value || '').replace(/\D/g, '').slice(0, 11);
    if (n.length <= 3) return n;
    if (n.length <= 7) return n.slice(0, 3) + '-' + n.slice(3);
    return n.slice(0, 3) + '-' + n.slice(3, 7) + '-' + n.slice(7);
  }

  function bindLanding(root) {
    const q = (sel) => root.querySelector(sel);
    const qa = (sel) => [...root.querySelectorAll(sel)];

    // 업종별 탭
    const tabs = qa('#package .tab');
    const panels = qa('#pkg-panels > .pkg');
    tabs.forEach(t => {
      const handler = () => {
        tabs.forEach(x => x.setAttribute('aria-selected', x === t ? 'true' : 'false'));
        panels.forEach(p => { p.hidden = p.id !== t.getAttribute('aria-controls'); });
      };
      t.addEventListener('click', handler);
      addCleanup(() => t.removeEventListener('click', handler));
    });

    const form = q('#lead-form');
    const industry = q('#f3');
    const size = q('#f-size');

    function goForm(value, opts = {}) {
      if (value && industry) {
        industry.value = value;
        industry.dispatchEvent(new Event('change', { bubbles: true }));
      }
      if (opts.size && size) {
        size.value = opts.size;
        size.dispatchEvent(new Event('change', { bubbles: true }));
      }
      if (opts.solution && form) {
        const cb = [...form.querySelectorAll('input[name="solution"]')]
          .find(el => el.value === opts.solution);
        if (cb) {
          cb.checked = true;
          cb.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
      form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => q('#f-name')?.focus({ preventScroll: true }), 500);
    }

    qa('[data-act="tofor"]').forEach(btn => {
      const handler = (e) => {
        e.preventDefault();
        goForm(btn.dataset.industry || '', {
          size: btn.dataset.size || '',
          solution: btn.dataset.solution || ''
        });
      };
      btn.addEventListener('click', handler);
      addCleanup(() => btn.removeEventListener('click', handler));
    });

    // 준비중 모달
    const comingModal = q('#coming-modal') || q('.modal');
    const openComing = (e) => {
      e?.preventDefault?.();
      comingModal?.classList.add('open');
      comingModal?.setAttribute('aria-hidden', 'false');
    };
    const closeComing = () => {
      comingModal?.classList.remove('open');
      comingModal?.setAttribute('aria-hidden', 'true');
    };

    qa('a.coming-link').forEach(a => {
      a.addEventListener('click', openComing);
      addCleanup(() => a.removeEventListener('click', openComing));
    });
    q('#modal-close')?.addEventListener('click', closeComing);
    q('#modal-consult')?.addEventListener('click', () => { closeComing(); goForm(''); });
    comingModal?.querySelectorAll('[data-modal-close]').forEach(el => {
      el.addEventListener('click', closeComing);
      addCleanup(() => el.removeEventListener('click', closeComing));
    });
    if (comingModal) {
      const bgHandler = (e) => { if (e.target === comingModal) closeComing(); };
      comingModal.addEventListener('click', bgHandler);
      addCleanup(() => comingModal.removeEventListener('click', bgHandler));
    }

    const escHandler = (e) => {
      if (e.key === 'Escape') {
        closeComing();
        q('#submit-success-modal')?.classList.remove('open');
      }
    };
    document.addEventListener('keydown', escHandler);
    addCleanup(() => document.removeEventListener('keydown', escHandler));

    // 전화번호 자동 포맷
    const phoneInput = q('#f-phone') || q('#f2');
    if (phoneInput) {
      const phoneHandler = (e) => { e.target.value = formatPhone(e.target.value); };
      phoneInput.addEventListener('input', phoneHandler);
      phoneInput.addEventListener('blur', phoneHandler);
      addCleanup(() => {
        phoneInput.removeEventListener('input', phoneHandler);
        phoneInput.removeEventListener('blur', phoneHandler);
      });
    }

    if (!form) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const successModal = q('#submit-success-modal');
    const addressSearchBtn = q('#address-search-btn');

    function getUTM(name) {
      return new URLSearchParams(window.location.search).get(name) || '';
    }

    function openSuccess() {
      successModal?.classList.add('open');
      successModal?.setAttribute('aria-hidden', 'false');
    }

    function closeSuccess() {
      successModal?.classList.remove('open');
      successModal?.setAttribute('aria-hidden', 'true');
    }

    successModal?.querySelector('.submit-success-close')?.addEventListener('click', closeSuccess);
    successModal?.querySelector('.submit-success-confirm')?.addEventListener('click', closeSuccess);

    if (successModal) {
      const successBgHandler = (e) => { if (e.target === successModal) closeSuccess(); };
      successModal.addEventListener('click', successBgHandler);
      addCleanup(() => successModal.removeEventListener('click', successBgHandler));
    }

    if (addressSearchBtn) {
      const addressHandler = async () => {
        try {
          await ensureDaumPostcode();
        } catch (e) {
          alert('주소 검색 서비스를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.');
          return;
        }

        if (!window.daum?.Postcode) {
          alert('주소 검색 서비스를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.');
          return;
        }

        new window.daum.Postcode({
          oncomplete(data) {
            const postcode = data.zonecode || '';
            const baseAddress = data.roadAddress || data.jibunAddress || '';
            const postcodeEl = q('#f-postcode');
            const baseEl = q('#f-address-base');
            const detailEl = q('#f-address-detail');

            if (postcodeEl) postcodeEl.value = postcode;
            if (baseEl) baseEl.value = baseAddress;
            if (detailEl) {
              detailEl.value = '';
              detailEl.focus();
            }
          }
        }).open();
      };

      addressSearchBtn.addEventListener('click', addressHandler);
      addCleanup(() => addressSearchBtn.removeEventListener('click', addressHandler));
    }

    const submitHandler = async (e) => {
      e.preventDefault();

      const checkedSolutions = [...form.querySelectorAll('input[name="solution"]:checked')].map(el => el.value);
      if (!checkedSolutions.length) {
        const note = form.querySelector('.check-note');
        if (note) note.style.color = 'var(--yc)';
        alert('관심 솔루션을 하나 이상 선택해주세요.');
        form.querySelector('input[name="solution"]')?.focus();
        return;
      }

      const history = form.querySelector('input[name="history"]:checked')?.value || '';
      if (!history) {
        alert('스마트공장 구축 이력을 선택해주세요.');
        return;
      }

      const postcode = q('#f-postcode')?.value.trim() || '';
      const addressBase = q('#f-address-base')?.value.trim() || '';
      const addressDetail = q('#f-address-detail')?.value.trim() || '';

      if (!postcode || !addressBase) {
        alert('주소 검색을 통해 주소를 선택해주세요.');
        return;
      }

      const fullAddress = [postcode, addressBase, addressDetail].filter(Boolean).join(' ');

      const payload = {
        name: q('#f-name')?.value.trim() || '',
        position: q('#f-position')?.value.trim() || '',
        phone: q('#f-phone')?.value.trim() || '',
        email: q('#f-email')?.value.trim() || '',
        company: q('#f-company')?.value.trim() || '',
        address: fullAddress,
        postcode,
        address_base: addressBase,
        address_detail: addressDetail,
        factory_size: q('#f-size')?.value || '',
        industry: q('#f3')?.value || '',
        history,
        solutions: checkedSolutions,
        message: q('#f-message')?.value.trim() || '',
        privacy_consent: !!q('#agree')?.checked,
        marketing_consent: !!q('#mkt')?.checked,
        utm_source: getUTM('utm_source'),
        utm_medium: getUTM('utm_medium'),
        utm_campaign: getUTM('utm_campaign'),
        utm_content: getUTM('utm_content'),
        utm_term: getUTM('utm_term'),
        submitted_at: new Date().toISOString()
      };

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.dataset.originalText = submitBtn.textContent;
        submitBtn.textContent = '신청 중...';
      }

      try {
        const response = await fetch(CONFIG.apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error('Webhook request failed: ' + response.status);

        openSuccess();

        form.innerHTML = `
          <div class="form-complete">
            <div class="form-complete-icon">✓</div>
            <h3>신청이 완료되었습니다.</h3>
            <p>접수해주신 내용을 확인한 뒤<br>담당자가 유선으로 자세히 안내드리겠습니다.</p>
          </div>
        `;
      } catch (err) {
        console.error(err);
        alert('신청 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitBtn.dataset.originalText || '공장 진단 신청하기';
        }
      }
    };

    form.addEventListener('submit', submitHandler);
    addCleanup(() => form.removeEventListener('submit', submitHandler));
  }

  function renderLanding() {
    if (!isTargetRoute()) {
      removeLanding();
      return;
    }

    // 이미 정상 렌더된 경우 중복 생성 금지
    if (document.getElementById(CONFIG.rootId)) {
      document.documentElement.classList.add(CONFIG.routeClass);
      document.body?.classList.add(CONFIG.routeClass);
      return;
    }

    const pageEl = document.querySelector(CONFIG.pageSelector);
    if (!pageEl) return;

    document.documentElement.classList.add(CONFIG.routeClass);
    document.body?.classList.add(CONFIG.routeClass);

    const root = document.createElement('div');
    root.id = CONFIG.rootId;
    root.innerHTML = LANDING_HTML;

    // section/itemElement 내부가 아니라 Sixshop page 요소의 형제 Root로 삽입
    pageEl.parentNode.insertBefore(root, pageEl);

    bindLanding(root);
    ensureDaumPostcode().catch(() => {});
  }

  function reconcileRoute() {
    const pathname = window.location.pathname;
    const target = isTargetRoute();
    const hasRoot = !!document.getElementById(CONFIG.rootId);

    if (target && !hasRoot) {
      renderLanding();
    } else if (!target && hasRoot) {
      removeLanding();
    } else if (!target) {
      document.documentElement.classList.remove(CONFIG.routeClass);
      document.body?.classList.remove(CONFIG.routeClass);
    }

    lastPathname = pathname;
  }

  // 초기 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', reconcileRoute, { once: true });
  } else {
    reconcileRoute();
  }

  // Sixshop SPA 이동 대응: history API를 덮어쓰지 않고 가볍게 pathname/DOM 재확인
  window.setInterval(reconcileRoute, 300);
  window.addEventListener('popstate', reconcileRoute);
})();
