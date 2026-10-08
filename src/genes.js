export const GENE_KEYS = [
  { key: "speed", label: "速度", color: "#5b8def" },
  { key: "forage", label: "觅食", color: "#34c759" },
  { key: "build", label: "筑巢", color: "#f0b429" },
  { key: "social", label: "社交", color: "#bf5af2" },
  { key: "brave", label: "勇敢", color: "#ff7b72" },
  { key: "thrift", label: "节食", color: "#64d2ff" },
  { key: "fertility", label: "生育", color: "#ff9f0a" },
  { key: "vision", label: "视力", color: "#ac8e68" },
];

export function clamp01(v) {
  return Math.max(0.05, Math.min(0.98, v));
}

export function randomGenes(bias = {}) {
  const genes = {};
  for (const g of GENE_KEYS) {
    const base = bias[g.key] ?? 0.45 + Math.random() * 0.25;
    genes[g.key] = clamp01(base + (Math.random() - 0.5) * 0.2);
  }
  return genes;
}

export function crossover(a, b, mutationRate = 0.12) {
  const child = {};
  for (const g of GENE_KEYS) {
    const mix = Math.random() < 0.5 ? a[g.key] : b[g.key];
    const blended = mix * 0.7 + ((a[g.key] + b[g.key]) / 2) * 0.3;
    let value = blended;
    if (Math.random() < mutationRate) {
      value += (Math.random() - 0.5) * 0.35;
    }
    child[g.key] = clamp01(value);
  }
  return child;
}

export function averageGenes(agents) {
  const avg = {};
  for (const g of GENE_KEYS) avg[g.key] = 0;
  if (!agents.length) return avg;
  for (const agent of agents) {
    for (const g of GENE_KEYS) avg[g.key] += agent.genes[g.key];
  }
  for (const g of GENE_KEYS) avg[g.key] /= agents.length;
  return avg;
}

export function geneColor(genes) {
  // Map personality to body tint: forage->green, brave->red, social->purple, build->amber
  const r = Math.floor(80 + genes.brave * 140 + genes.fertility * 40);
  const g = Math.floor(70 + genes.forage * 140 + genes.thrift * 30);
  const b = Math.floor(90 + genes.social * 130 + genes.vision * 20);
  return (Math.min(255, r) << 16) | (Math.min(255, g) << 8) | Math.min(255, b);
}
