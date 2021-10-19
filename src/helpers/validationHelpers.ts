export const make_json_string = (data: any): string => {
  return data?.toString();
};

export const date_compare = (...props: any[]): boolean => {
  let valid = true;

  for (let i = 1; i < props.length; i++) {
    const i_prev = i - 1;

    if (make_json_string(props[i]) !== make_json_string(props[i_prev])) {
      valid = false;
      break;
    }
  }

  return valid;
};
