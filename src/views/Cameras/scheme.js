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
  location: yup
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
  cameraType: yup.string().nullable(true),
  latitude: yup
    .number()
    .typeError(i18next.t("isRequired"))
    .min(
      -90,
      i18next.t("minNumber", {
        number: "-90",
      })
    )
    .max(
      90,
      i18next.t("maxNumber", {
        number: "90",
      })
    ),
  longitude: yup
    .number()
    .typeError(i18next.t("isRequired"))
    .min(
      -180,
      i18next.t("minNumber", {
        number: "-180",
      })
    )
    .max(
      180,
      i18next.t("maxNumber", {
        number: "180",
      })
    ),
  brand: yup
    .string()
    .min(
      5,
      i18next.t("min", {
        number: "5",
      })
    )
    .max(
      75,
      i18next.t("max", {
        number: "75",
      })
    ),
  model: yup
    .string()
    .min(
      5,
      i18next.t("min", {
        number: "5",
      })
    )
    .max(
      75,
      i18next.t("max", {
        number: "75",
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
  location: yup.object().shape({
    location: yup
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
  cameraType: yup.object().shape({
    cameraType: yup.string().required(i18next.t("isRequired")),
  }),
  latitude: yup.object().shape({
    latitude: yup
      .number()
      .typeError(i18next.t("isRequired"))
      .min(
        -90,
        i18next.t("minNumber", {
          number: "-90",
        })
      )
      .max(
        90,
        i18next.t("maxNumber", {
          number: "90",
        })
      ),
  }),
  longitude: yup.object().shape({
    longitude: yup
      .number()
      .typeError(i18next.t("isRequired"))
      .min(
        -180,
        i18next.t("minNumber", {
          number: "-180",
        })
      )
      .max(
        180,
        i18next.t("maxNumber", {
          number: "180",
        })
      ),
  }),
  brand: yup.object().shape({
    brand: yup
      .string()
      .min(
        5,
        i18next.t("min", {
          number: "5",
        })
      )
      .max(
        75,
        i18next.t("max", {
          number: "75",
        })
      ),
  }),
  model: yup.object().shape({
    model: yup
      .string()
      .min(
        5,
        i18next.t("min", {
          number: "5",
        })
      )
      .max(
        75,
        i18next.t("max", {
          number: "75",
        })
      ),
  }),
}

export default scheme
