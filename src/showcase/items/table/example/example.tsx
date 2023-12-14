import { Box, ThemeProvider } from "@mui/material";
import useXNGBigTablePaginationStateManager from "../hooks/use_pagination_state_manager";
import useXNGBigTableSortStateManager from "../hooks/use_sort_state_manager";
import useBigTableKeyedRows from "../hooks/use_big_table_keyed_rows";
import XNGBigTable from "../table";
import { DUMMY_ROWS, ExampleRow, FetchedTableResponse, useFetchTable } from "./gen/gen";
import useXNGBigTableSelectableRowStateManager from "../hooks/use_selectable_row_state_manager";
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
    onClientSideSort: () => enqueueSnackbar("Leveraging client-side sorting!"),
  });

  return (
    <Box sx={{ bgcolor: "#FFF", display: "flex", gap: "2rem", flexDirection: "column" }}>
      <XNGBigTable<ExampleRow>
        columns={[
          { key: "campusName", label: "Campus Name" },
          { key: "stateID", label: "State ID" },
          { key: "address", label: "Address" },
          { key: "contact", label: "Contact" },
          { key: "contactRole", label: "Contact Role" },
          { key: "contactEmail", label: "Contact Email" },
        ]}
        useSelectableRows={ts.selectableState}
        usePagination={ts.paginationState}
        useSort={ts.sortState}
        onTableRequestParametersChange={(trp) => {
          enqueueSnackbar("Re-fetching data! (Check console to view parameters)");
          console.log("Refetching data! Parameters: ", { trp });
          refetch(trp);
        }}
        styling={{ heightRelativeToScreen: 14.6 }}
      />
    </Box>
  );
}

function useTableState(props: { table: FetchedTableResponse | null; onClientSideSort: () => void }) {
  const { table, onClientSideSort } = props;

  const keyedRows = useBigTableKeyedRows<ExampleRow>({ defaultRows: table?.fetchedRows ?? [] });
  const paginationState = useXNGBigTablePaginationStateManager({
    totalCount: table?.totalCount ?? 0,
  });
  const sortState = useXNGBigTableSortStateManager<ExampleRow>({
    keyedRows,
    originalRows: DUMMY_ROWS,
    onClientSideSort,
  });
  const selectableState = useXNGBigTableSelectableRowStateManager({ keyedRows });

  return { paginationState, sortState, selectableState };
}
