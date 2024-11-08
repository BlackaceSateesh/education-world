import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import '../../styles/homePage/FaqSection.css'
const FaqSection = () => {
  const [activeKey, setActiveKey] = useState(0);

  const handleSelect = (key) => {
    setActiveKey(key === activeKey ? null : key);
  };

  //   dummy
  const faqData = [
    {
      title: "Was this site built with Salient?",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, beatae non? Aspernatur, quae! Dolores consequuntur qui vel repellat."
    },
    {
      title: "Where can I purchase Salient?",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, beatae non? Aspernatur, quae! Dolores consequuntur qui vel repellat."
    },
    {
      title: "What is included with my purchase?",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, beatae non? Aspernatur, quae! Dolores consequuntur qui vel repellat."
    },
    {
      title: "How can I get support after purchasing?",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, beatae non? Aspernatur, quae! Dolores consequuntur qui vel repellat."
    },
    {
      title: "Why should I trust ThemeNectar?",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, beatae non? Aspernatur, quae! Dolores consequuntur qui vel repellat."
    },
  ];
  return (
    <>
      <div className="FaqSection">
        <div className="inner-section">
          <div className="SectionHeading">
            <h6>Frequently asked questions</h6>
          </div>
          <div className="inner-wrapper">
            <Accordion activeKey={activeKey} onSelect={handleSelect}>
              {faqData?.map((e, i) => {
                return (
                  <Accordion.Item className={activeKey === i ? 'show':''} key={`faq${i}`} eventKey={i}>
                    <Accordion.Header>
                      {e?.title}
                      {activeKey === i ? <FiMinusCircle /> :  <FiPlusCircle />}
                    </Accordion.Header>
                    <Accordion.Body>{e?.para}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
