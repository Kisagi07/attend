import Card from "@/app/components/Card";
const UserInfoSkeleton = () => {
  return (
    <Card>
      <div className="space-y-2">
        <div className="w-full h-4 bg-slate-300 animate-pulse"></div>
        <div className="w-full h-4 bg-slate-300 animate-pulse"></div>
        <div className="w-full h-4 bg-slate-300 animate-pulse"></div>
      </div>
    </Card>
  );
};
export default UserInfoSkeleton;
