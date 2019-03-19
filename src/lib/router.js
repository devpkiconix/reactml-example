import { asyncComponent } from "@iconix/reactml/build/render";
import { newVocab } from "@iconix/reactml";

let loadPromise = null;

const loader = () =>
	loadPromise
		? loadPromise
		: (loadPromise = import(/* webpackChunkName: 'react-router-dom' */ "react-router-dom"));

const Router = asyncComponent("Router", () =>
	loader().then(js => vocab.update("Router", js.HashRouter))
);
const Switch = asyncComponent("Switch", () =>
	loader().then(js => vocab.update("Switch", js.Switch))
);
const Route = asyncComponent("Route", () =>
	loader().then(js => vocab.update("Route", js.Route))
);
const Link = asyncComponent("Link", () =>
	loader().then(js => vocab.update("Link", js.Link))
);

// export default vocab =>
// 	vocab
// 		.update("Switch", Switch)
// 		.update("Route", Route)
// 		.update("Link", Link);

const vocab = newVocab({ Router, Route, Switch, Link });
export default vocab;
