import { sandwich } from "@/assets";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-rose-500 to-slate-100">
      <img
        src={sandwich}
        alt="hero"
        className="w-full max-h-[500px] object-contain"
      />
    </div>
  );
};

export default Hero;
