import React, { createContext, useState, useContext } from "react";
import data from './data/data.json';

const JobsContext = createContext();

export const useJobs = () => useContext(JobsContext);

export default function CountryProvider ({ children }) {

    const [jobs, setJobs] = useState(data);

    const [filters, setFilters ] = useState([]);

    const addFilter = (filter) => {
        if  ( filters.includes(filter) ) return;
        setFilters([...filters, filter])
    }

    const removeFilter = (filter) => {
        setFilters(filters.filter((f) => f !== filter ));
    }

    const clearFilters = () => {
        setFilters([]);
    }

    const filterFunction = ({role, level, tools, languages}) => {
        if ( filters.length === 0 ){
            return true;
        }

        const tags = [role, level];

        if (tools ){
            tags.push(...tools);
        }

        if (languages ) {
            tags.push(...languages);
        }

        return filters.every(filter => tags.includes(filter));

    }

    const filteredJobs = jobs.filter(filterFunction);

    return (
        <JobsContext.Provider value={{ addFilter, removeFilter, clearFilters, filters, filteredJobs }} >
            {children}
        </JobsContext.Provider>
    );
}
