import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'
import zhHK from './lang/zh-HK'
import zhTW from './lang/zh-TW'
import frFR from './lang/fr-FR'
import trTR from './lang/tr-TR'
import jaJP from './lang/ja-JP'
import viVN from './lang/vi-VN'
import cookie from 'react-cookies'
import { getQueryVariable, isBrowser, mergeDeep } from './utils'

/**
 * Cấu hình tất cả các ngôn ngữ được hỗ trợ
 * Quốc gia-Khu vực
 */
const lang = {
  'en-US': enUS,
  'zh-CN': zhCN,
  'zh-HK': zhHK,
  'zh-TW': zhTW,
  'fr-FR': frFR,
  'tr-TR': trTR,
  'ja-JP': jaJP,
  'vi-VN': viVN
}

export default lang

/**
 * 获取当前语言字典
 * 如果匹配到完整的“国家-地区”语言，则显示国家的语言
 * @returns 不同语言对应字典
 */
export function generateLocaleDict(langString) {
  const supportedLocales = Object.keys(lang)
  let userLocale

  // Tách chuỗi ngôn ngữ thành mã ngôn ngữ và khu vực, ví dụ: tách "zh-CN" thành "zh" và "CN"
  const [language, region] = langString.split(/[-_]/)

  // Ưu tiên khớp trường hợp cả ngôn ngữ và khu vực đều khớp
  const specificLocale = `${language}-${region}`
  if (supportedLocales.includes(specificLocale)) {
    userLocale = lang[specificLocale]
  }

  // Sau đó thử khớp trường hợp chỉ có ngôn ngữ khớp
  if (!userLocale) {
    const languageOnlyLocales = supportedLocales.filter(locale => locale.startsWith(language))
    if (languageOnlyLocales.length > 0) {
      userLocale = lang[languageOnlyLocales[0]]
    }
  }

  // Nếu vẫn chưa khớp, trả về gói ngôn ngữ gần nhất
  if (!userLocale) {
    const fallbackLocale = supportedLocales.find(locale => locale.startsWith('en'))
    userLocale = lang[fallbackLocale]
  }

  return mergeDeep({}, lang['en-US'], userLocale)
}

/**
 * Khởi tạo bản dịch trang web
 * Chuyển đổi dựa trên ngôn ngữ trình duyệt hiện tại của người dùng
 */
export function initLocale(lang, locale, changeLang, changeLocale) {
  if (isBrowser) {
    const queryLang = getQueryVariable('lang') || loadLangFromCookies() || window.navigator.language
    let currentLang = lang
    if (queryLang !== lang) {
      currentLang = queryLang
    }
    changeLang(currentLang)
    saveLangToCookies(currentLang)

    const targetLocale = generateLocaleDict(currentLang)
    if (JSON.stringify(locale) !== JSON.stringify(currentLang)) {
      changeLocale(targetLocale)
    }
  }
}
/**
 * Đọc ngôn ngữ
 * @returns {*}
 */
export const loadLangFromCookies = () => {
  return cookie.load('lang')
}

/**
     * Lưu ngôn ngữ
     * @param lang
     */
export const saveLangToCookies = (lang) => {
  cookie.save('lang', lang, { path: '/' })
}
