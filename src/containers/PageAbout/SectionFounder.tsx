import Heading from "components/Heading/Heading";
import NcImage from "components/NcImage/NcImage";
import React from "react";

export interface People {
  id: string;
  name: string;
  job: string;
  avatar: string;
}

const FOUNDER_DEMO: People[] = [
  {
    id: "1",
    name: `ელენე სიხარულიძე`,
    job: "დამფუძნებელი & ფსიქოლოგი",
    avatar:
      "https://i.ibb.co/X70QT9N/elene.jpg",
  },
  {
    id: "4",
    name: `ეკატერინე ჩიქოვანი`,
    job: "პედაგოგი, კონსულტანტი",
    avatar:
      "https://scontent.ftbs6-1.fna.fbcdn.net/v/t1.18169-1/c0.25.200.200a/p200x200/22449792_1656775704394824_3719078766154811969_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=0r-_Dl9MdMYAX-JVvcn&_nc_ht=scontent.ftbs6-1.fna&oh=9b1470dfd802f43ff53a5ad07e814e17&oe=6150E041",
  },
  {
    id: "3",
    name: `ხატია მარჯანიძე`,
    job: "სტაჟიორი ფსიქოლოგიის განხრით",
    avatar:
      "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.6435-1/p200x200/239767870_3123695504554511_7415423464326308638_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=QSaKPccPeLUAX_b_qQv&_nc_ht=scontent.ftbs6-2.fna&oh=3cb0017cffb50cab652fc304a5663c8d&oe=61521B90",
  },
  {
    id: "2",
    name: `ლაშა მირზელაშვილი`,
    job: "ღმერთკაცი, მამამთავარი",
    avatar:
      "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.6435-9/199413147_4033353056747354_8088682802824212740_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=olZcyZwTgRIAX-jhEKY&_nc_ht=scontent.ftbs6-2.fna&oh=a59f1142f2078ec1c5c6c864ba2849ad&oe=61530DA9",
  },
];

const SectionFounder = () => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading
        desc="გაეცანით ჩვენს მაღალკვალიფიციურ და კრეატიულ გუნდს"
      >
        🤝 ანიმუსის გუნდი
      </Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="max-w-sm">
            <NcImage
              containerClassName="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden"
              className="absolute inset-0 object-cover"
              src={item.avatar}
            />
            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
              {item.name}
            </h3>
            <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;
