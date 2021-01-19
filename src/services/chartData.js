import { chartDataParser } from './chartDataParser'

import { capitalizeFirstLetter } from '../utils'

export const getEventsByType = (data, type) => {
    if (!data || data.length === "0") return {};
    const events = data.filter((item) => item.type === type);
    return events;
  };
  

export const chartData = (data) => {

    //Return a valid JSON with the incoming data
    const chartData = chartDataParser(data)
    
    // Filtering JSON data to make it easier to work
    const getStartParameters = getEventsByType(chartData, 'start')
    const startParameters = getStartParameters ? getStartParameters[0] : null

    const getSpanParameters = getEventsByType(chartData, 'span')
    const spanParameters = getSpanParameters ? getSpanParameters[0] : null

    const getStopTimestamp = getEventsByType(chartData, 'stop')
    const stopTimestamp = getStopTimestamp ? getStopTimestamp[0] ? getStopTimestamp[0].timestamp : null : null

    const getDataValues = getEventsByType(chartData, 'data')
    let dataValues = getDataValues ? getDataValues : []

    // Limiting the amount of records, taking the last 8 records, to prevent the graph from becoming too full of data.
    if(dataValues.length > 8) {
        let newdataValues = []
        for(let i = 1; i <= 8 ; i++) {
            newdataValues.push(dataValues[dataValues.length-i]);
        }
        dataValues = newdataValues
    }


    const select = startParameters ? startParameters.select ? startParameters.select : null : null
    const groups = startParameters ? startParameters.group ? startParameters.group : null : null
    const begin = spanParameters ? spanParameters.begin ? spanParameters.begin : null : null
    const end = spanParameters ? spanParameters.end ? spanParameters.end : null : null
    const stop = stopTimestamp ? stopTimestamp.end ? stopTimestamp.end : null : null

    const getSeriesChartValues = (dataValues) => {

        let series = dataValues
        const newSeries = []
        
        
        //Filtering to only display the data within the period passed in the span, however it only happens if there are any of the fields
        if(begin) {
            series = series.filter(item => item.timestamp >= begin)
        }
        if(end) {
            series = series.filter(item => item.timestamp <= end)
        }
        

        //Generates two lines in the graph for each record, the first from 0 to min_response_time, and the second from min_response_time to max_response_time

        if(series) {
            for(let i = 0; i <= series.length ; i++) {
                if(series[i]) {
                    newSeries.push({
                        // "timestamp": series[i].timestamp,
                        "name": capitalizeFirstLetter(series[i].os) + ' - ' + capitalizeFirstLetter(series[i].browser) + ' - Min Response Time',
                        "data": [0, series[i].min_response_time]
                    })
                    newSeries.push({
                        // "timestamp": series[i].timestamp,
                        "name": capitalizeFirstLetter(series[i].os) + ' - ' + capitalizeFirstLetter(series[i].browser) + ' - Max Response Time',
                        "data": [series[i].min_response_time, series[i].max_response_time]
                    })
                }
            }
        }
        return newSeries
    }
    const seriesChartValues = getSeriesChartValues(dataValues)
    return {
        seriesChartValues,
        begin,
        end,
        stop
    }
}
