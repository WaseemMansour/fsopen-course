import React from 'react'
import {NoFeedBackGiven} from "./NoFeedBackGiven.jsx";
import {StatisticLine} from "./StatisticLine.jsx";

export const Statistics = ({ feedback }) => {
  const noFeedBackGiven = Object.values(feedback).every((option) => option === 0);
  const total = Object.values(feedback).reduce((acc, current) => acc + current, 0);
  const average = ((feedback['Good'] - feedback['Bad']) / total).toFixed(2);
  const positive = ((feedback['Good'] / total) * 100).toFixed(2);

  return (
    <>
      <h2>Statistics</h2>
      { noFeedBackGiven
        ? <NoFeedBackGiven />
        : (
          <table className='statistics-table'>
            <thead></thead>
            <tbody>
              {Object.entries(feedback).map(([key, value]) => (
                <StatisticLine key={key} text={key} value={value} />
              ))}
              <StatisticLine text='all' value={total} />
              <StatisticLine text='average' value={average} />
              <StatisticLine text='positive' value={`${positive} %`} />
            </tbody>
            <tfoot></tfoot>
          </table>
        )
      }
    </>
  )
}
