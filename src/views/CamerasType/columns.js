import React from "react"
import BoxHeader from "../../components/Table/BoxHeader"
import EditableCell from "../../components/Table/EditableCell"
import DeleteColumn from "../../components/Table/DeleteColumn"
import TypographyCell from "../../components/Table/TypographyCell"
import i18next from "i18next"
export const width = window.innerWidth - 200
export const height = window.innerHeight - 250

const columns = [
  {
    Header: <BoxHeader text={"Id"} />,
    accessor: "id",
    width: width / 4,
    Cell: TypographyCell,
  },
  {
    Header: <BoxHeader text={i18next.t("cameras")} />,
    accessor: "name",
    width: width / 4,
    Cell: EditableCell,
  },
  {
    Header: <BoxHeader text={i18next.t("description")} />,
    accessor: "description",
    width: width / 4,
    Cell: EditableCell,
  },
  {
    Header: "",
    accessor: "actions",
    width: width / 4,
    Cell: DeleteColumn,
  },
]

export default columns
