import React, { FC, useState } from "react";
import "./style.css";
import TableTitle from "./tableTitle";
import { switchType } from "./types";

const PriceTable: FC = () => {
  const [state, setState] = useState({
    initial: true,
    installation: true,
    documentation: true,
  });

  const handleSwitch = (property: switchType) => {
    setState({ ...state, [property]: !state[property] });
  };

  return (
    <div>
      <section>
        <div className="table-container">
          <TableTitle
            handleSwitch={handleSwitch}
            title="Начальный этап"
            state={state}
            property="initial"
          />
          <table className={`price-table ${state.initial ? "" : "hideTable"}`}>
            <TableHead />
            <tbody>
              <tr>
                <th className="th-body">
                  Первоначальный выезд на объект (г. Харьков)
                </th>
                <th className="th-head th-body">—</th>
                <th className=" th-head th-body">400</th>
              </tr>
            </tbody>
          </table>
          <TableTitle
            handleSwitch={handleSwitch}
            title="Работы по установке и настройке системы"
            state={state}
            property="installation"
          />
          <table
            className={`price-table ${state.installation ? "" : "hideTable"}`}
          >
            <TableHead />
            <tbody>
              <tr>
                <th className="th-body">Установка и настройка видеокамеры</th>
                <th className="th-head th-body">шт</th>
                <th className=" th-head th-body">500 *</th>
              </tr>
              <tr>
                <th className="th-body">
                  Установка и настройка видеокамеры Speed Dome
                  (роботизированная, поворотная камера)
                </th>
                <th className="th-head th-body">шт</th>
                <th className=" th-head th-body">2300 *</th>
              </tr>
              <tr>
                <th className="th-body">
                  Установка и настройка видеорегистратора
                </th>
                <th className="th-head th-body">шт</th>
                <th className=" th-head th-body">1000 *</th>
              </tr>
              <tr>
                <th className="th-body">Установка и настройка монитора</th>
                <th className="th-head th-body">шт</th>
                <th className=" th-head th-body">300 *</th>
              </tr>

              <tr>
                <th className="th-body">
                  Установка ББП (блок бесперебойного питания)
                </th>
                <th className="th-head th-body">шт</th>
                <th className=" th-head th-body">300 *</th>
              </tr>

              <tr>
                <th className="th-body">
                  Установка и настройка жесткого диска (HDD)
                </th>
                <th className="th-head th-body">шт</th>
                <th className=" th-head th-body">100 *</th>
              </tr>
              <tr>
                <th className="th-body">Настойка удаленного доступа</th>
                <th className="th-head th-body">шт</th>
                <th className=" th-head th-body">400 *</th>
              </tr>
            </tbody>
          </table>
          <TableTitle
            handleSwitch={handleSwitch}
            title=" Работы по предоставлению документации на выполненные работы"
            state={state}
            property="documentation"
          />
          <table
            className={`price-table ${state.documentation ? "" : "hideTable"}`}
          >
            <TableHead />
            <tbody>
              <tr>
                <th className="th-body">Проектная документация</th>
                <th className="th-head th-body">—</th>
                <th className=" th-head th-body">400</th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <div className="initial-title">
          Коэффициенты на установку систем видеонаблюдения
        </div>
        <p className="additional-text">
          *Коэффициент на прокладку кабеля, на высоте более 3-х метров = 1.5
        </p>
        <p className="additional-text">
          *Коэффициент на работы, на улице при температуре ниже 5 градусов
          Цельсия = 1.5
        </p>
      </section>
      <section>
        <div className="initial-title">Другие примечания</div>
        <p className="additional-text">
          *Цена может варьироваться в зависимости от сложности работ и типа
          оборудования.
        </p>
        <p className="additional-text">
          ** Стоимость будет учтена только в случае заключения договора
        </p>
      </section>
    </div>
  );
};

const TableHead: FC = () => {
  return (
    <thead>
      <tr>
        <th className="th-head th-head-color">Наименование</th>
        <th className="th-head th-head-color">Ед. изм.</th>
        <th className="th-head th-head-color">Цена, грн</th>
      </tr>
    </thead>
  );
};

export default PriceTable;
