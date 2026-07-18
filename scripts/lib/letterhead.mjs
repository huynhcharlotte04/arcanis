// En-tête commun aux packs documentaires Montrel Industries.
//
// Ce module centralise la charte des PDF de la plateforme : emblème Montrel,
// bandeau « MONTREL INDUSTRIES », filet doré, pied de page et rendu des blocs
// de contenu. Il est utilisé par les générateurs de chaque module afin que les
// trois simulations partagent exactement le même habillage.
//
// Prérequis : pdfkit doit être résolvable (lien symbolique ou installation).

import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";

export const GOLD = "#A9862F";
export const INK = "#1a1712";
export const MUTED = "#5b5344";
export const RULE = "#c9b787";
export const M = 56; // marge

const PAGE_W = 595.28;
export const contentW = () => PAGE_W - M * 2;

// Date de création fixe : rend la génération déterministe (mêmes octets à
// contenu identique), ce qui évite des diffs parasites sur les PDF versionnés.
const FIXED_DATE = new Date(Date.UTC(2024, 0, 1, 0, 0, 0));

// -- Emblème Montrel (monogramme M dans un hexagone), dessiné en vectoriel --
export function drawEmblem(doc, x, y, size, color = GOLD) {
  const s = size / 48;
  doc.save();
  doc.translate(x, y).scale(s);
  doc.lineJoin("round").lineCap("round").strokeColor(color);
  doc
    .strokeOpacity(0.5)
    .lineWidth(1.4)
    .polygon([24, 3], [41.2, 13.5], [41.2, 34.5], [24, 45], [6.8, 34.5], [6.8, 13.5])
    .stroke();
  doc.strokeOpacity(1).lineWidth(2).path("M15 33 L15 16 L24 26 L33 16 L33 33").stroke();
  doc.fillColor(color).fillOpacity(1).circle(24, 38.5, 1.3).fill();
  doc.restore();
  doc.strokeOpacity(1).fillOpacity(1);
}

function header(doc, ref, subtitle) {
  drawEmblem(doc, M, 40, 30);
  doc
    .fillColor(INK)
    .font("Helvetica-Bold")
    .fontSize(10)
    .text("MONTREL INDUSTRIES", M + 40, 44, { characterSpacing: 1.5 });
  doc
    .fillColor(MUTED)
    .font("Helvetica")
    .fontSize(8)
    .text(subtitle, M + 40, 57);
  doc
    .fillColor(GOLD)
    .font("Helvetica-Bold")
    .fontSize(9)
    .text(ref, PAGE_W - M - 140, 48, { width: 140, align: "right" });
  doc
    .strokeColor(RULE)
    .lineWidth(1)
    .moveTo(M, 78)
    .lineTo(PAGE_W - M, 78)
    .stroke();
  doc.x = M;
  doc.y = 96;
}

function footer(doc, ref, page, total) {
  doc.page.margins.bottom = 0; // évite une pagination auto en écrivant en bas de page
  doc
    .fillColor("#9a9385")
    .font("Helvetica")
    .fontSize(7.5)
    .text(
      `${ref} — Document interne Montrel Industries — Usage simulation ARCANIS`,
      M,
      812,
      { width: contentW() - 60, lineBreak: false }
    );
  doc.text(`Page ${page} / ${total}`, PAGE_W - M - 60, 812, {
    width: 60,
    align: "right",
    lineBreak: false
  });
}

function ensure(doc, need) {
  if (doc.y + need > 790) doc.addPage();
}

