import { Box, Typography, Pagination } from "@mui/material";
import { BigTableProps } from "../table";
import { GREY_COLOR } from "../constants/grey_color";
import { RESULTS_PER_PAGE_OPTIONS } from "../constants/results_per_page_options";
import { SBDTypedSelect } from "../../../../sbd_development_kit/components/typed_select";
import { useBreakpointHelper } from "../../../../design_system/hooks/useBreakpointHelper";

export default function FooterPaginationControls<T>(props: BigTableProps<T>) {
  const { pageIndex, resultsPerPage, totalCount, totalPages, onPageSizeChange, onCurrentPageIndexChange } =
    props.usePagination!;

  const isWiderThanMobile = useBreakpointHelper().isGreaterThanEqualTo("sm");
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: GREY_COLOR,
        width: "100%",
        minHeight: "3rem",
        alignItems: "center",
        justifyContent: "space-between",
        px: "1rem",
        color: "#0009",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Typography className="noselect">Show</Typography>
        <SBDTypedSelect<number>
          defaultOption={RESULTS_PER_PAGE_OPTIONS[0]}
          options={RESULTS_PER_PAGE_OPTIONS}
          getDisplayValue={(n) => n.toString()}
          onChange={(n) => onPageSizeChange(n)}
          variant={{ rounded: true }}
        />
        {isWiderThanMobile && (
          <Typography className="noselect">{`Showing ${Math.min(
            resultsPerPage,
            totalCount
          )} of ${totalCount} results`}</Typography>
        )}
      </Box>

      <Pagination
        variant="outlined"
        page={pageIndex + 1} // 0-index to 1-index conversion
        onChange={(_e, pi) => onCurrentPageIndexChange(pi - 1)} // 1-index to 0-index conversion
        count={totalPages}
        shape="circular"
      />
    </Box>
  );
}
