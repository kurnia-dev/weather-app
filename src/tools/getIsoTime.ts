function getIsoTime(): string {
  const date = new Date();
  const ISODate = date.toISOString();
  const ISODateArray = ISODate.split(":");
  const formatedISODate = ISODateArray[0] + ":00"; // return 'yyyy-mm-ddThh:00'
  return formatedISODate;
}

export default getIsoTime;
