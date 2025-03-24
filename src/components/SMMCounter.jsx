import CounterNumbers from '@/components/CounterNumbers';

const SMMCounter = () => {
  const dataDrive = [
    {
      title: 'projects completed',
      numbering: 937,
      desc: 'Social media creative projects completed to date',
    },
    {
      title: 'TOTAL CUSTOMERS',
      numbering: 401,
      desc: 'Total customers used our social media product',
    },
    {
      title: 'TOTAL HOURS',
      numbering: 7611,
      desc: 'Hours dedicated to social media product',
    },
    {
      title: 'CUSTOMER SATISFACTION',
      numbering: '4.85',
      desc: 'Average branding product approval rating',
    },
  ];

  return (
    <div className="flexy w-full px-5 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-x-5 gap-y-5">
        {dataDrive.map((driv) => (
          <div
            key={driv.title}
            className="flexStart flex-col shadow-drop-5 overflow-hidden rounded-lg w-full h-full"
          >
            <div className="bgChange w-full h-full p-6 space-y-6 rounded-lg text-gray-800 hover:text-white duration-500">
              <div className="flex flex-col space-y-4">
                <h2 className="text-xl font-monaSemibold uppercase">
                  {driv.title}
                </h2>
                <h1 className="text-5xl font-monaBold">
                  <CounterNumbers
                    start={0}
                    end={driv.numbering}
                    duration={2000}
                    decimals={
                      driv.numbering.toString().includes('.')
                        ? driv.numbering.toString().split('.')[1].length
                        : 0
                    }
                  />
                </h1>
                <p className="text-md mb-2">{driv.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SMMCounter;
