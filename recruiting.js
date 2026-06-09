const roles = ["Agent工程师", "多模态算法", "CV算法", "3D算法", "推荐系统"];
const grades = ["S级", "A级", "待定"];
const workTypes = ["实习", "正职"];
const interviewStages = ["待面试", "一面", "二面", "终面", "Offer", "已入职"];
const interviewers = ["刘洋", "王佳", "陈一鸣", "赵敏"];
const skills = ["Agent", "多模态", "CV", "3D", "推荐系统"];
const jdLibrary = {
  Agent工程师: "岗位职责：建设 LLM Agent、工具调用、流程编排、多智能体协作和业务自动化。必备能力：Agent 框架、Prompt Engineering、RAG、Python、工程落地。加分项：推荐系统、多模态、企业级自动化项目。",
  多模态算法: "岗位职责：负责图文/视频/语音多模态理解、检索、生成和评测。必备能力：Transformer、多模态预训练、视觉语言模型、数据清洗。加分项：Agent 应用、CV、推荐系统经验。",
  CV算法: "岗位职责：负责检测、分割、识别、OCR、视觉理解和模型部署。必备能力：深度学习、OpenCV、PyTorch、视觉模型训练。加分项：多模态、3D、工业项目经验。",
  "3D算法": "岗位职责：负责三维重建、点云、NeRF/Gaussian Splatting、空间理解和视觉定位。必备能力：3D 视觉、几何、深度学习。加分项：CV、多模态、实时渲染经验。",
  推荐系统: "岗位职责：负责召回、排序、用户建模、特征工程和效果评估。必备能力：推荐算法、机器学习、数据分析、在线实验。加分项：Agent、LLM 推荐、搜索经验。",
};

const dayMs = 24 * 60 * 60 * 1000;
const today = startOfDay(new Date());
let activePipelineRole = roles[0];

