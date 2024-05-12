import { formatDistanceToNow } from 'date-fns';

const formatDay = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: false });
};

export default formatDay;
