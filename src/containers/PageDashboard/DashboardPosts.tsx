import React from "react";
import NcImage from "components/NcImage/NcImage";
import Pagination from "components/Pagination/Pagination";

const people = [
  {
    id: 1,
    title: "ფსიქოლოგთან ვიზიტი",
    image:
      "https://images.unsplash.com/photo-1617059063772-34532796cdb5?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
    liveStatus: true,
    payment: "ელენე სიხარულიძე",
    date: "25 ოქტ, 18:30",
    visitid: "58524"
  },
  {
    id: 2,
    title: "ემოციური ინტელექტის ონლაინ კურსი",
    image:
      "https://images.unsplash.com/photo-1622987437805-5c6f7c2609d7?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
    liveStatus: false,
    payment: "ელენე სიხარულიძე",
    date: "25 ოქტ, 18:30",
    visitid: "11624"
  },
  {
    id: 3,
    title: "თვითშეფასების კურსი",
    image:
      "https://images.unsplash.com/photo-1617201277988-f0efcc14e626?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
    liveStatus: false,
    payment: "ეკატერინე ჩიქოვანი",
    date: "25 ოქტ, 18:30",
    visitid: "22624"
  },
  {
    id: 4,
    title: "EMDR თერაპია",
    image:
      "https://images.unsplash.com/photo-1622960748096-1983e5f17824?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
    liveStatus: false,
    payment: "სოფი კოკოლიშვილი",
    date: "25 ოქტ, 18:30",
    visitid: "44624"
  },
  {
    id: 5,
    title:
      "ფსიქიატრთან ვიზიტი",
    image:
      "https://images.unsplash.com/photo-1617202227468-7597afc7046d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
    liveStatus: false,
    payment: "სოფო სალია",
    date: "25 ოქტ, 18:30",
    visitid: "73624"
  },
  {
    id: 6,
    title:
      "ფსიქოლოგთან ვიზიტი",
    image:
      "https://images.unsplash.com/photo-1622978147823-33d5e241e976?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
    liveStatus: false,
    payment: "ელენე სიხარულიძე",
    date: "25 ოქტ, 18:30",
    visitid: "12624"
  },
];

const DashboardPosts = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full px-1 sm:px-6 lg:px-8">
          <div className="shadow dark:border dark:border-neutral-800 overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
              <thead className="bg-neutral-50 dark:bg-neutral-800">
                <tr className="text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider">
                  <th scope="col" className="px-6 py-3">
                    შეხვედრის ტიპი
                  </th>
                  <th scope="col" className="px-6 py-3">
                    კოდი
                  </th>
                  <th scope="col" className="px-6 py-3">
                    თარიღი
                  </th>
                  <th scope="col" className="px-6 py-3">
                    სტატუსი
                  </th>
                  <th scope="col" className="px-6 py-3">
                    თერაპევტი
                  </th>

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800">
                {people.map((item) => (
                  <tr key={item.id}>
                    <td className="px-2 py-4">
                      <div className="flex items-center lg:w-auto max-w-md overflow-hidden">
                        {/* <NcImage
                          containerClassName="flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden lg:h-14 lg:w-14"
                          src={item.image}
                        /> */}
                        
                        <div className="ml-4 flex-grow">
                          <h2 className="inline-flex line-clamp-2 text-sm font-semibold  dark:text-neutral-300">
                            {item.title}
                          </h2>
                        </div>
                      </div>
                    </td> <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 font-semibold dark:text-neutral-400">
                      <span> {item.visitid}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
                      <span> {item.date}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.liveStatus ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-teal-100 text-teal-900 lg:text-sm">
                          მიმდინარე
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-sm text-neutral-500 dark:text-neutral-400 rounded-full">
                          დასრულებული
                        </span>
                      )}
                    </td>
                  
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
                      <span> {item.payment}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-neutral-300">
                      {/* <a
                        href="/#"
                        className="text-primary-800 dark:text-primary-500 hover:text-primary-900"
                      >
                        შეცვლა
                      </a>
                      {` | `} */}
                      <a
                        href="/#"
                        className="text-rose-600 hover:text-rose-900"
                      >
                        გაუქმება
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Pagination />
    </div>
  );
};

export default DashboardPosts;
