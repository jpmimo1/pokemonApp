import { Card } from "@nextui-org/react";
import Router from "next/router";

interface Props {
  id: number;
}

function FavoriteCardPokemon({ id }: Props) {
  const onClickCard = () => {
    Router.push(`./pokemon/${id}`);
  };

  return (
    <Card hoverable clickable css={{ padding: 10 }} onClick={onClickCard}>
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width={"100%"}
        height={"140px"}
      />
    </Card>
  );
}

export default FavoriteCardPokemon;
