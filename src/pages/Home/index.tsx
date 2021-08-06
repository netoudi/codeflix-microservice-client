import React from 'react';

import { makeStyles } from '@material-ui/core';

import Page from 'components/Page';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'green',
  },
}));

const Home: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Page classes={{ root: classes.root }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias
        aliquam atque commodi debitis dolore doloribus eveniet expedita hic
        ipsam ipsum iste laborum magni mollitia nobis nostrum numquam optio,
        pariatur provident quasi quibusdam quisquam reiciendis rerum tenetur vel
        vero vitae. Aperiam consectetur delectus eligendi illum porro. Aliquam
        consectetur cumque dolore dolores eius ex laboriosam natus quam, quo
        voluptates. Adipisci alias aut blanditiis delectus distinctio dolores ea
        eaque esse eum expedita, ipsam ipsum laudantium libero magni maiores
        molestiae nulla quas rem repellendus sit soluta unde vero. Adipisci
        dicta dignissimos eligendi, illo itaque tempore? Ab animi aut dolorum
        ipsa laudantium quo veniam? Ab, enim ex harum hic in incidunt ipsam iste
        laborum maiores molestiae nesciunt nihil, odit quaerat qui quod
        recusandae veritatis? Ab at autem consequatur delectus dicta dolore
        dolorem eum, facilis fugit hic iure iusto minus nulla officiis omnis
        quod tempora vero voluptatum! Adipisci ea eius eligendi error est ex
        illo impedit in inventore iusto laudantium molestiae, nobis possimus
        quod quos repellendus suscipit tenetur? Accusamus alias aliquid atque
        consectetur corporis cupiditate debitis doloribus enim eum, ex expedita
        fugiat ipsam libero maiores minima nobis nulla officia placeat quasi
        quia quod ratione sequi voluptatibus. A ad corporis debitis deleniti
        dolores ducimus ea eaque eligendi enim esse est et eum facere hic id
        ipsa ipsum labore maiores molestias mollitia necessitatibus nemo nisi
        numquam officiis provident, quasi quisquam repudiandae sint soluta
        tempore unde vel vero voluptas. Adipisci alias animi asperiores atque
        autem debitis deserunt dicta distinctio dolorem eaque eius error fuga
        fugit harum id illo labore maiores minus nam nobis officia omnis
        possimus quas reiciendis, repellendus similique soluta sunt ullam
        veritatis voluptate? Asperiores aspernatur aut eveniet exercitationem
        laudantium magnam maiores neque nesciunt possimus quae rem similique ut
        veniam vero vitae, voluptatem voluptates? Libero minima odit voluptates.
        Aperiam commodi delectus deserunt earum eius ex exercitationem in libero
        minima nam natus nisi non omnis perferendis, provident repudiandae
        sapiente sequi soluta tempore ullam. Accusamus alias animi architecto
        asperiores assumenda atque blanditiis consequuntur debitis dolorem,
        earum eligendi iusto maiores mollitia natus necessitatibus neque nisi
        nobis obcaecati optio perferendis possimus quibusdam repellat
        repellendus reprehenderit repudiandae sint sit tempora. Accusamus ad,
        adipisci assumenda blanditiis commodi distinctio ea excepturi inventore
        ipsum iusto laudantium maiores maxime minus nam nemo nesciunt officiis
        optio quam quibusdam quidem quisquam rem reprehenderit sed temporibus
        unde vel vero voluptatibus. Accusamus ducimus est eum in ipsum iste
        maiores natus, neque nisi nulla obcaecati placeat, suscipit! Dignissimos
        doloremque illum molestiae quisquam quos? Ad debitis dolor eum fuga
        fugiat illum incidunt necessitatibus nihil quidem sint. Asperiores
        corporis cupiditate delectus ea harum id ipsa, ipsam perspiciatis quidem
        repellat sed sint soluta ullam? Ad asperiores aspernatur, consectetur
        consequuntur corporis deserunt dicta distinctio dolor dolorem ea eaque
        earum eius eligendi enim esse, et eveniet fugiat laboriosam magni
        molestiae nam natus, nemo nobis numquam officiis provident qui quis
        quisquam repellendus reprehenderit rerum sapiente sint soluta suscipit
        voluptatem voluptatibus voluptatum! Accusantium aliquid architecto
        asperiores aut, culpa cumque deserunt dignissimos dolor dolore doloribus
        dolorum eius eum illo minima numquam quaerat quam qui, ratione
        recusandae sunt tempora voluptate.
      </p>
    </Page>
  );
};

export default Home;