let talents = [
  {
    id: 1,
    name: "林知远",
    gender: "男",
    age: 27,
    phone: "138****2601",
    email: "linzy@example.com",
    bachelor: "浙江大学",
    master: "清华大学",
    skills: ["Agent", "多模态", "推荐系统"],
    source: "本地批量上传",
    uploadedAt: offsetDate(0),
    grade: "S级",
    role: "Agent工程师",
    altRoles: ["推荐系统", "多模态算法"],
    score: 94,
    workType: "正职",
    summary: "Agent 工程经验完整，做过工具调用、流程编排和推荐系统项目，适合优先面试。",
    reason: "Agent 项目完整，推荐系统背景强。",
    interview: true,
    interviewStage: "一面",
    firstInterviewer: "刘洋",
    secondInterviewer: "王佳",
    firstInterviewAt: offsetDate(-1),
    secondInterviewAt: "",
    interviewAt: offsetDate(-1),
    followAt: offsetDate(3),
    note: "重点确认多智能体项目深度和工程落地能力。",
  },
  {
    id: 2,
    name: "陈若宁",
    gender: "女",
    age: 25,
    phone: "186****4458",
    email: "chenrn@example.com",
    bachelor: "上海交通大学",
    master: "复旦大学",
    skills: ["CV", "3D", "多模态"],
    source: "本地批量上传",
    uploadedAt: offsetDate(-1),
    grade: "S级",
    role: "3D算法",
    altRoles: ["CV算法", "多模态算法"],
    score: 91,
    workType: "正职",
    summary: "视觉和三维重建经历清楚，有多模态项目，可进入 3D 算法岗位评估。",
    reason: "视觉与三维重建匹配度高。",
    interview: true,
    interviewStage: "待面试",
    firstInterviewer: "王佳",
    secondInterviewer: "陈一鸣",
    firstInterviewAt: offsetDate(2),
    secondInterviewAt: "",
    interviewAt: offsetDate(2),
    followAt: offsetDate(4),
    note: "面试前请补充项目 demo 链接。",
  },
  {
    id: 3,
    name: "王屿",
    gender: "男",
    age: 29,
    phone: "159****7720",
    email: "wangyu@example.com",
    bachelor: "华中科技大学",
    master: "中国科学院大学",
    skills: ["Agent", "CV"],
    source: "本地批量上传",
    uploadedAt: offsetDate(-3),
    grade: "A级",
    role: "CV算法",
    altRoles: ["Agent工程师"],
    score: 83,
    workType: "正职",
    summary: "CV 经验扎实，Agent 经历偏应用层，需要技术面确认复杂度。",
    reason: "CV 经验明确，Agent 经验需复核。",
    interview: true,
    interviewStage: "待面试",
    firstInterviewer: "陈一鸣",
    secondInterviewer: "赵敏",
    firstInterviewAt: "",
    secondInterviewAt: "",
    interviewAt: "",
    followAt: "",
    note: "先确认近期可到岗时间。",
  },
  {
    id: 4,
    name: "赵青禾",
    gender: "女",
    age: 23,
    phone: "137****9901",
    email: "zhaoqh@example.com",
    bachelor: "同济大学",
    master: "香港科技大学",
    skills: ["3D", "推荐系统"],
    source: "本地批量上传",
    uploadedAt: offsetDate(-9),
    grade: "A级",
    role: "推荐系统",
    altRoles: ["3D算法"],
    score: 80,
    workType: "实习",
    summary: "仍在读，推荐系统方向基础较好，可作为实习候选人继续观察。",
    reason: "推荐系统可用，3D 方向可转岗评估。",
    interview: true,
    interviewStage: "待面试",
    firstInterviewer: "赵敏",
    secondInterviewer: "刘洋",
    firstInterviewAt: "",
    secondInterviewAt: "",
    interviewAt: "",
    followAt: "",
    note: "适合业务算法岗位备选。",
  },
  {
    id: 5,
    name: "沈亦然",
    gender: "女",
    age: 26,
    phone: "188****3206",
    email: "shenyr@example.com",
    bachelor: "南京大学",
    master: "北京大学",
    skills: ["Agent", "多模态", "CV"],
    source: "本地批量上传",
    uploadedAt: offsetDate(-18),
    grade: "S级",
    role: "多模态算法",
    altRoles: ["Agent工程师", "CV算法"],
    score: 89,
    workType: "正职",
    summary: "多模态项目和 Agent 工程均命中，表达清晰，适合推进到核心岗位。",
    reason: "多模态项目与 Agent 工程都有命中。",
    interview: true,
    interviewStage: "已入职",
    firstInterviewer: "刘洋",
    secondInterviewer: "王佳",
    firstInterviewAt: offsetDate(-9),
    secondInterviewAt: offsetDate(-6),
    interviewAt: offsetDate(-6),
    followAt: offsetDate(-3),
    hiredAt: offsetDate(-2),
    hiredRole: "多模态算法",
    note: "已完成入职，进入本月统计。",
  },
];

function startOfDay(date) {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
}

function offsetDate(offset) {
  const date = new Date(today.getTime() + offset * dayMs);
  return formatDate(date);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDate(value) {
  return value ? startOfDay(new Date(`${value}T00:00:00`)) : null;
}

function isSameDay(value) {
  const date = parseDate(value);
  return date && date.getTime() === today.getTime();
}

function isThisWeek(value) {
  const date = parseDate(value);
  if (!date) return false;
  const day = today.getDay() || 7;
  const monday = new Date(today.getTime() - (day - 1) * dayMs);
  const sunday = new Date(monday.getTime() + 6 * dayMs);
  return date >= monday && date <= sunday;
}

function isThisMonth(value) {
  const date = parseDate(value);
  return date && date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth();
}

function nextId() {
  return Math.max(...talents.map((item) => item.id), 0) + 1;
}

function $(selector) {
  return document.querySelector(selector);
}

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
}

function gradeClass(grade) {
  if (grade === "S级") return "grade-s";
  if (grade === "A级") return "grade-a";
  return "grade-pending";
}

function stageLabel(item) {
  if (item.interviewStage === "一面" && item.firstInterviewAt && parseDate(item.firstInterviewAt) < today) {
    return "已完成一面";
  }
  if (item.interviewStage === "二面" && item.secondInterviewAt && parseDate(item.secondInterviewAt) < today) {
    return "已完成二面";
  }
  return item.interviewStage;
}

