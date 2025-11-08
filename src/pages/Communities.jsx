// src/pages/Communities.jsx
import CommunityCard from "../components/CommunityCard";

const Communities = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Communities</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CommunityCard title="Marketing" members="32" color="from-pastel-rose to-pastel-purple" />
        <CommunityCard title="UI/UX" members="25" color="from-pastel-blue to-pastel-green" />
        <CommunityCard title="Creative" members="12" color="from-pastel-pink to-pastel-yellow" />
        <CommunityCard title="Success Story" members="35" color="from-pastel-purple to-pastel-blue" />
        <CommunityCard title="Social Network" members="120" color="from-pastel-rose to-pastel-pink" />
        <CommunityCard title="Technical Expert" members="42" color="from-pastel-green to-pastel-yellow" />
      </div>
    </div>
  );
};

export default Communities;
