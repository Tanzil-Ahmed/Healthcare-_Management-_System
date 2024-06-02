import { faqs } from "./../../assets/data/faqs";
import FaqItem from "./FaqItem";

const FaqList = () => {
  return (
    <u1 className="mt-[38px]">
      {faqs.map((item, index) => (
        <FaqItem item={item} key={index} />
      ))}
    </u1>
  );
};

export default FaqList;
