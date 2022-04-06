



const DisplayMessages = (props) => {
  
  return (
    <table className="table"> 
      <thead>
        <tr>
          <th></th>

        </tr>
      </thead>
      <tbody>
        {props.parentMessages.map((message) => {
          return (
            <tr>
              <tr>
                <td>{message.name}</td>
              </tr>
              <tr>
                <td>{message.post}</td>
              </tr>
              <tr>
                <td><button type="submit" className="btn btn-primary" style={{"margin-top": "1em"}}>👍 </button>
                <button type="submit" className="btn btn-primary" style={{"margin-top": "1em"}}>👎 </button></td>
              </tr>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayMessages;