function nextInterviewDate(item) {
  if (item.interviewStage === "一面") return item.firstInterviewAt || "";
  if (item.interviewStage === "二面") return item.secondInterviewAt || "";
  return item.interviewAt || item.firstInterviewAt || "";
}

function interviewRecords(item) {
  const records = [];
  if (item.firstInterviewAt) {
    records.push({
      round: "一面",
      interviewer: item.firstInterviewer || "待定",
      date: item.firstInterviewAt,
      done: parseDate(item.firstInterviewAt) < today,
    });
  }
  if (item.secondInterviewAt) {
    records.push({
      round: "二面",
      interviewer: item.secondInterviewer || "待定",
      date: item.secondInterviewAt,
      done: parseDate(item.secondInterviewAt) < today,
    });
  }
  return records;
}

function roleMatches(item, role) {
  return item.role === role || item.altRoles.includes(role);
}

function activeJd() {
  return $("#jdSelect")?.value || roles[0];
}

function jdText(role = activeJd()) {
  return jdLibrary[role] || "";
}

function jdScore(item, role = activeJd()) {
  const jd = jdText(role);
  const profile = [item.skills.join(" "), item.summary, item.reason, item.role, item.altRoles.join(" ")].join(" ");
  const roleBonus = item.role === role ? 12 : item.altRoles.includes(role) ? 7 : 0;
  const skillBonus = skills.reduce((sum, skill) => {
    return sum + (jd.includes(skill) && profile.includes(skill) ? 5 : 0);
  }, 0);
  const gradeBonus = item.grade === "S级" ? 5 : item.grade === "A级" ? 2 : 0;
  return Math.min(99, item.score + roleBonus + skillBonus + gradeBonus);
}

function schoolLine(item) {
  return item.master || item.bachelor || "院校待补充";
}

function detailLine(item) {
  return `${item.name}｜${schoolLine(item)}｜${item.role}`;
}

function periodTooltip(label, tester) {
  const sTalents = talents.filter((item) => tester(item.uploadedAt) && item.grade === "S级");
  const interviews = talents.flatMap((item) => interviewRecords(item).map((record) => ({ item, record }))).filter(({ record }) => tester(record.date));
  const sText = sTalents.length ? sTalents.map(detailLine).join("\n") : "暂无";
  const interviewText = interviews.length ? interviews.map(({ item, record }) => `${detailLine(item)}｜${record.round}｜${record.interviewer}`).join("\n") : "暂无";
  return `${label}S级\n${sText}\n\n${label}面试\n${interviewText}`;
}

function filteredTalents() {
  const q = ($("#searchInput")?.value || "").trim().toLowerCase();
  const workType = $("#workTypeFilter")?.value || "";
  const grade = $("#gradeFilter")?.value || "";
  const role = $("#roleFilter")?.value || "";
  const interview = $("#interviewFilter")?.value || "";
  return talents.filter((item) => {
    const blob = [
      item.name,
      item.phone,
      item.email,
      item.bachelor,
      item.master,
      item.source,
      item.skills.join(" "),
      item.role,
      item.altRoles.join(" "),
      item.summary,
      item.note,
      item.workType,
      item.interviewStage,
      stageLabel(item),
    ].join(" ").toLowerCase();
    return (!q || blob.includes(q))
      && (!workType || item.workType === workType)
      && (!grade || item.grade === grade)
      && (!role || roleMatches(item, role))
      && (!interview || item.interviewStage === interview || stageLabel(item) === interview);
  });
}

