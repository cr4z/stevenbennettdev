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
      <Typography variant="body1">
        In this demonstration, I've attached listeners to the table callbacks for re-fetching data and
        client-side sorting to the snackbar component provided by the npm library <code>notistack</code>{" "}
        (one of my personal favorites) in order to clarify its behaviour, whether it determines to
        re-fetching data or leverage client-side sorting for efficiency!
      </Typography>
    </Stack>
  ),
  techUsed: [
    {
      name: "MUI",
      content: (
        <ul>
          <li>
            Used as a versatile foundation for the creation of featured unique & complex input elements
          </li>
        </ul>
      ),
    },
    {
      name: "React",
      content: (
        <ul>
          <li>
            Custom table component is structured in a modular, reusable way flexible for a multitude of
            situations
          </li>
        </ul>
      ),
    },
    {
      name: "TypeScript",
      content: (
        <ul>
          <li>
            Boasts knowledge of SOLID principles, observable in the interface segregation of the table
            component's defined props
          </li>
          <li>
            Advanced algorithmic skills are evident in code, such as in the usage of a quicksort in-place
            algorithm in its sorting logic. View the code for that{" "}
            <a href="/portfolio/9aed35c7101b">here!</a>
          </li>
        </ul>
      ),
    },
  ],
  featuresAndFunctionality: (
    <>
      <Typography variant="body1">
        This component provides a base table that can accept either static or dynamic data. It is also
        capable of optionally accepting any combination of the overloads seen below!
      </Typography>
      <ul>
        <li>Pagination</li>
        <li>Rapid Alphabetical Sorting (using a custom algorithm!)</li>
        <li>Selectable Rows</li>
      </ul>
    </>
  ),
  skillsShown: [
    {
      skill: "Self-Documenting Code",
      desc: <Typography>Complex modules are well documented</Typography>,
    },
    {
      skill: "Knowledge of Advanced Algorithms",
      desc: (
        <Typography>
          The table's sorting functionality boasts an integrated quicksort in-place algorithm. View the code
          for that <a href="/portfolio/debdcb6a850d">here</a>!
        </Typography>
      ),
    },
    {
      skill: "Component Composition",
      desc: "The component composition of my table component boasts a maintanable and readable architecture.",
    },
  ],
};
