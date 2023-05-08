// import Image from 'next/image';

import React, { useEffect, useState } from "react";
import { Button, Htag, P, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";

export function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">2</Htag>
      <Htag tag="h2">Текст какой-то</Htag>
      <Htag tag="h3">Текст какой-то</Htag>
      <Button appearance="primary" className="sss" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost">sss</Button>
      <P size="md">Lorem ipsum dolor sit amet.</P>
      <P size="lg">Lorem ipsum dolor sit amet.</P>
      <Tag size="lg" color="primary">
        tag1
      </Tag>
      <Tag size="lg" color="ghost">
        tag2
      </Tag>
      <Tag color="green">tag</Tag>
      <Tag size="md" color="grey">
        tag
      </Tag>
      <Tag size="lg" href="/">
        tag
      </Tag>

      <Rating rating={3} isEditable />
      <Rating rating={1} />
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
