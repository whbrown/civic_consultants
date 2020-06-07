import React from 'react';
import { PageProps } from 'gatsby';

import Title from '@/components/Title';

const Home: React.FC<PageProps> = () => (
  <main>
    <Title />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rerum nobis placeat perferendis. Molestias quam quia perferendis ducimus! Laborum eos soluta nulla quo accusantium natus inventore laudantium suscipit vel praesentium!</p>
  </main>
);

export default Home;
