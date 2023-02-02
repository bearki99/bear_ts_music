import React, { ReactNode } from "react";
import { memo } from "react";
import InputLogin from "@/components/login-test";
interface IProps {
  children?: ReactNode;
}

const Test: React.FC<IProps> = () => {
  return (
    <div>
      <InputLogin />
    </div>
  );
};
export default memo(Test);
Test.displayName = "Test";
