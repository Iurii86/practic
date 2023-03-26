import { StatisticItem } from 'components';
import { IconContext } from 'react-icons';

import {
  StatisticsList,
  StatisticTitle,
  StatisticBox,
  StatisticCounter,
  StatisticText,
} from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const icons = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ title, data }) => {
  return (
    <>
      {title && <StatisticTitle isAct>{title}</StatisticTitle>}

      <StatisticsList>
        {data.map(({ id, title, total }, index) => (
          <StatisticBox key={id}>
            <IconContext.Provider value={{ size: 46 }}>
              {icons[index]}
            </IconContext.Provider>

            <StatisticCounter>{total}</StatisticCounter>
            <StatisticText>{title}</StatisticText>
          </StatisticBox>
        ))}
      </StatisticsList>
    </>
  );
};
