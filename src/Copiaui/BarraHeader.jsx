/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
import Logo from "../imagen/LogoOficial.jpg"
export default function BarraHeader(props) {
  const { A, overrides, ...rest } = props;
  const frameThreeTwoTwoOnClick = useNavigateAction({ type: "reload" });
  const buttonThreeEightSixTwoFourEightThreeOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  const buttonThreeEightSixThreeFiveThreeSixFiveOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  const buttonThreeEightSixThreeFiveThreeSixNineOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1100px"
      height="90px"
      alignItems="center"
      position="fixed"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      borderRadius="60px"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,0.902)"
      {...getOverrideProps(overrides, "BarraHeader")}
      {...rest}
    >
      <Flex
        gap="32px"
        direction="row"
        width="125px"
        height="80px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        onClick={() => {
          frameThreeTwoTwoOnClick();
        }}
        {...getOverrideProps(overrides, "Frame 322")}
      >
        <Image
          width="67px"
          height="75px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          src={Logo}
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          cursor="pointer"
          {...getOverrideProps(overrides, "logo-oficial-128x143 1")}
        ></Image>
        <Button
          fontSize="16px"
          fontWeight="400"
          color="rgba(36,36,36,1)"
          borderStyle="none"
          lineHeight="40px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="CIT"
          {...getOverrideProps(overrides, "CIT")}
        ></Button>
      </Flex>
      <Button
        width="110px"
        height="60px"
        marginLeft="90px"
        borderRadius="15px"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Acerca"
        color="rgba(36,36,36,1)"
        backgroundColor="rgba(255,255,255,0)"
        onClick={() => {
          buttonThreeEightSixTwoFourEightThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Button3862483")}
      ></Button>
      <Button
        width="200px"
        height="60px"
        borderRadius="15px"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Uso de Instalaciones"
        color="rgba(36,36,36,1)"
        backgroundColor="rgba(255,255,255,0)"
        onClick={() => {
          buttonThreeEightSixThreeFiveThreeSixFiveOnClick();
        }}
        {...getOverrideProps(overrides, "Button38635365")}
      ></Button>
      <Button
        width="110px"
        height="60px"
        borderRadius="15px"
        marginRight="90px"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Contacto"
        color="rgba(36,36,36,1)"
        backgroundColor="rgba(255, 255, 254, 0)"
        onClick={() => {
          buttonThreeEightSixThreeFiveThreeSixNineOnClick();
        }}
        {...getOverrideProps(overrides, "Button38635369")}
      ></Button>
      <Button
        gap="32px"
        direction="row"
        size="large"
        isDisabled={false}
        display="flex"
        variation="primary"
        width="140px"
        height="60px"
        justifyContent="flex"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="35px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(128,0,64,1)"
        children="Servicios"
        color="white"
        {...getOverrideProps(overrides, "Frame 321")}
      >
      </Button>
      <Button
        gap="32px"
        direction="row"
        width="140px"
        height="60px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="35px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(128,0,64,1)"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        
        <MyIcon
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          type="group"
          color="white"
          fill="red"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
      </Button>
    </Flex>
  );
}