function renderStats() {
  const periods = {
    today: isSameDay,
    week: isThisWeek,
    month: isThisMonth,
  };

  Object.entries(periods).forEach(([key, tester]) => {
    const uploaded = talents.filter((item) => tester(item.uploadedAt));
    $(`#${key}Uploads`).textContent = uploaded.length;
    $(`#${key}S`).textContent = uploaded.filter((item) => item.grade === "S级").length;
    $(`#${key}Interview`).textContent = talents.flatMap((item) => interviewRecords(item)).filter((record) => tester(record.date)).length;
  });

  $("#todayCard").dataset.tooltip = periodTooltip("今日", isSameDay);
  $("#weekCard").dataset.tooltip = periodTooltip("本周", isThisWeek);
  $("#monthCard").dataset.tooltip = periodTooltip("本月", isThisMonth);

  const hires = talents.filter((item) => item.hiredAt && (isThisWeek(item.hiredAt) || isThisMonth(item.hiredAt)));
  $("#hireCount").textContent = hires.length;
  $("#hireNames").textContent = hires.length
    ? hires.map((item) => `${item.name}-${item.hiredRole}`).join("；")
    : "本周 / 本月暂无入职";
  $("#hireCard").dataset.tooltip = hires.length
    ? hires.map(detailLine).join("\n")
    : "本周 / 本月暂无入职";
}

function renderTalents() {
  const rows = filteredTalents();
  $("#talentCards").innerHTML = rows.map((item) => `
    <article class="talent-card">
      <div class="talent-card-head">
        <div>
          <span class="person-name">${esc(item.name)}</span>
          <span class="tag">${esc(item.workType)}</span>
          <span class="muted">${esc(item.gender)} / ${esc(item.age)} / ${esc(schoolLine(item))}</span>
        </div>
        <div>
          <span class="tag ${gradeClass(item.grade)}">${esc(item.grade)}</span>
          <span class="score">${jdScore(item)}分</span>
          <div class="muted">投递岗位：${esc(item.role)} / ${esc(stageLabel(item))}</div>
        </div>
        <div class="talent-actions">
          <button class="primary" data-action="nextRound" data-id="${item.id}" ${item.interviewStage === "已入职" ? "disabled" : ""}>
            ${item.interviewStage === "待面试" ? "排一面" : item.interviewStage === "一面" ? "排二面" : "更新面试"}
          </button>
        </div>
      </div>
      <div class="talent-card-body">
        <div>
          <div class="summary">${esc(item.summary)}</div>
          <div class="tag-row">${item.skills.map((skill) => `<span class="tag">${esc(skill)}</span>`).join("")}</div>
          <p class="muted">可转岗：${esc(item.altRoles.join("、") || "暂无")} / 上传：${esc(item.uploadedAt)}</p>
          <div class="interview-record">
            ${interviewRecords(item).map((record) => `
              <div class="record-line">${esc(record.round)} · ${esc(record.interviewer)} · ${esc(record.date)} · ${record.done ? "已完成" : "待进行"}</div>
            `).join("") || `<div class="record-line">面试记录：待安排</div>`}
          </div>
        </div>
        <details class="edit-drawer">
          <summary>编辑岗位、状态、面试官和备注</summary>
          <div class="talent-controls">
            <label>
              <span class="mini-label">人才等级</span>
              <select data-action="grade" data-id="${item.id}">
                ${grades.map((grade) => `<option ${item.grade === grade ? "selected" : ""}>${grade}</option>`).join("")}
              </select>
            </label>
            <label>
              <span class="mini-label">适合岗位</span>
              <select data-action="role" data-id="${item.id}">
                ${roles.map((role) => `<option ${item.role === role ? "selected" : ""}>${role}</option>`).join("")}
              </select>
            </label>
            <label>
              <span class="mini-label">实习/正职</span>
              <select data-action="workType" data-id="${item.id}">
                ${workTypes.map((type) => `<option ${item.workType === type ? "selected" : ""}>${type}</option>`).join("")}
              </select>
            </label>
            <label>
              <span class="mini-label">面试状态</span>
              <select data-action="stage" data-id="${item.id}">
                ${interviewStages.map((stage) => `<option ${item.interviewStage === stage ? "selected" : ""}>${stage}</option>`).join("")}
              </select>
            </label>
            <label>
              <span class="mini-label">一面面试官</span>
              <select data-action="firstInterviewer" data-id="${item.id}">
                ${interviewers.map((name) => `<option ${item.firstInterviewer === name ? "selected" : ""}>${name}</option>`).join("")}
              </select>
            </label>
            <label>
              <span class="mini-label">一面时间</span>
              <input data-action="firstInterviewAt" data-id="${item.id}" type="date" value="${esc(item.firstInterviewAt || "")}" />
            </label>
            <label>
              <span class="mini-label">二面面试官</span>
              <select data-action="secondInterviewer" data-id="${item.id}">
                ${interviewers.map((name) => `<option ${item.secondInterviewer === name ? "selected" : ""}>${name}</option>`).join("")}
              </select>
            </label>
            <label>
              <span class="mini-label">二面时间</span>
              <input data-action="secondInterviewAt" data-id="${item.id}" type="date" value="${esc(item.secondInterviewAt || "")}" />
            </label>
            <label>
              <span class="mini-label">备注</span>
              <textarea data-action="note" data-id="${item.id}" placeholder="给面试官看的备注">${esc(item.note || "")}</textarea>
            </label>
          </div>
        </details>
      </div>
    </article>
  `).join("") || `<div class="empty-state">没有匹配的人才</div>`;

  document.querySelectorAll("[data-action='grade']").forEach((select) => {
    select.addEventListener("change", () => updateTalent(Number(select.dataset.id), { grade: select.value }));
  });
  document.querySelectorAll("[data-action='role']").forEach((select) => {
    select.addEventListener("change", () => updateTalent(Number(select.dataset.id), { role: select.value }));
  });
  document.querySelectorAll("[data-action='workType']").forEach((select) => {
    select.addEventListener("change", () => updateTalent(Number(select.dataset.id), { workType: select.value }));
  });
  document.querySelectorAll("[data-action='stage']").forEach((select) => {
    select.addEventListener("change", () => setInterviewStage(Number(select.dataset.id), select.value));
  });
  document.querySelectorAll("[data-action='note']").forEach((textarea) => {
    textarea.addEventListener("change", () => updateTalent(Number(textarea.dataset.id), { note: textarea.value }));
  });
  ["firstInterviewer", "secondInterviewer", "firstInterviewAt", "secondInterviewAt"].forEach((action) => {
    document.querySelectorAll(`[data-action='${action}']`).forEach((input) => {
      input.addEventListener("change", () => updateTalent(Number(input.dataset.id), { [action]: input.value }));
    });
  });
  document.querySelectorAll("[data-action='nextRound']").forEach((button) => {
    button.addEventListener("click", () => scheduleNextRound(Number(button.dataset.id)));
  });
}

