import { apps, landing } from "@/assets";

const Home = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-rose-600">
          Explore your foodie side here!
        </h1>
        <span className="text-xl">Food is just one click away</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landing} alt="landing" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">Order takeaway even faster!</span>
          <span>
            Download our app to order your favorite and personalized recommended foods in ease!
          </span>
          <img src={apps} alt="appsdownload" />
        </div>
      </div>
    </div>
  );
};

export default Home;
