// ContentInput.jsx
import { forwardRef } from "react";

const ContentInput = forwardRef((props, ref) => {
  return (
    <div className="mt-4">
      <textarea
        ref={ref}
        {...props} // 추가적인 props 확장
        className={`w-full p-2 border rounded-lg ${props.className}`} // className prop을 유연하게 처리
        placeholder={props.placeholder || "내용을 입력해주세요"} // placeholder의 기본값 설정
        rows={props.rows || 8} // rows의 기본값 설정
        data-testid="content-input"
      />
    </div>
  );
});

ContentInput.displayName = "ContentInput"; // displayName 설정

export default ContentInput;
