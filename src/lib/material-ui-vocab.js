// tslint:disable:variable-name
import { newVocab } from "@iconix/reactml/build/rtmlVocab";
import { asyncComponent } from "@iconix/reactml/build/render";
// import Grid from '@material-ui/core/Grid';
// tslint:disable-next-line:no-default-export
const vocab = newVocab();

import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Backdrop from "@material-ui/core/Backdrop";
import Badge from "@material-ui/core/Badge";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Collapse from "@material-ui/core/Collapse";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Fade from "@material-ui/core/Fade";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import LinearProgress from "@material-ui/core/LinearProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import MobileStepper from "@material-ui/core/MobileStepper";
import Modal from "@material-ui/core/Modal";
import NativeSelect from "@material-ui/core/NativeSelect";
import NoSsr from "@material-ui/core/NoSsr";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import Popper from "@material-ui/core/Popper";
import Portal from "@material-ui/core/Portal";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import RootRef from "@material-ui/core/RootRef";
import Select from "@material-ui/core/Select";
import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import StepConnector from "@material-ui/core/StepConnector";
import StepContent from "@material-ui/core/StepContent";
import StepIcon from "@material-ui/core/StepIcon";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import SvgIcon from "@material-ui/core/SvgIcon";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Switch from "@material-ui/core/Switch";
import Tab from "@material-ui/core/Tab";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";

// const TablePaginationActions = asyncComponent("TablePaginationActions", () =>
// 	import(  webpackChunkName: 'muiTablePaginationActions'  '@material-ui/core/TablePaginationActions')
// );
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Tabs from "@material-ui/core/Tabs";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";

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

// tslint:disable-next-line:no-default-export
export default vocab.merge(newVocab(tags));
