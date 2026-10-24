const WIDTH = 1080;
const HEIGHT = 1920;
const MARGIN = 100;
const FONT_FAMILY = "system-ui, -apple-system, 'Segoe UI', sans-serif";
const QR_SIZE = 460;

export interface ShareImageContent {
  heading: string;
  progressLabel: string;
  scan: string;
  done: number;
  total: number;
  qrDataUrl: string;
}

function loadImage(source: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Immagine non caricabile"));
    image.src = source;
  });
}

function drawFittedText(
  context: CanvasRenderingContext2D,
  text: string,
  y: number,
  size: number,
  weight: "400" | "700",
) {
  const maxWidth = WIDTH - MARGIN * 2;
  let fontSize = size;
  context.font = `${weight} ${fontSize}px ${FONT_FAMILY}`;
  while (context.measureText(text).width > maxWidth && fontSize > 24) {
    fontSize -= 2;
    context.font = `${weight} ${fontSize}px ${FONT_FAMILY}`;
  }
  context.fillText(text, WIDTH / 2, y);
}

export async function renderShareImage(content: ShareImageContent): Promise<Blob> {
  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas non disponibile");

  const qr = await loadImage(content.qrDataUrl);
  const ratio = content.total > 0 ? content.done / content.total : 0;
  const barWidth = WIDTH - MARGIN * 2;

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, WIDTH, HEIGHT);

  context.fillStyle = "#000000";
  context.textAlign = "center";
  context.textBaseline = "alphabetic";

  drawFittedText(context, "Marvel Planner", 420, 72, "700");
  drawFittedText(context, content.heading, 520, 52, "400");
  drawFittedText(context, `${Math.round(ratio * 100)}%`, 900, 260, "700");

  context.strokeStyle = "#000000";
  context.lineWidth = 4;
  context.strokeRect(MARGIN, 980, barWidth, 48);
  context.fillRect(MARGIN, 980, barWidth * ratio, 48);

  drawFittedText(
    context,
    `${content.progressLabel}: ${content.done} / ${content.total}`,
    1120,
    52,
    "400",
  );

  context.drawImage(qr, (WIDTH - QR_SIZE) / 2, 1250, QR_SIZE, QR_SIZE);
  drawFittedText(context, content.scan, 1760, 40, "400");

  return new Promise((resolve, reject) =>
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("Immagine non generata"))),
      "image/png",
    ),
  );
}
