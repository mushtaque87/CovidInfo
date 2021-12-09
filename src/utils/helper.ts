//Helper file to keep all utilities and common
export const sortCovidEffectedCountries = (data, top: number) => {
  data?.sort(function (obj1, obj2) {
    return obj2.TotalConfirmed - obj1.TotalConfirmed;
  });
  return data?.slice(0, top);
};
