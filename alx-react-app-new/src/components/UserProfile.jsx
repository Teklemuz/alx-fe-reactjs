const UserProfile = (props) => {
    return (
      <div
        style={{
          border: '1px solid gray', 
          padding: '15px',      
          margin: '15px',            
        }}
      >
        <h2
          style={{
            color: 'blue',       
            fontSize: '18px',       
            margin: '0 0 10px 0'    
          }}
        >
          {props.name}
        </h2>
        <p
          style={{
            fontSize: '14px',      
            margin: '0 0 5px 0'     
          }}
        >
          Age: <span style={{ fontWeight: 'bold', color: 'darkgray' }}>{props.age}</span>
        </p>
        <p
          style={{
            fontSize: '14px',       
            color: 'darkslategray',
            margin: '0'          
          }}
        >
          Bio: {props.bio}
        </p>
      </div>
    );
  };
  
  export default UserProfile;
  
