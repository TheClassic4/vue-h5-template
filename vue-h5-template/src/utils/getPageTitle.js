import defaultSettings from '@/settings';

const title = defaultSettings.title || 'Vue Vant Mobile';

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
