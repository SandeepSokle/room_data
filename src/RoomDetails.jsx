import React, { useState } from "react";

export default function RoomDetails() {
  const [roomc, setRoom] = useState(0);
  let [roomn, setRoomn] = useState("");
  let [userData, setUserData] = useState([]);
  let [conflict, setConflict] = useState(true);
  let [SwitchBor, setSwitch] = useState([]);

  const [mainData, setMainData] = useState({});

  console.log("SwitchBor", SwitchBor);

  let arr = [];
  if (roomc !== 0) {
    arr[roomc - 1] = 2;
    arr.fill(6);
    console.log(arr.length);
  }
  // let sw = [];
  // if (SwitchBor !== 0) {
  //   sw[SwitchBor - 1] = 2;
  //   sw.fill(6);
  //   console.log(sw.length);
  // }

  return (
    <div>
      <table>
        <tr>
          <td>
            <label>Enter nunber of rooms ypu want ?</label>
          </td>
          <td>
            <input
              type="number"
              value={roomn}
              onChange={(e) => {
                setRoomn(e.target.value);
                // setUserData({...userData,)
              }}
            ></input>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <button
              onClick={() => {
                setRoom(roomn);
                console.log(roomn);
                setRoomn("");
              }}
            >
              Submiited
            </button>
          </td>
        </tr>
      </table>
      <div>
        {arr.length !== 0
          ? arr.map((e, i) => {
              return (
                <div style={{ border: "2px solid black" }}>
                  <tr>
                    <td key={i + 1}>
                      Enter number of SwitchBord in Room {i + 1}
                    </td>
                    <td>
                      <input
                        type="number"
                        value={SwitchBor[i]}
                        onChange={(e) => {
                          let data = SwitchBor;
                          data[i] = e.target.value;
                          console.log(data);

                          let switchData = Array.from(Array(parseInt(e.target.value)).keys()).map((ele, idx) => {
                            return {
                              switchNumber: idx + 1,
                              appliances: {
                                fans: 0,
                                lightLoad: 0,
                                heavyLoad: 0,
                              },
                            };
                          });

                          setSwitch([...SwitchBor,{
                            roomNumber: i + 1,
                            switchBoards: switchData,
                          }]);
                          setConflict(!conflict);
                        }}
                      ></input>
                    </td>
                  </tr>
                  {
                  // SwitchBor[i]?.switchBoards?.length > 0
                  //   ? 
                    SwitchBor[i]?.switchBoards?.map(
                        (e, id) => {
                          return (
                            <div>
                              <tr>
                                <td>Number of fans</td>
                                <td>
                                  <input
                                    type="number"
                                    onChange={(e) => {
                                      let number = e.target.value;
                                      let newData = SwitchBor;
                                      let newgod = SwitchBor;

                                      newData.filter((ele) => {
                                        return ele.roomNumber === i + 1;
                                      });

                                      newgod.filter((ele) => {
                                        return ele.roomNumber !== i + 1;
                                      });
                                      
                                      newData.switchBoards[id].appliances.fans =
                                      number;
                                      newgod.push(newData)
                                      setSwitch(newgod);
                                    }}
                                  ></input>
                                </td>


                              </tr>
                              <tr>
                                <td>Number of light</td>
                                <td>
                                  <input
                                    type="number"
                                    onChange={(e) => {
                                      let number = e.target.value;
                                      let newData = SwitchBor;
                                      newData.filter((ele) => {
                                        return ele.roomNumber === i + 1;
                                      });

                                      newData.switchBoards[id].appliances.lightLoad =
                                        number;

                                      setSwitch(newData);
                                    }}
                                  ></input>
                                </td>
                              </tr>
                              <tr>
                                <td>Number of Ac</td>
                                <td>
                                  <input
                                    type="number"
                                    onChange={(e) => {
                                      let number = e.target.value;
                                      let newData = SwitchBor;
                                      newData.filter((ele) => {
                                        return ele.roomNumber === i + 1;
                                      });

                                      newData.switchBoards[id].appliances.heavyLoad =
                                        number;

                                      setSwitch(newData);
                                    }}
                                  ></input>
                                </td>
                              </tr>
                            </div>
                          );
                        }
                      )
                    // : null
                    }
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
