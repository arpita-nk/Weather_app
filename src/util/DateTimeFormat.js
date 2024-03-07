import moment from "moment"

export const convertTime = (t) => {
  return moment.unix(t).format("hh:mm a")
}

export const currentDay = (t) => moment().format("dddd"); 

export const currentTime = (t) => moment().format("h:mm a")