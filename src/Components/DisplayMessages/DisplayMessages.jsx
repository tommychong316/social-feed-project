import CustomButton from "../CustomButton/CustomButton";



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
                <td>{Date()}</td>
              </tr>
              <tr>
                <CustomButton message="👍"/> 
                <CustomButton message="👎"/>
              </tr>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayMessages;
