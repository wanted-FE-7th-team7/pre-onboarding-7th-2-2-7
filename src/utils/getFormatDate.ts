export const getFormatDate = (date: Date) => {
  const year = date.getFullYear();
  let month: string | number = 1 + date.getMonth();
  let day: string | number = date.getDate();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;

  return `${year}-${month}-${day}`;
};
