import Navbar from "@/components/navbar";
import { Toaster } from 'react-hot-toast';
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="flex-col px-4">
        <Toaster/>
        <div className="flex-1 space-y-4 p-3 pt-6">
          {children}
          </div>
      </div>
    </div>
  );
};

export default layout;
