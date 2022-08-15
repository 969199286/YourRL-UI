import SingleLongToShort from "./SingleLongToShort";
import { v4 } from "uuid";
import classes from "./LTS.module.css";

const LTSs = (props) => {
  let LTSList = <h2>Convert your first URL!</h2>;

  const deleteHandler = (longUrl) => {
    props.onDeleteLTS(longUrl)
  }
  if (props.items.length > 0) {
    LTSList = (
      <ul className="bg-white sm:rounded-lg" >
        {props.items.map((LTS) => (
          <SingleLongToShort key={v4()} onDeleteHandler = {deleteHandler} longUrl={LTS.longUrl} shortUrl={LTS.shortUrl} />
        ))}
      </ul>
    );
  }

  return (
    <>
      <div className={classes.container}> {LTSList}</div>
    </>
  );
};
export default LTSs;
