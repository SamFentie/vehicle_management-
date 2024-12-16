import Image from "next/image";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import DynamicTable from "./components/TableWithSearch/TableWithSearch";
import { VscAdd } from "react-icons/vsc";


export default function Home() {
  const thing=[
    {'Vehicle Name':'BMW-89','Status':'102','Last update':'Department'},
    {'Vehicle Name':'KARET','Status':'102','Last update':'Department'},
    {'Vehicle Name':'JKKL','Status':'104','Last update':'Department'},
    {'Vehicle Name':'mJKJ','Status':'104','Last update':'Department'},
    {'Vehicle Name':'ENTO','Status':'102','Last update':'Department'}
]
  return (
    <div className="ml-5 w-full">
      <SectionHeader>Home</SectionHeader>
      <div className="mt-5 flex flex-wrap w-full h-full">
        <div className="mt-5 flex flex-wrap w-full">
          <div className="flex flex-row gap-2 w-full">
          <div className="tooltip w-20" data-tip="Add new vehicle">
              <button className="btn btn-outline btn-success hover:text-white"><VscAdd /></button>
          </div>
          </div>
          <div className="flex w-full">
                <DynamicTable data={thing} path={""} />
          </div>
        </div>
      </div>
    </div>
  );
}
