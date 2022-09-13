import { yupResolver } from "@hookform/resolvers/yup"
import { useDispatch } from "react-redux"
import { FormControl, TextField, Button, Box } from "@mui/material"
import { useForm } from "react-hook-form"
import actions from "../../../state/actions"
import Toast from "../../../components/Toast"
import { useTranslation } from "react-i18next"

const CameraTypeForm = ({ scheme }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { addCameraTypeAction, toggleCameraTypeModalAction } = actions.cameraType
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
    mode: "onBlur",
    resolver: yupResolver(scheme),
  })
  const { errors } = formState

  const onSubmitCameraType = async data => {
    const { name, description } = data
    dispatch(addCameraTypeAction({ name, description }))
    dispatch(toggleCameraTypeModalAction())
    Toast(t("successAdd"), "success")
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitCameraType)}>
        <Box>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              type="text"
              label={t("name")}
              {...register("name")}
              size="small"
              error={!!errors.name}
              helperText={errors.name?.message}
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              type="text"
              label={t("description")}
              {...register("description")}
              size="small"
              error={!!errors.description}
              helperText={errors.description?.message}
              variant="outlined"
            />
          </FormControl>
          <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end", m: 1 }}>
            <Button variant="contained" color="primary" type="submit">
              {t("save")}
            </Button>
          </Box>
        </Box>
      </form>
    </>
  )
}

export default CameraTypeForm
