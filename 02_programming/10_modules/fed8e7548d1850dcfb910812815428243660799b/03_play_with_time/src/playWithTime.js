import moment from "moment.js";

const formatDate = (date) => {
  return moment(date).format("dddd Do MMMM YYYY");
};

const yearsSinceDate = (date) => {
  return moment(date).fromNow();
};

const getDayFromDate = (date) => {
  return moment(date).format("dddd");
};

const daysSinceDate = (date) => {
  return moment().diff(moment([date]), "years");
};

export { formatDate, yearsSinceDate, getDayFromDate, daysSinceDate };