function renderTable(doc, { head, rows, widths }) {
  const totalW = contentW();
  const cols = widths.map((w) => (w / widths.reduce((a, c) => a + c, 0)) * totalW);
  const pad = 6;
  const rowHeight = (cells, font, fs) => {
    let h = 0;
    cells.forEach((c, i) => {
      doc.font(font).fontSize(fs);
      h = Math.max(h, doc.heightOfString(String(c), { width: cols[i] - pad * 2 }));
    });
    return h + pad * 2;
  };
  const drawRow = (cells, { fill, font, fs, color }) => {
    const h = rowHeight(cells, font, fs);
    ensure(doc, h + 4);
    const y = doc.y;
    if (fill) doc.rect(M, y, totalW, h).fill(fill);
    let x = M;
    cells.forEach((c, i) => {
      doc.fillColor(color).font(font).fontSize(fs).text(String(c), x + pad, y + pad, { width: cols[i] - pad * 2 });
      x += cols[i];
    });
    doc.strokeColor("#e4ddcd").lineWidth(0.6).rect(M, y, totalW, h).stroke();
    doc.y = y + h;
  };
  if (head) drawRow(head, { fill: "#f3ecda", font: "Helvetica-Bold", fs: 8.5, color: INK });
  rows.forEach((r) => drawRow(r, { font: "Helvetica", fs: 8.5, color: "#333" }));
}

export function renderBlocks(doc, blocks) {
  for (const b of blocks) {
    if (b.h) {
      ensure(doc, 40);
      doc.moveDown(0.6);
      doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(12).text(b.h, M, doc.y, { width: contentW() });
      doc.moveDown(0.35);
    } else if (b.p) {
      ensure(doc, 30);
      doc.fillColor("#222").font("Helvetica").fontSize(10).text(b.p, M, doc.y, { width: contentW(), align: "justify", lineGap: 1.5 });
      doc.moveDown(0.4);
    } else if (b.list) {
      for (const item of b.list) {
        ensure(doc, 24);
        doc.fillColor("#222").font("Helvetica").fontSize(10).text(`•  ${item}`, M + 6, doc.y, { width: contentW() - 6, lineGap: 1.5 });
        doc.moveDown(0.2);
      }
      doc.moveDown(0.3);
    } else if (b.meta) {
      for (const [k, v] of b.meta) {
        ensure(doc, 16);
        const y = doc.y;
        doc.fillColor(MUTED).font("Helvetica-Bold").fontSize(9).text(k, M, y, { width: 175 });
        doc.fillColor("#222").font("Helvetica").fontSize(9).text(v, M + 180, y, { width: contentW() - 180 });
        doc.y = Math.max(doc.y, y + 13);
      }
      doc.moveDown(0.4);
    } else if (b.table) {
      renderTable(doc, b.table);
      doc.moveDown(0.4);
    } else if (b.spacer) {
      doc.moveDown(b.spacer);
    } else if (b.signoff) {
      ensure(doc, 60);
      doc.moveDown(1);
      for (const line of b.signoff) {
        doc.fillColor("#222").font(line.b ? "Helvetica-Bold" : "Helvetica").fontSize(10).text(line.t, M, doc.y, { width: contentW() });
        doc.moveDown(0.15);
      }
    }
  }
}

// Construit un PDF A4 avec l'en-tête commun.
//   outPath        : chemin de sortie
//   ref            : code référence (badge en-tête + pied de page)
//   headerSubtitle : petite ligne sous « MONTREL INDUSTRIES »
//   docTitle       : titre principal (H1) du document
//   blocks         : blocs de contenu (voir renderBlocks)
export function buildDocument({ outPath, ref, headerSubtitle, docTitle, blocks }) {
  const doc = new PDFDocument({ size: "A4", margin: M, bufferPages: true });
  doc.info.CreationDate = FIXED_DATE;
  doc.info.ModDate = FIXED_DATE;
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  doc.pipe(fs.createWriteStream(outPath));
  doc.on("pageAdded", () => header(doc, ref, headerSubtitle));
  header(doc, ref, headerSubtitle);
  doc.fillColor(INK).font("Helvetica-Bold").fontSize(19).text(docTitle, M, doc.y, { width: contentW() });
  doc.moveDown(0.6);
  renderBlocks(doc, blocks);
  const range = doc.bufferedPageRange();
  for (let i = 0; i < range.count; i++) {
    doc.switchToPage(i);
    footer(doc, ref, i + 1, range.count);
  }
  doc.end();
  return new Promise((res) => doc.on("end", res));
}
