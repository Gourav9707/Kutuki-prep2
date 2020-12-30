import React from "react";

export default function Table({ coloumn, data }) {
  return (
    <>
      <table>
        <tr className='tablehead'>
          {coloumn.map((el) => (
            <th >{el}</th>
          ))}
        </tr>

        {data.map((el, index) => (
          <tr className={"tablerow "+(index%2==0?"even":"odd")}>
            <td>{el.classno}</td>
            <td>{el.day}</td>
            <td>{el.time}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
