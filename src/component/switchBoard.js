import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import SwitchDetail from "./SwitchDetail";
const SwitchBoard = (props) => {
  const { idx, data, setData } = props;
  const [switchNumber, setSwitchNumber] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [roomData, setRoomData] = useState();

  //   console.log("In Switch Board::", idx, roomData);

  return (
    <div
      style={{
        padding: "2rem",
        margin: "1rem",
        border: "1px solid black",
      }}
    >
      {isSubmit ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div>{idx + 1}</div>
          {roomData.map((ele, i) => {
            return (
              <SwitchDetail
                switchIdx={i}
                roomIdx={idx}
                data={data}
                setData={setData}
              />
            );
          })}
        </Box>
      ) : (
        <>
          <TextField
            id="outlined-required"
            label="Enter Switch Board Number"
            type={Number}
            //   disabled={isSubmit}
            //   defaultValue={0}
            onChange={(e) => {
              setSwitchNumber(e.target.value);
            }}
          />

          <Button
            variant="contained"
            onClick={() => {
              let newArray = [];
              newArray[switchNumber - 1] = 2;
              newArray.fill(2);
              let newData = newArray.map((ele, idx) => {
                return {
                  switchboardNumber: idx + 1,
                  appliances: {
                    fans: 0,
                    lightLoad: 0,
                    heavyLoad: 0,
                  },
                };
              });
              setRoomData(newData);
              let newData2 = data;
              newData2[idx].switchboards = newData;
              setData([...newData2]);
              setIsSubmit(true);
            }}
          >
            Enter
          </Button>
        </>
      )}
    </div>
  );
};

export default SwitchBoard;
