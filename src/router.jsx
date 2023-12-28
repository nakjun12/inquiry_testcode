import { createBrowserRouter } from "react-router-dom";
import InquiryPage from "./pages/inquiry/inquiryPage";
const routerData = [
  {
    id: 0,
    path: "/",
    label: "InquiryPage",
    element: <InquiryPage />,
    withAuth: false
  }
];

export const routers = createBrowserRouter(routerData);

// export const routers: RemixRouter = createBrowserRouter(
//   // TODO 4-1: 어드민 전용 페이지이거나 auth가 필요한 페이지는 GeneralLayout으로 감싸기
//   // 어드민 전용 페이지는 isAdminPage = true를 전달
//   routerData.map((router) => {
//     if (router.withAuth) {
//       return {
//         path: router.path,
//         element: <GeneralLayout>{ router.element }</GeneralLayout>
//       }
//     } else {
//       return {
//         path: router.path,
//         element: router.element
//       }
//     }
//   })
// )

// export const SidebarContent: SidebarElement[] = routerData.reduce((prev, router) => {
//   // TODO 4-1. isAdminOnly 프로퍼티를 추가하여 admin 페이지로 가는 사이드바 요소를 선택적으로 렌더링 (어드민에게만 보이도록 하기)
//   if (!router.withAuth) return prev

//   return [
//     ...prev,
//     {
//       id: router.id,
//       path: router.path,
//       label: router.label,
//     }
//   ]
// }, [] as SidebarElement[])
