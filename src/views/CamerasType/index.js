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
import { find, propEq } from "ramda"
import { isUndefined } from "ramda-adjunct"
import { Typography, Box } from "@mui/material"
import { useTranslation } from "react-i18next"

const CameraTypeForm = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const cameraTypeState = useSelector(state => state.cameraType)
  const cameraState = useSelector(state => state.camera)
  const { dataFiltered, data, query, isOpenModal } = cameraTypeState
  const { toggleCameraTypeModalAction, filterCameraTypeAction, editCameraTypeAction, deleteCameraTypeAction } =
    actions.cameraType

  const handleToggleModal = () => {
    dispatch(toggleCameraTypeModalAction())
  }

  const handleOnChangeSearchInput = ({ target }) => {
    const searched = target.value
    dispatch(filterCameraTypeAction(searched))
  }

  const updateCamera = (rowIndex, columnId, value) => {
    dispatch(editCameraTypeAction({ rowIndex, columnId, value }))
    Toast(t("successUpdate"), "success")
  }

  const deleteCameraType = id => {
    const findTypeCameraUsed = find(propEq("cameraType", id), cameraState.data)

    if (isUndefined(findTypeCameraUsed)) {
      dispatch(deleteCameraTypeAction(id))
      Toast(t("successDelete"), "success")
    } else {
      Toast(t("cameraTypeUsed"), "error")
    }
  }

  const conditionalData = isNotEmpty(query) ? dataFiltered : data
  return (
    <Box sx={{ mt: "64px" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant={"h5"}>{t("camerasType")}</Typography>
      </Box>

      <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <SearchInput handleOnChange={handleOnChangeSearchInput} />
        <AddButtonCircle onClick={handleToggleModal} />
      </Box>
      <Modal isOpen={isOpenModal} handleClose={handleToggleModal} title={t("titleNewCameraType")}>
        <AddNewForm scheme={scheme} />
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
