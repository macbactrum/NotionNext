import enUS from './lang/en-US'
import viVN from './lang/vi-VN'
import cookie from 'react-cookies'
import { getQueryVariable, isBrowser, mergeDeep } from './utils'

/**
 * CHỈ HỖ TRỢ TIẾNG VIỆT VÀ TIẾNG ANH
 */
const lang = {
  'vi-VN': viVN,
  'en-US': enUS
}

export default lang

/**
 * Lấy từ điển ngôn ngữ - Mặc định Tiếng Việt
 */
export function generateLocaleDict(langString) {
  const supportedLocales = Object.keys(lang)
  let userLocale

  const [language, region] = langString.split(/[-_]/)

  const specificLocale = `${language}-${region}`
  if (supportedLocales.includes(specificLocale)) {
    userLocale = lang[specificLocale]
  }

  if (!userLocale) {
    const languageOnlyLocales = supportedLocales.filter(locale => locale.startsWith(language))
    if (languageOnlyLocales.length > 0) {
      userLocale = lang[languageOnlyLocales[0]]
    }
  }

  // Mặc định: Tiếng Việt
  if (!userLocale) {
    userLocale = lang['vi-VN']
  }

  return mergeDeep({}, lang['vi-VN'], userLocale)
}

/**
 * Khởi tạo ngôn ngữ - Mặc định Tiếng Việt
 */
export function initLocale(lang, locale, changeLang, changeLocale) {
  if (isBrowser) {
    const queryLang = getQueryVariable('lang') || loadLangFromCookies() || 'vi-VN'
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

export const loadLangFromCookies = () => {
  return cookie.load('lang')
}

export const saveLangToCookies = (lang) => {
  cookie.save('lang', lang, { path: '/' })
}
