import axios from "axios";
import {useQuery} from "react-query";

function FetchCovidSummary() {
    return useQuery("countries", async () => {
        const { data } = await axios.get(
            "https://api.covid19api.com/summary"
        );
        //console.log('countries summary',data);
        return data;
    });
}

function FetchAllCountries() {
    return useQuery("countries", async () => {
        const { data } = await axios.get(
            "https://api.covid19api.com/countries"
        );
       // console.log('countries summary',data);
        return data;
    });
}


export {FetchCovidSummary, FetchAllCountries};
