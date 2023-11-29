import { Box, Paper, Typography, useTheme } from "@mui/material";
import BigTable from "./table";
import useBigTableSelectableRowStateManager from "./use_selectable_row_state_manager";
import { useEffect } from "react";
import hljs from "highlight.js";

type CampusInformationRow = {
  campusName: string;
  stateID: string;
  address: string;
  contact: string;
  contactRole: string;
  contactEmail: string;
};

export default function BigTableExample() {
  const selectedRowState = useBigTableSelectableRowStateManager<CampusInformationRow>({
    rows: DUMMY_ROWS,
  });

  const { palette } = useTheme();

  return (
    <Box
      sx={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        bgcolor: palette.background.default,
      }}
    >
      <Typography variant="h4">Custom Table Component</Typography>
      <Typography>
        This component boilerplates an MUI table, but with an extra layer of code to promote reusability. It
        features a generic <code>rows</code> prop, type <code>T[]</code>, where <code>T</code> represents
        any object with ReactNode-compatible keys. This setup allows for dynamic rendering of data under
        custom-named columns for each key. Additionally, the component supports a selectable variant,
        managed by a unique hook, the selectable row state manager. state manager.
      </Typography>
      <Typography>
        Internally, the component exemplifies development principles such as interface segregation to
        effectively yield a more maintanable, extensible and thus reusable component. Its performance is
        optimized by reducing memory usage to a single state, ensuring both speed and efficiency. The
        component's code is accessible on my GitHub, along with a code snippet for easy reference.
      </Typography>

      <Paper>
        <BigTable<CampusInformationRow>
          rows={DUMMY_ROWS}
          columns={[
            { key: "campusName", label: "Campus Name" },
            { key: "stateID", label: "State ID" },
            { key: "address", label: "Address" },
            { key: "contact", label: "Contact" },
            { key: "contactRole", label: "Contact Role" },
            { key: "contactEmail", label: "Contact Email" },
          ]}
          useSelectableRows={selectedRowState}
        />
      </Paper>

      <Paper>
        <CodeBlock />
      </Paper>
    </Box>
  );
}

const DUMMY_ROWS: CampusInformationRow[] = [
  {
    campusName: "A",
    stateID: "B",
    address: "C",
    contact: "D",
    contactRole: "E",
    contactEmail: "F",
  },
  {
    campusName: "1",
    stateID: "2",
    address: "3",
    contact: "4",
    contactRole: "5",
    contactEmail: "6",
  },
  {
    campusName: "A",
    stateID: "B",
    address: "C",
    contact: "D",
    contactRole: "E",
    contactEmail: "F",
  },
];

function CodeBlock() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className="language-tsx">
        {`
import BigTable from "./table";
import useBigTableSelectableRowStateManager from "./use_selectable_row_state_manager";

type CampusInformationRow = {
  campusName: string;
  stateID: string;
  address: string;
  contact: string;
  contactRole: string;
  contactEmail: string;
};
export default function BigTableExample() {
  const selectedRowState =
    useBigTableSelectableRowStateManager<CampusInformationRow>({
      rows: DUMMY_ROWS,
    });

  // \`selectedRowState\` usage
  console.log(selectedRowState.selectedRows); // returns T[] (In our case, a CampusInformationRow[])

  return (
    <BigTable<CampusInformationRow>
      rows={DUMMY_ROWS}
      columns={[
        { key: "campusName", label: "Campus Name" },
        { key: "stateID", label: "State ID" },
        { key: "address", label: "Address" },
        { key: "contact", label: "Contact" },
        { key: "contactRole", label: "Contact Role" },
        { key: "contactEmail", label: "Contact Email" },
      ]}
      useSelectableRows={selectedRowState}
    />
  );
}

const DUMMY_ROWS: CampusInformationRow[] = [
  {
    campusName: "A",
    stateID: "B",
    address: "C",
    contact: "D",
    contactRole: "E",
    contactEmail: "F",
  },
  {
    campusName: "1",
    stateID: "2",
    address: "3",
    contact: "4",
    contactRole: "5",
    contactEmail: "6",
  },
  {
    campusName: "A",
    stateID: "B",
    address: "C",
    contact: "D",
    contactRole: "E",
    contactEmail: "F",
  },
];
`}
      </code>
    </pre>
  );
}
