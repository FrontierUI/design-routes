import { professionalism } from '@/contentData/utils';
import LazyImage from './LazyImage';

const Professionalism = () => {
  return (
    <div className="flexy px-5 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-5">
        {professionalism.map((proff) => (
          <div
            key={proff.title}
            className="flexStart flex-col shadow-drop-5 overflow-hidden rounded-lg w-full h-full"
          >
            <div className="bgChange w-full h-full p-6 space-y-6 rounded-lg">
              <LazyImage
                src={proff.src}
                width={48}
                alt=""
                className="img-fluid"
              />
              <div className="flex flex-col space-y-1">
                <h2 className="text-2xl font-monaSemibold">{proff.title}</h2>
                <p className="text-md mb-2">{proff.para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professionalism;
