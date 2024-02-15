/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Badge,
  Divider,
  Flex,
  Icon,
  Image,
  Rating,
  Text,
  View,
} from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
import Swiper from "../Copiaui/SalaSwiper";
export default function ProductCard(props) {
  const { overrides, ...rest } = props;
  return (
    <><Flex
      gap="0"
      direction="row"
      width="100%"
      height="650px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="white"
      {...getOverrideProps(overrides, "ProductCard")}
      {...rest}
    >
      <Flex
        gap="0px"
        width="unset"
        height="500px"
        padding="150px 0px 0px 130px"
      ><Image
        width="350px"
        height="350px"
        display="flex"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image></Flex>
      <Flex
        gap="0"
        direction="column"
        width="50%"
        height="650px"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="relative"
        padding="130px 30px 130px 30px"
        backgroundColor="white"
      >
      <Text
        fontSize="50px"
        color="black"
        children="Sala C1"></Text>
      <Divider
        borderColor="Black"
        borderWidth="1.5px"
      ></Divider>
      <Swiper
        backgroundColor="white"
      ></Swiper>
    </Flex>
    </Flex>
    </>
  );
}
