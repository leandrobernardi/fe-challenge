import * as yup from "yup"
import "../../i18n"
import i18next from "i18next"

const scheme = yup.object().shape({
  name: yup
    .string()
    .min(
      2,
      i18next.t("min", {
        number: "2",
      })
    )
    .max(
      240,
      i18next.t("max", {
        number: "240",
      })
    ),
  description: yup
    .string()
    .min(
      2,
      i18next.t("min", {
        number: "2",
      })
    )
    .max(
      240,
      i18next.t("max", {
        number: "240",
      })
    ),
})

export const schemeIndividual = {
  name: yup.object().shape({
    name: yup
      .string()
      .min(
        2,
        i18next.t("min", {
          number: "2",
        })
      )
      .max(
        240,
        i18next.t("max", {
          number: "240",
        })
      ),
  }),
  description: yup.object().shape({
    description: yup
      .string()
      .min(
        2,
        i18next.t("min", {
          number: "2",
        })
      )
      .max(
        240,
        i18next.t("max", {
          number: "240",
        })
      ),
  }),
}

export default scheme
