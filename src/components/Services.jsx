import { Link } from 'react-router-dom';
import { prod1, prod2, prod3 } from '../contentData/utils';

const Services = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 xl:grid-cols-3 lg:gap-x-4 max-sm:mr-4 max-sm:space-y-2">
      <div className="flex flex-col gap-y-1 w-full h-full">
        {prod1.map((prods1) => (
          <Link
            key={prods1.id}
            to={prods1.href}
            className="overflow-hidden rounded-lg w-full m-2 transition duration-300 shadow-drop-4 py-1.5"
          >
            <div className="p-6 w-full h-full rounded-lg overflow-hidden transitAll scal105 hover:bg-primary bg-white hover:text-white text-black">
              <img src={prods1.image} className="img-fluid rounded-lg" alt="" />

              <div className="pt-3 space-y-1">
                <h2 className="monaBold text-xl">{prods1.title}</h2>
                <p className="text-sm">{prods1.descr}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-y-1 w-full h-full">
        {prod2.map((prods2) => (
          <Link
            key={prods2.id}
            to={prods2.href}
            className="overflow-hidden rounded-lg w-full m-2 transition duration-300 shadow-drop-4 py-1.5"
          >
            <div className="p-6 w-full h-full rounded-lg overflow-hidden transitAll scal105 hover:bg-primary bg-white hover:text-white text-black">
              <img src={prods2.image} className="img-fluid rounded-lg" alt="" />

              <div className="pt-3 space-y-1">
                <h2 className="monaBold text-xl">{prods2.title}</h2>
                <p className="text-sm">{prods2.descr}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-y-1 w-full h-full">
        {prod3.map((prods) => (
          <Link
            key={prods.id}
            to={prods.href}
            className="overflow-hidden rounded-lg w-full m-2 transition duration-300 shadow-drop-4 py-1.5"
          >
            <div className="p-6 w-full h-full rounded-lg overflow-hidden transitAll scal105 hover:bg-primary bg-white hover:text-white text-black">
              <img src={prods.image} className="img-fluid rounded-lg" alt="" />

              <div className="pt-3 space-y-1">
                <h2 className="monaBold text-xl">{prods.title}</h2>
                <p className="text-sm">{prods.descr}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
