class ReplaceString {
  static removeTags(value: string) {
    return value?.replace(/(<([^>]+)>)/ig, "");
  }
};

export default ReplaceString;