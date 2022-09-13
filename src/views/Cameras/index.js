import { useDispatch, useSelector } from "react-redux"
import AddNewForm from "./AddNewForm"
import SearchInput from "../../components/SearchInput"
import Table from "../../components/Table"
import { AddButtonCircle } from "../../components/Buttons"
import Modal from "../../components/Modal"
import actions from "../../state/actions"
import Toast from "../../components/Toast"
import columns, { width, height } from "./columns"
import { isNotEmpty } from "ramda-adjunct"
import scheme, { schemeIndividual } from "./scheme"
import { Typography, Box } from "@mui/material"
import { useTranslation } from "react-i18next"

const CameraTypeForm = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const state = useSelector(state => state.camera)
  const { dataFiltered, data, query, isOpenModal } = state
  const { filterCameraAction, editCameraAction, deleteCameraAction, toggleCameraModalAction } = actions.camera

  const handleToggleModal = () => {
    dispatch(toggleCameraModalAction())
  }

  const handleOnChangeSearchInput = ({ target }) => {
    const searched = target.value
    dispatch(filterCameraAction(searched))
  }

  const updateCamera = (rowIndex, columnId, value) => {
    dispatch(editCameraAction({ rowIndex, columnId, value }))
    Toast(t("successUpdate"), "success")
  }

  const deleteCameraType = id => {
    dispatch(deleteCameraAction(id))
    Toast(t("successDelete"), "success")
  }

  const conditionalData = isNotEmpty(query) ? dataFiltered : data
  return (
    <Box sx={{ mt: "64px" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant={"h5"}>{t("cameras")}</Typography>
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <SearchInput handleOnChange={handleOnChangeSearchInput} />
        <AddButtonCircle onClick={handleToggleModal} />
      </Box>
      <Modal isOpen={isOpenModal} handleClose={handleToggleModal} title={t("titleNewCamera")}>
        <AddNewForm />
      </Modal>

      <Table
        data={conditionalData}
        updateItem={updateCamera}
        deleteItem={deleteCameraType}
        columnList={columns}
        width={width}
        height={height}
        scheme={scheme}
        schemeIndividual={schemeIndividual}
      />
    </Box>
  )
}

export default CameraTypeForm
