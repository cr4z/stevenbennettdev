import { Container, Typography } from "@mui/material";
import Box from "../../fortitude/components-dev/BoxExtended";
import { XNGFormInput } from "../../fortitude/components-form/textfield";
import XNGFormDatePicker from "../../fortitude/components-form/datepicker";
import { XNGFormSelect } from "../../fortitude/components-form/select";
import { useXNGFormWithValidation } from "../../fortitude/hooks/useForm";
import * as yup from "yup";
import dayjs from "dayjs";
import XNGEnvironmentProvider from "../../fortitude/environment_provider";
import { ModalDialog } from "../../components/modal_dialog";
import { useState } from "react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/acai.css";
import Button from "../../design_system/button";
import { ViewCodeOnGithubButton } from "../../components/github_button_code";

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
  stateInUS: string;
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

function CustomFormLibrary(props: { link: string }) {
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useXNGFormWithValidation<CustomFormValues>({ validationSchema: validation });

  const [json, setJson] = useState<object | null>(null);

  function onSubmit(data: CustomFormValues) {
    setJson(data);
  }

  function ValidSubmitModal() {
    return (
      <ModalDialog open={json !== null} onClose={() => setJson(null)} title="Information is valid!">
        <Typography>
          Once the user clicks "Submit", a handler will return a JSON object mapped to the field values
          they've predefined. In this instance, here is the returned JSON:
        </Typography>

        <Box sx={{ my: "1rem" }}>
          <Box sx={{ fontFamily: "monospace" }}>
            {/* <JSONTree data={json} theme="tomorrow" /> */}
            <JSONPretty data={json} />
          </Box>
        </Box>

        <Typography>
          This system is type-safe and ready to go! Feel free to take a look at the code-behind to see just
          how straightforward and readable the markup of this React form system is. I've made sure to keep
          things as minimal as possible in terms of code requirements!
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "1rem" }}>
          <ViewCodeOnGithubButton href={props.link} />
        </Box>
      </ModalDialog>
    );
  }

  return (
    <>
      {/* Modals */}
      <ValidSubmitModal />

      {/* DOM Hierarchy */}
      <XNGEnvironmentProvider>
        <Container maxWidth="md" sx={{ paddingY: "4rem" }}>
          <Box sx={{ minWidth: "30rem" }}>
            <Typography variant="overline">Step 1 of 3</Typography>

            <Typography variant="h4">Fill out About You Information</Typography>

            <Typography sx={{ marginTop: "2rem", textAlign: "justify" }} variant="body1">
              Below is information that will inform your profile and permissions. Please ensure it is filled
              out and correct.
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
                name="stateInUS"
                label="State"
                placeholder="Optional..."
                control={control}
                register={register}
                useError={{ message: errors.stateInUS?.message }}
              />
              {/* To anyone checking out the code, this is one of my proudest additions. Let's dive in? */}
              <XNGFormSelect<CustomFormValues, SchoolCampus>
                // These are values that intellisense indicates as required in order to power the
                // react-hook-forms implementation under the hood. It's as simple as passing the values in!
                setValue={setValue}
                watch={watch}
                control={control}
                name="primaryCampus"
                // These two control the frontend's display (useError is optional)
                label="Primary Campus"
                useError={{ message: errors.primaryCampus?.message }}
                // We derive the label of the menu option from its campus type
                getOptionLabel={(campus: SchoolCampus) => campus.name!}
                // Populate campus types
                items={[
                  { id: "123", name: "Colt" },
                  { id: "234", name: "Mustang" },
                ]}
              />

              <Button
                onClick={() => {
                  handleSubmit(onSubmit)();
                }}
                variant="cta"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </XNGEnvironmentProvider>
    </>
  );
}

export default CustomFormLibrary;
