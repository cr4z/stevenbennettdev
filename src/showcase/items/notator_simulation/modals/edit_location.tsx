import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { ComplexFormModal } from "./modal";

export function EditLocationModal(props: {
  open: boolean;
  onClose: () => void;
  onApply: (v: string) => void;
  defaultValue: string;
}) {
  const focusRef = useRef<HTMLInputElement>(null);

  const [stagedLocation, setStagedLocation] = useState<string>(
    props.defaultValue
  );

  return (
    <>
      <ComplexFormModal
        open={props.open}
        onClose={() => props.onClose()}
        onFocusReady={() => {
          if (props.open) {
            focusRef.current?.focus();
          }
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.onApply(stagedLocation);
            props.onClose();
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              gap: "1rem",
            }}
          >
            <Typography variant="h6">Edit Report Location</Typography>
            <Autocomplete
              options={top100Cities}
              value={stagedLocation}
              onChange={(_e, newValue) => {
                setStagedLocation(newValue || "");
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a city"
                  inputRef={focusRef}
                />
              )}
            />
          </Box>
          <Box sx={{ padding: "1rem", display: "flex", gap: "1rem" }}>
            <Button fullWidth onClick={() => props.onClose()} type="button">
              Cancel
            </Button>
            <Button type="submit" fullWidth variant="contained">
              Apply
            </Button>
          </Box>
        </form>
      </ComplexFormModal>
    </>
  );
}

const top100Cities = [
  "New York City, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "Phoenix, AZ",
  "Philadelphia, PA",
  "San Antonio, TX",
  "San Diego, CA",
  "Dallas, TX",
  "San Jose, CA",
  "Austin, TX",
  "Jacksonville, FL",
  "Fort Worth, TX",
  "Columbus, OH",
  "Indianapolis, IN",
  "Charlotte, NC",
  "San Francisco, CA",
  "Seattle, WA",
  "Denver, CO",
  "Washington, D.C.",
  "Nashville, TN",
  "Oklahoma City, OK",
  "El Paso, TX",
  "Boston, MA",
  "Portland, OR",
  "Las Vegas, NV",
  "Detroit, MI",
  "Memphis, TN",
  "Louisville, KY",
  "Baltimore, MD",
  "Milwaukee, WI",
  "Albuquerque, NM",
  "Tucson, AZ",
  "Fresno, CA",
  "Sacramento, CA",
  "Mesa, AZ",
  "Kansas City, MO",
  "Atlanta, GA",
  "Omaha, NE",
  "Colorado Springs, CO",
  "Raleigh, NC",
  "Miami, FL",
  "Long Beach, CA",
  "Virginia Beach, VA",
  "Oakland, CA",
  "Minneapolis, MN",
  "Tulsa, OK",
  "Arlington, TX",
  "Tampa, FL",
  "New Orleans, LA",
  "Wichita, KS",
  "Cleveland, OH",
  "Bakersfield, CA",
  "Aurora, CO",
  "Anaheim, CA",
  "Honolulu, HI",
  "Santa Ana, CA",
  "Riverside, CA",
  "Corpus Christi, TX",
  "Lexington, KY",
  "Stockton, CA",
  "St. Louis, MO",
  "Saint Paul, MN",
  "Henderson, NV",
  "Pittsburgh, PA",
  "Cincinnati, OH",
  "Anchorage, AK",
  "Greensboro, NC",
  "Plano, TX",
  "Newark, NJ",
  "Lincoln, NE",
  "Orlando, FL",
  "Irvine, CA",
  "Toledo, OH",
  "Jersey City, NJ",
  "Chula Vista, CA",
  "Durham, NC",
  "Fort Wayne, IN",
  "St. Petersburg, FL",
  "Laredo, TX",
  "Buffalo, NY",
  "Madison, WI",
  "Lubbock, TX",
  "Chandler, AZ",
  "Scottsdale, AZ",
  "Reno, NV",
  "Glendale, AZ",
  "Norfolk, VA",
  "Winston-Salem, NC",
  "North Las Vegas, NV",
  "Irving, TX",
  "Chesapeake, VA",
  "Gilbert, AZ",
  "Hialeah, FL",
  "Garland, TX",
  "Fremont, CA",
  "Baton Rouge, LA",
  "Richmond, VA",
  "Boise, ID",
  "San Bernardino, CA",
];
