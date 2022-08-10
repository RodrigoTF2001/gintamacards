import React from "react";
import { Carousel } from '@mantine/carousel';
import  Cards  from './Cards';
import { sliderImgs } from "../../sliderImgs";
import '../styles/mainVP.css'

export default function MainVP(){
    return(
        <main className="containerMain">
            <Carousel
             sx={{ maxWidth: 750 }} mx='auto' height={680} controlSize={50} align='center'controlsOffset="sm" loop>
                    <Carousel.Slide><Cards name={'Sakata Gintoki'} HP={"HP:1500"} attack={"ATK:750"} defense={"DEF:360"} imgs={sliderImgs[0]} /></Carousel.Slide>
                    <Carousel.Slide><Cards name={'Shimura Shinpachi'} HP={"HP:1000"} attack={"ATK:600"} defense={"DEF:400"} imgs={sliderImgs[1]} /></Carousel.Slide>
                    <Carousel.Slide><Cards name={'Kagura'} HP={"HP:1100"} attack={"ATK:900"} defense={"DEF:260"} imgs={sliderImgs[2]} /></Carousel.Slide>
                    <Carousel.Slide><Cards name={'Hijikata Toushirou'} HP={"HP:1300"} attack={"ATK:710"} defense={"DEF:420"} imgs={sliderImgs[3]} /></Carousel.Slide>
                    <Carousel.Slide><Cards name={'Sougo Okita'} HP={"HP:1200"} attack={"ATK:780"} defense={"DEF:300"} imgs={sliderImgs[4]} /></Carousel.Slide>
                    <Carousel.Slide><Cards name={'Kondou Isao'} HP={"HP:1650"} attack={"ATK:650"} defense={"DEF:500"} imgs={sliderImgs[5]} /></Carousel.Slide>
                    <Carousel.Slide><Cards name={'Katsura Kotaro'} HP={"HP:1350"} attack={"ATK:720"} defense={"DEF:320"} imgs={sliderImgs[6]} /></Carousel.Slide>
                    <Carousel.Slide><Cards name={'Takasugi Shinuske'} HP={"HP:1400"} attack={"ATK:780"} defense={"DEF:350"} imgs={sliderImgs[7]} /></Carousel.Slide>
                    <Carousel.Slide><Cards name={'Sadaharu'} HP={"HP:1150"} attack={"ATK:800"} defense={"DEF:280"} imgs={sliderImgs[8]} /></Carousel.Slide>
                    <Carousel.Slide><Cards name={'Elizabeth'} HP={"HP:???"} attack={"ATK:???"} defense={"DEF:???"} imgs={sliderImgs[9]} /></Carousel.Slide>
             </Carousel>
        </main>
    )
}