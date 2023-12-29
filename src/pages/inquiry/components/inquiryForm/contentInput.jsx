import { forwardRef } from "react";

/**
 * 멀티라인 텍스트 입력을 위한 컴포넌트입니다.
 * 사용자 정의 props를 받아들이고, 스타일을 유연하게 적용할 수 있습니다.
 * forwardRef를 사용하여 부모 컴포넌트에서 ref를 통해 이 컴포넌트에 접근할 수 있습니다.
 *
 * @param {Object} props - 컴포넌트에 전달되는 props 객체
 * @param {React.Ref} ref - React ref 객체, 텍스트 입력 필드에 연결됩니다.
 */
const ContentInput = forwardRef((props, ref) => {
  // 기본값 설정을 위한 변수
  const placeholderText = props.placeholder || "내용을 입력해주세요";
  const numberOfRows = props.rows || 8;

  return (
    <div className="mt-4 mx-2">
      {/* 텍스트 입력 필드 */}
      <textarea
        ref={ref}
        {...props} // 추가적인 props를 확장하여 텍스트 입력 필드에 적용
        className={`w-full p-2 border rounded-lg ${props.className}`} // 기본 스타일에 사용자 지정 className 추가
        placeholder={placeholderText}
        rows={numberOfRows}
        data-testid="content-input" // 테스트를 위한 데이터 속성
      />
    </div>
  );
});

ContentInput.displayName = "ContentInput"; // 디버깅을 위한 displayName 설정

export default ContentInput;
