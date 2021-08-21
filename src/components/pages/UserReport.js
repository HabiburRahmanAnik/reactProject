import React, { useEffect, useState } from 'react';
import classes from './TableCommon.module.css';
import useHttp from '../hooks/use-http';
import ReportList from './ReportList';

const UserReport = () => {
  const {isLoading,sendRequest } = useHttp();
  const [reports, setReports] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [enteredId, setId] = useState('');

  useEffect(() => {
    const reports = (data) => {
      setReports(data);
    };
    sendRequest({ url: 'http://localhost:8000/api/userReport' }, reports);
  }, [sendRequest]);

  const optionChange = (option) => {
    setSelectedOption(option);
  };

  const findId = (id) => {
    setId(id);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      status: selectedOption,
    };

    if (selectedOption === 'working' || selectedOption === 'fixed') {
      const reports = (data) => {
        setReports(data);
      };
      sendRequest(
        {
          url: `http://localhost:8000/api/report/${enteredId}`,
          method: 'PUT',
          body: data,
          headers: {
            'Content-Type': 'application/json',
          },
        },
        reports
      );
    }
  };

  return (
    <>
      {isLoading && <div className={classes.loader}></div>}
      {!isLoading && <form onSubmit={submitHandler}>
          <table
            className={classes.tables}
            style={{ marginTop: '150px', minWidth: '60%' }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Message</th>
                <th>Status</th>
                <th>Issue Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <ReportList
                  key={report.id}
                  id={report.id}
                  name={report.name}
                  status={report.status}
                  message={report.message}
                  onOptionChange={optionChange}
                  findId={findId}
                />
              ))}
            </tbody>
          </table>
        </form>
      }
    </>
  );
};

export default UserReport;
