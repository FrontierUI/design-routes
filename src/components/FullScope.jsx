import { fullScope } from '@/contentData/utils';
import LazyImage from './LazyImage';

const FullScope = () => {
  return (
    <div className="flexy px-5 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-x-5 gap-y-5">
        {fullScope.map((scop) => (
          <div
            key={scop.title}
            className="flexStart flex-col shadow-drop-5 overflow-hidden rounded-lg w-full h-full"
          >
            <div className="bgChange w-full h-full p-6 space-y-6 rounded-lg">
              <LazyImage
                src={scop.src}
                width={48}
                alt=""
                className="img-fluid"
              />
              <div className="flex flex-col space-y-1">
                <h2 className="text-2xl font-monaSemibold leading-tight">
                  {scop.title}
                </h2>
                <p className="text-md mb-2">{scop.para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullScope;
