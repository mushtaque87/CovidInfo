//Helper file to keep all utilities and common
export const sortCovidEffectedCountries = (data, top: number) => {
  data?.sort(function (obj1, obj2) {
    return obj2.TotalConfirmed - obj1.TotalConfirmed;
  });
  return data?.slice(0, top);
};

export const sortCountriesOnCaseType = (data, caseType: number = 0 , sortType: number = 0) => {
  data?.sort(function (obj1, obj2) {
    switch(caseType) {
      case 0:
        return sortType === 1 ? obj2.TotalConfirmed - obj1.TotalConfirmed : obj1.TotalConfirmed - obj2.TotalConfirmed ;
      case 1:
        return sortType === 1 ? obj2.TotalDeaths - obj1.TotalDeaths : obj1.TotalDeaths - obj2.TotalDeaths;
      case 2:
        return sortType === 1 ?  obj2.TotalRecovered - obj1.TotalRecovered : obj1.TotalRecovered - obj2.TotalRecovered ;
    }
  });
  return data;
};
