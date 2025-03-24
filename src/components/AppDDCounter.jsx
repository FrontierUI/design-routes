import CounterNumbers from '@/components/CounterNumbers';

const AppDDCounter = () => {
  const expertise = [
    {
      title: 'projects completed',
      counter: 153,
      desc: 'App Design & Development services sold and counting',
    },
    {
      title: 'total customers',
      counter: 41,
      desc: 'Total customers used our App Design & Development product',
    },
    {
      title: 'total hours',
      counter: 3971,
      desc: 'Hours dedicated to App Design & Development product',
    },
    {
      title: 'CUSTOMER SATISFACTION',
      counter: '4.95',
      desc: 'Average App Design & Development product approval rating',
    },
  ];

  return (
    <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-5">
      {expertise.map((expert) => (
        <div
          key={expert.title}
          className="flexStart flex-col shadow-drop-5 overflow-hidden rounded-lg w-full h-full"
        >
          <div className="bgChange w-full h-full p-6 space-y-6 rounded-lg text-gray-800 hover:text-white duration-500">
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-monaSemibold uppercase">
                {expert.title}
              </h2>
              <h1 className="text-5xl font-monaBold">
                <CounterNumbers
                  start={0}
                  end={expert.counter}
                  duration={2000}
                  decimals={
                    expert.counter.toString().includes('.')
                      ? expert.counter.toString().split('.')[1].length
                      : 0
                  }
                />
              </h1>
              <p className="text-md mb-2">{expert.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppDDCounter;
