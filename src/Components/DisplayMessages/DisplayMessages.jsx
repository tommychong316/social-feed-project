const DisplayMessages = (props) => {
  

  
  
  
  return (
    <table>
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
                <td><button>👍 </button></td>
                <td><button>👎 </button></td>
              </tr>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayMessages;
