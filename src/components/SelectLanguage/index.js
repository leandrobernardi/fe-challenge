import React, { useState } from "react"
import { styled } from "@mui/material/styles"
import ReactFlagsSelect from "react-flags-select"
import Toast from "../Toast"
import { useTranslation } from "react-i18next"

const CssReactFlagsSelect = styled(ReactFlagsSelect)({
  "& ul": {
    background: "#0074b5",
    borderColor: "#0074b5",
    border: "0",
  },
})

export default function ClippedDrawer({ children }) {
  const { t } = useTranslation()
  const [valueCurrentLanguage, setValueCurrentLanguage] = useState("ES")

  const handleChangeLanguage = code => {
    Toast(t("featureToDevelop"), "error")
    setValueCurrentLanguage(code)
  }

  return (
    <CssReactFlagsSelect
      showOptionLabel={false}
      showSelectedLabel={false}
      selected={valueCurrentLanguage}
      onSelect={handleChangeLanguage}
      countries={["US", "ES", "PT"]}
    />
  )
}
