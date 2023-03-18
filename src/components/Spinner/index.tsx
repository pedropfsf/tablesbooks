import LoadingSpin, { LoadingSpinProps } from "react-loading-spin";

import colors from "@/styles/colors";

export default function Spinner({ ...props }: LoadingSpinProps) {
  return (
    <LoadingSpin
      primaryColor={colors.red}
      {...props}
    />
  )
}