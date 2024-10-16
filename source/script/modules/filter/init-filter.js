import {rerender} from "./rerender.js";
import {listenFilter} from "./listen-filter.js";

export function initFilter() {
  rerender();
  listenFilter(rerender);
}
