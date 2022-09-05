import type { FC } from "react";
import { Card, CardContent, Spacer, Text, Block } from "vcc-ui";
import { Vehicle } from "../../models/Vehicle";
import Image from "next/image";

type VehicleItemProps = {
  vehicle: Vehicle;
};

export const VehicleItem: FC<VehicleItemProps> = ({ vehicle }) => {
  // const navigate = useNavigate();

  return (
    <Card
      // onClick={() => navigate(`${vehicle.id}`)}
      style={{ cursor: "pointer" }}
    >
      <CardContent>
        <Text style={{ fontWeight: "bold" }}>{vehicle.modelName}</Text>
        <Spacer />
        <Text>{vehicle.modelType}</Text>
        <Text>{vehicle.bodyType}</Text>
      </CardContent>
      <Image
        src={vehicle.imageUrl}
        objectFit="contain"
        width={240}
        height={320}
      />
      <Block extend={{ textAlign: "center" }}>
        <Text subStyle="inline-link">LEARN</Text>
        <Text subStyle="emphasis">SHOP</Text>
      </Block>
    </Card>
  );
};
