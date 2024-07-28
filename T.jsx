import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Host from "../assets/Host.jpg";

const T = () => {
  const rows = [
    {
      id: 1143155,
      img: Host,
      name: "Agam Srivastava",
      date: "1 March",
      role: "Backend Developer",
      status: "Selected",
    },
    {
      id: 2235235,
      img: Host,
      name: "Aditya Panigrahy",
      date: "17 June",
      role: "Frontend Developer",
      status: "Selected",
    },
    {
      id: 2342353,
      img: Host,
      name: "Appy",
      date: "12 November",
      role: "Machine Learning",
      status: "Selected",
    },
    {
      id: 2357741,
      img: Host,
      name: "Gourav",
      date: "13 September",
      role: "Graphic Designer",
      status: "Selected",
    },
    {
      id: 2342355,
      img: Host,
      name: "Prachi Dutta",
      date: "21 July",
      role: "App Developer",
      status: "Selected",
    },
  ];
  return (
    <div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table bg-black">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell items-center">Interview ID</TableCell>
              <TableCell className="tableCell">Image</TableCell>
              <TableCell className="tableCell">Name</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Applied Job</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell ">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper flex items-center">
                    <img src={row.img} alt="" className="image w-12 h-30 rounded-full mr-10 object-fill" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.name}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.role}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status} p-5 rounded-5`} >{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default T;