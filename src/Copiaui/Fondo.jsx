/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import FondoImagen from '../imagen/Fondo.jpg';
export default function Fondo(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Reservas: {},
        "Centro dedicado a impulsar el desarrollo a trav\u00E9s de la tecnolog\u00EDa. Exploramos y cultivamos la innovaci\u00F3n en cada proyecto.":
          {},
        "Main Body": {},
        Button: {},
        "Type Lock Up": {},
        Fondo: {},
      },
      variantValues: { colorMode: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="-52px"
      direction="row"
      width="100%"
      height="700px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      backgroundColor=" rgba(0, 0, 0, 0.4)"
      backgroundImage= {FondoImagen}
      backgroundsize="cover"
      backgroundposition="center"
      {...getOverrideProps(overrides, "Fondo")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="800px"
        height="518px"
        marginTop="200px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Type Lock Up")}
      >
        <Text
          fontFamily="Inter"
          fontSize="80px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="500px"
          height="60px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Reservas"
          {...getOverrideProps(overrides, "Reservas")}
        ></Text>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Main Body")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.09px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Centro dedicado a impulsar el&#xA;desarrollo a través de la&#xA;tecnología. Exploramos y&#xA;cultivamos la innovación en cada&#xA;proyecto."
            {...getOverrideProps(
              overrides,
              "Centro dedicado a impulsar el desarrollo a trav\u00E9s de la tecnolog\u00EDa. Exploramos y cultivamos la innovaci\u00F3n en cada proyecto."
            )}
          ></Text>
        </Flex>
        <Button
          width="unset"
          height="unset"
          borderRadius="15px"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Reservar"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
