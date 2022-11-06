export const getFormatDate = date => {
  const year = date.getFullYear();
  let month = 1 + date.getMonth();
  let day = date.getDate();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;

  return `${year}-${month}-${day}`;
};

export const getThisWeek = () => {
  const currentDay = new Date();
  const theYear = currentDay.getFullYear();
  const theMonth = currentDay.getMonth();
  const theDate = currentDay.getDate();
  const theDayOfWeek = currentDay.getDay();
  const thisWeek = [];

  for (let i = 0; i < 7; i++) {
    const resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
    const yyyy = resultDay.getFullYear();
    let mm = Number(resultDay.getMonth()) + 1;
    let dd = resultDay.getDate();

    mm = String(mm).length === 1 ? '0' + mm : mm;
    dd = String(dd).length === 1 ? '0' + dd : dd;

    thisWeek[i] = yyyy + '-' + mm + '-' + dd;
  }

  return thisWeek;
};
