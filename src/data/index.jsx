import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import StorageIcon from '@mui/icons-material/Storage';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import taskTrackerPic from "../assets/mytasks_photo.png"
import busTrackerPic from "../assets/bus_tracker.png"

export const skills = [
  {
    id: "1",
    src: <ArtTrackIcon style={{ fontSize: "80px", color: "#19bc9b" }} />,
    title: "Front-End",
    description:
      "Strong experience constructing reusable front-end components using tools like Typescript, React, Material UI and React Query.",
  },
  {
    id: "2",
    src: <StorageIcon style={{ fontSize: "80px", color: "#19bc9b" }} />,
    title: "Back-End",
    description:
      "Working experience with widely used back-end tools like MongoDB, MySql, GraphQl and Postman.",
  },
  {
    id: "3",
    src: <PeopleAltIcon style={{ fontSize: "80px", color: "#19bc9b" }} />,
    title: "Techniques",
    description:
      "Placed in small and large groups to produce softwares working within agile and pair programming environments.",
  },
];

export const portfolio = [
  {
    id: "2",
    src: "https://media.giphy.com/media/DXMyC8EHbL9AqPnvyD/giphy.gif",
    title: "Bad-Bank",
    description:
      "A simulation banking application within the MERN stack where one can create an account, log in, deposit, and withdraw funds.",
    link: "https://github.com/julesd23/bad-bank",
  },
  {
    id: "1",
    src: taskTrackerPic,
    title: "Full Stack Task Tracker",
    description:
      "An excercise in using NextJs with Clerk for authentication, a MongoDB database, and Mantine as a styling library.",
    link: "https://github.com/julesd23/mytasks",
  },
  {
    id: "3",
    src: busTrackerPic,
    title: "Real Time Bus Tracker",
    description:
      "This is a simple project to display how one can integrate both the Mapbox and the Boston MBTA APIs to display live bus locations.",
    link: "https://github.com/julesd23/Real_time_bus_tracker",
  },
];
