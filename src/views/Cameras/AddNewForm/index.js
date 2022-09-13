import { yupResolver } from "@hookform/resolvers/yup"
import { useDispatch, useSelector } from "react-redux"
import { FormControl, TextField, Button, FormControlLabel, MenuItem, Select } from "@mui/material"
import { useForm } from "react-hook-form"
import actions from "../../../state/actions"
import Box from "@mui/material/Box"
import Toast from "../../../components/Toast"
import scheme from "../scheme"

import { Controller } from "react-hook-form"
import { useTranslation } from "react-i18next"
import i18next from "i18next"

const CameraTypeForm = () => {
  const { t } = useTranslation()
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const { addCameraAction, toggleCameraModalAction } = actions.camera

  const defaultValueSelect = state.cameraType.data[0].id

  const { register, handleSubmit, reset, formState, control } = useForm({
    defaultValues: {
      name: "",
      location: "",
      cameraType: defaultValueSelect,
      latitude: null,
      longitude: null,
      brand: "",
      model: "",
    },
    mode: "onBlur",
    resolver: yupResolver(scheme),
  })
  const { errors } = formState

  const onSubmitCameraType = async data => {
    const { name, location, cameraType, latitude, longitude, brand, model } = data
    dispatch(addCameraAction({ name, location, cameraType, latitude, longitude, brand, model }))
    dispatch(toggleCameraModalAction())
    Toast(i18next.t("common:successAdd"), "success")
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
              label={t("location")}
              {...register("location")}
              size="small"
              error={!!errors.location}
              helperText={errors.location?.message}
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth sx={{ mt: 1, mb: 1 }}>
            <Controller
              control={control}
              name="cameraType"
              la
              render={() => (
                <FormControlLabel
                  label={t("cameraType")}
                  labelPlacement={"start"}
                  control={
                    <Select fullWidth {...register("cameraType")} defaultValue={defaultValueSelect}>
                      {state.cameraType.data.map(cameraType => (
                        <MenuItem key={cameraType.id} value={cameraType.id}>
                          {cameraType.name}
                        </MenuItem>
                      ))}
                    </Select>
                  }
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              type="number"
              label={t("latitude")}
              {...register("latitude")}
              size="small"
              error={!!errors.latitude}
              helperText={errors.latitude?.message}
              InputProps={{ inputProps: { min: -90, max: 90 } }}
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              type="number"
              label={t("longitude")}
              {...register("longitude")}
              size="small"
              error={!!errors.longitude}
              helperText={errors.longitude?.message}
              InputProps={{ inputProps: { min: -180, max: 180 } }}
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              type="text"
              label={t("brand")}
              {...register("brand")}
              size="small"
              error={!!errors.brand}
              helperText={errors.brand?.message}
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              type="text"
              label={t("model")}
              {...register("model")}
              size="small"
              error={!!errors.model}
              helperText={errors.model?.message}
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
