import { forwardRef } from "react";

/**
 * 제목 입력을 위한 컴포넌트입니다.
 * forwardRef를 사용하여 부모 컴포넌트에서 ref를 통해 이 컴포넌트에 접근할 수 있습니다.
 * props를 통해 추가적인 설정을 할 수 있습니다.
 *
 * @param {Object} props - 컴포넌트에 전달되는 props 객체
 * @param {React.Ref} ref - React ref 객체, 입력 필드에 연결됩니다.
 */
const TitleInput = forwardRef((props, ref) => {
  return (
    <div className="mt-4 mx-2">
      {/* 제목 입력 필드 */}
      <input
        ref={ref}
        {...props} // 추가적인 props를 확장하여 입력 필드에 적용
        className={`w-full p-2 border rounded-lg ${props.className}`} // 기본 스타일에 사용자 지정 className 추가
        placeholder={props.placeholder || "제목을 입력해주세요(50자 내)"} // placeholder의 기본값 설정
        maxLength={props.maxLength || 50} // 입력 최대 길이 설정
        data-testid="title-input" // 테스트를 위한 데이터 속성
      />
    </div>
  );
});

TitleInput.displayName = "TitleInput"; // 디버깅을 위한 displayName 설정

export default TitleInput;
