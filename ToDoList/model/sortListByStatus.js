import { STATUS } from "../components/ui/constans.js";

export function sortByStatus(arr) {
  arr.sort(function (a, b) {
    if (a.status === STATUS.COMPLETE && b.status !== STATUS.COMPLETE) {
      return 1;
    } else if (a.status !== STATUS.COMPLETE && b.status === STATUS.COMPLETE) {
      return -1;
    } else {
      return 0;
    }
  });
  return arr;
}
