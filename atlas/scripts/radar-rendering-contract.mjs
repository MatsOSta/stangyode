const fail = (message) => { throw new Error(message); };

export const validateHtmlRadarAudit = (html, audit) => {
  for (const token of ['id="radar-audit"', `data-audit-state="${audit.dataStatus}"`, audit.asOf]) {
    if (!html.includes(token)) fail(`Missing rendered Radar audit token ${token}`);
  }
  for (const run of Object.values(audit.runs)) {
    if (!html.includes(run.lastSuccessfulRunAt)) fail(`Missing rendered Radar run ${run.lastSuccessfulRunAt}`);
  }
  for (const sensor of audit.sensors) {
    const fragment = `<li><strong>${sensor.id}</strong><span class="status status-${sensor.state}">`;
    if (!html.includes(fragment)) fail(`Missing rendered Radar sensor ${sensor.id}:${sensor.state}`);
  }
};

export const validateMarkdownRadarAudit = (markdown, audit) => {
  for (const token of ['## Radar health / レーダー健全性', audit.asOf]) {
    if (!markdown.includes(token)) fail(`Missing briefing Radar audit token ${token}`);
  }
  for (const run of Object.values(audit.runs)) {
    if (!markdown.includes(`last success ${run.lastSuccessfulRunAt}`)) {
      fail(`Missing briefing Radar run ${run.lastSuccessfulRunAt}`);
    }
  }
  for (const sensor of audit.sensors) {
    const fragment = `- ${sensor.id}: ${sensor.state.toUpperCase()}`;
    if (!markdown.includes(fragment)) fail(`Missing briefing Radar sensor ${sensor.id}: ${sensor.state.toUpperCase()}`);
  }
};
