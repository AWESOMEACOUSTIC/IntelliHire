import Sidebar from "./Sidebar";
import Nav from "./Nav";
import DataTable from "./DataTable";

const List = () => {
    return (
        <div className="flex">
          <Sidebar/>
          <div className="flex-[1111px]">
            <Nav/>
            <DataTable/>
          </div>
        </div>
      )
    }
export default List;
