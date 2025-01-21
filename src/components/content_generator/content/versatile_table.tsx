import { Stack, Typography } from "@mui/material";
import { ContentGeneratorContent } from "../types/types";
import { SBDCodeBlock } from "../../../sbd_development_kit/components/code_block";

export const advancedTableComponentContent: ContentGeneratorContent = {
  introOverview: (
    <Stack direction="column" gap=".5rem">
      <Typography variant="body1">
        This is a custom table component project I experimented with, built to integrate with the results of
        API requests. It features pagination, intelligent client/server sorting, and selectable rows.
      </Typography>
      <SBDCodeBlock
        code={`function BigTableExample() {
  const { enqueueSnackbar } = useSnackbar();

  const { table, refetch } = useFetchTable();
  const ts = useTableState({
    table,
    onClientSideSort: () => enqueueSnackbar("Leveraging client-side QuickSort algorithm!"),
  });

  return (
    <BigTable<ExampleRow>
      columns={[
        { key: "employeeId", label: "Employee ID" },
        { key: "name", label: "Name" },
        { key: "position", label: "Position" },
        { key: "email", label: "Email" },
        { key: "salary", label: "Salary" },
        { key: "department", label: "Department" },
      ]}
      useSelectableRows={ts.selectableState}
      usePagination={ts.paginationState}
      useSort={ts.sortState}
      onTableRequestParametersChange={(trp) => {
        enqueueSnackbar("Re-fetching data! (Check console to view parameters)");
        console.log("Refetching data! Parameters: ", { trp });
        refetch(trp);
      }}
    />
   );
}
`}
      />
    </Stack>
  ),
  techUsed: [
    {
      name: "MUI",
      content: (
        <ul>
          <li>Used as foundation for a small, customized component library</li>
        </ul>
      ),
    },
    {
      name: "React",
      content: (
        <ul>
          <li>Custom table component is structured using modular patterning</li>
        </ul>
      ),
    },
    {
      name: "TypeScript",
      content: (
        <ul>
          <li>Implements clear SOLID principle inspiration, thoroughly separated interfaces and classes</li>
          <li>
            Implements a quick-sort in-place algorithm viewed{" "}
            <a href="/portfolio/9aed35c7101b">in another portfolio project</a>
          </li>
        </ul>
      ),
    },
  ],
};
