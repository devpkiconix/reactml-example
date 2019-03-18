// tslint:disable:variable-name
import { newVocab } from "@iconix/reactml/build/rtmlVocab";
import { asyncComponent } from "@iconix/reactml/build/render";

const AppBar = asyncComponent("AppBar", () =>
    import(/* webpackChunkName: 'muiAppBar' */ "@material-ui/core/AppBar").then(
        js => vocab.update("AppBar", js.default)
    )
);
const Avatar = asyncComponent("Avatar", () =>
    import(/* webpackChunkName: 'muiAvatar' */ "@material-ui/core/Avatar").then(
        js => vocab.update("Avatar", js.default)
    )
);
const Backdrop = asyncComponent("Backdrop", () =>
    import(/* webpackChunkName: 'muiBackdrop' */ "@material-ui/core/Backdrop").then(
        js => vocab.update("Backdrop", js.default)
    )
);
const Badge = asyncComponent("Badge", () =>
    import(/* webpackChunkName: 'muiBadge' */ "@material-ui/core/Badge").then(
        js => vocab.update("Badge", js.default)
    )
);
const BottomNavigation = asyncComponent("BottomNavigation", () =>
    import(/* webpackChunkName: 'muiBottomNavigation' */ "@material-ui/core/BottomNavigation").then(
        js => vocab.update("BottomNavigation", js.default)
    )
);
const BottomNavigationAction = asyncComponent("BottomNavigationAction", () =>
    import(/* webpackChunkName: 'muiBottomNavigationAction' */ "@material-ui/core/BottomNavigationAction").then(
        js => vocab.update("BottomNavigationAction", js.default)
    )
);
const Button = asyncComponent("Button", () =>
    import(/* webpackChunkName: 'muiButton' */ "@material-ui/core/Button").then(
        js => vocab.update("Button", js.default)
    )
);
const ButtonBase = asyncComponent("ButtonBase", () =>
    import(/* webpackChunkName: 'muiButtonBase' */ "@material-ui/core/ButtonBase").then(
        js => vocab.update("ButtonBase", js.default)
    )
);
const Card = asyncComponent("Card", () =>
    import(/* webpackChunkName: 'muiCard' */ "@material-ui/core/Card").then(
        js => vocab.update("Card", js.default)
    )
);
const CardActionArea = asyncComponent("CardActionArea", () =>
    import(/* webpackChunkName: 'muiCardActionArea' */ "@material-ui/core/CardActionArea").then(
        js => vocab.update("CardActionArea", js.default)
    )
);
const CardActions = asyncComponent("CardActions", () =>
    import(/* webpackChunkName: 'muiCardActions' */ "@material-ui/core/CardActions").then(
        js => vocab.update("CardActions", js.default)
    )
);
const CardContent = asyncComponent("CardContent", () =>
    import(/* webpackChunkName: 'muiCardContent' */ "@material-ui/core/CardContent").then(
        js => vocab.update("CardContent", js.default)
    )
);
const CardHeader = asyncComponent("CardHeader", () =>
    import(/* webpackChunkName: 'muiCardHeader' */ "@material-ui/core/CardHeader").then(
        js => vocab.update("CardHeader", js.default)
    )
);
const CardMedia = asyncComponent("CardMedia", () =>
    import(/* webpackChunkName: 'muiCardMedia' */ "@material-ui/core/CardMedia").then(
        js => vocab.update("CardMedia", js.default)
    )
);
const Checkbox = asyncComponent("Checkbox", () =>
    import(/* webpackChunkName: 'muiCheckbox' */ "@material-ui/core/Checkbox").then(
        js => vocab.update("Checkbox", js.default)
    )
);
const Chip = asyncComponent("Chip", () =>
    import(/* webpackChunkName: 'muiChip' */ "@material-ui/core/Chip").then(
        js => vocab.update("Chip", js.default)
    )
);
const CircularProgress = asyncComponent("CircularProgress", () =>
    import(/* webpackChunkName: 'muiCircularProgress' */ "@material-ui/core/CircularProgress").then(
        js => vocab.update("CircularProgress", js.default)
    )
);
const ClickAwayListener = asyncComponent("ClickAwayListener", () =>
    import(/* webpackChunkName: 'muiClickAwayListener' */ "@material-ui/core/ClickAwayListener").then(
        js => vocab.update("ClickAwayListener", js.default)
    )
);
const Collapse = asyncComponent("Collapse", () =>
    import(/* webpackChunkName: 'muiCollapse' */ "@material-ui/core/Collapse").then(
        js => vocab.update("Collapse", js.default)
    )
);
const CssBaseline = asyncComponent("CssBaseline", () =>
    import(/* webpackChunkName: 'muiCssBaseline' */ "@material-ui/core/CssBaseline").then(
        js => vocab.update("CssBaseline", js.default)
    )
);
const Dialog = asyncComponent("Dialog", () =>
    import(/* webpackChunkName: 'muiDialog' */ "@material-ui/core/Dialog").then(
        js => vocab.update("Dialog", js.default)
    )
);
const DialogActions = asyncComponent("DialogActions", () =>
    import(/* webpackChunkName: 'muiDialogActions' */ "@material-ui/core/DialogActions").then(
        js => vocab.update("DialogActions", js.default)
    )
);
const DialogContent = asyncComponent("DialogContent", () =>
    import(/* webpackChunkName: 'muiDialogContent' */ "@material-ui/core/DialogContent").then(
        js => vocab.update("DialogContent", js.default)
    )
);
const DialogContentText = asyncComponent("DialogContentText", () =>
    import(/* webpackChunkName: 'muiDialogContentText' */ "@material-ui/core/DialogContentText").then(
        js => vocab.update("DialogContentText", js.default)
    )
);
const DialogTitle = asyncComponent("DialogTitle", () =>
    import(/* webpackChunkName: 'muiDialogTitle' */ "@material-ui/core/DialogTitle").then(
        js => vocab.update("DialogTitle", js.default)
    )
);
const Divider = asyncComponent("Divider", () =>
    import(/* webpackChunkName: 'muiDivider' */ "@material-ui/core/Divider").then(
        js => vocab.update("Divider", js.default)
    )
);
const Drawer = asyncComponent("Drawer", () =>
    import(/* webpackChunkName: 'muiDrawer' */ "@material-ui/core/Drawer").then(
        js => vocab.update("Drawer", js.default)
    )
);
const ExpansionPanel = asyncComponent("ExpansionPanel", () =>
    import(/* webpackChunkName: 'muiExpansionPanel' */ "@material-ui/core/ExpansionPanel").then(
        js => vocab.update("ExpansionPanel", js.default)
    )
);
const ExpansionPanelActions = asyncComponent("ExpansionPanelActions", () =>
    import(/* webpackChunkName: 'muiExpansionPanelActions' */ "@material-ui/core/ExpansionPanelActions").then(
        js => vocab.update("ExpansionPanelActions", js.default)
    )
);
const ExpansionPanelDetails = asyncComponent("ExpansionPanelDetails", () =>
    import(/* webpackChunkName: 'muiExpansionPanelDetails' */ "@material-ui/core/ExpansionPanelDetails").then(
        js => vocab.update("ExpansionPanelDetails", js.default)
    )
);
const ExpansionPanelSummary = asyncComponent("ExpansionPanelSummary", () =>
    import(/* webpackChunkName: 'muiExpansionPanelSummary' */ "@material-ui/core/ExpansionPanelSummary").then(
        js => vocab.update("ExpansionPanelSummary", js.default)
    )
);
const Fade = asyncComponent("Fade", () =>
    import(/* webpackChunkName: 'muiFade' */ "@material-ui/core/Fade").then(
        js => vocab.update("Fade", js.default)
    )
);
const FormControl = asyncComponent("FormControl", () =>
    import(/* webpackChunkName: 'muiFormControl' */ "@material-ui/core/FormControl").then(
        js => vocab.update("FormControl", js.default)
    )
);
const FormControlLabel = asyncComponent("FormControlLabel", () =>
    import(/* webpackChunkName: 'muiFormControlLabel' */ "@material-ui/core/FormControlLabel").then(
        js => vocab.update("FormControlLabel", js.default)
    )
);
const FormGroup = asyncComponent("FormGroup", () =>
    import(/* webpackChunkName: 'muiFormGroup' */ "@material-ui/core/FormGroup").then(
        js => vocab.update("FormGroup", js.default)
    )
);
const FormHelperText = asyncComponent("FormHelperText", () =>
    import(/* webpackChunkName: 'muiFormHelperText' */ "@material-ui/core/FormHelperText").then(
        js => vocab.update("FormHelperText", js.default)
    )
);
const FormLabel = asyncComponent("FormLabel", () =>
    import(/* webpackChunkName: 'muiFormLabel' */ "@material-ui/core/FormLabel").then(
        js => vocab.update("FormLabel", js.default)
    )
);
const Grid = asyncComponent("Grid", () =>
    import(/* webpackChunkName: 'muiGrid' */ "@material-ui/core/Grid").then(
        js => vocab.update("Grid", js.default)
    )
);
const GridList = asyncComponent("GridList", () =>
    import(/* webpackChunkName: 'muiGridList' */ "@material-ui/core/GridList").then(
        js => vocab.update("GridList", js.default)
    )
);
const GridListTile = asyncComponent("GridListTile", () =>
    import(/* webpackChunkName: 'muiGridListTile' */ "@material-ui/core/GridListTile").then(
        js => vocab.update("GridListTile", js.default)
    )
);
const GridListTileBar = asyncComponent("GridListTileBar", () =>
    import(/* webpackChunkName: 'muiGridListTileBar' */ "@material-ui/core/GridListTileBar").then(
        js => vocab.update("GridListTileBar", js.default)
    )
);
const Grow = asyncComponent("Grow", () =>
    import(/* webpackChunkName: 'muiGrow' */ "@material-ui/core/Grow").then(
        js => vocab.update("Grow", js.default)
    )
);
const Hidden = asyncComponent("Hidden", () =>
    import(/* webpackChunkName: 'muiHidden' */ "@material-ui/core/Hidden").then(
        js => vocab.update("Hidden", js.default)
    )
);
const Icon = asyncComponent("Icon", () =>
    import(/* webpackChunkName: 'muiIcon' */ "@material-ui/core/Icon").then(
        js => vocab.update("Icon", js.default)
    )
);
const IconButton = asyncComponent("IconButton", () =>
    import(/* webpackChunkName: 'muiIconButton' */ "@material-ui/core/IconButton").then(
        js => vocab.update("IconButton", js.default)
    )
);
const Input = asyncComponent("Input", () =>
    import(/* webpackChunkName: 'muiInput' */ "@material-ui/core/Input").then(
        js => vocab.update("Input", js.default)
    )
);
const InputAdornment = asyncComponent("InputAdornment", () =>
    import(/* webpackChunkName: 'muiInputAdornment' */ "@material-ui/core/InputAdornment").then(
        js => vocab.update("InputAdornment", js.default)
    )
);
const InputLabel = asyncComponent("InputLabel", () =>
    import(/* webpackChunkName: 'muiInputLabel' */ "@material-ui/core/InputLabel").then(
        js => vocab.update("InputLabel", js.default)
    )
);
const LinearProgress = asyncComponent("LinearProgress", () =>
    import(/* webpackChunkName: 'muiLinearProgress' */ "@material-ui/core/LinearProgress").then(
        js => vocab.update("LinearProgress", js.default)
    )
);
const List = asyncComponent("List", () =>
    import(/* webpackChunkName: 'muiList' */ "@material-ui/core/List").then(
        js => vocab.update("List", js.default)
    )
);
const ListItem = asyncComponent("ListItem", () =>
    import(/* webpackChunkName: 'muiListItem' */ "@material-ui/core/ListItem").then(
        js => vocab.update("ListItem", js.default)
    )
);
const ListItemAvatar = asyncComponent("ListItemAvatar", () =>
    import(/* webpackChunkName: 'muiListItemAvatar' */ "@material-ui/core/ListItemAvatar").then(
        js => vocab.update("ListItemAvatar", js.default)
    )
);
const ListItemIcon = asyncComponent("ListItemIcon", () =>
    import(/* webpackChunkName: 'muiListItemIcon' */ "@material-ui/core/ListItemIcon").then(
        js => vocab.update("ListItemIcon", js.default)
    )
);
const ListItemSecondaryAction = asyncComponent("ListItemSecondaryAction", () =>
    import(/* webpackChunkName: 'muiListItemSecondaryAction' */ "@material-ui/core/ListItemSecondaryAction").then(
        js => vocab.update("ListItemSecondaryAction", js.default)
    )
);
const ListItemText = asyncComponent("ListItemText", () =>
    import(/* webpackChunkName: 'muiListItemText' */ "@material-ui/core/ListItemText").then(
        js => vocab.update("ListItemText", js.default)
    )
);
const ListSubheader = asyncComponent("ListSubheader", () =>
    import(/* webpackChunkName: 'muiListSubheader' */ "@material-ui/core/ListSubheader").then(
        js => vocab.update("ListSubheader", js.default)
    )
);
const Menu = asyncComponent("Menu", () =>
    import(/* webpackChunkName: 'muiMenu' */ "@material-ui/core/Menu").then(
        js => vocab.update("Menu", js.default)
    )
);
const MenuItem = asyncComponent("MenuItem", () =>
    import(/* webpackChunkName: 'muiMenuItem' */ "@material-ui/core/MenuItem").then(
        js => vocab.update("MenuItem", js.default)
    )
);
const MenuList = asyncComponent("MenuList", () =>
    import(/* webpackChunkName: 'muiMenuList' */ "@material-ui/core/MenuList").then(
        js => vocab.update("MenuList", js.default)
    )
);
const MobileStepper = asyncComponent("MobileStepper", () =>
    import(/* webpackChunkName: 'muiMobileStepper' */ "@material-ui/core/MobileStepper").then(
        js => vocab.update("MobileStepper", js.default)
    )
);
const Modal = asyncComponent("Modal", () =>
    import(/* webpackChunkName: 'muiModal' */ "@material-ui/core/Modal").then(
        js => vocab.update("Modal", js.default)
    )
);
const NativeSelect = asyncComponent("NativeSelect", () =>
    import(/* webpackChunkName: 'muiNativeSelect' */ "@material-ui/core/NativeSelect").then(
        js => vocab.update("NativeSelect", js.default)
    )
);
const NoSsr = asyncComponent("NoSsr", () =>
    import(/* webpackChunkName: 'muiNoSsr' */ "@material-ui/core/NoSsr").then(
        js => vocab.update("NoSsr", js.default)
    )
);
const Paper = asyncComponent("Paper", () =>
    import(/* webpackChunkName: 'muiPaper' */ "@material-ui/core/Paper").then(
        js => vocab.update("Paper", js.default)
    )
);
const Popover = asyncComponent("Popover", () =>
    import(/* webpackChunkName: 'muiPopover' */ "@material-ui/core/Popover").then(
        js => vocab.update("Popover", js.default)
    )
);
const Popper = asyncComponent("Popper", () =>
    import(/* webpackChunkName: 'muiPopper' */ "@material-ui/core/Popper").then(
        js => vocab.update("Popper", js.default)
    )
);
const Portal = asyncComponent("Portal", () =>
    import(/* webpackChunkName: 'muiPortal' */ "@material-ui/core/Portal").then(
        js => vocab.update("Portal", js.default)
    )
);
const Radio = asyncComponent("Radio", () =>
    import(/* webpackChunkName: 'muiRadio' */ "@material-ui/core/Radio").then(
        js => vocab.update("Radio", js.default)
    )
);
const RadioGroup = asyncComponent("RadioGroup", () =>
    import(/* webpackChunkName: 'muiRadioGroup' */ "@material-ui/core/RadioGroup").then(
        js => vocab.update("RadioGroup", js.default)
    )
);
const RootRef = asyncComponent("RootRef", () =>
    import(/* webpackChunkName: 'muiRootRef' */ "@material-ui/core/RootRef").then(
        js => vocab.update("RootRef", js.default)
    )
);
const Select = asyncComponent("Select", () =>
    import(/* webpackChunkName: 'muiSelect' */ "@material-ui/core/Select").then(
        js => vocab.update("Select", js.default)
    )
);
const Slide = asyncComponent("Slide", () =>
    import(/* webpackChunkName: 'muiSlide' */ "@material-ui/core/Slide").then(
        js => vocab.update("Slide", js.default)
    )
);
const Snackbar = asyncComponent("Snackbar", () =>
    import(/* webpackChunkName: 'muiSnackbar' */ "@material-ui/core/Snackbar").then(
        js => vocab.update("Snackbar", js.default)
    )
);
const SnackbarContent = asyncComponent("SnackbarContent", () =>
    import(/* webpackChunkName: 'muiSnackbarContent' */ "@material-ui/core/SnackbarContent").then(
        js => vocab.update("SnackbarContent", js.default)
    )
);
const Step = asyncComponent("Step", () =>
    import(/* webpackChunkName: 'muiStep' */ "@material-ui/core/Step").then(
        js => vocab.update("Step", js.default)
    )
);
const StepButton = asyncComponent("StepButton", () =>
    import(/* webpackChunkName: 'muiStepButton' */ "@material-ui/core/StepButton").then(
        js => vocab.update("StepButton", js.default)
    )
);
const StepConnector = asyncComponent("StepConnector", () =>
    import(/* webpackChunkName: 'muiStepConnector' */ "@material-ui/core/StepConnector").then(
        js => vocab.update("StepConnector", js.default)
    )
);
const StepContent = asyncComponent("StepContent", () =>
    import(/* webpackChunkName: 'muiStepContent' */ "@material-ui/core/StepContent").then(
        js => vocab.update("StepContent", js.default)
    )
);
const StepIcon = asyncComponent("StepIcon", () =>
    import(/* webpackChunkName: 'muiStepIcon' */ "@material-ui/core/StepIcon").then(
        js => vocab.update("StepIcon", js.default)
    )
);
const StepLabel = asyncComponent("StepLabel", () =>
    import(/* webpackChunkName: 'muiStepLabel' */ "@material-ui/core/StepLabel").then(
        js => vocab.update("StepLabel", js.default)
    )
);
const Stepper = asyncComponent("Stepper", () =>
    import(/* webpackChunkName: 'muiStepper' */ "@material-ui/core/Stepper").then(
        js => vocab.update("Stepper", js.default)
    )
);
const SvgIcon = asyncComponent("SvgIcon", () =>
    import(/* webpackChunkName: 'muiSvgIcon' */ "@material-ui/core/SvgIcon").then(
        js => vocab.update("SvgIcon", js.default)
    )
);
const SwipeableDrawer = asyncComponent("SwipeableDrawer", () =>
    import(/* webpackChunkName: 'muiSwipeableDrawer' */ "@material-ui/core/SwipeableDrawer").then(
        js => vocab.update("SwipeableDrawer", js.default)
    )
);
const Switch = asyncComponent("Switch", () =>
    import(/* webpackChunkName: 'muiSwitch' */ "@material-ui/core/Switch").then(
        js => vocab.update("Switch", js.default)
    )
);
const Tab = asyncComponent("Tab", () =>
    import(/* webpackChunkName: 'muiTab' */ "@material-ui/core/Tab").then(js =>
        vocab.update("Tab", js.default)
    )
);
const Table = asyncComponent("Table", () =>
    import(/* webpackChunkName: 'muiTable' */ "@material-ui/core/Table").then(
        js => vocab.update("Table", js.default)
    )
);
const TableBody = asyncComponent("TableBody", () =>
    import(/* webpackChunkName: 'muiTableBody' */ "@material-ui/core/TableBody").then(
        js => vocab.update("TableBody", js.default)
    )
);
const TableCell = asyncComponent("TableCell", () =>
    import(/* webpackChunkName: 'muiTableCell' */ "@material-ui/core/TableCell").then(
        js => vocab.update("TableCell", js.default)
    )
);
const TableFooter = asyncComponent("TableFooter", () =>
    import(/* webpackChunkName: 'muiTableFooter' */ "@material-ui/core/TableFooter").then(
        js => vocab.update("TableFooter", js.default)
    )
);
const TableHead = asyncComponent("TableHead", () =>
    import(/* webpackChunkName: 'muiTableHead' */ "@material-ui/core/TableHead").then(
        js => vocab.update("TableHead", js.default)
    )
);
const TablePagination = asyncComponent("TablePagination", () =>
    import(/* webpackChunkName: 'muiTablePagination' */ "@material-ui/core/TablePagination").then(
        js => vocab.update("TablePagination", js.default)
    )
);
//const TablePaginationActions = asyncComponent("TablePaginationActions", () =>
//  import(/* webpackChunkName: 'muiTablePaginationActions' */ "@material-ui/core/TablePaginationActions").then(
//      js => vocab.update("TablePaginationActions", js.default)
//  )
//);
const TableRow = asyncComponent("TableRow", () =>
    import(/* webpackChunkName: 'muiTableRow' */ "@material-ui/core/TableRow").then(
        js => vocab.update("TableRow", js.default)
    )
);
const TableSortLabel = asyncComponent("TableSortLabel", () =>
    import(/* webpackChunkName: 'muiTableSortLabel' */ "@material-ui/core/TableSortLabel").then(
        js => vocab.update("TableSortLabel", js.default)
    )
);
const Tabs = asyncComponent("Tabs", () =>
    import(/* webpackChunkName: 'muiTabs' */ "@material-ui/core/Tabs").then(
        js => vocab.update("Tabs", js.default)
    )
);
const TextField = asyncComponent("TextField", () =>
    import(/* webpackChunkName: 'muiTextField' */ "@material-ui/core/TextField").then(
        js => vocab.update("TextField", js.default)
    )
);
const Toolbar = asyncComponent("Toolbar", () =>
    import(/* webpackChunkName: 'muiToolbar' */ "@material-ui/core/Toolbar").then(
        js => vocab.update("Toolbar", js.default)
    )
);
const Tooltip = asyncComponent("Tooltip", () =>
    import(/* webpackChunkName: 'muiTooltip' */ "@material-ui/core/Tooltip").then(
        js => vocab.update("Tooltip", js.default)
    )
);
const Typography = asyncComponent("Typography", () =>
    import(/* webpackChunkName: 'muiTypography' */ "@material-ui/core/Typography").then(
        js => vocab.update("Typography", js.default)
    )
);
const Zoom = asyncComponent("Zoom", () =>
    import(/* webpackChunkName: 'muiZoom' */ "@material-ui/core/Zoom").then(
        js => vocab.update("Zoom", js.default)
    )
);