function renderRanking() {
  const jd = activeJd();
  const ranked = [...talents]
    .map((item) => ({ ...item, jdScore: jdScore(item, jd) }))
    .sort((a, b) => b.jdScore - a.jdScore)
    .slice(0, 6);

  $("#rankList").innerHTML = ranked.map((item, index) => `
    <div class="rank-item">
      <span class="rank-num">${index + 1}</span>
      <div>
        <strong>${esc(item.name)}</strong>
        <div class="muted">${esc(item.grade)} / ${esc(item.workType)} / 主岗位：${esc(item.role)} / 可转岗：${esc(item.altRoles.join("、") || "暂无")}</div>
      </div>
      <span class="score">${item.jdScore}分</span>
    </div>
  `).join("");
}

function renderPipeline() {
  $("#openRoleCount").textContent = `${roles.length}个岗位招聘中`;
  $("#positionSummary").innerHTML = roles.map((role) => {
    const pool = talents.filter((item) => roleMatches(item, role));
    const sCount = pool.filter((item) => item.grade === "S级").length;
    const interviewCount = pool.filter((item) => item.interviewStage !== "待面试").length;
    const hiredCount = pool.filter((item) => item.interviewStage === "已入职").length;
    return `
      <button class="position-card ${activePipelineRole === role ? "active" : ""}" data-pipeline-role="${esc(role)}">
        <strong>${esc(role)}</strong>
        <span>${pool.length}人 / S级 ${sCount} / 面试 ${interviewCount} / 入职 ${hiredCount}</span>
      </button>
    `;
  }).join("");

  const rolePool = talents.filter((item) => roleMatches(item, activePipelineRole));
  const columns = [
    ["待面试", rolePool.filter((item) => item.interviewStage === "待面试")],
    ["一面", rolePool.filter((item) => item.interviewStage === "一面")],
    ["二面", rolePool.filter((item) => item.interviewStage === "二面")],
    ["已入职", rolePool.filter((item) => item.interviewStage === "已入职")],
  ];

  $("#pipelineBoard").innerHTML = columns.map(([title, items]) => `
    <div class="pipeline-column">
      <h3>${title}<span class="tag">${items.length}</span></h3>
      ${items.map((item) => `
        <div class="pipeline-person">
          <strong>${esc(item.name)}</strong>
          <span class="muted">${esc(item.grade)} / ${esc(stageLabel(item))} / ${esc(schoolLine(item))}</span>
        </div>
      `).join("") || `<div class="muted">暂无候选人</div>`}
    </div>
  `).join("");

  document.querySelectorAll("[data-pipeline-role]").forEach((button) => {
    button.addEventListener("click", () => {
      activePipelineRole = button.dataset.pipelineRole;
      $("#pipelineRoleSelect").value = activePipelineRole;
      $("#jdSelect").value = activePipelineRole;
      $("#roleFilter").value = activePipelineRole;
      $("#applyRoleSelect").value = activePipelineRole;
      renderJdEditor();
      renderAll();
    });
  });
}

