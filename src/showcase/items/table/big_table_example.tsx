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
        accepts a generic prop, <code>rows</code>, of type <code>T[]</code>. <code>T</code> can be any
        object with ReactNode-compatible keys, and it will render out the data accordingly under columns
        with a custom name attributed for each defined key. It can also currently be overridden to accept a
        selectable variant, and its complex state is managed via a custom hook called the selectable row
        state manager.
      </Typography>
      <Typography>
        Internally, it applies many practical theories such as interface segregation that effectively yield
        a more maintanable, extensible and thus reusable component. The code for this component is available
        on my GitHub and a snippet is provided below!
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
