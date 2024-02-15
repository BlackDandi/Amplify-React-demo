import  React from "react";
import {  Flex, Text } from "@aws-amplify/ui-react";
import clases from "./Componente.module.css";
export default function HeroLayout1(props) {
  
  return (
    <Flex
      gap="0"
      direction="row"
      width="100%"
      height="320px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      backgroundColor="#EDEDED"
    >
      <Flex
        gap="10px"
        direction="column"
        width="70%"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="120px 0px 60px 0px"
        backgroundColor="#EDEDED"
        display="flex">
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          >
          <Flex
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            gap="0px"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
          >
            <Text
              className={clases.letracambio}
              fontFamily="Inter"     
              fontWeight="700"
              color="#242424"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 50px 0px"
              whiteSpace="pre-wrap"
              children="Salas del CIT"
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="19px"
              fontWeight="600"
              color="#242424"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Renta de instalaciones y salas equipadas."
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="19px"
              fontWeight="600"
              color="#242424"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Servicio de coffee break."
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="19px"
              fontWeight="600"
              color="#242424"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Salas / áreas de computo equipadas."
            ></Text>

          </Flex>

        </Flex>

      </Flex>

    </Flex>
  );
  
}
