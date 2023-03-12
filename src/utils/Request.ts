type ApplyQueryProps = {
  key: string;
  value: string;
  flag?: "?" | "&";
}

class Request {
  static applyQuery({ key, value, flag = "&" }: ApplyQueryProps) {
    if (!value) {
      return "";
    }

    return `${flag}${key}=${value}`;
  }

  static generateQuerysDynamic(props: object, isActiveFlagInitial: boolean = false) {
    let querys = "";
    const matrixProps = Object.entries(props);

    for(const index in matrixProps) {
      const [key, value] = matrixProps[index];
      let flag: ApplyQueryProps["flag"] = "?";

      if (!isActiveFlagInitial) {
        flag = "&";
      } else {
        flag = Number(index) === 0 ? "?" : "&";
      }

      querys += Request.applyQuery({
        key,
        value,
        flag,
      })
    }

    return querys;
  }
};

export default Request;