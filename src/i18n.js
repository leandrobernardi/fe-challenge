// eslint-disable-next-line react/jsx-filename-extension
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import commonES from "./translations/es/common.json"

const locale = "es"

i18n.use(initReactI18next).init({
  fallbackLng: "es",
  lng: locale,

  ns: ["common"],
  defaultNS: "common",

  debug: true,

  interpolation: {
    escapeValue: false,
  },

  react: {
    wait: true,
    useSuspense: false,
  },

  resources: {
    es: {
      common: commonES,
    },
  },
})

export default i18n
