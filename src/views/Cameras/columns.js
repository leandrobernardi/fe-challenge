import React from "react"
import BoxHeader from "../../components/Table/BoxHeader"
import EditableCell from "../../components/Table/EditableCell"
import EditableSelectCell from "../../components/Table/EditableSelectCell"
import TypographyCell from "../../components/Table/TypographyCell"
import DeleteColumn from "../../components/Table/DeleteColumn"
import i18next from "i18next"
export const width = window.innerWidth - 200
export const height = window.innerHeight - 250

const columns = [
  {
    Header: <BoxHeader text={"Id"} />,
    accessor: "id",
    width: width / 9,
    Cell: TypographyCell,
  },
  {
    Header: <BoxHeader text={i18next.t("common:name")} />,
    accessor: "name",
    width: width / 9,
    Cell: EditableCell,
  },
  {
    Header: <BoxHeader text={i18next.t("location")} />,
    accessor: "location",
    width: width / 9,
    Cell: EditableCell,
  },
  {
    Header: <BoxHeader text={i18next.t("cameraType")} />,
    accessor: "cameraType",
    width: width / 9,
    Cell: EditableSelectCell,
  },
  {
    Header: <BoxHeader text={i18next.t("latitude")} />,
    accessor: "latitude",
    width: width / 9,
    Cell: EditableCell,
  },
  {
    Header: <BoxHeader text={i18next.t("longitude")} />,
    accessor: "longitude",
    width: width / 9,
    Cell: EditableCell,
  },
  {
    Header: <BoxHeader text={i18next.t("brand")} />,
    accessor: "brand",
    width: width / 9,
    Cell: EditableCell,
  },
  {
    Header: <BoxHeader text={i18next.t("model")} />,
    accessor: "model",
    width: width / 9,
    Cell: EditableCell,
  },
  {
    Header: "",
    accessor: "actions",
    width: width / 12,
    Cell: DeleteColumn,
  },
]

export default columns
