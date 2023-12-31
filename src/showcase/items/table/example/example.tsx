import { Box, ThemeProvider } from "@mui/material";
import useBigTablePaginationStateManager from "../hooks/use_pagination_state_manager";
import useBigTableSortStateManager from "../hooks/use_sort_state_manager";
import useBigTableKeyedRows from "../hooks/use_big_table_keyed_rows";
import BigTable from "../table";
import { DUMMY_ROWS, ExampleRow, FetchedTableResponse, useFetchTable } from "./gen/gen";
import useBigTableSelectableRowStateManager from "../hooks/use_selectable_row_state_manager";
import { showcaseWhiteTheme } from "../../../../design_system/themes/showcase_white_theme";
import { SnackbarProvider, useSnackbar } from "notistack";
import SnackbarCloseButton from "../../../../components/snackbar_close_btn";

export default function BigTableExampleWrapper() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        ".notistack-SnackbarContainer": {
          position: "absolute",
          bottom: "3.5rem",
          right: "2rem",
        },
      }}
    >
      <ThemeProvider theme={showcaseWhiteTheme}>
        <SnackbarProvider
          maxSnack={3}
          action={(snackbarKey) => <SnackbarCloseButton snackbarKey={snackbarKey} />}
          autoHideDuration={2000}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <BigTableExample />
        </SnackbarProvider>
      </ThemeProvider>
    </Box>
  );
}

function BigTableExample() {
  const { enqueueSnackbar } = useSnackbar();

  const { table, refetch } = useFetchTable();
  const ts = useTableState({
    table,
    onClientSideSort: () => enqueueSnackbar("Leveraging client-side QuickSort algorithm!"),
  });

  return (
    <Box sx={{ bgcolor: "#FFF", display: "flex", gap: "2rem", flexDirection: "column", height: "100%" }}>
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
    </Box>
  );
}

function useTableState(props: { table: FetchedTableResponse | null; onClientSideSort: () => void }) {
  const { table, onClientSideSort } = props;

  const keyedRows = useBigTableKeyedRows<ExampleRow>({ defaultRows: table?.fetchedRows ?? [] });
  const paginationState = useBigTablePaginationStateManager({
    totalCount: table?.totalCount ?? 0,
  });
  const sortState = useBigTableSortStateManager<ExampleRow>({
    keyedRows,
    originalRows: DUMMY_ROWS,
    onClientSideSort,
  });
  const selectableState = useBigTableSelectableRowStateManager({ keyedRows });

  return { paginationState, sortState, selectableState };
}
