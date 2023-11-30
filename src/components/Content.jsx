import React from 'react'
import Avatar from "@mui/material/Avatar";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa6";

import { Rating, Box } from "@mui/material";
import { Star } from "@mui/icons-material";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

const Content = (props) => {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
  return (
    <>
          <div className="mainSlide">
            <div className="Client">
              <Avatar alt="Remy Sharp" src={props.img} />
              <div className="text-box">
                <h2>{props.name}</h2>
                <span>{props.position}</span>
              </div>
            </div>

            <p>
              <FaQuoteLeft style={{ fontSize: "20px", color: "burlywood" }} />
              Because websites are often complex, a term "content management"
              appeared in the late 1990s identifying a method or in some cases a
              tool to organize all the diverse elements to be contained on a
              website.
              <FaQuoteRight style={{ fontSize: "17px", color: "burlywood" }} />
            </p>

            <b style={{ width: "100%", height: "10vh", color: "grey" }}>
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </b>
          </div>
    </>
  )
}

export default Content