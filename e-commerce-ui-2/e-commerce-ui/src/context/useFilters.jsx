import { useContext } from "react"
import {FilterContext} from "./FilterContext"

export const useFilters = ()=> useContext(FilterContext);
