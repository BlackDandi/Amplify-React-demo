import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import dayjs from 'dayjs';
import { Divider, Flex,Text } from '@aws-amplify/ui-react';
export default function SalaSwiper() {
    const [value, setValue] = React.useState(dayjs());

    const deshabilitarDomingos = (date) => {
        // Deshabilitar domingos
        return date.day() === 0; // 0 representa domingo
      };
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Flex
                width="100%"
                display="flex"
                direction="column"
                alignItems="flex-start"
            >
            <Text children="Capacidad: 10 a 15 personas"></Text>
            <Text children="Proyectores: 1"></Text>
            <Text children="Equipo de computo: 1"></Text>
            <Text children="Sillas: 1"></Text>
            <Text children="Mesas: 1"></Text>
            </Flex>
        </SwiperSlide>
        <SwiperSlide >
            <Flex 
            direction="row"
            display="flex"
            >
                <Flex
                    width="unset"
                    display="flex"
                    alignItems="flex-start"
                    padding="20px 0px 0px 0px"
                >
                        
                    <DatePicker
                        minDate={dayjs()}  
                        value={value}  
                        dateAdapter={AdapterDayjs}
                        shouldDisableDate={deshabilitarDomingos}
                        onChange={(newValue) => setValue(dayjs(newValue))}
                    />
                    
                </Flex>
                <Flex
                    width="unset"
                    display="flex"
                    alignItems="flex-start"
                    padding="20px 0px 0px 0px"
                >
                    <DatePicker
                        label="Control"
                        minDate={dayjs()}  
                        value={value}  
                        onChange={(newValue) => setValue(dayjs(newValue))}
                    />
                </Flex>
            </Flex>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}