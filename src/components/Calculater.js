import React, { useEffect, useState } from "react";
import _ from "lodash";

const CalculaterStep1 = (props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-10 lg:px-10">
      <div className="max-w-md  w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            إحسب معدلك الفصلي من 4
          </h2>
        </div>
        <div className="rounded shadow-sm -space-y-px text-right">
          <div>
            <label>عدد مواد الفصل</label>
            <input
              type="number"
              className="text-right appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              inputMode="decimal"
              step="1"
              name="T1"
              size="22"
              max="22"
              required=""
              onChange={(e) => {
                props.setHours(e.target.value);
              }}
            />
          </div>
        </div>

        <div>
          <button
            onClick={() => {
              var array = [];
              for (let i = 0; i < props.hours; i++) {
                array.push({
                  id: i,
                  hours: 0,
                  mark: 0,
                });
              }
              props.setData(array);
              props.steps();
            }}
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            متابعة
          </button>
        </div>
      </div>
    </div>
  );
};
const CalculaterForm = (props) => {
  const [hour, setHour] = useState(0);
  const [mark, setMark] = useState(0);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-10 lg:px-10">
      <div className="max-w-screen-lg  w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            إحسب معدلك الفصلي من 4
          </h2>
        </div>
        <div className="rounded shadow-sm -space-y-px text-right">
          <div>
            <button
              onClick={props.addHours}
              type="submit"
              className="group relative mx-2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              اضافة مادة
            </button>

            <table className="w-full">
              <thead>
                <tr className="bg-gray-800">
                  <th className="p-4">
                    <span className="text-gray-300">
                      علامات مواد الفصل الحالي
                    </span>
                  </th>

                  <th className="p-4">
                    <span className="text-gray-300">عدد الساعات</span>
                  </th>
                  <th className="p-4">
                    <span className="text-gray-300">العلامة من 4</span>
                  </th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody className="bg-gray-300 p-4">
                {props.data &&
                  props.data.map((row, i) => (
                    <tr key={row.id}>
                      <td className="text-gray-900 p-3">المادة رقم {row.id}</td>
                      <td>
                        <select
                          onChange={(e) => {
                            setHour(e.target.value);
                            props.updateData({
                              id: row.id,
                              hours: e.target.value,
                              mark: row.mark,
                            });
                          }}
                          className="text-right appearance-none rounded relative block w-3/4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          name="section-1"
                          id="section-1"
                          defaultValue="0"
                          required={true}
                        >
                          <option value="0"> عدد الساعات </option>
                          <option value="1"> 1 </option>
                          <option value="2"> 2 </option>
                          <option value="3"> 3 </option>
                          <option value="4"> 4 </option>
                          <option value="5"> 5 </option>
                          <option value="6"> 6 </option>
                        </select>
                      </td>
                      <td>
                        <input
                          onChange={(e) => {
                            setMark(e.target.value);
                            props.updateData({
                              id: i,
                              hours: row.hours,
                              mark: e.target.value,
                            });
                          }}
                          defaultValue="0"
                          type="number"
                          className="text-right appearance-none rounded relative block w-4/5 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          inputMode="decimal"
                          step="0.25"
                          name="T1"
                          size="4"
                          max="4"
                          min="0"
                          required={true}
                        />
                      </td>
                      <td>
                        <button
                          data-attr={i}
                          onClick={() => props.removeHour(row.id)}
                          className="group relative w-full flex justify-center my-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          x
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-sm font-medium rounded-md text-white text-indigo-600 ">
          المعدل الفصلي من 4 : {props.nowAvg}
        </div>

        <div>
          <button
            onClick={props.calcAvg}
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            إحسب
          </button>
        </div>
      </div>
    </div>
  );
};

const Calculater = () => {
  const [numberOfData, setNumberOfData] = useState(0);
  const [hours, setHours] = useState(0);
  const [data, setData] = useState([]);
  const [nowAvg, setNowAvg] = useState(0);

  const setStepForm = () => {
    setNumberOfData(numberOfData + 1);
  };
  const addHours = () => {
    var array = [...data];
    array.push({
      id: data.length + 1,
      mark: 0,
      hours: 0,
    });
    setData(array);
    setHours(parseInt(hours) + 1);
  };
  const updateData = (datas) => {
    if (data.length > 0) {
      const find =
        data.length > 0 &&
        _.filter([data], function (o) {
          return o.id === datas.id;
        });
      if (find.length > 0) {
        find[0].hours = datas.hours;
        find[0].mark = datas.mark;
        setData({ ...data, [datas.id]: find[datas.id] });
      } else {
        let newArr = [...data]; // copying the old datas array
        newArr[datas.id] = datas;
        setData(newArr);
      }
    } else {
      setData([datas]);
    }
  };

  const calcAvg = () => {
    let nowAvg = 0;
    let nowHours = 0;
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      nowAvg += parseInt(row.mark) * parseInt(row.hours);
      nowHours += parseInt(row.hours);
    }
    setNowAvg(parseInt(nowAvg) / parseInt(nowHours));
  };
  const removeHour = (i) => {
    const arrayCopy = data.filter((row) => row.id !== i);
    setData(arrayCopy);
  };

  useEffect(() => {
    setData(data);
  }, [data, setData]);
  return (
    <div id="calculator">
      <div className="block-clac">
        <div className="block">
          {numberOfData === 0 ? (
            <CalculaterStep1
              steps={setStepForm}
              setHours={setHours}
              hours={hours}
              setData={setData}
              data={data}
            />
          ) : (
            <CalculaterForm
              hours={hours}
              setData={setData}
              data={data}
              addHours={addHours}
              updateData={updateData}
              calcAvg={calcAvg}
              nowAvg={nowAvg}
              removeHour={removeHour}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculater;
