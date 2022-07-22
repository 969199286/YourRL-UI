import SingleLongToShort from "./SingleLongToShort";
import { v4 } from "uuid";

const LTSs = (props) => {
  let LTSList = <h2>Convert your first URL!</h2>;

  if (props.items.length > 0) {
    LTSList = (
      <ul>
        {props.items.map((LTS) => (
          LTS.shortUrl.length !== 0 ? 
            <SingleLongToShort key={v4()}>
              {LTS.longUrl}   http://localhost:8080/yourl/{LTS.shortUrl}
            </SingleLongToShort>
           : 
            <SingleLongToShort key={v4()}>
              {LTS.longUrl}   Invalid long URL
            </SingleLongToShort>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div> {LTSList}</div>
    </>
  );
};
export default LTSs;
