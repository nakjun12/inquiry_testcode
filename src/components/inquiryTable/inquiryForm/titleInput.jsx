// TitleInput.jsx
import { forwardRef } from "react";

const TitleInput = forwardRef((props, ref) => {
  return (
    <div className="mt-4">
      <input
        ref={ref}
        className="w-full p-2 border rounded-lg"
        placeholder="제목을 입력해주세요(50자 내)"
        maxLength={50}
        data-testid="title-input"
      />
    </div>
  );
});

TitleInput.displayName = "TitleInput";

export default TitleInput;