const tags = {
    AppBar,
    Avatar,
    Backdrop,
    Badge,
    BottomNavigation,
    BottomNavigationAction,
    Button,
    ButtonBase,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    Chip,
    CircularProgress,
    ClickAwayListener,
    Collapse,
    CssBaseline,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Drawer,
    ExpansionPanel,
    ExpansionPanelActions,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Fade,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
    Grid,
    GridList,
    GridListTile,
    GridListTileBar,
    Grow,
    Hidden,
    Icon,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    LinearProgress,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader,
    Menu,
    MenuItem,
    MenuList,
    MobileStepper,
    Modal,
    NativeSelect,
    NoSsr,
    Paper,
    Popover,
    Popper,
    Portal,
    Radio,
    RadioGroup,
    RootRef,
    Select,
    Slide,
    Snackbar,
    SnackbarContent,
    Step,
    StepButton,
    StepConnector,
    StepContent,
    StepIcon,
    StepLabel,
    Stepper,
    SvgIcon,
    SwipeableDrawer,
    Switch,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TablePagination,
    // TablePaginationActions,
    TableRow,
    TableSortLabel,
    Tabs,
    TextField,
    Toolbar,
    Tooltip,
    Typography,
    Zoom
};

const vocab = newVocab();
export default vocab.merge(newVocab(tags));
