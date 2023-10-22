import { Typography } from "@mui/material";
import { BlogPost } from "../../../api/models/blog";
import dayjs from "dayjs";

export function BlogTextDateAndCategory(props: { blog: BlogPost }) {
  return (
    <span>
      <Typography display="inline" variant="body2">
        {dayjs(props.blog.date.toDate()).format("MMMM YYYY")}{" "}
      </Typography>
      <Typography display="inline">
        • <b>{props.blog.category}</b>
      </Typography>
    </span>
  );
}