function renderJdEditor() {
  $("#jdEditor").value = jdText(activeJd());
}

function renderRecommendedJds() {
  const roleScores = roles
    .map((role) => ({
      role,
      count: talents.filter((item) => roleMatches(item, role)).length,
      sCount: talents.filter((item) => roleMatches(item, role) && item.grade === "S级").length,
    }))
    .sort((a, b) => b.sCount - a.sCount || b.count - a.count);

  $("#recommendedJdList").innerHTML = roleScores.map((item) => `
    <button class="recommended-jd-card" data-recommend-role="${esc(item.role)}">
      <strong>${esc(item.role)}</strong>
      <span class="muted">${item.count}人匹配 / S级 ${item.sCount}</span>
    </button>
  `).join("");

  document.querySelectorAll("[data-recommend-role]").forEach((button) => {
    button.addEventListener("click", () => {
      $("#jdSelect").value = button.dataset.recommendRole;
      renderJdEditor();
      renderRanking();
      renderTalents();
      toast("已切换到推荐JD");
    });
  });
}

function renderInterviewers() {
  const completed = talents.flatMap((item) => interviewRecords(item).filter((record) => record.done));
  $("#interviewerBoard").innerHTML = interviewers.map((name) => {
    const records = completed.filter((record) => record.interviewer === name);
    const byMonth = records.reduce((acc, record) => {
      const [year, month] = record.date.split("-");
      const key = `${year}年${Number(month)}月`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const tooltip = Object.keys(byMonth).length
      ? Object.entries(byMonth).map(([key, count]) => `${key}：${count}次`).join("\n")
      : "暂无已完成面试";
    return `
      <div class="interviewer-card" data-tooltip="${esc(`${name}\n${tooltip}`)}">
        <strong>${esc(name)}</strong>
        <span class="score">${records.length}次</span>
        <div class="muted">累计已完成面试</div>
      </div>
    `;
  }).join("");
}

function renderCalendar() {
  const year = today.getFullYear();
  const month = today.getMonth();
  $("#calendarTitle").textContent = `${year}年${month + 1}月`;

  const first = new Date(year, month, 1);
  const firstWeekDay = first.getDay() || 7;
  const start = new Date(first.getTime() - (firstWeekDay - 1) * dayMs);
  const cells = Array.from({ length: 42 }, (_, index) => new Date(start.getTime() + index * dayMs));
  const weekday = ["一", "二", "三", "四", "五", "六", "日"];

  $("#calendarGrid").innerHTML = weekday.map((day) => `<div class="day"><strong>周${day}</strong></div>`).join("")
    + cells.map((date) => {
      const dateKey = formatDate(date);
      const events = [];
      talents.forEach((item) => {
        if (item.firstInterviewAt === dateKey) events.push(`<span class="event interview">一面 ${esc(item.name)}</span>`);
        if (item.secondInterviewAt === dateKey) events.push(`<span class="event interview">二面 ${esc(item.name)}</span>`);
        if (item.followAt === dateKey && item.interviewStage !== "已入职") events.push(`<span class="event">跟进 ${esc(item.name)}</span>`);
        if (item.hiredAt === dateKey) events.push(`<span class="event hire">入职 ${esc(item.name)}</span>`);
      });
      return `
        <div class="day ${date.getMonth() === month ? "" : "outside"}">
          <strong>${date.getDate()}</strong>
          ${events.join("")}
        </div>
      `;
    }).join("");
}

function updateTalent(id, patch) {
  talents = talents.map((item) => item.id === id ? { ...item, ...patch } : item);
  renderAll();
  toast("已记录人工调整，正式版会写入操作日志");
}

function setInterviewStage(id, stage) {
  const current = talents.find((item) => item.id === id);
  const patch = { interviewStage: stage, interview: true, followAt: current?.followAt || offsetDate(3) };

  if (stage === "一面") {
    patch.firstInterviewAt = current?.firstInterviewAt || offsetDate(1);
    patch.interviewAt = patch.firstInterviewAt;
  }

  if (stage === "二面") {
    patch.firstInterviewAt = current?.firstInterviewAt || offsetDate(-1);
    patch.secondInterviewAt = current?.secondInterviewAt || offsetDate(1);
    patch.interviewAt = patch.secondInterviewAt;
  }

  if (stage === "已入职") {
    patch.hiredAt = offsetDate(0);
    patch.hiredRole = current?.role || "";
  } else {
    patch.hiredAt = "";
    patch.hiredRole = "";
  }

  updateTalent(id, patch);
}

function scheduleNextRound(id) {
  const current = talents.find((item) => item.id === id);
  if (!current) return;
  if (current.interviewStage === "待面试") {
    updateTalent(id, {
      interviewStage: "一面",
      interview: true,
      firstInterviewAt: current.firstInterviewAt || offsetDate(1),
      firstInterviewer: current.firstInterviewer || interviewers[0],
      interviewAt: current.firstInterviewAt || offsetDate(1),
      followAt: offsetDate(3),
    });
    toast("已安排一面");
    return;
  }
  if (current.interviewStage === "一面") {
    updateTalent(id, {
      interviewStage: "二面",
      secondInterviewAt: current.secondInterviewAt || offsetDate(2),
      secondInterviewer: current.secondInterviewer || interviewers[1],
      interviewAt: current.secondInterviewAt || offsetDate(2),
      followAt: offsetDate(5),
    });
    toast("已安排二面");
    return;
  }
  toast("可在编辑区更新面试状态");
}

function ingestTalents(source) {
  const applyRole = $("#applyRoleSelect")?.value || roles[0];
  const samples = [
    {
      name: "周景澄",
      gender: "男",
      age: 28,
      phone: "136****1820",
      email: "zhoujc@example.com",
      bachelor: "哈尔滨工业大学",
      master: "新加坡国立大学",
      skills: ["Agent", "多模态"],
      grade: "S级",
      role: applyRole,
      altRoles: ["多模态算法"],
      score: 92,
      workType: "正职",
      summary: "Agent 工程落地强，具备多模态应用经验，适合进入技术面。",
      reason: "Agent 工程落地强，具备多模态应用经验。",
    },
    {
      name: "许蔚",
      gender: "女",
      age: 22,
      phone: "187****5031",
      email: "xuwei@example.com",
      bachelor: "武汉大学",
      master: "上海科技大学",
      skills: ["CV", "3D"],
      grade: "A级",
      role: applyRole,
      altRoles: ["3D算法"],
      score: 84,
      workType: "实习",
      summary: "仍在读，CV 研究经历较扎实，3D 项目需要面试确认深度。",
      reason: "CV 研究经历扎实，3D 项目待确认。",
    },
  ];

  const firstId = nextId();
  const newItems = samples.map((sample, index) => ({
    id: firstId + index,
    ...sample,
    source,
    uploadedAt: offsetDate(0),
    interview: true,
    interviewStage: "待面试",
    firstInterviewer: interviewers[index % interviewers.length],
    secondInterviewer: interviewers[(index + 1) % interviewers.length],
    firstInterviewAt: "",
    secondInterviewAt: "",
    interviewAt: "",
    followAt: "",
    note: "OCR 已识别，等待人工确认。",
  }));

  talents = [...newItems, ...talents];
  renderQueue(newItems, source);
  renderAll();
  toast(`已入库 ${newItems.length} 份简历，状态为待面试`);
}

function renderQueue(items, source) {
  if (!items.length) {
    $("#queue").innerHTML = `
      <div class="queue-item">
        <strong>等待上传</strong>
        <span class="tag">未开始</span>
      </div>
    `;
    return;
  }

  $("#queue").innerHTML = items.map((item) => `
    <div class="queue-item">
      <strong>${esc(item.name)} 简历</strong>
      <span class="tag ${gradeClass(item.grade)}">${esc(item.grade)}</span>
      <small>${esc(item.role)} · 待面试</small>
    </div>
  `).join("");
}

function renderAll() {
  renderStats();
  renderPipeline();
  renderTalents();
  renderRanking();
  renderRecommendedJds();
  renderCalendar();
  renderInterviewers();
}

function initControls() {
  const roleOptions = roles.map((role) => `<option>${role}</option>`).join("");
  $("#jdSelect").innerHTML = roleOptions;
  $("#pipelineRoleSelect").innerHTML = roleOptions;
  $("#applyRoleSelect").innerHTML = roleOptions;
  $("#jdSelect").value = activePipelineRole;
  $("#pipelineRoleSelect").value = activePipelineRole;
  $("#applyRoleSelect").value = activePipelineRole;
  renderJdEditor();
}

function bindEvents() {
  ["searchInput", "workTypeFilter", "gradeFilter", "roleFilter", "interviewFilter"].forEach((id) => {
    $(`#${id}`).addEventListener("input", renderTalents);
  });
  $("#jdSelect").addEventListener("input", () => {
    renderJdEditor();
    $("#jdHint").textContent = "可直接编辑当前岗位 JD。";
    renderRanking();
    renderTalents();
  });
  $("#pipelineRoleSelect").addEventListener("input", () => {
    activePipelineRole = $("#pipelineRoleSelect").value;
    $("#jdSelect").value = activePipelineRole;
    $("#roleFilter").value = activePipelineRole;
    $("#applyRoleSelect").value = activePipelineRole;
    renderJdEditor();
    $("#jdHint").textContent = "可直接编辑当前岗位 JD。";
    renderAll();
  });
  $("#saveJdBtn").addEventListener("click", () => {
    jdLibrary[activeJd()] = $("#jdEditor").value.trim();
    renderRanking();
    renderTalents();
    $("#jdHint").textContent = "已保存，推荐结果已更新。";
    toast("JD已保存，并基于新JD重新推荐");
  });
  $("#jdEditor").addEventListener("input", () => {
    $("#jdHint").textContent = "正在编辑 JD，保存后会重新推荐。";
  });
  $("#jdInput").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const isText = /\.(txt|md)$/i.test(file.name);
    if (!isText) {
      $("#jdEditor").value = `${jdText()}\n\n[已上传 ${file.name}，正式版会在后端解析 PDF/Word JD 后写入这里。]`;
      toast("已接收JD文件，正式版会解析PDF/Word内容");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      $("#jdEditor").value = String(reader.result || "");
      toast("JD文本已载入，可编辑后保存");
    };
    reader.readAsText(file, "utf-8");
  });
  $("#mockUploadBtn").addEventListener("click", () => ingestTalents("本地批量上传"));
  $("#resumeInput").addEventListener("change", (event) => {
    const count = event.target.files.length;
    ingestTalents(count ? `本地上传 ${count} 份文件` : "本地批量上传");
  });
  $("#syncBtn").addEventListener("click", () => toast("正式版这里会把人才库和面试记录同步到飞书多维表格"));

  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

initControls();
bindEvents();
renderQueue([], "等待上传");
renderAll();
