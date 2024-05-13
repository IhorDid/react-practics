import { formatDistanceToNow, format } from 'date-fns';

export const formatDay = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: false });
};

export const formatDate = date => {
  return format(new Date(date), 'dd/MM/yyyy, h:mm a');
};
