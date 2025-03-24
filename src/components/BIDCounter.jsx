import CounterNumbers from '@/components/CounterNumbers';

const BIDCounter = () => {
  const strikeup = [
    {
      title: 'projects completed',
      numbering: 944,
      desc: 'Brand design products sold and counting',
    },
    {
      title: 'TOTAL CUSTOMERS',
      numbering: 640,
      desc: 'Total customers used our Brand Identity product',
    },
    {
      title: 'TOTAL HOURS',
      numbering: 8807,
      desc: 'Hours dedicated to Brand Identity product',
    },
    {
      title: 'CUSTOMER SATISFACTION',
      numbering: '4.75',
      desc: 'Average branding product approval rating',
    },
  ];

  return (
    <div className="flexy w-full px-5 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-x-5 gap-y-5">
        {strikeup.map((strik) => (
          <div
            key={strik.title}
            className="flexStart flex-col shadow-drop-5 overflow-hidden rounded-lg w-full h-full"
          >
            <div className="bgChange w-full h-full p-6 space-y-6 rounded-lg text-gray-800 hover:text-white duration-500">
              <div className="flex flex-col space-y-4">
                <h2 className="text-xl font-monaSemibold uppercase">
                  {strik.title}
                </h2>
                <h1 className="text-5xl font-monaBold">
                  <CounterNumbers
                    start={0}
                    end={strik.numbering}
                    duration={2000}
                    decimals={
                      strik.numbering.toString().includes('.')
                        ? strik.numbering.toString().split('.')[1].length
                        : 0
                    }
                  />
                </h1>
                <p className="text-md mb-2">{strik.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BIDCounter;
