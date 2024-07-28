import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PieChart } from '@mui/x-charts/PieChart';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
    return (
        <div className="flex-2 shadow-md p-2 ml-9 border-4 border-[color:var(--Stroke-Color,#EFF0F6)] rounded-3xl border-solid w-[450px] h-[450px] hover:bg-slate-200">
            <div className="flex items-center justify-between text-gray-700 ">
                <h1 className=" text-xl font-bold">Excel Candidates</h1>
                <MoreVertIcon className="text-sm" />
            </div>
            <div className="p-2 flex flex-col items-center justify-center gap-15 ">
                <div className="featuredChart">
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 30 },
                                    { id: 1, value: 10 },
                                    { id: 2, value: 60 },
                                ],
                                innerRadius: 50,
                                outerRadius: 100,
                                paddingAngle: 5,
                                cornerRadius: 8,
                                startAngle: -90,
                                endAngle: 180,
                                cx: 150,
                                cy: 150,
                            },
                        ]}
                        width={300}
                        height={150}
                    />

                </div>
                <p className=" font-bold text-neutral-800 ">Excel</p>
                <p className="text-3xl text-neutral-700 font-mono">Lorem</p>
                <p className=" font-mono text-12 text-neutral-600 text-center">
                    Provided Students are selected
                </p>
                <div className=" w-full flex items-center justify-between">
                    <div className=" text-center">
                        <div className=" text-14 text-neutral-800">Lorem</div>
                        <div className="negative flex items-center mt-2 text-14">
                            <KeyboardArrowDownIcon className="text-sm text-black" />
                            <div className=" text-neutral-800">Lorem</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className=" text-14 text-neutral-800">Lorem</div>
                        <div className=" positive flex items-center mt-2 text-14">
                            <KeyboardArrowUpOutlinedIcon className="text-sm text-black" />
                            <div className=" text-neutral-800">Lorem</div>
                        </div>
                    </div>
                    <div className="item text-center">
                        <div className=" text-14 text-neutral-800">Lorem</div>
                        <div className=" positive flex items-center mt-2 text-14">
                            <KeyboardArrowUpOutlinedIcon className="text-sm text-black" />
                            <div className=" text-neutral-800">Lorem</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
