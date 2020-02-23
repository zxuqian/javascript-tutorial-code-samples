/**
 *
 * @param {Date} date
 */
function formatDate(date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

const DAYS_OF_YEAR = 365;

// export { formatDate, DAYS_OF_YEAR };
export default formatDate;
export { DAYS_OF_YEAR };
