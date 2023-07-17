// import { ReactComponent as ChatBubbles } from "./icons/chatBubbles.svg";
// import { ReactComponent as Alert } from "./icons/alert.svg";
// import { ReactComponent as Grid4X4 } from "./icons/grid4x4.svg";
// import { ReactComponent as XLogs_X } from "./icons/xlogs_X.svg";
// import { ReactComponent as Commander } from "./icons/commander.svg";
// import { ReactComponent as Home } from "./icons/home.svg";
// import { ReactComponent as HorizontalLines4 } from "./icons/horizontalLines4.svg";
// import { ReactComponent as HorizontalLines3 } from "./icons/horizontalLines3.svg";
// import { ReactComponent as Tools } from "./icons/tools.svg";
// import { ReactComponent as Hierarchy } from "./icons/hierarchy.svg";
// import { ReactComponent as Search } from "./icons/search.svg";
// import { ReactComponent as Filter } from "./icons/filter.svg";
// import { ReactComponent as Caret } from "./icons/caret.svg";
// import { ReactComponent as CaretOutline } from "./icons/caret_outline.svg";
// import { ReactComponent as Inbox } from "./icons/inbox.svg";
// import { ReactComponent as PersonMultiple } from "./icons/person_multiple.svg";
// import { ReactComponent as Bell } from "./icons/bell.svg";
// import { ReactComponent as Close } from "./icons/close.svg";
// import { ReactComponent as Person } from "./icons/person.svg";
// import { ReactComponent as Help } from "./icons/help.svg";
// import { ReactComponent as Phone } from "./icons/phone.svg";
// import { ReactComponent as AlarmClock } from "./icons/alarm_clock.svg";
// import { ReactComponent as Files } from "./icons/files.svg";
// import { ReactComponent as Calendar } from "./icons/calendar.svg";
// import { ReactComponent as SmallCheck } from "./icons/check_small.svg";
// import { ReactComponent as PlusSign} from "./icons/add_sign.svg";
// import { ReactComponent as Gear } from "./icons/gear.svg";
// import { ReactComponent as Avatar } from "./icons/avatar.svg";
import Box from "./components-dev/BoxExtended";

export const XNGICONS = {
  // Alert: Alert,
  // Files: Files,
  // Calendar: Calendar,
  // ChatBubbles: ChatBubbles,
  // Grid4X4: Grid4X4,
  // XLogs_X: XLogs_X,
  // Commander: Commander,
  // Home: Home,
  // FourHorizontalLines: HorizontalLines4,
  // ThreeHorizontalLines: HorizontalLines3,
  // Tools: Tools,
  // Hierarchy: Hierarchy,
  // Hamburger: HorizontalLines3,
  // Search: Search,
  // Filter: Filter,
  // Caret: Caret,
  // CaretOutline: CaretOutline,
  // Inbox: Inbox,
  // People: PersonMultiple,
  // Bell: Bell,
  // Close: Close,
  // Person: Person,
  // Help: Help,
  // Phone: Phone,
  // AlarmClock: AlarmClock,
  // SmallCheck: SmallCheck,
  // PlusSign: PlusSign,
  // Gear: Gear,
  // Avatar: Avatar,
};

export type XNGIconSize = "xl" | "lg" | "md" | "sm" | "xs" | "caret" | string;
function getSize(sz: XNGIconSize) {
  switch (sz) {
    case "xl":
      return "55px";
    case "lg":
      return "30px";
    case "md":
      return "22px";
    case "sm":
      return "20px";
    case "xs":
      return "14px";
    case "caret":
      return "8px";
    default:
      return sz;
  }
}
interface IXNGIcon {
  color?: string;
  size: XNGIconSize;
  i: JSX.Element;
  onClick?: any;
  disableRenderer?: boolean;
  left?: boolean;
  right?: boolean;
  up?: boolean;
  down?: boolean;
}
export function XNGIconRenderer(props: IXNGIcon) {
  const size = getSize(props.size);
  const dir = props.down ? 90 : props.left ? 180 : props.up ? 270 : 0;

  return (
    <Box
      sx={{
        display: "flex" + "!important",
        justifyContent: "center" + "!important",
        alignItems: "center" + "!important",
        minWidth: size + "!important",
        minHeight: size + "!important",
        transform: `rotate(${dir}deg)` + "!important",
        svg: {
          width: size + "!important",
          height: size + "!important",
          color: props.color,
          "*": props.disableRenderer
            ? {}
            : {
                stroke: props.color + "!important",
                strokeWidth: 0 + "!important",
                fill: props.color + "!important",
              },
        },
        maxWidth: size + "!important",
        maxHeight: size + "!important",
      }}
      onClick={props.onClick}
    >
      {props.i}
    </Box>
  );
}

export function getSxRecolorChildXNGIcons(color: string) {
  return {
    svg: {
      color: color + "!important",
      "*": {
        stroke: color + "!important",
        fill: color + "!important",
      },
    },
  };
}
