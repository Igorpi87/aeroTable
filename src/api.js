import data from "./data.json";
import { ALL } from "./statuses";

// fake api
export function fetchFlights(req) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredData = filterData(data, req); // fake server side filtering
      resolve(filteredData);
    }, 100); // simulate server latancy
  });
}

function filterData(data, { search = "", status = ALL }) {
  search = search.toLowerCase();
  return data.filter(x => {
    let result = true;
    if (search && !~x.thread.uid.toLowerCase().indexOf(search)) {
      result = false;
    }
    if (status !== ALL && x.status !== status) {
      result = false;
    }
    return result;
  });
}
