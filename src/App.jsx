import image1 from '../public/bg-header-desktop.svg'
import faceit from '../public/faceit.svg'


const App = () => {
  return (
    <>
      <header className="bg-cyan-dark bg-no-repeat bg-cover h-44 bg-header-desktop" style={{background: image1}}></header>
      <main className="bg-cyan-light min-h-[80vh] pb-8 px-6">
        <div className="max-w-5xl m-auto relative -top-8 ">
          <div className="w-full max-w-5xl min-h-[4rem] mb-10">
          <div className="bg-white rounded-md px-7 py-4 w-full shadow-lg flex justify-between">
              <ul className="flex flex-wrap gap-4">
                  <li className="flex">
                    <label style={{alignSelf: 'center'}}>
                      This is Filter
                    </label>
                    <div>
                    <button className="bg-cyan-dark h-full flex items-center p-2 rounded-r-md hover:bg-cyan-very-dark">
                      x
                    </button>            
                    </div>
                  </li>
              </ul>
              <button
                className="text-sm text-cyan-dark font-bold underline"
              >
                Clear
              </button>
            </div>
          </div>
          <div>
          <ul>
          <li
      className={`relative bg-white p-7 rounded-md flex items-center gap-6 shadow-lg mb-12 lg:mb-6`}
    >
      <div className="absolute -top-7 w-14 lg:relative lg:w-auto lg:top-0">
        <img src={faceit} alt={'image'} className="rounded-full w-full" />
      </div>
      <div className="w-full lg:flex justify-between items-center">
        <div>
          <div>
            <span className="text-sm text-cyan-dark font-bold">
              Company
            </span>
              <span className="bg-cyan-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
                NEW!
              </span>
              <span className="bg-cyan-very-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
                FEATURED
              </span>
          </div>
          <a
            href="#"
            className="block my-1 text-base font-bold hover:text-cyan-dark"
          >
            Position
          </a>
          <ul className="flex text-cyan-dark-grayish gap-4 text-sm font-medium">
                  <li>Date</li>
                  <li className="before:content-['•'] before:mr-3 after:content-['•'] after:ml-3">
                    Contract
                  </li>
                  <li>Location</li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-wrap gap-4 border-t border-cyan-dark-grayish mt-4 pt-4 lg:border-0">
                    <li>
                      <button>
                        <label>Requirement</label>
                      </button>
                    </li>
                </ul>
              </div>
            </div>
          </li>
          </ul>
          </div>
          <nav className="mt-4">
            <ul className="flex justify-center">
              
                  <li>
                    <button
                      className={`mx-1 px-6 py-4 rounded shadow 
                          text-blue-500 bg-white
                      }`}
                    >
                      1
                    </button>
                  </li>
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
};

export default App;
