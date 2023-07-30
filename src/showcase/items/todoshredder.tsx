/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Typography } from "@mui/material";
// @ts-ignore
import Screenshot from "../../img/todoshredder.png";
import ClicKToViewWebsite from "../../components/click_to_view_site";

function TodoShredder() {
  return <ClicKToViewWebsite href="https://www.todoshredder.com" src={Screenshot} />;
}

export default TodoShredder;
