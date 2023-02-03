import React, { ReactNode} from "react";
import { memo } from "react"
import InputLogin from "@/components/login-test";
import { TestWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const Test: React.FC<IProps> = () => {
  // const [show, setShow] = useState(false);
  return (
    <TestWrapper>
      <InputLogin/>
    </TestWrapper>
  );
};
export default memo(Test);
Test.displayName = "Test";
