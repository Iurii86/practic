import { formatDistanceToNow } from 'date-fns';

export const formateDate = (date) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true })
}