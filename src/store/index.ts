import { createStore, compose } from "redux"
import redusers from "../reducers"
import middlewares from "../middlewares"

declare const reduxNativeDevToolsCompose: any
const composeAction = reduxNativeDevToolsCompose ? reduxNativeDevToolsCompose : compose
const store = createStore(redusers, composeAction(middlewares))

export default store