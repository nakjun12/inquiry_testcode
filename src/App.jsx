import { RouterProvider } from "react-router-dom";
import Header from "./components/common/header";
import Modal from "./components/common/modal";
import { routers } from "./router";
function App() {
  // 드롭다운 상태 관리 예

  // 기타 이벤트 핸들러 필요에 따라 추가

  return (
    <div className="bg-[#f8f9fa] min-h-screen p-4">
      <div className="bg-white shadow rounded-lg max-w-sm mx-auto">
        <Header />
        <RouterProvider router={routers} />
      </div>
      <Modal />
    </div>
  );
}

export default App;
