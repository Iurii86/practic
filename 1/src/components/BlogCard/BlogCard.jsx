import { formateDate } from 'utils/formate.date';
import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';

export const BlogCard = ({poster,
          tag,
          title,
          description,
          userName,
          avatar,
          postedAt}) => {
  
  return (<Card>
  <CardHeader>
    <CardPoster
      src="https://source.unsplash.com/600x400/?computer"
      alt="card__image"
    />
  </CardHeader>
  <CardBody>
      <Tag>{tag }</Tag>
      <CardTitle>{title }</CardTitle>
    <CardText>
      {description}
    </CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
      <Avatar src={avatar} alt="Jane Doe" />
      <UserInfo>
        <UserName>{userName}</UserName>
        <Date>{formateDate(postedAt)}</Date>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>)
};
