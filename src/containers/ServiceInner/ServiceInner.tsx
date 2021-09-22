import LayoutPage from "components/LayoutPage/LayoutPage";
import React, { FC } from "react";

export interface ServiceInnerProps {
  className?: string;
}

const ServiceInner: FC<ServiceInnerProps> = ({ className = "" }) => {
  return (
    <div>
      <LayoutPage isInner={true} heading="">
        <h2
          className={`flex items-center text-3xl leading-[115%] md:text-3xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 mb-8`}
        >
          🐬 ემოციური ინტელექტის კურსი
        </h2>
        <p>
          ანიმუსი გთავაზობთ ემოციური ინტელექტის კურსს 5-დან 17 წლამდე
          მოზარდებისთვის.
        </p>

        <h2 className="flex items-center text-3xl leading-[115%] md:text-xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 mt-8">
          რა არის ემოციური ინტელექტის კურსი?
        </h2>

        <p style={{ lineHeight: "1.8rem" }} className="mt-4">
          ინოვაციურ სამყაროში მეცნიერებმა ყველაზე წარმატებული ადამიანების
          კვლევის შედეგად აღმოაჩინეს, რომ წარმატებისთვის ემოციური ინტელექტის(EI)
          განვითარება ბევრად უფრო მნიშვნელოვანია, ვიდრე გონებრივი ინტელექტის
          (IQ). მარტივი მაგალითისთვის, რომ ავიღოთ ის უფრო მნიშვნელოვანი აღმოჩნდა
          თუ რამდენად კარგად იცნობ შენს ემოციებსა და მართავ მათ, ვიდრე რამდენი
          წიგნი გაქვს წაკითხული ან რამდენად სწრაფად ხსნი მათემატიკის ამოცანებს.
          თუმცა გონებრივი ინტელექტიც თავისთავად მნიშვნელოვან როლს ასრულებს.
          კურსის მიზანია, საოცრად განვითარებულ თაობასთან ვითანამშრომლოთ,
          რომლებსაც უამრავი შესაძლებლობები და დახვეწილი უნარები აქვთ, და კიდევ
          უფრო მაღალი ემოციური ინტელექტი უნდათ, რომ ჰქონდეთ.
        </p>

        <p style={{ lineHeight: "1.8rem" }} className="mt-4">
          კურსის მიზანია, საოცრად განვითარებულ თაობასთან ვითანამშრომლოთ,
          რომლებსაც უამრავი შესაძლებლობები და დახვეწილი უნარები აქვთ, და კიდევ
          უფრო მაღალი ემოციური ინტელექტი უნდათ, რომ ჰქონდეთ.
        </p>

        <p style={{ lineHeight: "1.8rem" }} className="mt-4">
          ჩვენ გვჯერა, ადამიანი რაც უფრო ადრეულ ასაკში ისწავლის საკუთარ თავზე
          მუშაობას, ზრდასრულობაში შედარებით ნაკლები ემოციური სირთულეები შეიძლება
          შეექმნას.
        </p>

        <h2 className="flex items-center text-3xl leading-[115%] md:text-xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 mt-8">
          კურსის ფარგლებში შეხვედრები დაეთმობა ისეთ საკითხებს, როგორებიცაა:
        </h2>
        
        <div className="ml-10 mt-10 mb-10">
        <li className="mt-4">თვითპრეზენტაცია</li>
        <li className="mt-4">საკუთარი ემოციური ინტელექტის დადგენა</li>
        <li className="mt-4">ძირითადი ემოციები</li>
        <li className="mt-4">ფსიქოლოგიური პორტრეტი</li>
        <li className="mt-4">ასაკობრივი ემოციური გამოწვევები</li>
        <li className="mt-4">სოციალური როლები და ურთიერთობები</li>
        <li className="mt-4">
          პოზიტიური აზროვნება (არ არსებობს წაგება, არსებობს მოგება და
          გამოცდილება)
        </li>
        <li className="mt-4">სხეულის ენა</li>
        <li className="mt-4">ეფექტური კომუნიკაცია, კონფლიქტების რეგულაცია</li>
        <li className="mt-4">ემპათიის უნარი</li>
        <li className="mt-4">ბრაზი და პატიება</li>
        <li className="mt-4">როგორ შევიქმნათ მოტივაცია</li>
        <li className="mt-4">მოსმენა, ყურადღების კონცენტრაცია</li>
        <li className="mt-4">ემოციების მართვა </li>
        <li className="mt-4">სხეულზე ორიენტირებული თერაპია - იოგა</li>
        </div>

        <p style={{ lineHeight: "1.8rem" }} className="mt-4">
          შეხვედრები წარიმართება პრაქტიკული სავარჯიშოებით, მეტაფორული ბარათებით,
          პროექციული ტესტებითა და თეორიული ინფორმაციით. ჯგუფური შეხვედრები
          ინტერაქციული იქნება თითოეულ წევრთან.
        </p>

        <p style={{ lineHeight: "1.8rem" }} className="mt-4">
          კურსი მოიცავს განმავითარებელ, კოგნიტურ, ფუნქციონალურ აქტივობებს,
          რომლებიც ემოციურ და ქცევით თვითრეგულირებას უწყობს ხელს.
        </p>

        <p style={{ lineHeight: "1.8rem" }} className="mt-4">
          შეხვედრებს წარმართავენ ანიმუსის გუნდის ფსიქოლოგები
        </p>
      </LayoutPage>
    </div>
  );
};

export default ServiceInner;
