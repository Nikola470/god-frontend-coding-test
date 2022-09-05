import type { FC } from "react";
import { Card, CardContent, Spacer, Text, Flex, Link } from "vcc-ui";
import { Vehicle } from "../../models/Vehicle";
import Image from "next/image";
type VehicleItemProps = {
  vehicle: Vehicle;
};
export const VehicleItem: FC<VehicleItemProps> = ({ vehicle }) => {
  return (
    <Card style={{ cursor: "pointer", margin: "10px", boxShadow: "none" }}>
      <CardContent>
        <Text variant="columbus" style={{ textTransform: "uppercase" }}>
          {vehicle.bodyType}
        </Text>
        <Spacer />
        <Flex
          extend={{
            flexDirection: "row",
            flexWrap: "wrap",
            overflowWrap: "break-word",
          }}
        >
          <Text subStyle="emphasis"> {vehicle.modelName} </Text>
          <Spacer />
          <Text> {vehicle.modelType} </Text>
        </Flex>
        <Spacer />
      </CardContent>
      <Image
        src={vehicle.imageUrl}
        objectFit="contain"
        width={240}
        height={320}
      />
      <Flex
        extend={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link
          style={{ padding: "8px" }}
          href={"/learn/" + vehicle.id}
          arrow="right"
        >
          {" "}
          LEARN{" "}
        </Link>
        <Spacer />
        <Link
          style={{ padding: "8px" }}
          href={"/shop/" + vehicle.id}
          arrow="right"
        >
          {" "}
          SHOP{" "}
        </Link>
      </Flex>
    </Card>
  );
};
