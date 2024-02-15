import  React,{useState} from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex, Image } from "@aws-amplify/ui-react";
import Logo from "../imagen/LogoOficial.jpg"
import { signOut } from "aws-amplify/auth";
import clases from "./Componente.module.css"
export default function BarraHeader(props) {
  const { A, overrides, ...rest } = props;
  const frameThreeTwoTwoOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const bottonCITAPP= useNavigateAction({
    type: "url",
    url: "/",
  });
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
    const [estadoBoton, setEstadoBoton] = useState(false);
    const handleClick = () => {
      setEstadoBoton(!estadoBoton); // Cambia el estado del botón al hacer clic
      console.log(estadoBoton);
    };
    
  
  
  
  return (
    
    <><Flex
      gap="10px"
      direction="row"
      width="80%"
      height="90px"
      alignItems="center"
      position="fixed"
      display="flex"
      justifyContent="space-between"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      borderRadius="60px"
      padding="24px 32px 24px 32px"
      marginLeft="10%"
      marginRight="10%"
      backgroundColor="rgba(255,255,255,0.902)"
      {...getOverrideProps(overrides, "BarraHeader")}
      {...rest}
    >
      <Flex
        gap="32px"
        direction="row"
        width="auto"
        height="80px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
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
          onClick={() => {
            frameThreeTwoTwoOnClick();
          } }
          {...getOverrideProps(overrides, "logo-oficial-128x143 1")}
        ></Image>
        <Button
          fontSize="22px"
          fontWeight="bold"
          color="black"
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
          children="APP CIT"
          onClick={() => {
            bottonCITAPP();
          } }
          {...getOverrideProps(overrides, "CIT")}
        ></Button>
      </Flex>
      <Flex
        justifyContent="center"
        className={clases.botoncabeza}
      >
        <Button
          width="110px"
          height="60px"
          
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
          } }
          {...getOverrideProps(overrides, "Button3862483")}
        ></Button>
        <Button
          width="240px"
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
          } }
          {...getOverrideProps(overrides, "Button38635365")}
        ></Button>
        <Button
          width="110px"
          height="60px"
          borderRadius="15px"

          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Contacto"
          color="rgba(36,36,36,1)"
          backgroundColor="rgba(255, 255, 254, 0)"
          onClick={() => {
            buttonThreeEightSixThreeFiveThreeSixNineOnClick();
          } }
          {...getOverrideProps(overrides, "Button38635369")}
        ></Button>
      </Flex>
      <Flex
        justifyContent="flex-end"
        className={clases.botoncabeza}
      >
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
          children="Salir"
          color="white"
          onClick={signOut}
          {...getOverrideProps(overrides, "Frame 321")}
        >
        </Button>
      </Flex>
      <Flex
        justifyContent="flex-end"
        className={clases.botonmenu}
      >
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
          backgroundColor="transparent"
          children="Menu"
          color="black"
          {...getOverrideProps(overrides, "Frame 321")}
          onClick={handleClick}
        >
        </Button>

      </Flex>

    </Flex>
    <Flex
        className={estadoBoton ? clases.botonactivado : clases.botondesactivado}
        direction="row"
        width="80%"
        height="400px"
        alignItems="center"
        position="fixed"
        justifyContent="space-between"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        borderRadius="60px"
        padding="24px 32px 24px 32px"
        marginLeft="10%"
        marginRight="10%"
        backgroundColor="rgba(255,255,255,0.902)"
      >
        <Flex
        justifyContent="center"
        className={estadoBoton ? clases.botonactivado : clases.botondesactivado}
      >
        <Button
          width="110px"
          height="60px"
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
          } }
          {...getOverrideProps(overrides, "Button3862483")}
        ></Button>
        <Button
          width="240px"
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
          } }
          {...getOverrideProps(overrides, "Button38635365")}
        ></Button>
        <Button
          width="110px"
          height="60px"
          borderRadius="15px"

          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Contacto"
          color="rgba(36,36,36,1)"
          backgroundColor="rgba(255, 255, 254, 0)"
          onClick={() => {
            buttonThreeEightSixThreeFiveThreeSixNineOnClick();
          } }
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
          children="Salir"
          color="white"
          onClick={signOut}
          {...getOverrideProps(overrides, "Frame 321")}
        >
        </Button> 
        </Flex>
        </Flex>
    </>
    
  );
}
