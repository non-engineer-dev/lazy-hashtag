import { hashtags } from './constants';

function copyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);

  textArea.select();

  try {
    document.execCommand('copy');
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Unable to copy text to clipboard: ', err);
  }

  document.body.removeChild(textArea);
}

function generateHashtags(form) {
  const { title, year, device, category } = form;
  let text = `${title} • ${year}\n\n${device}\n\n${hashtags.common} ${hashtags.category[category]} ${hashtags.device[device]} ${hashtags.channels}`;
  return text;
}

export { generateHashtags, copyToClipboard };
