import { useNavigate } from 'react-router-dom';

import { Gear } from '../../assets/icons/Gear';
import withTransition from '../../HOC/withTransition';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile Header */}
      <header className="block lg:hidden p-3">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-2xl">Buenas tardes</span>
          <button className="p-3" onClick={() => navigate('/settings')}>
            <Gear width={'1.5em'} height={'1.5em'} />
          </button>
        </div>
      </header>

      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:h-screen lg:gap-2 lg:p-2 overflow-hidden">
        <div className="grid grid-rows-4 gap-2 h-screen">
          <div className="bg-[#1e1e1e] p-4 rounded-lg">Item 1.1</div>
          <div className="bg-[#1e1e1e] p-4 row-span-3 rounded-lg">Item 1.2</div>
        </div>
        <div className="row-span-2 bg-[#1e1e1e] p-4 rounded-lg">Item 2</div>
        <div className="row-span-2 bg-[#1e1e1e] p-4 rounded-lg">Item 3</div>
      </div>
    </>
  );
}

export default withTransition(Home);
