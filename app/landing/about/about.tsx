export default function About() {
  return (
    <>
      <section
        id="about"
        className="relative z-50 w-screen h-auto dark:bg-white"
      >
        <div className="p-32 flex flex-col justify-center">
          <h3 className=" text-black text-3xl text-center tracking-tighter font-semibold inline-block">
            About Neural Nexus
          </h3>
          <div className="pt-12 flex space-x-12">
            <div className="w-1/2 bento-grid">
              <div className="grid-item-1 dark:bg-blue"></div>
              <div className="grid-item-2 dark:bg-blue"></div>
              <div className="grid-item-3 dark:bg-blue"></div>
              <div className="grid-item-4 dark:bg-blue"></div>
            </div>
            <div className="flex flex-col w-1/2 space-y-10">
              {aboutContent.map((item) => (
                <div key={item.id} className="flex flex-col space-y-2">
                  <h6 className="font-medium text-lg tracking-tight">
                    {item.title}
                  </h6>
                  <p className="font-light text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const aboutContent = [
  {
    id: 1,
    title: "About Me",
    description:
      "Lorem ipsum dolor sit amet consectetur. Velit neque amet ornare\
                sed facilisi eu condimentum vitae massa. Malesuada sed id lectus\
                diam. Tincidunt nibh viverra cras posuere sit phasellus ac dui.\
                Amet eget convallis quis dapibus vitae hendrerit eget facilisi\
                cras.",
  },
  {
    id: 2,
    title: "What is Neural Nexus?",
    description:
      "Lorem ipsum dolor sit amet consectetur. Velit neque amet ornare\
                sed facilisi eu condimentum vitae massa. Malesuada sed id lectus\
                diam. Tincidunt nibh viverra cras posuere sit phasellus ac dui.\
                Amet eget convallis quis dapibus vitae hendrerit eget facilisi\
                cras.",
  },
  {
    id: 3,
    title: "The Models",
    description:
      "Lorem ipsum dolor sit amet consectetur. Velit neque amet ornare\
                sed facilisi eu condimentum vitae massa. Malesuada sed id lectus\
                diam. Tincidunt nibh viverra cras posuere sit phasellus ac dui.\
                Amet eget convallis quis dapibus vitae hendrerit eget facilisi\
                cras.",
  },
];
