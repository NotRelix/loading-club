const { formatDistanceStrict } = require("date-fns");

function formatDate(date) {
  return formatDistanceStrict(new Date(date), new Date(), {addSuffix: true});
}

module.exports = {
  formatDate,
};
