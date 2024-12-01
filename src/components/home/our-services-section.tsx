"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  AppliancesComponent,
  CustomCabinetsComponent,
  ElectricalComponent,
  FurnitureComponent,
  MinorRepairsComponent,
  PlumbingComponent,
} from "./our-services-components";
import Image from "next/image";

import PaintingIcon from "@/assets/our-services/painting.svg";
import WashingMachine from "@/assets/our-services/washing-machine.svg";
import Kitchen from "@/assets/our-services/kitchen.svg";
import Plumbing from "@/assets/our-services/plumbing.svg";
import Electrical from "@/assets/our-services/electrical.svg";
import Furniture from "@/assets/our-services/furniture.svg";
import Repair from "@/assets/our-services/repair.svg";
import Cabinets from "@/assets/our-services/cabinets.svg";

export default function OurServicesSection() {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(true);

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 768);
  }, []);

  const dimension = useMemo(() => (isSmallScreen ? 40 : 60), [isSmallScreen]);

  const [itemName, setItemName] = useState<string>("cabinet");

  const buttonClassNames = useMemo(
    () =>
      "shadow-md py-8 h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] flex flex-col items-center justify-center",
    [],
  );

  return (
    <div id="services" className="py-16 lg:px-32 md:px-16 px-4">
      <h1 className="text-center text-[32px] lg:text-[42px] font-bold">
        Our Services
      </h1>
      <div className="grid grid-cols-3 gap-5 md:grid-cols-6 pt-16 pb-20 place-items-center place-content-center">
        <button
          className={buttonClassNames}
          onClick={() => setItemName("painting")}
        >
          <Image
            src={Cabinets}
            width={dimension}
            height={dimension}
            alt="Painting"
            className="mt-2"
          />
          <p className="text-xs font-semibold pt-2">Custom Cabinets</p>
        </button>
        <button
          className={buttonClassNames}
          onClick={() => setItemName("appliances")}
        >
          <Image
            src={WashingMachine}
            width={dimension}
            height={dimension}
            alt="Painting"
          />
          <p className="text-xs font-semibold">Appliances</p>
        </button>
        <button
          className={buttonClassNames}
          onClick={() => setItemName("plumbing")}
        >
          <Image
            src={Plumbing}
            width={dimension}
            height={dimension}
            alt="Painting"
          />
          <p className="text-xs font-semibold">Plumbing</p>
        </button>
        <button
          className={buttonClassNames}
          onClick={() => setItemName("electrical")}
        >
          <Image
            src={Electrical}
            width={dimension}
            height={dimension}
            alt="Painting"
          />
          <p className="text-xs font-semibold pt-2">Electrical</p>
        </button>
        <button
          className={buttonClassNames}
          onClick={() => setItemName("furniture")}
        >
          <Image
            className="mt-3.5"
            src={Furniture}
            width={isSmallScreen ? 30 : 40}
            height={isSmallScreen ? 30 : 40}
            alt="Painting"
          />
          <p className="text-xs font-semibold">Furniture</p>
        </button>
        <button
          className={buttonClassNames}
          onClick={() => setItemName("repair")}
        >
          <Image
            src={Repair}
            width={dimension}
            height={isSmallScreen ? 30 : 40}
            alt="Painting"
          />
          <p className="text-xs font-semibold">Minor Repairs</p>
        </button>
      </div>
      <div className="flex flex-col-reverse gap-6 lg:gap-16 lg:flex-row justify-evenly items-center lg:items-start">
        <AnimatePresence mode="wait" initial={false}>
          {itemName === "repair" ? (
            <MinorRepairsComponent />
          ) : itemName === "appliances" ? (
            <AppliancesComponent />
          ) : itemName === "plumbing" ? (
            <PlumbingComponent />
          ) : itemName === "electrical" ? (
            <ElectricalComponent />
          ) : itemName === "furniture" ? (
            <FurnitureComponent />
          ) : itemName === "painting" ? (
            <CustomCabinetsComponent />
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
