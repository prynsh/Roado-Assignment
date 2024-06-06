
import {DashboardCard} from './components/DashboardCard';
import { QuickActionsCard } from './components/QuickActions';
import {SearchIcons} from './components/SearchIcons';
import vector from "./assets/Vector.png";
import { FiTruck, FiUser } from 'react-icons/fi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BottomCard } from './components/BottomCard';

export default function Home() {
  return (
    <div className="flex">
        <div className="bg-red-500 ">
          Sidebar
        </div>
        <div className='bg-yellow-500'>
        <div className=''>
              Dashboard
              </div>
              <div className='flex justify-end pb-5 '>
            <SearchIcons/>
            </div>
            <div className='flex justify-around'>
          <DashboardCard title='Orders' total={123456} upcoming={50} ongoing={100} completed={50}/>
          <DashboardCard title='Trips'total={123456} upcoming={50} ongoing={100} completed={50}/>
          <DashboardCard title='Revenues'total={123456} upcoming={50} ongoing={100} completed={50}/>
          <DashboardCard title='Expenses'total={123456} upcoming={50} ongoing={100} completed={50}/>
        </div>
        <div>
          Quick Actions
        </div>
        <div className="flex flex-col space-y-4 p-10">
            <div className="bg-white rounded-lg shadow-md p-4 flex justify-around items-center">
              <QuickActionsCard icon={<AiOutlineArrowRight />} title="Create Indents" />
              <div className="border-r-2 border-gray-300 h-8"></div>
              <QuickActionsCard icon={<FiTruck />} title="Add Vehicle" />
              <div className="border-r-2 border-gray-300 h-8"></div>
              <QuickActionsCard icon={<FiTruck/>} title="Add Trailer" />
              <div className="border-r-2 border-gray-300 h-8"></div>
              <QuickActionsCard icon={<FiUser />} title="Add Driver" />
              <div className="border-r-2 border-gray-300 h-8"></div>
              <QuickActionsCard icon={<FiTruck />} title="Add Indents" />
            </div>
        </div>
        <div className='flex justify-between'>
          <div>
            High Priority alerts (14)
          </div>
          <div className='flex'>
            View All <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

          </div>
        </div>
        <div className='flex justify-around'> 
        <div>

        <BottomCard 
                title="Driver Raised Concern"
                loadNumber="12454"
                billTo="RoaDo demo Bangalore"
                date="13 Feb 24"
                concernText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                />
            </div>
            <div>
        <BottomCard
                title="Refer Temp out of Range"
                loadNumber="12454"
                billTo="RoaDo demo Bangalore"
                date="13 Feb 24"
                concernText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                />
                </div>  
              
          </div>
        
        </div>
        
        <div className="bg-green-500">
          Todays's Highlights
        </div>
    </div>
  );
}
