import { CompanyStatsState, ChartDataDay, ChartData } from './interfaces';

export const selectCompanyStats = (companyStats: CompanyStatsState) => {
  return {
    companyStatsLeft: [
      { name: 'Previous Close', value: companyStats.close },
      { name: 'Day Range', value: [companyStats.high, companyStats.low] },
      { name: 'Volume', value: companyStats.latestVolume },
      { name: 'Market Cap', value: companyStats.marketCap },
      { name: 'P/E Ratio', value: companyStats.peRatio },
    ],
    companyStatsRight: [
      { name: 'Open', value: companyStats.open },
      {
        name: '52 Week Range',
        value: [companyStats.week52High, companyStats.week52Low],
      },
      { name: 'Total Avg. Volume', value: companyStats.avgTotalVolume },
      { name: 'Earnings Per Share', value: companyStats.actualEPS },
      { name: 'Dividend & Yield', value: companyStats.dividendYield },
    ],
  };
};

export const selectChartDataDay = (chartDataDay: any[]) => {
  return chartDataDay
    .filter(data => data.average)
    .map(data => ({ dateTime: data.label, price: data.average }));
};

const dateFormatter = (date: string) =>
  date.split('-')[1] + '-' + date.split('-')[2];

export const selectChartDataFiveDay = (fiveDayDataArray: ChartDataDay[]) =>
  fiveDayDataArray
    .filter(data => data.average)
    .map(data => ({ dateTime: dateFormatter(data.date), price: data.average }))
    .reverse();

export const selectChartDataOneMonth = (oneMonthDataArray: ChartData[]) =>
  oneMonthDataArray
    .filter(data => data.close)
    .map(data => ({ dateTime: data.label, price: data.close }));

const yearDateFormatter = (date: string) => {
  const dateYearNow = new Date().getFullYear();

  let dateYear = date.split(' ')[2];
  dateYear = dateYear ? dateYear.toString() : String(dateYearNow).slice(2);

  if (+dateYear > dateYearNow) {
    return '19' + dateYear;
  } else {
    return '20' + dateYear;
  }
};

export const selectChartDataYear = (yearDataArray: ChartData[]) =>
  yearDataArray
    .filter(data => data.close)
    .map(data => ({
      dateTime: yearDateFormatter(data.label.toString()),
      price: data.close,
    }));
