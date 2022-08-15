const SingleLongToShort = (props) => {
  return (
    <li className="flex w-full item-center justify-between py-3 shadow-inner  border border-black border-3">
      <div className="flex items-center px-3 w-1/2">
        <span>{props.longUrl}</span>
      </div>
      <div className="flex items-center justify-between w-2/5 px-4">
        <a href={"http://localhost:8081/yourl/" + props.shortUrl}>
          <span>{"http://localhost:8081/yourl/" + props.shortUrl}</span>
        </a>
        <button
          type="button"
          onClick={() => {
            props.onDeleteHandler(props.longUrl);
          }}
          className="inline-flex items-center mx-3 px-4 py-2 border border-transparent text-sm font-medium bg-[#FCA5A5] hover:bg-[#F87171] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default SingleLongToShort;
