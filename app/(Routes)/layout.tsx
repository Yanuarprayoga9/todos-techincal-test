import Navbar from "@/components/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="flex-col px-4">
        <div className="flex-1 space-y-4 p-3 pt-6">
          {children}
          </div>
      </div>
    </div>
  );
};

export default layout;
