import {fetchData} from "@/script/modules/filter/fetch-data.js";
import {filterData} from "@/script/modules/filter/filter-data.js";
import {renderData} from "@/script/modules/filter/render-data.js";

export async function rerender() {
  const data = await fetchData();
  const hash = window.location.hash;
  const filteredData = filterData(data, hash);
  renderData(filteredData);
}
