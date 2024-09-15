import { useNavigate } from 'react-router-dom';

import { Gear } from '../../assets/icons/Gear';
import withTransition from '../../HOC/withTransition';
import { Spotify } from '../../assets/icons/Spotify';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] gap-2 p-2 overflow-hidden">
        <div className="col-span-3 rounded-lg">
          <div className="flex justify-between items-center h-[48px]">
            <div className="w-[72px] h-[72px] flex items-center justify-center">
              <a className="flex items-center">
                <Spotify width={'32px'} height={'32px'} />
              </a>
            </div>
            <div>Busqueda</div>
            <button className="p-3" onClick={() => navigate('/settings')}>
              <Gear width={'1.5em'} height={'1.5em'} />
            </button>
          </div>
        </div>
        <div className="w-[72px] lg:w-[280px] row-span-2 bg-[#1e1e1e] p-4 rounded-lg">
          Item 2
        </div>
        <div className="bg-[#1e1e1e] p-4 rounded-lg">Item 3</div>
        <div className="w-[280px] bg-[#1e1e1e] p-4 rounded-lg">Item 4</div>
      </div>
    </>
  );
}

export default withTransition(Home);
