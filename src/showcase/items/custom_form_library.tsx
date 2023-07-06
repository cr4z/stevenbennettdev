import { Container, Typography } from "@mui/material";
import Box from "../../fortitude/components-dev/BoxExtended";
import { XNGFormInput } from "../../fortitude/components-form/textfield";
import XNGFormDatePicker from "../../fortitude/components-form/datepicker";
import { XNGFormSelect } from "../../fortitude/components-form/select";
import Button from "../../design_system/button";
import { useXNGFormWithValidation } from "../../fortitude/hooks/useForm";
import * as yup from "yup";
import dayjs from "dayjs";

export interface SchoolCampus {
  id: string;
  name: string;
}

export interface CustomFormValues {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  jobTitle: string;
  npi: string;
  stateMedicaidNumber: string;
  primaryCampus: SchoolCampus;
}
export const validation = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().required("Last name is required"),
  dateOfBirth: yup.date().nullable().required("Date of Birth is required"),
  jobTitle: yup.string().required("Job title is required"),
  primaryCampus: yup.object<SchoolCampus>().typeError("Please select your primary campus"),
});

function CustomFormLibrary() {
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useXNGFormWithValidation<CustomFormValues>({ validationSchema: validation });

  function onSubmit(data: CustomFormValues) {
    console.log(data);
  }

  return (
    <>
      <Container>
        <Typography variant="overline">Step 1 of 3</Typography>
        <Typography variant="h4">Fill out About You Information</Typography>
        <Typography sx={{ marginTop: "2rem", textAlign: "justify" }} variant="body1">
          Below is information that will inform your profile and permissions. Please ensure it is filled out
          and correct.
        </Typography>
        <Box sx={{ paddingTop: "3rem", paddingBottom: "2rem" }}>
          <Typography variant="h5">About You</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <XNGFormInput
            name="firstName"
            label="First Name"
            control={control}
            register={register}
            useError={{ message: errors.firstName?.message }}
          />
          <XNGFormInput
            name="lastName"
            label="Last Name"
            control={control}
            register={register}
            useError={{ message: errors.lastName?.message }}
          />
          <XNGFormInput
            name="email"
            label="Email Address"
            control={control}
            register={register}
            useError={{ message: errors.email?.message }}
          />
          <XNGFormDatePicker
            defaultValue={dayjs().toDate()}
            name="dateOfBirth"
            label="Date of Birth"
            control={control}
            useError={{ message: errors.dateOfBirth?.message }}
          />
          <XNGFormInput
            name="jobTitle"
            label="Job Title"
            control={control}
            register={register}
            useError={{ message: errors.jobTitle?.message }}
          />
          <XNGFormInput
            name="npi"
            label="NPI"
            placeholder="Optional..."
            control={control}
            register={register}
            useError={{ message: errors.npi?.message }}
          />
          <XNGFormInput
            name="stateMedicaidNumber"
            label="State Medicaid Number"
            placeholder="Optional..."
            control={control}
            register={register}
            useError={{ message: errors.stateMedicaidNumber?.message }}
          />
          <XNGFormSelect<CustomFormValues, SchoolCampus>
            getOptionLabel={(campus: SchoolCampus) => campus.name!}
            setValue={setValue}
            watch={watch}
            control={control}
            label="Primary Campus"
            name="primaryCampus"
            items={[
              { id: "123", name: "Colt" },
              { id: "234", name: "Mustang" },
            ]}
            useError={{ message: errors.primaryCampus?.message }}
          />
          <Button
            onClick={() => {
              handleSubmit(onSubmit)();
            }}
          />
        </Box>
      </Container>
    </>
  );
}

export default CustomFormLibrary;
