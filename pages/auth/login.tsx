import { NextPage } from "next";
import { useForm } from "react-hook-form";

import Input from "@components/common/input/Input";

const Login: NextPage = () => {
  const { register } = useForm();
  return (
    <div
      style={{ display: "flex", width: "1000px", gap: "20px", padding: "20px" }}
    >
      <Input
        label="123"
        block
        placeholder="이메일 주소를 입력해 주세요"
        error="에러메시지"
        {...register("email")}
      />
      <Input
        block
        type="password"
        placeholder="비밀번호를 입력해 주세요"
        {...register("password")}
      />
    </div>
  );
};

export default Login;
