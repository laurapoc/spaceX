import { RocketDto } from "../types/rocketDto";
import { RocketModel } from "../types/rocketModel";

export const COL_NAMES = [
  "Rocket name",
  "Diameter",
  "Height",
  "Mass",
  "Cost per launch",
];

export const MOCKED_RETURNED_DATA: RocketModel[] = [
  {
    rocket_name: "Falcon",
    diameter: 1.68,
    height: 22.25,
    mass: 30146,
    cost_per_launch: 6700000,
  },
  {
    rocket_name: "Falcon Heavy",
    diameter: 12.2,
    height: 70,
    mass: 1420788,
    cost_per_launch: 90000000,
  },
];

export const MOCKED_RAW_RETURNED_DATA: RocketDto[] = [
  {
    id: 1,
    active: false,
    stages: 2,
    boosters: 0,
    cost_per_launch: 6700000,
    success_rate_pct: 40,
    first_flight: "2006-03-24",
    country: "Republic of the Marshall Islands",
    company: "SpaceX",
    height: {
      meters: 22.25,
      feet: 73,
    },
    diameter: {
      meters: 1.68,
      feet: 5.5,
    },
    mass: {
      kg: 30146,
      lb: 66460,
    },
    payload_weights: [
      {
        id: "leo",
        name: "Low Earth Orbit",
        kg: 450,
        lb: 992,
      },
    ],
    first_stage: {
      reusable: false,
      engines: 1,
      fuel_amount_tons: 44.3,
      burn_time_sec: 169,
      thrust_sea_level: {
        kN: 420,
        lbf: 9400,
      },
      thrust_vacuum: {
        kN: 480,
        lbf: 110000,
      },
    },
    second_stage: {
      reusable: false,
      engines: 1,
      fuel_amount_tons: 3.38,
      burn_time_sec: 378,
      thrust: {
        kN: 31,
        lbf: 7000,
      },
      payloads: {
        option_1: "composite fairing",
        composite_fairing: {
          height: {
            meters: 3.5,
            feet: 11.5,
          },
          diameter: {
            meters: 1.5,
            feet: 4.9,
          },
        },
      },
    },
    engines: {
      number: 1,
      type: "merlin",
      version: "1C",
      layout: "single",
      isp: {
        sea_level: 267,
        vacuum: 304,
      },
      engine_loss_max: 0,
      propellant_1: "liquid oxygen",
      propellant_2: "RP-1 kerosene",
      thrust_sea_level: {
        kN: 420,
        lbf: 94000,
      },
      thrust_vacuum: {
        kN: 480,
        lbf: 110000,
      },
      thrust_to_weight: 96,
    },
    landing_legs: {
      number: 0,
      material: null,
    },
    flickr_images: [
      "https://imgur.com/DaCfMsj.jpg",
      "https://imgur.com/azYafd8.jpg",
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Falcon_1",
    description:
      "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
    rocket_id: "falcon1",
    rocket_name: "Falcon 1",
    rocket_type: "rocket",
  },
];
