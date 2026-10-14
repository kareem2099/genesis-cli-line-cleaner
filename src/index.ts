export default async function run(input) {
  const text = input.text ?? '';
  if (text === '') {
    return { cleanedText: '', removedLines: 0 };
  }
  const normalized = text.replace(/\r\n/g, '\n');
  const lines = normalized.split('\n');
  const keptLines = lines.filter((line) => line.trim() !== '');
  const removedLines = lines.length - keptLines.length;
  const cleanedText = keptLines.join('\n');
  return { cleanedText, removedLines };
}