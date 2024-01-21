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
  const { title, year, device, category, isLightroom, isMonochrome, isMacro } =
    form;

  let text;
  if (title) {
    text = `${title} • ${year}\n\n${device}\n\n${hashtags.common} ${hashtags.category[category]} ${hashtags.device[device]} ${hashtags.india} ${hashtags.world}`;
  } else {
    text = `${hashtags.common} ${hashtags.category[category]} ${hashtags.device[device]} ${hashtags.india} ${hashtags.world}`;
  }
  if (isMonochrome) {
    text += ` ${hashtags.monochrome}`;
  } else {
    text += ` ${hashtags.colored}`;
  }
  if (isLightroom) {
    text += ` ${hashtags.lightroom}`;
  }
  if (isMacro) {
    text += ` ${hashtags.macro}`;
  }
  return text;
}

export { generateHashtags, copyToClipboard };
