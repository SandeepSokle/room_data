import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import SwitchBoard from "./switchBoard";

const Main = () => {
  const [roomNumber, setRoomNumber] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [data, setData] = useState();
  const [isSubmit, setIsSubmit] = useState(false);

  console.log(data);
  return (
    <div>
      <Box
        sx={{
          padding: "2rem",
        }}
      >
        <TextField
          id="outlined-required"
          label="Enter Room Number"
          type={Number}
          disabled={isSubmit}
          //   defaultValue={0}
          onChange={(e) => {
            setRoomNumber(e.target.value);
          }}
        />
        <TextField
          id="outlined-required"
          label="Enter Mobile Number"
          type={Number}
          disabled={isSubmit}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          //   defaultValue={0}
        />
      </Box>
      {isSubmit ? (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {data.map((ele, idx) => {
              return <SwitchBoard idx={idx} data={data} setData={setData} />;
            })}
          </Box>
          <Button
            variant="contained"
            onClick={() => {
              console.log("Final Data", data);
            }}
          >
            Submit
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          onClick={() => {
            let newArray = [];
            newArray[roomNumber - 1] = 2;
            newArray.fill(2);
            let newData = newArray.map((ele, idx) => {
              return {
                roomNumber: idx + 1,
                switchboards: [],
              };
            });
            setData(newData);
            setIsSubmit(true);
          }}
        >
          Enter
        </Button>
      )}
    </div>
  );
};

export default Main;
